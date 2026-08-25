import { footer, brand, nav } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        {/* Wordmark, not the bowl mark — the stamp texture goes muddy below
            ~200px, and the guideline reserves the full lockup for large use. */}
        <a className="footer__brand" href="#top">
          <span className="footer__wordmark">{brand.name}</span>
          <span className="footer__kana jp" lang="ja" aria-hidden="true">
            {brand.katakana}
          </span>
        </a>

        <nav className="footer__links" aria-label="Footer">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {brand.instagram}
          </a>
        </nav>

        <p className="footer__line t-caption">{footer.line}</p>
      </div>
    </footer>
  );
}
