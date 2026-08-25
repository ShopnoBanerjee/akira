import { community } from '../content';
import SectionHead from '../components/SectionHead';
import { useInView, revealClass } from '../hooks/useInView';
import './Community.css';

export default function Community() {
  const [textRef, textIn] = useInView();
  const [tilesRef, tilesIn] = useInView(0.15);

  return (
    <section className="section section--blue community" id="community">
      <div className="wrap community__grid">
        <div ref={textRef}>
          <SectionHead
            eyebrow={community.eyebrow}
            heading={community.heading}
            tone="light"
          />
          <div className={revealClass(textIn, 'community__body')}>
            <p className="t-body">{community.prose}</p>
            <a
              className="pill pill--white community__cta"
              href={community.cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {community.cta.label}
            </a>
          </div>
        </div>

        {/* Real photo when `photo` is set; falls back to the flat colour tile. */}
        <ul ref={tilesRef} className="community__tiles">
          {community.tiles.map((t, i) => (
            <li
              key={t.label}
              className={revealClass(tilesIn, `tile tile--${t.tone}`)}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {t.photo && (
                <img
                  className="tile__img"
                  src={t.photo}
                  alt={t.label}
                  loading="lazy"
                />
              )}
              <span className="tile__label">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
