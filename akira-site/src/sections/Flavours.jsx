import { flavours } from '../content';
import './Flavours.css';

/* Real dishes, as they arrive at the table. A grid on desktop,
   a thumb-swipe row on phones. */
export default function Flavours() {
  return (
    <section className="flavours" aria-labelledby="flavours-title">
      <div className="wrap">
        <div className="flavours__bar">
          <h2 id="flavours-title" className="flavours__title">
            {flavours.heading}
          </h2>
          <a className="flavours__link" href={flavours.cta.href}>
            {flavours.cta.label}
          </a>
        </div>

        <ul className="flavours__grid">
          {flavours.items.map((item) => (
            <li key={item.name} className="dish">
              <img
                className="dish__img"
                src={item.photo}
                alt={item.alt}
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />
              <div className="dish__meta">
                <span className="dish__name">
                  {item.name}
                  <span className="dish__jp jp" lang="ja">
                    {item.jp}
                  </span>
                </span>
                <span className="dish__price tnum">from ₹{item.from}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
