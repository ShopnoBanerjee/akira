import { story } from '../content';
import SectionHead from '../components/SectionHead';
import { useInView, revealClass } from '../hooks/useInView';
import './Story.css';

export default function Story() {
  const [proseRef, proseIn] = useInView();
  const [cardsRef, cardsIn] = useInView(0.2);
  const [ethosRef, ethosIn] = useInView(0.2);

  return (
    <section className="section story" id="story">
      <div className="wrap">
        <SectionHead eyebrow={story.eyebrow} heading={story.heading} />

        <div className="story__grid">
          <div ref={proseRef} className={revealClass(proseIn, 'story__prose')}>
            {story.prose.map((p, i) => (
              <p key={i} className="t-body">
                {p}
              </p>
            ))}
          </div>

          <div ref={cardsRef} className="story__founders">
            {story.founders.map((f, i) => (
              <article
                key={i}
                className={revealClass(
                  cardsIn,
                  `founder founder--${f.accent}`
                )}
                style={{ transitionDelay: `${i * 110}ms` }}
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
                <p className="founder__role t-label">{f.role}</p>
                <p className="t-body founder__bio">{f.bio}</p>
              </article>
            ))}
          </div>
        </div>

        <ul ref={ethosRef} className="story__ethos">
          {story.ethos.map((e, i) => (
            <li
              key={e}
              className={revealClass(ethosIn, 'ethos-chip t-label')}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
