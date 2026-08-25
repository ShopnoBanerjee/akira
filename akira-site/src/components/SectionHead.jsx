import { useInView, revealClass } from '../hooks/useInView';

/**
 * The one section-header motif used on every section:
 * katakana eyebrow → 900 uppercase display heading → 72×4px rule.
 * `tone`: 'ink' (default, dark ground text) | 'light' (on blue/ink sections)
 * `accent`: 'red' (default) | 'blue' — the eyebrow colour on light grounds.
 */
export default function SectionHead({
  eyebrow,
  heading,
  lede,
  tone = 'ink',
  accent = 'red',
  align = 'start',
}) {
  const [ref, inView] = useInView();
  const light = tone === 'light';

  const eyebrowClass = [
    't-eyebrow',
    'sec-head__eyebrow',
    light ? 'sec-head__eyebrow--light' : '',
    !light && accent === 'blue' ? 'sec-head__eyebrow--blue' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header
      ref={ref}
      className={revealClass(inView, 'sec-head')}
      style={align === 'center' ? { textAlign: 'center' } : undefined}
    >
      <span className={eyebrowClass} lang="ja">
        {eyebrow}
      </span>
      <h2 className="t-display" style={{ whiteSpace: 'pre-line' }}>
        {heading}
      </h2>
      <div
        className={`sec-head__rule${light ? ' sec-head__rule--light' : ''}`}
        style={align === 'center' ? { marginInline: 'auto' } : undefined}
        aria-hidden="true"
      />
      {lede && (
        <p
          className="t-body sec-head__lede"
          style={{
            /* 0.95 keeps AA on the blue ground (4.76:1); 0.86 would not. */
            color: light ? 'rgba(255,255,255,0.95)' : undefined,
            marginInline: align === 'center' ? 'auto' : undefined,
          }}
        >
          {lede}
        </p>
      )}
    </header>
  );
}
