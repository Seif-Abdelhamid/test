import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

export default function HomePage() {
  useEffect(() => { document.title = 'Home | OMGyro Halal'; }, []);

  return (
    <main className="site-content__main page-id--1001173">
      <h1 className="sr-only">Home</h1>

      {/* Hero Section: Full-Height Video Background */}
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
              <img className="sr-only" alt="Buy One Feed One Heart" />
              <a href="https://omgyrohalal.square.site/" className="btn btn-brand-alt hero-cta" target="_blank" rel="noopener" aria-label="Order Now" role="button">Order Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose OMGYRO Section */}
      <section className="why-omg revealable">
        <div className="why-omg__inner">
          <div className="why-omg__header">
            <span className="why-omg__tag">Why OMGYRO</span>
            <h2 className="why-omg__title">What Sets Us Apart</h2>
          </div>
          <div className="why-omg__row">
            <div className="why-omg__card">
              <div className="why-omg__icon-wrap"><i className="fa-solid fa-star" /></div>
              <h3 className="why-omg__name">The OMG Way</h3>
              <p className="why-omg__desc">Excellence in every bite, every time.</p>
            </div>
            <div className="why-omg__card">
              <div className="why-omg__icon-wrap"><i className="fa-solid fa-certificate" /></div>
              <h3 className="why-omg__name">100% Halal</h3>
              <p className="why-omg__desc">Certified and prepared with integrity.</p>
            </div>
            <div className="why-omg__card">
              <div className="why-omg__icon-wrap"><i className="fa-solid fa-fire-flame-curved" /></div>
              <h3 className="why-omg__name">Signature Sauces</h3>
              <p className="why-omg__desc">Bold flavors that hit different.</p>
            </div>
            <div className="why-omg__card">
              <div className="why-omg__icon-wrap"><i className="fa-solid fa-location-dot" /></div>
              <h3 className="why-omg__name">Growing Fast</h3>
              <p className="why-omg__desc">Expanding all across New Jersey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Content Section 1 */}
      <section className="modern-content-section revealable">
        <div className="modern-content-wrapper">
          <div className="modern-content-image">
            <div className="image-container" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')" }} />
          </div>
          <div className="modern-content-text">
            <span className="content-label">Our Story</span>
            <h2 data-heading="The Original Platters Restaurant in NJ"><span>The Original Platters Restaurant in NJ</span></h2>
            <p>At OMGYRO, we're more than just delicious food — we're about creating unforgettable experiences, one platter at a time. Our slogan, <strong>"The OMG Way,"</strong> reflects our commitment to excellence in everything we do.</p>
            <Link to="/locations" className="modern-btn">Find a Location</Link>
          </div>
        </div>
      </section>

      {/* Modern Content Section 2 */}
      <section className="modern-content-section modern-content-reverse revealable">
        <div className="modern-content-wrapper">
          <div className="modern-content-image">
            <div className="image-container" style={{ backgroundImage: "url('" + IMG + "The-store.jpg')" }} />
          </div>
          <div className="modern-content-text">
            <span className="content-label">In The News</span>
            <h2 data-heading="OMGYRO Is Taking Over New Jersey"><span>OMGYRO Is Taking Over New Jersey</span></h2>
            <p>From our South Orange roots to new locations in Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is redefining halal dining across the state. Featured on Yahoo Finance and NJ.com, our bold platters and signature sauces have caught the attention of food lovers everywhere. As Partner Lou Bari puts it: "We want to create an experience where people remember both the meal and the hospitality."</p>
            <a href="https://finance.yahoo.com/news/omgyro-expands-footprint-across-jersey-125500175.html" className="modern-btn" target="_blank" rel="noopener">Read The Full Story</a>
          </div>
        </div>
      </section>

      {/* Modern Content Section 3 */}
      <section className="modern-content-section revealable">
        <div className="modern-content-wrapper">
          <div className="modern-content-image">
            <div className="image-container" style={{ backgroundImage: "url('" + IMG + "Sauce-Bible.jpeg')" }} />
          </div>
          <div className="modern-content-text">
            <span className="content-label">Our Sauces</span>
            <h2 data-heading="Paid the Cost To Be the Sauce"><span>Paid the Cost To Be the Sauce</span></h2>
            <p>At OMGYRO, our sauces are more than just condiments—they're crafted to elevate every bite, bringing bold flavors and unique twists to your meal. Whether you're drizzling, dipping, or smothering, our sauces are designed to complement your favorite meals and take your dining experience to the next level.</p>
            <Link to="/store" className="modern-btn">Explore Our Sauce Bible</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
