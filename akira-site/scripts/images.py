"""
Responsive image variants for every site photo.

For each JPEG in public/ this writes AVIF and WebP copies at a few widths into
public/img/, and a manifest (src/images.json) that the <Picture> component reads.
Run it again whenever a photo is added or replaced:

    python scripts/images.py

Needs Pillow 11.2+ (AVIF support). The originals stay as the fallback for old browsers.
"""
import json
import pathlib
import sys

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
OUT = PUBLIC / 'img'
WIDTHS = (400, 800, 1200, 1600)
SKIP = {'og-image.jpg'}  # link-preview image: platforms fetch it as-is

manifest = {}
before = after = 0
for src in sorted(PUBLIC.rglob('*.jpg')):
    rel = '/' + src.relative_to(PUBLIC).as_posix()
    if src.name in SKIP or rel.startswith('/img/'):
        continue
    im = Image.open(src).convert('RGB')
    w, h = im.size
    widths = sorted({x for x in WIDTHS if x < w} | {min(w, WIDTHS[-1])})
    stem = rel[1:].rsplit('.', 1)[0]
    for width in widths:
        size = (width, round(h * width / w))
        small = im if size == im.size else im.resize(size, Image.LANCZOS)
        for fmt, opts in (('avif', {'quality': 55, 'speed': 4}), ('webp', {'quality': 78, 'method': 6})):
            dest = OUT / f'{stem}-{width}.{fmt}'
            dest.parent.mkdir(parents=True, exist_ok=True)
            small.save(dest, fmt.upper(), **opts)
    manifest[rel] = {'w': w, 'h': h, 'widths': widths}
    largest = OUT / f'{stem}-{widths[-1]}.avif'
    before += src.stat().st_size
    after += largest.stat().st_size
    print(f'{rel:42} {w}x{h}  jpg {src.stat().st_size // 1024:4} KB -> avif {largest.stat().st_size // 1024:4} KB at {widths[-1]}w')

(ROOT / 'src' / 'images.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(f'\n{len(manifest)} photos. Largest sizes: {before // 1024} KB as JPEG -> {after // 1024} KB as AVIF.')
sys.exit(0)
