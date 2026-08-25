import { useEffect, useState } from 'react';
import { nav, brand } from '../content';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  /* Highlight the section currently under the nav bar. */
  useEffect(() => {
    const ids = nav.links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    /* Track the whole set so the highlight clears when the band holds no
       section at all (i.e. back at the hero), instead of going stale. */
    const inBand = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting ? inBand.add(e.target.id) : inBand.delete(e.target.id)
        );
        const next = ids.find((id) => inBand.has(id));
        setActive(next || '');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Close the mobile sheet on Escape. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav__inner wrap">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__wordmark">{brand.name}</span>
          <span className="nav__kana jp" lang="ja" aria-hidden="true">
            {brand.katakana}
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                active === l.href.slice(1)
                  ? 'nav__link nav__link--active'
                  : 'nav__link'
              }
              aria-current={active === l.href.slice(1) ? 'true' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a className="pill pill--red nav__cta" href={nav.cta.href}>
          {nav.cta.label}
        </a>

        <button
          className="nav__burger"
          aria-expanded={open}
          aria-controls="nav-sheet"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'nav__bars nav__bars--x' : 'nav__bars'} />
        </button>
      </div>

      <div
        id="nav-sheet"
        className={open ? 'nav__sheet nav__sheet--open' : 'nav__sheet'}
        hidden={!open}
      >
        {nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="pill pill--red"
          href={nav.cta.href}
          onClick={() => setOpen(false)}
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
