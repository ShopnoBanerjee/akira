import { hero, marquee } from '../content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner wrap">
        <div className="hero__copy">
          <img
            className="hero__logo"
            src="/akira-logo.svg"
            alt={hero.logoAlt}
            width="863"
            height="503"
            fetchPriority="high"
            decoding="async"
          />
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__ctas">
            <a className="pill pill--red" href={hero.ctas.primary.href}>
              {hero.ctas.primary.label}
            </a>
            <a className="pill pill--ink" href={hero.ctas.secondary.href}>
              {hero.ctas.secondary.label}
            </a>
          </div>
        </div>

        <figure className="hero__photo">
          <img
            src="/hero/street-front-1200.jpg"
            srcSet="/hero/street-front-700.jpg 700w, /hero/street-front-1200.jpg 1200w"
            sizes="(max-width: 860px) 100vw, 50vw"
            alt={hero.photoAlt}
            width="1200"
            height="1500"
            fetchPriority="high"
          />
          <figcaption className="hero__caption">{hero.photoCaption}</figcaption>
        </figure>
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
          <span className="marquee__dot" />
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
