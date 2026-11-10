/* ============================================================================
   AKIRA — site content
   Single source of truth for every string on the page.

   Prices below are transcribed verbatim from the printed menu PDF (Aug 2026).
   POS bills differ on a few lines; the printed menu is treated as canonical.
   ========================================================================== */

export const venue = {
  streetAddress: '34 Naskarpara Road',
  area: 'Kasba, off Garfa Main Road',
  city: 'Kolkata 700078',
  phone: '91636 77724',
  phoneHref: 'tel:+919163677724',
  mapsUrl: 'https://maps.app.goo.gl/2WhihfqfnKz7q7Qw9',
  email: 'management@simplyakira.com',
  /* days: 0 is Sunday. open and close are minutes from that day's midnight,
     so a close past 1440 runs into the next morning. */
  hours: [
    { label: 'Sunday to Wednesday', time: '4 pm to 12 am', days: [0, 1, 2, 3], open: 960, close: 1440 },
    { label: 'Thursday to Saturday', time: '5 pm to 1:30 am', days: [4, 5, 6], open: 1020, close: 1530 },
  ],
};

export const brand = {
  name: 'AKIRA',
  katakana: 'アキラ',
  instagram: '@_simply_akira_',
  instagramUrl: 'https://instagram.com/_simply_akira_',
};

export const nav = {
  links: [
    { label: 'Menu', href: '/#menu' },
    { label: 'Story', href: '/#story' },
    { label: 'Community', href: '/#community' },
    { label: 'Blog', href: '/blog/' },
  ],
  cta: { label: 'Visit us', href: '/#visit' },
};

export const hero = {
  title: 'Handmade ramen',
  lede: 'A Japanese ramen bar in Kasba, South Kolkata: shoyu, spicy miso and tonkotsu bowls from ₹329, and skewers off the charcoal.',
  photoAlt:
    'The AKIRA street front at night: lit sign boxes of a ramen bowl, a daruma, Godzilla and 麺道 above the AKIRA fascia',
  ctas: {
    primary: { label: 'See the menu', href: '#menu' },
    secondary: { label: 'Find us', href: '#visit' },
  },
};

/* Marquee: English + katakana pairs, duplicated in the component */
export const marquee = [
  { en: 'HANDMADE NOODLES', jp: '手打ち麺' },
  { en: 'SPICY MISO', jp: 'ピリ辛味噌' },
  { en: 'CHARCOAL YAKITORI', jp: '焼き鳥' },
  { en: 'PORK GYOZA', jp: '餃子' },
  { en: 'KARAAGE', jp: '唐揚げ' },
  { en: 'DORA CAKE', jp: 'どら焼き' },
  { en: 'OPEN LATE', jp: '深夜まで' },
];

/* Night mode adds these to the band, up front. */
export const marqueeNight = [
  { en: 'NIGHT CRAWLERS WELCOME', jp: '夜更かし歓迎' },
  { en: 'OPEN TILL 1:30 AM THU–SAT', jp: '木〜土 深夜1時半まで' },
];

export const story = {
  kana: 'ストーリー',
  heading: 'Worth coming\nback for',
  prose: [
    'AKIRA opened in Kolkata in July 2026 with one idea: modern Japan, made approachable. Handmade noodles, broth built in-house, fresh ingredients. Nothing precious, nothing intimidating.',
    'The room takes its cue from anime and Japanese street culture rather than a tearoom. It is warm, a little loud, and built for the ritual: a bowl, a plate of gyoza, a skewer off the charcoal, a Sakura, and a dora cake to finish.',
    'Most of our tables are twos and small groups, and most of them arrive after eight. That is the room we cook for: Kolkata looking for somewhere to land on a weeknight, and somewhere to bring people on a weekend.',
  ],
  founders: [
    {
      name: 'Aditya Paith',
      role: 'Co-founder & Executive Chef',
      bio: 'Runs the kitchen: the noodles, the broths and the charcoal.',
      photo: '/founders/aditya-paith.jpg',
    },
    {
      name: 'Shopno Banerjee',
      role: 'Co-founder & Operations Manager',
      bio: 'Runs everything outside the kitchen: the numbers, the marketing and the press.',
      photo: '/founders/shopno-banerjee.jpg',
    },
  ],
};

