import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Reveal from '@/components/Reveal';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const features = [
  { icon: 'fa-solid fa-utensils', title: 'Full Platters', desc: 'Signature halal platters for groups of any size — gyros, falafel, and more.' },
  { icon: 'fa-solid fa-fire-flame-curved', title: 'Sauce Station', desc: 'Our famous 4-sauce station included with every catering package.' },
  { icon: 'fa-solid fa-truck', title: 'On-Site Setup', desc: 'We handle delivery and setup so you can focus on your event.' },
  { icon: 'fa-solid fa-certificate', title: '100% Halal', desc: 'All catering orders are fully halal certified and prepared fresh.' },
];

const packages = [
  {
    name: 'Small Gathering',
    serves: 'Serves 10–25',
    price: 'Starting at $150',
    items: ['Choice of 2 proteins', '2 sides', 'Pita bread', 'Sauce station'],
  },
  {
    name: 'Corporate Event',
    serves: 'Serves 25–75',
    price: 'Starting at $400',
    items: ['Choice of 3 proteins', '3 sides', 'Pita bread', 'Sauce station', 'Dedicated server'],
    featured: true,
  },
  {
    name: 'Full Catering',
    serves: 'Serves 75+',
    price: 'Custom quote',
    items: ['Full menu access', 'All sides', 'Sauce station', 'Setup + breakdown', 'Dedicated team'],
  },
];

export default function CateringPage() {
  useEffect(() => { document.title = 'Catering | OMGyro Halal'; }, []);

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
            Bring the OMG Way to your next event. Corporate lunches, weddings, parties — we've got you covered.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1"
          >
            Request a Quote
          </Link>
        </Reveal>
      </section>

      {/* Feature cards */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-5xl uppercase text-white">Why OMGYRO Catering?</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-primary/40 transition-all duration-300">
                  <i className={icon + ' text-primary text-3xl mb-4 block'} />
                  <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
                  <p className="font-paragraph text-white/60 text-sm">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">What's Included</span>
            <h2 className="font-display text-5xl uppercase text-brand-black mt-2">Catering Packages</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map(({ name, serves, price, items, featured }, i) => (
              <Reveal key={name} delay={i * 100}>
                <div className={
                  'rounded-2xl p-8 flex flex-col border-2 transition-all duration-300 ' +
                  (featured
                    ? 'border-primary bg-brand-black text-white shadow-xl shadow-primary/20 scale-105'
                    : 'border-border bg-white hover:border-primary/50')
                }>
                  {featured && <span className="text-primary font-heading text-xs uppercase tracking-widest mb-3">Most Popular</span>}
                  <h3 className={'font-display text-3xl uppercase mb-1 ' + (featured ? 'text-white' : 'text-brand-black')}>{name}</h3>
                  <p className={'font-paragraph text-sm mb-4 ' + (featured ? 'text-white/60' : 'text-muted-foreground')}>{serves}</p>
                  <p className="text-primary font-display text-2xl mb-6">{price}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {items.map(item => (
                      <li key={item} className={'flex items-center gap-2 font-paragraph text-sm ' + (featured ? 'text-white/80' : 'text-foreground/70')}>
                        <i className="fa-solid fa-check text-primary text-xs flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={
                      'inline-flex justify-center items-center gap-2 font-heading font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 ' +
                      (featured ? 'bg-primary text-white hover:bg-accent' : 'bg-brand-black text-white hover:bg-primary')
                    }
                  >
                    Get a Quote <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-20 px-4 text-center">
        <Reveal>
          <h2 className="font-display text-5xl uppercase text-white mb-4">Ready to Book?</h2>
          <p className="font-paragraph text-white/60 mb-8 max-w-sm mx-auto">Contact us and we'll put together a custom menu for your event.</p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
