import { useEffect } from 'react';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const steps = [
  { num: '01', icon: 'fa-solid fa-bag-shopping', title: 'Order Online', desc: 'Place your order through our Square site — every dollar you spend earns points.' },
  { num: '02', icon: 'fa-solid fa-coins', title: 'Earn 10 Points / $1', desc: 'Rack up points every single order. The more you eat, the more you earn.' },
  { num: '03', icon: 'fa-solid fa-gift', title: 'Redeem Free Food', desc: 'Exchange points for free sides, drinks, or even a full entree. Starting at just 85 pts.' },
];

const rewards = [
  { pts: 85, label: 'Side of Fries', img: `${IMG}Sides/SeasonFries.jpeg` },
  { pts: 350, label: 'Onion Rings', img: `${IMG}Sides/OnionsRings.jpeg` },
  { pts: 400, label: 'Fountain Drink', img: `${IMG}Drinks/Lmonade.jpeg` },
  { pts: 500, label: 'Falafel Box', img: `${IMG}Sides/FalafelBox.jpeg` },
  { pts: 700, label: 'Double Protein', img: `${IMG}Sides/Lamp-Chicken.jpeg` },
  { pts: 1625, label: 'Free Entree', img: `${IMG}Gyros/Combo-Gyro.jpeg` },
];

const faqs = [
  { q: 'Do points expire?', a: "Points don't expire as long as you keep ordering. Redeemed rewards have their own expiration." },
  { q: 'Can I earn points on delivery?', a: 'Yes — when you order through our Square site for pickup or delivery, you earn points on every order.' },
  { q: 'How do I sign up?', a: "Click Join Now below. When you place an order on our Square site, create an account or log in with your email. That's it." },
  { q: 'Can I use rewards at any location?', a: "Yes! Your rewards work at all OMGYRO locations. Just make sure you're logged in when ordering." },
];

export default function RewardsPage() {
  useEffect(() => { document.title = 'Rewards | OMGyro Halal'; }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-black min-h-[60vh] flex items-center justify-center px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('${IMG}Platters/Compo-Platter.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Reveal className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 rounded-full px-5 py-2 font-heading text-sm uppercase tracking-wider mb-6">
            <i className="fa-solid fa-crown" /> OMGYRO Rewards
          </div>
          <h1 className="font-display text-7xl md:text-9xl uppercase text-white leading-none mb-6">
            Eat.<br />Earn.<br /><span className="text-primary">Get Rewarded.</span>
          </h1>
          <p className="font-paragraph text-white/70 text-lg mb-8 max-w-md mx-auto">
            Join OMGYRO Rewards and get free halal on your next order.
          </p>
          <a
            href="https://omgyrohalal.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/40"
          >
            Join Now — It's Free
          </a>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">Simple & Free</span>
            <h2 className="font-display text-5xl uppercase text-brand-black mt-2">How It Works</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ num, icon, title, desc }, i) => (
              <Reveal key={num} delay={i * 120}>
                <div className="text-center p-8 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="font-display text-6xl text-primary/20 leading-none mb-4">{num}</div>
                  <i className={icon + ' text-primary text-3xl mb-4 block'} />
                  <h3 className="font-heading font-bold text-brand-black text-lg mb-2">{title}</h3>
                  <p className="font-paragraph text-muted-foreground text-sm">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">Rewards Exchange</span>
            <h2 className="font-display text-5xl uppercase text-brand-black mt-2">Real Food Is Really Rewarding</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {rewards.map(({ pts, label, img }, i) => (
              <Reveal key={label} delay={i * 60}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="h-40 overflow-hidden relative">
                    <Image src={img} alt={label} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 bg-primary text-white font-heading text-xs font-bold px-3 py-1 rounded-full">
                      {pts} PTS
                    </span>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-heading font-semibold text-brand-black">{label}</h3>
                    <p className="font-paragraph text-muted-foreground text-xs mt-1">Earn ${(pts / 10).toFixed(2)} to unlock</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-5xl uppercase text-white">Rewards FAQ</h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 80}>
                <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-primary/40 transition-colors">
                  <summary className="font-heading font-semibold text-white flex justify-between items-center list-none">
                    {q}
                    <i className="fa-solid fa-chevron-down text-primary text-sm transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="font-paragraph text-white/60 text-sm mt-4 leading-relaxed">{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-4 text-center">
        <Reveal>
          <h2 className="font-display text-5xl uppercase text-white mb-4">Stop Leaving Free Food on the Table</h2>
          <p className="font-paragraph text-white/80 mb-8 max-w-sm mx-auto">Join thousands of OMGYRO fans already earning free halal.</p>
          <a
            href="https://omgyrohalal.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary font-heading font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-1"
          >
            Join Now
          </a>
        </Reveal>
      </section>
    </main>
  );
}