export const menu = {
  kana: 'メニュー',
  heading: 'The menu',
  lede: 'Three bowls, a charcoal grill and a short list of things to share.',
  ramen: {
    label: 'Ramen',
    jp: 'ラーメン',
    photos: [
      { src: '/dishes/ramen.jpg', alt: 'A bowl of ramen on a red stool: soft egg, charred pork, greens and spring onion, with wooden chopsticks across the rim' },
      { src: '/dishes/ramen-overhead.jpg', alt: 'A bowl of ramen from above: creamy broth, minced meat, chilli oil, bok choy, mushrooms and a halved soft egg' },
    ],
    items: [
      {
        name: 'Akira Shoyu Ramen',
        price: 329,
        desc: 'Classic soy ramen with handmade noodles, rich broth, egg, fresh vegetables, and choice of meat.',
      },
      {
        name: 'Akira Spicy Miso Ramen',
        price: 349,
        desc: 'Handmade noodles in rich miso broth, fresh vegetables, choice of meat, and a bold spicy kick.',
        badge: 'Spicy',
        flagship: true,
      },
      {
        name: 'Akira Tonkotsu',
        price: 369,
        desc: 'Rich, creamy tonkotsu broth with handmade noodles, tender pork, fresh vegetables, and perfectly cooked egg.',
      },
    ],
  },
  plates: {
    label: 'Small plates',
    jp: '小皿',
    note: 'Order two for the table.',
    categories: [
      {
        name: 'Gyoza',
        jp: '餃子',
        photo: '/dishes/gyoza.jpg',
        photoAlt: 'Pan-fried gyoza topped with spring onion on a long black plate, with pickled ginger',
        desc: 'Pan-fried Japanese dumplings filled with savoury meat and vegetables, served with a tangy dipping sauce.',
        from: 180,
        items: [
          { name: 'Chicken (five pcs)', price: 180 },
          { name: 'Pork (five pcs)', price: 200 },
          {
            name: 'Cream Cheese Mushroom (five pcs)',
            price: 180,
            note: 'Vegetarian',
          },
        ],
      },
      {
        name: 'Yakitori',
        jp: '焼き鳥',
        desc: 'Japanese-style skewers flame-charred to perfection, brushed with our house-made chashu glaze for a smoky, sweet-umami finish.',
        from: 149,
        items: [
          { name: 'Mushroom (two skewers)', price: 149 },
          { name: 'Chicken (two skewers)', price: 190 },
          { name: 'Pork (two skewers)', price: 220 },
          { name: 'Garlic Butter Prawn (two skewers)', price: 250 },
        ],
      },
      {
        name: 'Karaage',
        jp: '唐揚げ',
        photo: '/dishes/karaage.jpg',
        photoAlt: 'A plate of crisp fried karaage handed across the pass',
        desc: 'Crispy Japanese fried chicken, golden and juicy, seasoned perfectly, served hot with a tangy dipping sauce.',
        from: 230,
        items: [
          { name: 'Chicken (three pcs)', price: 230 },
          { name: 'Prawn (three pcs)', price: 330 },
        ],
      },
      {
        name: 'Donburi',
        jp: '丼',
        desc: 'A hearty bowl of steamed rice topped with your choice of savoury meat, vegetables, and sauce.',
        from: 349,
        items: [
          { name: 'Chicken Karaage', price: 349 },
          { name: 'Grilled Miso Mushroom', price: 360 },
        ],
      },
    ],
  },
  drinks: {
    label: 'Drinks & sweets',
    jp: 'ドリンク・デザート',
    groups: [
      {
        name: 'Drinks',
        items: [
          {
            name: 'Oren',
            price: 149,
            desc: 'Signature sparkling citrus cooler with cherry blossom notes: orange, lemon and honey.',
          },
          {
            name: 'Sakura',
            price: 169,
            desc: 'Cherry blossom, lightly sweet and floral.',
          },
          {
            name: 'Raimu Soda',
            price: 169,
            desc: 'Japanese lime soda: sparkling, tangy, lightly sweet.',
          },
        ],
      },
      {
        name: 'Dessert',
        items: [
          {
            name: 'Dora Cake',
            price: 149,
            desc: 'Soft Japanese pancake filled with light whipped cream.',
          },
          {
            name: 'Coffee Jelly',
            price: 139,
            desc: 'Chilled coffee jelly cubes with creamy topping.',
          },
          {
            name: 'Mango Sticky Rice Sushi',
            price: 129,
            desc: 'Sweet sticky rice, ripe mango, creamy coconut sauce.',
          },
        ],
      },
    ],
  },
  allergens:
    'Please tell us about allergens before ordering: celery, lupin, mustard, molluscs, crustaceans, milk, sesame seeds, soya, nuts, peanuts, eggs, gluten.',
};

