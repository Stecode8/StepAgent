// =============================================================
// CONFIG
// =============================================================
const SHEET_ID = '1CmvRYfDLvv94PhqnQM_4qWkGw3_sRaPrsxETCAD-8Rc';

// Each tab with its gid and display name (skip MENU and ARCHIVE)
const TABS = [
    { name: 'New Arrival',        gid: '3886014' },
    { name: 'Shoes',              gid: '230384323' },
    { name: 'Hoodies & Jackets',  gid: '1398944110' },
    { name: 'Hoodies/Sweaters',   gid: '1229125430' },
    { name: 'Bags',               gid: '441086967' },
    { name: 'More Clothes',       gid: '1536467206' },
    { name: 'T-Shirts',           gid: '1900197506' },
    { name: 'Jeans/Pants',        gid: '290039758' },
    { name: 'Electronics',        gid: '147452554' },
    { name: 'Accessories',        gid: '2103333693' },
];

const SHEET2_ID = '1VZpaxdbRCmt8jY_aVcu36bQLfIqMRtzUmTZeRGUr4gU';
const SHEET2_TABS = [
    { name: 'Budget Finds', gid: '0' },
];

const SHEET3_ID = '1Wn1aauYDOiD23AWl9wDipOEPVIh4pJF-Rja-WfcVS5A';
const SHEET3_TABS = [
    { name: 'Video Finds', gid: '0' },
];

const REFRESH_INTERVAL = 5 * 60 * 1000;

// Only these Google domains allow cross-origin image loading.
// docs.google.com/sheets-images-rt/ has cross-origin-resource-policy: same-site
// and MUST be proxied through wsrv.nl.
function isCrossOriginSafe(url) {
    return /googleusercontent\.com|ggpht\.com|googleapis\.com/i.test(url);
}

// =============================================================
// APP STATE
// =============================================================
let allProducts = [];
let currentFiltered = [];
let activeCategory = 'all';
let searchQuery = '';

// =============================================================
// DOM REFERENCES
// =============================================================
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const gridEl = document.getElementById('product-grid');
const noResultsEl = document.getElementById('no-results');
const categoryTabsEl = document.getElementById('category-tabs');
const searchInput = document.getElementById('search-input');
const priceSortEl = document.getElementById('price-sort');
let priceSort = 'default';

// Fade-in observer — animates cards as they enter the viewport
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('card-visible');
            cardObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });

// Delegated click handler for product cards (one listener, not one per card)
gridEl.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const idx = parseInt(card.dataset.index);
    const p = currentFiltered[idx];
    if (!p) return;
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
    const bigImg = p.photo
        ? (isCrossOriginSafe(p.photo) ? p.photo.replace(/=w\d+-h\d+$/, '=w800-h800') : `https://wsrv.nl/?url=${encodeURIComponent(p.photo)}&w=800&h=800&fit=cover`)
        : placeholder;
    document.getElementById('modal-img').src = bigImg;
    document.getElementById('modal-img').alt = p.name;
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-price').textContent = p.price;
    document.getElementById('modal-buy-btn').href = p.link;
    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden', 'modal-closing');
    document.body.style.overflow = 'hidden';
});

// =============================================================
// HTML PARSING — scrape the htmlview to get images + affiliate links
// =============================================================
function buildHtmlUrl(sheetId, gid) {
    return `https://docs.google.com/spreadsheets/d/${sheetId}/htmlview/sheet?gid=${gid}`;
}

