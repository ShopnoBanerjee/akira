/**
 * The one section header on the page: the display heading, with its katakana
 * answering from the far side of the grid.
 */
export default function SectionHead({ kana, heading, lede }) {
  return (
    <header className="sec-head">
      <div className="sec-head__row" data-rise="">
        <h2 className="t-display" style={{ whiteSpace: 'pre-line' }}>
          {heading}
        </h2>
        <span className="sec-head__kana jp" lang="ja" aria-hidden="true">
          {kana}
        </span>
      </div>
      {lede && (
        <p className="t-lead sec-head__lede" data-rise="" style={{ '--i': 1 }}>
          {lede}
        </p>
      )}
    </header>
  );
}
