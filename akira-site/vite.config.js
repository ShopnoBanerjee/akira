import react from '@vitejs/plugin-react'
import { createServer, defineConfig } from 'vite'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import fs from 'node:fs'
import path from 'node:path'
import { posts, pageTitle } from './src/blog/posts.js'
import { SITE, homeSchema, blogSchema, postSchema, sitemap, jsonLd } from './src/seo.js'
import { llmsTxt, llmsFullTxt } from './src/llms.js'

// Every /blog/<slug> is served the blog page, which reads the slug from the path.
// The build also writes a real page per post (below); vercel.json covers any gap.
const blogRoutes = {
  name: 'blog-routes',
  configureServer(server) {
    server.middlewares.use(rewriteBlog)
  },
  configurePreviewServer(server) {
    server.middlewares.use(rewriteBlog)
  },
}

function rewriteBlog(req, _res, next) {
  if (/^\/blog\/[^./?]+\/?(\?.*)?$/.test(req.url)) req.url = '/blog/index.html'
  next()
}

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/* Structured data in the HTML itself, so crawlers read it without running the page. */
const schemaInHtml = {
  name: 'schema-in-html',
  transformIndexHtml(html, ctx) {
    const blog = ctx.path.startsWith('/blog')
    return html.replace('<!--schema-->', jsonLd(blog ? blogSchema() : homeSchema()))
  },
}

/* At build: one HTML file per post with its own title, description, address and
   BlogPosting data, plus the sitemap. Adding a post to posts.js is all it takes. */
const seoPages = {
  name: 'seo-pages',
  apply: 'build',
  enforce: 'post',
  generateBundle(_options, bundle) {
    const shell = bundle['blog/index.html']?.source
    if (typeof shell !== 'string') throw new Error('seo-pages: blog/index.html missing from the build')
    for (const post of posts) {
      const url = `${SITE}/blog/${post.slug}`
      const title = escape(pageTitle(post))
      const description = escape(post.excerpt)
      const html = shell
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:type" content=")[^"]*(")/, '$1article$2')
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${SITE}${post.photo}$2`)
        .replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${escape(post.photoAlt)}$2`)
        .replace(/\s*<meta property="og:image:(width|height|type)" content="[^"]*" \/>/g, '')
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${SITE}${post.photo}$2`)
        .replace(/(<meta name="twitter:image:alt" content=")[^"]*(")/, `$1${escape(post.photoAlt)}$2`)
        .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, jsonLd(postSchema(post)))
      this.emitFile({ type: 'asset', fileName: `blog/${post.slug}/index.html`, source: html })
    }
    const today = new Date().toISOString().slice(0, 10)
    this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap(today) })
    this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt() })
    this.emitFile({ type: 'asset', fileName: 'llms-full.txt', source: llmsFullTxt() })
  },
}

/* After the build is written: render each page's React tree into its HTML, so crawlers
   and AI models that never run JavaScript still read the full menu, hours and posts.
   The browser then renders the same tree over it. */
const prerender = {
  name: 'prerender',
  apply: 'build',
  async closeBundle() {
    const dist = path.resolve('dist')
    const server = await createServer({ configFile: false, plugins: [react()], logLevel: 'error', server: { middlewareMode: true }, appType: 'custom' })
    try {
      const { default: App } = await server.ssrLoadModule('/src/App.jsx')
      const { default: BlogApp } = await server.ssrLoadModule('/src/blog/BlogApp.jsx')
      const fill = (file, element) => {
        const target = path.join(dist, file)
        const html = fs.readFileSync(target, 'utf8')
        if (!html.includes('<div id="root"></div>')) throw new Error(`prerender: no empty root in ${file}`)
        fs.writeFileSync(target, html.replace('<div id="root"></div>', `<div id="root">${renderToString(element)}</div>`))
      }
      fill('index.html', createElement(App))
      fill('blog/index.html', createElement(BlogApp, { path: '/blog/' }))
      for (const post of posts) fill(`blog/${post.slug}/index.html`, createElement(BlogApp, { path: `/blog/${post.slug}` }))
    } finally {
      await server.close()
    }
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), blogRoutes, schemaInHtml, seoPages, prerender],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        blog: 'blog/index.html',
      },
    },
  },
})
