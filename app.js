// =============================================================
// i18n — UI string translations
// =============================================================
const TRANSLATIONS = {
    en: {
        intro: 'Welcome to my spreadsheet!',
        signup: 'Sign up to GTBuy!',
        youtube: 'YouTube for more content!',
        search_placeholder: 'brand search',
        sort_default: 'Sort by',
        sort_low: 'Price: Low to High',
        sort_high: 'Price: High to Low',
        cat_all: 'All',
        cat_special: 'Special Finds',
        cat_discount: '🔥 Discount Items',
        cat_bestsellers: '🌟 Best Sellers',
        cat_accessories: '🎁 Accessories',
        cat_video: '📹 Video Finds',
        cat_budget: 'Budget Finds',
        loading: 'Loading products...',
        error_load: 'Could not load products. Please check your connection and try again.',
        retry: 'Retry',
        no_results: 'No products found.',
        inapp_title: 'Open in Browser',
        inapp_body: 'For the best experience, tap the <strong>three dots</strong> menu (<strong>&#8942;</strong>) at the top right and select <strong>"Open in browser"</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord to join the community!',
        telegram: 'Telegram for more finds!',
        buy: 'Buy on GTBuy',
        qc: 'View QC Photos',
    },
    fr: {
        intro: 'Bienvenue sur ma feuille !',
        signup: 'Inscrivez-vous sur GTBuy !',
        youtube: 'YouTube pour plus de contenu !',
        search_placeholder: 'rechercher une marque',
        sort_default: 'Trier par',
        sort_low: 'Prix : croissant',
        sort_high: 'Prix : décroissant',
        cat_all: 'Tout',
        cat_special: 'Trouvailles Spéciales',
        cat_discount: '🔥 Promotions',
        cat_bestsellers: '🌟 Meilleures Ventes',
        cat_accessories: '🎁 Accessoires',
        cat_video: '📹 Trouvailles Vidéo',
        cat_budget: 'Petits Prix',
        loading: 'Chargement des produits...',
        error_load: 'Impossible de charger les produits. Vérifiez votre connexion et réessayez.',
        retry: 'Réessayer',
        no_results: 'Aucun produit trouvé.',
        inapp_title: 'Ouvrir dans le navigateur',
        inapp_body: 'Pour une meilleure expérience, appuyez sur le menu <strong>trois points</strong> (<strong>&#8942;</strong>) en haut à droite et sélectionnez <strong>« Ouvrir dans le navigateur »</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord pour rejoindre la communauté !',
        telegram: 'Telegram pour plus de trouvailles !',
        buy: 'Acheter sur GTBuy',
        qc: 'Voir les photos QC',
    },
    de: {
        intro: 'Willkommen in meiner Tabelle!',
        signup: 'Bei GTBuy anmelden!',
        youtube: 'YouTube für mehr Inhalte!',
        search_placeholder: 'Marke suchen',
        sort_default: 'Sortieren nach',
        sort_low: 'Preis: aufsteigend',
        sort_high: 'Preis: absteigend',
        cat_all: 'Alle',
        cat_special: 'Besondere Funde',
        cat_discount: '🔥 Rabatte',
        cat_bestsellers: '🌟 Bestseller',
        cat_accessories: '🎁 Accessoires',
        cat_video: '📹 Video-Funde',
        cat_budget: 'Schnäppchen',
        loading: 'Produkte werden geladen...',
        error_load: 'Produkte konnten nicht geladen werden. Bitte überprüfe deine Verbindung und versuche es erneut.',
        retry: 'Erneut versuchen',
        no_results: 'Keine Produkte gefunden.',
        inapp_title: 'Im Browser öffnen',
        inapp_body: 'Für ein besseres Erlebnis tippe auf das <strong>Drei-Punkte</strong>-Menü (<strong>&#8942;</strong>) oben rechts und wähle <strong>„Im Browser öffnen"</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord, um der Community beizutreten!',
        telegram: 'Telegram für mehr Funde!',
        buy: 'Bei GTBuy kaufen',
        qc: 'QC-Fotos ansehen',
    },
    es: {
        intro: '¡Bienvenido a mi hoja!',
        signup: '¡Regístrate en GTBuy!',
        youtube: '¡YouTube para más contenido!',
        search_placeholder: 'buscar marca',
        sort_default: 'Ordenar por',
        sort_low: 'Precio: menor a mayor',
        sort_high: 'Precio: mayor a menor',
        cat_all: 'Todo',
        cat_special: 'Hallazgos Especiales',
        cat_discount: '🔥 Descuentos',
        cat_bestsellers: '🌟 Más Vendidos',
        cat_accessories: '🎁 Accesorios',
        cat_video: '📹 Hallazgos en Video',
        cat_budget: 'Ofertas',
        loading: 'Cargando productos...',
        error_load: 'No se pudieron cargar los productos. Verifica tu conexión e inténtalo de nuevo.',
        retry: 'Reintentar',
        no_results: 'No se encontraron productos.',
        inapp_title: 'Abrir en el navegador',
        inapp_body: 'Para una mejor experiencia, toca el menú de <strong>tres puntos</strong> (<strong>&#8942;</strong>) arriba a la derecha y selecciona <strong>«Abrir en el navegador»</strong>.',
        inapp_ok: 'OK',
        discord: '¡Discord para unirte a la comunidad!',
        telegram: '¡Telegram para más hallazgos!',
        buy: 'Comprar en GTBuy',
        qc: 'Ver fotos QC',
    },
    it: {
        intro: 'Benvenuto nel mio foglio!',
        signup: 'Iscriviti a GTBuy!',
        youtube: 'YouTube per altri contenuti!',
        search_placeholder: 'cerca un marchio',
        sort_default: 'Ordina per',
        sort_low: 'Prezzo: crescente',
        sort_high: 'Prezzo: decrescente',
        cat_all: 'Tutto',
        cat_special: 'Trovate Speciali',
        cat_discount: '🔥 Sconti',
        cat_bestsellers: '🌟 Più Venduti',
        cat_accessories: '🎁 Accessori',
        cat_video: '📹 Trovate Video',
        cat_budget: 'Offerte',
        loading: 'Caricamento prodotti...',
        error_load: 'Impossibile caricare i prodotti. Controlla la connessione e riprova.',
        retry: 'Riprova',
        no_results: 'Nessun prodotto trovato.',
        inapp_title: 'Apri nel browser',
        inapp_body: 'Per una migliore esperienza, tocca il menu a <strong>tre puntini</strong> (<strong>&#8942;</strong>) in alto a destra e seleziona <strong>«Apri nel browser»</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord per entrare nella community!',
        telegram: 'Telegram per altre trovate!',
        buy: 'Acquista su GTBuy',
        qc: 'Vedi foto QC',
    },
};

window.i18n = (function() {
    const SUPPORTED = ['en', 'fr', 'de', 'es', 'it'];
    let currentLang = 'en';
    const dynCache = {}; // { lang: { originalText: translatedText } }

    function detectLang() {
        try {
            const stored = localStorage.getItem('lang');
            if (stored && SUPPORTED.includes(stored)) return stored;
        } catch (e) {}
        const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
        return SUPPORTED.includes(browser) ? browser : 'en';
    }

    function loadDynCache(lang) {
        if (dynCache[lang]) return dynCache[lang];
        try {
            const raw = localStorage.getItem('i18n-dyn-' + lang);
            dynCache[lang] = raw ? JSON.parse(raw) : {};
        } catch (e) { dynCache[lang] = {}; }
        return dynCache[lang];
    }
    function saveDynCache(lang) {
        try { localStorage.setItem('i18n-dyn-' + lang, JSON.stringify(dynCache[lang] || {})); } catch (e) {}
    }

    function t(key) {
        const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        return dict[key] != null ? dict[key] : (TRANSLATIONS.en[key] || '');
    }

    // Sync lookup for dynamic strings — returns cached translation or original
    function dyn(text) {
        if (!text || currentLang === 'en') return text;
        const cache = loadDynCache(currentLang);
        return cache[text] || text;
    }

    // Translate one string via Google's free endpoint
    async function translateOne(text, lang) {
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' +
            encodeURIComponent(lang) + '&dt=t&q=' + encodeURIComponent(text);
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('translate http ' + resp.status);
        const data = await resp.json();
        if (!Array.isArray(data) || !Array.isArray(data[0])) return text;
        return data[0].map(seg => seg && seg[0] ? seg[0] : '').join('');
    }

    // Translate a list of strings, filling cache. Returns when all done.
    async function translateMany(texts, lang, onProgress) {
        if (lang === 'en') return;
        const cache = loadDynCache(lang);
        const unique = [...new Set(texts.filter(Boolean))];
        const todo = unique.filter(t => !cache[t]);
        if (todo.length === 0) return;

        const CONCURRENCY = 6;
        let idx = 0;
        async function worker() {
            while (idx < todo.length) {
                const i = idx++;
                const text = todo[i];
                try {
                    const result = await translateOne(text, lang);
                    cache[text] = result || text;
                } catch (e) {
                    cache[text] = text; // fallback: keep original, don't retry
                }
                if (onProgress) onProgress();
            }
        }
        const workers = [];
        for (let i = 0; i < Math.min(CONCURRENCY, todo.length); i++) workers.push(worker());
        await Promise.all(workers);
        saveDynCache(lang);
    }

    function apply() {
        document.documentElement.lang = currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val) el.textContent = val;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const val = t(key);
            if (val) el.innerHTML = val;
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr') || '';
            const [attr, key] = spec.split(':');
            if (!attr || !key) return;
            const val = t(key);
            if (val) el.setAttribute(attr, val);
        });
        // Re-translate category pills (uses translatePill in app code)
        document.querySelectorAll('.category-pill').forEach(btn => {
            const value = btn.dataset.category;
            if (typeof translatePill === 'function') {
                btn.textContent = translatePill(value, value);
            }
        });
    }

    // Translate all dynamic strings (categories + product names) for the current
    // language, then re-render so cards/pills pick up the new translations.
    async function translateDynamic() {
        if (currentLang === 'en') return;
        let products;
        try { products = allProducts; } catch (e) { return; }
        if (!products || !products.length) return;
        const names = products.map(p => p.name);
        const cats = [...new Set(products.map(p => p.category))];
        await translateMany([...names, ...cats], currentLang);
        if (typeof buildCategoryTabs === 'function') buildCategoryTabs();
        if (typeof renderProducts === 'function') renderProducts(true);
    }

    function setLang(lang) {
        if (!SUPPORTED.includes(lang)) lang = 'en';
        currentLang = lang;
        try { localStorage.setItem('lang', lang); } catch (e) {}
        apply();
        translateDynamic();
    }
    function init() {
        currentLang = detectLang();
        const sel = document.getElementById('lang-select');
        if (sel) {
            sel.value = currentLang;
            sel.addEventListener('change', e => setLang(e.target.value));
        }
        apply();
    }
    return {
        t, dyn, setLang, apply, init, translateDynamic,
        get current() { return currentLang; },
    };
})();

document.addEventListener('DOMContentLoaded', () => window.i18n.init());

// =============================================================
// CONFIG
// =============================================================
// Main multi-tab sheet — per-category clothes tabs, a Budget tab that
// merges into Discount Items, and the MAIN tab's "New Year Limited-Time
// Offers" section which is extracted as the Discount Items pill.
const SHEET5_ID = '1qDDvfzOS6ILnVKil-V4dOZAEFbyYhSyk9S-lHzaJjnY';
const SHEET5_TABS = [
    { name: '👟 Shoes',           gid: '12405383' },
    { name: '👖 Pants',           gid: '513501659' },
    { name: '👕 T-Shirts',        gid: '1346409329' },
    { name: '🩳 Shorts',          gid: '314806305' },
    { name: '🧥 Hoodies',         gid: '1338354785' },
    { name: '🧶 Sweaters',        gid: '1707026158' },
    { name: '🏃 Tracksuits',      gid: '232441216' },
    { name: '🦺 Jackets & Vests', gid: '1506514331' },
    { name: '🥶 Winter Jackets',  gid: '573232849' },
    { name: '❄️ Winter Products', gid: '1693767562' },
    { name: '⚽ Football',        gid: '1625961130' },
    { name: '🌸 Perfume',         gid: '1778849992' },
    { name: '🆕 New Links',       gid: '1800079464' },
];
// Budget Products tab in the main sheet — retagged 'Discount Items' at
// parse time so its products merge into the Discount Items pill.
const SHEET5_BUDGET_TAB = { name: 'Budget Finds', gid: '800817013' };
// Discount tab — same gid as MAIN SPREADSHEET; parser extracts only the
// "New Year Limited-Time Offers" section.
const SHEET5_DISCOUNT_TAB = { name: 'Discount Items', gid: '525974875' };
// Best Sellers tab — same gid; parser extracts the showcase rows BEFORE
// the discount section header (the curated featured products at the top
// of the MAIN tab).
const SHEET5_BESTSELLERS_TAB = { name: 'Best Sellers', gid: '525974875' };
// Video Finds tab — products featured in videos. Gets its own pill and
// is cross-pinned into matching clothes categories by name.
const SHEET5_VIDEO_TAB = { name: '📹 Video Finds', gid: '1323089782' };