function parseHtmlSheet(html, categoryName) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll('tr');
    const products = [];

    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length < 4) continue;

        // Column A = name, B = photo, C = price, D = affiliate link, E = source
        const nameCell = cells[0];
        const photoCell = cells[1];
        const priceCell = cells[2];
        const linkCell = cells[3];
        const sourceCell = cells[4];

        const name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
        const price = (priceCell.textContent || '').trim();

        // Skip non-product rows
        if (!name || name.toLowerCase() === 'item name') continue;
        if (name.includes('CTRL') || name.includes('IMPORTANT') || name.includes('⬅') || name.includes('➡')) continue;
        if (name === 'BEST SELLING ITEMS') continue;

        // Skip rows with multiple prices (summary rows)
        if (price.includes(' ') && price.split('$').length > 2) continue;

        // Get image URL from column B — try <img> tag first, then text URL
        const img = photoCell.querySelector('img');
        let photo = img ? img.getAttribute('src') : '';
        if (!photo) {
            const text = (photoCell.textContent || '').trim();
            if (text.startsWith('http')) photo = text;
        }
        // Upscale thumbnail: replace size params for higher resolution
        if (photo) {
            photo = photo.replace(/=w\d+-h\d+$/, '=w400-h400');
        }

        // Get affiliate link from column D (the <a> href)
        // The href goes through Google redirect, extract the actual URL
        const linkAnchor = linkCell.querySelector('a');
        let link = '';
        if (linkAnchor) {
            const href = linkAnchor.getAttribute('href') || '';
            // Google wraps links as: https://www.google.com/url?q=ACTUAL_URL&sa=...
            const match = href.match(/[?&]q=([^&]+)/);
            if (match) {
                link = decodeURIComponent(match[1]);
            } else {
                link = href;
            }
        }

        // Fix malformed URLs: if query params use & without a leading ?, fix it
        if (link && !link.includes('?') && link.includes('&')) {
            link = link.replace('&', '?');
        }

        // Replace any invite code with our affiliate code, or append if missing
        if (/inviteCode=/i.test(link)) {
            link = link.replace(/inviteCode=[^&]*/i, 'inviteCode=M3RAMDINI');
        } else if (link) {
            link += (link.includes('?') ? '&' : '?') + 'inviteCode=M3RAMDINI';
        }

        if (!link) continue;

        // Skip products with no price or $0
        if (!price || price === '$0' || price === '$0.00' || price === '0') continue;

        // Extract weidian item ID from affiliate link for fallback image loading
        let weidianId = '';
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        // Skip products with no photo AND no weidian fallback
        if (!photo && !weidianId) continue;

        products.push({ name, price, photo, link, category: categoryName, weidianId });
    }

    return products;
}

// Parser for sheet2 (column order: A=name, B=price, C=photo, D=link)
function parseHtmlSheet2(html, categoryName) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll('tr');
    const products = [];

    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length < 4) continue;

        const nameCell = cells[0];
        const priceCell = cells[1];
        const photoCell = cells[2];
        const linkCell = cells[3];

        const name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
        const price = (priceCell.textContent || '').trim();

        // Skip non-product rows
        if (!name || name.toLowerCase() === 'item name') continue;
        if (name.includes('CTRL') || name.includes('IMPORTANT') || name.includes('⬅') || name.includes('➡')) continue;
        if (name === 'BEST SELLING ITEMS') continue;
        if (price.includes(' ') && price.split('$').length > 2) continue;

        // Get image: try <img> tag first, then fall back to URL text in cell
        const img = photoCell.querySelector('img');
        let photo = img ? img.getAttribute('src') : '';
        if (!photo) {
            const text = (photoCell.textContent || '').trim();
            if (text.startsWith('http')) photo = text;
        }
        if (photo) {
            photo = photo.replace(/=w\d+-h\d+$/, '=w400-h400');
        }

        // Get affiliate link from column D
        const linkAnchor = linkCell.querySelector('a');
        let link = '';
        if (linkAnchor) {
            const href = linkAnchor.getAttribute('href') || '';
            const match = href.match(/[?&]q=([^&]+)/);
            if (match) {
                link = decodeURIComponent(match[1]);
            } else {
                link = href;
            }
        }
        if (!link) {
            // Fall back to text content if no <a> tag
            const text = (linkCell.textContent || '').trim();
            if (text.startsWith('http')) link = text;
        }

        if (link && !link.includes('?') && link.includes('&')) {
            link = link.replace('&', '?');
        }

        // Replace any invite code with our affiliate code, or append if missing
        if (/inviteCode=/i.test(link)) {
            link = link.replace(/inviteCode=[^&]*/i, 'inviteCode=M3RAMDINI');
        } else if (link) {
            link += (link.includes('?') ? '&' : '?') + 'inviteCode=M3RAMDINI';
        }

        if (!link) continue;
        if (!price || price === '$0' || price === '$0.00' || price === '0') continue;

        let weidianId = '';
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        if (!photo && !weidianId) continue;

        products.push({ name, price, photo, link, category: categoryName, weidianId });
    }

    return products;
}

