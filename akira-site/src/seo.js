/* ============================================================================
   AKIRA — search metadata
   The address the site is served from, and the structured data Google reads.
   Shared by the build (vite.config.js), which writes it into every page.
   ========================================================================== */

import { venue, brand } from './content.js';
import { posts, blog } from './blog/posts.js';

/* The bare domain redirects here, so this is the one address search engines should index. */
export const SITE = 'https://www.simplyakira.com';

/* From the map share link in venue.mapsUrl. */
export const GEO = { lat: 22.5023364, lng: 88.3852304 };

const ORG_ID = `${SITE}/#organization`;
const RESTAURANT_ID = `${SITE}/#restaurant`;

const hoursSpec = venue.hours.map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: h.days.map((d) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d]),
  opens: clock(h.open),
  closes: clock(h.close),
}));

function clock(mins) {
  const m = mins % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
}

export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: brand.name,
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: brand.name,
        alternateName: brand.katakana,
        url: `${SITE}/`,
        logo: `${SITE}/logo-512.png`,
        email: venue.email,
        sameAs: [brand.instagramUrl],
        founder: [
          { '@type': 'Person', name: 'Aditya Paith', jobTitle: 'Co-founder & Executive Chef' },
          { '@type': 'Person', name: 'Shopno Banerjee', jobTitle: 'Co-founder & Operations Manager' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+919163677724',
          email: venue.email,
          contactType: 'customer service',
          areaServed: 'IN',
        },
      },
      {
        '@type': 'Restaurant',
        '@id': RESTAURANT_ID,
        name: brand.name,
        alternateName: brand.katakana,
        description: 'Japanese ramen restaurant in Kasba, Kolkata, off Garfa Main Road: handmade ramen, charcoal yakitori and gyoza, open late.',
        url: `${SITE}/`,
        parentOrganization: { '@id': ORG_ID },
        image: [`${SITE}/hero/street-front-1200.jpg`, `${SITE}/dishes/ramen.jpg`, `${SITE}/og-image.jpg`],
        logo: `${SITE}/logo-512.png`,
        servesCuisine: ['Japanese', 'Ramen'],
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'UPI, Cash',
        telephone: '+919163677724',
        email: venue.email,
        menu: `${SITE}/#menu`,
        hasMap: venue.mapsUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: venue.streetAddress,
          addressLocality: 'Kolkata',
          addressRegion: 'West Bengal',
          postalCode: '700078',
          addressCountry: 'IN',
        },
        geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
        openingHoursSpecification: hoursSpec,
        sameAs: [brand.instagramUrl],
      },
    ],
  };
}

export function blogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE}/blog/#blog`,
    url: `${SITE}/blog/`,
    name: `${blog.title} | AKIRA blog`,
    description: blog.lede,
    publisher: { '@id': ORG_ID },
    blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE}/blog/${p.slug}`, datePublished: p.date })),
  };
}

export function postSchema(post) {
  const url = `${SITE}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#post`,
        mainEntityOfPage: url,
        url,
        headline: post.title,
        description: post.excerpt,
        image: `${SITE}${post.photo}`,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'en-IN',
        author: { '@type': 'Organization', name: brand.name, url: `${SITE}/` },
        publisher: { '@type': 'Organization', name: brand.name, logo: { '@type': 'ImageObject', url: `${SITE}/logo-512.png` } },
        about: { '@type': 'Restaurant', name: brand.name, url: `${SITE}/` },
      },
      ...(post.event
        ? [{
            '@type': 'Event',
            name: post.event.name,
            description: post.event.description,
            startDate: post.event.date,
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            image: `${SITE}${post.photo}`,
            url,
            location: {
              '@type': 'Restaurant',
              name: brand.name,
              address: {
                '@type': 'PostalAddress',
                streetAddress: venue.streetAddress,
                addressLocality: 'Kolkata',
                addressRegion: 'West Bengal',
                postalCode: '700078',
                addressCountry: 'IN',
              },
            },
            organizer: { '@type': 'Organization', name: brand.name, url: `${SITE}/` },
          }]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

export function sitemap(today) {
  const urls = [
    { loc: `${SITE}/`, lastmod: today, priority: '1.0' },
    { loc: `${SITE}/blog/`, lastmod: posts[0]?.date || today, priority: '0.7' },
    ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}`, lastmod: p.date, priority: '0.6' })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
}

export const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
