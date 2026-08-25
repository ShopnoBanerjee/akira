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

        {/* Flat tiles — replace each <span> with an <img> when photos land. */}
        <ul ref={tilesRef} className="community__tiles">
          {community.tiles.map((t, i) => (
            <li
              key={t.label}
              className={revealClass(tilesIn, `tile tile--${t.tone}`)}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="tile__label">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
