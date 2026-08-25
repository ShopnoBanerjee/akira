import { partner, TODO } from '../content';
import SectionHead from '../components/SectionHead';
import { useInView, revealClass } from '../hooks/useInView';
import './Partner.css';

export default function Partner() {
  const [ref, inView] = useInView(0.18);
  const email = TODO.partnerEmail;
  const isPlaceholder = email.startsWith('[');

  return (
    <section className="section section--ink partner" id="partner">
      <div className="wrap partner__inner">
        <SectionHead
          eyebrow={partner.eyebrow}
          heading={partner.heading}
          tone="light"
          align="center"
        />

        <p className="t-body partner__prose">{partner.prose}</p>

        <ul ref={ref} className="partner__stats">
          {partner.stats.map((s, i) => (
            <li
              key={s.word}
              className={revealClass(inView, 'word-stat')}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="word-stat__word">{s.word}</span>
              <span className="word-stat__note">{s.note}</span>
            </li>
          ))}
        </ul>

        <a
          className="pill pill--red partner__cta"
          href={isPlaceholder ? '#partner' : `mailto:${email}?subject=AKIRA%20—%20partnership`}
        >
          {partner.cta.label}
        </a>
        <p className="partner__email">{email}</p>
      </div>
    </section>
  );
}