const REFRESH_INTERVAL = 5 * 60 * 1000;

// =============================================================
// SEARCH ALIASES — short forms, brand expansions, category synonyms
//
// Each row in SYNONYM_GROUPS is a set of equivalent terms; typing any of them
// also tries matching the others. So `['lv', 'louis vuitton']` means searching
// "lv" finds "Louis Vuitton ..." products AND vice versa. Keep terms
// lowercased. Add freely.
//
// Caution on very short aliases (1-2 chars): matching uses \b word boundary,
// so "lv" won't match "involve" — but it WILL match anything starting with
// those letters. Avoid initials that commonly start unrelated words
// (`am` matches "American", `h` matches every H word, `ye` matches "yellow").
// When in doubt, only include the longer canonical form.
// =============================================================
const SYNONYM_GROUPS = [
    // ===== Luxury / designer houses =====
    ['lv', 'louis vuitton'],
    ['ysl', 'slp', 'saint laurent', 'yves saint laurent'],
    ['cdg', 'comme des garcons', 'comme des garçons', 'play cdg'],
    ['bv', 'bottega veneta', 'bottega'],
    ['d&g', 'dg', 'dolce gabbana', 'dolce and gabbana', 'dolce & gabbana'],
    ['mm', 'mmm', 'mm6', 'maison margiela', 'margiela'],
    ['rl', 'polo', 'ralph lauren', 'polo ralph lauren'],
    ['rrl', 'double rl'],
    ['gg', 'gucci'],
    ['cd', 'dior', 'christian dior'],
    ['ff', 'fendi'],
    ['cc', 'chanel'],
    ['hermes', 'hermès'],
    ['vltn', 'valentino'],
    ['mcm', 'mode creation munich'],
    ['bb', 'burberry', 'tb burberry'],
    ['celine', 'céline'],
    ['gvc', 'givenchy'],
    ['loewe'],
    ['balmain'],
    ['miu miu', 'miumiu'],
    ['prada'],
    ['versace', 'medusa'],
    ['moncler'],
    ['canada goose', 'cg'],
    ['arcteryx', "arc'teryx", 'arc teryx'],
    ['stone island'],
    ['patagonia', 'patagucci'],
    ['mschf'],
    ['amiri'],
    ['rhude'],
    ['represent'],
    ['purple', 'purple brand'],
    ['gallery', 'gallery dept', 'gallery department'],
    ['eric emanuel'],
    ['chrome hearts'],
    ['crtz', 'corteiz', 'cortiez'],
    ['sup', 'supreme'],
    ['palace'],
    ['stussy', 'stüssy'],
    ['kith'],
    ['fog', 'essentials', 'fear of god'],
    ['assc', 'anti social social club'],
    ['vlone'],
    ['trapstar'],
    ['sp5der', 'spider', 'sp5'],
    ['bape', 'a bathing ape', 'bathing ape'],
    ['aape'],
    ['bbc', 'billionaire boys club', 'ice cream'],
    ['bal', 'balenciaga'],
    ['gd', 'goyard'],
    ['mk', 'michael kors'],
    ['tb', 'thom browne', 'tory burch'],
    ['tnf', 'nf', 'north face', 'the north face'],
    ['cpfm', 'cactus plant flea market'],
    ['travis scott', 'cactus jack'],
    ['ovo', "october's very own", 'octobers very own', 'drake'],
    ['ow', 'off white', 'off-white', 'virgil'],

    // ===== Streetwear / Japanese / niche =====
    ['hm', 'human made'],
    ['nbhd', 'neighborhood'],
    ['wtaps'],
    ['sacai'],
    ['kapital'],
    ['needles'],
    ['undercover'],
    ['visvim'],
    ['junya', 'junya watanabe'],
    ['y3', 'y-3'],
    ['yohji', 'yohji yamamoto'],
    ['issey', 'issey miyake', 'pleats please'],
    ['rick owens', 'drkshdw'],
    ['vetements'],
    ['acne', 'acne studios'],
    ['jacquemus'],
    ['raf', 'raf simons'],
    ['ann', 'ann demeulemeester'],
    ['marni'],
    ['lanvin'],

    // ===== Mainstream / sport / workwear =====
    ['nike'],
    ['adidas', 'three stripes', '3 stripes'],
    ['puma'],
    ['reebok'],
    ['vans'],
    ['converse', 'chuck taylor', 'chucks'],
    ['asics'],
    ['onitsuka', 'onitsuka tiger'],
    ['salomon'],
    ['hoka'],
    ['on cloud', 'oncloud', 'on running'],
    ['nb', 'new balance'],
    ['carhartt', 'carhartt wip', 'wip'],
    ['dickies'],
    ['levis', "levi's", 'levi strauss'],
    ['wrangler'],
    ['lacoste'],
    ['tommy', 'tommy hilfiger', 'th'],
    ['ck', 'calvin klein'],
    ['hugo boss', 'boss'],
    ['armani', 'ea', 'emporio armani', 'giorgio armani'],
    ['zegna'],
    ['brunello', 'brunello cucinelli'],
    ['loro piana', 'lp'],
    ['tom ford'],

    // ===== Jordan / Air Max / Yeezy / model shorthand =====
    ['aj', 'air jordan', 'jordan'],
    ['aj1', 'air jordan 1', 'jordan 1', 'j1'],
    ['aj3', 'air jordan 3', 'jordan 3'],
    ['aj4', 'air jordan 4', 'jordan 4', 'j4'],
    ['aj5', 'air jordan 5', 'jordan 5'],
    ['aj6', 'air jordan 6', 'jordan 6'],
    ['aj11', 'air jordan 11', 'jordan 11'],
    ['aj12', 'air jordan 12', 'jordan 12'],
    ['aj13', 'air jordan 13', 'jordan 13'],
    ['af1', 'air force 1', 'air force one', 'forces'],
    ['sb', 'nike sb', 'sb dunk', 'dunk sb'],
    ['dunk', 'nike dunk'],
    ['blazer', 'nike blazer'],
    ['cortez', 'nike cortez'],
    ['tn', 'air max plus', 'air max tn'],
    ['am1', 'air max 1'],
    ['am90', 'air max 90'],
    ['am95', 'air max 95'],
    ['am97', 'air max 97'],
    ['am270', 'air max 270'],
    ['am720', 'air max 720'],
    ['vapormax', 'vapor max'],
    ['pegasus', 'nike pegasus'],
    ['ub', 'ultraboost', 'ultra boost'],
    ['nmd', 'adidas nmd'],
    ['ss', 'stan smith'],
    ['superstar'],
    ['samba'],
    ['gazelle'],
    ['spzl', 'spezial'],
    ['campus'],
    ['handball', 'handball spezial'],
    ['forum', 'adidas forum'],
    ['yz', 'yzy', 'yeezy'],
    ['yz350', 'yeezy 350', 'boost 350'],
    ['yz450', 'yeezy 450'],
    ['yz500', 'yeezy 500'],
    ['yz700', 'yeezy 700'],
    ['yzy slide', 'yeezy slide'],
    ['foam runner', 'yeezy foam', 'foam rnr'],
    ['nb550', 'new balance 550', '550'],
    ['nb327', 'new balance 327', '327'],
    ['nb990', 'new balance 990', '990'],
    ['nb991', 'new balance 991', '991'],
    ['nb992', 'new balance 992', '992'],
    ['nb993', 'new balance 993', '993'],
    ['nb2002', 'new balance 2002', '2002r', '2002'],
    ['nb9060', 'new balance 9060', '9060'],
    ['nb1906', 'new balance 1906', '1906'],
    ['nb530', 'new balance 530', '530'],
    ['nb574', 'new balance 574', '574'],
    ['gel lyte', 'gel-lyte', 'gellyte'],
    ['kayano', 'gel kayano', 'gel-kayano'],
    ['nimbus', 'gel nimbus'],
    ['novablast'],
    ['mexico 66', 'onitsuka mexico'],
    ['xt6', 'xt-6', 'xt 6', 'salomon xt6'],
    ['xt4', 'xt-4'],
    ['speedcross', 'salomon speedcross'],
    ['clifton', 'hoka clifton'],
    ['bondi', 'hoka bondi'],
    ['old skool', 'old school', 'vans old skool'],
    ['sk8 hi', 'sk8-hi', 'sk8hi'],
    ['slip on', 'slip-on', 'slipon'],

    // ===== Footwear (general / non-sneaker) =====
    ['shoes', 'sneakers', 'kicks', 'trainers', 'footwear'],
    ['boots', 'boot'],
    ['slides', 'sliders', 'slide', 'slippers'],
    ['sandals', 'sandal'],
    ['loafers', 'loafer', 'mules', 'mule'],
    ['heels', 'heel', 'pumps', 'stiletto'],
    ['flats', 'ballet flats', 'flat'],
    ['doc martens', 'dr martens', 'dr. martens', 'dms'],
    ['timberland', 'timbs'],
    ['ugg', 'uggs'],
    ['crocs', 'croc'],
    ['birkenstock', 'birks'],
    ['clarks', 'wallabee', 'wallabees'],

    // ===== Tops =====
    ['hoodie', 'hoodies', 'hooded', 'tech fleece', 'pullover', 'sweatshirt', 'sweater', 'zip up', 'zip-up'],
    ['crewneck', 'crew neck', 'crew'],
    ['sweater', 'sweaters', 'knit', 'knitwear', 'cardigan', 'jumper'],
    ['tee', 'tshirt', 't-shirt', 't shirt', 'shirt', 't-shirts'],
    ['long sleeve', 'longsleeve', 'long-sleeve', 'ls tee', 'ls'],
    ['polo shirt', 'polo'],
    ['button up', 'button down', 'button-up', 'button-down', 'dress shirt', 'oxford', 'oxford shirt'],
    ['tank', 'tank top', 'singlet', 'sleeveless'],
    ['flannel'],

    // ===== Bottoms =====
    ['pants', 'trousers', 'slacks'],
    ['jeans', 'denim', 'denims'],
    // 'pants' bridges joggers↔pants: titles say "Nike Tech Pants", never
    // "joggers", so a jogger search must also reach pant-type items.
    ['joggers', 'sweatpants', 'track pants', 'trackpants', 'jogger', 'pants'],
    ['shorts', 'short', 'sweatshorts'],
    ['cargo', 'cargos', 'cargo pants', 'cargo shorts'],
    ['skirt', 'skirts'],
    ['leggings', 'tights'],

    // ===== Outerwear =====
    ['jacket', 'jackets'],
    ['coat', 'coats'],
    ['puffer', 'down jacket', 'puffer jacket', 'down'],
    ['parka'],
    ['trench', 'trench coat'],
    ['bomber', 'bomber jacket', 'ma1', 'ma-1'],
    ['varsity', 'letterman', 'varsity jacket'],
    ['denim jacket', 'jean jacket', 'trucker jacket'],
    ['windbreaker', 'anorak', 'shell', 'shell jacket', 'rain jacket'],
    ['vest', 'gilet'],
    ['tech', 'tech fleece'],
    ['fleece'],

    // ===== Sets / formal / dresses =====
    ['tracksuit', 'track suit', 'tracksuits'],
    ['set', 'co-ord', 'coord', 'matching set', 'two piece', '2 piece'],
    ['suit', 'blazer', 'sport coat'],
    ['dress', 'dresses', 'gown'],

    // ===== Bags =====
    ['bag', 'bags', 'handbag', 'purse'],
    ['tote', 'tote bag'],
    ['crossbody', 'cross body', 'shoulder bag', 'sling', 'sling bag', 'messenger'],
    ['backpack', 'back pack', 'rucksack'],
    ['duffel', 'duffle', 'duffel bag', 'duffle bag', 'gym bag', 'weekender'],
    ['fanny pack', 'belt bag', 'waist bag', 'bum bag', 'hip pack'],
    ['clutch'],
    ['speedy', 'lv speedy'],
    ['neverfull', 'lv neverfull'],
    ['birkin', 'hermes birkin'],
    ['kelly', 'hermes kelly'],

    // ===== Small leather goods / accessories =====
    ['wallet', 'wallets', 'cardholder', 'card holder', 'bifold', 'bi-fold', 'long wallet'],
    ['belt', 'belts', 'buckle'],
    ['hat', 'hats', 'cap', 'caps'],
    ['beanie', 'beanies', 'knit hat', 'skull cap'],
    ['bucket hat', 'bucket', 'fisherman hat'],
    ['snapback', 'trucker hat', 'trucker cap', 'baseball cap', 'dad hat'],
    ['scarf', 'scarves'],
    ['gloves', 'glove', 'mittens'],
    ['tie', 'necktie', 'bowtie', 'bow tie'],

    // ===== Jewelry / eyewear / watches =====
    ['sunglasses', 'shades', 'sunnies'],
    ['glasses', 'eyewear', 'frames', 'spectacles'],
    ['watch', 'watches', 'wristwatch'],
    ['rolex', 'submariner', 'datejust', 'daytona', 'gmt'],
    ['audemars piguet', 'royal oak'],
    ['patek', 'patek philippe', 'nautilus'],
    ['cartier', 'love bracelet', 'juste un clou'],
    ['bracelet', 'bracelets', 'cuff', 'bangle'],
    ['necklace', 'necklaces', 'chain', 'chains', 'pendant'],
    ['ring', 'rings', 'band'],
    ['earring', 'earrings', 'studs', 'hoops'],
    ['pin', 'pins', 'brooch'],
    ['keychain', 'keychains', 'key chain', 'lanyard', 'key holder'],

    // ===== Electronics / tech =====
    ['headphones', 'headphone', 'cans', 'over-ear', 'over ear'],
    ['earbuds', 'earphones', 'in-ear', 'iems', 'in ear'],
    ['airpods', 'air pods', 'airpod', 'airpods pro', 'airpods max'],
    ['speaker', 'speakers', 'bluetooth speaker', 'wireless speaker'],
    ['phone', 'smartphone', 'iphone', 'android'],
    ['phone case', 'phonecase', 'iphone case'],
    ['airpods case', 'airpod case'],
    ['charger', 'charging cable', 'usb cable', 'lightning cable', 'usb-c'],
    ['power bank', 'powerbank', 'portable charger'],
    ['smartwatch', 'apple watch', 'iwatch'],
    ['drone'],
    ['camera', 'cam'],
    ['mouse', 'gaming mouse'],
    ['keyboard', 'mechanical keyboard'],

    // ===== Misc =====
    ['perfume', 'cologne', 'fragrance', 'eau de parfum', 'edp', 'edt'],
    ['lighter', 'zippo'],
    ['umbrella'],
    ['stuffed animal', 'plush', 'plushie', 'plushy'],
    ['lego', 'legos'],
    ['football jersey', 'soccer jersey', 'jersey'],
    ['fifa', 'world cup'],

    // ===== Colours (also drives smart colour ranking, see COLOR_WORDS) =====
    ['black', 'noir'],
    ['white', 'blanc', 'off white', 'off-white', 'cream', 'ivory'],
    ['grey', 'gray', 'charcoal'],
    ['red', 'crimson', 'burgundy', 'maroon', 'wine'],
    ['blue', 'navy', 'royal blue', 'sky blue', 'teal'],
    ['green', 'olive', 'khaki', 'mint', 'lime'],
    ['yellow', 'gold'],
    ['orange'],
    ['pink', 'rose', 'fuchsia'],
    ['purple', 'violet', 'lilac'],
    ['brown', 'tan', 'beige', 'chocolate', 'coffee'],
    ['silver', 'metallic'],
    ['multicolor', 'multicolour', 'rainbow'],

    // ===== Materials / patterns =====
    ['leather'],
    ['suede'],
    ['cotton'],
    ['wool', 'cashmere', 'merino'],
    ['nylon'],
    ['camo', 'camouflage'],
    ['plaid', 'check', 'checkered', 'gingham'],
    ['stripe', 'striped', 'stripes'],
    ['floral', 'flower'],
];

