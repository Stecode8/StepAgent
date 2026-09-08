// =============================================================
// i18n — UI string translations
// =============================================================
const TRANSLATIONS = {
    en: {
        intro: 'Welcome to my spreadsheet!',
        signup: 'Sign up on BoonBuy and get 50% off',
        youtube: 'YouTube for more content!',
        search_placeholder: 'Search products…',
        sort_default: 'Sort by',
        sort_low: 'Price: Low to High',
        sort_high: 'Price: High to Low',
        cat_all: 'All',
        cat_menu: 'All Categories',
        nav_products: 'Products',
        nav_links: 'Links',
        count_products: 'products',
        cat_accessories: '🎁 Accessories',
        loading: 'Loading products...',
        error_load: 'Could not load products. Please check your connection and try again.',
        retry: 'Retry',
        no_results: 'No products found.',
        inapp_title: 'Open in Browser',
        inapp_body: 'For the best experience, tap the <strong>three dots</strong> menu (<strong>&#8942;</strong>) at the top right and select <strong>"Open in browser"</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord to join the community!',
        telegram: 'Telegram for more finds!',
        buy: 'Buy on BoonBuy',
        qc: 'View QC Photos',
        styles: 'Styles',
        browse: 'Browse Products',
        home: 'Home',
        tagline: "The only website you'll need to find great products from China",
        featured: 'Featured Items',
        all_products: 'All Products',
        agent_q: 'Looking for the best agent to ship goods from China?',
        need_help: 'Need Help?',
        help_sub: 'Join the community for 24/7 support',
        copy_universal: 'Copy Universal Link',
        copy_universal_sub: 'Paste this link into any agent',
        copied: 'Copied!',
        join_discord: 'Join the Discord',
    },
    fr: {
        intro: 'Bienvenue sur ma feuille !',
        signup: 'Inscris-toi sur BoonBuy et obtiens 50 % de réduction',
        youtube: 'YouTube pour plus de contenu !',
        search_placeholder: 'Rechercher un produit…',
        sort_default: 'Trier par',
        sort_low: 'Prix : croissant',
        sort_high: 'Prix : décroissant',
        cat_all: 'Tout',
        cat_menu: 'Toutes les catégories',
        nav_products: 'Produits',
        nav_links: 'Liens',
        count_products: 'produits',
        cat_accessories: '🎁 Accessoires',
        loading: 'Chargement des produits...',
        error_load: 'Impossible de charger les produits. Vérifiez votre connexion et réessayez.',
        retry: 'Réessayer',
        no_results: 'Aucun produit trouvé.',
        inapp_title: 'Ouvrir dans le navigateur',
        inapp_body: 'Pour une meilleure expérience, appuyez sur le menu <strong>trois points</strong> (<strong>&#8942;</strong>) en haut à droite et sélectionnez <strong>« Ouvrir dans le navigateur »</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord pour rejoindre la communauté !',
        telegram: 'Telegram pour plus de trouvailles !',
        buy: 'Acheter sur BoonBuy',
        qc: 'Voir les photos QC',
        styles: 'Coloris',
        browse: 'Voir les produits',
        home: 'Accueil',
        tagline: 'Le seul site dont vous aurez besoin pour trouver de superbes produits de Chine',
        featured: 'Produits en vedette',
        all_products: 'Tous les produits',
        agent_q: 'Vous cherchez le meilleur agent pour expédier vos achats depuis la Chine ?',
        need_help: 'Besoin d\'aide ?',
        help_sub: 'Rejoignez la communauté pour une assistance 24/7',
        copy_universal: 'Copier le lien universel',
        copy_universal_sub: 'Collez ce lien chez n\'importe quel agent',
        copied: 'Copié !',
        join_discord: 'Rejoindre le Discord',
    },
    de: {
        intro: 'Willkommen in meiner Tabelle!',
        signup: 'Melde dich bei BoonBuy an und erhalte 50 % Rabatt',
        youtube: 'YouTube für mehr Inhalte!',
        search_placeholder: 'Produkte suchen…',
        sort_default: 'Sortieren nach',
        sort_low: 'Preis: aufsteigend',
        sort_high: 'Preis: absteigend',
        cat_all: 'Alle',
        cat_menu: 'Alle Kategorien',
        nav_products: 'Produkte',
        nav_links: 'Links',
        count_products: 'Produkte',
        cat_accessories: '🎁 Accessoires',
        loading: 'Produkte werden geladen...',
        error_load: 'Produkte konnten nicht geladen werden. Bitte überprüfe deine Verbindung und versuche es erneut.',
        retry: 'Erneut versuchen',
        no_results: 'Keine Produkte gefunden.',
        inapp_title: 'Im Browser öffnen',
        inapp_body: 'Für ein besseres Erlebnis tippe auf das <strong>Drei-Punkte</strong>-Menü (<strong>&#8942;</strong>) oben rechts und wähle <strong>„Im Browser öffnen"</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord, um der Community beizutreten!',
        telegram: 'Telegram für mehr Funde!',
        buy: 'Bei BoonBuy kaufen',
        qc: 'QC-Fotos ansehen',
        styles: 'Varianten',
        browse: 'Produkte ansehen',
        home: 'Startseite',
        tagline: 'Die einzige Website, die du brauchst, um großartige Produkte aus China zu finden',
        featured: 'Empfohlene Artikel',
        all_products: 'Alle Produkte',
        agent_q: 'Suchst du den besten Agenten, um Waren aus China zu versenden?',
        need_help: 'Brauchst du Hilfe?',
        help_sub: 'Tritt der Community bei für 24/7-Support',
        copy_universal: 'Universellen Link kopieren',
        copy_universal_sub: 'Füge diesen Link bei jedem Agenten ein',
        copied: 'Kopiert!',
        join_discord: 'Discord beitreten',
    },
    es: {
        intro: '¡Bienvenido a mi hoja!',
        signup: 'Regístrate en BoonBuy y obtén un 50 % de descuento',
        youtube: '¡YouTube para más contenido!',
        search_placeholder: 'Buscar productos…',
        sort_default: 'Ordenar por',
        sort_low: 'Precio: menor a mayor',
        sort_high: 'Precio: mayor a menor',
        cat_all: 'Todo',
        cat_menu: 'Todas las categorías',
        nav_products: 'Productos',
        nav_links: 'Enlaces',
        count_products: 'productos',
        cat_accessories: '🎁 Accesorios',
        loading: 'Cargando productos...',
        error_load: 'No se pudieron cargar los productos. Verifica tu conexión e inténtalo de nuevo.',
        retry: 'Reintentar',
        no_results: 'No se encontraron productos.',
        inapp_title: 'Abrir en el navegador',
        inapp_body: 'Para una mejor experiencia, toca el menú de <strong>tres puntos</strong> (<strong>&#8942;</strong>) arriba a la derecha y selecciona <strong>«Abrir en el navegador»</strong>.',
        inapp_ok: 'OK',
        discord: '¡Discord para unirte a la comunidad!',
        telegram: '¡Telegram para más hallazgos!',
        buy: 'Comprar en BoonBuy',
        qc: 'Ver fotos QC',
        styles: 'Estilos',
        browse: 'Ver productos',
        home: 'Inicio',
        tagline: 'El único sitio que necesitarás para encontrar grandes productos de China',
        featured: 'Productos destacados',
        all_products: 'Todos los productos',
        agent_q: '¿Buscas el mejor agente para enviar productos desde China?',
        need_help: '¿Necesitas ayuda?',
        help_sub: 'Únete a la comunidad para soporte 24/7',
        copy_universal: 'Copiar enlace universal',
        copy_universal_sub: 'Pega este enlace en cualquier agente',
        copied: '¡Copiado!',
        join_discord: 'Unirse al Discord',
    },
    it: {
        intro: 'Benvenuto nel mio foglio!',
        signup: 'Registrati su BoonBuy e ottieni il 50% di sconto',
        youtube: 'YouTube per altri contenuti!',
        search_placeholder: 'Cerca prodotti…',
        sort_default: 'Ordina per',
        sort_low: 'Prezzo: crescente',
        sort_high: 'Prezzo: decrescente',
        cat_all: 'Tutto',
        cat_menu: 'Tutte le categorie',
        nav_products: 'Prodotti',
        nav_links: 'Link',
        count_products: 'prodotti',
        cat_accessories: '🎁 Accessori',
        loading: 'Caricamento prodotti...',
        error_load: 'Impossibile caricare i prodotti. Controlla la connessione e riprova.',
        retry: 'Riprova',
        no_results: 'Nessun prodotto trovato.',
        inapp_title: 'Apri nel browser',
        inapp_body: 'Per una migliore esperienza, tocca il menu a <strong>tre puntini</strong> (<strong>&#8942;</strong>) in alto a destra e seleziona <strong>«Apri nel browser»</strong>.',
        inapp_ok: 'OK',
        discord: 'Discord per entrare nella community!',
        telegram: 'Telegram per altre trovate!',
        buy: 'Acquista su BoonBuy',
        qc: 'Vedi foto QC',
        styles: 'Varianti',
        browse: 'Sfoglia i prodotti',
        home: 'Home',
        tagline: "L'unico sito di cui avrai bisogno per trovare ottimi prodotti dalla Cina",
        featured: 'In evidenza',
        all_products: 'Tutti i prodotti',
        agent_q: 'Cerchi il miglior agente per spedire prodotti dalla Cina?',
        need_help: 'Hai bisogno di aiuto?',
        help_sub: 'Unisciti alla community per supporto 24/7',
        copy_universal: 'Copia link universale',
        copy_universal_sub: 'Incolla questo link in qualsiasi agente',
        copied: 'Copiato!',
        join_discord: 'Unisciti al Discord',
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
        if (typeof syncCategoryLabel === 'function') syncCategoryLabel();
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
// BoonBuy affiliate details. Sheet links already carry the invite code;
// toAgentLink() re-stamps it so a stale or missing code can never leak an
// unattributed click, and rewrites the handful of rows still pointing at
// another agent.
const INVITE_CODE = 'STEPAGENT';
// BoonBuy product URLs encode the source platform as a digit in the path:
// /product/2/<itemId>, where 2 = Weidian — where every item in the sheet
// is listed (confirmed against Weidian's own item API).
const BOONBUY_PRODUCT_BASE = 'https://boonbuy.com/product/2/';

// The BoonBuy spreadsheet is ONE wide tab: a single grid split into
// vertical category sections. Each section opens with a full-width title
// row ("HOT ITEMS", "Sneakers", ...) followed by a Picture|Name|Price|Link
// column header, and every product row carries TWO items side by side:
//   PIC | NAME | PRICE | LINK | PIC | NAME | PRICE | LINK
// The sheet's second tab ("Mobile Friendly", gid 2130334132) is a smaller
// subset of the same catalogue, so it isn't fetched.
const SHEET_ID = '1b4WsUkODzVHoCPWv10jAmAR2qBOZyV0PdyCa_Bd_EfA';
const SHEET_MAIN_GID = '1206657792';

// Section title (lowercased, whitespace-collapsed) -> pill label. Only
// sections listed here are emitted: any other full-width title (the
// sheet's own banner rows, or a section renamed upstream) resets the
// current category so its rows are skipped instead of creating a junk
// pill — so a renamed section needs adding here to come back.
const SECTION_CATEGORIES = new Map([
    ['hot items',            '🔥 Hot Items'],
    ['sneakers',             '👟 Sneakers'],
    ['tee/polo',             '👕 Tee/Polo'],
    ['hoodies',              '🧥 Hoodies'],
    ['shorts',               '🩳 Shorts'],
    ['jackets',              '🦺 Jackets'],
    ['sweater',              '🧶 Sweater'],
    ['sweatpants',           '👖 SweatPants'],
    ['jeans',                '👖 Jeans'],
    ['accessories',          '🎁 Accessories'],
    ['electronics',          '🎧 Electronics'],
    ['jersey',               '⚽ Jersey'],
    ['tracksuits',           '🏃 Tracksuits'],
    ['beanies',              '🧢 Beanies'],
    ['socks',                '🧦 Socks'],
    ['travel bags/suitcase', '🧳 Travel Bags'],
    ['decorations',          '🖼️ Decorations'],
    ['underwears',           '🩲 Underwear'],
    ['bags',                 '👜 Bags'],
    ['perfumes',             '🌸 Perfumes'],
    ['running',              '🏅 Running'],
    ['ziper',                '🧥 Zip-Ups'],
    ['shirts',               '👔 Shirts'],
    ['vests',                '🎽 Vests'],
    ['long sleeves',         '👚 Long Sleeves'],
    ['jewelry',              '💍 Jewelry'],
    ['summer sets',          '🩱 Summer Sets'],
    ['2026 fifa worldcup',   '🏆 2026 World Cup'],
]);

// Sections that stay in the catalogue but get no pill of their own. Their
// items still show under "All" and under whatever pill their name pins
// them into (a Hot Items sneaker still appears in Sneakers).
const HIDDEN_PILLS = new Set(['🔥 Hot Items']);

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
const categoryTabsEl = document.getElementById('category-menu');
const categoryMenuBtn = document.getElementById('category-menu-btn');
const categoryMenuLabel = document.getElementById('category-menu-label');
const productCountEl = document.getElementById('product-count');
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

// Delegated click handler for product cards (one listener, not one per card).
// Guarded: the grid only exists on the product page, not the home page.
if (gridEl) gridEl.addEventListener('click', (e) => {
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
    const copyBtn = document.getElementById('modal-copy-btn');
    const uniLink = universalLink(p);
    if (uniLink) {
        copyBtn.dataset.link = uniLink;
        copyBtn.classList.remove('hidden', 'copied');
        const label = document.getElementById('modal-copy-label');
        label.textContent = (window.i18n && window.i18n.t('copy_universal')) || 'Copy Universal Link';
    } else {
        copyBtn.classList.add('hidden');
    }
    const qcBtn = document.getElementById('modal-qc-btn');
    if (p.qcLink) {
        qcBtn.href = p.qcLink;
        qcBtn.classList.remove('hidden');
    } else {
        qcBtn.classList.add('hidden');
    }
    // Load this item's different styles/colorways (one SKU call, cached).
    renderModalStyles(p);
    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden', 'modal-closing');
    modal.querySelector('.product-modal-content').scrollTop = 0;
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
        link = link.replace(/inviteCode=[^&]*/i, 'inviteCode=' + INVITE_CODE);
    } else {
        link += (link.includes('?') ? '&' : '?') + 'inviteCode=' + INVITE_CODE;
    }
    return link;
}

// Point a sheet link at BoonBuy with our invite code. Most rows are
// already BoonBuy URLs and only need the code re-stamped, but a few dozen
// still link to another agent (kakobuy) carrying THAT agent's affiliate
// code — those URLs embed the Weidian item id, which is all we need to
// rebuild the equivalent BoonBuy product URL.
function toAgentLink(link) {
    if (!link) return '';
    if (/boonbuy\.com/i.test(link)) return fixLink(link);
    const m = link.match(/itemID[=%3D]*(\d+)/i) || link.match(/[?&]id[=%3D]*(\d+)/i);
    if (m) return BOONBUY_PRODUCT_BASE + m[1] + '?inviteCode=' + INVITE_CODE;
    return fixLink(link); // unknown shape — leave it be, just stamp the code
}

// Rebuild the original Chinese-store URL ("universal link") from a product,
// so it can be pasted into any shopping agent. BoonBuy carries the source
// platform as a digit in the product path (/product/2/123, 2 = Weidian);
// an unknown digit yields no link (the copy button then stays hidden)
// rather than a guessed one.
function universalLink(p) {
    const m = (p.link || '').match(/\/product\/(\d+)\/(\d+)/);
    if (m && m[1] === '2') return `https://weidian.com/item.html?itemID=${m[2]}`;
    if (p.weidianId) return `https://weidian.com/item.html?itemID=${p.weidianId}`;
    return '';
}

// Keyword → clothes-category mapping. Every product's name is scanned
// (most-specific patterns first) to derive a pinCategory, so e.g. a
// "Bape Tee" cross-lists into the T-Shirts pill, "Adidas Pants" into
// Pants, etc. Items that don't match any keyword keep only their source
// category. Strings must match a SECTION_CATEGORIES pill label
// character-for-character (emoji + label).
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
    ['football',       '⚽ Jersey'],
    ['soccer',         '⚽ Jersey'],
    ['real madrid',    '⚽ Jersey'],
    ['barcelona',      '⚽ Jersey'],
    ['liverpool',      '⚽ Jersey'],
    ['manchester',     '⚽ Jersey'],
    ['man city',       '⚽ Jersey'],
    ['arsenal',        '⚽ Jersey'],
    ['chelsea',        '⚽ Jersey'],
    ['juventus',       '⚽ Jersey'],
    ['bayern',         '⚽ Jersey'],
    ['ac milan',       '⚽ Jersey'],
    ['inter milan',    '⚽ Jersey'],
    ['dortmund',       '⚽ Jersey'],
    ['psg',            '⚽ Jersey'],
    ['national team',  '⚽ Jersey'],
    // Apparel keywords (checked first so "Nike Hoodie" beats 'nike').
    // Plurals listed alongside singulars — \b boundary doesn't cross
    // word-char transitions so 'jacket' alone won't match "jackets".
    // The sheet splits legwear into Jeans and SweatPants, so denim words
    // pin to Jeans and everything else to SweatPants.
    ['jeans',          '👖 Jeans'],
    ['jean',           '👖 Jeans'],
    ['denim',          '👖 Jeans'],
    ['trousers',       '👖 SweatPants'],
    ['trouser',        '👖 SweatPants'],
    ['pants',          '👖 SweatPants'],
    // Singular 'pant' — without it, "Polo Ralph Lauren track pant" fell
    // through to the 'polo' rule below and showed up under Tee/Polo.
    ['pant',           '👖 SweatPants'],
    ['joggers',        '👖 SweatPants'],
    ['jogger',         '👖 SweatPants'],
    ['sweatpants',     '👖 SweatPants'],
    ['sweatpant',      '👖 SweatPants'],
    ['leggings',       '👖 SweatPants'],
    ['legging',        '👖 SweatPants'],
    ['chinos',         '👖 SweatPants'],
    ['chino',          '👖 SweatPants'],
    ['shorts',         '🩳 Shorts'],
    ['short',          '🩳 Shorts'],
    ['hoodies',        '🧥 Hoodies'],
    ['hoodie',         '🧥 Hoodies'],
    ['cardigan',       '🧶 Sweater'],
    ['cardigans',      '🧶 Sweater'],
    ['sweaters',       '🧶 Sweater'],
    ['sweater',        '🧶 Sweater'],
    ['knit',           '🧶 Sweater'],
    ['tracksuits',     '🏃 Tracksuits'],
    ['tracksuit',      '🏃 Tracksuits'],
    // T-shirts / tops / jackets — moved BEFORE shoe specifics so a
    // "Lebron Jersey" routes to T-Shirts (via 'jersey') instead of
    // Shoes (via 'lebron'). "Nike Lebron" sneakers still route to
    // Shoes since they don't contain any apparel keyword first.
    ['polo',           '👕 Tee/Polo'],
    ['t-shirts',       '👕 Tee/Polo'],
    ['t-shirt',        '👕 Tee/Polo'],
    ['tshirts',        '👕 Tee/Polo'],
    ['tshirt',         '👕 Tee/Polo'],
    ['tees',           '👕 Tee/Polo'],
    ['tee',            '👕 Tee/Polo'],
    ['jerseys',        '👕 Tee/Polo'],
    ['jersey',         '👕 Tee/Polo'],
    ['shirts',         '👕 Tee/Polo'],
    ['shirt',          '👕 Tee/Polo'],
    ['jackets',        '🦺 Jackets'],
    ['jacket',         '🦺 Jackets'],
    ['vests',          '🦺 Jackets'],
    ['vest',           '🦺 Jackets'],
    ['perfume',        '🌸 Perfumes'],
    ['cologne',        '🌸 Perfumes'],
    ['fragrance',      '🌸 Perfumes'],
    // Specific shoe-model names that would otherwise be hijacked by
    // accessory generic words (e.g. Versace "Chain Reaction" hitting
    // 'chain', Balenciaga "Track" being fine here vs "Track Pants"
    // landing in Pants). Listed before accessories.
    ['chain reaction',     '👟 Sneakers'],
    ['vapormax',           '👟 Sneakers'],
    ['airmax',             '👟 Sneakers'],   // no-space variant of 'air max'
    ['airforce',           '👟 Sneakers'],   // no-space variant of 'air force'
    ['shox',               '👟 Sneakers'],
    ['triple s',           '👟 Sneakers'],
    ['speed trainer',      '👟 Sneakers'],
    ['speed runner',       '👟 Sneakers'],
    ['runners',            '👟 Sneakers'],
    ['nocta',              '👟 Sneakers'],
    ['lebron',             '👟 Sneakers'],
    ['kobe',               '👟 Sneakers'],
    ['mihara',             '👟 Sneakers'],
    ['golden goose',       '👟 Sneakers'],
    ['ggdb',               '👟 Sneakers'],
    ['birkenstock',        '👟 Sneakers'],
    ['odsy',               '👟 Sneakers'],
    ['be right back',      '👟 Sneakers'],
    ['out of office',      '👟 Sneakers'],
    ['louboutin',          '👟 Sneakers'],
    ['loubutin',           '👟 Sneakers'],   // sheet typo
    ['salomon',            '👟 Sneakers'],
    ['hoka',               '👟 Sneakers'],
    ['on cloud',           '👟 Sneakers'],
    ['timberland',         '👟 Sneakers'],
    ['timbs',              '👟 Sneakers'],
    ['ugg',                '👟 Sneakers'],
    ['skate',              '👟 Sneakers'],   // Louis Vuitton Skate / similar shoe lines
    ['mcqueen',            '👟 Sneakers'],   // Alexander McQueen shoe line
    ['converses',          '👟 Sneakers'],
    ['converse',           '👟 Sneakers'],
    ['b9',                 '👟 Sneakers'],   // Dior B-series
    ['b22',                '👟 Sneakers'],
    ['b30',                '👟 Sneakers'],
    ['b33',                '👟 Sneakers'],
    ['b57',                '👟 Sneakers'],
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
    ['shoes',          '👟 Sneakers'],
    ['shoe',           '👟 Sneakers'],
    ['sneakers',       '👟 Sneakers'],
    ['sneaker',        '👟 Sneakers'],
    ['trainers',       '👟 Sneakers'],
    ['boots',          '👟 Sneakers'],
    ['boot',           '👟 Sneakers'],
    ['sandals',        '👟 Sneakers'],
    ['sandal',         '👟 Sneakers'],
    ['loafers',        '👟 Sneakers'],
    ['loafer',         '👟 Sneakers'],
    ['heels',          '👟 Sneakers'],
    ['slippers',       '👟 Sneakers'],
    ['slipper',        '👟 Sneakers'],
    ['slides',         '👟 Sneakers'],
    ['slide',          '👟 Sneakers'],
    ['jordan',         '👟 Sneakers'],
    ['asics',          '👟 Sneakers'],
    ['new balance',    '👟 Sneakers'],
    ['air max',        '👟 Sneakers'],
    ['air force',      '👟 Sneakers'],
    ['air jordan',     '👟 Sneakers'],
    ['nike air',       '👟 Sneakers'],
    ['dunk',           '👟 Sneakers'],
    ['forum',          '👟 Sneakers'],
    ['samba',          '👟 Sneakers'],
    ['gazelle',        '👟 Sneakers'],
    ['yeezy',          '👟 Sneakers'],
    ['stan smith',     '👟 Sneakers'],
    ['superstar',      '👟 Sneakers'],
    ['cortez',         '👟 Sneakers'],
    ['b22',            '👟 Sneakers'],
    ['gel',            '👟 Sneakers'],   // Asics Gel-* line
    ['lx court',       '👟 Sneakers'],
    ['mr993',          '👟 Sneakers'],
    ['u574',           '👟 Sneakers'],
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
// HTML PARSING — the BoonBuy sheet
// One wide grid, category sections stacked vertically (see
// SECTION_CATEGORIES), two products per row:
//   PIC(img) | NAME | PRICE | LINK | PIC(img) | NAME | PRICE | LINK
// A section title is a single cell spanning the full 8 columns; the brand
// sub-headings inside a section (e.g. "Corteiz") span 4 and so leave the
// current category alone. The banner rows above the first section carry
// their own full-width titles, which match no section and are skipped.
// =============================================================
const SECTION_COLSPAN = 8;   // full grid width — marks a section title row
const BLOCK_WIDTH = 4;       // PIC | NAME | PRICE | LINK
// ¥ → $ for the ~30 rows that price in bare yuan, so the price sort can
// compare them against the rest. Derived from the sheet's own conversions
// (it quotes ¥180 as $29.29); it only ever affects sort order, never a
// displayed price.
const CNY_TO_USD = 0.163;

// Split the sheet HTML into one chunk per section, each starting at its
// title row. DOMParser over the whole 4 MB grid blocks the main thread for
// seconds on phones; parsing chunk by chunk lets the first categories
// paint immediately and keeps the page responsive while the rest arrive.
function splitSheetSections(html) {
    const marker = 'colspan="' + SECTION_COLSPAN + '"';
    const starts = [];
    for (let at = html.indexOf(marker); at >= 0; at = html.indexOf(marker, at + 1)) {
        const trStart = html.lastIndexOf('<tr', at);
        if (trStart < 0) continue;
        if (starts.length && starts[starts.length - 1] === trStart) continue; // same row
        starts.push(trStart);
    }
    if (!starts.length) return [html];
    return starts.map((from, k) => html.slice(from, k + 1 < starts.length ? starts[k + 1] : html.length));
}

// Parse one section chunk (title row first, product rows below). Returns
// [] for the sheet's own banner rows, whose titles match no section.
function parseSheetSection(chunk) {
    const parser = new DOMParser();
    const doc = parser.parseFromString('<table>' + chunk + '</table>', 'text/html');
    const rows = Array.from(doc.querySelectorAll('tr'));
    const products = [];

    let category = null;
    for (const row of rows) {
        const cells = Array.from(row.querySelectorAll('td'));
        if (!cells.length) continue;

        // Section title — detect it BEFORE the product-block guard, since a
        // colspan'd title cell also sits at index 0.
        if (parseInt(cells[0].getAttribute('colspan') || '1', 10) >= SECTION_COLSPAN) {
            const title = (cells[0].textContent || '').trim().toLowerCase().replace(/\s+/g, ' ');
            category = SECTION_CATEGORIES.get(title) || null;
            if (!category) return []; // banner row, or a section we don't publish
            continue;
        }
        if (!category) continue;

        for (let at = 0; at + BLOCK_WIDTH <= cells.length; at += BLOCK_WIDTH) {
            const product = parseProductBlock(cells.slice(at, at + BLOCK_WIDTH), category);
            if (product) products.push(product);
        }
    }
    return products;
}

// One PIC | NAME | PRICE | LINK block → a product, or null when the block
// isn't one: a column header, a spacer, the empty half of an odd-length
// row, a brand sub-heading, or a row with no link to buy through.
function parseProductBlock(cells, category) {
    const [picCell, nameCell, priceCell, linkCell] = cells;

    const img = picCell.querySelector('img');
    if (!img) return null; // header, spacer and sub-heading blocks carry no photo

    const name = (nameCell.textContent || '').trim().replace(/\s+/g, ' ');
    if (!name || /^name$/i.test(name)) return null;

    const raw = (priceCell.textContent || '').trim();
    if (!raw || /sold\s*out/i.test(raw)) return null;
    // The sheet prices each item in four currencies in one cell —
    // "¥180｜$29.29｜€24.79｜£21.55" — so show USD with EUR alongside
    // (the card and modal already render `price / eurPrice`). A few rows
    // carry a bare number instead, which the sheet means as yuan.
    const usd = raw.match(/\$\s*([\d.,]+)/);
    const eur = raw.match(/€\s*([\d.,]+)/);
    const cny = raw.match(/¥\s*([\d.,]+)/) || raw.match(/^([\d.,]+)$/);
    if (!usd && !cny) return null; // no price at all → not a product block
    const price = usd ? '$' + usd[1] : '¥' + cny[1];
    const priceUsd = parseFloat((usd ? usd[1] : cny[1]).replace(/,/g, '')) * (usd ? 1 : CNY_TO_USD);

    let photo = img.getAttribute('src') || '';
    // Sheet photos come in at thumbnail size (=w165-h139); ask Google for a
    // card-sized render instead. These URLs are short-lived tokens, which
    // is what the fetch cache-buster and the 5-minute refresh are for.
    if (photo) {
        photo = photo
            .replace(/=s\d+(-w\d+)?(-h\d+)?$/, '=s800')
            .replace(/=w\d+-h\d+$/, '=w800-h800');
    }

    const link = toAgentLink(extractLink(linkCell));
    if (!link) return null;

    const idMatch = link.match(/\/product\/\d+\/(\d+)/);

    return {
        name,
        price,
        eurPrice: eur ? '€' + eur[1] : '',
        priceUsd: Number.isFinite(priceUsd) ? priceUsd : 0,
        photo,
        link,
        qcLink: '', // the sheet has no QC column
        category,
        weidianId: idMatch ? idMatch[1] : '',
        pinCategory: derivePinCategory(name),
        // The sheet tags the cheap and the 1:1 versions of an item in its
        // name; the card badges read these back.
        isBudget: /\[budget\]/i.test(name),
        isOneToOne: /\[1:1\]/i.test(name),
    };
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
    syncCategoryLabel();
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

    let html;
    try {
        html = await fetchHtml(SHEET_ID, SHEET_MAIN_GID);
    } catch (err) {
        console.error('Sheet fetch failed', err);
        loadingEl.classList.add('hidden');
        errorEl.classList.remove('hidden');
        return;
    }

    // Parse and paint one section at a time, in sheet order — Hot Items
    // first — yielding to the browser between sections so the grid fills in
    // progressively instead of freezing on one 4 MB parse. The chunk index
    // is the source order, which keeps the on-screen order identical to the
    // sheet's own.
    const chunks = splitSheetSections(html);
    let anyFailed = false;
    for (let at = 0; at < chunks.length; at++) {
        try {
            ingestSource(at, parseSheetSection(chunks[at]));
        } catch (err) {
            anyFailed = true;
            console.error('Section failed at chunk ' + at, err);
        }
        // Let the paint from ingestSource() actually reach the screen.
        await new Promise(resolve => setTimeout(resolve, 0));
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
    )].filter(cat => !HIDDEN_PILLS.has(cat));
    categoryTabsEl.innerHTML = '';

    // Accessories goes last: it's the catch-all most odds-and-ends pin
    // into, so it reads better as the tail of the row than as a category
    // competing with the clothing sections.
    const backPinned = ['🎁 Accessories'];
    for (const name of backPinned) {
        const idx = categories.indexOf(name);
        if (idx > -1) categories.push(...categories.splice(idx, 1));
    }

    addPill('All', 'all');
    for (const cat of categories) {
        addPill(cat, cat);
    }

    // Feed the autocomplete: each category becomes a suggestion that switches
    // the active pill (clicking it filters, rather than text-searching, since
    // titles don't contain words like "Electronics").
    categorySuggestions = categories.map(cat => {
        const label = stripEmoji(cat);
        const terms = [label.toLowerCase(), ...label.toLowerCase().split(/\s+/)];
        return { display: label, value: cat, kind: 'category', terms };
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
    if (value === '🎁 Accessories') return 'cat_accessories';
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
    syncCategoryLabel();
    closeCategoryMenu();
    renderProducts(true);
}

// The menu button doubles as the active-filter readout: "All Categories"
// while unfiltered, the category's own pill label otherwise.
function syncCategoryLabel() {
    if (!categoryMenuLabel) return;
    categoryMenuLabel.textContent = activeCategory === 'all'
        ? ((window.i18n && window.i18n.t('cat_menu')) || 'All Categories')
        : translatePill(activeCategory, activeCategory);
}

function openCategoryMenu() {
    if (!categoryTabsEl) return;
    categoryTabsEl.classList.remove('hidden');
    if (categoryMenuBtn) categoryMenuBtn.setAttribute('aria-expanded', 'true');
}

function closeCategoryMenu() {
    if (!categoryTabsEl) return;
    categoryTabsEl.classList.add('hidden');
    if (categoryMenuBtn) categoryMenuBtn.setAttribute('aria-expanded', 'false');
}

if (categoryMenuBtn) {
    categoryMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (categoryTabsEl.classList.contains('hidden')) openCategoryMenu();
        else closeCategoryMenu();
    });
    // Click-away and Escape close it; clicks inside the panel don't.
    document.addEventListener('click', (e) => {
        if (!categoryTabsEl.contains(e.target) && e.target !== categoryMenuBtn) closeCategoryMenu();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCategoryMenu();
    });
}

// "N products" next to the page heading — the number actually on show, so
// it tracks the active category and any search.
function updateProductCount() {
    if (!productCountEl) return;
    const n = (searchQuery || activeCategory !== 'all') ? currentFiltered.length : allProducts.length;
    if (!n) { productCountEl.textContent = ''; return; }
    const word = (window.i18n && window.i18n.t('count_products')) || 'products';
    productCountEl.textContent = n.toLocaleString() + ' ' + word;
}

// =============================================================
// SEARCH
// =============================================================
let searchDebounce = null;
if (searchInput) searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => renderProducts(true), 200);
    updateSuggestions(e.target.value);
});

