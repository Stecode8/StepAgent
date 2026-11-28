// =============================================================
// i18n — UI string translations
// =============================================================
const TRANSLATIONS = {
    en: {
        intro: 'Welcome to my spreadsheet!',
        signup: 'Sign up on BoonBuy and get a 40% off shipping coupon',
        youtube: 'YouTube for more content!',
        filter_any: 'All',
        sort_label: 'Sort',
        sort_featured: 'Recommended',
        filter_heading: 'Filter products',
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
        view: 'View',
        tier_budget: 'Budget Batch',
        tier_best: '1:1 Best Batch',
        tier_standard: 'Standard Batch',
        save: 'Save',
        saved: 'Saved',
        cat_saved: '♥ Saved',
        saved_empty: 'No saved items yet. Tap the ♥ on any product to save it here.',
        similar: 'Similar Products',
        footer_disclaimer: 'We are not affiliated with Weidian, Taobao, 1688 or any other shopping platform. This site only helps buyers find products from Chinese marketplaces. All brand names and trademarks belong to their respective owners.',
        footer_rights: 'All rights reserved.',
        filters: 'Filters',
        clear_filters: 'Clear filters',
        qc_photos: 'QC Photos',
        grp_clothing: 'Clothing',
        grp_accessories: 'Shoes & Accessories',
        grp_more: 'More',
    },
    fr: {
        intro: 'Bienvenue sur ma feuille !',
        signup: 'Inscris-toi sur BoonBuy et obtiens un coupon de 40 % sur la livraison',
        youtube: 'YouTube pour plus de contenu !',
        filter_any: 'Tous',
        sort_label: 'Trier',
        sort_featured: 'Recommandés',
        filter_heading: 'Filtrer les produits',
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
        view: 'Voir',
        tier_budget: 'Batch économique',
        tier_best: 'Meilleur batch 1:1',
        tier_standard: 'Batch standard',
        save: 'Sauver',
        saved: 'Sauvé',
        cat_saved: '♥ Favoris',
        saved_empty: 'Aucun favori pour l\'instant. Appuyez sur ♥ sur un produit pour l\'enregistrer ici.',
        similar: 'Produits similaires',
        footer_disclaimer: 'Nous ne sommes pas affiliés à Weidian, Taobao, 1688 ni à aucune autre plateforme d\'achat. Ce site aide simplement à trouver des produits sur les marketplaces chinoises. Toutes les marques appartiennent à leurs propriétaires respectifs.',
        footer_rights: 'Tous droits réservés.',
        filters: 'Filtres',
        clear_filters: 'Effacer les filtres',
        qc_photos: 'Photos QC',
        grp_clothing: 'Vêtements',
        grp_accessories: 'Chaussures & accessoires',
        grp_more: 'Plus',
    },
    de: {
        intro: 'Willkommen in meiner Tabelle!',
        signup: 'Melde dich bei BoonBuy an und erhalte einen 40 %-Versandgutschein',
        youtube: 'YouTube für mehr Inhalte!',
        filter_any: 'Alle',
        sort_label: 'Sortieren',
        sort_featured: 'Empfohlen',
        filter_heading: 'Produkte filtern',
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
        view: 'Ansehen',
        tier_budget: 'Budget-Batch',
        tier_best: '1:1 Bester Batch',
        tier_standard: 'Standard-Batch',
        save: 'Merken',
        saved: 'Gemerkt',
        cat_saved: '♥ Gemerkt',
        saved_empty: 'Noch nichts gemerkt. Tippe bei einem Produkt auf ♥, um es hier zu speichern.',
        similar: 'Ähnliche Produkte',
        footer_disclaimer: 'Wir sind nicht mit Weidian, Taobao, 1688 oder anderen Shopping-Plattformen verbunden. Diese Seite hilft nur dabei, Produkte auf chinesischen Marktplätzen zu finden. Alle Marken gehören ihren jeweiligen Inhabern.',
        footer_rights: 'Alle Rechte vorbehalten.',
        filters: 'Filter',
        clear_filters: 'Filter zurücksetzen',
        qc_photos: 'QC-Fotos',
        grp_clothing: 'Kleidung',
        grp_accessories: 'Schuhe & Accessoires',
        grp_more: 'Mehr',
    },
    es: {
        intro: '¡Bienvenido a mi hoja!',
        signup: 'Regístrate en BoonBuy y obtén un cupón del 40 % en el envío',
        youtube: '¡YouTube para más contenido!',
        filter_any: 'Todos',
        sort_label: 'Ordenar',
        sort_featured: 'Recomendados',
        filter_heading: 'Filtrar productos',
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
        view: 'Ver',
        tier_budget: 'Batch económico',
        tier_best: 'Mejor batch 1:1',
        tier_standard: 'Batch estándar',
        save: 'Guardar',
        saved: 'Guardado',
        cat_saved: '♥ Guardados',
        saved_empty: 'Aún no has guardado nada. Toca el ♥ de un producto para guardarlo aquí.',
        similar: 'Productos similares',
        footer_disclaimer: 'No estamos afiliados a Weidian, Taobao, 1688 ni a ninguna otra plataforma de compras. Este sitio solo ayuda a encontrar productos en marketplaces chinos. Todas las marcas pertenecen a sus respectivos propietarios.',
        footer_rights: 'Todos los derechos reservados.',
        filters: 'Filtros',
        clear_filters: 'Borrar filtros',
        qc_photos: 'Fotos QC',
        grp_clothing: 'Ropa',
        grp_accessories: 'Zapatos y accesorios',
        grp_more: 'Más',
    },
    it: {
        intro: 'Benvenuto nel mio foglio!',
        signup: 'Registrati su BoonBuy e ottieni un coupon del 40% sulla spedizione',
        youtube: 'YouTube per altri contenuti!',
        filter_any: 'Tutti',
        sort_label: 'Ordina',
        sort_featured: 'Consigliati',
        filter_heading: 'Filtra prodotti',
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
        view: 'Vedi',
        tier_budget: 'Batch economico',
        tier_best: 'Miglior batch 1:1',
        tier_standard: 'Batch standard',
        save: 'Salva',
        saved: 'Salvato',
        cat_saved: '♥ Salvati',
        saved_empty: 'Nessun prodotto salvato. Tocca il ♥ su un prodotto per salvarlo qui.',
        similar: 'Prodotti simili',
        footer_disclaimer: 'Non siamo affiliati con Weidian, Taobao, 1688 o altre piattaforme di acquisto. Questo sito aiuta solo a trovare prodotti sui marketplace cinesi. Tutti i marchi appartengono ai rispettivi proprietari.',
        footer_rights: 'Tutti i diritti riservati.',
        filters: 'Filtri',
        clear_filters: 'Cancella filtri',
        qc_photos: 'Foto QC',
        grp_clothing: 'Abbigliamento',
        grp_accessories: 'Scarpe e accessori',
        grp_more: 'Altro',
    },
};