// =============================================================
// FETCH PRODUCTS
// =============================================================
async function fetchProducts() {
    loadingEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    gridEl.innerHTML = '';
    noResultsEl.classList.add('hidden');

    try {
        const results1 = await Promise.allSettled(
            TABS.map(async (tab) => {
                const resp = await fetch(buildHtmlUrl(SHEET_ID, tab.gid));
                if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${tab.name}`);
                const html = await resp.text();
                return parseHtmlSheet(html, tab.name);
            })
        );

        const results2 = await Promise.allSettled(
            SHEET2_TABS.map(async (tab) => {
                const resp = await fetch(buildHtmlUrl(SHEET2_ID, tab.gid));
                if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${tab.name}`);
                const html = await resp.text();
                return parseHtmlSheet2(html, tab.name);
            })
        );

        const results3 = await Promise.allSettled(
            SHEET3_TABS.map(async (tab) => {
                const resp = await fetch(buildHtmlUrl(SHEET3_ID, tab.gid));
                if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${tab.name}`);
                const html = await resp.text();
                return parseHtmlSheet(html, tab.name);
            })
        );

        // Collect successful results, log failures
        const allResults = [...results1, ...results2, ...results3];
        const failed = allResults.filter(r => r.status === 'rejected');
        failed.forEach(r => console.error('Tab fetch failed:', r.reason));

        allProducts = allResults
            .filter(r => r.status === 'fulfilled')
            .flatMap(r => r.value);

        if (allProducts.length === 0 && failed.length > 0) {
            throw failed[0].reason;
        }
        buildCategoryTabs();
        renderProducts();
        loadingEl.classList.add('hidden');
    } catch (err) {
        console.error('Failed to fetch products:', err);
        loadingEl.classList.add('hidden');
        errorEl.classList.remove('hidden');
    }
}

// =============================================================
// CATEGORY TABS
// =============================================================
function buildCategoryTabs() {
    const categories = [...new Set(allProducts.map(p => p.category))];
    categoryTabsEl.innerHTML = '';

    const prioritized = ['Video Finds', 'Budget Finds'];
    for (const name of [...prioritized].reverse()) {
        const idx = categories.indexOf(name);
        if (idx > -1) {
            categories.splice(idx, 1);
            categories.unshift(name);
        }
    }

    addPill('All', 'all');
    for (const cat of categories) {
        addPill(cat, cat);
    }
}

function addPill(label, value) {
    const btn = document.createElement('button');
    btn.className = 'category-pill' + (activeCategory === value ? ' active' : '');
    btn.textContent = label;
    btn.dataset.category = value;
    btn.addEventListener('click', () => setCategory(value));
    categoryTabsEl.appendChild(btn);
}

function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.category-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === cat);
    });
    renderProducts(true);
}

// =============================================================
// SEARCH
// =============================================================
let searchDebounce = null;
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => renderProducts(true), 200);
});

priceSortEl.addEventListener('change', (e) => {
    priceSort = e.target.value;
    renderProducts(true);
});

// =============================================================
// RENDER
// =============================================================
function renderProducts(skipAnimation) {
    let filtered = allProducts;

    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery)
        );
    }

    // Sort products with photos first, no-photo products at the end
    filtered.sort((a, b) => (b.photo ? 1 : 0) - (a.photo ? 1 : 0));

    // Apply price sort if selected
    if (priceSort === 'low' || priceSort === 'high') {
        filtered.sort((a, b) => {
            const pa = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
            const pb = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
            return priceSort === 'low' ? pa - pb : pb - pa;
        });
    }

    if (filtered.length === 0 && allProducts.length > 0) {
        gridEl.style.minHeight = '';
        gridEl.innerHTML = '';
        noResultsEl.classList.remove('hidden');
        return;
    }

    noResultsEl.classList.add('hidden');
    currentFiltered = filtered;

    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";

    // Lock grid height before replacing content to prevent layout shift
    const prevHeight = gridEl.offsetHeight;
    if (skipAnimation && prevHeight > 0) {
        gridEl.style.minHeight = prevHeight + 'px';
    }

    // Build new DOM in a fragment to avoid intermediate reflows
    const frag = document.createDocumentFragment();
    filtered.forEach((p, i) => {
        const imgSrc = p.photo
            ? (isCrossOriginSafe(p.photo) ? p.photo : `https://wsrv.nl/?url=${encodeURIComponent(p.photo)}&w=400&h=400&fit=cover`)
            : placeholder;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.index = i;

        const img = document.createElement('img');
        img.id = 'pimg-' + i;
        img.src = imgSrc;
        img.alt = p.name;
        img.loading = i < 10 ? 'eager' : 'lazy';
        img.dataset.weidian = p.weidianId || '';
        img.dataset.originalSrc = p.photo || '';
        img.onerror = function() {
            const orig = this.dataset.originalSrc;
            if (orig && this.src !== orig) {
                // Try the original URL directly
                this.src = orig;
            } else if (orig && !this.dataset.proxyRetried) {
                // Try through proxy as last resort
                this.dataset.proxyRetried = '1';
                this.src = 'https://wsrv.nl/?url=' + encodeURIComponent(orig) + '&w=400&h=400&fit=cover';
            } else {
                this.onerror = null;
                this.src = placeholder;
            }
        };

        const info = document.createElement('div');
        info.className = 'product-info';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'product-name';
        nameDiv.textContent = p.name;

        const priceDiv = document.createElement('div');
        priceDiv.className = 'product-price';
        priceDiv.textContent = p.price;

        info.appendChild(nameDiv);
        info.appendChild(priceDiv);
        card.appendChild(img);
        card.appendChild(info);

        // First 10 cards visible immediately (above the fold), rest animate in
        if (skipAnimation || i < 10) {
            card.classList.add('card-visible');
        }

        frag.appendChild(card);
    });

    gridEl.innerHTML = '';
    gridEl.appendChild(frag);

    // Release the locked height after the new content is in the DOM
    if (skipAnimation) {
        requestAnimationFrame(() => { gridEl.style.minHeight = ''; });
    }

    // Animate remaining cards as they scroll into view
    if (!skipAnimation) {
        gridEl.querySelectorAll('.product-card:not(.card-visible)').forEach(card => {
            card.classList.add('card-animate');
            cardObserver.observe(card);
        });
    }

    // Load missing images one at a time from weidian
    loadMissingImages();
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeAttr(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// =============================================================
// HEADER HIDE/SHOW ON SCROLL
// =============================================================
let lastScrollY = 0;
let scrollTicking = false;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY && currentY > 80) {
                header.classList.add('header-hidden');
                header.classList.remove('header-compact');
            } else if (currentY <= 5) {
                header.classList.remove('header-hidden');
                header.classList.remove('header-compact');
            } else {
                header.classList.remove('header-hidden');
                header.classList.add('header-compact');
            }
            lastScrollY = currentY;
            scrollTicking = false;
        });
    }
}, { passive: true });

