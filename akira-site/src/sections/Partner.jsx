import { partner, TODO, isFilled } from '../content';
import SectionHead from '../components/SectionHead';
import './Partner.css';

export default function Partner() {
  const email = TODO.partnerEmail;
  const hasEmail = isFilled(email);

  return (
    <section className="section section--ink partner" id="partner">
      <div className="wrap partner__grid">
        <div className="partner__copy">
          <SectionHead eyebrow={partner.eyebrow} heading={partner.heading} tone="light" />
          <p className="t-body partner__prose">{partner.prose}</p>
          {/* Until there's an inbox, send people to Instagram rather than a dead button. */}
          <a
            className="pill pill--red partner__cta"
            href={hasEmail ? `mailto:${email}?subject=AKIRA%20—%20partnership` : partner.fallbackHref}
            {...(hasEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {hasEmail ? partner.cta.label : partner.fallbackLabel}
          </a>
          {hasEmail && <p className="partner__email">{email}</p>}
        </div>

        {/* Three facts set as type, not three identical boxes. */}
        <dl className="partner__facts">
          {partner.stats.map((s) => (
            <div key={s.word} className="fact">
              <dt className="fact__word">{s.word}</dt>
              <dd className="fact__note">{s.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
