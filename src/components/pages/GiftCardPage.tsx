import { useEffect } from 'react';
import Reveal from '@/components/Reveal';

const designs = [
  { emoji: '🎁', label: 'Classic Gift', desc: 'The original OMGYRO gift card.' },
  { emoji: '🎂', label: 'Birthday', desc: 'Celebrate with free halal.' },
  { emoji: '✨', label: 'Holidays', desc: 'Festive and flavorful.' },
  { emoji: '💝', label: 'Thank You', desc: 'Show your appreciation.' },
];

export default function GiftCardPage() {
  useEffect(() => { document.title = 'Gift Card | OMGyro Halal'; }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-black py-24 px-4 text-center">
        <Reveal>
          <span className="text-primary font-heading uppercase tracking-widest text-sm">Give the Gift of Halal</span>
          <h1 className="font-display text-6xl md:text-8xl uppercase text-white mt-2 mb-4">Gift Cards</h1>
          <p className="font-paragraph text-white/60 max-w-md mx-auto text-lg">
            The perfect gift for any occasion. Share the OMG Way with someone you love.
          </p>
        </Reveal>
      </section>

      {/* Designs */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-primary font-heading uppercase tracking-widest text-sm">Choose a Design</span>
            <h2 className="font-display text-5xl uppercase text-brand-black mt-2">Pick Your Card</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {designs.map(({ emoji, label, desc }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 text-center border-2 border-border hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <div className="text-5xl mb-3">{emoji}</div>
                  <h3 className="font-heading font-bold text-brand-black text-sm mb-1 group-hover:text-primary transition-colors">{label}</h3>
                  <p className="font-paragraph text-muted-foreground text-xs">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Purchase via Square */}
          <Reveal>
            <div className="bg-white rounded-3xl border border-border shadow-sm p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-gift text-primary text-2xl" />
              </div>
              <h3 className="font-display text-4xl uppercase text-brand-black mb-4">Purchase Online</h3>
              <p className="font-paragraph text-foreground/60 mb-8 max-w-sm mx-auto leading-relaxed">
                Gift cards are available for purchase through our Square store. Choose any amount — they never expire.
              </p>
              <a
                href="https://omgyrohalal.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/30"
              >
                Buy a Gift Card <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-5xl uppercase text-white">How It Works</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', icon: 'fa-solid fa-credit-card', title: 'Buy Online', desc: 'Purchase any amount on our Square store. Delivery is instant via email.' },
              { num: '02', icon: 'fa-solid fa-envelope-open-text', title: 'Send It', desc: 'Forward the gift card email to anyone — perfect for birthdays, holidays, or just because.' },
              { num: '03', icon: 'fa-solid fa-utensils', title: 'Eat OMGYRO', desc: 'Redeem at checkout on omgyrohalal.square.site for pickup or delivery.' },
            ].map(({ num, icon, title, desc }, i) => (
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

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-white">
        <Reveal>
          <h2 className="font-display text-4xl uppercase text-brand-black mb-4">Check Your Balance</h2>
          <p className="font-paragraph text-foreground/60 mb-8 max-w-sm mx-auto">Already have a gift card? Check your remaining balance on our Square store.</p>
          <a
            href="https://omgyrohalal.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-brand-black text-brand-black font-heading font-semibold px-10 py-4 rounded-full hover:bg-brand-black hover:text-white transition-all duration-200"
          >
            Check Balance <i className="fa-solid fa-arrow-right" />
          </a>
        </Reveal>
      </section>
    </main>
  );
}