// Colour words used for SMART COLOUR RANKING. Because <5% of product titles
// contain a colour, a colour term must NOT hard-exclude results — instead it
// boosts ranking: items whose title names the colour rank first, then items
// that come in many colourways (likely available in it), then the rest. See
// searchScore / renderProducts. Keep these lowercased; multi-word colours are
// matched via the alias table above.
const COLOR_WORDS = new Set([
    'black', 'white', 'grey', 'gray', 'red', 'blue', 'navy', 'green', 'olive',
    'khaki', 'yellow', 'gold', 'orange', 'pink', 'purple', 'violet', 'brown',
    'tan', 'beige', 'cream', 'ivory', 'silver', 'charcoal', 'burgundy',
    'maroon', 'teal', 'mint', 'rose', 'multicolor', 'multicolour',
]);

// A title hints "available in many colours" → a colour search counts it as a
// soft match (ranked below a literal colour hit). e.g. "Asics Shoes (+16 Colourways)".
const COLORWAY_RE = /colou?rway|colou?rs\b|\bstyles?\b|multi.?colou?r/i;

// Build the lookup dict from groups. For each term, list all other terms in
// the same group(s). A term can appear in multiple groups (e.g. 'tee' and
// 'shirt' are bridges) — we union their expansions.
const SEARCH_ALIASES = (() => {
    const dict = {};
    for (const group of SYNONYM_GROUPS) {
        for (const term of group) {
            const list = dict[term] || (dict[term] = []);
            for (const other of group) {
                if (other !== term && !list.includes(other)) list.push(other);
            }
        }
    }
    return dict;
})();

// Memoized OR-regex per token. \b anchors the start of each expansion so
// short forms like "lv" don't false-match inside other words ("involve"),
// while still matching at the start of any word ("LV Monogram Bag").
// Digit-ending aliases (aj1, am90, 550, ...) get a (?!\d) lookahead so that
// "aj1" doesn't accidentally match "aj11" or "am90" match "am900".
const _tokenMatcherCache = {};
function tokenMatcher(token) {
    if (_tokenMatcherCache[token]) return _tokenMatcherCache[token];
    const expansions = [token, ...(SEARCH_ALIASES[token] || [])];
    const parts = expansions.map(s => {
        const esc = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return /\d$/.test(s) ? esc + '(?!\\d)' : esc;
    });
    return (_tokenMatcherCache[token] = new RegExp('\\b(?:' + parts.join('|') + ')', 'i'));
}

// Optimal String Alignment distance (Damerau-Levenshtein restricted to
// adjacent transpositions), capped early for speed. Counts a swapped pair of
// letters as ONE edit so common typos like "shrit"→"shirt" match within a
// budget of 1. Used for typo tolerance.
function editDistance(a, b, max) {
    const la = a.length, lb = b.length;
    if (Math.abs(la - lb) > max) return max + 1;
    let prevPrev = null;
    let prev = new Array(lb + 1);
    for (let j = 0; j <= lb; j++) prev[j] = j;
    for (let i = 1; i <= la; i++) {
        const cur = new Array(lb + 1);
        cur[0] = i;
        let rowMin = i;
        const ca = a.charCodeAt(i - 1);
        for (let j = 1; j <= lb; j++) {
            const cb = b.charCodeAt(j - 1);
            const cost = ca === cb ? 0 : 1;
            let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
            if (i > 1 && j > 1 && ca === b.charCodeAt(j - 2) && a.charCodeAt(i - 2) === cb) {
                v = Math.min(v, prevPrev[j - 2] + 1); // adjacent transposition
            }
            cur[j] = v;
            if (v < rowMin) rowMin = v;
        }
        if (rowMin > max) return max + 1; // whole row exceeds budget → bail
        prevPrev = prev;
        prev = cur;
    }
    return prev[lb];
}

// Allowed typo budget for a token: none for very short tokens (too risky),
// 1 for medium, 2 for long. Short tokens lean on the exact/alias path.
function fuzzyBudget(token) {
    if (token.length <= 3) return 0;
    if (token.length <= 6) return 1;
    return 2;
}

// Does a query token match this name — exactly/alias-wise, OR within a small
// edit distance of some word in the name (typo tolerance)? `nameWords` is the
// pre-split lowercase word list (passed in so we split each name once).
function tokenMatchesName(token, name, nameWords) {
    if (tokenMatcher(token).test(name)) return true;
    const budget = fuzzyBudget(token);
    if (!budget) return false;
    for (const w of nameWords) {
        if (Math.abs(w.length - token.length) > budget) continue;
        if (editDistance(token, w, budget) <= budget) return true;
    }
    return false;
}

