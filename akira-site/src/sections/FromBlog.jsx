import { posts } from '../blog/posts';
import SectionHead from '../components/SectionHead';
import './FromBlog.css';

export default function FromBlog() {
  const latest = posts.slice(0, 3);
  return (
    <section className="section from-blog" id="from-blog">
      <div className="wrap from-blog__grid">
        <div>
          <SectionHead kana="ブログ" heading={'From the\nblog'} lede="Bowls, rolls and how to eat them, from the counter in Kasba." />
          <a className="pill pill--ink" href="/blog/" data-rise="" style={{ '--i': 2 }}>
            All posts
          </a>
        </div>
        <ul className="from-blog__list">
          {latest.map((p, i) => (
            <li key={p.slug} data-rise="" style={{ '--i': i }}>
              <a className="from-blog__item" href={`/blog/${p.slug}`}>
                <img src={p.photo} alt="" width="800" height="1000" loading="lazy" decoding="async" />
                <span>
                  <span className="t-sub from-blog__title">{p.title}</span>
                  <span className="from-blog__excerpt">{p.excerpt}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
