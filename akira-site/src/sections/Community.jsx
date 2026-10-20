import { community } from '../content';
import SectionHead from '../components/SectionHead';
import './Community.css';

export default function Community() {
  return (
    <section className="section section--blue community" id="community">
      <div className="wrap">
        <div className="community__head">
          <SectionHead eyebrow={community.eyebrow} heading={community.heading} tone="light" />
          <div className="community__body">
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

        {/* One tall photo, four beside it. */}
        <ul className="community__mosaic">
          {community.tiles.map((t) => (
            <li key={t.label} className="tile">
              <img
                className="tile__img"
                src={t.photo}
                alt={t.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="tile__label">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
