import { partner, venue } from '../content';
import SectionHead from '../components/SectionHead';
import Tails from '../components/Tails';
import './Partner.css';

export default function Partner() {
  const mailto = `mailto:${venue.email}?subject=AKIRA%20partnership`;

  return (
    <section className="partner has-tails" id="partner">
      <Tails color="var(--akira-red)" />
      <div className="wrap partner__grid">
        <SectionHead kana={partner.kana} heading={partner.heading} />
        <div data-rise="" style={{ '--i': 1 }}>
          <p className="t-lead">{partner.prose}</p>
          <div className="partner__contact">
            <a className="pill pill--ink" href={mailto}>
              {partner.cta.label}
            </a>
            <a className="partner__email" href={mailto}>
              {venue.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
