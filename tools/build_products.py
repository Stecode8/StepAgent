"""Build the site's product files from a channel product export.

Usage (from the project folder):
    python tools/build_products.py <export.json>

Input: a JSON array of {id, image, title, price (yuan), link, qcImages}.
Output, next to index.html:
    products.json     the catalogue the Products page loads
    products-qc.json  QC photos per item id, loaded only when a product opens

Categories and tags come from the title rules in categorise.py. The keys
written here (category and tag ids) must match CATEGORY_DEFS / TAG_DEFS
in app.js, which hold the emoji, display order and translations.
"""
import json, os, re, sys, datetime, collections

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from categorise import categorise, tag  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# categorise.py label -> site category key. Tiny groups are folded into a
# neighbour so the menu doesn't fill with near-empty pills.
CATEGORY_KEYS = {
    '👕 T-shirts & Tops': 'tops', '👔 Shirts': 'tops',
    '🧥 Hoodies & Sweatshirts': 'hoodies', '🧶 Sweaters & Knitwear': 'sweaters',
    '🦺 Jackets & Coats': 'jackets', '🏃 Sets & Tracksuits': 'sets',
    '👖 Jeans': 'jeans', '👖 Pants': 'pants', '🩳 Shorts': 'shorts',
    '👗 Dresses & Skirts': 'dresses', '🩱 Bodysuits & Swim': 'bodysuits',
    '⚽ Jerseys': 'jerseys', '🩲 Underwear & Sleepwear': 'underwear',
    '👟 Shoes': 'shoes', '🧦 Socks': 'socks', '🧢 Hats & Caps': 'hats',
    '👜 Bags': 'bags', '💍 Jewelry': 'jewelry', '⌚ Watches': 'watches',
    '🕶️ Glasses': 'glasses', '🪢 Belts & Ties': 'belts',
    '🧣 Scarves & Gloves': 'scarves', '🎃 Halloween & Party': 'halloween',
    '🐾 Pets': 'pets', '🎧 Electronics': 'electronics',
    '🏠 Home & Lifestyle': 'home', '💄 Beauty & Care': 'home',
    '🧸 Toys & Plush': 'toys', '📦 Other': 'other',
}


def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def main(src):
    data = json.load(open(src, encoding='utf-8'))
    items, qc, seen = [], {}, set()
    for p in data:
        pid = str(p.get('id') or '').strip()
        title = re.sub(r'\s+', ' ', str(p.get('title') or '')).strip()
        try:
            yuan = round(float(p.get('price')), 2)
        except (TypeError, ValueError):
            continue
        if not pid or pid in seen or not title or not p.get('image') or yuan <= 0:
            continue
        seen.add(pid)
        label = categorise(title)
        tags = []
        for facet, values in tag(title).items():
            tags += [f'{facet}:{slug(v)}' for v in values]
        items.append({'id': pid, 'n': title, 'y': yuan,
                      'c': CATEGORY_KEYS[label], 't': tags, 'i': p['image']})
        if p.get('qcImages'):
            qc[pid] = p['qcImages']

    out = {'generated': datetime.date.today().isoformat(), 'items': items}
    with open(os.path.join(ROOT, 'products.json'), 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, separators=(',', ':'))
    with open(os.path.join(ROOT, 'products-qc.json'), 'w', encoding='utf-8') as f:
        json.dump(qc, f, ensure_ascii=False, separators=(',', ':'))

    print(f'{len(items)} products written ({len(data) - len(items)} skipped)')
    for k, v in collections.Counter(i['c'] for i in items).most_common():
        print(f'  {v:5}  {k}')
    tc = collections.Counter(t for i in items for t in i['t'])
    print('tag keys:', ' '.join(sorted(tc)))


if __name__ == '__main__':
    main(sys.argv[1])
