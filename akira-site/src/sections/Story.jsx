import { story } from '../content';
import Picture from '../components/Picture';
import SectionHead from '../components/SectionHead';
import './Story.css';

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="wrap">
        <SectionHead kana={story.kana} heading={story.heading} />

        <div className="story__grid">
          <div className="story__prose">
            {story.prose.map((p, i) => (
              <p key={i} className="t-lead" data-rise="" style={{ '--i': i }}>
                {p}
              </p>
            ))}
          </div>

          <div className="story__founders">
            {story.founders.map((f, i) => (
              <article key={f.name} className="founder" data-rise="" style={{ '--i': i }}>
                <Picture
                  className="founder__photo"
                  src={f.photo}
                  alt={f.name}
                  sizes="(max-width: 560px) 112px, (max-width: 900px) 50vw, 22vw"
                />
                <div>
                  <h3 className="t-sub">{f.name}</h3>
                  <p className="founder__role">{f.role}</p>
                  <p className="founder__bio">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