// Score a product name against the query. Returns
//   { matched, full, score }
// where `matched` = belongs in the result set, `full` = matched every core
// (non-colour) term, and `score` ranks results (higher = better).
//
// Three ideas combine here:
//  • Core (non-colour) terms are REQUIRED — at least one to appear, all of
//    them for the "full match" tier. Alias- and typo-tolerant.
//  • Colour terms are SOFT (smart colour ranking): titles rarely name a
//    colour, so a colour never excludes an item — it only boosts ranking.
//    Literal colour hit > "comes in many colourways" > no colour info.
//  • A whole-query phrase hit adds a small bonus so exact phrases sort first.
function searchScore(name, query) {
    query = (query || '').trim();
    if (!query) return { matched: true, full: true, score: 0 };
    name = name.toLowerCase();
    const nameWords = name.split(/[^a-z0-9]+/).filter(Boolean);

    const tokens = query.split(/\s+/).filter(Boolean);
    const colorTokens = tokens.filter(t => COLOR_WORDS.has(t));
    const coreTokens = tokens.filter(t => !COLOR_WORDS.has(t));

    // Colour contribution (ranking only): best signal across colour terms.
    let colorBonus = 0;
    for (const c of colorTokens) {
        if (tokenMatcher(c).test(name)) { colorBonus = Math.max(colorBonus, 3); }      // literal colour in title
        else if (COLORWAY_RE.test(name)) { colorBonus = Math.max(colorBonus, 1); }     // available in many colours
    }

    // Core term matching (required).
    let coreMatched = 0;
    for (const t of coreTokens) {
        if (tokenMatchesName(t, name, nameWords)) coreMatched++;
    }
    const phrase = tokens.length > 1 && tokenMatcher(query).test(name);
    if (phrase) coreMatched = coreTokens.length; // phrase implies all core terms present

    let matched, full;
    if (coreTokens.length > 0) {
        matched = coreMatched >= 1;
        full = coreMatched >= coreTokens.length;
    } else {
        // Colour-only (or empty-core) query: the colour is the requirement.
        matched = colorBonus > 0;
        full = colorBonus >= 3; // literal colour hit
    }

    const score = coreMatched * 10 + colorBonus + (phrase ? 2 : 0);
    return { matched, full, score };
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// Wrap query terms (and their aliases) found in `text` with <mark> for the
// result cards. Operates on HTML-escaped text so it's injection-safe. Exact /
// alias hits only — fuzzy typo matches aren't highlighted (best-effort).
function highlightMatches(text, query) {
    const safe = escapeHtml(text);
    query = (query || '').trim();
    if (!query) return safe;
    const parts = [];
    for (const t of query.split(/\s+/).filter(Boolean)) {
        for (const e of [t, ...(SEARCH_ALIASES[t] || [])]) {
            const esc = e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            parts.push(/\d$/.test(e) ? esc + '(?!\\d)' : esc);
        }
    }
    if (!parts.length) return safe;
    parts.sort((a, b) => b.length - a.length); // prefer longest (multi-word) alias
    let re;
    try { re = new RegExp('\\b(?:' + parts.join('|') + ')', 'gi'); }
    catch (e) { return safe; }
    return safe.replace(re, m => '<mark>' + m + '</mark>');
}

// =============================================================
// APP STATE
// =============================================================
let allProducts = [];
// Keys of products already ingested this load, used to drop pixel-for-pixel
// duplicate cards (same link + name + price + photo). Listings that differ in
// ANY of those fields — different price, photo, or link under the same name —
// are kept. Reset alongside allProducts at the start of each fetch.
let seenProductKeys = new Set();
let currentFiltered = [];
let activeCategory = 'all';
let searchQuery = '';
const BATCH_SIZE = 20;
let renderedCount = 0;
let loadingMore = false;
// Identifies the currently displayed list (view + query + sort). When the
// next renderProducts() call carries the same key AND the already-rendered
// cards are still a prefix of the new sorted list, we append the newcomers
// instead of wiping — this is what lets products stream in progressively
// without flicker or scroll jumps. A changed key forces a full re-render.
let lastRenderKey = null;

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

// Build the rendered URL for a product photo. Google-hosted images
// (lh3/lh4/etc. .googleusercontent.com), INCLUDING the docsubipk inline
// previews, load direct. wsrv.nl was returning 404 for docsubipk URLs
// because Google appears to bind those tokens to the requester's session
// — the user's browser session has the token, wsrv.nl doesn't. Going
// direct + the no-referrer document meta keeps the request inside the
// same session that fetched the spreadsheet.
// Everything else (e.g. Geili CDN) still needs the proxy to bypass CORP headers.
function photoUrl(src, w, h) {
    if (!src) return '';
    // Local (relative) paths — used for per-product image overrides
    // shipped with the site. Return them direct, never proxy.
    if (!/^https?:\/\//i.test(src)) return src;
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
    // Prefer the cached weidian image if the card already resolved one — the
    // p.photo source (docsubipk for discount items) often 404s by modal time.
    const cachedWeidian = p.weidianId && imgCache[p.weidianId];
    const bigImg = cachedWeidian
        ? photoUrl(cachedWeidian, 800, 800)
        : (p.photo ? photoUrl(p.photo, 800, 800) : placeholder);
    const modalImg = document.getElementById('modal-img');
    modalImg.referrerPolicy = 'no-referrer';
    // Weidian fallback is dead (HTTP2 protocol error). On modal img
    // failure just show the placeholder so the rest of the modal
    // (name/price/buy link) still works.
    modalImg.onerror = function() {
        modalImg.onerror = null;
        modalImg.src = placeholder;
    };
    modalImg.src = bigImg;
    const displayName = (window.i18n && window.i18n.dyn(p.name)) || p.name;
    modalImg.alt = displayName;
    document.getElementById('modal-name').textContent = displayName;
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
    // _ts cache-buster: ensure each fetch returns FRESH docsubipk tokens.
    // Google's htmlview sets no-cache headers but some intermediaries
    // and service workers ignore them. Stale HTML → stale tokens → 404.
    return `https://docs.google.com/spreadsheets/d/${sheetId}/htmlview/sheet?gid=${gid}&_ts=${Date.now()}`;
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

// Keyword → clothes-category mapping. Every product's name is scanned
// (most-specific patterns first) to derive a pinCategory, so e.g. a
// "Bape Tee" cross-lists into the T-Shirts pill, "Adidas Pants" into
// Pants, etc. Items that don't match any keyword keep only their source
// category. Strings must match the SHEET5_TABS names character-for-
// character (emoji + label).
//
// Word-boundary anchored to avoid "set" matching "Sunset" or "shirt"
// matching "sweatshirt" (resolved by ordering: 'sweatshirt' would need
// to come before 'shirt' if it were a target keyword).
const SPECIAL_PIN_KEYWORDS = [
    // Order matters: most specific first. The first \b-anchored match
    // against the lowercased product name decides the target. So
    // 'sweater' beats 'tee' for "Sweater Tee", 'hoodie' beats 'air max'
    // for a hypothetical "Air Max Hoodie", etc.
    //
    // Football / soccer kits get their own pill — check before the
    // generic 'jersey' / 'uniform' / 'set' rules below, otherwise
    // "Real Madrid Football Jersey" would land in T-Shirts.
    ['football',       '⚽ Football'],
    ['soccer',         '⚽ Football'],
    ['real madrid',    '⚽ Football'],
    ['barcelona',      '⚽ Football'],
    ['liverpool',      '⚽ Football'],
    ['manchester',     '⚽ Football'],
    ['man city',       '⚽ Football'],
    ['arsenal',        '⚽ Football'],
    ['chelsea',        '⚽ Football'],
    ['juventus',       '⚽ Football'],
    ['bayern',         '⚽ Football'],
    ['ac milan',       '⚽ Football'],
    ['inter milan',    '⚽ Football'],
    ['dortmund',       '⚽ Football'],
    ['psg',            '⚽ Football'],
    ['national team',  '⚽ Football'],
    // Apparel keywords (checked first so "Nike Hoodie" beats 'nike').
    // Plurals listed alongside singulars — \b boundary doesn't cross
    // word-char transitions so 'jacket' alone won't match "jackets".
    ['jeans',          '👖 Pants'],
    ['jean',           '👖 Pants'],
    ['trousers',       '👖 Pants'],
    ['trouser',        '👖 Pants'],
    ['pants',          '👖 Pants'],
    // Singular 'pant' — without it, "Polo Ralph Lauren track pant" fell
    // through to the 'polo' rule below and showed up under T-Shirts.
    ['pant',           '👖 Pants'],
    ['joggers',        '👖 Pants'],
    ['jogger',         '👖 Pants'],
    ['sweatpants',     '👖 Pants'],
    ['sweatpant',      '👖 Pants'],
    ['leggings',       '👖 Pants'],
    ['legging',        '👖 Pants'],
    ['chinos',         '👖 Pants'],
    ['chino',          '👖 Pants'],
    ['shorts',         '🩳 Shorts'],
    ['short',          '🩳 Shorts'],
    ['hoodies',        '🧥 Hoodies'],
    ['hoodie',         '🧥 Hoodies'],
    ['cardigan',       '🧶 Sweaters'],
    ['cardigans',      '🧶 Sweaters'],
    ['sweaters',       '🧶 Sweaters'],
    ['sweater',        '🧶 Sweaters'],
    ['knit',           '🧶 Sweaters'],
    ['tracksuits',     '🏃 Tracksuits'],
    ['tracksuit',      '🏃 Tracksuits'],
    // T-shirts / tops / jackets — moved BEFORE shoe specifics so a
    // "Lebron Jersey" routes to T-Shirts (via 'jersey') instead of
    // Shoes (via 'lebron'). "Nike Lebron" sneakers still route to
    // Shoes since they don't contain any apparel keyword first.
    ['polo',           '👕 T-Shirts'],
    ['t-shirts',       '👕 T-Shirts'],
    ['t-shirt',        '👕 T-Shirts'],
    ['tshirts',        '👕 T-Shirts'],
    ['tshirt',         '👕 T-Shirts'],
    ['tees',           '👕 T-Shirts'],
    ['tee',            '👕 T-Shirts'],
    ['jerseys',        '👕 T-Shirts'],
    ['jersey',         '👕 T-Shirts'],
    ['shirts',         '👕 T-Shirts'],
    ['shirt',          '👕 T-Shirts'],
    ['jackets',        '🦺 Jackets & Vests'],
    ['jacket',         '🦺 Jackets & Vests'],
    ['vests',          '🦺 Jackets & Vests'],
    ['vest',           '🦺 Jackets & Vests'],
    ['perfume',        '🌸 Perfume'],
    ['cologne',        '🌸 Perfume'],
    ['fragrance',      '🌸 Perfume'],
    // Specific shoe-model names that would otherwise be hijacked by
    // accessory generic words (e.g. Versace "Chain Reaction" hitting
    // 'chain', Balenciaga "Track" being fine here vs "Track Pants"
    // landing in Pants). Listed before accessories.
    ['chain reaction',     '👟 Shoes'],
    ['vapormax',           '👟 Shoes'],
    ['airmax',             '👟 Shoes'],   // no-space variant of 'air max'
    ['airforce',           '👟 Shoes'],   // no-space variant of 'air force'
    ['shox',               '👟 Shoes'],
    ['triple s',           '👟 Shoes'],
    ['speed trainer',      '👟 Shoes'],
    ['speed runner',       '👟 Shoes'],
    ['runners',            '👟 Shoes'],
    ['nocta',              '👟 Shoes'],
    ['lebron',             '👟 Shoes'],
    ['kobe',               '👟 Shoes'],
    ['mihara',             '👟 Shoes'],
    ['golden goose',       '👟 Shoes'],
    ['ggdb',               '👟 Shoes'],
    ['birkenstock',        '👟 Shoes'],
    ['odsy',               '👟 Shoes'],
    ['be right back',      '👟 Shoes'],
    ['out of office',      '👟 Shoes'],
    ['louboutin',          '👟 Shoes'],
    ['loubutin',           '👟 Shoes'],   // sheet typo
    ['salomon',            '👟 Shoes'],
    ['hoka',               '👟 Shoes'],
    ['on cloud',           '👟 Shoes'],
    ['timberland',         '👟 Shoes'],
    ['timbs',              '👟 Shoes'],
    ['ugg',                '👟 Shoes'],
    ['skate',              '👟 Shoes'],   // Louis Vuitton Skate / similar shoe lines
    ['mcqueen',            '👟 Shoes'],   // Alexander McQueen shoe line
    ['converses',          '👟 Shoes'],
    ['converse',           '👟 Shoes'],
    ['b9',                 '👟 Shoes'],   // Dior B-series
    ['b22',                '👟 Shoes'],
    ['b30',                '👟 Shoes'],
    ['b33',                '👟 Shoes'],
    ['b57',                '👟 Shoes'],
    // Accessory keywords are checked BEFORE the 'set'/'kit'/'uniform'
    // tracksuit-fallback block so that e.g. "Cartier Love Bracelet Set"
    // routes to Accessories instead of Tracksuits. Specific bag model
    // names sit above generic 'bag' so "LV Neverfull" doesn't get
    // mis-routed if generic falls through to something else later.
    ['birkin',         '🎁 Accessories'],
    ['kelly bag',      '🎁 Accessories'],
    ['neverfull',      '🎁 Accessories'],
    ['speedy',         '🎁 Accessories'],
    ['fanny pack',     '🎁 Accessories'],
    ['belt bag',       '🎁 Accessories'],
    ['waist bag',      '🎁 Accessories'],
    ['bucket hat',     '🎁 Accessories'],
    ['belt',           '🎁 Accessories'],
    ['belts',          '🎁 Accessories'],
    ['handbag',        '🎁 Accessories'],
    ['purse',          '🎁 Accessories'],
    ['tote',           '🎁 Accessories'],
    ['crossbody',      '🎁 Accessories'],
    ['shoulder bag',   '🎁 Accessories'],
    ['sling',          '🎁 Accessories'],
    ['messenger',      '🎁 Accessories'],
    ['backpack',       '🎁 Accessories'],
    ['duffel',         '🎁 Accessories'],
    ['duffle',         '🎁 Accessories'],
    ['weekender',      '🎁 Accessories'],
    ['clutch',         '🎁 Accessories'],
    ['bag',            '🎁 Accessories'],
    ['bags',           '🎁 Accessories'],
    ['wallet',         '🎁 Accessories'],
    ['wallets',        '🎁 Accessories'],
    ['cardholder',     '🎁 Accessories'],
    ['card holder',    '🎁 Accessories'],
    ['bifold',         '🎁 Accessories'],
    ['hat',            '🎁 Accessories'],
    ['hats',           '🎁 Accessories'],
    ['cap',            '🎁 Accessories'],
    ['caps',           '🎁 Accessories'],
    ['beanie',         '🎁 Accessories'],
    ['beanies',        '🎁 Accessories'],
    ['snapback',       '🎁 Accessories'],
    ['scarf',          '🎁 Accessories'],
    ['scarves',        '🎁 Accessories'],
    ['gloves',         '🎁 Accessories'],
    ['mittens',        '🎁 Accessories'],
    ['necktie',        '🎁 Accessories'],
    ['bowtie',         '🎁 Accessories'],
    ['sunglasses',     '🎁 Accessories'],
    ['shades',         '🎁 Accessories'],
    ['eyewear',        '🎁 Accessories'],
    ['watch',          '🎁 Accessories'],
    ['watches',        '🎁 Accessories'],
    ['wristwatch',     '🎁 Accessories'],
    ['rolex',          '🎁 Accessories'],
    ['submariner',     '🎁 Accessories'],
    ['daytona',        '🎁 Accessories'],
    ['datejust',       '🎁 Accessories'],
    ['royal oak',      '🎁 Accessories'],
    ['nautilus',       '🎁 Accessories'],
    ['patek',          '🎁 Accessories'],
    ['bracelet',       '🎁 Accessories'],
    ['bracelets',      '🎁 Accessories'],
    ['bangle',         '🎁 Accessories'],
    ['necklace',       '🎁 Accessories'],
    ['necklaces',      '🎁 Accessories'],
    ['pendant',        '🎁 Accessories'],
    ['chain',          '🎁 Accessories'],
    ['chains',         '🎁 Accessories'],
    ['earring',        '🎁 Accessories'],
    ['earrings',       '🎁 Accessories'],
    ['hoops',          '🎁 Accessories'],
    ['brooch',         '🎁 Accessories'],
    ['keychain',       '🎁 Accessories'],
    ['lanyard',        '🎁 Accessories'],
    ['socks',          '🎁 Accessories'],
    ['audemars',       '🎁 Accessories'],
    ['piguet',         '🎁 Accessories'],
    ['airpods',        '🎁 Accessories'],
    ['beannies',       '🎁 Accessories'],   // sheet typo of 'beanies'
    ['set',            '🏃 Tracksuits'],
    ['kit',            '🏃 Tracksuits'],
    ['uniform',        '🏃 Tracksuits'],
    // Footwear — generic words first, then shoe-dedicated brands and
    // recognisable shoe model names. The "Shoes" suffix on most items
    // is caught by 'shoes', but plenty of names ("Nike Air", "Jordan",
    // "Asics Gel 1130", "Adidas Forum 84", "Puma LX Court") only have
    // brand/model identifiers.
    ['shoes',          '👟 Shoes'],
    ['shoe',           '👟 Shoes'],
    ['sneakers',       '👟 Shoes'],
    ['sneaker',        '👟 Shoes'],
    ['trainers',       '👟 Shoes'],
    ['boots',          '👟 Shoes'],
    ['boot',           '👟 Shoes'],
    ['sandals',        '👟 Shoes'],
    ['sandal',         '👟 Shoes'],
    ['loafers',        '👟 Shoes'],
    ['loafer',         '👟 Shoes'],
    ['heels',          '👟 Shoes'],
    ['slippers',       '👟 Shoes'],
    ['slipper',        '👟 Shoes'],
    ['slides',         '👟 Shoes'],
    ['slide',          '👟 Shoes'],
    ['jordan',         '👟 Shoes'],
    ['asics',          '👟 Shoes'],
    ['new balance',    '👟 Shoes'],
    ['air max',        '👟 Shoes'],
    ['air force',      '👟 Shoes'],
    ['air jordan',     '👟 Shoes'],
    ['nike air',       '👟 Shoes'],
    ['dunk',           '👟 Shoes'],
    ['forum',          '👟 Shoes'],
    ['samba',          '👟 Shoes'],
    ['gazelle',        '👟 Shoes'],
    ['yeezy',          '👟 Shoes'],
    ['stan smith',     '👟 Shoes'],
    ['superstar',      '👟 Shoes'],
    ['cortez',         '👟 Shoes'],
    ['b22',            '👟 Shoes'],
    ['gel',            '👟 Shoes'],   // Asics Gel-* line
    ['lx court',       '👟 Shoes'],
    ['mr993',          '👟 Shoes'],
    ['u574',           '👟 Shoes'],
];

function derivePinCategory(name) {
    const lower = (name || '').toLowerCase();
    for (const [kw, target] of SPECIAL_PIN_KEYWORDS) {
        const re = new RegExp('\\b' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
        if (re.test(lower)) return target;
    }
    return '';
}

// =============================================================
// HTML PARSING — main multi-tab sheet (clothes categories + budget)
// Row layout: [emoji] | PIC(img) | NAME | PRICE | LINK | QC
// First few rows are category title / back-link / column header; skipped
// by requiring the PIC cell to contain an <img>.
// =============================================================
// Build an id→name map from the MAIN tab (gid 525974875). Used to recover
// names for tabs that leave the name column blank (e.g. Shoes). Layout there:
// [img] | PIC | ITEM NAMES | PRICE | LINK | _ | _ | QC  (name=col 2, link=col 4)
function buildMainNameMap(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const map = new Map();
    for (const row of doc.querySelectorAll('tr')) {
        const cells = row.querySelectorAll('td');
        if (cells.length < 5) continue;
        const name = (cells[2].textContent || '').trim().replace(/\s+/g, ' ');
        if (!name || name === 'ITEM NAMES') continue;
        const link = fixLink(extractLink(cells[4]));
        if (!link) continue;
        const m = link.match(/[?&]id[=%3D]*(\d+)/i) || link.match(/\/weidian\/(\d+)/i);
        if (m && !map.has(m[1])) map.set(m[1], name);
    }
    return map;
}

function parseHtmlSheetCategory(html, categoryName, nameMap) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = Array.from(doc.querySelectorAll('tr'));
    const products = [];

    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length < 5) continue;

        const picCell   = cells[1];
        const nameCell  = cells[2];
        const priceCell = cells[3];
        const linkCell  = cells[4];
        const qcCell    = cells[5] || null;

        const img = picCell.querySelector('img');
        if (!img) continue; // header rows have no image

        let name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
        if (name === 'ITEM NAMES') continue; // header row
        // Empty-name rows are NOT skipped yet: some tabs (e.g. Shoes) leave
        // the name column blank, and we recover the name from the main-tab
        // id→name map below once the product id is known.

        const price = (priceCell.textContent || '').trim();
        if (!price || price === '$0' || /sold\s*out/i.test(price)) continue;

        let photo = img.getAttribute('src') || '';
        // Upgrade the size suffix to =s800 for sharp cards. Some tabs
        // (e.g. New Links) embed images at =s100-w100-h20 — a 20-px-tall
        // thumbnail strip that looks terrible at card size. Others come
        // at =s179-w130-h179. Both docsubipk and the legacy non-docsubipk
        // path accept arbitrary size suffixes — the earlier worry about
        // session-bound tokens turned out not to apply.
        if (photo) {
            photo = photo
                .replace(/=s\d+(-w\d+)?(-h\d+)?$/, '=s800')
                .replace(/=w\d+-h\d+$/, '=w800-h800');
        }

        let link = extractLink(linkCell);
        link = fixLink(link);
        if (!link) continue;

        let qcLink = qcCell ? extractLink(qcCell) : '';

        let weidianId = '';
        // Handle both `?id=12345` (legacy) and `/product/weidian/12345` (current GTBuy URLs).
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i) || link.match(/\/weidian\/(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        // Recover a blank name from the main catalogue tab (keyed by product
        // id). The Shoes tab ships with no names; the main tab lists the same
        // products WITH names, so we look them up here. Rows still nameless
        // after this (e.g. fansbuy/cnfans links absent from the main tab) are
        // skipped, matching the original behaviour.
        if (!name && nameMap && weidianId) name = nameMap.get(weidianId) || '';
        if (!name) continue;

        products.push({ name, price, photo, link, qcLink: qcLink || '', category: categoryName, weidianId, pinCategory: derivePinCategory(name) });
    }

    return products;
}

// =============================================================
// HTML PARSING — Discount section of the MAIN spreadsheet tab.
// Skips ahead to the "New Year Limited-Time Offers" section header
// and only parses rows after it. Names are prefixed with "New Year
// Discounts -" in the sheet; we strip that prefix.
// Row layout in this section: [emoji] | PIC | NAME | PRICE | LINK | _ | _ | QC
// =============================================================
function parseHtmlSheetDiscount(html, categoryName) {
    // The MAIN SPREADSHEET tab is ~3.7 MB, but the discount section is only
    // ~60 rows of it. Running DOMParser on the full document locks the main
    // thread for several seconds on phones. Slice the raw HTML down to the
    // discount section first (string ops are ~50x faster than DOM parsing)
    // and parse only that.
    const sectionRe = /limited.?time offers/i;
    const startIdx = html.search(sectionRe);
    if (startIdx < 0) return [];
    // Back up to the start of the <tr> that contains the section header so
    // its row counts toward the index; we still skip it with the +2 offset
    // below. Then find the first "Back to top" after it (next section break).
    const trStart = html.lastIndexOf('<tr', startIdx);
    const sliceStart = trStart >= 0 ? trStart : startIdx;
    const endRel = html.slice(sliceStart).search(/back to top/i);
    const sliceEnd = endRel > 0 ? sliceStart + endRel : Math.min(sliceStart + 200000, html.length);
    const chunk = html.slice(sliceStart, sliceEnd);

    const parser = new DOMParser();
    // Wrap the slice in a minimal table so cells nest correctly.
    const doc = parser.parseFromString('<table>' + chunk + '</table>', 'text/html');
    const rows = Array.from(doc.querySelectorAll('tr'));
    const products = [];

    let start = -1;
    for (let i = 0; i < rows.length; i++) {
        if (sectionRe.test(rows[i].textContent || '')) {
            start = i + 2; // skip section header + column header
            break;
        }
    }
    if (start < 0) return products;

    for (let i = start; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td');
        // Section terminator: "Back to top" / "CHEAP FINDS" follow the
        // discount block as short rows. Stop parsing the moment we exit
        // the uniformly 8-column discount table.
        if (cells.length < 5) break;
        const rowText = (rows[i].textContent || '').trim();
        if (/^back to top/i.test(rowText)) break;

        const picCell   = cells[1];
        const nameCell  = cells[2];
        const priceCell = cells[3];
        const linkCell  = cells[4];
        const qcCell    = cells[cells.length - 1];

        const img = picCell.querySelector('img');
        if (!img) continue;

        let name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
        name = name.replace(/^new year discounts\s*-+\s*/i, '');
        if (!name) continue;

        const price = (priceCell.textContent || '').trim();
        if (!price || price === '$0' || /sold\s*out/i.test(price)) continue;

        let photo = img.getAttribute('src') || '';
        // Keep docsubipk URLs at their original size — Google may bind
        // the token to the requested variant. Only upgrade the older
        // size-suffix patterns (non-docsubipk).
        if (photo && !/\/docsubipk\//.test(photo)) photo = photo
            .replace(/=s\d+(-w\d+)?(-h\d+)?$/, '=s800')
            .replace(/=w\d+-h\d+$/, '=w800-h800');

        let link = extractLink(linkCell);
        link = fixLink(link);
        if (!link) continue;

        const qcLink = qcCell ? extractLink(qcCell) : '';

        let weidianId = '';
        // Handle both `?id=12345` (legacy) and `/product/weidian/12345` (current GTBuy URLs).
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i) || link.match(/\/weidian\/(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        products.push({ name, price, photo, link, qcLink, category: categoryName, weidianId, isDiscount: true, pinCategory: derivePinCategory(name) });
    }

    return products;
}

// =============================================================
// HTML PARSING — Best Sellers / showcase section of the MAIN tab.
// Sits between the column-header row (PIC | ITEM NAMES | ...) and
// the "🎊 New Year Limited-Time Offers 🎊" header. Same 8-column row
// layout as the discount section, so we reuse the same field offsets.
// =============================================================
function parseHtmlSheetBestSellers(html, categoryName) {
    // Slice the raw HTML between the column header and the discount
    // section start, same micro-optimisation as parseHtmlSheetDiscount
    // (DOMParser on the full 3.7MB doc would lock the main thread).
    const headerRe = /ITEM NAMES/i;
    const headerIdx = html.search(headerRe);
    if (headerIdx < 0) return [];
    const headerTrStart = html.lastIndexOf('<tr', headerIdx);
    const sliceStart = headerTrStart >= 0 ? headerTrStart : headerIdx;
    const endRel = html.slice(sliceStart).search(/limited.?time offers/i);
    const sliceEnd = endRel > 0 ? sliceStart + endRel : Math.min(sliceStart + 200000, html.length);
    const chunk = html.slice(sliceStart, sliceEnd);

    const parser = new DOMParser();
    const doc = parser.parseFromString('<table>' + chunk + '</table>', 'text/html');
    const rows = Array.from(doc.querySelectorAll('tr'));
    const products = [];

    // Skip rows until we pass the column header (the one containing
    // "ITEM NAMES" + "PRICE"). Start collecting from the row after.
    let start = -1;
    for (let i = 0; i < rows.length; i++) {
        const t = (rows[i].textContent || '').toUpperCase();
        if (t.includes('ITEM NAMES') && t.includes('PRICE')) {
            start = i + 1;
            break;
        }
    }
    if (start < 0) return products;

    for (let i = start; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td');
        if (cells.length < 5) break;
        const rowText = (rows[i].textContent || '').trim();
        if (/^back to top/i.test(rowText)) break;

        const picCell   = cells[1];
        const nameCell  = cells[2];
        const priceCell = cells[3];
        const linkCell  = cells[4];
        const qcCell    = cells[cells.length - 1];

        const name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
        if (!name) continue;
        // Skip the column-header row if we somehow re-encounter it.
        if (/^item names$/i.test(name)) continue;

        const price = (priceCell.textContent || '').trim();
        if (!price || price === '$0' || /sold\s*out/i.test(price)) continue;

        // Image is optional for Best Sellers — some items (e.g. the
        // 3DAP Watch Prototype) genuinely have no thumbnail in the
        // sheet but should still surface. We still require a link.
        const img = picCell.querySelector('img');
        let photo = img ? (img.getAttribute('src') || '') : '';
        if (photo && !/\/docsubipk\//.test(photo)) photo = photo
            .replace(/=s\d+(-w\d+)?(-h\d+)?$/, '=s800')
            .replace(/=w\d+-h\d+$/, '=w800-h800');

        let link = extractLink(linkCell);
        link = fixLink(link);
        if (!link) continue;

        let qcLink = '';
        if (qcCell && qcCell.querySelector('a')) qcLink = extractLink(qcCell);

        let weidianId = '';
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i) || link.match(/\/weidian\/(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        products.push({ name, price, photo, link, qcLink, category: categoryName, weidianId, pinCategory: derivePinCategory(name) });
    }

    return products;
}

// =============================================================
// HTML PARSING — extra category sections of the MAIN tab.
// The MAIN SPREADSHEET tab (gid 525974875) is one wide grid split into
// vertical sections, each introduced by a header row whose category name
// sits in column 0 (e.g. "Electronics", "Others", "Watches") and is
// preceded by a "Back to top" row. The clothes categories have their own
// dedicated tabs (parsed elsewhere); the sections below have NO dedicated
// tab, so we walk the MAIN tab and emit their products tagged with a pill
// label. Row layout matches the clothes tabs:
//   [emoji] | PIC(img) | NAME | PRICE | LINK | _ | _ | QC
// =============================================================
// Normalized col-0 header text → pill label. Only sections listed here are
// emitted; any other header (a dedicated-tab section like Hoodies, or a
// showcase area like CHEAP FINDS / Best Sellers) resets currentCategory to
// null so its rows are skipped — that prevents duplicating dedicated tabs.
const SECTION_CATEGORIES = new Map([
    ['bags & backpacs',  '👜 Bags & Backpacks'],
    ['bags & backpacks', '👜 Bags & Backpacks'],
    ['underwear',        '🩲 Underwear'],
    ['wallets',          '👛 Wallets'],
    ['cap & hat',        '🧢 Cap & Hat'],
    ['jewelry',          '💍 Jewelry'],
    ['sunglasses',       '🕶️ Sunglasses'],
    ['electronics',      '🎧 Electronics'],
    ['others',           '📦 Others'],
    ['watches',          '⌚ Watches'],
    ['belt',             '🟫 Belt'],
]);

function parseHtmlSheetSections(html) {
    // The MAIN tab is ~3.7 MB; DOMParser on the full document locks the main
    // thread on phones. Every wanted section sits below the "Bags & Backpacs"
    // header, so slice from that header down to "UPDATE NEW LINKS" (the final
    // section) before parsing — same micro-optimisation as
    // parseHtmlSheetDiscount / parseHtmlSheetBestSellers.
    //
    // Anchor on the section-HEADER form `…Backpac…</td>` (a colspan'd title
    // cell), NOT the table-of-contents jump link `…Backpacks</a>` near the top
    // of the sheet. `&` is HTML-encoded as `&amp;` in the raw markup.
    const firstHeaderRe = /bags\s*&(?:amp;)?\s*backpac\w*<\/td>/i;
    const startIdx = html.search(firstHeaderRe);
    if (startIdx < 0) return [];
    const trStart = html.lastIndexOf('<tr', startIdx);
    const sliceStart = trStart >= 0 ? trStart : startIdx;
    const endRel = html.slice(sliceStart).search(/update new links/i);
    const sliceEnd = endRel > 0 ? sliceStart + endRel : html.length;
    const chunk = html.slice(sliceStart, sliceEnd);

    const parser = new DOMParser();
    const doc = parser.parseFromString('<table>' + chunk + '</table>', 'text/html');
    const rows = Array.from(doc.querySelectorAll('tr'));
    const products = [];

    let currentCategory = null;
    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length === 0) continue;

        // Section dividers (category titles, "Back to top") are single
        // colspan'd cells, so they have far fewer <td>s than the 8-column
        // product rows. Detect them BEFORE the product-row guard.
        if (cells.length < 5) {
            const header = (cells[0].textContent || '').trim().toLowerCase().replace(/\s+/g, ' ');
            if (SECTION_CATEGORIES.has(header)) currentCategory = SECTION_CATEGORIES.get(header);
            else if (header) currentCategory = null; // "Back to top" or a dedicated-tab section → stop emitting
            continue;
        }
        if (!currentCategory) continue;

        const picCell   = cells[1];
        const nameCell  = cells[2];
        const priceCell = cells[3];
        const linkCell  = cells[4];
        const qcCell    = cells[cells.length - 1];

        const img = picCell.querySelector('img');
        if (!img) continue; // spacer rows have no image

        let name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
        if (!name || name === 'ITEM NAMES') continue;

        const price = (priceCell.textContent || '').trim();
        if (!price || price === '$0' || /sold\s*out/i.test(price)) continue;

        let photo = img.getAttribute('src') || '';
        if (photo) {
            photo = photo
                .replace(/=s\d+(-w\d+)?(-h\d+)?$/, '=s800')
                .replace(/=w\d+-h\d+$/, '=w800-h800');
        }

        let link = extractLink(linkCell);
        link = fixLink(link);
        if (!link) continue;

        const qcLink = qcCell ? extractLink(qcCell) : '';

        let weidianId = '';
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i) || link.match(/\/weidian\/(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        products.push({ name, price, photo, link, qcLink: qcLink || '', category: currentCategory, weidianId, pinCategory: derivePinCategory(name) });
    }

    return products;
}

// =============================================================
// HTML PARSING — Video Finds tab of the MAIN spreadsheet.
// Layout differs from the clothes tabs: the name is column index 2
// (ITEM NAMES) and the price + link are trailing cells whose index
// shifts row-to-row (some rows have 5 cells, some 6, depending on
// whether the price gets its own column) — so we find the price as the
// first trailing $ cell and the link as the last cell with an anchor.
//
// The PRODUCT PHOTOS are FLOATING (over-cell) images: Google emits them
// as absolutely-positioned `.waffle-embedded-object-overlay` divs AFTER
// the table, NOT inside the cells. The <img> actually inside each row is
// a single shared spacer placeholder (identical on every row), so we
// must ignore it.
//
// The overlays are NOT in row order in the DOM — Google scrambles them.
// Instead, a `posObj('gid','embed_id', ROW, col, offX, offY)` script call
// is emitted per image giving the cell it anchors to. ROW counts grid
// rows with the header at 0, so the first product is ROW 1 — that equals
// (row-gutter number − 1), the gutter being Google's 1-based row label.
// offY is the image's pixel offset inside
// that cell: when it's roughly a full row-height (~130px) the image
// actually renders in the row BELOW its anchor cell, so we bump ROW by 1.
// With that adjustment the images map 1:1 onto the data rows (some rows
// carry two photos, some none — the offset is what disentangles them).
// =============================================================
function parseHtmlSheetVideo(html, categoryName) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // embed_id → photo src, in document order.
    const srcByEmbed = {};
    for (const ov of doc.querySelectorAll('.waffle-embedded-object-overlay')) {
        const img = ov.querySelector('img');
        if (ov.id && img) srcByEmbed[ov.id] = img.getAttribute('src') || '';
    }

    // posObj(...) anchors → photo keyed by grid ROW (after spill
    // adjustment). First image wins if two ever resolve to the same row.
    const photoByRow = {};
    const ROW_SPILL_PX = 60; // offY past this → image belongs to the next row
    const posRe = /posObj\('[^']*',\s*'(embed_\d+)',\s*(-?\d+),\s*-?\d+,\s*-?\d+,\s*(-?\d+)\)/g;
    let pm;
    while ((pm = posRe.exec(html))) {
        const src = srcByEmbed[pm[1]];
        if (!src) continue;
        const row = parseInt(pm[2], 10) + (parseInt(pm[3], 10) >= ROW_SPILL_PX ? 1 : 0);
        if (!(row in photoByRow)) photoByRow[row] = src;
    }

    const rows = doc.querySelectorAll('tr');
    const products = [];

    // Detect the shared SPACER image. Older rows keep their real photo in a
    // floating overlay and put one identical placeholder <img> in the PIC
    // cell; newer rows were instead added with "image in cell" — the PIC
    // <img> IS the real photo and there's no overlay. The spacer repeats
    // across many rows while real in-cell photos are unique, so the most
    // frequent in-cell src is the spacer (token changes per fetch, so we
    // can't hardcode it).
    const imgFreq = {};
    for (const r of rows) {
        const im = r.querySelector('td img');
        const s = im ? (im.getAttribute('src') || '') : '';
        if (s) imgFreq[s] = (imgFreq[s] || 0) + 1;
    }
    let spacerSrc = '';
    for (const s in imgFreq) {
        if (imgFreq[s] > 1 && imgFreq[s] > (imgFreq[spacerSrc] || 0)) spacerSrc = s;
    }

    for (const row of rows) {
        const cells = Array.from(row.querySelectorAll('td'));
        if (cells.length < 4) continue;

        // Name lives in the ITEM NAMES column (index 2) on every data row.
        const name = (cells[2].textContent || '').trim().replace(/\s+/g, ' ');
        if (!name || /^item names$/i.test(name)) continue;

        // Look up this row's photo by its grid position. The row-gutter <th>
        // holds Google's 1-based row number; the posObj ROW key is that
        // number minus 1 (gutter 2 = first product = ROW 1).
        const gutter = parseInt((row.querySelector('th')?.textContent || '').trim(), 10);
        let photo = (!isNaN(gutter) && photoByRow[gutter - 1]) || '';
        // No floating overlay? Fall back to a unique in-cell PIC image
        // (newer "image in cell" rows), ignoring the shared spacer.
        if (!photo) {
            const im = row.querySelector('td img');
            const src = im ? (im.getAttribute('src') || '') : '';
            if (src && src !== spacerSrc) photo = src;
        }
        // Downscale the =s2048 high-res original to a card-sized variant.
        if (photo) photo = photo
            .replace(/=s\d+(-w\d+)?(-h\d+)?$/, '=s800')
            .replace(/=w\d+-h\d+$/, '=w800-h800');

        // Price: first trailing cell (after the name) holding a $ amount.
        // Formats vary: "$40.00", "$27.00-$98.00", "20.00$", "8$", "-$50.00".
        let price = '';
        for (let i = 3; i < cells.length; i++) {
            const t = (cells[i].textContent || '').trim().replace(/\s+/g, ' ');
            if (t.includes('$') && /\d/.test(t)) { price = t; break; }
        }
        if (!price || /sold\s*out/i.test(price)) continue;

        // Link: last cell with a real product anchor. Rows carry a trailing
        // "up" cell linking to an in-sheet anchor (href="#gid=…&range=…");
        // skip any anchor whose URL isn't an external http(s) link so that
        // navigation link doesn't shadow the actual LINK cell.
        let link = '';
        for (let i = cells.length - 1; i >= 3; i--) {
            if (!cells[i].querySelector('a')) continue;
            const candidate = extractLink(cells[i]);
            if (!/^https?:\/\//i.test(candidate)) continue;
            link = candidate;
            break;
        }
        link = fixLink(link);
        if (!link) continue;

        let weidianId = '';
        const idMatch = link.match(/[?&]id[=%3D]*(\d+)/i) || link.match(/\/weidian\/(\d+)/i);
        if (idMatch) weidianId = idMatch[1];

        if (!photo && !weidianId) continue;

        products.push({ name, price, photo, link, qcLink: '', category: categoryName, weidianId, pinCategory: derivePinCategory(name) });
    }

    return products;
}

// =============================================================
// FETCH PRODUCTS
// =============================================================
// Per-product overrides — for items whose spreadsheet cell has a missing
// image or unclear name. `match` is a substring tested against p.name
// (lowercased). First match wins. `src` → photo override, `name` →
// display-name override.
const PRODUCT_OVERRIDES = [
    { match: '3dap',  src: 'img-3dap-watch.png', name: 'Swatch X AP' },
];

async function fetchHtml(sheetId, gid) {
    const resp = await fetch(buildHtmlUrl(sheetId, gid));
    if (!resp.ok) throw new Error(`HTTP ${resp.status} for gid ${gid}`);
    return resp.text();
}

// Merge one source's products into the catalogue and repaint. Each source
// is rendered the moment it arrives, so the top-priority products appear
// almost instantly while the rest stream in underneath. sourceOrder (lower
// = higher up) keeps the final order identical to the old all-at-once load.
function ingestSource(order, products) {
    if (!products || !products.length) return;
    for (const p of products) {
        // Drop exact-duplicate cards: a listing is redundant only when its
        // link, name, price AND photo all match one already shown. Any
        // difference (price/photo/link) keeps both — see seenProductKeys.
        const dupKey = `${p.link} ${p.name} ${p.price} ${p.photo}`;
        if (seenProductKeys.has(dupKey)) continue;
        seenProductKeys.add(dupKey);

        const lower = (p.name || '').toLowerCase();
        for (const o of PRODUCT_OVERRIDES) {
            if (!lower.includes(o.match)) continue;
            if (o.src && !p.photo) p.photo = o.src;
            if (o.name) p.name = o.name;
            break;
        }
        p.sourceOrder = order;
        allProducts.push(p);
    }
    buildCategoryTabs();
    renderProducts();
    loadingEl.classList.add('hidden');
    if (window.i18n) window.i18n.translateDynamic();
}

async function fetchProducts() {
    errorEl.classList.add('hidden');
    noResultsEl.classList.add('hidden');
    loadingEl.classList.remove('hidden');

    // Start fresh. The grid is wiped lazily by the first ingestSource() →
    // renderProducts() (the render key resets), so on an auto-refresh the
    // old cards stay on screen until the first new wave is ready.
    allProducts = [];
    seenProductKeys = new Set();
    lastRenderKey = null;

    // Kick every fetch off concurrently up front so the network downloads in
    // parallel; we only consume the results in priority order below.
    const mainHtmlP = fetchHtml(SHEET5_ID, SHEET5_DISCOUNT_TAB.gid);
    // The MAIN tab's id→name map lets blank-name category rows recover their
    // names. Best-effort: on failure it degrades to an empty map (nameless
    // rows are skipped, exactly as before).
    const nameMapP = mainHtmlP.then(buildMainNameMap).catch(() => new Map());

    // The Budget tab in the main sheet is folded into Discount Items —
    // retagged at parse time so it shows under the Discount Items pill.
    // Revert by passing back the real tab name.
    //
    // `plan` is consumed top-to-bottom; this order IS the on-screen order, so
    // the showcase/discount items (the "top products") paint first.
    const plan = [
        ['Discount',      1, mainHtmlP.then(h => parseHtmlSheetDiscount(h, 'Discount Items'))],
        ['Budget new',    1, fetchHtml(SHEET5_ID, SHEET5_BUDGET_TAB.gid).then(h => parseHtmlSheetCategory(h, 'Discount Items'))],
        ['Best Sellers',  2, mainHtmlP.then(h => parseHtmlSheetBestSellers(h, 'Best Sellers'))],
        ['Video Finds',   3, fetchHtml(SHEET5_ID, SHEET5_VIDEO_TAB.gid).then(h => parseHtmlSheetVideo(h, '📹 Video Finds'))],
    ];
    // Per-category clothes tabs (need the name map to parse).
    for (const tab of SHEET5_TABS) {
        const htmlP = fetchHtml(SHEET5_ID, tab.gid);
        plan.push([tab.name, 4, Promise.all([htmlP, nameMapP]).then(([h, m]) => parseHtmlSheetCategory(h, tab.name, m))]);
    }
    // Extra MAIN-tab categories (Electronics, Others/Lego, Watches, Bags…).
    plan.push(['MAIN sections', 5, mainHtmlP.then(parseHtmlSheetSections)]);

    let anyFailed = false;
    for (const [label, order, promise] of plan) {
        try {
            ingestSource(order, await promise);
        } catch (err) {
            anyFailed = true;
            console.error(`Source failed: ${label}`, err);
        }
    }

    loadingEl.classList.add('hidden');
    if (allProducts.length === 0) {
        if (anyFailed) errorEl.classList.remove('hidden');
    } else if (window.i18n) {
        window.i18n.translateDynamic();
    }
}

// =============================================================
// CATEGORY TABS
// =============================================================
function buildCategoryTabs() {
    // Union of primary categories AND pinCategory targets, so derived
    // pills like '🎁 Accessories' (no items carry that as p.category)
    // still surface in the tab list as long as at least one item has
    // pinCategory='🎁 Accessories'.
    const categories = [...new Set(
        allProducts.flatMap(p => [p.category, p.pinCategory].filter(Boolean))
    )];
    categoryTabsEl.innerHTML = '';

    const frontPinned = ['Discount Items', 'Best Sellers', '📹 Video Finds', '🎁 Accessories'];
    for (const name of [...frontPinned].reverse()) {
        const idx = categories.indexOf(name);
        if (idx > -1) {
            categories.splice(idx, 1);
            categories.unshift(name);
        }
    }

    addPill('All', 'all');
    // Synthetic "1.1" pill — everything that is NOT a discount item.
    addPill('1.1', '1.1');
    for (const cat of categories) {
        addPill(cat, cat);
    }

    // Feed the autocomplete: each category becomes a suggestion that switches
    // the active pill (clicking it filters, rather than text-searching, since
    // titles don't contain words like "Electronics").
    categorySuggestions = categories.map(cat => {
        const label = stripEmoji(cat);
        return { display: label, value: cat, kind: 'category', terms: [label.toLowerCase(), ...label.toLowerCase().split(/\s+/)] };
    });
}

function stripEmoji(s) {
    return String(s).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}️‍]/gu, '').trim();
}

function addPill(label, value) {
    const btn = document.createElement('button');
    btn.className = 'category-pill' + (activeCategory === value ? ' active' : '');
    btn.dataset.category = value;
    btn.dataset.catKey = catTranslationKey(value);
    btn.textContent = translatePill(value, label);
    btn.addEventListener('click', () => setCategory(value));
    categoryTabsEl.appendChild(btn);
}

function catTranslationKey(value) {
    if (value === 'all') return 'cat_all';
    if (value === 'Special Finds') return 'cat_special';
    if (value === 'Budget Finds') return 'cat_budget';
    if (value === 'Discount Items') return 'cat_discount';
    if (value === 'Best Sellers') return 'cat_bestsellers';
    if (value === '🎁 Accessories') return 'cat_accessories';
    if (value === '📹 Video Finds') return 'cat_video';
    return '';
}

function translatePill(value, fallback) {
    const key = catTranslationKey(value);
    if (key) return (window.i18n && window.i18n.t(key)) || fallback;
    // Sheet-driven category — fall back to dynamic-translation cache
    return (window.i18n && window.i18n.dyn(value)) || fallback;
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
    updateSuggestions(e.target.value);
});

priceSortEl.addEventListener('change', (e) => {
    priceSort = e.target.value;
    renderProducts(true);
});

// =============================================================
// SEARCH SUGGESTIONS (autocomplete)
// =============================================================
// Category suggestions are rebuilt each load (see buildCategoryTabs). Declared
// with var so buildCategoryTabs, defined earlier, can assign it safely.
var categorySuggestions = [];

function titleCase(s) {
    return s.replace(/\b\w/g, c => c.toUpperCase());
}

// Static term suggestions derived from the alias table: one entry per concept,
// displayed as its most descriptive term, matched against ALL its aliases (so
// typing "lv" suggests "Louis Vuitton").
const TERM_SUGGESTIONS = (() => {
    const out = [];
    const seen = new Set();
    for (const group of SYNONYM_GROUPS) {
        // Groups are authored base-term-first, so the first reasonably long
        // term is the most recognisable label (e.g. "joggers", not "track
        // pants"; "louis vuitton", not the "lv" abbreviation).
        const display = group.find(t => t.length >= 4) || group[0];
        const key = display.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        out.push({ display: titleCase(display), value: display, kind: 'term', terms: group.map(t => t.toLowerCase()) });
    }
    return out;
})();

const suggestionsEl = document.getElementById('search-suggestions');
let suggActive = -1;       // keyboard-highlighted index
let suggCurrent = [];      // currently shown suggestions

function rankSuggestion(s, q) {
    let best = 99;
    for (const t of s.terms) {
        if (t === q) best = Math.min(best, 0);
        else if (t.startsWith(q)) best = Math.min(best, 1);
        else if (t.includes(q)) best = Math.min(best, 2);
        else if (q.length >= 4 && Math.abs(t.length - q.length) <= 1 && editDistance(q, t, 1) <= 1) best = Math.min(best, 3);
    }
    return best;
}

function updateSuggestions(raw) {
    const q = (raw || '').toLowerCase().trim();
    if (!q) { hideSuggestions(); return; }
    const pool = categorySuggestions.concat(TERM_SUGGESTIONS);
    const scored = [];
    for (const s of pool) {
        const r = rankSuggestion(s, q);
        if (r < 99) scored.push({ s, r });
    }
    // Categories first within the same rank, then shorter labels (closer match).
    scored.sort((a, b) => a.r - b.r ||
        (a.s.kind === b.s.kind ? 0 : a.s.kind === 'category' ? -1 : 1) ||
        a.s.display.length - b.s.display.length);
    const list = [];
    const seen = new Set();
    for (const { s } of scored) {
        const key = s.kind + ':' + s.display.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        list.push(s);
        if (list.length >= 8) break;
    }
    renderSuggestions(list, q);
}

function renderSuggestions(list, q) {
    suggCurrent = list;
    suggActive = -1;
    if (!list.length) { hideSuggestions(); return; }
    suggestionsEl.innerHTML = '';
    list.forEach((s, i) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.dataset.index = i;
        const icon = document.createElement('span');
        icon.className = 'sugg-icon';
        icon.textContent = s.kind === 'category' ? '#' : '⌕';
        const label = document.createElement('span');
        label.className = 'sugg-label';
        label.innerHTML = highlightMatches(s.display, q);
        const kind = document.createElement('span');
        kind.className = 'sugg-kind';
        kind.textContent = s.kind === 'category' ? 'category' : 'search';
        li.appendChild(icon);
        li.appendChild(label);
        li.appendChild(kind);
        // mousedown (not click) so it fires before the input's blur handler.
        li.addEventListener('mousedown', (e) => { e.preventDefault(); applySuggestion(s); });
        suggestionsEl.appendChild(li);
    });
    suggestionsEl.classList.remove('hidden');
    searchInput.setAttribute('aria-expanded', 'true');
}