if (priceSortEl) priceSortEl.addEventListener('change', (e) => {
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

if (searchInput) searchInput.addEventListener('keydown', (e) => {
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

    if (activeCategory !== 'all') {
        // Items show up in their primary category (p.category — the sheet
        // section they were parsed from) AND in any pinCategory derived
        // from their name. So a "Louis Vuitton Belt" listed in the Perfumes
        // section appears in Perfumes + Accessories, and an Air Jordan in
        // Hot Items appears in Hot Items + Sneakers. Same item never
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
    // first, then sourceOrder tiebreak (the sheet's own section order).
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
            // priceUsd puts the yuan-only rows on the same scale as the rest.
            const pa = a.priceUsd || parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
            const pb = b.priceUsd || parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
            return priceSort === 'low' ? pa - pb : pb - pa;
        });
    }

    if (filtered.length === 0 && allProducts.length > 0) {
        gridEl.style.minHeight = '';
        gridEl.innerHTML = '';
        noResultsEl.classList.remove('hidden');
        currentFiltered = [];
        renderedCount = 0;
        updateProductCount();
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
    updateProductCount();

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
    // The sheet marks the cheap version of an item "[Budget]" and the top
    // tier "[1:1]" in its name: those get the red and the sage treatment
    // respectively, and everything in between stays a plain card.
    let extraClass = '';
    if (p.isBudget) extraClass = ' discount';
    else if (p.isOneToOne) extraClass = ' onepointone';
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
    if (p.isBudget) {
        const badge = document.createElement('div');
        badge.className = 'discount-badge';
        badge.textContent = 'Budget';
        card.appendChild(badge);
    }
    if (p.isOneToOne) {
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
if (searchInput) searchInput.addEventListener('focus', () => {
    searchFocused = true;
    if (header) header.classList.remove('header-hidden');
    if (searchInput.value.trim()) updateSuggestions(searchInput.value);
});
if (searchInput) searchInput.addEventListener('blur', () => {
    searchFocused = false;
    // Delay so a click on a suggestion (which blurs the input) still registers.
    setTimeout(hideSuggestions, 150);
});

// Hide the header on scroll-down, show on scroll-up. Hysteresis is
// only applied to the HIDE direction — any scroll-up reveals the bar
// immediately, so the user never feels like it's "stuck hidden".
// Only transform is animated, so the height never shifts.
const SCROLL_DELTA = 8;
if (header) window.addEventListener('scroll', () => {
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
            // Scroll-down past banner with hysteresis — hide. Take the
            // category menu with it; a panel hanging off a bar that just
            // slid away looks unmoored.
            header.classList.add('header-hidden');
            closeCategoryMenu();
        }
        // Always update so we don't accumulate drift between events.
        lastScrollY = currentY;
    });
}, { passive: true });

// Infinite scroll — load more cards when near bottom.
// Synchronous append + try/finally so loadingMore can't get stuck true
// if rAF is throttled or appendBatch throws.
if (gridEl) window.addEventListener('scroll', () => {
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

// =============================================================
// PRODUCT STYLES — colorways shown in the modal, on demand
// =============================================================
// Returns the list of style/colorway variants ({img, name}) for an item
// from the Weidian SKU endpoint. Mirrors weidianImage's JSONP approach but
// keeps its own cache and parses the full colour attribute (the attr whose
// values carry images — sizes etc. come back without `img`). Exactly ONE
// call fires per modal open, so it doesn't reproduce the HTTP/2 burst
// failures that forced the bulk image loader to be disabled.
const styleCache = {};      // itemId -> array (caches successes AND failures [])
const pendingStyles = {};   // itemId -> Promise — dedupes concurrent fetches

function weidianStyles(itemId) {
    if (itemId in styleCache) return Promise.resolve(styleCache[itemId]);
    if (pendingStyles[itemId]) return pendingStyles[itemId];

    pendingStyles[itemId] = new Promise(resolve => {
        const cb = '_ws' + Math.random().toString(36).slice(2);
        const timeout = setTimeout(() => { done([]); }, 10000);

        function done(list) {
            clearTimeout(timeout);
            delete window[cb];
            delete pendingStyles[itemId];
            const el = document.getElementById('s_' + cb);
            if (el) el.remove();
            styleCache[itemId] = list || [];
            resolve(styleCache[itemId]);
        }

        window[cb] = function(data) {
            let list = [];
            try {
                const attrs = data?.result?.attrList || [];
                // Pick the attribute with the most image-bearing values — that's
                // the colourway/style axis; size axes have no images.
                let best = null;
                for (const a of attrs) {
                    const withImg = (a.attrValues || []).filter(v => v && v.img);
                    if (withImg.length && (!best || withImg.length > best.length)) best = withImg;
                }
                if (best) list = best.map(v => ({ img: v.img, name: v.attrValue || '' }));
            } catch (e) {}
            done(list);
        };

        const s = document.createElement('script');
        s.id = 's_' + cb;
        // Same referer-stripping rationale as weidianImage: the endpoint
        // rejects our github.io referer ("Referer Not Allowed").
        s.referrerPolicy = 'no-referrer';
        s.src = 'https://thor.weidian.com/detail/getItemSkuInfo/1.0?callback=' + cb +
                '&param=' + encodeURIComponent(JSON.stringify({ itemId: itemId }));
        s.onerror = () => done([]);
        document.body.appendChild(s);
    });
    return pendingStyles[itemId];
}

// Bumped on every modal open/close so a late-resolving fetch from a
// previously-opened product can't repaint the current (or closed) modal.
let modalStyleToken = 0;

function renderModalStyles(p) {
    const wrap = document.getElementById('modal-styles');
    const track = document.getElementById('modal-styles-track');
    const countEl = document.getElementById('modal-styles-count');
    if (!wrap || !track) return;

    const token = ++modalStyleToken;
    track.innerHTML = '';
    if (countEl) countEl.textContent = '';
    wrap.classList.add('hidden');
    wrap.classList.remove('styles-loading');
    if (!p.weidianId) return;

    // Show the section with a loading shimmer while the single call resolves.
    wrap.classList.remove('hidden');
    wrap.classList.add('styles-loading');

    weidianStyles(p.weidianId).then(styles => {
        if (token !== modalStyleToken) return; // a newer modal opened — bail
        wrap.classList.remove('styles-loading');
        // 0–1 variants isn't a gallery worth showing.
        if (!styles || styles.length < 2) {
            wrap.classList.add('hidden');
            return;
        }
        if (countEl) countEl.textContent = styles.length;
        const modalImg = document.getElementById('modal-img');
        const frag = document.createDocumentFragment();
        styles.forEach((st, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'modal-style' + (i === 0 ? ' active' : '');
            b.setAttribute('role', 'listitem');
            const im = document.createElement('img');
            im.loading = 'lazy';
            im.referrerPolicy = 'no-referrer';
            im.alt = st.name || ('Style ' + (i + 1));
            im.src = photoUrl(st.img, 160, 160);
            b.appendChild(im);
            b.addEventListener('click', () => {
                if (modalImg) {
                    modalImg.onerror = null;
                    modalImg.src = photoUrl(st.img, 800, 800);
                }
                track.querySelectorAll('.modal-style.active').forEach(el => el.classList.remove('active'));
                b.classList.add('active');
            });
            frag.appendChild(b);
        });
        track.appendChild(frag);
        track.scrollLeft = 0;
        wrap.classList.remove('hidden');
    });
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
    // Cancel any in-flight styles render so a late resolve can't repaint.
    modalStyleToken++;
    const modal = document.getElementById('product-modal');
    modal.classList.add('modal-closing');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('modal-closing');
        document.body.style.overflow = '';
    }, 250);
}

// Modal close handlers — only present on the product page.
const modalCloseBtn = document.querySelector('.product-modal-close');
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
const modalBackdrop = document.querySelector('.product-modal-backdrop');
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);