// Text for the BoonBuy sign-up bar and the Discord welcome pop-up.
(function addPromoText() {
    const T = {
        en: { promo_agent_title: 'BoonBuy – a reliable, fast agent to ship from China', promo_agent_sub: 'Sign up with code STEPAGENT and get a 40% off shipping coupon', promo_register: 'Register',
              dc_title: 'Join our Discord', dc_body: 'New finds every day, QC checks, and help with your orders, 24/7.', dc_join: 'Join the Discord', dc_later: 'Maybe later', close: 'Close' },
        fr: { promo_agent_title: 'BoonBuy – un agent fiable et rapide pour expédier depuis la Chine', promo_agent_sub: 'Inscris-toi avec le code STEPAGENT et obtiens un coupon de 40 % sur la livraison', promo_register: 'S’inscrire',
              dc_title: 'Rejoins notre Discord', dc_body: 'De nouvelles trouvailles chaque jour, des vérifications QC et de l’aide pour tes commandes, 24h/24.', dc_join: 'Rejoindre le Discord', dc_later: 'Plus tard', close: 'Fermer' },
        de: { promo_agent_title: 'BoonBuy – ein zuverlässiger, schneller Agent für den Versand aus China', promo_agent_sub: 'Registriere dich mit dem Code STEPAGENT und erhalte einen 40 %-Versandgutschein', promo_register: 'Registrieren',
              dc_title: 'Tritt unserem Discord bei', dc_body: 'Täglich neue Funde, QC-Checks und Hilfe bei deinen Bestellungen, rund um die Uhr.', dc_join: 'Discord beitreten', dc_later: 'Später', close: 'Schließen' },
        es: { promo_agent_title: 'BoonBuy – un agente fiable y rápido para enviar desde China', promo_agent_sub: 'Regístrate con el código STEPAGENT y obtén un cupón del 40 % en el envío', promo_register: 'Registrarse',
              dc_title: 'Únete a nuestro Discord', dc_body: 'Nuevos hallazgos cada día, revisiones QC y ayuda con tus pedidos, 24/7.', dc_join: 'Unirse al Discord', dc_later: 'Quizás luego', close: 'Cerrar' },
        it: { promo_agent_title: 'BoonBuy – un agente affidabile e veloce per spedire dalla Cina', promo_agent_sub: 'Registrati con il codice STEPAGENT e ottieni un coupon del 40% sulla spedizione', promo_register: 'Registrati',
              dc_title: 'Unisciti al nostro Discord', dc_body: 'Nuovi articoli ogni giorno, controlli QC e aiuto con i tuoi ordini, 24/7.', dc_join: 'Entra nel Discord', dc_later: 'Più tardi', close: 'Chiudi' },
    };
    Object.keys(T).forEach(l => Object.assign(TRANSLATIONS[l], T[l]));
})();

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
        // Labels built from CATEGORY_DEFS / FACET_DEFS (filters, home
        // collections) are relabelled by the app code.
        if (typeof onLanguageApplied === 'function') onLanguageApplied();
    }

    // Translate all dynamic strings (categories + product names) for the current
    // language, then re-render so cards/pills pick up the new translations.
    async function translateDynamic() {
        if (currentLang === 'en') return;
        let products;
        try { products = allProducts; } catch (e) { return; }
        if (!products || !products.length) return;
        const names = products.map(p => p.name);
        await translateMany(names, currentLang);
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
// BoonBuy affiliate details. Every Buy link is built from the product's
// Weidian item id plus this invite code (see agentLink()).
const INVITE_CODE = 'STEPAGENT';
// BoonBuy product URLs encode the source platform as a digit in the path:
// /product/2/<itemId>, where 2 = Weidian — where every catalogue item is.
const BOONBUY_PRODUCT_BASE = 'https://boonbuy.com/product/2/';

// The catalogue ships with the site as a JSON file, generated from a
// channel product export by tools/build_products.py. QC photos live in a
// second file that is only fetched the first time a product is opened.
const PRODUCTS_URL = 'products.json?v=2026-11-24';
const QC_URL = 'products-qc.json?v=2026-11-24';

// Prices in the export are in yuan. USD for display and sorting, EUR shown
// alongside (same ratios the old spreadsheet used: ¥180 = $29.29 = €24.79).
const CNY_TO_USD = 0.163;
const USD_TO_EUR = 0.846;

// Categories: key (as written by build_products.py), emoji, menu group, and
// the label in en / fr / de / es / it. Array order is menu order.
const CATEGORY_DEFS = [
    ['tops',        '👕', 'clothing',    ['T-shirts, Shirts & Tops', 'T-shirts, chemises & hauts', 'T-Shirts, Hemden & Tops', 'Camisetas, camisas y tops', 'T-shirt, camicie e top']],
    ['hoodies',     '🧥', 'clothing',    ['Hoodies & Sweatshirts', 'Hoodies & sweats', 'Hoodies & Sweatshirts', 'Sudaderas', 'Felpe']],
    ['sweaters',    '🧶', 'clothing',    ['Sweaters & Knitwear', 'Pulls & mailles', 'Pullover & Strick', 'Jerséis y punto', 'Maglioni e maglieria']],
    ['jackets',     '🦺', 'clothing',    ['Jackets & Coats', 'Vestes & manteaux', 'Jacken & Mäntel', 'Chaquetas y abrigos', 'Giacche e cappotti']],
    ['sets',        '🏃', 'clothing',    ['Sets & Tracksuits', 'Ensembles & survêtements', 'Sets & Trainingsanzüge', 'Conjuntos y chándales', 'Completi e tute']],
    ['jeans',       '👖', 'clothing',    ['Jeans', 'Jeans', 'Jeans', 'Vaqueros', 'Jeans']],
    ['pants',       '👖', 'clothing',    ['Pants', 'Pantalons', 'Hosen', 'Pantalones', 'Pantaloni']],
    ['shorts',      '🩳', 'clothing',    ['Shorts', 'Shorts', 'Shorts', 'Pantalones cortos', 'Pantaloncini']],
    ['dresses',     '👗', 'clothing',    ['Dresses & Skirts', 'Robes & jupes', 'Kleider & Röcke', 'Vestidos y faldas', 'Abiti e gonne']],
    ['bodysuits',   '🩱', 'clothing',    ['Bodysuits & Jumpsuits', 'Bodys & combinaisons', 'Bodys & Overalls', 'Bodis y monos', 'Body e tute intere']],
    ['jerseys',     '⚽', 'clothing',    ['Jerseys', 'Maillots', 'Trikots', 'Camisetas deportivas', 'Maglie sportive']],
    ['underwear',   '🩲', 'clothing',    ['Underwear & Sleepwear', 'Sous-vêtements & pyjamas', 'Unterwäsche & Nachtwäsche', 'Ropa interior y pijamas', 'Intimo e pigiami']],
    ['shoes',       '👟', 'accessories', ['Shoes', 'Chaussures', 'Schuhe', 'Zapatos', 'Scarpe']],
    ['socks',       '🧦', 'accessories', ['Socks', 'Chaussettes', 'Socken', 'Calcetines', 'Calze']],
    ['hats',        '🧢', 'accessories', ['Hats & Caps', 'Chapeaux & casquettes', 'Hüte & Caps', 'Gorros y gorras', 'Cappelli']],
    ['bags',        '👜', 'accessories', ['Bags', 'Sacs', 'Taschen', 'Bolsos', 'Borse']],
    ['jewelry',     '💍', 'accessories', ['Jewelry', 'Bijoux', 'Schmuck', 'Joyería', 'Gioielli']],
    ['watches',     '⌚', 'accessories', ['Watches', 'Montres', 'Uhren', 'Relojes', 'Orologi']],
    ['glasses',     '🕶️', 'accessories', ['Glasses', 'Lunettes', 'Brillen', 'Gafas', 'Occhiali']],
    ['belts',       '🪢', 'accessories', ['Belts & Ties', 'Ceintures & cravates', 'Gürtel & Krawatten', 'Cinturones y corbatas', 'Cinture e cravatte']],
    ['scarves',     '🧣', 'accessories', ['Scarves & Gloves', 'Écharpes & gants', 'Schals & Handschuhe', 'Bufandas y guantes', 'Sciarpe e guanti']],
    ['halloween',   '🎃', 'more',        ['Halloween & Party', 'Halloween & fête', 'Halloween & Party', 'Halloween y fiesta', 'Halloween e feste']],
    ['pets',        '🐾', 'more',        ['Pets', 'Animaux', 'Haustiere', 'Mascotas', 'Animali']],
    ['electronics', '🎧', 'more',        ['Electronics', 'Électronique', 'Elektronik', 'Electrónica', 'Elettronica']],
    ['home',        '🏠', 'more',        ['Home & Lifestyle', 'Maison & lifestyle', 'Haus & Lifestyle', 'Hogar y estilo de vida', 'Casa e lifestyle']],
    ['toys',        '🧸', 'more',        ['Toys & Plush', 'Jouets & peluches', 'Spielzeug & Plüsch', 'Juguetes y peluches', 'Giocattoli e peluche']],
    ['other',       '📦', 'more',        ['Other', 'Autres', 'Sonstiges', 'Otros', 'Altro']],
];
const CATEGORY_GROUPS = ['clothing', 'accessories', 'more'];
// Label of the "Type" dropdown (the category, as a filter): en / fr / de / es / it.
const TYPE_LABEL = ['Type', 'Type', 'Art', 'Tipo', 'Tipo'];

// Tag facets. `filter: true` facets get a dropdown on the Products page, in
// this order. Value keys are what build_products.py writes ("style:korean").
// Labels are en / fr / de / es / it.
const FACET_DEFS = [
    { key: 'style', filter: true, label: ['Style', 'Style', 'Stil', 'Estilo', 'Stile'], values: [
        ['american-streetwear', ['Streetwear', 'Streetwear', 'Streetwear', 'Streetwear', 'Streetwear']],
        ['vintage-retro',       ['Vintage & Retro', 'Vintage & rétro', 'Vintage & Retro', 'Vintage y retro', 'Vintage e retrò']],
        ['gothic-punk',         ['Gothic & Punk', 'Gothique & punk', 'Gothic & Punk', 'Gótico y punk', 'Gotico e punk']],
        ['korean',              ['Korean', 'Coréen', 'Koreanisch', 'Coreano', 'Coreano']],
        ['japanese',            ['Japanese', 'Japonais', 'Japanisch', 'Japonés', 'Giapponese']],
        ['old-money-smart',     ['Old Money', 'Old Money', 'Old Money', 'Old Money', 'Old Money']],
        ['y2k-hot-girl',        ['Y2K', 'Y2K', 'Y2K', 'Y2K', 'Y2K']],
        ['hip-hop',             ['Hip-hop', 'Hip-hop', 'Hip-Hop', 'Hip-hop', 'Hip-hop']],
        ['workwear-outdoor',    ['Workwear & Outdoor', 'Workwear & outdoor', 'Workwear & Outdoor', 'Workwear y outdoor', 'Workwear e outdoor']],
        ['sporty',              ['Sporty', 'Sportswear', 'Sportlich', 'Deportivo', 'Sportivo']],
        ['preppy-college',      ['Preppy', 'Preppy', 'Preppy', 'Preppy', 'Preppy']],
        ['minimalist-basic',    ['Minimalist', 'Minimaliste', 'Minimalistisch', 'Minimalista', 'Minimal']],
        ['cute',                ['Cute', 'Mignon', 'Süß', 'Mono', 'Carino']],
    ]},
    { key: 'pattern', filter: true, label: ['Pattern', 'Motif', 'Muster', 'Estampado', 'Fantasia'], values: [
        ['graphic-print',    ['Graphic print', 'Imprimé graphique', 'Grafikprint', 'Estampado gráfico', 'Stampa grafica']],
        ['letters-logo',     ['Lettering', 'Lettrage', 'Schriftzug', 'Letras', 'Scritte']],
        ['embroidered',      ['Embroidered', 'Brodé', 'Bestickt', 'Bordado', 'Ricamato']],
        ['striped',          ['Striped', 'Rayé', 'Gestreift', 'Rayas', 'A righe']],
        ['colour-block',     ['Colour block', 'Color block', 'Colorblock', 'Bloques de color', 'Color block']],
        ['floral',           ['Floral', 'Fleuri', 'Geblümt', 'Floral', 'Floreale']],
        ['stars',            ['Stars', 'Étoiles', 'Sterne', 'Estrellas', 'Stelle']],
        ['skull',            ['Skull', 'Tête de mort', 'Totenkopf', 'Calavera', 'Teschio']],
        ['leopard',          ['Leopard', 'Léopard', 'Leopard', 'Leopardo', 'Leopardato']],
        ['camo',             ['Camo', 'Camouflage', 'Camouflage', 'Camuflaje', 'Mimetico']],
        ['plaid-check',      ['Plaid & Check', 'Carreaux', 'Kariert', 'Cuadros', 'Quadri']],
        ['graffiti',         ['Graffiti', 'Graffiti', 'Graffiti', 'Grafiti', 'Graffiti']],
        ['gradient-tie-dye', ['Gradient & Tie-dye', 'Dégradé & tie-dye', 'Farbverlauf & Batik', 'Degradado y tie-dye', 'Sfumato e tie-dye']],
        ['polka-dot',        ['Polka dot', 'Pois', 'Gepunktet', 'Lunares', 'Pois']],
    ]},
    { key: 'colour', filter: true, label: ['Colour', 'Couleur', 'Farbe', 'Color', 'Colore'], values: [
        ['black',       ['Black', 'Noir', 'Schwarz', 'Negro', 'Nero']],
        ['white',       ['White', 'Blanc', 'Weiß', 'Blanco', 'Bianco']],
        ['grey',        ['Grey', 'Gris', 'Grau', 'Gris', 'Grigio']],
        ['blue',        ['Blue', 'Bleu', 'Blau', 'Azul', 'Blu']],
        ['red',         ['Red', 'Rouge', 'Rot', 'Rojo', 'Rosso']],
        ['pink',        ['Pink', 'Rose', 'Rosa', 'Rosa', 'Rosa']],
        ['green',       ['Green', 'Vert', 'Grün', 'Verde', 'Verde']],
        ['brown',       ['Brown & Beige', 'Marron & beige', 'Braun & Beige', 'Marrón y beige', 'Marrone e beige']],
        ['yellow',      ['Yellow', 'Jaune', 'Gelb', 'Amarillo', 'Giallo']],
        ['purple',      ['Purple', 'Violet', 'Lila', 'Morado', 'Viola']],
        ['orange',      ['Orange', 'Orange', 'Orange', 'Naranja', 'Arancione']],
        ['silver',      ['Silver', 'Argent', 'Silber', 'Plateado', 'Argento']],
        ['gold',        ['Gold', 'Or', 'Gold', 'Dorado', 'Oro']],
        ['multicolour', ['Multicolour', 'Multicolore', 'Mehrfarbig', 'Multicolor', 'Multicolore']],
    ]},
    { key: 'fit', filter: true, label: ['Fit', 'Coupe', 'Passform', 'Corte', 'Vestibilità'], values: [
        ['loose-oversized', ['Loose & Oversized', 'Ample & oversize', 'Locker & Oversize', 'Holgado y oversize', 'Ampio e oversize']],
        ['wide-leg',        ['Wide leg', 'Jambe large', 'Weites Bein', 'Pierna ancha', 'Gamba larga']],
        ['straight',        ['Straight', 'Droit', 'Gerade', 'Recto', 'Dritto']],
        ['slim',            ['Slim', 'Ajusté', 'Slim', 'Ajustado', 'Aderente']],
        ['cropped',         ['Cropped', 'Court', 'Cropped', 'Corto', 'Corto']],
    ]},
    { key: 'season', filter: true, label: ['Season', 'Saison', 'Saison', 'Temporada', 'Stagione'], values: [
        ['winter', ['Winter', 'Hiver', 'Winter', 'Invierno', 'Inverno']],
        ['summer', ['Summer', 'Été', 'Sommer', 'Verano', 'Estate']],
    ]},
    // Price tiers are computed from the price, not stored as tags.
    { key: 'price', filter: true, label: ['Price', 'Prix', 'Preis', 'Precio', 'Prezzo'], values: [
        ['under-10', ['Under $10', 'Moins de 10 $', 'Unter 10 $', 'Menos de 10 $', 'Meno di 10 $']],
        ['10-25',    ['$10–25', '10–25 $', '10–25 $', '10–25 $', '10–25 $']],
        ['25-50',    ['$25–50', '25–50 $', '25–50 $', '25–50 $', '25–50 $']],
        ['50-plus',  ['$50+', '50 $ et plus', 'Ab 50 $', 'Más de 50 $', 'Oltre 50 $']],
    ]},
    // Not shown as dropdowns, but searchable and usable in ?facet= links.
    { key: 'material', label: ['Material', 'Matière', 'Material', 'Material', 'Materiale'], values: [
        ['cotton',     ['Cotton', 'Coton', 'Baumwolle', 'Algodón', 'Cotone']],
        ['denim',      ['Denim', 'Denim', 'Denim', 'Denim', 'Denim']],
        ['leather',    ['Leather', 'Cuir', 'Leder', 'Cuero', 'Pelle']],
        ['wool-knit',  ['Wool & Knit', 'Laine & maille', 'Wolle & Strick', 'Lana y punto', 'Lana e maglia']],
        ['fleece-fur', ['Fleece & Fur', 'Polaire & fourrure', 'Fleece & Fell', 'Forro polar y pelo', 'Pile e pelliccia']],
        ['silk-satin', ['Silk & Satin', 'Soie & satin', 'Seide & Satin', 'Seda y satén', 'Seta e raso']],
        ['mesh',       ['Mesh', 'Mesh', 'Mesh', 'Malla', 'Rete']],
        ['linen',      ['Linen', 'Lin', 'Leinen', 'Lino', 'Lino']],
        ['nylon',      ['Nylon', 'Nylon', 'Nylon', 'Nylon', 'Nylon']],
        ['corduroy',   ['Corduroy', 'Velours côtelé', 'Cord', 'Pana', 'Velluto a coste']],
        ['metal',      ['Metal', 'Métal', 'Metall', 'Metal', 'Metallo']],
    ]},
    { key: 'gender', label: ['For', 'Pour', 'Für', 'Para', 'Per'], values: [
        ['women', ['Women', 'Femme', 'Damen', 'Mujer', 'Donna']],
        ['men',   ['Men', 'Homme', 'Herren', 'Hombre', 'Uomo']],
    ]},
    { key: 'occasion', label: ['Occasion', 'Occasion', 'Anlass', 'Ocasión', 'Occasione'], values: [
        ['halloween', ['Halloween', 'Halloween', 'Halloween', 'Halloween', 'Halloween']],
        ['christmas', ['Christmas', 'Noël', 'Weihnachten', 'Navidad', 'Natale']],
    ]},
    { key: 'feature', label: ['Feature', 'Détail', 'Detail', 'Detalle', 'Dettaglio'], values: [
        ['hooded', ['Hooded', 'À capuche', 'Mit Kapuze', 'Con capucha', 'Con cappuccio']],
    ]},
];

// Home page "Shop by style" collections: [facet, value]. Each links to the
// Products page with that filter applied.
const HOME_COLLECTIONS = [
    ['style', 'american-streetwear'], ['style', 'vintage-retro'], ['style', 'gothic-punk'],
    ['style', 'old-money-smart'], ['style', 'y2k-hot-girl'], ['style', 'korean'],
    ['season', 'winter'], ['style', 'workwear-outdoor'],
];

const LANG_INDEX = { en: 0, fr: 1, de: 2, es: 3, it: 4 };
function langIdx() {
    const l = (window.i18n && window.i18n.current) || 'en';
    return LANG_INDEX[l] || 0;
}
const CATEGORY_BY_KEY = new Map(CATEGORY_DEFS.map(([key, emoji, group, labels]) => [key, { key, emoji, group, labels }]));
const FACET_BY_KEY = new Map(FACET_DEFS.map(f => [f.key, { ...f, valueMap: new Map(f.values) }]));
const FILTER_FACETS = FACET_DEFS.filter(f => f.filter).map(f => f.key);

// Category label without emoji, in the current language (English if unknown).
function catName(key, lang) {
    const c = CATEGORY_BY_KEY.get(key);
    if (!c) return key || '';
    return c.labels[lang == null ? langIdx() : lang] || c.labels[0];
}
// Pill text: emoji + label.
function catPillLabel(key) {
    const c = CATEGORY_BY_KEY.get(key);
    return c ? c.emoji + ' ' + catName(key) : key;
}
function facetName(facet, lang) {
    const f = FACET_BY_KEY.get(facet);
    return f ? (f.label[lang == null ? langIdx() : lang] || f.label[0]) : facet;
}
function tagName(facet, value, lang) {
    const f = FACET_BY_KEY.get(facet);
    const labels = f && f.valueMap.get(value);
    return labels ? (labels[lang == null ? langIdx() : lang] || labels[0]) : value;
}
function priceTier(usd) {
    return usd < 10 ? 'under-10' : usd < 25 ? '10-25' : usd < 50 ? '25-50' : '50-plus';
}
// Tag values of one facet on a product ("price" is derived from the price).
function productFacetValues(p, facet) {
    if (facet === 'price') return [priceTier(p.priceUsd)];
    return p.tagMap[facet] || [];
}

// =============================================================
// APP STATE
// =============================================================
let allProducts = [];
let currentFiltered = [];
let activeCategory = 'all';
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
    // The heart on a card saves/unsaves without opening the popup.
    const saveBtn = e.target.closest('.card-save');
    if (saveBtn) {
        e.stopPropagation();
        toggleSaved(p);
        return;
    }
    openProductModal(p);
});

