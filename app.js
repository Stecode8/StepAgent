// =============================================================
// CONFIG
// =============================================================
const SHEET_ID = '1i-k661c5oEV_i0LP_qRDrnBabGHXbdBYNFyypLAyU1s';

const TABS = [
    { name: '\u{1F525}Trending Now \u{1F525}',        gid: '1437970547' },
    { name: '\u{1F50D}Latest Finds \u{1F50D}',        gid: '1185828767' },
    { name: '\u{1F45E}SHOES\u{1F45E}',                gid: '623384649' },
    { name: '\u{1F97C}Hoodies and Pants\u{1F456}',    gid: '852587554' },
    { name: '\u{1F9E5}Coats and Jackets\u{1F9E5}',    gid: '904819645' },
    { name: '\u{1F455}T-shirt and shorts\u{1FA73}',   gid: '764098395' },
    { name: '\u{1F45C} Accessories\u{1F45C}',         gid: '1695680711' },
    { name: '\u{1F3A7}Electronic products\u{1F3A7}',  gid: '1234283086' },
    { name: '\u26BD2026 FIFA World Cup\u26BD',        gid: '1581275900' },
];

const SHEET3_ID = '1Wn1aauYDOiD23AWl9wDipOEPVIh4pJF-Rja-WfcVS5A';
const SHEET3_TABS = [
    { name: 'Video Finds', gid: '0' },
];

const SHEET2_ID = '1VZpaxdbRCmt8jY_aVcu36bQLfIqMRtzUmTZeRGUr4gU';
const SHEET2_TABS = [
    { name: 'Budget Finds', gid: '0' },
];

// Secondary product sheet — same A=Name, B=Photo, C=Price, D=Link layout as
// SHEET3. Each tab's `name` is the *existing* category display label so its
// products land in that category's pill alongside the main sheet's items.
const SHEET4_ID = '1CmvRYfDLvv94PhqnQM_4qWkGw3_sRaPrsxETCAD-8Rc';
const SHEET4_TABS = [
    { name: '\u{1F50D}Latest Finds \u{1F50D}',         gid: '3886014' },    // New Arrival
    { name: '\u{1F45E}SHOES\u{1F45E}',                 gid: '230384323' },  // SHOES
    { name: '\u{1F9E5}Coats and Jackets\u{1F9E5}',     gid: '1398944110' }, // HOODIES & JACKETS
    { name: '\u{1F97C}Hoodies and Pants\u{1F456}',     gid: '1229125430' }, // HOODIES/SWEATERS
    { name: '\u{1F45C} Accessories\u{1F45C}',          gid: '441086967' },  // BAGS
    { name: '\u{1F455}T-shirt and shorts\u{1FA73}',    gid: '1536467206' }, // MORE CLOTHES
    { name: '\u{1F455}T-shirt and shorts\u{1FA73}',    gid: '1900197506' }, // T-SHIRT
    { name: '\u{1F97C}Hoodies and Pants\u{1F456}',     gid: '290039758' },  // JEANS/PANTS
    { name: '\u{1F3A7}Electronic products\u{1F3A7}',   gid: '147452554' },  // ELECTRONIC
    { name: '\u{1F45C} Accessories\u{1F45C}',          gid: '2103333693' }, // ACCESSORIES
];

const REFRESH_INTERVAL = 5 * 60 * 1000;

// =============================================================
// APP STATE
// =============================================================
let allProducts = [];
let currentFiltered = [];
let activeCategory = 'all';
let searchQuery = '';
const BATCH_SIZE = 20;
let renderedCount = 0;
let loadingMore = false;

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

