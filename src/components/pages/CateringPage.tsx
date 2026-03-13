import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Reveal from '@/components/Reveal';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const featured = [
  {
    img: IMG + 'Platters/Compo-Platter.jpeg',
    name: 'Vegetarian Platter',
    desc: 'A generous vegetarian platter with falafel, hummus, baba ganouj, tabbouleh, and more',
  },
  {
    img: IMG + 'Platters/Lamp-Chicken.jpeg',
    name: 'Meat Platter',
    desc: 'A hearty meat platter with shawarma, chicken kebob, and all the fixings',
  },
  {
    img: IMG + 'Sides/FalafelBox.jpeg',
    name: 'Falafel Station',
    desc: 'A DIY falafel station with all the toppings — let your guests build their own',
  },
];

const categories = [
  {
    id: 'trays',
    label: 'Trays',
    subtitle: 'Large catering trays perfect for any event or gathering',
    items: [
      { name: 'Vegetarian Platter', desc: 'Falafel, hummus, baba ganouj, tabbouleh, grape leaves, and pita bread', popular: true },
      { name: 'Meat Platter', desc: 'Shawarma, chicken kebob, seasoned rice, hummus, salad, and pita bread' },
    ],
  },
  {
    id: 'sandwich-trays',
    label: 'Sandwich Trays',
    subtitle: 'Trays of our signature sandwiches, available in 10 or 24 packs',
    items: [
      { name: 'Falafel Tray (10/24 Pack)', desc: 'Crispy falafel sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce' },
      { name: 'Chicken Tray (10/24 Pack)', desc: 'Chicken kebob sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce' },
      { name: 'Shawarma Tray (10/24 Pack)', desc: 'Shawarma sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce' },
    ],
  },
  {
    id: 'stations',
    label: 'Stations',
    subtitle: 'DIY sandwich stations with all the fixings — let your guests build their own',
    items: [
      { name: 'Falafel Station', desc: 'Crispy falafel with pita, lettuce, tomatoes, onions, tahineh, and hot sauce', popular: true },
      { name: 'Chicken Station', desc: 'Grilled chicken kebob with pita, lettuce, tomatoes, onions, tahineh, and hot sauce' },
      { name: 'Shawarma Station', desc: 'Thinly sliced shawarma with pita, lettuce, tomatoes, onions, tahineh, and hot sauce' },
    ],
  },
  {
    id: 'side-trays',
    label: 'Side Trays',
    subtitle: 'Large trays of our most popular sides',
    items: [
      { name: 'Falafel Tray 30pc', desc: '30 pieces of our crispy, golden falafel' },
      { name: 'Hummus / Baba Ganouj', desc: 'Large tray of our home-made hummus or roasted eggplant baba ganouj' },
      { name: 'Tabbouleh', desc: 'Bulgur wheat salad with finely chopped mint, parsley, garlic, onions, and peppers' },
      { name: 'Seasoned Rice', desc: 'Large tray of our signature seasoned rice' },
      { name: 'Seasoned Fries', desc: 'Large tray of our seasoned fries with our special blend of spices' },
    ],
  },
  {
    id: 'pastries-drinks',
    label: 'Pastries & Drinks',
    subtitle: 'Sweet treats and refreshing drinks for your event',
    items: [
      { name: 'Baklava Walnuts 72pc', desc: '72 pieces of traditional fillo dough baklava stuffed with walnuts' },
      { name: 'Baklava Pistachios 72pc', desc: '72 pieces of traditional fillo dough baklava stuffed with pistachios' },
      { name: 'Specialty Drinks 1gal', desc: 'One gallon of your choice: mint lemonade, mango, tamarind, or iced tea' },
    ],
  },
  {
    id: 'extras',
    label: 'Extra Sides',
    subtitle: 'Add-ons and extras to complete your catering order',
    items: [
      { name: 'Hot Sauce', desc: 'Spicy sauce made from the finest, imported hot pepper spices' },
      { name: 'Tahineh Sauce', desc: 'Smooth sesame seed-based sauce' },
      { name: 'Garlic Sauce', desc: 'Savory, garlic infused sauce' },
      { name: 'Bag of Pita Bread', desc: '6 pieces; baked fresh in-house daily' },
    ],
  },
];

export default function CateringPage() {
  useEffect(() => { document.title = 'Catering | OMGyro Halal'; }, []);
  const [activeTab, setActiveTab] = useState('trays');

  const activeCat = categories.find(c => c.id === activeTab)!;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section
        className="relative py-32 px-4 flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #000 60%, #FF6600 100%)' }}
      >
        <Reveal>
          <span className="text-primary font-heading uppercase tracking-widest text-sm">Book Your Event</span>
          <h1 className="font-display text-6xl md:text-8xl uppercase text-white mt-3 mb-6">Catering</h1>
          <p className="font-paragraph text-white/70 max-w-lg mx-auto text-lg mb-8">
            Pick a category below and explore our catering options.
          </p>
          <a
            href="https://omgyrohalal.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/40"
          >
            Order Online <i className="fa-solid fa-arrow-right" />
          </a>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">Top Picks</span>
            <h2 className="font-display text-5xl uppercase text-brand-black mt-2">Catering Favorites</h2>
            <p className="font-paragraph text-foreground/60 mt-4">The items everyone keeps ordering for their events</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map(({ img, name, desc }, i) => (
              <Reveal key={name} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="h-52 overflow-hidden">
                    <img src={img} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-brand-black text-lg mb-2">{name}</h3>
                    <p className="font-paragraph text-foreground/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Catering Menu with Tabs */}
      <section id="menus" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">Full Menu</span>
            <h2 className="font-display text-5xl uppercase text-brand-black mt-2">Catering Menu</h2>
          </Reveal>

          {/* Tab buttons */}
          <Reveal>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={
                    'font-heading font-semibold px-5 py-2 rounded-full text-sm transition-all duration-200 ' +
                    (activeTab === cat.id
                      ? 'bg-primary text-white shadow-md shadow-primary/30'
                      : 'bg-secondary text-foreground hover:bg-brand-black hover:text-white')
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active category */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-8">
            <div className="mb-8">
              <h3 className="font-display text-3xl uppercase text-brand-black">{activeCat.label}</h3>
              <p className="font-paragraph text-foreground/60 mt-1">{activeCat.subtitle}</p>
            </div>
            <div className="space-y-4">
              {activeCat.items.map(({ name, desc, popular }) => (
                <div key={name} className={'flex items-start gap-4 p-4 rounded-xl border transition-colors ' + (popular ? 'border-primary/30 bg-primary/5' : 'border-border hover:border-primary/20')}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <i className="fa-solid fa-check text-primary text-xs" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-heading font-bold text-brand-black text-base">{name}</h4>
                      {popular && (
                        <span className="font-heading text-xs font-semibold bg-primary text-white px-2 py-0.5 rounded-full">Popular</span>
                      )}
                    </div>
                    <p className="font-paragraph text-foreground/60 text-sm mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-20 px-4 text-center">
        <Reveal>
          <h2 className="font-display text-5xl uppercase text-white mb-4">Ready to Book?</h2>
          <p className="font-paragraph text-white/60 mb-8 max-w-sm mx-auto">Order online or contact us to put together a custom menu for your event.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://omgyrohalal.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1"
            >
              Order Online <i className="fa-solid fa-arrow-right" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-heading font-semibold px-10 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
            >
              Get a Custom Quote
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