// =============================================================
// SAVED ITEMS — favourites kept in this browser (localStorage).
// No account needed; they live on the visitor's own device only.
// =============================================================
const SAVED_KEY = 'saved-items';
const SAVED_CATEGORY = '__saved';
let savedKeys = new Set();
try { savedKeys = new Set(JSON.parse(localStorage.getItem(SAVED_KEY) || '[]')); } catch (e) {}

function productKey(p) {
    return (p.link || '') + '|' + (p.name || '');
}

function isSaved(p) {
    return savedKeys.has(productKey(p));
}

function toggleSaved(p) {
    const k = productKey(p);
    if (savedKeys.has(k)) savedKeys.delete(k);
    else savedKeys.add(k);
    try { localStorage.setItem(SAVED_KEY, JSON.stringify([...savedKeys])); } catch (e) {}
    syncSavedUI(p);
}

// Refresh every heart/save control that shows this product, plus the
// saved-items list when it is the view on screen.
function syncSavedUI(p) {
    const on = isSaved(p);
    const k = productKey(p);
    document.querySelectorAll('.product-card').forEach(card => {
        const item = currentFiltered[parseInt(card.dataset.index)];
        if (!item || productKey(item) !== k) return;
        const btn = card.querySelector('.card-save');
        if (btn) { btn.classList.toggle('on', on); btn.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    });
    const modalSave = document.getElementById('modal-save-btn');
    if (modalSave && modalSave.dataset.key === k) setModalSaveState(on);
    updateSavedPill();
    if (activeCategory === SAVED_CATEGORY && !on) renderProducts(true);
}

function setModalSaveState(on) {
    const btn = document.getElementById('modal-save-btn');
    if (!btn) return;
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    const label = btn.querySelector('.modal-save-label');
    if (label) label.textContent = (window.i18n && window.i18n.t(on ? 'saved' : 'save')) || (on ? 'Saved' : 'Save');
}

function updateSavedPill() {
    // The "♥ Saved (n)" entry in the filter row's Type dropdown.
    const opt = filterBarEl && filterBarEl.querySelector('.filter-type option[value="' + SAVED_CATEGORY + '"]');
    if (opt) opt.textContent = translatePill(SAVED_CATEGORY) + (savedKeys.size ? ' (' + savedKeys.size + ')' : '');
}

const HEART_SVG = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.4 2.5h1.8c.8-1.4 2.3-2.5 4.4-2.5 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>';

// Short category name for the small label above a card's title. Hot Items
// is a merchandising section, not a kind of product, so those items show
// the category their name pins them into instead.
function cardCategory(p) {
    return catName(p.category);
}

// Title as shown (translated when a translation is cached).
function cleanName(name) {
    return String(name || '').replace(/\s+/g, ' ').trim();
}

// Short descriptor line under a title, e.g. "Vintage & Retro · Loose &
// Oversized" — this is what stands in for a brand name on these products.
function cardTags(p, max) {
    const out = [];
    for (const f of ['style', 'fit', 'pattern', 'material']) {
        for (const v of p.tagMap[f] || []) {
            out.push(tagName(f, v));
            if (out.length >= max) return out;
        }
    }
    return out;
}

function openProductModal(p) {
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
    const displayName = cleanName((window.i18n && window.i18n.dyn(p.name)) || p.name);
    modalImg.alt = displayName;
    document.getElementById('modal-name').textContent = displayName;
    const modalCat = document.getElementById('modal-cat');
    if (modalCat) modalCat.textContent = cardCategory(p);
    const modalTier = document.getElementById('modal-tier');
    if (modalTier) {
        const tags = cardTags(p, 4);
        modalTier.textContent = tags.join(' · ');
        modalTier.className = 'product-modal-tier';
        modalTier.classList.toggle('hidden', !tags.length);
    }
    const modalSave = document.getElementById('modal-save-btn');
    if (modalSave) {
        modalSave.dataset.key = productKey(p);
        modalSave._product = p;
        setModalSaveState(isSaved(p));
    }
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
    renderModalQc(p);
    // Load this item's different styles/colorways (one SKU call, cached).
    renderModalStyles(p);
    renderSimilar(p);
    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden', 'modal-closing');
    modal.querySelector('.product-modal-content').scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

// QC photos strip in the popup. The photo file is fetched once, on the
// first open; a token guards against a slow load landing on a newer popup.
let modalQcToken = 0;
function renderModalQc(p) {
    const wrap = document.getElementById('modal-qc');
    const track = document.getElementById('modal-qc-track');
    const count = document.getElementById('modal-qc-count');
    if (!wrap || !track) return;
    const token = ++modalQcToken;
    wrap.classList.add('hidden');
    track.innerHTML = '';
    loadQcPhotos().then(all => {
        if (token !== modalQcToken) return;
        const photos = (all && all[p.weidianId]) || [];
        if (!photos.length) return;
        if (count) count.textContent = photos.length;
        for (const src of photos) {
            const a = document.createElement('a');
            a.className = 'qc-thumb';
            a.href = src;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            // Open in the on-page viewer. The href stays so a long-press or
            // middle-click can still open the original file.
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const shown = [...track.querySelectorAll('.qc-thumb')].map(t => t.getAttribute('href'));
                openQcViewer(shown, shown.indexOf(src));
            });
            const img = document.createElement('img');
            img.loading = 'lazy';
            img.referrerPolicy = 'no-referrer';
            img.alt = '';
            img.onerror = function() { a.remove(); };
            img.src = photoUrl(src, 240, 320);
            a.appendChild(img);
            track.appendChild(a);
        }
        track.scrollLeft = 0;
        wrap.classList.remove('hidden');
    });
}

