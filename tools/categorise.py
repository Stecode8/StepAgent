"""Categorise and tag the channel-763 products from their titles.

Usage: python -I categorise.py <input.json> <output.json>
Reads the input, never modifies it. Writes each product with added
`category`, `tags` (dict of facet -> list) and `priceUsd` fields.
"""
import json, re, sys, collections

CNY_TO_USD = 0.163  # same rate the site uses (app.js)

def rx(*words):
    return re.compile(r'\b(?:' + '|'.join(words) + r')', re.I)

# Ordered: first match wins. Garment rules come before hats/Halloween
# because Chinese "帽" (hood) is often machine-translated as "hat",
# e.g. "hat coat" = hooded coat, and Halloween items may be real clothes.
CATEGORIES = [
    # "喇叭裤" (flared trousers) is machine-translated as "microphone": a
    # "microphone" with trouser words or a fashion-style prefix is trousers.
    ('👖 Pants',           rx(r'microphone\b(?=.*(?:trousers|pants))', r'body microphone', r'(?:american|high street|street|fashion)\b.*\bmicrophone$')),
    # Costumes first: "Evil Clown Suit" is a costume, not a suit jacket.
    ('🎃 Halloween & Party', rx(r'costume', r'cosplay', r'clown\b', r'zombie', r'vampire', r'witch (?:hat|dress|costume)', r'(?:horror|halloween) masks?')),
    ('🐾 Pets',            rx(r'pets?\b', r'(?:small|large|medium) dogs?', r'dogs? (?:shoes|clothes|coat|toys?|leash|bowl|bed|harness|raincoat|collar|socks?|supplies|sweater)', r'for dogs?', r'puppy', r'cat (?:toy|litter|mint|scratch|bed|bowl)', r'cats?\b(?=.*(?:toy|supplies|bed|bowl))', r'kitten', r'leash', r'collar for')),
    ('🎧 Electronics',     rx(r'bluetooth', r'wireless', r'charg', r'power bank', r'headset', r'headphone', r'earphone', r'earbud', r'speaker', r'keyboard', r'mouse\b', r'usb', r'phone', r'tablet', r'smart\b', r'electric', r'\bled\b', r'camera', r'projector', r'game ?pad', r'controller', r'cable', r'adapter', r'fan\b', r'console', r'microphone', r'computer', r'screen', r'laptop', r'protective shell', r'phone case', r'iphone', r'game handle', r'converter', r'vacuum', r'stereo', r'recorder', r'player\b', r'mosquito', r'night light', r'induction light', r'radio', r'airpods', r'humidifier', r'kettle')),
    ('⌚ Watches',         rx(r'watch(?:es)?\b')),
    ('💍 Jewelry',         rx(r'necklace', r'bracelet', r'earring', r'ear ?stud', r'\brings?\b', r'pendant', r'anklet', r'brooch', r'jewel', r'bangle', r'chain\b(?!.*(?:bag|pants|jeans|shorts|jacket))', r'hair ?(?:clip|pin|band|tie)', r'hairpin', r'tiara', r'grillz', r'ear cuff', r'cufflinks?')),
    ('🕶️ Glasses',         rx(r'sunglass', r'glasses', r'eyewear', r'goggles')),
    ('👜 Bags',            rx(r'bags?\b', r'backpack', r'wallet', r'purse', r'tote', r'handbag', r'crossbody', r'card holder', r'pouch', r'suitcase', r'luggage', r'satchel', r'fanny pack', r'waist pack')),
    ('👟 Shoes',           rx(r'shoes?\b', r'sneakers?', r'boots?\b', r'slippers?', r'sandals?', r'loafers?', r'trainers?', r'heels?\b(?!.*sock)', r'clogs?', r'flip.?flops?', r'slides\b', r'mules?\b', r'footwear')),
    ('🧦 Socks',           rx(r'socks?\b', r'stockings?', r'tights\b', r'leg warmers?')),
    ('🩲 Underwear & Sleepwear', rx(r'underwear', r'briefs?\b', r'boxers?\b', r'\bbra\b', r'bras\b', r'lingerie', r'pyjamas?', r'pajamas?', r'sleepwear', r'nightgown', r'homewear', r'loungewear', r'thong', r'panties')),
    ('👗 Dresses & Skirts', rx(r'dress(?!ing| up)', r'skirts?', r'gown')),
    ('🩱 Bodysuits & Swim', rx(r'bodysuit', r'swim', r'bikini', r'jumpsuit', r'romper', r'overalls?')),
    ('🏃 Sets & Tracksuits', rx(r'sweat ?suit', r'sports suit', r'two.?piece', r'three.?piece', r'\bsets?\b(?!.*(?:toy|doll|sticker))', r'tracksuit', r'2.?piece', r'co-?ord', r'pieces? suit')),
    ('🦺 Jackets & Coats', rx(r'jackets?', r'coats?\b', r'parka', r'puffer', r'windbreaker', r'blazer', r'down (?:jacket|coat|vest)', r'gilet', r'vests?\b', r'waistcoat', r'cardigan', r'cotton.?padded', r'cotton suit', r'outerwear', r'bomber', r'varsity', r'trench', r'hat suit', r'shacket', r'anorak', r'robes?\b', r'(?:double|single).?breasted', r'suits?\b(?!.*(?:pants|trousers|shorts))', r'kimono', r'fleece(?! (?:pants|trousers))')),
    ('🧥 Hoodies & Sweatshirts', rx(r'hood(?:ie|ed|y)?\b', r'sweatshirt', r'hat sweater', r'zip.?up', r'crewneck sweat', r'pullover(?!.*knit)')),
    ('🧶 Sweaters & Knitwear', rx(r'sweaters?', r'knit(?:ted|wear)?\b(?!.*(?:hat|cap|beanie|scarf|gloves?|socks?))', r'jumper', r'turtleneck', r'wool(?:len)? (?:top|pullover)')),
    ('👖 Jeans',           rx(r'jeans', r'denim (?:pants|trousers|shorts)?(?=.*(?:pants|trousers))')),
    ('🩳 Shorts',          rx(r'shorts\b', r'five.?pocket (?:pants)?', r'(?:three|five|seven).?(?:quarter|point) pants', r'capri')),
    ('👖 Pants',           rx(r'pants', r'trousers', r'joggers?', r'sweatpants', r'leggings', r'cargo(?!.*(?:shorts))', r'flares?\b', r'seven.?pocket', r'nine.?pocket')),
    ('👔 Shirts',          rx(r'shirts?\b(?<!t-shirt)(?<!t shirt)(?<!sweatshirt)(?=.*(?:button|collar|lapel|plaid|check|cuban|flannel|oxford|business|turn.?down|denim|silk|satin|linen|hawaiian|bowling|long sleeve))', r'blouse', r'flannel', r'button.?(?:up|down)')),
    ('⚽ Jerseys',         rx(r'jersey', r'football', r'soccer', r'basketball (?:top|shirt|uniform)', r'hockey')),
    ('👕 T-shirts & Tops', rx(r't-?shirts?', r'\btees?\b', r'polo', r'short.?sleeved?', r'long.?sleeved?', r'tank', r'vest top', r'camisole', r'\bcami\b', r'crop top', r'\btops?\b', r'sleeveless', r'halter', r'shirts?\b', r'raglan', r'baby tee', r'half sleeve', r'square neck', r'v.?neck', r'off.?shoulder', r'asymmetrical shoulder', r'one.?shoulder', r'crew neck', r'round neck')),
    ('🧢 Hats & Caps',     rx(r'hats?\b', r'caps?\b', r'beanies?', r'beret', r'bucket', r'balaclava', r'headband', r'headwear', r'visor', r'earmuff')),
    ('🧣 Scarves & Gloves', rx(r'scarf', r'scarves', r'gloves?', r'mittens?', r'shawl', r'bandana', r'neck (?:warmer|gaiter)')),
    ('🪢 Belts & Ties',    rx(r'belts?\b', r'\bties\b', r'necktie', r'bow tie', r'suspenders?', r'waistband', r'belt buckle')),
    ('🎃 Halloween & Party', rx(r'halloween', r'costume', r'cosplay', r'masks?\b', r'witch', r'pumpkin', r'zombie', r'vampire', r'ghost', r'christmas', r'party', r'wig')),
    ('🧸 Toys & Plush',    rx(r'plush', r'toys?\b', r'doll', r'figure', r'figurine', r'lego', r'blocks?\b', r'puzzle', r'stuffed', r'squishy', r'fidget', r'teddy', r'model kit', r'blind box', r'bricks', r'gift box for children')),
    ('💄 Beauty & Care',   rx(r'perfume', r'fragrance', r'cologne', r'makeup', r'lipstick', r'lip ', r'cream', r'lotion', r'skincare', r'nail', r'toothbrush', r'shampoo', r'razor', r'comb\b', r'mirror', r'cosmetic', r'diffuser', r'mascara', r'eyeliner', r'serum', r'soap')),
    ('🏠 Home & Lifestyle', rx(r'bookcase', r'pencil', r'leaflet', r'\bbooks?\b', r'mold\b', r'blackboard',r'decorat', r'ornament', r'lamp', r'pillow', r'cushion', r'blanket', r'towel', r'\bcups?\b', r'\bmugs?\b', r'bottle', r'sticker', r'poster', r'rug', r'carpet', r'curtain', r'storage', r'organi[sz]er', r'kitchen', r'candle', r'vase', r'clock', r'frame', r'tray', r'hanger', r'keychain', r'key ?ring', r'pad\b', r'\bmat\b', r'umbrella', r'stationery', r'\bpens?\b', r'notebook', r'tissue', r'car (?:accessor|decor|seat|mount)', r'trinket', r'hanging')),
]

