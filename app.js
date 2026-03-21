// =============================================================
// CONFIG
// =============================================================
const SHEET_ID = '1CmvRYfDLvv94PhqnQM_4qWkGw3_sRaPrsxETCAD-8Rc';

// Each tab with its gid and display name (skip MENU and ARCHIVE)
const TABS = [
    { name: 'Shoes',              gid: '776444105' },
    { name: 'Hoodies & Jackets',  gid: '17185488' },
    { name: 'Hoodies/Sweaters',   gid: '1874959735' },
    { name: 'Bags',               gid: '818750136' },
    { name: 'More Clothes',       gid: '172151799' },
    { name: 'T-Shirts',           gid: '35806979' },
    { name: 'Jeans/Pants',        gid: '1007277757' },
    { name: 'Electronics',        gid: '692954863' },
    { name: 'Accessories',        gid: '1909872944' },
];

const REFRESH_INTERVAL = 5 * 60 * 1000;

// =============================================================
// APP STATE
// =============================================================
let allProducts = [];
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

// =============================================================
// HTML PARSING — scrape the htmlview to get images + affiliate links
// =============================================================
function buildHtmlUrl(gid) {
    return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/htmlview/sheet?gid=${gid}`;
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

        // Get image URL from column B (use getAttribute to preserve original URL)
        const img = photoCell.querySelector('img');
        let photo = img ? img.getAttribute('src') : '';
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

        if (!link) continue;

        // Extract weidian item ID from affiliate link (column D) for fallback image loading
        let weidianId = '';
        if (!photo) {
            // Affiliate link format: mulebuy.com/product?id=XXXXXXX&platform=WEIDIAN
            const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i);
            if (idMatch) weidianId = idMatch[1];
        }

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
        const results = await Promise.all(
            TABS.map(async (tab) => {
                const resp = await fetch(buildHtmlUrl(tab.gid));
                if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${tab.name}`);
                const html = await resp.text();
                return parseHtmlSheet(html, tab.name);
            })
        );

        allProducts = results.flat();
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
    renderProducts();
}

// =============================================================
// SEARCH
// =============================================================
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
});

// =============================================================
// RENDER
// =============================================================
function renderProducts() {
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

    if (filtered.length === 0 && allProducts.length > 0) {
        gridEl.innerHTML = '';
        noResultsEl.classList.remove('hidden');
        return;
    }

    noResultsEl.classList.add('hidden');

    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";

    gridEl.innerHTML = filtered.map((p, i) => {
        const imgSrc = p.photo
            ? `https://wsrv.nl/?url=${encodeURIComponent(p.photo)}&w=400&h=400&fit=cover`
            : placeholder;
        return `
        <a class="product-card" href="${escapeAttr(p.link)}" target="_blank" rel="noopener noreferrer">
            <img id="pimg-${i}" src="${escapeAttr(imgSrc)}" alt="${escapeAttr(p.name)}" loading="lazy"
                 data-weidian="${escapeAttr(p.weidianId || '')}"
                 onerror="this.onerror=null;this.src='${placeholder}'">
            <div class="product-info">
                <div class="product-name">${escapeHtml(p.name)}</div>
                <div class="product-price">${escapeHtml(p.price)}</div>
            </div>
        </a>`;
    }).join('');

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
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 80) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentY;
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
// INIT
// =============================================================
fetchProducts();
setInterval(fetchProducts, REFRESH_INTERVAL);