// "Similar Products" strip at the bottom of the popup: other items from the
// same category, ranked by shared tags and shared title words.
function renderSimilar(p) {
    const wrap = document.getElementById('modal-similar');
    const track = document.getElementById('modal-similar-track');
    if (!wrap || !track) return;
    const words = new Set(cleanName(p.name).toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2));
    const pTags = new Set(p.tags);
    const k = productKey(p);
    const seen = new Set([k]);
    const scored = [];
    for (const q of allProducts) {
        if (!q.photo) continue;
        const qk = productKey(q);
        if (seen.has(qk)) continue;
        if (q.category !== p.category) continue;
        seen.add(qk);
        let score = 0;
        for (const w of cleanName(q.name).toLowerCase().split(/[^a-z0-9]+/)) if (words.has(w)) score++;
        for (const t of q.tags) if (pTags.has(t)) score += 2;
        scored.push({ q, score });
    }
    scored.sort((a, b) => b.score - a.score || (a.q.sourceOrder || 0) - (b.q.sourceOrder || 0));
    const list = scored.slice(0, 12).map(x => x.q);
    track.innerHTML = '';
    wrap.classList.toggle('hidden', list.length === 0);
    for (const q of list) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'similar-card';
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.referrerPolicy = 'no-referrer';
        img.alt = '';
        img.onerror = function() { this.onerror = null; this.style.visibility = 'hidden'; };
        img.src = photoUrl(q.photo, 300, 300);
        const nm = document.createElement('div');
        nm.className = 'similar-name';
        nm.textContent = cleanName((window.i18n && window.i18n.dyn(q.name)) || q.name);
        const pr = document.createElement('div');
        pr.className = 'similar-price';
        pr.textContent = q.price;
        btn.append(img, nm, pr);
        btn.addEventListener('click', () => openProductModal(q));
        track.appendChild(btn);
    }
    track.scrollLeft = 0;
}

