import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const groups = [
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'College Students',
    desc: 'Seton Hall, Rutgers, Montclair, and every NJ campus. Student ID = discount + meals that don\'t break the bank.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'First Responders',
    desc: 'Police, fire, EMT — show your department or service ID. We\'ve got your back with a thank-you discount.',
  },
  {
    icon: 'fa-solid fa-medal',
    title: 'Veterans & Military',
    desc: 'Active duty and veterans: military or veteran ID gets you a discount. We\'re proud to serve those who served.',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Everyone',
    desc: 'Halal, fresh, and our Sauce Bible at every spot. You\'re part of the OMGYRO family too.',
  },
];

const steps = [
  { num: '01', icon: 'fa-solid fa-door-open', title: 'Walk In', desc: 'Come into any OMGYRO location near you.' },
  { num: '02', icon: 'fa-solid fa-id-card', title: 'Show Your ID', desc: 'Show your student, service, military, or veteran ID at the counter.' },
  { num: '03', icon: 'fa-solid fa-face-smile', title: 'Save & Enjoy', desc: 'Get your discount applied instantly. No apps, no codes needed.' },
];

const blogPosts = [
  { img: IMG + 'The-store.jpg', title: 'OMGYRO Locations in NJ: Now Open & Coming Soon', href: '/blog' },
  { img: IMG + 'people.jpg', title: 'NJ.com Spotlights OMGYRO Halal', href: '/blog' },
  { img: IMG + 'Platters/Compo-Platter.jpeg', title: 'What Makes OMGYRO the Best Gyro Spot Near You', href: '/blog' },
];

export default function CommunityPage() {
  useEffect(() => { document.title = 'Community | OMGyro Halal'; }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-brand-black min-h-[70vh] flex items-center justify-center text-center overflow-hidden px-4">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('${IMG}people.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black/80" />
        <Reveal className="relative z-10">
          <div className="inline-flex items-center gap-2 border border-primary/40 text-primary rounded-full px-5 py-2 font-heading text-sm uppercase tracking-widest mb-8">
            <i className="fa-solid fa-users" /> OMGYRO Community
          </div>
          <h1 className="font-display text-7xl md:text-9xl uppercase text-white leading-none mb-6">
            Built for<br /><span className="text-primary">the People</span>
          </h1>
          <p className="font-paragraph text-white/70 text-lg mb-10 max-w-xl mx-auto">
            From college campuses to first responders, veterans to loyal neighbors — you're all family here. Bring your ID, get exclusive discounts, and taste the OMGYRO difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#community-sections"
              className="inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1"
            >
              See Who Qualifies <i className="fa-solid fa-chevron-down text-sm" />
            </a>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-heading font-semibold px-10 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
            >
              Find a Location <i className="fa-solid fa-location-dot text-sm" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Who We Serve */}
      <section id="community-sections" className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">Who We Serve</span>
            <h2 className="font-display text-5xl uppercase text-brand-black mt-2">Built for the People Who Matter</h2>
            <p className="font-paragraph text-foreground/60 mt-4 max-w-lg mx-auto">
              We give back to the people who make our neighborhoods strong. Bring a valid ID to any store.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groups.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center border border-border shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <i className={icon + ' text-primary text-2xl'} />
                  </div>
                  <h3 className="font-heading font-bold text-brand-black text-base mb-2">{title}</h3>
                  <p className="font-paragraph text-foreground/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">How It Works</span>
            <h2 className="font-display text-5xl uppercase text-white mt-2">Three Simple Steps</h2>
            <p className="font-paragraph text-white/60 mt-4 max-w-md mx-auto">No apps. No codes. Just bring yourself and your ID.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ num, icon, title, desc }, i) => (
              <Reveal key={num} delay={i * 120}>
                <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="font-display text-6xl text-primary/30 leading-none mb-4">{num}</div>
                  <i className={icon + ' text-primary text-3xl mb-4 block'} />
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="font-paragraph text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal className="flex items-center justify-between mb-12">
            <div>
              <span className="text-primary font-heading uppercase tracking-widest text-sm">Stories & Updates</span>
              <h2 className="font-display text-4xl uppercase text-brand-black mt-2">Read the Blog</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all">
              View all posts <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map(({ img, title, href }, i) => (
              <Reveal key={title} delay={i * 100}>
                <Link to={href} className="block rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-brand-black text-sm leading-snug group-hover:text-primary transition-colors">{title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 text-center">
        <Reveal>
          <h2 className="font-display text-5xl uppercase text-white mb-4">Find a Location</h2>
          <p className="font-paragraph text-white/80 mb-8 max-w-sm mx-auto">Come in, show your ID, and taste the OMGYRO difference.</p>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 bg-white text-primary font-heading font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-1"
          >
            Find Your Nearest OMGYRO <i className="fa-solid fa-arrow-right" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
