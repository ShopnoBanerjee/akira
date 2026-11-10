import { tasting, registerHref } from '../content';
import Picture from '../components/Picture';
import SectionHead from '../components/SectionHead';
import Tails from '../components/Tails';
import './Tasting.css';

const external = /^https?:/.test(registerHref) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

export default function Tasting() {
  return (
    <section className="tasting has-tails" id="tasting" aria-label="Sushi tasting, Saturday 14 November">
      <Tails color="var(--akira-red)" />
      <div className="wrap tasting__grid">
        <figure className="tasting__photo" data-rise="">
          <Picture src={tasting.photo} alt={tasting.photoAlt} sizes="(max-width: 900px) 100vw, 55vw" />
        </figure>
        <div className="tasting__copy">
          <SectionHead kana={tasting.kana} heading={tasting.heading} lede={tasting.lede} />
          <dl className="tasting__facts" data-rise="" style={{ '--i': 2 }}>
            {tasting.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
          <div className="tasting__ctas" data-rise="" style={{ '--i': 3 }}>
            <a className="pill pill--red" href={registerHref} {...external}>
              Register for the tasting
            </a>
            <a className="tasting__more" href={tasting.post}>
              Meet the rolls
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
