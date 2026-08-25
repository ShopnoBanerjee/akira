import { visit, TODO, brand } from '../content';
import SectionHead from '../components/SectionHead';
import { useInView, revealClass } from '../hooks/useInView';
import './Visit.css';

/* Inline SVG icons — zero deps, red per the colour rules. */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
    />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.6 4 2.3-1 1.7-5-2.9V6h2v6.6Z"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z"
    />
  </svg>
);

/* Coordinates resolved from the share link in TODO.mapsUrl
   (AKIRA | Japanese Ramen Restaurant). Keyless embed — no Maps API bill. */
const MAP_EMBED =
  'https://www.google.com/maps?q=22.5023364,88.3852304&z=17&hl=en&output=embed';

export default function Visit() {
  const [ref, inView] = useInView(0.15);
  const [mapRef, mapIn] = useInView(0.2);

  const phoneIsPlaceholder = TODO.phone.startsWith('[');

  return (
    <section className="section visit" id="visit">
      <div className="wrap">
        <SectionHead
          eyebrow={visit.eyebrow}
          heading={visit.heading}
          lede={visit.lede}
          accent="blue"
        />

        <div className="visit__grid">
          <div ref={ref} className="visit__details">
            <div
              className={revealClass(inView, 'visit__row')}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="visit__icon">
                <PinIcon />
              </span>
              <div>
                <p className="t-label visit__row-label">Find us</p>
                <p className="t-body">
                  {TODO.streetAddress}
                  <br />
                  {TODO.city}
                </p>
              </div>
            </div>

            <div
              className={revealClass(inView, 'visit__row')}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="visit__icon">
                <ClockIcon />
              </span>
              <div>
                <p className="t-label visit__row-label">Hours</p>
                {TODO.hours.map((h) => (
                  <p key={h.days} className="t-body">
                    <strong className="visit__days">{h.days}</strong>
                    <span className="visit__time">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div
              className={revealClass(inView, 'visit__row')}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="visit__icon">
                <PhoneIcon />
              </span>
              <div>
                <p className="t-label visit__row-label">Book a table</p>
                <p className="t-body">
                  {phoneIsPlaceholder ? (
                    TODO.phone
                  ) : (
                    <a
                      className="visit__phone"
                      href={`tel:${TODO.phone.replace(/\s/g, '')}`}
                    >
                      {TODO.phone}
                    </a>
                  )}
                </p>
              </div>
            </div>

            <div
              className={revealClass(inView, 'visit__ctas')}
              style={{ transitionDelay: '280ms' }}
            >
              <a
                className="pill pill--red"
                href={TODO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
              <a
                className="pill pill--ink"
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {brand.instagram}
              </a>
            </div>
          </div>

          {/* Live Google Map, framed in the brand's offset-shadow card.
              Loads lazily — the iframe is the page's only third-party request. */}
          <div ref={mapRef} className={revealClass(mapIn, 'visit__map')}>
            <iframe
              className="visit__map-frame"
              title="AKIRA on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="visit__map-label t-label"
              href={TODO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
