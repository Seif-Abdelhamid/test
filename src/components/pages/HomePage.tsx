import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const whyCards = [
  { icon: 'fa-solid fa-star', name: 'The OMG Way', desc: 'Excellence in every bite, every time.' },
  { icon: 'fa-solid fa-certificate', name: '100% Halal', desc: 'Certified and prepared with integrity.' },
  { icon: 'fa-solid fa-fire-flame-curved', name: 'Signature Sauces', desc: 'Bold flavors that hit different.' },
  { icon: 'fa-solid fa-location-dot', name: 'Growing Fast', desc: 'Expanding all across New Jersey.' },
];

const contentSections = [
  {
    label: 'Our Story',
    heading: 'The Original Platters Restaurant in NJ',
    body: 'At OMGYRO, we\'re more than just delicious food — we\'re about creating unforgettable experiences, one platter at a time. Our slogan, "The OMG Way," reflects our commitment to excellence in everything we do.',
    cta: { text: 'Find a Location', to: '/locations', external: false },
    image: IMG + 'Platters/Compo-Platter.jpeg',
    reverse: false,
  },
  {
    label: 'In The News',
    heading: 'OMGYRO Is Taking Over New Jersey',
    body: 'From our South Orange roots to new locations in Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is redefining halal dining across the state. Featured on Yahoo Finance and NJ.com, our bold platters and signature sauces have caught the attention of food lovers everywhere.',
    cta: { text: 'Read The Full Story', to: 'https://finance.yahoo.com/news/omgyro-expands-footprint-across-jersey-125500175.html', external: true },
    image: IMG + 'The-store.jpg',
    reverse: true,
  },
  {
    label: 'Our Sauces',
    heading: 'Paid the Cost To Be the Sauce',
    body: 'At OMGYRO, our sauces are more than just condiments — they\'re crafted to elevate every bite, bringing bold flavors and unique twists to your meal. Whether you\'re drizzling, dipping, or smothering, our sauces are designed to take your experience to the next level.',
    cta: { text: 'Explore Our Sauce Bible', to: '/store', external: false },
    image: IMG + 'Sauce-Bible.jpeg',
    reverse: false,
  },
];

export default function HomePage() {
  useEffect(() => { document.title = 'Home | OMGyro Halal'; }, []);

  return (
    <main className="site-content__main">
      {/* Hero */}
      <section id="hero" aria-label="hero-section" className="hero hero--gallery hero--fullheight revealable">
        <div className="gallery gallery--fit">
          <div className="gallery__item gallery__item--dimmed">
            <video autoPlay muted loop playsInline>
              <source src={IMG + 'OMGyro.mp4'} type="video/mp4" />
            </video>
            <div className="hero-overlay" />
            <div className="gallery__content container">
              <h2 className="h1 hero-title">Experience<br />the OMG Way</h2>
              <p className="hero-subtitle">Creamy, savory, and absolutely delicious platters that will have you saying "Oh my GAWWD"</p>
              <a
                href="https://omgyrohalal.square.site/"
                className="btn btn-brand-alt hero-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why OMGYRO */}
      <section className="why-omg revealable">
        <div className="why-omg__inner">
          <div className="why-omg__header">
            <span className="why-omg__tag">Why OMGYRO</span>
            <h2 className="why-omg__title">What Sets Us Apart</h2>
          </div>
          <div className="why-omg__row">
            {whyCards.map(({ icon, name, desc }) => (
              <div key={name} className="why-omg__card">
                <div className="why-omg__icon-wrap">
                  <i className={icon} />
                </div>
                <h3 className="why-omg__name">{name}</h3>
                <p className="why-omg__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {contentSections.map(({ label, heading, body, cta, image, reverse }) => (
        <section key={heading} className={'modern-content-section revealable' + (reverse ? ' modern-content-reverse' : '')}>
          <div className="modern-content-wrapper">
            <div className="modern-content-image">
              <div className="image-container" style={{ backgroundImage: `url('${image}')` }} />
            </div>
            <div className="modern-content-text">
              <span className="content-label">{label}</span>
              <h2><span>{heading}</span></h2>
              <p>{body}</p>
              {cta.external ? (
                <a href={cta.to} className="modern-btn" target="_blank" rel="noopener noreferrer">
                  {cta.text}
                </a>
              ) : (
                <Link to={cta.to} className="modern-btn">{cta.text}</Link>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