// =============================================================
// FALLBACK: Load missing images one at a time via weidian JSONP
// =============================================================
const imgCache = {};

function weidianImage(itemId) {
    return new Promise(resolve => {
        if (imgCache[itemId]) return resolve(imgCache[itemId]);

        const cb = '_wd' + Math.random().toString(36).slice(2);
        const timeout = setTimeout(() => { done(''); }, 10000);

        function done(url) {
            clearTimeout(timeout);
            delete window[cb];
            const el = document.getElementById('s_' + cb);
            if (el) el.remove();
            if (url) imgCache[itemId] = url;
            resolve(url);
        }

        window[cb] = function(data) {
            let img = '';
            try {
                const attrs = data?.result?.attrList || [];
                for (const a of attrs) {
                    if (a.attrValues?.[0]?.img) { img = a.attrValues[0].img; break; }
                }
            } catch(e) {}
            done(img);
        };

        const s = document.createElement('script');
        s.id = 's_' + cb;
        s.src = 'https://thor.weidian.com/detail/getItemSkuInfo/1.0?callback=' + cb +
                '&param=' + encodeURIComponent(JSON.stringify({itemId: itemId}));
        s.onerror = () => done('');
        document.body.appendChild(s);
    });
}

async function loadMissingImages() {
    const imgs = document.querySelectorAll('img[data-weidian]');
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";

    for (const img of imgs) {
        const wid = img.dataset.weidian;
        if (!wid) continue;
        if (img.src !== placeholder && !img.src.startsWith('data:')) continue;

        // Check cache
        if (imgCache[wid]) {
            img.src = `https://wsrv.nl/?url=${encodeURIComponent(imgCache[wid])}&w=400&h=400&fit=cover`;
            continue;
        }

        const url = await weidianImage(wid);
        if (url) {
            img.src = `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=400&h=400&fit=cover`;
        }

        // Small delay between each request
        await new Promise(r => setTimeout(r, 200));
    }
}

// =============================================================
// PRODUCT MODAL CLOSE
// =============================================================
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.add('modal-closing');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('modal-closing');
        document.body.style.overflow = '';
    }, 250);
}

document.querySelector('.product-modal-close').addEventListener('click', closeProductModal);
document.querySelector('.product-modal-backdrop').addEventListener('click', closeProductModal);

// =============================================================
// INIT
// =============================================================
fetchProducts();
setInterval(fetchProducts, REFRESH_INTERVAL);
