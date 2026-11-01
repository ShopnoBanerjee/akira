import { menu } from '../content';
import SectionHead from '../components/SectionHead';
import Tails from '../components/Tails';
import './Menu.css';

const rupee = (n) => `₹${n}`;

function GroupHead({ group }) {
  return (
    <div className="menu__group-head" data-rise="">
      <h3 className="t-sub">{group.label}</h3>
      <span className="menu__group-kana jp" lang="ja" aria-hidden="true">
        {group.jp}
      </span>
    </div>
  );
}

function Photo({ src, alt, area }) {
  return (
    <figure className={`menu__photo menu__photo--${area}`} data-rise="">
      <img src={src} alt={alt} width="800" height="1000" loading="lazy" decoding="async" />
    </figure>
  );
}

export default function Menu() {
  const { ramen, plates, drinks } = menu;
  const [gyoza, yakitori, karaage, donburi] = plates.categories;

  const plate = (cat, area) => (
    <article key={cat.name} className={`plate plate--${area}`} data-rise="">
      <h4 className="t-sub plate__name">{cat.name}</h4>
      <p className="plate__desc">{cat.desc}</p>
      <ul className="price-list">
        {cat.items.map((it) => (
          <li key={it.name}>
            <span>
              {it.name}
              {it.note && <em className="menu__note">{it.note}</em>}
            </span>
            <span className="price">{rupee(it.price)}</span>
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section className="menu has-tails" id="menu">
      <Tails color="var(--akira-red)" />
      <div className="wrap">
        <SectionHead kana={menu.kana} heading={menu.heading} lede={menu.lede} />

        {/* ---- Ramen: the bowl large, the three of them beside it ---- */}
        <div className="menu__ramen">
          <div className="menu__ramen-photos">
            {ramen.photos.map((photo) => (
              <Photo key={photo.src} src={photo.src} alt={photo.alt} area="ramen" />
            ))}
          </div>
          <div className="menu__ramen-list">
            <GroupHead group={ramen} />
            {ramen.items.map((item, i) => (
              <article key={item.name} className="bowl" data-rise="" style={{ '--i': i }}>
                <div className="bowl__line">
                  <h4 className="t-sub bowl__name">{item.name}</h4>
                  <p className="t-sub price">{rupee(item.price)}</p>
                </div>
                {item.badge && <p className="menu__note bowl__note">{item.badge}</p>}
                <p className="bowl__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ---- Small plates ---- */}
        <div className="menu__plates-head">
          <GroupHead group={plates} />
          <p className="menu__plates-note">{plates.note}</p>
        </div>
        <div className="menu__plates">
          <Photo src={gyoza.photo} alt={gyoza.photoAlt} area="gyoza" />
          {plate(gyoza, 'gyoza')}
          {plate(yakitori, 'yakitori')}
          <Photo src={karaage.photo} alt={karaage.photoAlt} area="karaage" />
          {plate(karaage, 'karaage')}
          {plate(donburi, 'donburi')}
        </div>
      </div>

      {/* ---- Drinks & sweets: its own field, closing the menu ---- */}
      <div className="menu__drinks">
        <div className="wrap">
          <GroupHead group={drinks} />
          <div className="menu__drinks-grid">
            {drinks.groups.map((g) => (
              <div key={g.name} className="drink-group" data-rise="">
                <p className="drink-group__label">{g.name}</p>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <div className="drink-group__row">
                        <span className="drink-group__name">{it.name}</span>
                        <span className="price">{rupee(it.price)}</span>
                      </div>
                      <p>{it.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="menu__allergens">{menu.allergens}</p>
        </div>
      </div>
    </section>
  );
}
