import { footer, brand, nav, venue } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        {/* The full lockup, large: the size the guideline reserves it for. */}
        <a className="footer__brand" href="#top" aria-label={`${brand.name}, back to top`}>
          <img src="/akira-logo-white.svg" alt="" width="779" height="456" loading="lazy" />
        </a>

        <div className="footer__columns">
          <nav className="footer__links" aria-label="Footer">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href={nav.cta.href}>Visit</a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brand.instagram}
            </a>
          </nav>

          <div className="footer__contact">
            <p>
              {venue.streetAddress}
              <br />
              {venue.city}
            </p>
            <a href={venue.phoneHref}>{venue.phone}</a>
          </div>
        </div>

        <p className="footer__line">{footer.line}</p>
      </div>
    </footer>
  );
}
