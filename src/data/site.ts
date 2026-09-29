export const site = {
  name: 'EMBER',
  fullName: 'EMBER — Wood-Fired Kitchen',
  tagline: 'Everything we serve has met oak fire.',
  phone: '(303) 555-0147',
  phoneHref: 'tel:+13035550147',
  address: '2845 Blake Street, Denver, CO 80205',
  hours: [
    ['Tuesday – Thursday', '17:00 – 22:00'],
    ['Friday – Saturday', '17:00 – 23:00'],
    ['Sunday', '16:00 – 21:00'],
    ['Monday', 'Oven rests'],
  ],
  rating: '4.8',
  reviewCount: '1,200+',
};

export const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Tasting Club', href: '/tasting-club' },
  { label: 'Reserve', href: '/reserve' },
];

export type Dish = {
  slug: string;
  title: string;
  category: 'Starters' | 'Wood-Fired' | 'Mains' | 'Desserts' | 'Bar';
  price: number;
  excerpt: string;
  image: string;
  details: string[];
};

export const dishes: Dish[] = [
  {
    slug: 'burrata-ember-tomatoes',
    title: 'Burrata, Ember Tomatoes',
    category: 'Starters',
    price: 18,
    excerpt: 'Blistered on the coals, basil oil, grilled sourdough.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&auto=format&fit=crop',
    details: ['Creamy Puglian burrata', 'Coal-blistered heirlooms', 'Grilled sourdough to mop it up'],
  },
  {
    slug: 'charred-bone-marrow',
    title: 'Charred Bone Marrow',
    category: 'Starters',
    price: 21,
    excerpt: 'Parsley gremolata, pickled shallot, grilled bread.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop',
    details: ['Roasted in the hearth', 'Bright gremolata cuts the richness', 'Built for sharing, rarely shared'],
  },
  {
    slug: 'dry-aged-ribeye',
    title: '45-Day Dry-Aged Ribeye',
    category: 'Wood-Fired',
    price: 68,
    excerpt: 'Oak-fired, bone-marrow butter, smoked salt.',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80&auto=format&fit=crop',
    details: ['Dry-aged in house 45 days', 'Finished over white oak', 'Rested, sliced, marrow butter'],
  },
  {
    slug: 'cedar-plank-salmon',
    title: 'Cedar Plank Salmon',
    category: 'Wood-Fired',
    price: 38,
    excerpt: 'Charred lemon, brown butter, coal-roasted greens.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80&auto=format&fit=crop',
    details: ['Faroe Island salmon', 'Smoked on cedar over embers', 'Never overcooked, that is the point'],
  },
  {
    slug: 'chicken-al-mattone',
    title: 'Half Chicken al Mattone',
    category: 'Wood-Fired',
    price: 34,
    excerpt: 'Brick-pressed, rosemary jus, burnt lemon.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80&auto=format&fit=crop',
    details: ['Brined 24 hours', 'Pressed under brick in the oven', 'Shattering skin, juicy through'],
  },
  {
    slug: 'truffle-tagliatelle',
    title: 'Truffle Tagliatelle',
    category: 'Mains',
    price: 32,
    excerpt: 'Hand-cut pasta, parmigiano crema, black truffle.',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80&auto=format&fit=crop',
    details: ['Pasta rolled daily', 'Real black truffle, grated tableside', 'Vegetarian without asking'],
  },
  {
    slug: 'mushroom-risotto',
    title: 'Hearth Mushroom Risotto',
    category: 'Mains',
    price: 29,
    excerpt: 'Carnaroli rice, roasted maitake, aged parmesan.',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80&auto=format&fit=crop',
    details: ['Finished in the wood oven', 'Three mushrooms, one pan', 'Quietly the best thing here'],
  },
  {
    slug: 'basque-cheesecake',
    title: 'Burnt Basque Cheesecake',
    category: 'Desserts',
    price: 14,
    excerpt: 'Caramelized top, molten center, smoked honey.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80&auto=format&fit=crop',
    details: ['Baked hard and fast', 'Served barely warm', 'Smoked honey on the side'],
  },
  {
    slug: 'smoked-old-fashioned',
    title: 'Smoked Old Fashioned',
    category: 'Bar',
    price: 17,
    excerpt: 'Oak smoke trapped under glass, demerara, bitters.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80&auto=format&fit=crop',
    details: ['Smoked to order at the table', 'Small-batch bourbon', 'One is enough, two is dinner'],
  },
  {
    slug: 'fig-leaf-martini',
    title: 'Fig Leaf Martini',
    category: 'Bar',
    price: 16,
    excerpt: 'Fig-leaf gin, dry vermouth, lemon oils.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80&auto=format&fit=crop',
    details: ['Gin rested on toasted fig leaves', 'Stirred down, served up', 'The regulars order'],
  },
];

export const reviews = [
  { name: 'Marcus T.', context: 'Anniversary dinner', text: 'The ribeye alone is worth the trip. Smoke without a hint of gimmick.' },
  { name: 'Elena R.', context: 'Friday night', text: 'Sat at the hearth counter and watched everything hit fire. Theater and dinner.' },
  { name: 'Dev P.', context: 'Business dinner', text: 'Quiet enough to talk, good enough to impress. The risotto surprised us all.' },
  { name: 'Sofia L.', context: 'Date night', text: 'Smoked old fashioned arrived under glass. Best first five minutes in Denver.' },
  { name: 'James W.', context: 'Tasting Club', text: 'Four courses, zero misses. The Basque cheesecake haunts me.' },
  { name: 'Aiko N.', context: 'Sunday supper', text: 'Chicken al mattone with burnt lemon. Simple food, total confidence.' },
];

export const faqs = [
  { q: 'Do I need a reservation?', a: 'Walk-ins are welcome at the bar and hearth counter. The dining room books out most weekends, so reserve ahead for Friday and Saturday.' },
  { q: 'Is everything cooked over fire?', a: 'Nearly. One oak oven and one open hearth run the kitchen. Desserts and the bar borrow the smoke too.' },
  { q: 'Do you handle dietary restrictions?', a: 'Yes. Tell us when you book and the kitchen will adapt. Roughly a third of the menu is vegetarian or easily made so.' },
  { q: 'What is the corkage policy?', a: '$35 per bottle, waived for Tasting Club members. Our list leans Old World and low intervention.' },
  { q: 'Do you host private events?', a: 'The ember room seats 14. Buyouts up to 80. Write to events via the reserve form and we reply within a day.' },
];
