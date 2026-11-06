/* ============================================================================
   AKIRA — blog posts
   Newest first. Each post gets its own address: /blog/<slug>.
   Body blocks: { h2 }, { p }, { list: [...] } or { img, alt }. Prices follow the printed menu.
   Text in p and list items may link with [words](url): /#menu, /blog/<slug>, or a full URL.
   seoTitle (optional) replaces "<title> | AKIRA blog" in search results and link previews.
   ========================================================================== */

export const blog = {
  title: 'Notes from the counter',
  kana: 'ブログ',
  lede: 'Bowls, small plates and how to eat them, from a ramen bar in South Kolkata.',
  photo: '/community/sakura.jpg',
  photoAlt: 'A hand-painted red dragon on the wall with AKIRA written down its body',
};

export const posts = [
  {
    slug: 'unauthentic-japanese-food-kolkata',
    title: 'Unauthentic, on purpose',
    seoTitle: 'Unauthentic Japanese Food in Kolkata, on Purpose | AKIRA',
    date: '2026-11-06',
    excerpt: 'AKIRA is a Japanese restaurant in Kolkata that will never call itself authentic. Here is why, and what we cook instead.',
    photo: '/dishes/small-plates.jpg',
    photoAlt: 'Dumplings on a black plate, picked up with wooden chopsticks, manga spines behind',
    body: [
      { p: 'Every Japanese restaurant in Kolkata wants to tell you it is authentic. We are not going to. AKIRA is Japanese food cooked in Kolkata, by people in Kolkata, with what Kolkata has. That is not a weakness we hide. It is the point.' },
      { h2: 'Why authentic is the wrong promise' },
      { p: 'A bowl of ramen in Japan starts long before the kitchen. The water is different. The wheat that goes into the noodles is different. The pork, the seaweed, the dried fish, the soy, the miso: all of it grows, ages and tastes different there. You can fly some of it in, but a bowl built from packets is a souvenir, not a meal.' },
      { p: 'So we stopped chasing a copy of somewhere else and started cooking for the city we are in.' },
      { h2: 'What we promise instead' },
      { list: [
        'Fresh ingredients, every service. Nothing that has been sitting around waiting to be authentic.',
        'Noodles made by hand and broth built in-house, for [every bowl on the menu](/#menu).',
        'Japanese technique, cooked with honesty about where we are.',
      ] },
      { h2: 'Unauthentic, and proud of it' },
      { p: 'Look at the menu and you will see the liberties we take. Cream cheese mushroom gyoza. Garlic butter prawn yakitori. Mango sticky rice sushi for dessert. Oren, a citrus cooler with cherry blossom notes. None of it would pass a purity test in Tokyo. All of it tastes like a Friday night in Kasba.' },
      { p: 'The classics are here too, done our way: shoyu, spicy miso and tonkotsu. If you are new to them, start with [shoyu, miso or tonkotsu?](/blog/shoyu-miso-or-tonkotsu) and then read [how to eat ramen](/blog/how-to-eat-ramen) before your first bowl.' },
      { h2: 'What stays Japanese' },
      { p: 'Unauthentic does not mean careless. A bowl of ramen has a structure, and we keep it: a broth, a seasoning that gives it its name, noodles with a proper bite, and toppings that each earn their place. Shoyu is still soy. Miso is still fermented soybean. Tonkotsu is still pork bone. What changes is everything that grows, swims or ripens differently on this side of the world.' },
      { p: 'The same goes for the small plates. Gyoza are still pan-fried dumplings, yakitori are still skewers off the flame, karaage is still crisp Japanese fried chicken. [Ordering for the table](/blog/ordering-for-the-table) explains each one.' },
      { h2: 'Questions people ask us' },
      { list: [
        'Is AKIRA an authentic Japanese restaurant? No, and we say so proudly. We cook Japanese dishes with fresh ingredients from here rather than pretend to be in Tokyo.',
        'What does a bowl of ramen cost? ₹329 for shoyu, ₹349 for spicy miso and ₹369 for tonkotsu. Small plates start at ₹149. Everything is on [the menu](/#menu).',
        'Where is AKIRA? 34 Naskarpara Road, Kolkata 700078, in Kasba just off Garfa Main Road. [Open it in Google Maps](https://maps.app.goo.gl/2WhihfqfnKz7q7Qw9).',
      ] },
      { h2: 'Judge the bowl, not the label' },
      { p: 'We would rather you told us a bowl was great than told us it was correct. Come and decide for yourself at 34 Naskarpara Road, just off Garfa Main Road. [Find us on Google Maps](https://maps.app.goo.gl/2WhihfqfnKz7q7Qw9), read [our story](/#story), or see [the full menu](/#menu) first.' },
    ],
  },
  {
    slug: 'fresh-ingredients-handmade-ramen',
    title: 'Fresh beats imported',
    seoTitle: 'Fresh Ingredients, Handmade Ramen in Kolkata | AKIRA',
    date: '2026-11-06',
    excerpt: 'Our food philosophy fits in one line: cook with what is fresh. Why that matters more for ramen in Kolkata than any imported label.',
    photo: '/community/kitchen.jpg',
    photoAlt: 'Knives on a magnetic strip in the AKIRA kitchen',
    body: [
      { p: 'Our food philosophy is simple enough to fit on a napkin: use fresh ingredients. Everything else on this page is that sentence, explained. It is also why we think AKIRA serves some of the most honest ramen in Kolkata.' },
      { h2: 'Fresh over famous' },
      { p: 'A famous ingredient that has travelled for weeks has lost what made it worth the trip. A fresh one from close by still has everything to give. Given the choice, we pick fresh every time, and we build the bowl around it rather than the other way round.' },
      { h2: 'What fresh means in a bowl of ramen' },
      { list: [
        'Noodles made by hand, so the bite is ours and not a factory\'s.',
        'Broth built in-house, not poured from a carton.',
        'Fresh vegetables in every bowl, with egg and your choice of meat.',
        'Skewers charred over the flame and brushed with our house chashu glaze.',
      ] },
      { img: '/dishes/ramen.jpg', alt: 'A bowl of ramen on a red stool, with wooden chopsticks across the rim' },
      { h2: 'Fresh food does not wait' },
      { p: 'Fresh food is best the moment it lands, which is why we tell people to eat ramen hot and fast. Our short guide on [how to eat ramen](/blog/how-to-eat-ramen) covers the rest: sip the broth first, slurp, and finish the bowl.' },
      { h2: 'Why fresh matters more than famous' },
      { p: 'People ask why we do not import more. The honest answer: an ingredient that has crossed oceans has spent its best days in transit, and the bowl tastes like it. We would rather cook with what is fresh and good here, and be open that our ramen tastes of Kolkata as much as of Japan. That is the same reason we call ourselves [unauthentic, on purpose](/blog/unauthentic-japanese-food-kolkata).' },
      { h2: 'Questions people ask us' },
      { list: [
        'Are the noodles handmade? Yes. Every bowl of ramen at AKIRA is made with handmade noodles.',
        'Is the broth made in-house? Yes, the broth is built in our own kitchen.',
        'Is there something for vegetarians? Yes: cream cheese mushroom gyoza, mushroom yakitori and the grilled miso mushroom donburi are all on [the menu](/#menu).',
      ] },
      { h2: 'Taste it for yourself' },
      { p: 'Start with a bowl, add a plate of gyoza, and work out the rest with [ordering for the table](/blog/ordering-for-the-table). Every price is on [the menu](/#menu). We are open until midnight Sunday to Wednesday and until 1:30 am Thursday to Saturday; [get directions on Google Maps](https://maps.app.goo.gl/2WhihfqfnKz7q7Qw9) or follow new plates on [Instagram](https://instagram.com/_simply_akira_).' },
    ],
  },
  {
    slug: 'bold-unapologetic-japanese-restaurant-kasba',
    title: 'Loud, late, unapologetic',
    seoTitle: 'A Bold, Unapologetic Japanese Restaurant in Kasba | AKIRA',
    date: '2026-11-06',
    excerpt: 'Godzilla on the sign, a dragon on the wall, red stools and a kitchen open late. Why AKIRA refuses to be a quiet Japanese restaurant.',
    photo: '/community/sakura.jpg',
    photoAlt: 'A hand-painted red dragon on the wall with AKIRA written down its body',
    body: [
      { p: 'Most people picture a Japanese restaurant as hushed: pale wood, soft light, whispered orders. AKIRA is not that, and never will be. Our Japanese restaurant in Kasba is loud, late and completely unapologetic about it.' },
      { h2: 'Built from anime and street culture' },
      { p: 'The room takes its cue from anime and Japanese street culture rather than a tearoom. Godzilla and a daruma glow on the sign boxes outside. A hand-painted dragon runs down the wall with AKIRA written along its body. Walls papered in Japanese posters, red stools at the tables. You can see it all in [our community photos](/#community).' },
      { img: '/community/street-signs.jpg', alt: 'Lit sign boxes outside AKIRA: Godzilla, the AKIRA logo and a noodle bowl' },
      { h2: 'Bold food, no apologies' },
      { p: 'The same attitude runs through the kitchen. The spicy miso ramen comes with a bold spicy kick and we do not tone it down. We call ourselves unauthentic and mean it as a compliment; read [why we are unauthentic, on purpose](/blog/unauthentic-japanese-food-kolkata). And we cook with fresh ingredients because [fresh beats imported](/blog/fresh-ingredients-handmade-ramen).' },
      { h2: 'Open when the city winds down' },
      { p: 'Most of our tables arrive after eight. We stay open until midnight Sunday to Wednesday and until 1:30 am Thursday to Saturday, so a bowl of ramen in Kolkata does not have to end at ten. More on that in [late-night ramen in Kolkata](/blog/late-night-ramen-in-kolkata).' },
      { h2: 'Questions people ask us' },
      { list: [
        'Is AKIRA open late? Yes: until midnight Sunday to Wednesday, and until 1:30 am Thursday to Saturday.',
        'Do I need to book? Walk-ins are welcome. For a large group, call ahead on 91636 77724; the room is small and the late tables go fast.',
        'Where exactly is it? 34 Naskarpara Road, Kolkata 700078: Haltu and Garfa, in Kasba, just off Garfa Main Road. [Get directions](https://maps.app.goo.gl/2WhihfqfnKz7q7Qw9).',
      ] },
      { h2: 'Not for everyone, and that is fine' },
      { p: 'We would rather be someone\'s favourite than everyone\'s safe choice. If that sounds like your kind of place, come in: 34 Naskarpara Road, Kasba, off Garfa Main Road. [See us on Google Maps](https://maps.app.goo.gl/2WhihfqfnKz7q7Qw9), check [the menu](/#menu), [plan your visit](/#visit), or call 91636 77724 if you are bringing a crowd.' },
    ],
  },
  {
    slug: 'late-night-ramen-in-kolkata',
    title: 'Late-night ramen in Kolkata',
    date: '2026-11-06',
    excerpt: 'Open until 1:30 am Thursday to Saturday and midnight the rest of the week: where to find us after dark in Kasba, and what to order.',
    photo: '/hero/street-front-1200.jpg',
    photoAlt: 'The AKIRA street front at night: lit sign boxes of a ramen bowl, a daruma, Godzilla and 麺道 above the AKIRA fascia',
    body: [
      { p: 'Most of Kolkata winds down by eleven. Our kitchen does not. AKIRA is a Japanese ramen restaurant in Kasba, and most of our tables fill after eight.' },
      { h2: 'Our hours' },
      { list: ['Sunday to Wednesday: 4 pm to 12 am.', 'Thursday to Saturday: 5 pm to 1:30 am.'] },
      { h2: 'Where we are' },
      { p: '34 Naskarpara Road, Kolkata 700078, in Kasba just off Garfa Main Road, between Kasba and Jadavpur. Look for the lit sign boxes: a ramen bowl, a daruma and Godzilla above the AKIRA fascia.' },
      { img: '/community/late-night.jpg', alt: 'A plate held in front of an AKIRA apron' },
      { h2: 'What to order late' },
      { list: [
        'A bowl of ramen: shoyu (₹329), spicy miso (₹349) or tonkotsu (₹369).',
        'Gyoza to share, from ₹180.',
        'Karaage, crisp Japanese fried chicken, from ₹230.',
        'A dora cake to finish, ₹149.',
      ] },
      { h2: 'Coming as a group?' },
      { p: 'Walk-ins are welcome. The room is small and the late tables go fast, so for a large group, call ahead on 91636 77724.' },
    ],
  },
  {
    slug: 'shoyu-miso-or-tonkotsu',
    title: 'Shoyu, miso or tonkotsu?',
    date: '2026-11-06',
    excerpt: 'Three bowls, three broths. What sets each one apart, and which to order first.',
    photo: '/dishes/ramen-overhead.jpg',
    photoAlt: 'A bowl of ramen from above: creamy broth, minced meat, chilli oil, bok choy, mushrooms and a halved soft egg',
    body: [
      { p: 'Every bowl at AKIRA starts with the same handmade noodles. What changes is the broth, and the broth decides the bowl. Here is how our three differ.' },
      { h2: 'Akira Shoyu Ramen, ₹329' },
      { p: 'Shoyu means soy sauce. It makes a clear, savoury broth, the lightest of the three and the classic place to start. Ours comes with handmade noodles, egg, fresh vegetables and your choice of meat.' },
      { h2: 'Akira Spicy Miso Ramen, ₹349' },
      { p: 'Miso is fermented soybean paste, and it gives a broth that is thicker, nuttier and deeper than shoyu. We add a bold spicy kick. If you like heat, this is your bowl.' },
      { img: '/dishes/ramen.jpg', alt: 'A bowl of ramen on a red stool, with wooden chopsticks across the rim' },
      { h2: 'Akira Tonkotsu, ₹369' },
      { p: 'Tonkotsu is a pork-bone broth, rich, creamy and opaque. It is the most filling of the three, served with tender pork, fresh vegetables and a perfectly cooked egg.' },
      { h2: 'So which one first?' },
      { list: ['Light and classic: shoyu.', 'Heat: spicy miso.', 'Rich and filling: tonkotsu.'] },
      { p: 'Coming back? Work through all three.' },
    ],
  },
  {
    slug: 'how-to-eat-ramen',
    title: 'How to eat ramen',
    date: '2026-11-06',
    excerpt: 'Sip the broth, slurp the noodles, finish the bowl: a short guide to eating your first bowl of ramen at a Japanese restaurant in Kolkata.',
    photo: '/dishes/ramen.jpg',
    photoAlt: 'A bowl of ramen on a red stool, with wooden chopsticks across the rim',
    body: [
      { p: 'Ramen is made to be eaten hot. The noodles keep softening in the broth, so the first few minutes are the best ones. A few habits help.' },
      { h2: 'Start with the broth' },
      { p: 'Before anything else, take a sip from the spoon. It tells you what the bowl is about.' },
      { h2: 'Slurp' },
      { p: 'In Japan, slurping is not rude. Drawing the noodles in with a little air cools them on the way and brings the broth along. The sound even has a word: zuru zuru, ズルズル.' },
      { img: '/community/red-stools.jpg', alt: 'A bowl of ramen on a table beside a red stool' },
      { h2: 'Use the chopsticks and the spoon together' },
      { p: 'Lift a few noodles with the chopsticks and rest them on the spoon. You get noodles and broth in the same bite, and your shirt stays clean.' },
      { h2: 'Take the photo, then eat' },
      { p: 'A bowl waits for a picture, not for a long conversation. The noodles will not hold their bite for ever.' },
      { h2: 'Finish the bowl' },
      { p: 'Drinking the last of the broth is the best compliment you can pay the kitchen.' },
    ],
  },
  {
    slug: 'ordering-for-the-table',
    title: 'Ordering for the table',
    date: '2026-11-06',
    excerpt: 'What gyoza, yakitori, karaage and donburi are, and how to build a table for two or for four at a Japanese ramen restaurant.',
    photo: '/dishes/gyoza.jpg',
    photoAlt: 'Pan-fried gyoza topped with spring onion on a long black plate, with pickled ginger',
    body: [
      { p: 'Ramen is the reason to come, but the small plates are how a table settles in. Our rule of thumb: order two for the table.' },
      { h2: 'The small plates, explained' },
      { list: [
        'Gyoza: pan-fried Japanese dumplings filled with meat and vegetables, with a tangy dipping sauce. Chicken, pork, or cream cheese mushroom.',
        'Yakitori: Japanese skewers charred over the flame and brushed with our house chashu glaze. Mushroom, chicken, pork or garlic butter prawn.',
        'Karaage: crisp Japanese fried chicken (or prawn), served hot with a dipping sauce.',
        'Donburi: a bowl of steamed rice with a topping on it. Ours come with chicken karaage or grilled miso mushroom.',
      ] },
      { h2: 'For two' },
      { list: ['Two bowls of ramen.', 'A plate of gyoza: five pieces, from ₹180.', 'Yakitori to share: two skewers, from ₹149.'] },
      { h2: 'For four' },
      { list: ['Four bowls, or three bowls and a donburi, from ₹349.', 'Gyoza and karaage: three pieces, from ₹230.', 'Two rounds of yakitori.'] },
      { img: '/dishes/karaage.jpg', alt: 'A plate of crisp fried karaage handed across the pass' },
      { h2: 'Something to drink' },
      { p: 'Oren, our signature citrus cooler with cherry blossom notes (₹149), Sakura (₹169), or Raimu Soda, a Japanese lime soda (₹169).' },
      { h2: 'And to finish' },
      { p: 'Dora cake, a soft Japanese pancake with whipped cream (₹149), coffee jelly (₹139), or mango sticky rice sushi (₹129).' },
      { h2: 'Vegetarian?' },
      { p: 'Ask for the cream cheese mushroom gyoza, the mushroom yakitori and the grilled miso mushroom donburi.' },
    ],
  },
];

const WORDS_PER_MINUTE = 200;

export function readingTime(post) {
  const text = post.body.map((b) => b.p || b.h2 || (b.list || []).join(' ')).join(' ').replace(/\]\([^)]*\)/g, ' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / WORDS_PER_MINUTE));
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00+05:30`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

export const pageTitle = (post) => post.seoTitle || `${post.title} | AKIRA blog`;