// =============================================================
// COPY UNIVERSAL LINK — copies the original store URL for pasting
// into any shopping agent (not just BoonBuy)
// =============================================================
// navigator.clipboard needs a secure context (https / localhost); the
// hidden-textarea execCommand path covers older mobile browsers.
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy') ? resolve() : reject(new Error('execCommand failed'));
        } catch (e) {
            reject(e);
        } finally {
            ta.remove();
        }
    });
}

const modalCopyBtn = document.getElementById('modal-copy-btn');
let copyFeedbackTimer = null;
if (modalCopyBtn) modalCopyBtn.addEventListener('click', () => {
    const link = modalCopyBtn.dataset.link;
    if (!link) return;
    copyToClipboard(link).then(() => {
        const label = document.getElementById('modal-copy-label');
        label.textContent = (window.i18n && window.i18n.t('copied')) || 'Copied!';
        modalCopyBtn.classList.add('copied');
        clearTimeout(copyFeedbackTimer);
        copyFeedbackTimer = setTimeout(() => {
            label.textContent = (window.i18n && window.i18n.t('copy_universal')) || 'Copy Universal Link';
            modalCopyBtn.classList.remove('copied');
        }, 1600);
    }).catch(() => {
        // Clipboard blocked (e.g. some in-app webviews) — select-and-copy
        // isn't possible either, so fall back to the prompt dialog where
        // the user can long-press-copy the link themselves.
        window.prompt('Copy this link:', link);
    });
});

