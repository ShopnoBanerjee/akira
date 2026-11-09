import { useEffect } from 'react';
import { useRise } from '../hooks/useRise';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import Tails from '../components/Tails';
import { blog, posts, readingTime, formatDate, pageTitle } from './posts';
import { SITE } from '../seo';
import './Blog.css';

const postHref = (post) => `/blog/${post.slug}`;

/* [words](url) inside post text becomes a link; other sites open in a new tab. */
function Rich({ text }) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const external = /^https?:/.test(m[2]);
    return (
      <a key={i} href={m[2]} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {m[1]}
      </a>
    );
  });
}

/* The blog is one HTML page; the path picks the post. */
function currentPost(path) {
  const slug = path.replace(/^\/blog\/?/, '').replace(/\/$/, '');
  if (!slug) return { slug: null, post: null };
  return { slug, post: posts.find((p) => p.slug === slug) || null };
}

function Meta({ post }) {
  return (
    <p className="blog-meta">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true"> · </span>
      {readingTime(post)} min read
    </p>
  );
}

function PostRow({ post }) {
  return (
    <li className="post-row" data-rise="">
      <a className="post-row__link" href={postHref(post)}>
        <div className="post-row__words">
          <h3 className="t-sub">{post.title}</h3>
          <p>{post.excerpt}</p>
          <Meta post={post} />
        </div>
        <img className="post-row__img" src={post.photo} alt="" width="800" height="1000" loading="lazy" decoding="async" />
      </a>
    </li>
  );
}

function Index({ missing }) {
  const [lead, ...rest] = posts;
  return (
    <>
      <header className="blog-head">
        <div className="wrap blog-head__grid">
          <div>
            <div className="sec-head__row" data-rise="">
              <h1 className="t-display">{blog.title}</h1>
              <span className="sec-head__kana jp" lang="ja" aria-hidden="true">
                {blog.kana}
              </span>
            </div>
            <p className="t-lead blog-head__lede" data-rise="" style={{ '--i': 1 }}>{blog.lede}</p>
            <a className="pill pill--white blog-head__cta" href="/#menu" data-rise="" style={{ '--i': 2 }}>See the menu</a>
          </div>
          <img className="blog-head__img" data-rise="" style={{ '--i': 1 }} src={blog.photo} alt={blog.photoAlt} width="800" height="1000" decoding="async" />
        </div>
      </header>

      <section className="blog-index has-tails" aria-label="All posts">
        <Tails color="var(--akira-red)" />
        <div className="wrap">
          {missing && <p className="blog-missing">That post is not here. Here is everything we have written so far.</p>}

          <a className="post-lead" href={postHref(lead)} data-rise="">
            <img className="post-lead__img" src={lead.photo} alt={lead.photoAlt} width="800" height="1000" decoding="async" />
            <div className="post-lead__words">
              <h2 className="post-lead__title">{lead.title}</h2>
              <p className="t-lead">{lead.excerpt}</p>
              <Meta post={lead} />
              <span className="pill pill--red">Read the post</span>
            </div>
          </a>

          {rest.length > 0 && <ul className="post-rows">{rest.map((p) => <PostRow key={p.slug} post={p} />)}</ul>}
        </div>
      </section>
    </>
  );
}

function Post({ post }) {
  const others = posts.filter((p) => p !== post);
  return (
    <>
      <article className="post">
        <div className="wrap post__column">
          <header className="post__head" data-rise="">
            <h1 className="post__title">{post.title}</h1>
            <p className="t-lead">{post.excerpt}</p>
            <Meta post={post} />
          </header>
        </div>

        <figure className="post__photo" data-rise="">
          <img src={post.photo} alt={post.photoAlt} width="800" height="1000" decoding="async" />
        </figure>

        <div className="wrap post__column">
          <div className="post__body">
            {post.body.map((block, i) => {
              if (block.img)
                return (
                  <figure key={i} className="post__inline" data-rise="">
                    <img src={block.img} alt={block.alt} width="800" height="1000" loading="lazy" decoding="async" />
                  </figure>
                );
              if (block.cta)
                return (
                  <div key={i} className="post__inline-ctas" data-rise="">
                    {block.cta.map((c) => (
                      <a
                        key={c.label}
                        className={`pill pill--${c.style || 'red'}`}
                        href={c.href}
                        {...(/^https?:/.test(c.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                );
              if (block.h2) return <h2 key={i} className="t-sub" data-rise="">{block.h2}</h2>;
              if (block.list) return <ul key={i} data-rise="">{block.list.map((item) => <li key={item}><Rich text={item} /></li>)}</ul>;
              return <p key={i} data-rise=""><Rich text={block.p} /></p>;
            })}
          </div>

          <div className="post__ctas" data-rise="">
            <a className="pill pill--red" href="/#menu">See the menu</a>
            <a className="pill pill--ink" href="/#visit">Find us</a>
            <a className="post__back" href="/blog/">All posts</a>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="post-more" aria-labelledby="more-title">
          {/* No noodles here: they belong under a red field, and this follows a white one. */}
          <div className="wrap">
            <h2 id="more-title" className="t-display" data-rise="">More posts</h2>
            <ul className="post-rows">{others.map((p) => <PostRow key={p.slug} post={p} />)}</ul>
          </div>
        </section>
      )}
    </>
  );
}

export default function BlogApp({ path = typeof window === 'undefined' ? '/blog/' : window.location.pathname }) {
  const { slug, post } = currentPost(path);
  useRise();

  useEffect(() => {
    if (!post) return;
    document.title = pageTitle(post);
    document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE}${postHref(post)}`);
  }, [post]);

  return (
    <>
      <Nav current="blog" />
      <main>{post ? <Post post={post} /> : <Index missing={Boolean(slug)} />}</main>
      <Footer />
    </>
  );
}