const modalSaveBtn = document.getElementById('modal-save-btn');
if (modalSaveBtn) modalSaveBtn.addEventListener('click', () => {
    if (modalSaveBtn._product) toggleSaved(modalSaveBtn._product);
});

// =============================================================
// SHARED HELPERS — store links
// =============================================================
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

// =============================================================
// FETCH PRODUCTS
// =============================================================
// products.json → product objects the rest of the page uses:
//   { name, price, eurPrice, priceUsd, photo, link, category, tags,
//     tagMap, weidianId, sourceOrder }
function agentLink(itemId) {
    return BOONBUY_PRODUCT_BASE + itemId + '?inviteCode=' + INVITE_CODE;
}

function toProduct(raw, order) {
    const usd = raw.y * CNY_TO_USD;
    const tagMap = {};
    for (const t of raw.t || []) {
        const i = t.indexOf(':');
        const facet = t.slice(0, i), value = t.slice(i + 1);
        (tagMap[facet] || (tagMap[facet] = [])).push(value);
    }
    const p = {
        name: raw.n,
        price: '$' + usd.toFixed(2),
        eurPrice: '€' + (usd * USD_TO_EUR).toFixed(2),
        priceUsd: usd,
        photo: raw.i,
        link: agentLink(raw.id),
        category: raw.c,
        tags: raw.t || [],
        tagMap,
        weidianId: raw.id,
        sourceOrder: order,
    };
    return p;
}

async function fetchProducts() {
    errorEl.classList.add('hidden');
    noResultsEl.classList.add('hidden');
    loadingEl.classList.remove('hidden');
    allProducts = [];
    lastRenderKey = null;

    let data;
    try {
        // One retry: a dropped connection on a flaky mobile network
        // shouldn't leave the visitor on the error screen.
        const load = async () => {
            const resp = await fetch(PRODUCTS_URL);
            if (!resp.ok) throw new Error('HTTP ' + resp.status);
            return resp.json();
        };
        data = await load().catch(() => new Promise(r => setTimeout(r, 800)).then(load));
    } catch (err) {
        console.error('Product load failed', err);
        loadingEl.classList.add('hidden');
        errorEl.classList.remove('hidden');
        return;
    }

    allProducts = (data.items || []).map(toProduct);
    loadingEl.classList.add('hidden');
    buildFilterBar();
    syncCategoryLabel();
    renderProducts();
    if (window.i18n) window.i18n.translateDynamic();
}

// QC photos: one shared file, fetched the first time any product opens.
let qcPromise = null;
function loadQcPhotos() {
    if (!qcPromise) {
        qcPromise = fetch(QC_URL)
            .then(r => (r.ok ? r.json() : {}))
            .catch(() => ({}));
    }
    return qcPromise;
}

function stripEmoji(s) {
    return String(s).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}️‍]/gu, '').trim();
}

function translatePill(value) {
    const t = (k, fb) => (window.i18n && window.i18n.t(k)) || fb;
    if (value === 'all') return t('cat_all', 'All');
    if (value === SAVED_CATEGORY) return t('cat_saved', '♥ Saved');
    return catPillLabel(value);
}

// =============================================================
// FILTERS — style / pattern / colour / fit / season / price dropdowns
// =============================================================
// activeFilters: facet -> value ('' = any). Combined with the category,
// and the price sort; mirrored into the page URL so a filtered view can
// be shared or linked to (the home page collections link here this way).
const activeFilters = {};
const filterBarEl = document.getElementById('filter-bar');
const filterPanelEl = filterBarEl ? filterBarEl.closest('.filter-panel') : null;
const filterToggleEl = document.getElementById('filters-toggle');
const filterCountEl = document.getElementById('filters-count');
const filterClearAllEl = document.getElementById('filters-clear-all');
const activeFiltersEl = document.getElementById('active-filters');
const sortFieldEl = priceSortEl ? priceSortEl.closest('.filter-field') : null;