// =============================================================
// HOME SHOWCASE — decorative animated product wall (landing page only)
// =============================================================
// Reuses the same fetch + parse primitives as the catalog but renders its
// own scrolling columns. Self-contained: never touches the grid/modal, and
// fails silently (it's purely decorative) so it can't break the home page.
const homeShowcaseEl = document.getElementById('home-showcase');
if (homeShowcaseEl) buildHomeShowcase(homeShowcaseEl);

// Featured Items carousel (home page) — horizontal marquee of hand-picked
// items, rendered synchronously from the pre-baked window.FEATURED_ITEMS.
const featuredCarouselEl = document.getElementById('featured-carousel');
if (featuredCarouselEl) buildFeaturedCarousel(featuredCarouselEl);

const SHOWCASE_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23161618' width='1' height='1'/%3E%3C/svg%3E";

async function buildHomeShowcase(root) {
    // Fast path: render the pre-baked, locally-hosted set synchronously so the
    // wall paints instantly with zero network/loading time and no broken images.
    if (window.SHOWCASE_ITEMS && window.SHOWCASE_ITEMS.length) {
        renderHomeShowcase(root, window.SHOWCASE_ITEMS);
        return;
    }
    // Fallback (no baked data): pull live from the sheet.
    try {
        const html = await fetchHtml(SHEET_ID, SHEET_MAIN_GID);
        // A few photogenic sections are plenty for a decorative wall.
        const wanted = ['🔥 Hot Items', '👟 Sneakers', '🧥 Hoodies', '👕 Tee/Polo'];
        let items = [];
        for (const chunk of splitSheetSections(html)) {
            const parsed = parseSheetSection(chunk);
            if (parsed.length && wanted.includes(parsed[0].category)) items = items.concat(parsed);
        }
        // Keep only entries with a usable, non-docsubipk photo + a buy link.
        items = items.filter(p => p && p.photo && p.link && !/\/docsubipk\//.test(p.photo));
        const seen = new Set();
        const uniq = [];
        for (const p of items) {
            const k = p.link + '|' + p.photo;
            if (seen.has(k)) continue;
            seen.add(k);
            uniq.push(p);
        }
        if (uniq.length < 6) { root.classList.add('showcase-empty'); return; }
        renderHomeShowcase(root, uniq);
    } catch (e) {
        root.classList.add('showcase-empty');
    }
}

function renderHomeShowcase(root, products) {
    const COLS = 3;
    const PER_COL = 8;
    const durations = ['38s', '30s', '46s'];
    const cols = Array.from({ length: COLS }, () => []);
    products.slice(0, COLS * PER_COL).forEach((p, i) => cols[i % COLS].push(p));

    const makeCard = (p) => {
        const a = document.createElement('a');
        a.className = 'showcase-card';
        a.href = p.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.tabIndex = -1; // decorative duplicate links stay out of the tab order
        const img = document.createElement('img');
        // Eager: the wall is a small, mostly off-screen marquee — lazy-loading
        // would leave cards blank until (if ever) the transform brings them in.
        img.loading = 'eager';
        img.referrerPolicy = 'no-referrer';
        img.alt = '';
        img.onerror = function() { this.onerror = null; this.src = SHOWCASE_PLACEHOLDER; };
        // Baked items ship a local `img` path; live fallback uses photoUrl().
        img.src = p.img || photoUrl(p.photo, 320, 320);
        a.appendChild(img);
        if (p.price) {
            const meta = document.createElement('div');
            meta.className = 'showcase-meta';
            const price = document.createElement('span');
            price.className = 'showcase-price';
            price.textContent = p.price;
            meta.appendChild(price);
            a.appendChild(meta);
        }
        return a;
    };

    root.innerHTML = '';
    cols.forEach((list, ci) => {
        if (!list.length) return;
        const col = document.createElement('div');
        col.className = 'showcase-col' + (ci % 2 ? ' showcase-col--down' : ' showcase-col--up');
        const track = document.createElement('div');
        track.className = 'showcase-track';
        track.style.setProperty('--dur', durations[ci % durations.length]);
        // Two identical copies so the vertical scroll loops seamlessly.
        list.forEach(p => track.appendChild(makeCard(p)));
        list.forEach(p => track.appendChild(makeCard(p)));
        col.appendChild(track);
        root.appendChild(col);
    });
}

function buildFeaturedCarousel(root) {
    const items = window.FEATURED_ITEMS;
    if (!items || !items.length) {
        const sec = root.closest('.featured');
        if (sec) sec.style.display = 'none';
        return;
    }
    const make = (p) => {
        const a = document.createElement('a');
        a.className = 'featured-card';
        a.href = p.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.tabIndex = -1;
        const img = document.createElement('img');
        img.loading = 'eager';
        img.referrerPolicy = 'no-referrer';
        img.alt = '';
        img.onerror = function() { this.onerror = null; this.src = SHOWCASE_PLACEHOLDER; };
        img.src = p.img || photoUrl(p.photo, 360, 360);
        const info = document.createElement('div');
        info.className = 'featured-info';
        const nm = document.createElement('div');
        nm.className = 'featured-name';
        nm.textContent = (window.i18n && window.i18n.dyn(p.name)) || p.name || '';
        const pr = document.createElement('div');
        pr.className = 'featured-price';
        pr.textContent = p.price || '';
        info.appendChild(nm);
        info.appendChild(pr);
        a.appendChild(img);
        a.appendChild(info);
        return a;
    };
    const track = document.createElement('div');
    track.className = 'featured-marquee';
    track.style.setProperty('--fdur', Math.max(40, items.length * 4.5) + 's');
    // Two identical copies so the horizontal scroll loops seamlessly.
    items.forEach(p => track.appendChild(make(p)));
    items.forEach(p => track.appendChild(make(p)));
    root.innerHTML = '';
    root.appendChild(track);
}

// =============================================================
// INIT
// =============================================================
// The home page has no grid, so its search box is a GET form pointing
// here; pick the query up and start filtered.
if (searchInput) {
    try {
        const q = new URLSearchParams(window.location.search).get('q');
        if (q) {
            searchInput.value = q;
            searchQuery = q.toLowerCase().trim();
        }
    } catch (e) {}
}

// Only bootstrap the catalog on the product page (where the grid exists).
// On the home page app.js loads solely for i18n / language switching.
if (gridEl) {
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
}