// Build the rendered URL for a product photo. Google-hosted images (lh3/lh4/etc.
// .googleusercontent.com) already serve CORS-friendly headers and are fast, but
// wsrv.nl intermittently returns 404 when proxying them — load those direct.
// Everything else (e.g. Geili CDN) still needs the proxy to bypass CORP headers.
function photoUrl(src, w, h) {
    if (!src) return '';
    if (/(^|\.)googleusercontent\.com\//.test(src)) return src;
    return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&h=${h}&fit=cover`;
}

// Delegated click handler for product cards (one listener, not one per card)
gridEl.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const idx = parseInt(card.dataset.index);
    const p = currentFiltered[idx];
    if (!p) return;
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
    const bigImg = p.photo ? photoUrl(p.photo, 800, 800) : placeholder;
    document.getElementById('modal-img').src = bigImg;
    document.getElementById('modal-img').alt = p.name;
    document.getElementById('modal-name').textContent = p.name;
    if (p.eurPrice) {
        document.getElementById('modal-price').textContent = p.price + ' / ' + p.eurPrice;
    } else {
        document.getElementById('modal-price').textContent = p.price;
    }
    document.getElementById('modal-buy-btn').href = p.link;
    const qcBtn = document.getElementById('modal-qc-btn');
    if (p.qcLink) {
        qcBtn.href = p.qcLink;
        qcBtn.classList.remove('hidden');
    } else {
        qcBtn.classList.add('hidden');
    }
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
            photo = photo.replace(/=w\d+-h\d+$/, '=w800-h800');
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
            link = link.replace(/inviteCode=[^&]*/i, 'inviteCode=STEPAGENT');
        } else if (link) {
            link += (link.includes('?') ? '&' : '?') + 'inviteCode=STEPAGENT';
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

// =============================================================
// HTML PARSING — Budget Finds sheet (A=name, B=price, C=photo, D=link)
// Price format: "CNY X ≈ USD Y" — extract USD value
// Photo is an anchor href (image URL inside Google redirect), not an <img> tag
// =============================================================
function parseHtmlSheetBudget(html, categoryName) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll('tr');
    const products = [];

    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length < 4) continue;

        const name = (cells[0].textContent || '').trim().replace(/\s+/g, ' ');
        const priceRaw = (cells[1].textContent || '').trim();

        if (!name || name.toLowerCase() === 'item name') continue;

        // Extract USD value from "CNY 68.31≈ USD 9.28" → "$9.28"
        const usdMatch = priceRaw.match(/USD\s*([\d.]+)/i);
        if (!usdMatch) continue;
        const price = '$' + usdMatch[1];

        // Photo: try <img> first, then anchor href, then text URL
        const photoCell = cells[2];
        let photo = '';
        const img = photoCell.querySelector('img');
        if (img) {
            photo = img.getAttribute('src') || '';
        }
        if (!photo) {
            const photoLink = extractLink(photoCell);
            if (photoLink && photoLink.startsWith('http')) photo = photoLink;
        }
        if (!photo) {
            const t = (photoCell.textContent || '').trim();
            if (t.startsWith('http')) photo = t;
        }

        // Affiliate link
        let link = extractLink(cells[3]);
        link = fixLink(link);
        if (!link) continue;

        let weidianId = '';
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        if (!photo && !weidianId) continue;

        products.push({ name, price, photo, link, category: categoryName, weidianId });
    }

    return products;
}

// =============================================================
// SHARED HELPERS — link extraction & invite code
// =============================================================
function extractLink(cell) {
    const anchor = cell.querySelector('a');
    if (!anchor) return '';
    const href = anchor.getAttribute('href') || '';
    const match = href.match(/[?&]q=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : href;
}

function fixLink(link) {
    if (!link) return '';
    if (!link.includes('?') && link.includes('&')) {
        link = link.replace('&', '?');
    }
    if (/inviteCode=/i.test(link)) {
        link = link.replace(/inviteCode=[^&]*/i, 'inviteCode=STEPAGENT');
    } else {
        link += (link.includes('?') ? '&' : '?') + 'inviteCode=STEPAGENT';
    }
    return link;
}

// =============================================================
// HTML PARSING — new spreadsheet (4 products per row, 5 cols each)
// Layout per product: NAME | LINK | PRICE(USD) | IMAGE | QC
// Next row has EUR prices: _ | EUR1 | EUR2 | EUR3 | EUR4
// Products start at column index 1 (column 0 is empty)
// =============================================================
function parseHtmlSheetNew(html, categoryName) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = Array.from(doc.querySelectorAll('tr'));
    const products = [];

    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        const cells = row.querySelectorAll('td');
        if (cells.length < 6) continue;  // need at least col0 + 5 product cols

        // Check text in first two cells for skip logic
        const cell0Text = (cells[0].textContent || '').trim();
        const cell1Text = (cells[1].textContent || '').trim();

        // Skip header rows
        if (cell1Text === 'PRODUCT' || cell1Text.includes('LitbuyLINK')) continue;

        // Skip navigation/info rows
        const skipTexts = ['MOST POPULAR', 'CTRL', 'IMPORTANT', 'TELEGRAM',
                           'BEST FINDS', 'SIGN UP', 'USE CTRL', 'Click here'];
        const combinedText = cell0Text + ' ' + cell1Text;
        if (skipTexts.some(s => combinedText.includes(s))) continue;

        // Skip rows with no images (section headers, EUR continuation rows, nav rows)
        if (!row.querySelector('img')) continue;

        // Look ahead for EUR prices in the next row
        let eurPrices = [];
        if (r + 1 < rows.length) {
            const nextRow = rows[r + 1];
            const nextCells = nextRow.querySelectorAll('td');
            // EUR row has ~6 cells, no images
            if (nextCells.length <= 8 && !nextRow.querySelector('img')) {
                for (let e = 1; e < nextCells.length; e++) {
                    const t = (nextCells[e].textContent || '').trim();
                    if (t.includes('\u20AC') || t.includes('€')) {
                        eurPrices.push(t);
                    } else {
                        eurPrices.push('');
                    }
                }
            }
        }

        // Process up to 4 product groups of 5 columns each
        // Products start at column 1: [1-5], [6-10], [11-15], [16-20]
        for (let g = 0; g < 4; g++) {
            const base = 1 + g * 5;
            if (base + 4 >= cells.length) break;

            const nameCell  = cells[base];
            const linkCell  = cells[base + 1];
            const priceCell = cells[base + 2];
            const imgCell   = cells[base + 3];
            const qcCell    = cells[base + 4];

            const name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
            if (!name || name === 'PRODUCT' || name === 'LitbuyLINK') continue;
            if (name.includes('CTRL') || name.includes('IMPORTANT')) continue;

            // USD price (like "44.62$")
            const priceRaw = (priceCell.textContent || '').trim();
            const priceNum = priceRaw.replace(/[^\d.]/g, '');
            const usdPrice = priceNum ? ('$' + priceNum) : '';

            // EUR price from next row
            const eurPrice = eurPrices[g] || '';

            // Image
            const img = imgCell.querySelector('img');
            let photo = img ? img.getAttribute('src') : '';
            if (!photo) {
                const t = (imgCell.textContent || '').trim();
                if (t.startsWith('http')) photo = t;
            }
            if (photo) photo = photo.replace(/=s\d+[-\w]*$/, '=s1600').replace(/=w\d+-h\d+$/, '=w1600-h1600');

            // Buy link
            let link = extractLink(linkCell);
            link = fixLink(link);
            if (!link) continue;

            // Skip products with no price
            if (!usdPrice) continue;

            // QC link (Telegram — don't add invite code)
            const qcLink = extractLink(qcCell);

            // Weidian ID for fallback images
            let weidianId = '';
            const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i);
            if (idMatch) weidianId = idMatch[1];

            if (!photo && !weidianId) continue;

            products.push({
                name,
                price: usdPrice,
                eurPrice,
                photo,
                link,
                qcLink: qcLink || '',
                category: categoryName,
                weidianId
            });
        }
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
                return parseHtmlSheetNew(html, tab.name);
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

        const results2 = await Promise.allSettled(
            SHEET2_TABS.map(async (tab) => {
                const resp = await fetch(buildHtmlUrl(SHEET2_ID, tab.gid));
                if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${tab.name}`);
                const html = await resp.text();
                return parseHtmlSheetBudget(html, tab.name);
            })
        );

        const results4 = await Promise.allSettled(
            SHEET4_TABS.map(async (tab) => {
                const resp = await fetch(buildHtmlUrl(SHEET4_ID, tab.gid));
                if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${tab.name}`);
                const html = await resp.text();
                return parseHtmlSheet(html, tab.name);
            })
        );

        // Collect successful results, log failures.
        // sourceOrder controls render order within a category: lower goes first,
        // so SHEET4 (BukonBuy) items always sit below main-sheet items even when
        // the renderer's photo-first sort would otherwise interleave them.
        const sources = [
            { results: results3, order: 0 }, // Video Finds
            { results: results2, order: 1 }, // Budget Finds
            { results: results1, order: 2 }, // main sheet
            { results: results4, order: 3 }, // BukonBuy
        ];
        const failed = sources.flatMap(s => s.results).filter(r => r.status === 'rejected');
        failed.forEach(r => console.error('Tab fetch failed:', r.reason));

        allProducts = sources.flatMap(({ results, order }) =>
            results
                .filter(r => r.status === 'fulfilled')
                .flatMap(r => r.value.map(p => ({ ...p, sourceOrder: order })))
        );

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

    // Sort products with photos first, no-photo products at the end.
    // Tiebreak on sourceOrder so within each bucket items keep their cross-sheet
    // ordering (BukonBuy items stay below main-sheet items in shared categories).
    filtered.sort((a, b) => {
        const photoCmp = (b.photo ? 1 : 0) - (a.photo ? 1 : 0);
        if (photoCmp !== 0) return photoCmp;
        return (a.sourceOrder || 0) - (b.sourceOrder || 0);
    });

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
    renderedCount = 0;

    gridEl.innerHTML = '';
    appendBatch();
}

function buildCard(p, i) {
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
    const imgSrc = p.photo ? photoUrl(p.photo, 800, 800) : placeholder;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.index = i;

    const img = document.createElement('img');
    img.id = 'pimg-' + i;
    img.src = imgSrc;
    img.alt = p.name;
    img.loading = 'lazy';
    // Google blocks googleusercontent.com requests with non-Google referers (429).
    // Strip referer so direct loads from lh3.googleusercontent.com succeed.
    img.referrerPolicy = 'no-referrer';
    img.dataset.weidian = p.weidianId || '';
    img.onerror = function() { this.onerror = null; this.src = placeholder; };

    const info = document.createElement('div');
    info.className = 'product-info';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'product-name';
    nameDiv.textContent = p.name;

    const priceDiv = document.createElement('div');
    priceDiv.className = 'product-price';
    if (p.eurPrice) {
        priceDiv.textContent = p.price + ' / ' + p.eurPrice;
    } else {
        priceDiv.textContent = p.price;
    }

    info.appendChild(nameDiv);
    info.appendChild(priceDiv);
    card.appendChild(img);
    card.appendChild(info);
    return card;
}

function appendBatch() {
    const end = Math.min(renderedCount + BATCH_SIZE, currentFiltered.length);
    if (renderedCount >= end) return;

    const frag = document.createDocumentFragment();
    for (let i = renderedCount; i < end; i++) {
        frag.appendChild(buildCard(currentFiltered[i], i));
    }
    gridEl.appendChild(frag);
    renderedCount = end;
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
let searchFocused = false;
const header = document.querySelector('header');

// Pin the header to its full visible state while the search is focused.
// Mobile keyboards shrink the viewport and auto-scroll the focused input,
// which can yank a sticky header (and the input inside it) off-screen.
searchInput.addEventListener('focus', () => {
    searchFocused = true;
    header.classList.remove('header-hidden');
    header.classList.remove('header-compact');
    if (window.scrollY > 0) window.scrollTo(0, 0);
});
searchInput.addEventListener('blur', () => {
    searchFocused = false;
});

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
            if (searchFocused) {
                lastScrollY = window.scrollY;
                scrollTicking = false;
                return;
            }
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

// Infinite scroll — load more cards when near bottom
window.addEventListener('scroll', () => {
    if (loadingMore || renderedCount >= currentFiltered.length) return;
    const scrollBottom = window.innerHeight + window.scrollY;
    if (scrollBottom >= document.body.offsetHeight - 800) {
        loadingMore = true;
        requestAnimationFrame(() => {
            appendBatch();
            loadingMore = false;
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
            img.src = photoUrl(imgCache[wid], 800, 800);
            continue;
        }

        const url = await weidianImage(wid);
        if (url) {
            img.src = photoUrl(url, 800, 800);
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
