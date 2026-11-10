import { hero, marquee, marqueeNight } from '../content';
import Picture from '../components/Picture';
import { useTheme } from '../hooks/useTheme';
import OpenNow from '../components/OpenNow';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">{hero.title}</h1>
          <p className="t-lead hero__lede">{hero.lede}</p>
          <OpenNow className="hero__open" />
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
          <Picture
            src="/hero/street-front-1200.jpg"
            sizes="(max-width: 860px) 100vw, 55vw"
            alt={hero.photoAlt}
            priority
          />
        </figure>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = useTheme() === 'night' ? [...marqueeNight, ...marquee] : marquee;
  /* Track is duplicated once and animated to -50% — a seamless loop. */
  const track = (
    <ul className="marquee__track" aria-hidden="true">
      {items.map((m, i) => (
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
        {items.map((m) => m.en).join(', ')}
      </span>
      <div className="marquee__viewport">
        {track}
        {track}
      </div>
    </div>
  );
}
