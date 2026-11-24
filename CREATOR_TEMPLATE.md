# Creator BoonBuy Affiliate Page — Template Brief

This file is meta-instructions for Claude. If you (Claude) are reading
this in a fresh project copy, read it before touching any code.

---

## What this project is

A static affiliate site for a content creator. The product catalogue
ships with the site as `products.json` (built from a channel product
export), is shown in a filterable grid, and routes "Buy" clicks through
the creator's BoonBuy affiliate code. Pure HTML / CSS / vanilla JS — no
build step, no backend. Hosted on GitHub Pages (or any static host).

Three files do all the work:

- `index.html` — page scaffold and inline in-app-browser detection
- `style.css` — all styles
- `app.js` — i18n, product loading, categories & filters, search, render, modal
- `products.json` / `products-qc.json` — the catalogue and its QC photos
- `tools/` — scripts that build the product files and home page picks

---

## Before you edit anything in a fresh copy — ASK THE USER

Five things are intentionally creator-specific. Do **not** guess or
copy values from another creator's instance. Ask the user for each
one in a single batch before making changes:

### 1. Default language

Which of `en | fr | de | es | it` should be the default when a visitor
has no stored preference and their browser language isn't one of the
five? Update **both** of these in `app.js`:

- The initial `let currentLang = '...'` constant inside `window.i18n`
- The fallback `return SUPPORTED.includes(browser) ? browser : '...'`
  inside `detectLang()`

(The language picker itself always shows all five — the picker order
in `index.html` can be reordered to put the default first, but doing
so is cosmetic.)

### 2. BoonBuy affiliate invite code

The code that goes in `?inviteCode=XXX`. Used in **two** places — both
must match:

- `index.html` — the signup CTA `href` on `.agent-banner`
- `app.js` — the `INVITE_CODE` constant in `CONFIG`, which every Buy
  link is re-stamped with by `toAgentLink()`

### 3. Social links (or none)

Which of YouTube, Discord, Telegram does this creator want? Different
creators will want different subsets. For each:

- **Keeping it:** swap the URL in the `<a href="...">` inside
  `.social-stack` in `index.html`.
- **Dropping it:** remove the whole `<a class="social-link ...">`
  block from `index.html` **and** remove its key from every language
  block in the `TRANSLATIONS` object in `app.js`. Don't leave dead
  translations.
- **Adding a new social** (Instagram, TikTok, X, etc.): copy one of
  the existing social-link blocks as a pattern, add a matching
  `.<platform>-link` rule in `style.css` for the brand color, add a
  translation key in all five language blocks.

### 4. Product catalogue

Products come from a channel export: a JSON array of
`{id, image, title, price (yuan), link, qcImages}` with Weidian item ids.
Products have no brand names, so they are made findable by **category**
and **tags** (style, pattern, colour, material, fit, season, gender,
occasion) derived from the title by `tools/categorise.py`.

To load a new export (from the project folder):

    python tools/build_products.py <export.json>   # writes products.json + products-qc.json
    python tools/build_home.py                     # re-picks home Featured Items + product wall

Then bump the `?v=` on `PRODUCTS_URL` / `QC_URL` in `app.js` so browsers
fetch the new files. Category keys and tag keys written by the build must
exist in `CATEGORY_DEFS` / `FACET_DEFS` in `app.js`, which hold the emoji,
menu order, filter dropdowns and the label in all five languages. To add
a category or tag: add its rule in `categorise.py`, its key mapping in
`build_products.py` (categories only), and its labels in `app.js`.

### 5. Creator brand

- Brand name (goes in `<title>`, `<h1 class="logo">`, and may appear
  in translation strings like "Welcome to my spreadsheet!").
- Logo PNG to swap in for `litbuy-logo.png` references? (The
  `boonbuy-logo.png` on the signup button and the Buy button stays as
  is — that's the partner brand, not the creator.)

---

## Architecture decisions to preserve

These are intentional. Don't refactor them away without checking with
the user.

### Header split: banner (non-sticky) + controls (sticky)

The header has **two** parts in `index.html`:

- `.header-banner` — logo, language picker, intro text, BoonBuy signup
  CTA, social stack. **Non-sticky.** It scrolls away with the page
  and only comes back when the user scrolls all the way to the top.
- `<header>` — search bar, price-sort dropdown, category tabs.
  **Sticky.** Slides up on scroll-down, slides back on scroll-up.

The scroll JS measures `.header-banner` height dynamically via
`getStickyThreshold()`. If you add or remove content in the banner,
the threshold updates by itself — keep it that way. Putting an
element in `<header>` means it WILL reappear mid-scroll, which is
loud; default to `.header-banner` for new non-control elements.

### i18n

All UI strings live in the `TRANSLATIONS` object at the top of
`app.js`, keyed by language code. DOM nodes pick them up via:

- `data-i18n="key"` — replaces text content
- `data-i18n-attr="placeholder:key"` — sets an attribute
- `data-i18n-html="key"` — uses `innerHTML` (HTML-safe strings only)

Every key must exist in all five language blocks. Don't ship a key
that's missing in some languages — the UI will fall back to English
silently and you won't notice the gap.

Category and tag names are translated statically in `CATEGORY_DEFS` /
`FACET_DEFS`. Product titles go through `translateMany()` (machine
translation), cached in localStorage per language under `i18n-dyn-<lang>`.

### Mobile keyboard sticky-header pin

When the search input is focused, the sticky header is force-shown
(`header-hidden` is cleared on focus, locked off until blur). Mobile
keyboards shrink the viewport and auto-scroll the focused input,
which would otherwise yank the sticky header off-screen and break
the search UX. Don't remove the focus/blur handlers.

### In-app browser overlay

Instagram, Facebook, TikTok, etc. embed an in-app webview that breaks
OAuth, blocks some embeds, and generally misbehaves. The inline
script at the top of `<body>` detects those UAs and shows the
"Open in Browser" overlay. Keep it; don't try to be clever about
which browsers to allow.

### Scroll hysteresis

`SCROLL_DELTA = 8` in the scroll handler prevents micro-scroll
flicker (especially on iOS rubber-banding) from flipping the header
between hidden/shown. Don't lower it.

### Infinite scroll

The grid lazy-loads more cards when the user nears the bottom of the
page. Don't replace this with pagination without asking — the UX
intent is "scroll forever, glance and tap."

### Invite-code rewriting on product Buy links

Two functions in `app.js` rewrite product URLs to inject the
creator's `inviteCode`. They handle both URLs that already have the
param (replace) and URLs that don't (append, picking `?` or `&`
correctly). When changing the invite code, change **both** call
sites.

---

## File-by-file what you usually edit

- **Adding a category:** see "Product catalogue" above.
- **Home page style collections:** `HOME_COLLECTIONS` in `app.js`
  (each is a `[facet, value]` pair linking to `index.html?facet=value`).
- **Restyling a section:** all classes are in `style.css`. CSS
  variables at the top of the file (`:root` block) drive colors and
  radii — prefer editing those over hard-coding values.
- **Adding a UI string:** add the key to all five language blocks in
  `app.js`, then add `data-i18n="key"` in HTML.

---

## What an existing filled instance looks like

If the placeholders above all appear to be filled with real values
(a real products.json, real social URLs, a real invite code), this is an
already-instantiated creator site, not a fresh template. Don't
re-ask the setup questions; treat the existing values as the
creator's chosen values and edit normally.

A sign you're in a fresh / re-templated copy: invite code, social
URLs, or the product files are blank, obviously placeholder
(`YOUR_CODE_HERE`, `https://discord.gg/`, etc.), or the user
explicitly says "set this up for a new creator."
