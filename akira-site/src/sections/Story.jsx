import { story, isFilled } from '../content';
import SectionHead from '../components/SectionHead';
import './Story.css';

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="wrap">
        <SectionHead eyebrow={story.eyebrow} heading={story.heading} />

        <div className="story__grid">
          <div className="story__prose">
            {story.prose.map((p, i) => (
              <p key={i} className="t-body">
                {p}
              </p>
            ))}
          </div>

          <div className="story__founders">
            {story.founders.filter((f) => isFilled(f.name)).map((f, i) => (
              <article
                key={i}
                className={`founder founder--${f.accent}`}
              >
                {f.photo && (
                  <img
                    className="founder__photo"
                    src={f.photo}
                    alt={f.name}
                    width="240"
                    height="240"
                    loading="lazy"
                  />
                )}
                <h3 className="t-card-title">{f.name}</h3>
                <p className="founder__role t-tag">{f.role}</p>
                <p className="t-body founder__bio">{f.bio}</p>
              </article>
            ))}
          </div>
        </div>

        <ul className="story__ethos">
          {story.ethos.map((e) => (
            <li
              key={e}
              className="ethos-chip t-label"
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
