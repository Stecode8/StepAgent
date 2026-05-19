// =============================================================
// i18n — UI string translations
// =============================================================
const TRANSLATIONS = {
    en: {
        intro: 'Welcome to my spreadsheet!',
        signup: 'Sign up to LitBuy!',
        youtube: 'YouTube for more content!',
        search_placeholder: 'brand search',
        sort_default: 'Sort by',
        sort_low: 'Price: Low to High',
        sort_high: 'Price: High to Low',
        cat_all: 'All',
        cat_special: 'Special Finds',
        cat_budget: 'Budget Finds',
        cat_video: 'Video Finds',
        loading: 'Loading products...',
        error_load: 'Could not load products. Please check your connection and try again.',
        retry: 'Retry',
        no_results: 'No products found.',
        inapp_title: 'Open in Browser',
        inapp_body: 'For the best experience, tap the <strong>three dots</strong> menu (<strong>&#8942;</strong>) at the top right and select <strong>"Open in browser"</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord to join the community!',
        telegram: 'Telegram for more finds!',
        buy: 'Buy on LitBuy',
        qc: 'View QC Photos',
    },
    fr: {
        intro: 'Bienvenue sur ma feuille !',
        signup: 'Inscrivez-vous sur LitBuy !',
        youtube: 'YouTube pour plus de contenu !',
        search_placeholder: 'rechercher une marque',
        sort_default: 'Trier par',
        sort_low: 'Prix : croissant',
        sort_high: 'Prix : décroissant',
        cat_all: 'Tout',
        cat_special: 'Trouvailles Spéciales',
        cat_budget: 'Petits Prix',
        cat_video: 'Trouvailles Vidéo',
        loading: 'Chargement des produits...',
        error_load: 'Impossible de charger les produits. Vérifiez votre connexion et réessayez.',
        retry: 'Réessayer',
        no_results: 'Aucun produit trouvé.',
        inapp_title: 'Ouvrir dans le navigateur',
        inapp_body: 'Pour une meilleure expérience, appuyez sur le menu <strong>trois points</strong> (<strong>&#8942;</strong>) en haut à droite et sélectionnez <strong>« Ouvrir dans le navigateur »</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord pour rejoindre la communauté !',
        telegram: 'Telegram pour plus de trouvailles !',
        buy: 'Acheter sur LitBuy',
        qc: 'Voir les photos QC',
    },
    de: {
        intro: 'Willkommen in meiner Tabelle!',
        signup: 'Bei LitBuy anmelden!',
        youtube: 'YouTube für mehr Inhalte!',
        search_placeholder: 'Marke suchen',
        sort_default: 'Sortieren nach',
        sort_low: 'Preis: aufsteigend',
        sort_high: 'Preis: absteigend',
        cat_all: 'Alle',
        cat_special: 'Besondere Funde',
        cat_budget: 'Schnäppchen',
        cat_video: 'Video-Funde',
        loading: 'Produkte werden geladen...',
        error_load: 'Produkte konnten nicht geladen werden. Bitte überprüfe deine Verbindung und versuche es erneut.',
        retry: 'Erneut versuchen',
        no_results: 'Keine Produkte gefunden.',
        inapp_title: 'Im Browser öffnen',
        inapp_body: 'Für ein besseres Erlebnis tippe auf das <strong>Drei-Punkte</strong>-Menü (<strong>&#8942;</strong>) oben rechts und wähle <strong>„Im Browser öffnen"</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord, um der Community beizutreten!',
        telegram: 'Telegram für mehr Funde!',
        buy: 'Bei LitBuy kaufen',
        qc: 'QC-Fotos ansehen',
    },
    es: {
        intro: '¡Bienvenido a mi hoja!',
        signup: '¡Regístrate en LitBuy!',
        youtube: '¡YouTube para más contenido!',
        search_placeholder: 'buscar marca',
        sort_default: 'Ordenar por',
        sort_low: 'Precio: menor a mayor',
        sort_high: 'Precio: mayor a menor',
        cat_all: 'Todo',
        cat_special: 'Hallazgos Especiales',
        cat_budget: 'Ofertas',
        cat_video: 'Hallazgos en Video',
        loading: 'Cargando productos...',
        error_load: 'No se pudieron cargar los productos. Verifica tu conexión e inténtalo de nuevo.',
        retry: 'Reintentar',
        no_results: 'No se encontraron productos.',
        inapp_title: 'Abrir en el navegador',
        inapp_body: 'Para una mejor experiencia, toca el menú de <strong>tres puntos</strong> (<strong>&#8942;</strong>) arriba a la derecha y selecciona <strong>«Abrir en el navegador»</strong>.',
        inapp_ok: 'OK',
        discord: '¡Discord para unirte a la comunidad!',
        telegram: '¡Telegram para más hallazgos!',
        buy: 'Comprar en LitBuy',
        qc: 'Ver fotos QC',
    },
    it: {
        intro: 'Benvenuto nel mio foglio!',
        signup: 'Iscriviti a LitBuy!',
        youtube: 'YouTube per altri contenuti!',
        search_placeholder: 'cerca un marchio',
        sort_default: 'Ordina per',
        sort_low: 'Prezzo: crescente',
        sort_high: 'Prezzo: decrescente',
        cat_all: 'Tutto',
        cat_special: 'Trovate Speciali',
        cat_budget: 'Offerte',
        cat_video: 'Trovate Video',
        loading: 'Caricamento prodotti...',
        error_load: 'Impossibile caricare i prodotti. Controlla la connessione e riprova.',
        retry: 'Riprova',
        no_results: 'Nessun prodotto trovato.',
        inapp_title: 'Apri nel browser',
        inapp_body: 'Per una migliore esperienza, tocca il menu a <strong>tre puntini</strong> (<strong>&#8942;</strong>) in alto a destra e seleziona <strong>«Apri nel browser»</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord per entrare nella community!',
        telegram: 'Telegram per altre trovate!',
        buy: 'Acquista su LitBuy',
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

const SHEET4_ID = '1orDi4pSgrnhMe6cgd1EX3uRC46zMfDgrYSssKxJtxO8';
const SHEET4_TABS = [
    { name: 'Special Finds', gid: '0' },
];

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
    ['joggers', 'sweatpants', 'track pants', 'trackpants', 'jogger'],
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
];

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

function matchesSearch(name, query) {
    query = (query || '').trim();
    if (!query) return true;
    name = name.toLowerCase();

    // Whole-query match (with aliases). Uses the same word-boundary regex so
    // "air jordan 1" doesn't accidentally match "Air Jordan 11".
    if (tokenMatcher(query).test(name)) return true;

    // Per-token AND: each token (or any of its aliases) must match somewhere
    // in the name. This handles "nike hoodie" → "Nike Tech Fleece Hoodie".
    const tokens = query.split(/\s+/).filter(Boolean);
    if (tokens.length <= 1) return false;
    return tokens.every(t => tokenMatcher(t).test(name));
}

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
    const displayName = (window.i18n && window.i18n.dyn(p.name)) || p.name;
    document.getElementById('modal-img').alt = displayName;
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
// HTML PARSING — Special Finds sheet (A=name, B=image, C=price, D=link)
// Price cell contains USD and EUR separated by <br>, e.g. "15.18$" / "13.88€"
// =============================================================
function parseHtmlSheetSpecial(html, categoryName) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll('tr');
    const products = [];

    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length < 4) continue;

        const name = (cells[0].textContent || '').trim().replace(/\s+/g, ' ');
        if (!name || name.toLowerCase() === 'product') continue;

        // Price cell: read child text nodes/lines to separate USD and EUR.
        // innerText respects <br>, fall back to textContent split heuristics.
        const priceCell = cells[2];
        const priceText = (priceCell.innerText || priceCell.textContent || '').trim();
        const usdMatch = priceText.match(/([\d.]+)\s*\$/);
        const eurMatch = priceText.match(/([\d.]+)\s*€/);
        const usdPrice = usdMatch ? ('$' + usdMatch[1]) : '';
        const eurPrice = eurMatch ? (eurMatch[1] + '€') : '';
        if (!usdPrice) continue;

        // Image
        const imgCell = cells[1];
        let photo = '';
        const img = imgCell.querySelector('img');
        if (img) photo = img.getAttribute('src') || '';
        if (!photo) {
            const t = (imgCell.textContent || '').trim();
            if (t.startsWith('http')) photo = t;
        }
        if (photo) photo = photo.replace(/=s\d+[-\w]*$/, '=s1600').replace(/=w\d+-h\d+$/, '=w1600-h1600');

        // Affiliate link
        let link = extractLink(cells[3]);
        link = fixLink(link);
        if (!link) continue;

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
            category: categoryName,
            weidianId
        });
    }

    return products;
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
// CATEGORY INFERENCE — map a Special Finds product name to one of the
// standard tabs (SHOES, T-shirt and shorts, Hoodies and Pants, ...) so the
// product also surfaces at the top of that tab. Falls back to '' (no extra
// surfacing) when nothing matches confidently.
// =============================================================
function inferStandardCategory(name) {
    const n = name.toLowerCase();
    // Shoes — explicit "shoes"/"sneakers" words, plus common model/brand
    // keywords that imply footwear ("jordan", "air max", "574" via "new balance").
    if (/\b(shoes?|sneakers?|slides?|slippers?|kicks|trainers?|jordan|af1|dunk|cortez|forum|gel|b22|courts?|new balance|nike air|air max)\b/.test(n)) return TABS[2].name;
    // T-shirts / shorts / polos / tanks
    if (/\b(tee|t-shirts?|tshirts?|shirts?|polo|shorts?|tank)\b/.test(n)) return TABS[5].name;
    // Hoodies / sweaters / pants / jeans / co-ord sets
    if (/\b(hoodies?|sweaters?|sweatshirts?|crewnecks?|pants|jeans|joggers?|trousers|tracksuits?|set)\b/.test(n)) return TABS[3].name;
    // Coats / jackets / puffers
    if (/\b(coats?|jackets?|puffers?|parkas?)\b/.test(n)) return TABS[4].name;
    // Accessories — bags / belts / hats / small leather goods / jewelry
    if (/\b(bags?|belts?|hats?|caps?|wallets?|sunglasses|watches?|necklaces?|bracelets?|rings?|earrings?|scarves?|scarf)\b/.test(n)) return TABS[6].name;
    // Electronics
    if (/\b(headphones?|earbuds?|airpods?|speakers?|phone case|charger|drone|camera|keyboard)\b/.test(n)) return TABS[7].name;
    return '';
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
                return parseHtmlSheetSpecial(html, tab.name);
            })
        );

        // Collect successful results, log failures.
        // sourceOrder controls render order within a category: lower goes first.
        const sources = [
            { results: results4, order: 0 }, // Special Finds (pinned top)
            { results: results2, order: 1 }, // Budget Finds
            { results: results1, order: 2 }, // main sheet
            { results: results3, order: 3 }, // Video Finds
        ];
        const failed = sources.flatMap(s => s.results).filter(r => r.status === 'rejected');
        failed.forEach(r => console.error('Tab fetch failed:', r.reason));

        allProducts = sources.flatMap(({ results, order }) =>
            results
                .filter(r => r.status === 'fulfilled')
                .flatMap(r => r.value.map(p => ({ ...p, sourceOrder: order })))
        );

        // Surface Special Finds products at the top of their matched standard
        // category too (e.g. "Bape Tee" also appears in T-shirt and shorts).
        // extraCategory is checked alongside category in the filter — the
        // product appears in both its tab AND the inferred tab, but only once
        // in "All" because filtering doesn't duplicate the array.
        for (const p of allProducts) {
            if (p.category === 'Special Finds') {
                const extra = inferStandardCategory(p.name);
                if (extra) p.extraCategory = extra;
            }
        }

        if (allProducts.length === 0 && failed.length > 0) {
            throw failed[0].reason;
        }
        buildCategoryTabs();
        renderProducts();
        loadingEl.classList.add('hidden');
        if (window.i18n) window.i18n.translateDynamic();
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

    const frontPinned = ['Special Finds', 'Budget Finds'];
    for (const name of [...frontPinned].reverse()) {
        const idx = categories.indexOf(name);
        if (idx > -1) {
            categories.splice(idx, 1);
            categories.unshift(name);
        }
    }
    const endPinned = ['Video Finds'];
    for (const name of endPinned) {
        const idx = categories.indexOf(name);
        if (idx > -1) {
            categories.splice(idx, 1);
            categories.push(name);
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
    if (value === 'Video Finds') return 'cat_video';
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
        filtered = filtered.filter(p => p.category === activeCategory || p.extraCategory === activeCategory);
    }

    if (searchQuery) {
        filtered = filtered.filter(p => matchesSearch(p.name, searchQuery));
    }

    // Sort order:
    //   1. Pinned: Special Finds surfaced into a standard tab (extraCategory
    //      match) come first, ahead of even photo'd products from that tab.
    //   2. Photos first, no-photo products at the end.
    //   3. sourceOrder tiebreak (Special Finds → Budget Finds → main sheet → Video Finds).
    filtered.sort((a, b) => {
        if (activeCategory !== 'all') {
            const aPin = a.extraCategory === activeCategory ? 0 : 1;
            const bPin = b.extraCategory === activeCategory ? 0 : 1;
            if (aPin !== bPin) return aPin - bPin;
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
    let extraClass = '';
    if (p.category === 'Special Finds') extraClass = ' pinned';
    else if (p.category === 'Budget Finds') extraClass = ' budget';
    card.className = 'product-card' + extraClass;
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
    nameDiv.textContent = (window.i18n && window.i18n.dyn(p.name)) || p.name;

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
});
searchInput.addEventListener('blur', () => {
    searchFocused = false;
});

// Hide the header on scroll-down, show on scroll-up.
// Uses a hysteresis threshold so micro-scrolls don't flip the state and
// jitter the page. Only transform is animated — height is constant, so the
// content underneath never shifts.
const SCROLL_DELTA = 8;
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
            const delta = currentY - lastScrollY;
            if (Math.abs(delta) < SCROLL_DELTA) {
                scrollTicking = false;
                return;
            }
            if (currentY <= 5) {
                header.classList.remove('header-hidden');
            } else if (delta > 0 && currentY > getStickyThreshold()) {
                header.classList.add('header-hidden');
            } else if (delta < 0) {
                header.classList.remove('header-hidden');
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