export const community = {
  kana: 'コミュニティ',
  heading: 'Built for the\nlate table',
  prose:
    'Paper lanterns, walls papered in Japanese posters, a hand-painted dragon and red stools at the tables. Most of the room fills after eight, and from Thursday to Saturday the kitchen keeps going until 1:30 am. New plates show up on Instagram first.',
  cta: {
    label: 'Follow @_simply_akira_',
    href: 'https://instagram.com/_simply_akira_',
  },
  /* First photo is the tall one in the mosaic. */
  tiles: [
    { label: 'Small plates', photo: '/dishes/small-plates.jpg', alt: 'Dumplings on a black plate, picked up with wooden chopsticks, manga spines behind' },
    { label: 'The dragon', photo: '/community/sakura.jpg', alt: 'A hand-painted red dragon on the wall with AKIRA written down its body' },
    { label: 'The kitchen', photo: '/community/kitchen.jpg', alt: 'Knives on a magnetic strip in the AKIRA kitchen' },
    { label: 'Red stools', photo: '/community/red-stools.jpg', alt: 'A bowl of ramen on a table beside a red stool' },
    { label: 'After dark', photo: '/community/late-night.jpg', alt: 'A plate held in front of an AKIRA apron' },
  ],
};

export const partner = {
  kana: 'パートナー',
  heading: 'Partner\nwith us',
  prose:
    'AKIRA opened in July 2026 and runs on dine-in alone, at full price. We are opening conversations with operators and investors who know the Kolkata dining floor.',
  cta: { label: 'Talk to us' },
};

export const visit = {
  kana: 'アクセス',
  heading: 'Visit AKIRA',
  lede: 'In Kasba, just off Garfa Main Road. Walk-ins welcome; for large groups, call ahead: the room is small and the late tables go fast.',
};

export const footer = {
  line: '© 2026 AKIRA · Handmade ramen, Kolkata',
};

/* ---- Sushi tasting, Saturday 14 November ----------------------------------
   Paste the Google Form link into registerUrl. Until then the button opens a
   pre-filled email. The feature leaves the home page by itself after `until`. */
export const tasting = {
  registerUrl: 'https://forms.gle/RBnvg28rvdLz5NGU9',
  until: '2026-11-14',
  kana: '試食会',
  heading: 'Taste the\nsushi first',
  lede: 'A public tasting on Saturday, 14 November: every one of our new sushi rolls, plus a bowl of one of our two new ramens.',
  facts: [
    { label: 'When', text: 'Saturday, 14 November, in booked time slots' },
    { label: 'What', text: 'Every new sushi roll, and one of two new ramens' },
    { label: 'Entry', text: 'An entry fee applies; places are limited' },
    { label: 'Who', text: 'Non-vegetarian only. Fixed menu with fish, crab and prawn; no allergies accommodated' },
    { label: 'After', text: 'Made fresh daily: 10 plates a day on weekdays, 15 on weekends' },
  ],
  photo: '/blog/sushi/bhetki-flame.jpg',
  photoAlt: 'Five pieces of bhetki sushi on a black plate, seared with a blowtorch flame',
  post: '/blog/sushi-in-kolkata-akira',
};

const TASTING_EMAIL =
  'mailto:management@simplyakira.com?subject=' +
  encodeURIComponent('Sushi tasting slot, Saturday 14 November') +
  '&body=' +
  encodeURIComponent('Hi AKIRA,\n\nI would like to register for the sushi tasting on Saturday, 14 November.\n\nName:\nPhone:\nNumber of people:\nPreferred time:\n\nThanks!');

export const registerHref = tasting.registerUrl || TASTING_EMAIL;

/* Kolkata's date, so the feature switches off on time wherever the visitor is. */
export function tastingIsOn(now = new Date()) {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(now);
  return today <= tasting.until;
}