function hideSuggestions() {
    suggestionsEl.classList.add('hidden');
    suggestionsEl.innerHTML = '';
    suggCurrent = [];
    suggActive = -1;
    searchInput.setAttribute('aria-expanded', 'false');
}

function applySuggestion(s) {
    if (s.kind === 'category') {
        // Switch to that category and clear the text search.
        searchInput.value = '';
        searchQuery = '';
        setCategory(s.value);
    } else {
        searchInput.value = s.value;
        searchQuery = s.value.toLowerCase().trim();
        renderProducts(true);
    }
    hideSuggestions();
}

function setSuggActive(i) {
    const items = suggestionsEl.querySelectorAll('li');
    if (!items.length) return;
    suggActive = (i + items.length) % items.length;
    items.forEach((li, idx) => li.classList.toggle('active', idx === suggActive));
}

searchInput.addEventListener('keydown', (e) => {
    if (suggestionsEl.classList.contains('hidden') || !suggCurrent.length) {
        if (e.key === 'Escape') hideSuggestions();
        return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setSuggActive(suggActive + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSuggActive(suggActive - 1); }
    else if (e.key === 'Enter') {
        if (suggActive >= 0 && suggCurrent[suggActive]) { e.preventDefault(); applySuggestion(suggCurrent[suggActive]); }
        else hideSuggestions();
    } else if (e.key === 'Escape') { hideSuggestions(); }
});

// =============================================================
// RENDER
// =============================================================
function renderProducts(skipAnimation) {
    let filtered = allProducts;

    if (activeCategory === '1.1') {
        // Synthetic "1.1" pill — everything that is NOT a discount item.
        filtered = filtered.filter(p => p.category !== 'Discount Items');
    } else if (activeCategory !== 'all') {
        // Items show up in their primary category (p.category from the
        // tab they were parsed from) AND in any pinCategory derived from
        // their name. So a "Louis Vuitton Belt" parsed from the Perfume
        // tab appears in Perfume + Accessories. An Air Jordan in Best
        // Sellers appears in Best Sellers + Shoes. Same item never
        // double-renders within a single pill because the filter is OR.
        filtered = filtered.filter(
            p => p.category === activeCategory ||
                 p.pinCategory === activeCategory
        );
    }
    // activeCategory === 'all' → no filter, show everything.

    let isSearching = false;
    if (searchQuery) {
        isSearching = true;

        // Score every product; keep those that match (all core terms present
        // for a "full" hit, at least one otherwise).
        const scored = [];
        for (const p of filtered) {
            const r = searchScore(p.name, searchQuery);
            if (r.matched) { p._searchScore = r.score; scored.push({ p, full: r.full }); }
        }

        // Prefer products matching EVERY (non-colour) term. Only when nothing
        // matches all terms do we fall back to partial matches — so an
        // over-specific query never shows an empty page. Colours rank within
        // the chosen tier rather than filtering it (see searchScore).
        const fullHits = scored.filter(x => x.full);
        filtered = (fullHits.length ? fullHits : scored).map(x => x.p);
    }

    // Sort: when searching, best match first (more terms matched). Then photos
    // first, then sourceOrder tiebreak (Special Finds → Budget Finds).
    filtered.sort((a, b) => {
        if (isSearching) {
            const scoreCmp = (b._searchScore || 0) - (a._searchScore || 0);
            if (scoreCmp !== 0) return scoreCmp;
        }
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
        currentFiltered = [];
        renderedCount = 0;
        lastRenderKey = renderKey();
        return;
    }

    noResultsEl.classList.add('hidden');

    // Append when the view is unchanged AND the cards already on screen are
    // still a prefix of the freshly sorted list — i.e. a progressive-load
    // wave that only adds items below what's shown. Otherwise (search /
    // category / price change, or a reordering newcomer) do a full re-render.
    const key = renderKey();
    const canAppend = key === lastRenderKey && prefixEqual(filtered, currentFiltered, renderedCount);
    currentFiltered = filtered;

    if (canAppend) {
        // Top up to the first screen if waves are still arriving; beyond that,
        // infinite scroll appends the newcomers as the user scrolls down.
        while (renderedCount < BATCH_SIZE && renderedCount < currentFiltered.length) {
            const before = renderedCount;
            appendBatch();
            if (renderedCount === before) break;
        }
    } else {
        lastRenderKey = key;
        renderedCount = 0;
        gridEl.innerHTML = '';
        appendBatch();
    }
}

// View signature — a change here (active pill, search text, price sort)
// means the displayed list is different and must be fully re-rendered.
function renderKey() {
    return activeCategory + ' ' + (searchQuery || '') + ' ' + (priceSort || '');
}

// True when the first n entries of a and b are the same object references.
function prefixEqual(a, b, n) {
    if (a.length < n || b.length < n) return false;
    for (let i = 0; i < n; i++) if (a[i] !== b[i]) return false;
    return true;
}

function buildCard(p, i) {
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
    const imgSrc = p.photo ? photoUrl(p.photo, 800, 800) : placeholder;

    const card = document.createElement('div');
    // Pinned links (Special Finds) keep their gold treatment; discount items
    // get the red treatment; everything else is a "1.1" item and gets the
    // green highlight + "1.1" tag.
    const is11 = p.category !== 'Special Finds' &&
                 p.category !== 'Discount Items' && !p.isDiscount;
    let extraClass = '';
    if (p.category === 'Special Finds') extraClass = ' pinned';
    else if (p.category === 'Discount Items' || p.isDiscount) extraClass = ' discount';
    else extraClass = ' onepointone';
    card.className = 'product-card' + extraClass;
    card.dataset.index = i;

    const img = document.createElement('img');
    img.id = 'pimg-' + i;
    img.alt = p.name;
    img.loading = 'lazy';
    // Strip referer BEFORE setting src so the policy applies to the actual
    // network request. Some browsers fire the fetch immediately on src= and
    // setting referrerPolicy after has no effect.
    // Google blocks googleusercontent.com requests with non-Google referers (429).
    img.referrerPolicy = 'no-referrer';
    // Only set the attribute if we have an actual id. An empty data-weidian
    // still matches `img[data-weidian]` in querySelectorAll and would put
    // loadMissingImages's while-loop into an infinite spin (filter passes
    // but processOne can't populate imgCache for an empty id).
    if (p.weidianId) img.dataset.weidian = p.weidianId;
    img.onerror = function() { this.onerror = null; this.src = placeholder; };
    img.src = imgSrc;

    const info = document.createElement('div');
    info.className = 'product-info';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'product-name';
    const displayName = (window.i18n && window.i18n.dyn(p.name)) || p.name;
    if (searchQuery) nameDiv.innerHTML = highlightMatches(displayName, searchQuery);
    else nameDiv.textContent = displayName;

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
    if (p.category === 'Discount Items' || p.isDiscount) {
        const badge = document.createElement('div');
        badge.className = 'discount-badge';
        badge.textContent = 'Discount!';
        card.appendChild(badge);
    }
    if (p.category === '📹 Video Finds') {
        const badge = document.createElement('div');
        badge.className = 'community-badge';
        badge.textContent = 'Community';
        card.appendChild(badge);
    }
    if (is11) {
        const badge = document.createElement('div');
        badge.className = 'onepointone-badge';
        badge.textContent = '1.1';
        card.appendChild(badge);
    }
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
    // Weidian fallback endpoint (thor.weidian.com/detail/getItemSkuInfo)
    // is dead — every JSONP call fails with ERR_HTTP2_PROTOCOL_ERROR.
    // Disabling the call eliminates 50+ failed requests per render and
    // keeps the console clean. Cards whose direct image fails will stay
    // on the placeholder until the upstream is restored or replaced.
    // loadMissingImages();
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
// Disable the browser's automatic scroll-restoration on back/forward
// nav and refresh. Otherwise reloading at mid-page leaves the banner
// half-scrolled-off, which looks like "the top is cut by the sticky bar."
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

let lastScrollY = 0;
let scrollTicking = false;
let searchFocused = false;
const header = document.querySelector('header');
const headerBanner = document.querySelector('.header-banner');

// The sticky header only contains search + category tabs. It should
// only hide once the user has scrolled past the (non-sticky) banner —
// otherwise the bar appears to jump while the banner is still on-screen.
function getStickyThreshold() {
    return (headerBanner ? headerBanner.offsetHeight : 0) + 20;
}

// Pin the header to its full visible state while the search is focused.
// Mobile keyboards shrink the viewport and auto-scroll the focused input,
// which can yank a sticky header (and the input inside it) off-screen.
searchInput.addEventListener('focus', () => {
    searchFocused = true;
    header.classList.remove('header-hidden');
    if (searchInput.value.trim()) updateSuggestions(searchInput.value);
});
searchInput.addEventListener('blur', () => {
    searchFocused = false;
    // Delay so a click on a suggestion (which blurs the input) still registers.
    setTimeout(hideSuggestions, 150);
});

// Hide the header on scroll-down, show on scroll-up. Hysteresis is
// only applied to the HIDE direction — any scroll-up reveals the bar
// immediately, so the user never feels like it's "stuck hidden".
// Only transform is animated, so the height never shifts.
const SCROLL_DELTA = 8;
window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
        scrollTicking = false;
        if (searchFocused) {
            lastScrollY = window.scrollY;
            return;
        }
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;

        if (currentY <= 50) {
            // Near top — always show.
            header.classList.remove('header-hidden');
        } else if (delta < 0) {
            // Any upward movement — reveal immediately, no threshold.
            header.classList.remove('header-hidden');
        } else if (delta > SCROLL_DELTA && currentY > getStickyThreshold()) {
            // Scroll-down past banner with hysteresis — hide.
            header.classList.add('header-hidden');
        }
        // Always update so we don't accumulate drift between events.
        lastScrollY = currentY;
    });
}, { passive: true });