function uiText(key, fallback) {
    return (window.i18n && window.i18n.t(key)) || fallback;
}

function hasActiveFilters() {
    return Object.values(activeFilters).some(Boolean);
}

// True when a product type (category) is chosen, for the filter UI.
function hasActiveType() {
    return activeCategory !== 'all';
}

// Does p pass the chosen type and every active filter, ignoring `skip`
// ('type' or a facet key)? renderProducts uses it with no skip; the option
// counts skip their own dropdown so each number means "what you'd get if
// you picked this", given everything else already chosen.
function matchesFilters(p, skip) {
    if (skip !== 'type') {
        if (activeCategory === SAVED_CATEGORY) { if (!isSaved(p)) return false; }
        else if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    }
    for (const facet in activeFilters) {
        const value = activeFilters[facet];
        if (value && facet !== skip && !productFacetValues(p, facet).includes(value)) return false;
    }
    return true;
}

// One labelled dropdown: small caption above, select below.
function filterField(labelText, select, on) {
    const field = document.createElement('label');
    field.className = 'filter-field' + (on ? ' active' : '');
    const cap = document.createElement('span');
    cap.className = 'filter-label';
    cap.textContent = labelText;
    field.append(cap, select);
    return field;
}

function addOption(parent, value, text) {
    const o = document.createElement('option');
    o.value = value;
    o.textContent = text;
    parent.appendChild(o);
}

function buildFilterBar() {
    if (!filterBarEl) return;
    filterBarEl.innerHTML = '';
    const anyLabel = uiText('filter_any', 'All');

    const counts = {};
    const catCounts = {};
    for (const p of allProducts) {
        if (matchesFilters(p, 'type')) catCounts[p.category] = (catCounts[p.category] || 0) + 1;
        for (const f of FILTER_FACETS) {
            if (!matchesFilters(p, f)) continue;
            for (const v of productFacetValues(p, f)) counts[f + ':' + v] = (counts[f + ':' + v] || 0) + 1;
        }
    }

    // Product type (= category) comes first.
    const typeSel = document.createElement('select');
    const typeOn = hasActiveType();
    typeSel.className = 'filter-select filter-type';
    typeSel.dataset.facet = 'type';
    addOption(typeSel, '', anyLabel);
    // Saved items (hearted on this device) are a pseudo-type at the top.
    addOption(typeSel, SAVED_CATEGORY, uiText('cat_saved', '♥ Saved') + (savedKeys.size ? ' (' + savedKeys.size + ')' : ''));
    for (const group of CATEGORY_GROUPS) {
        const og = document.createElement('optgroup');
        og.label = uiText('grp_' + group, group);
        for (const [key, , g] of CATEGORY_DEFS) {
            if (g !== group) continue;
            const n = catCounts[key] || 0;
            if (!n && activeCategory !== key) continue;
            addOption(og, key, catName(key) + ' (' + n.toLocaleString() + ')');
        }
        if (og.children.length) typeSel.appendChild(og);
    }
    typeSel.value = typeOn ? activeCategory : '';
    typeSel.addEventListener('change', () => setCategory(typeSel.value || 'all'));
    filterBarEl.appendChild(filterField(TYPE_LABEL[langIdx()], typeSel, typeOn));

    for (const facet of FILTER_FACETS) {
        const sel = document.createElement('select');
        const on = !!activeFilters[facet];
        sel.className = 'filter-select';
        sel.dataset.facet = facet;
        addOption(sel, '', anyLabel);
        for (const [value] of FACET_BY_KEY.get(facet).values) {
            const n = counts[facet + ':' + value] || 0;
            // Hide choices that would give no results, but never the one
            // currently picked (it must stay visible to be undone).
            if (!n && activeFilters[facet] !== value) continue;
            addOption(sel, value, tagName(facet, value) + ' (' + n.toLocaleString() + ')');
        }
        sel.value = activeFilters[facet] || '';
        sel.addEventListener('change', () => setFilter(facet, sel.value));
        filterBarEl.appendChild(filterField(facetName(facet), sel, on));
    }
    // Sort sits at the end of the panel.
    if (sortFieldEl) {
        sortFieldEl.classList.toggle('active', priceSort !== 'default');
        filterBarEl.appendChild(sortFieldEl);
    }
    buildActiveChips();
    syncFilterToggle();
}

// "Style: Korean x" chips for everything applied, visible even while the
// phone panel is closed. Also covers facets with no dropdown (material,
// occasion...) that arrive from a shared link.
function buildActiveChips() {
    if (!activeFiltersEl) return;
    activeFiltersEl.innerHTML = '';
    const chip = (label, value, onRemove) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'filter-chip';
        const k = document.createElement('span');
        k.className = 'filter-chip-k';
        k.textContent = label + ':';
        const v = document.createElement('span');
        v.className = 'filter-chip-v';
        v.textContent = value;
        const x = document.createElement('span');
        x.className = 'filter-chip-x';
        x.setAttribute('aria-hidden', 'true');
        x.textContent = '×';
        b.append(k, v, x);
        b.addEventListener('click', onRemove);
        activeFiltersEl.appendChild(b);
    };
    if (hasActiveType()) chip(TYPE_LABEL[langIdx()], stripEmoji(translatePill(activeCategory)), () => setCategory('all'));
    for (const facet of Object.keys(activeFilters)) {
        const value = activeFilters[facet];
        if (value) chip(facetName(facet), tagName(facet, value), () => setFilter(facet, ''));
    }
    activeFiltersEl.classList.toggle('hidden', !activeFiltersEl.children.length);
}

function syncFilterToggle() {
    const n = Object.values(activeFilters).filter(Boolean).length + (hasActiveType() ? 1 : 0);
    if (filterCountEl) {
        filterCountEl.textContent = n;
        filterCountEl.classList.toggle('hidden', !n);
    }
    if (filterToggleEl) filterToggleEl.classList.toggle('active', n > 0);
    if (filterClearAllEl) filterClearAllEl.classList.toggle('hidden', !n);
}

function setFilter(facet, value) {
    activeFilters[facet] = value;
    buildFilterBar();
    syncUrl();
    renderProducts(true);
}

function clearFilters() {
    for (const k of Object.keys(activeFilters)) activeFilters[k] = '';
    if (hasActiveType()) { setCategory('all'); return; } // rebuilds and re-renders
    buildFilterBar();
    syncUrl();
    renderProducts(true);
}

// Keep ?cat= / facet params in the address bar without reloading.
function syncUrl() {
    try {
        const params = new URLSearchParams();
        if (activeCategory && activeCategory !== 'all') params.set('cat', activeCategory);
        for (const [f, v] of Object.entries(activeFilters)) if (v) params.set(f, v);
        const qs = params.toString();
        history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    } catch (e) {}
}

if (filterToggleEl && filterPanelEl) {
    filterToggleEl.addEventListener('click', () => {
        const open = filterPanelEl.classList.toggle('open');
        filterToggleEl.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
}
if (filterClearAllEl) filterClearAllEl.addEventListener('click', clearFilters);
const noResultsClearEl = document.getElementById('no-results-clear');
if (noResultsClearEl) noResultsClearEl.addEventListener('click', clearFilters);

// Called by i18n.apply() after a language switch: relabel everything this
// file builds from CATEGORY_DEFS / FACET_DEFS.
function onLanguageApplied() {
    if (categoryTabsEl && allProducts.length) {
        syncCategoryLabel();
    }
    if (filterBarEl && allProducts.length) {
        buildFilterBar();
        // Cards carry category and tag names: repaint them in the new language.
        lastRenderKey = null;
        renderProducts(true);
    }
    if (typeof buildHomeCollections === 'function') buildHomeCollections();
}

function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.category-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === cat);
    });
    syncCategoryLabel();
    closeCategoryMenu();
    buildFilterBar(); // keeps the Type dropdown in step with the menu
    syncUrl();
    renderProducts(true);
}

