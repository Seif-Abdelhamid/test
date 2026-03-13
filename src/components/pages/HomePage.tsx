import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const whyCards = [
  { icon: 'fa-solid fa-star', title: 'The OMG Way', desc: 'Excellence in every bite, every time.' },
  { icon: 'fa-solid fa-certificate', title: '100% Halal', desc: 'Certified and prepared with integrity.' },
  { icon: 'fa-solid fa-fire-flame-curved', title: 'Signature Sauces', desc: 'Bold flavors that hit different.' },
  { icon: 'fa-solid fa-location-dot', title: 'Growing Fast', desc: 'Expanding all across New Jersey.' },
];

const contentSections = [
  {
    label: 'Our Story',
    heading: 'The Original Platters Restaurant in NJ',
    body: "At OMGYRO, we're more than just delicious food — we're about creating unforgettable experiences, one platter at a time. Our slogan, \"The OMG Way,\" reflects our commitment to excellence in everything we do.",
    cta: { text: 'Find a Location', to: '/locations', external: false },
    image: `${IMG}Platters/Compo-Platter.jpeg`,
    reverse: false,
  },
  {
    label: 'In The News',
    heading: 'OMGYRO Is Taking Over New Jersey',
    body: 'From our South Orange roots to new locations in Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is redefining halal dining across the state. Featured on Yahoo Finance and NJ.com, our bold platters and signature sauces have caught the attention of food lovers everywhere.',
    cta: { text: 'Read The Full Story', to: 'https://finance.yahoo.com/news/omgyro-expands-footprint-across-jersey-125500175.html', external: true },
    image: `${IMG}The-store.jpg`,
    reverse: true,
  },
  {
    label: 'Our Sauces',
    heading: 'Paid the Cost To Be the Sauce',
    body: "At OMGYRO, our sauces are more than just condiments — they're crafted to elevate every bite, bringing bold flavors and unique twists to your meal. Whether you're drizzling, dipping, or smothering, our sauces are designed to take your experience to the next level.",
    cta: { text: 'Explore Our Sauce Bible', to: '/store', external: false },
    image: `${IMG}Sauce-Bible.jpeg`,
    reverse: false,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={`${IMG}OMGyro.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-7xl md:text-9xl uppercase mb-6 leading-none tracking-wide">
            Experience<br />the OMG Way
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/80 mb-10 max-w-xl mx-auto">
            Creamy, savory, and absolutely delicious platters that will have you saying "Oh my GAWWD"
          </p>
          <a
            href="https://omgyrohalal.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full text-lg hover:bg-accent transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/40"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* ── Why OMGYRO ── */}
      <section className="bg-brand-black py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-primary font-heading font-semibold uppercase tracking-widest text-sm">Why OMGYRO</span>
            <h2 className="text-white font-display text-5xl uppercase mt-2">What Sets Us Apart</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyCards.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                    <i className={`${icon} text-primary text-2xl`} aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-heading font-semibold text-base mb-2">{title}</h3>
                  <p className="text-white/60 font-paragraph text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Sections ── */}
      {contentSections.map(({ label, heading, body, cta, image, reverse }) => (
        <section key={heading} className="bg-white py-0">
          <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[520px]`}>
            <Reveal className="w-full md:w-1/2">
              <div
                className="w-full h-72 md:h-full min-h-[520px] bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
                role="img"
                aria-label={heading}
              />
            </Reveal>
            <Reveal className="w-full md:w-1/2 flex items-center" delay={150}>
              <div className="px-8 md:px-16 py-12 max-w-lg">
                <span className="text-primary font-heading font-semibold uppercase tracking-widest text-xs">{label}</span>
                <h2 className="font-display text-4xl md:text-5xl uppercase text-brand-black mt-3 mb-6 leading-tight">
                  {heading}
                </h2>
                <p className="font-paragraph text-foreground/70 leading-relaxed mb-8">{body}</p>
                {cta.external ? (
                  <a
                    href={cta.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-black text-white font-heading font-semibold px-8 py-3 rounded-full hover:bg-primary transition-all duration-200"
                  >
                    {cta.text} <i className="fa-solid fa-arrow-right text-sm" />
                  </a>
                ) : (
                  <Link
                    to={cta.to}
                    className="inline-flex items-center gap-2 bg-brand-black text-white font-heading font-semibold px-8 py-3 rounded-full hover:bg-primary transition-all duration-200"
                  >
                    {cta.text} <i className="fa-solid fa-arrow-right text-sm" />
                  </Link>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </main>
  );
}