// Infinite scroll — load more cards when near bottom.
// Synchronous append + try/finally so loadingMore can't get stuck true
// if rAF is throttled or appendBatch throws.
window.addEventListener('scroll', () => {
    if (loadingMore || renderedCount >= currentFiltered.length) return;
    const scrollBottom = window.innerHeight + window.scrollY;
    if (scrollBottom >= document.body.offsetHeight - 800) {
        loadingMore = true;
        try {
            appendBatch();
        } finally {
            loadingMore = false;
        }
    }
}, { passive: true });

// =============================================================
// FALLBACK: Load missing images one at a time via weidian JSONP
// =============================================================
const imgCache = {};
const pendingWeidian = {}; // id -> Promise — dedupes concurrent fetches

function weidianImage(itemId) {
    // `in` check, not truthiness — '' means "tried, no image available" and
    // should NOT trigger a retry on subsequent loadMissingImages passes.
    if (itemId in imgCache) return Promise.resolve(imgCache[itemId]);
    if (pendingWeidian[itemId]) return pendingWeidian[itemId];

    pendingWeidian[itemId] = new Promise(resolve => {
        const cb = '_wd' + Math.random().toString(36).slice(2);
        const timeout = setTimeout(() => { done(''); }, 10000);

        function done(url) {
            clearTimeout(timeout);
            delete window[cb];
            delete pendingWeidian[itemId];
            const el = document.getElementById('s_' + cb);
            if (el) el.remove();
            // Cache both successes AND failures (as '') so we don't retry forever.
            imgCache[itemId] = url || '';
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
        // Weidian's API rejects requests with our github.io referer
        // ("Referer Not Allowed", error code 15) and silently doesn't
        // invoke our callback, causing every JSONP call to time out.
        // Strip the referer header to bypass that check.
        s.referrerPolicy = 'no-referrer';
        s.src = 'https://thor.weidian.com/detail/getItemSkuInfo/1.0?callback=' + cb +
                '&param=' + encodeURIComponent(JSON.stringify({itemId: itemId}));
        s.onerror = () => done('');
        document.body.appendChild(s);
    });
    return pendingWeidian[itemId];
}

// Worker-pool fallback loader. Runs up to FALLBACK_CONCURRENCY weidian
// fetches in parallel, with no inter-request throttle — the JSONP endpoint
// handles bursts fine and serial waiting was making ~60-card discount
// sections take 30s+ to fully load.
const FALLBACK_CONCURRENCY = 6;
let fallbackRunning = false;

async function loadMissingImages() {
    if (fallbackRunning) return; // re-entry guard; appendBatch fires this per batch
    fallbackRunning = true;
    try {
        const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23e8e8ed' width='1' height='1'/%3E%3C/svg%3E";
        // Re-scan each pass because cards keep getting appended.
        async function processOne(img) {
            const wid = img.dataset.weidian;
            if (!wid) return;
            if (img.src !== placeholder && !img.src.startsWith('data:')) return;
            if (wid in imgCache) {
                // Either a cached URL or a cached failure ('').
                if (imgCache[wid]) img.src = photoUrl(imgCache[wid], 800, 800);
                return;
            }
            const url = await weidianImage(wid);
            if (url) img.src = photoUrl(url, 800, 800);
        }

        // Iterate until no pending images remain (catches images added by appendBatch
        // during fallback execution). Images whose weidianId has already been tried
        // and returned no result are excluded so this loop terminates.
        // Hard ceiling on while-loop iterations to absolutely prevent a
        // pathological case from pegging the CPU and freezing the page.
        let safety = 50;
        while (safety-- > 0) {
            const pending = Array.from(document.querySelectorAll('img[data-weidian]'))
                .filter(img => {
                    const wid = img.dataset.weidian;
                    // Skip empty ids — they'd otherwise cause an infinite
                    // loop since processOne can't populate imgCache for ''.
                    if (!wid) return false;
                    if (img.src !== placeholder && !img.src.startsWith('data:')) return false;
                    // Skip if already tried and produced no image.
                    if (wid in imgCache && !imgCache[wid]) return false;
                    return true;
                });
            if (pending.length === 0) break;

            let cursor = 0;
            const worker = async () => {
                while (cursor < pending.length) {
                    const img = pending[cursor++];
                    await processOne(img);
                }
            };
            await Promise.all(Array.from({ length: FALLBACK_CONCURRENCY }, worker));
        }
    } finally {
        fallbackRunning = false;
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

// Auto-refresh only when the tab is hidden, so the user is never
// interrupted mid-scroll by a grid wipe + re-render. When they come
// back to the tab they get fresh data without seeing the reset.
let lastRefresh = Date.now();
document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    if (Date.now() - lastRefresh < REFRESH_INTERVAL) return;
    lastRefresh = Date.now();
    fetchProducts();
});
