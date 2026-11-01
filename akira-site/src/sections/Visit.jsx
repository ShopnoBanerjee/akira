import { visit, venue, brand } from "../content";
import SectionHead from "../components/SectionHead";
import OpenNow from "../components/OpenNow";
import { useOpenStatus } from "../hooks/useOpenStatus";
import "./Visit.css";

/* Coordinates resolved from the share link in venue.mapsUrl
   (AKIRA | Japanese Ramen Restaurant). Keyless embed — no Maps API bill. */
const MAP_EMBED =
  "https://www.google.com/maps?q=22.5023364,88.3852304&z=17&hl=en&output=embed";

export default function Visit() {
  const { row } = useOpenStatus();

  return (
    <section className="section visit" id="visit">
      <div className="wrap visit__grid">
        <div className="visit__details">
          <SectionHead kana={visit.kana} heading={visit.heading} lede={visit.lede} />

          <address className="visit__address t-sub" data-rise="">
            {venue.streetAddress}
            <br />
            {venue.city}
          </address>
          <a className="visit__phone t-sub" href={venue.phoneHref} data-rise="">
            {venue.phone}
          </a>

          <OpenNow className="visit__open" />
          <dl className="visit__hours">
            {venue.hours.map((h) => (
              <div key={h.label} className={h === row ? "visit__day visit__day--now" : "visit__day"}>
                <dt>{h.label}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>

          <div className="visit__ctas">
            <a
              className="pill pill--white"
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
            <a
              className="pill pill--outline-white"
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brand.instagram}
            </a>
          </div>
        </div>

        {/* Loads lazily — the iframe is the page's only third-party request. */}
        <div className="visit__map" data-rise="">
          <iframe
            className="visit__map-frame"
            title="AKIRA on Google Maps"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
