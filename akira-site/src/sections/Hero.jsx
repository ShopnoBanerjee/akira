import { hero, marquee } from '../content';
import { useInView, revealClass } from '../hooks/useInView';
import './Hero.css';

export default function Hero() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="hero" id="top">
      {/* Halftone-dot circles — the only permitted texture (guideline §colour). */}
      <div className="hero__dots hero__dots--red" aria-hidden="true" />
      <div className="hero__dots hero__dots--blue" aria-hidden="true" />

      <div className="hero__inner wrap" ref={ref}>
        <p
          className={revealClass(inView, 'hero__kicker t-label')}
          style={{ transitionDelay: '0ms' }}
        >
          {hero.kicker}
        </p>

        <img
          className={revealClass(inView, 'hero__logo')}
          style={{ transitionDelay: '80ms' }}
          src="/akira-logo.svg"
          alt={hero.logoAlt}
          width="863"
          height="503"
          fetchPriority="high"
          decoding="async"
        />

        <h1 className={revealClass(inView, 'hero__tagline')} style={{ transitionDelay: '160ms' }}>
          {hero.tagline}
        </h1>

        <div className={revealClass(inView, 'hero__ctas')} style={{ transitionDelay: '240ms' }}>
          <a className="pill pill--red" href={hero.ctas.primary.href}>
            {hero.ctas.primary.label}
          </a>
          <a
            className="pill pill--ink"
            href={hero.ctas.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.ctas.secondary.label}
          </a>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  /* Track is duplicated once and animated to -50% — a seamless loop. */
  const track = (
    <ul className="marquee__track" aria-hidden="true">
      {marquee.map((m, i) => (
        <li key={i} className="marquee__item">
          <span className="marquee__en">{m.en}</span>
          <span className="marquee__jp jp" lang="ja">
            {m.jp}
          </span>
          <span className="marquee__dot">●</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee">
      {/* One readable copy for assistive tech, the visual track is aria-hidden. */}
      <span className="visually-hidden">
        {marquee.map((m) => m.en).join(', ')}
      </span>
      <div className="marquee__viewport">
        {track}
        {track}
      </div>
    </div>
  );
}
