/* ============================================================================
   AKIRA — site content
   Single source of truth for every string on the page.

   FILL BEFORE LAUNCH — everything in `TODO` is a placeholder.
   Prices below are transcribed verbatim from the printed menu PDF (Aug 2026).
   POS bills differ on a few lines; the printed menu is treated as canonical.
   ========================================================================== */

export const TODO = {
  streetAddress: '[STREET ADDRESS]', // confirm with the floor; map pin sits near Kalikapur Rd, Kasba
  city: 'Kolkata, West Bengal',
  phone: '[PHONE]',
  mapsUrl: 'https://maps.app.goo.gl/2WhihfqfnKz7q7Qw9',
  partnerEmail: '[CONTACT EMAIL]',
  // Hours below are derived from 40 days of POS data (first bill ~4pm, last
  // ~00:30, peak 8-11pm). Confirm the posted hours before publishing.
  hours: [
    { days: 'Monday – Thursday', time: '5:00 pm – 11:30 pm' },
    { days: 'Friday – Sunday', time: '5:00 pm – 12:30 am' },
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
    { label: 'Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Community', href: '#community' },
    { label: 'Visit', href: '#visit' },
  ],
  cta: { label: 'Visit us', href: '#visit' },
};

export const hero = {
  kicker: 'KOLKATA · EST. 2026',
  logoAlt:
    'AKIRA — ramen bowl mascot with the AKIRA wordmark and アキラ in katakana',
  tagline:
    'Handmade ramen, charcoal skewers and a room that stays loud until midnight.',
  ctas: {
    primary: { label: 'See the menu', href: '#menu' },
    secondary: {
      label: '@_simply_akira_',
      href: 'https://instagram.com/_simply_akira_',
    },
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

/* Auto-scrolling signature rail. Tones cycle through the flat brand grounds. */
export const flavours = {
  label: 'What people order',
  cta: { label: 'See the full menu', href: '#menu' },
  items: [
    { name: 'Spicy Miso', jp: 'ピリ辛味噌', price: 349, tone: 'red', note: 'Regulars’ pick' },
    { name: 'Shoyu', jp: '醤油', price: 329, tone: 'paper' },
    { name: 'Tonkatsu', jp: '豚カツ', price: 369, tone: 'blue' },
    { name: 'Cream Cheese Gyoza', jp: '餃子', price: 180, tone: 'ink', note: 'Table favourite' },
    { name: 'Pork Yakitori', jp: '焼き鳥', price: 220, tone: 'red' },
    { name: 'Chicken Karaage', jp: '唐揚げ', price: 230, tone: 'paper' },
    { name: 'Sakura', jp: '桜', price: 169, tone: 'blue' },
    { name: 'Dora Cake', jp: 'どら焼き', price: 149, tone: 'ink' },
  ],
};

export const story = {
  eyebrow: 'ストーリー',
  heading: 'A bowl worth\ncoming back for',
  prose: [
    'AKIRA opened in Kolkata in July 2026 with one idea: modern Japan, made approachable. Handmade noodles, broth built in-house, fresh ingredients — nothing precious, nothing intimidating.',
    'The room takes its cue from anime and Japanese street culture rather than a tearoom. It is warm, a little loud, and built for the ritual: a bowl, a plate of gyoza, a skewer off the charcoal, a Sakura, and a dora cake to finish.',
    'Most of our tables are twos and small groups, and most of them arrive after eight. That is the room we cook for — young Kolkatans looking for somewhere to land on a weeknight, and somewhere to bring people on a weekend.',
  ],
  founders: [
    {
      name: '[CO-FOUNDER NAME]',
      role: 'Co-founder',
      bio: '[One-line bio — what they bring to AKIRA.]',
      accent: 'red',
      photo: null,
    },
    {
      name: 'Aditya Paith',
      role: 'Co-founder & Executive Chef',
      bio: 'Runs the kitchen — the noodles, the broths, and the charcoal.',
      accent: 'blue',
      photo: '/founders/aditya-paith.jpg',
    },
  ],
  ethos: ['Noodles made by hand', 'Broth built in-house', 'Open past midnight'],
};

export const menu = {
  eyebrow: 'メニュー',
  heading: 'The menu',
  lede: 'Three bowls, a charcoal grill and a short list of things to share. Prices exactly as printed on the menu.',
  ramen: {
    label: 'Ramen',
    jp: 'ラーメン',
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
        badge: 'Regulars’ pick',
        flagship: true,
      },
      {
        name: 'Akira Tonkatsu',
        price: 369,
        desc: 'Rich, creamy tonkotsu broth with handmade noodles, tender pork, fresh vegetables, and perfectly cooked egg.',
      },
    ],
    addons: {
      label: 'Add to any ramen or donburi',
      items: [
        { name: 'Grilled Mushroom', price: 40 },
        { name: 'Sausage (two quarter pcs)', price: 50 },
        { name: 'Fish Cake (two pcs)', price: 50 },
        { name: 'Chicken Yakitori (one skewer)', price: 105 },
        { name: 'Pork Yakitori (one skewer)', price: 125 },
        { name: 'Prawn Yakitori (one skewer)', price: 135 },
      ],
    },
  },
  plates: {
    label: 'Small plates',
    jp: '小皿',
    note: 'The till says these sell as hard as the bowls — order two for the table.',
    categories: [
      {
        name: 'Gyoza',
        jp: '餃子',
        desc: 'Pan-fried Japanese dumplings filled with savoury meat and vegetables, served with a tangy dipping sauce.',
        from: 180,
        items: [
          { name: 'Chicken (five pcs)', price: 180 },
          { name: 'Pork (five pcs)', price: 200 },
          {
            name: 'Cream Cheese Mushroom (five pcs)',
            price: 180,
            note: 'Table favourite',
          },
        ],
        addon: 'Add cheese or burnt garlic broth · ₹50',
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
            desc: 'Signature sparkling citrus cooler with cherry blossom notes — orange, lemon and honey.',
          },
          {
            name: 'Sakura',
            price: 169,
            desc: 'Cherry blossom, lightly sweet and floral.',
          },
          {
            name: 'Raimu Soda',
            price: 169,
            desc: 'Japanese lime soda — sparkling, tangy, lightly sweet.',
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
    'Please notify allergens before ordering — celery, lupin, mustard, molluscs, crustaceans, milk, sesame seeds, soya, nuts, peanuts, eggs, gluten.',
};

export const community = {
  eyebrow: 'コミュニティ',
  heading: 'Built for the\nlate table',
  prose:
    'AKIRA fills up after eight and empties out past midnight. Anime nights, birthdays that run long, the table of four that becomes six — the room does most of the programming itself, and Instagram is where it gets planned.',
  cta: {
    label: 'Follow @_simply_akira_',
    href: 'https://instagram.com/_simply_akira_',
  },
  /* `photo` falls back to the flat colour tile (tone) when not set. */
  tiles: [
    { label: 'The bowl', tone: 'white', photo: '/community/the-bowl.jpg' },
    { label: 'Charcoal', tone: 'red', photo: '/community/charcoal.jpg' },
    { label: 'The room', tone: 'ink', photo: '/community/the-room.jpg' },
    { label: 'Gyoza table', tone: 'ink', photo: '/community/gyoza-table.jpg' },
    { label: 'Sakura', tone: 'white', photo: '/community/sakura.jpg' },
    { label: 'Late night', tone: 'red', photo: '/community/late-night.jpg' },
  ],
};

export const partner = {
  eyebrow: 'パートナー',
  heading: 'Early, and\ngrowing fast',
  prose:
    'AKIRA is a few weeks old and already runs a full weekend service on dine-in alone — no aggregators, no discounting, no paid marketing. We are opening conversations with operators and investors who know the Kolkata dining floor.',
  /* Qualitative only. No revenue, no order counts — those live in the deck. */
  stats: [
    { word: 'Dine-in only', note: 'No aggregator revenue in the mix yet' },
    { word: 'Weekend-led', note: 'Friday to Sunday carries the room' },
    { word: 'Full-price', note: 'Growth without discounting' },
  ],
  cta: { label: 'Talk to us' },
};

export const visit = {
  eyebrow: 'アクセス',
  heading: 'Visit AKIRA',
  lede: 'Walk-ins welcome. Large groups, call ahead — the room is small and the late tables go fast.',
};

export const footer = {
  line: '© 2026 AKIRA · Handmade ramen, Kolkata',
};