FACETS = {
    'style': [
        ('American / Streetwear', rx(r'american', r'high street', r'street(?:wear)?', r'urban')),
        ('Vintage / Retro',       rx(r'vintage', r'retro', r'make old', r'made old', r'do old', r'washed', r'water wash', r'distressed', r'old school')),
        ('Korean',                rx(r'korean')),
        ('Japanese',              rx(r'japanese', r'harajuku', r'yamamoto')),
        ('Y2K / Hot girl',        rx(r'hottie', r'y2k', r'millennium', r'spicy girl', r'sexy', r'bodycon', r'crop')),
        ('Gothic / Punk',         rx(r'gothic', r'goth\b', r'punk', r'skull', r'dark', r'rivet', r'spike', r'subculture', r'grunge', r'cross\b', r'chrome', r'emo')),
        ('Old Money / Smart',     rx(r'old money', r'business', r'light luxury', r'luxury', r'gentleman', r'elegant', r'premium', r'cashmere')),
        ('Hip-hop',               rx(r'hip.?hop', r'rap\b', r'graffiti', r'baggy', r'oversized?')),
        ('Workwear / Outdoor',    rx(r'workwear', r'cargo', r'tactical', r'outdoor', r'mountain', r'hiking', r'military', r'windproof', r'waterproof', r'gorpcore')),
        ('Sporty',                rx(r'sports?\b', r'athletic', r'running', r'fitness', r'gym', r'yoga', r'basketball', r'quick.?dry', r'training')),
        ('Preppy / College',      rx(r'college', r'preppy', r'academy', r'varsity', r'baseball')),
        ('Minimalist / Basic',    rx(r'minimalist', r'basic', r'plain', r'pure colou?r', r'solid colou?r', r'simple')),
        ('Cute',                  rx(r'cute', r'cartoon', r'sweet', r'kawaii', r'bear', r'bunny', r'lazy cat')),
    ],
    'pattern': [
        ('Striped',     rx(r'strip(?:e|ed)')),
        ('Floral',      rx(r'floral', r'flowers?')),
        ('Leopard',     rx(r'leopard', r'cheetah', r'animal print')),
        ('Camo',        rx(r'camo')),
        ('Skull',       rx(r'skull')),
        ('Stars',       rx(r'\bstars?\b', r'five.?pointed', r'pentagram')),
        ('Letters / Logo', rx(r'letter', r'lettering', r'english', r'slogan', r'logo')),
        ('Graffiti',    rx(r'graffiti')),
        ('Plaid / Check', rx(r'plaid', r'check(?:ed|ered)?\b', r'tartan', r'houndstooth')),
        ('Polka dot',   rx(r'dots?\b', r'polka')),
        ('Colour block', rx(r'colou?r.?block', r'contrast(?:ing)? colou?r', r'patchwork', r'splic')),
        ('Gradient / Tie-dye', rx(r'gradient', r'tie.?dye', r'ombre')),
        ('Embroidered', rx(r'embroider')),
        ('Graphic print', rx(r'print(?:ed)?\b', r'graphic')),
    ],
    'colour': [
        ('Black', rx(r'black', r'dark black')), ('White', rx(r'white', r'cream')), ('Grey', rx(r'gr[ae]y')),
        ('Blue', rx(r'blue', r'navy', r'denim')), ('Red', rx(r'\bred\b', r'burgundy', r'wine')),
        ('Pink', rx(r'pink')), ('Green', rx(r'green', r'olive', r'khaki')), ('Brown', rx(r'brown', r'coffee', r'beige', r'tan\b')),
        ('Yellow', rx(r'yellow')), ('Purple', rx(r'purple', r'violet')), ('Orange', rx(r'orange')),
        ('Silver', rx(r'silver')), ('Gold', rx(r'gold')), ('Multicolour', rx(r'colou?rful', r'rainbow', r'multi.?colou?r')),
    ],
    'material': [
        ('Cotton', rx(r'cotton(?!.?padded)')), ('Denim', rx(r'denim', r'jeans')), ('Leather', rx(r'leather', r'\bpu\b')),
        ('Wool / Knit', rx(r'wool', r'knit', r'cashmere', r'mohair')), ('Fleece / Fur', rx(r'fleece', r'fur\b', r'plush(?!.*(?:toy|doll))', r'sherpa', r'velvet')),
        ('Silk / Satin', rx(r'silk', r'satin')), ('Mesh', rx(r'mesh')), ('Linen', rx(r'linen')), ('Nylon', rx(r'nylon')),
        ('Corduroy', rx(r'corduroy')), ('Metal', rx(r'metal', r'steel', r'titanium', r'alloy')),
    ],
    'fit': [
        ('Loose / Oversized', rx(r'loose', r'oversized?', r'baggy', r'drop shoulder', r'boxy')),
        ('Slim', rx(r'slim', r'tight', r'skinny', r'fitted', r'bodycon')),
        ('Wide leg', rx(r'wide.?leg')), ('Straight', rx(r'straight')), ('Cropped', rx(r'crop(?:ped)?')),
    ],
    'season': [
        ('Summer', rx(r'summer', r'breathable', r'ice silk', r'cooling', r'short.?sleeve', r'shorts', r'sleeveless', r'thin\b', r'quick.?dry', r'mesh')),
        ('Winter', rx(r'winter', r'warm', r'thick', r'fleece', r'padded', r'down\b', r'fur\b', r'wool', r'cold', r'plush')),
    ],
    'gender': [
        ('Women', rx(r'women', r'ladies', r'girls?\b', r'hottie', r'dress', r'skirt', r'bra\b', r'lace', r'bodycon', r'camisole', r'halter', r'crop top', r'sexy')),
        ('Men', rx(r"\bmen'?s?\b", r'\bmale\b', r'gentleman', r'boys?\b')),
    ],
    'occasion': [
        ('Halloween', rx(r'halloween', r'pumpkin', r'witch', r'zombie', r'vampire', r'ghost', r'bat\b', r'spider')),
        ('Christmas', rx(r'christmas', r'xmas', r'santa', r'snowflake', r'reindeer')),
    ],
}

