/* ============================================================================
   AKIRA — llms.txt
   A plain-text briefing for AI models and assistants, written at build from
   the same content the pages use, so it never drifts from the site.
   ========================================================================== */

import { venue, brand, menu, story } from './content.js';
import { posts } from './blog/posts.js';
import { SITE } from './seo.js';

const rupee = (n) => `₹${n}`;
const plain = (t) => t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, words, url) => `${words} (${url.startsWith('/') ? SITE + url : url})`);

function facts() {
  return `# AKIRA

> AKIRA is a Japanese ramen restaurant in Kasba, Kolkata, India, just off Garfa Main Road. Handmade noodles, broth built in-house, charcoal yakitori and gyoza, cooked with fresh ingredients. Open late: until 1:30 am Thursday to Saturday.

- Name: ${brand.name} (${brand.katakana})
- Cuisine: Japanese, ramen
- Address: ${venue.streetAddress}, Haltu/Garfa, Kasba, Kolkata 700078, West Bengal, India
- Phone: +91 ${venue.phone}
- Email: ${venue.email}
- Hours: ${venue.hours.map((h) => `${h.label}, ${h.time}`).join('; ')} (India Standard Time)
- Reservations: walk-ins welcome; call ahead for large groups
- Price range: ramen from ₹329; small plates from ₹149
- Map: ${venue.mapsUrl}
- Instagram: ${brand.instagramUrl}
- Website: ${SITE}/
- Founders: ${story.founders.map((f) => `${f.name}, ${f.role}`).join('; ')}
- Philosophy: fresh ingredients over imported ones; proudly unauthentic, because Japanese food cooked in India with Indian ingredients cannot honestly claim to be authentic; bold and unapologetic.
`;
}

function menuText() {
  const lines = ['## Menu', '', `### ${menu.ramen.label}`];
  for (const i of menu.ramen.items) lines.push(`- ${i.name}: ${rupee(i.price)}. ${i.desc}${i.badge ? ` (${i.badge})` : ''}`);
  lines.push('', `### ${menu.plates.label}`);
  for (const c of menu.plates.categories) {
    lines.push(`- ${c.name}: ${c.desc}`);
    for (const i of c.items) lines.push(`  - ${i.name}: ${rupee(i.price)}${i.note ? ` (${i.note})` : ''}`);
  }
  for (const g of menu.drinks.groups) {
    lines.push('', `### ${g.name}`);
    for (const i of g.items) lines.push(`- ${i.name}: ${rupee(i.price)}. ${i.desc}`);
  }
  lines.push('', `Allergens: ${menu.allergens}`, '');
  return lines.join('\n');
}

function pages() {
  return `## Pages

- [Home](${SITE}/): the restaurant, opening hours, location and map
- [Menu](${SITE}/#menu): every dish with prices
- [Story](${SITE}/#story): how AKIRA started and who runs it
- [Visit](${SITE}/#visit): address, phone, hours and directions
- [Blog](${SITE}/blog/): notes from the counter

## Blog posts

${posts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.excerpt}`).join('\n')}
`;
}

export function llmsTxt() {
  return `${facts()}\n${pages()}\n${menuText()}\nThe full text of every blog post is at ${SITE}/llms-full.txt\n`;
}

export function llmsFullTxt() {
  const body = posts
    .map((p) => {
      const text = p.body
        .map((b) => (b.h2 ? `### ${b.h2}` : b.p ? plain(b.p) : b.list ? b.list.map((i) => `- ${plain(i)}`).join('\n') : ''))
        .filter(Boolean)
        .join('\n\n');
      return `## ${p.title}\n\n${SITE}/blog/${p.slug} (published ${p.date})\n\n${p.excerpt}\n\n${text}`;
    })
    .join('\n\n---\n\n');
  return `${facts()}\n${menuText()}\n# Blog\n\n${body}\n`;
}
