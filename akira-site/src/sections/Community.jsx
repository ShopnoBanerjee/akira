import { community } from '../content';
import Picture from '../components/Picture';
import SectionHead from '../components/SectionHead';
import './Community.css';

export default function Community() {
  return (
    <section className="section section--blue community" id="community">
      <div className="wrap">
        <div className="community__head">
          <SectionHead kana={community.kana} heading={community.heading} />
          <div className="community__body" data-rise="" style={{ '--i': 1 }}>
            <p className="t-lead">{community.prose}</p>
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

        {/* One tall photo, four beside it. */}
        <ul className="community__mosaic">
          {community.tiles.map((t, i) => (
            <li key={t.label} className="tile" data-rise="" style={{ '--i': i }}>
              <Picture
                className="tile__img"
                src={t.photo}
                alt={t.alt}
                sizes={i === 0 ? '(max-width: 860px) 100vw, 36vw' : '(max-width: 860px) 50vw, 30vw'}
              />
              <span className="tile__label">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