// The menu button doubles as the active-filter readout: "All Categories"
// while unfiltered, the category's own pill label otherwise.
function syncCategoryLabel() {
    if (!categoryMenuLabel) return;
    categoryMenuLabel.textContent = activeCategory === 'all'
        ? ((window.i18n && window.i18n.t('cat_menu')) || 'All Categories')
        : translatePill(activeCategory);
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
// it tracks the active type and filters.
function updateProductCount() {
    if (!productCountEl) return;
    const n = (activeCategory !== 'all' || hasActiveFilters()) ? currentFiltered.length : allProducts.length;
    if (!n) { productCountEl.textContent = ''; return; }
    const word = (window.i18n && window.i18n.t('count_products')) || 'products';
    productCountEl.textContent = n.toLocaleString() + ' ' + word;
}

if (priceSortEl) priceSortEl.addEventListener('change', (e) => {
    priceSort = e.target.value;
    if (sortFieldEl) sortFieldEl.classList.toggle('active', priceSort !== 'default');
    renderProducts(true);
});

// =============================================================
// RENDER
// =============================================================
function renderProducts(skipAnimation) {
    let filtered = allProducts;

    if (hasActiveType() || hasActiveFilters()) filtered = filtered.filter(p => matchesFilters(p));

    // Copy before sorting so allProducts keeps its original order.
    if (filtered === allProducts) filtered = filtered.slice();

    // Sort: photos first, then sourceOrder tiebreak (the sheet's own order).
    filtered.sort((a, b) => {
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
        const msg = noResultsEl.querySelector('p');
        if (msg) {
            const key = (activeCategory === SAVED_CATEGORY && !hasActiveFilters()) ? 'saved_empty' : 'no_results';
            msg.setAttribute('data-i18n', key);
            msg.textContent = (window.i18n && window.i18n.t(key)) || msg.textContent;
        }
        // Offer a way out when filters caused the empty page.
        if (noResultsClearEl) noResultsClearEl.classList.toggle('hidden', !(hasActiveFilters() || (hasActiveType() && activeCategory !== SAVED_CATEGORY)));
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
    // wave that only adds items below what's shown. Otherwise (filter /
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

// View signature — a change here (type, filters, price sort)
// means the displayed list is different and must be fully re-rendered.
function renderKey() {
    return [activeCategory, priceSort || '', JSON.stringify(activeFilters)].join('|');
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
    card.className = 'product-card';
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

    // Photo tile: image, optional quality tag (top-left), save heart (top-right).
    const media = document.createElement('div');
    media.className = 'card-media';
    media.appendChild(img);
    const save = document.createElement('button');
    save.type = 'button';
    const on = isSaved(p);
    save.className = 'card-save' + (on ? ' on' : '');
    save.setAttribute('aria-label', (window.i18n && window.i18n.t('save')) || 'Save');
    save.setAttribute('aria-pressed', on ? 'true' : 'false');
    save.innerHTML = HEART_SVG;
    media.appendChild(save);

    const info = document.createElement('div');
    info.className = 'product-info';

    const cat = cardCategory(p);
    if (cat) {
        const catDiv = document.createElement('div');
        catDiv.className = 'card-cat';
        catDiv.textContent = cat;
        info.appendChild(catDiv);
    }

    const nameDiv = document.createElement('div');
    nameDiv.className = 'product-name';
    const displayName = cleanName((window.i18n && window.i18n.dyn(p.name)) || p.name);
    nameDiv.textContent = displayName;
    info.appendChild(nameDiv);

    const tags = cardTags(p, 2);
    if (tags.length) {
        const tagDiv = document.createElement('div');
        tagDiv.className = 'card-tier';
        tagDiv.textContent = tags.join(' · ');
        info.appendChild(tagDiv);
    }

    const foot = document.createElement('div');
    foot.className = 'card-foot';
    const priceDiv = document.createElement('span');
    priceDiv.className = 'product-price';
    priceDiv.textContent = p.price;
    foot.appendChild(priceDiv);
    if (p.eurPrice) {
        const eur = document.createElement('span');
        eur.className = 'card-eur';
        eur.textContent = p.eurPrice;
        foot.appendChild(eur);
    }
    const view = document.createElement('span');
    view.className = 'card-view';
    view.textContent = ((window.i18n && window.i18n.t('view')) || 'View') + ' →';
    foot.appendChild(view);
    info.appendChild(foot);

    card.appendChild(media);
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
const header = document.querySelector('header');
const headerBanner = document.querySelector('.header-banner');

// The sticky header only contains the page nav and language menu. It should
// only hide once the user has scrolled past the (non-sticky) banner —
// otherwise the bar appears to jump while the banner is still on-screen.
function getStickyThreshold() {
    return (headerBanner ? headerBanner.offsetHeight : 0) + 20;
}

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
// QC PHOTO VIEWER — full-size QC photos on top of the product popup
// =============================================================
// Arrows / swipe move between photos; Escape, the × or a click on the dark
// background closes it and returns to the product.
let qcViewerEl = null;
let qcViewerList = [];
let qcViewerIdx = 0;

// Large version of a QC photo: resized (not cropped) through the same proxy
// the thumbnails use; falls back to the original file if the proxy fails.
function qcLargeUrl(src) {
    if (!/^https?:\/\//i.test(src) || /(^|\.)googleusercontent\.com\//.test(src)) return src;
    return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=1400&h=1400&fit=inside&we`;
}

function buildQcViewer() {
    const el = document.createElement('div');
    el.className = 'qc-viewer hidden';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', (window.i18n && window.i18n.t('qc_photos')) || 'QC Photos');
    el.innerHTML =
        '<button type="button" class="qc-viewer-close" aria-label="Close">&times;</button>' +
        '<button type="button" class="qc-viewer-nav qc-viewer-prev" aria-label="Previous photo">' +
            '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg></button>' +
        '<div class="qc-viewer-stage"><div class="spinner"></div><img class="qc-viewer-img" alt="" referrerpolicy="no-referrer"></div>' +
        '<button type="button" class="qc-viewer-nav qc-viewer-next" aria-label="Next photo">' +
            '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></button>' +
        '<div class="qc-viewer-count"></div>';
    document.body.appendChild(el);

    const img = el.querySelector('.qc-viewer-img');
    img.addEventListener('load', () => el.classList.remove('loading'));
    img.addEventListener('error', () => {
        const orig = qcViewerList[qcViewerIdx];
        if (orig && img.src !== orig) img.src = orig; // proxy failed: try the original
        else el.classList.remove('loading');
    });
    el.querySelector('.qc-viewer-close').addEventListener('click', closeQcViewer);
    el.querySelector('.qc-viewer-prev').addEventListener('click', (e) => { e.stopPropagation(); showQcPhoto(qcViewerIdx - 1); });
    el.querySelector('.qc-viewer-next').addEventListener('click', (e) => { e.stopPropagation(); showQcPhoto(qcViewerIdx + 1); });
    // Click on the dark area (not the photo or buttons) closes.
    el.addEventListener('click', (e) => {
        if (e.target === el || e.target.classList.contains('qc-viewer-stage')) closeQcViewer();
    });
    // Swipe left / right on phones.
    let x0 = null, y0 = null;
    el.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
        x0 = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showQcPhoto(qcViewerIdx + (dx < 0 ? 1 : -1));
    });
    document.addEventListener('keydown', (e) => {
        if (el.classList.contains('hidden')) return;
        if (e.key === 'Escape') { e.stopPropagation(); closeQcViewer(); }
        else if (e.key === 'ArrowLeft') showQcPhoto(qcViewerIdx - 1);
        else if (e.key === 'ArrowRight') showQcPhoto(qcViewerIdx + 1);
    }, true);
    return el;
}

function showQcPhoto(i) {
    const n = qcViewerList.length;
    if (!n) return;
    qcViewerIdx = (i + n) % n;
    const el = qcViewerEl;
    const img = el.querySelector('.qc-viewer-img');
    const url = qcLargeUrl(qcViewerList[qcViewerIdx]);
    if (img.getAttribute('src') !== url) {
        el.classList.add('loading');
        img.src = url;
    }
    el.querySelector('.qc-viewer-count').textContent = (qcViewerIdx + 1) + ' / ' + n;
    el.classList.toggle('single', n < 2);
    // Warm up the neighbours so arrowing through feels instant.
    for (const d of [1, -1]) {
        if (n > 1) { const pre = new Image(); pre.referrerPolicy = 'no-referrer'; pre.src = qcLargeUrl(qcViewerList[(qcViewerIdx + d + n) % n]); }
    }
}

function openQcViewer(list, idx) {
    if (!list || !list.length) return;
    if (!qcViewerEl) qcViewerEl = buildQcViewer();
    qcViewerList = list;
    qcViewerEl.classList.remove('hidden');
    showQcPhoto(Math.max(0, idx));
    qcViewerEl.querySelector('.qc-viewer-close').focus({ preventScroll: true });
}

function closeQcViewer() {
    if (qcViewerEl) qcViewerEl.classList.add('hidden');
}

// =============================================================
// PRODUCT MODAL CLOSE
// =============================================================
function closeProductModal() {
    closeQcViewer();
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
    root.classList.add('showcase-empty');
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
// ?cat=<category key> and one param per facet (?style=korean) come from
// the home page collections or a shared link: start with them applied.
if (gridEl) {
    try {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('cat');
        if (cat && (cat === SAVED_CATEGORY || CATEGORY_BY_KEY.has(cat))) activeCategory = cat;
        for (const [facet, def] of FACET_BY_KEY) {
            const v = params.get(facet);
            if (v && def.valueMap.has(v)) activeFilters[facet] = v;
        }
    } catch (e) {}
}

// Home page: "Shop by style" collections in the hero, each a
// link to the Products page with one filter applied. Rebuilt on language
// change (see onLanguageApplied).
const homeChipsEl = document.getElementById('home-chips');
function buildHomeCollections() {
    if (!homeChipsEl) return;
    homeChipsEl.innerHTML = '';
    for (const [facet, value] of HOME_COLLECTIONS) {
        const a = document.createElement('a');
        a.className = 'home-chip';
        a.href = 'index.html?' + facet + '=' + encodeURIComponent(value);
        a.textContent = tagName(facet, value);
        homeChipsEl.appendChild(a);
    }
    const saved = document.createElement('a');
    saved.className = 'home-chip home-chip-saved';
    saved.href = 'index.html?cat=' + SAVED_CATEGORY;
    saved.textContent = (window.i18n && window.i18n.t('cat_saved')) || '♥ Saved';
    homeChipsEl.appendChild(saved);
}
buildHomeCollections();

// Only bootstrap the catalog on the product page (where the grid exists).
// On the home page app.js loads solely for i18n / language switching.
if (gridEl) {
    fetchProducts();
}

// =============================================================
// PROMOS: BoonBuy sign-up bar + Discord welcome pop-up
// =============================================================
// Both are remembered per browser, so a visitor who closes one doesn't see
// it again for a few days. The Discord pop-up comes first; the agent bar
// slides in under the top bar a few seconds after that is out of the way.
(function promos() {
    const DISCORD_URL = 'https://discord.gg/k7ySvBZnFM';
    const REGISTER_URL = 'https://boonbuy.com/register?inviteCode=STEPAGENT';
    const DAY = 86400000;
    const DC_KEY = 'promo-discord-closed', AGENT_KEY = 'promo-agent-closed';
    const DC_SNOOZE = 7 * DAY, AGENT_SNOOZE = 3 * DAY;
    const DISCORD_PATH = 'M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z';

    function recentlyClosed(key, ms) {
        try { const t = +localStorage.getItem(key); return t && Date.now() - t < ms; } catch (e) { return false; }
    }
    function remember(key) { try { localStorage.setItem(key, String(Date.now())); } catch (e) {} }
    function translate() { if (window.i18n) window.i18n.apply(); }
    function inAppOverlayOpen() {
        const o = document.getElementById('inapp-overlay');
        return o && !o.classList.contains('hidden');
    }
    function reveal(el) { requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show'))); }

    function showAgentBar() {
        if (recentlyClosed(AGENT_KEY, AGENT_SNOOZE)) return;
        const header = document.querySelector('header.topbar');
        if (!header || document.getElementById('agent-bar')) return;
        const bar = document.createElement('div');
        bar.id = 'agent-bar';
        bar.className = 'agent-bar';
        bar.innerHTML =
            '<img src="boonbuy-logo.png" alt="" class="agent-bar-logo">' +
            '<div class="agent-bar-text">' +
                '<strong data-i18n="promo_agent_title">BoonBuy – a reliable, fast agent to ship from China</strong>' +
                '<span data-i18n="promo_agent_sub">Sign up with code STEPAGENT and get a 40% off shipping coupon</span>' +
            '</div>' +
            '<a class="agent-bar-btn" href="' + REGISTER_URL + '" target="_blank" rel="noopener noreferrer" data-i18n="promo_register">Register</a>' +
            '<button type="button" class="agent-bar-close" data-i18n-attr="aria-label:close" aria-label="Close">&times;</button>';
        header.appendChild(bar);
        translate();
        reveal(bar);
        const close = () => {
            remember(AGENT_KEY);
            bar.classList.remove('show');
            setTimeout(() => bar.remove(), 350);
        };
        bar.querySelector('.agent-bar-close').addEventListener('click', close);
        bar.querySelector('.agent-bar-btn').addEventListener('click', () => remember(AGENT_KEY));
    }

    function showDiscordPopup(onDone) {
        const wrap = document.createElement('div');
        wrap.className = 'dc-popup';
        wrap.setAttribute('role', 'dialog');
        wrap.setAttribute('aria-modal', 'true');
        wrap.setAttribute('aria-labelledby', 'dc-popup-title');
        wrap.innerHTML =
            '<div class="dc-popup-backdrop"></div>' +
            '<div class="dc-popup-card">' +
                '<button type="button" class="dc-popup-x" data-i18n-attr="aria-label:close" aria-label="Close">&times;</button>' +
                '<div class="dc-popup-icon"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path fill="currentColor" d="' + DISCORD_PATH + '"/></svg></div>' +
                '<h2 id="dc-popup-title" data-i18n="dc_title">Join our Discord</h2>' +
                '<p data-i18n="dc_body">New finds every day, QC checks, and help with your orders, 24/7.</p>' +
                '<a class="dc-popup-join" href="' + DISCORD_URL + '" target="_blank" rel="noopener noreferrer" data-i18n="dc_join">Join the Discord</a>' +
                '<button type="button" class="dc-popup-later" data-i18n="dc_later">Maybe later</button>' +
            '</div>';
        document.body.appendChild(wrap);
        translate();
        reveal(wrap);
        let done = false;
        const onKey = e => { if (e.key === 'Escape') close(); };
        function close() {
            if (done) return;
            done = true;
            remember(DC_KEY);
            wrap.classList.remove('show');
            document.removeEventListener('keydown', onKey);
            setTimeout(() => { wrap.remove(); if (onDone) onDone(); }, 300);
        }
        document.addEventListener('keydown', onKey);
        ['.dc-popup-backdrop', '.dc-popup-x', '.dc-popup-later', '.dc-popup-join']
            .forEach(sel => wrap.querySelector(sel).addEventListener('click', close));
    }

    function start() {
        if (inAppOverlayOpen()) {
            // Wait until the "open in browser" notice is dismissed.
            const ok = document.getElementById('inapp-ok');
            if (ok) ok.addEventListener('click', () => setTimeout(start, 800), { once: true });
            return;
        }
        if (!recentlyClosed(DC_KEY, DC_SNOOZE)) {
            setTimeout(() => showDiscordPopup(() => setTimeout(showAgentBar, 4000)), 2500);
        } else {
            setTimeout(showAgentBar, 4000);
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