# Hood fix: "hat" attached to a garment means hooded, not a hat.
HOODED = rx(r'hat (?:coat|suit|sweater|jacket|sweatshirt|top|cardigan)', r'with hat', r'hatted')


def price_tier(usd):
    return 'Under $10' if usd < 10 else '$10–25' if usd < 25 else '$25–50' if usd < 50 else '$50+'


def categorise(title):
    for name, pat in CATEGORIES:
        if pat.search(title):
            return name
    return '📦 Other'


def tag(title):
    out = {}
    for facet, rules in FACETS.items():
        hits = [label for label, pat in rules if pat.search(title)]
        if hits:
            out[facet] = hits
    if HOODED.search(title):
        out.setdefault('feature', []).append('Hooded')
    return out


def main(src, dst):
    data = json.load(open(src, encoding='utf-8'))
    out = []
    for p in data:
        usd = round(float(p['price']) * CNY_TO_USD, 2)
        t = tag(p['title'])
        t['price'] = [price_tier(usd)]
        out.append({**p, 'category': categorise(p['title']), 'tags': t, 'priceUsd': usd})
    json.dump(out, open(dst, 'w', encoding='utf-8'), ensure_ascii=False)
    c = collections.Counter(p['category'] for p in out)
    for k, v in c.most_common():
        print(f'{v:5}  {k}')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
