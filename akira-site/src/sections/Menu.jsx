import { menu } from '../content';
import SectionHead from '../components/SectionHead';
import './Menu.css';

const rupee = (n) => `₹${n}`;

export default function Menu() {
  return (
    <section className="section section--paper menu" id="menu">
      <div className="wrap">
        <SectionHead
          eyebrow={menu.eyebrow}
          heading={menu.heading}
          lede={menu.lede}
        />

        {/* ---- Ramen ---- */}
        <h3 className="menu__group-title">
          {menu.ramen.label}
          <span className="menu__group-jp jp" lang="ja">
            {menu.ramen.jp}
          </span>
        </h3>

        <div className="menu__ramen">
          {menu.ramen.items.map((item) => (
            <article
              key={item.name}
              className={item.flagship ? 'ramen-card ramen-card--flagship' : 'ramen-card'}
            >
              {item.badge && <span className="ramen-card__badge">{item.badge}</span>}
              <h4 className="t-card-title">{item.name}</h4>
              <p className="t-body ramen-card__desc">{item.desc}</p>
              <p className="ramen-card__price">{rupee(item.price)}</p>
            </article>
          ))}
        </div>

        <div className="menu__addons">
          <p className="t-tag menu__addons-label">{menu.ramen.addons.label}</p>
          <ul className="menu__addons-list">
            {menu.ramen.addons.items.map((a) => (
              <li key={a.name}>
                <span>{a.name}</span>
                <span className="menu__addons-price">{rupee(a.price)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Small plates ---- */}
        <h3 className="menu__group-title menu__group-title--spaced">
          {menu.plates.label}
          <span className="menu__group-jp jp" lang="ja">
            {menu.plates.jp}
          </span>
        </h3>
        <p className="t-caption menu__group-note">{menu.plates.note}</p>

        <div className="menu__plates">
          {menu.plates.categories.map((cat) => (
            <article
              key={cat.name}
              className="plate-card"
            >
              <header className="plate-card__head">
                <h4 className="t-card-title">
                  {cat.name}
                  <span className="plate-card__jp jp" lang="ja">
                    {cat.jp}
                  </span>
                </h4>
                <span className="plate-card__from">from {rupee(cat.from)}</span>
              </header>
              <p className="t-caption plate-card__desc">{cat.desc}</p>
              <ul className="plate-card__list">
                {cat.items.map((it) => (
                  <li key={it.name}>
                    <span>
                      {it.name}
                      {it.note && (
                        <em className="plate-card__note">{it.note}</em>
                      )}
                    </span>
                    <span className="plate-card__price">{rupee(it.price)}</span>
                  </li>
                ))}
              </ul>
              {cat.addon && <p className="t-caption plate-card__addon">{cat.addon}</p>}
            </article>
          ))}
        </div>

        {/* ---- Drinks & sweets ---- */}
        <div className="menu__drinks">
          <h3 className="menu__group-title menu__group-title--inline">
            {menu.drinks.label}
            <span className="menu__group-jp jp" lang="ja">
              {menu.drinks.jp}
            </span>
          </h3>
          <div className="menu__drinks-grid">
            {menu.drinks.groups.map((g) => (
              <div key={g.name} className="drink-group">
                <p className="t-tag drink-group__label">{g.name}</p>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <div className="drink-group__row">
                        <span className="drink-group__name">{it.name}</span>
                        <span className="drink-group__price">
                          {rupee(it.price)}
                        </span>
                      </div>
                      <p className="t-caption">{it.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="menu__allergens t-caption">{menu.allergens}</p>
      </div>
    </section>
  );
}
