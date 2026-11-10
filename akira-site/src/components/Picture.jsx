import images from '../images.json';

/*
 * A photo in AVIF and WebP at the widths in images.json (made by scripts/images.py),
 * with the original JPEG as the fallback. `sizes` tells the browser how wide the photo
 * is drawn, so a 180px thumbnail downloads a 400px file, not the full photo.
 * Below the fold it loads lazily; pass priority for the photo in the first screen.
 */
export default function Picture({ src, alt = '', sizes = '100vw', priority = false, ...rest }) {
  const meta = images[src];
  const load = priority ? { fetchPriority: 'high' } : { loading: 'lazy' };
  if (!meta) return <img src={src} alt={alt} decoding="async" {...load} {...rest} />;

  const stem = `/img/${src.slice(1).replace(/\.[^.]+$/, '')}`;
  const set = (fmt) => meta.widths.map((w) => `${stem}-${w}.${fmt} ${w}w`).join(', ');
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img src={src} alt={alt} width={meta.w} height={meta.h} decoding="async" {...load} {...rest} />
    </picture>
  );
}
