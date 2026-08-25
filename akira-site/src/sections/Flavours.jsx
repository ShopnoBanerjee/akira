import { flavours } from '../content';
import './Flavours.css';

/**
 * Full-bleed auto-scrolling signature rail.
 * Same mechanic as the marquee: the track is duplicated once and animated to
 * -50%, so the loop is seamless. Pauses on hover/focus.
 */
export default function Flavours() {
  const cards = flavours.items.map((item, i) => (
    <li key={`${item.name}-${i}`} className={`flav-card flav-card--${item.tone}`}>
      <span className="flav-card__oval">{item.name}</span>
      <span className="flav-card__jp jp" lang="ja">
        {item.jp}
      </span>
      <span className="flav-card__price">₹{item.price}</span>
      {item.note && <span className="flav-card__note">{item.note}</span>}
    </li>
  ));

  return (
    <section className="flavours" aria-label={flavours.label}>
      <div className="flavours__bar wrap">
        <span className="flavours__chip t-label">{flavours.label}</span>
        <a className="flavours__link t-label" href={flavours.cta.href}>
          {flavours.cta.label}
        </a>
      </div>

      <div className="flavours__viewport">
        <ul className="flavours__track">{cards}</ul>
        <ul className="flavours__track" aria-hidden="true">
          {cards}
        </ul>
      </div>
    </section>
  );
}
