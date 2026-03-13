import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const sauces = [
  {
    name: 'Hot Sauce',
    desc: 'Our signature spicy sauce made from the finest, imported hot pepper spices. A bold kick that brings the heat.',
    tags: ['Smoky', 'Bold'],
    color: '#c0392b',
    icon: 'fa-solid fa-fire',
    img: IMG + 'Sauces/Hot-Sauce.png',
  },
  {
    name: 'OMG Sauce',
    desc: "The one that started it all. Our signature OMGYRO sauce — zesty, iconic, and guaranteed to make you say \"OMG.\"",
    tags: ['Zesty', 'Iconic'],
    color: '#FF6600',
    icon: 'fa-solid fa-star',
    img: IMG + 'Sauces/OMG-Sauce.png',
    featured: true,
  },
  {
    name: 'White Sauce',
    desc: 'A rich, creamy garlic sauce that pairs perfectly with every platter. Smooth and savory with every bite.',
    tags: ['Garlic', 'Rich'],
    color: '#f0e6c8',
    icon: 'fa-solid fa-droplet',
    img: IMG + 'Sauces/White-Sauce.png',
  },
  {
    name: 'Green Sauce',
    desc: 'Fresh and herbaceous with a bright, garden finish. Lighter and vibrant — the perfect complement to any dish.',
    tags: ['Herb', 'Bright'],
    color: '#27ae60',
    icon: 'fa-solid fa-leaf',
    img: IMG + 'Sauces/Green-Sauce.png',
  },
];

const ticker = ['HOT SAUCE', 'OMG SAUCE', 'WHITE SAUCE', 'GREEN SAUCE'];

export default function StorePage() {
  useEffect(() => { document.title = 'The Sauce Bible | OMGyro Halal'; }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-brand-black min-h-[80vh] flex items-center justify-center text-center overflow-hidden px-4">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('${IMG}Sauce-Bible.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Reveal className="relative z-10">
          <div className="inline-flex items-center gap-2 border border-primary/40 text-primary rounded-full px-5 py-2 font-heading text-sm uppercase tracking-widest mb-8">
            <i className="fa-solid fa-fire" /> Halal &bull; Crafted &bull; Signature Sauces
          </div>
          <h1 className="font-display uppercase text-white leading-none mb-6">
            <span className="block text-5xl md:text-7xl">The</span>
            <span className="block text-7xl md:text-9xl text-primary">Sauce Bible</span>
          </h1>
          <p className="font-paragraph text-white/70 text-lg mb-10 max-w-lg mx-auto">
            Bring the flavor home. Explore our sauces below and order online for pickup or delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://omgyrohalal.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/40"
            >
              Order Now <i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="#sauces"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-heading font-semibold px-10 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
            >
              Browse Sauces <i className="fa-solid fa-chevron-down text-sm" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Ticker */}
      <div className="bg-primary py-3 overflow-hidden" aria-hidden="true">
        <div className="flex gap-8 animate-[ticker_20s_linear_infinite] whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="font-heading font-bold text-white text-sm tracking-widest flex items-center gap-4">
              {item} <span className="text-white/50">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sauces */}
      <section id="sauces" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">Four Flavors</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase text-brand-black mt-2">Explore Our Signature Sauces</h2>
            <p className="font-paragraph text-foreground/60 mt-4 max-w-lg mx-auto">
              Discover the perfect sauce to elevate your meal. Each of our handcrafted sauces brings unique flavors that complement any dish.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sauces.map(({ name, desc, tags, color, icon, img, featured }, i) => (
              <Reveal key={name} delay={i * 100}>
                <div className={'rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ' + (featured ? 'border-primary shadow-lg shadow-primary/20' : 'border-border')}>
                  {featured && (
                    <div className="bg-primary text-white text-center py-2 font-heading text-xs uppercase tracking-widest font-semibold">
                      <i className="fa-solid fa-star mr-2" />Signature Sauce
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-brand-black/5 flex items-center justify-center p-6">
                      <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: color + '22' }}>
                          <i className={icon + ' text-lg'} style={{ color }} />
                        </span>
                        <h3 className="font-display text-3xl uppercase text-brand-black">{name}</h3>
                      </div>
                      <p className="font-paragraph text-foreground/70 leading-relaxed mb-4">{desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {tags.map(tag => (
                          <span key={tag} className="font-heading text-xs font-semibold px-3 py-1 rounded-full border" style={{ borderColor: color + '60', color, backgroundColor: color + '11' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-20 px-4 text-center">
        <Reveal>
          <span className="text-primary font-heading uppercase tracking-widest text-sm">Ready to Taste?</span>
          <h2 className="font-display text-5xl uppercase text-white mt-2 mb-4">Bring the Flavor Home</h2>
          <p className="font-paragraph text-white/60 mb-8 max-w-sm mx-auto">Order online and get all four signature sauces with your next platter.</p>
          <a
            href="https://omgyrohalal.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1"
          >
            Order Online
          </a>
        </Reveal>
      </section>
    </main>
  );
}
