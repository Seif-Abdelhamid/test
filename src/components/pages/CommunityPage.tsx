import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

export default function CommunityPage() {
  useEffect(() => { document.title = 'Community | OMGYRO Halal in NJ'; }, []);
  const [slide, setSlide] = useState(0);

  const slides = [
    { quote: '"OMGYRO is the go-to spot on campus. The student discount makes it even better -- real food, real flavor, and they actually care about us."', cite: 'Student at Seton Hall University' },
    { quote: '"After a long shift, nothing hits like a gyro platter from OMGYRO. The fact that they show love to first responders means a lot to our crew."', cite: 'Firefighter, Newark FD' },
    { quote: '"I bring my whole family here every week. The food is consistently amazing, 100% halal, and the sauces are next level. This is our spot."', cite: 'Local Resident, South Orange' },
  ];

  return (
    <main className="site-content__main">

      {/* Hero */}
      <section className="community-hero" aria-label="Community">
        <div className="community-hero__bg">
          <div className="hero-orb hero-orb--1" />
          <div className="hero-orb hero-orb--2" />
          <div className="hero-orb hero-orb--3" />
        </div>
        <div className="community-hero__content">
          <div className="community-hero__badge-wrap">
            <span className="community-hero__badge">
              <i className="fa-solid fa-heart" />
              <span>COMMUNITY</span>
            </span>
          </div>
          <h1 className="community-hero__title">
            <span className="title-line">We're More Than</span>
            <span className="title-line title-line--accent">Just Food</span>
          </h1>
          <p className="community-hero__subtitle">From college campuses to first responders, veterans to loyal neighbors — you're all family here. Bring your ID, get exclusive discounts, and taste the OMGYRO difference.</p>
          <div className="community-hero__stats">
            <div className="hero-stat">
              <span className="hero-stat__number">50K+</span>
              <span className="hero-stat__label">Community Members</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat__number">15%</span>
              <span className="hero-stat__label">Discount for Heroes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat__number">6</span>
              <span className="hero-stat__label">NJ Locations</span>
            </div>
          </div>
          <div className="community-hero__cta">
            <a href="#community-sections" className="hero-btn hero-btn--primary">
              <span>Explore Community</span>
              <i className="fa-solid fa-arrow-down" />
            </a>
            <Link to="/locations" className="hero-btn hero-btn--secondary">
              <span>Find Location</span>
              <i className="fa-solid fa-location-dot" />
            </Link>
          </div>
        </div>
        <div className="community-hero__visual">
          <div className="hero-cards">
            <div className="hero-card hero-card--1">
              <i className="fa-solid fa-graduation-cap" />
              <span>Students</span>
            </div>
            <div className="hero-card hero-card--2">
              <i className="fa-solid fa-shield-halved" />
              <span>First Responders</span>
            </div>
            <div className="hero-card hero-card--3">
              <i className="fa-solid fa-medal" />
              <span>Veterans</span>
            </div>
            <div className="hero-card hero-card--4">
              <i className="fa-solid fa-users" />
              <span>Everyone</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Community Sections */}
      <section className="community-sections" id="community-sections"></section>

      <div className="cm-section-divider" aria-hidden="true" />

      {/* Who We Serve */}
      <section className="cm-serve" id="cm-serve" aria-label="Who We Serve">
        <div className="cm-serve__inner">
          <span className="cm-section-label cm-hidden">WHO WE SERVE</span>
          <h2 className="cm-section-title cm-hidden">Built for the People Who Matter</h2>
          <p className="cm-section-sub cm-hidden">We give back to the people who make our neighborhoods strong. Bring a valid ID to any store.</p>

          <div className="cm-serve-grid">
            <div className="cm-serve-card cm-serve-card--orange cm-hidden cm-from-left" style={{ transitionDelay: '0.1s' }}>
              <div className="card-icon">
                <div className="card-icon__ring card-icon__ring--orange" />
                <i className="fa-solid fa-graduation-cap" />
              </div>
              <h3>College Students</h3>
              <p>Seton Hall, Rutgers, Montclair, and every NJ campus. Student ID = discount + meals that don't break the bank.</p>
            </div>
            <div className="cm-serve-card cm-serve-card--blue cm-hidden cm-from-right" style={{ transitionDelay: '0.2s' }}>
              <div className="card-icon">
                <div className="card-icon__ring card-icon__ring--blue" />
                <i className="fa-solid fa-shield-halved" />
              </div>
              <h3>First Responders</h3>
              <p>Police, fire, EMT -- show your department or service ID. We've got your back with a thank-you discount.</p>
            </div>
            <div className="cm-serve-card cm-serve-card--green cm-hidden cm-from-left" style={{ transitionDelay: '0.3s' }}>
              <div className="card-icon">
                <div className="card-icon__ring card-icon__ring--green" />
                <i className="fa-solid fa-star" />
              </div>
              <h3>Veterans &amp; Military</h3>
              <p>Active duty and veterans: military or veteran ID gets you a discount. We're proud to serve those who served.</p>
            </div>
            <div className="cm-serve-card cm-serve-card--purple cm-hidden cm-from-right" style={{ transitionDelay: '0.4s' }}>
              <div className="card-icon">
                <div className="card-icon__ring card-icon__ring--purple" />
                <i className="fa-solid fa-heart" />
              </div>
              <h3>Everyone</h3>
              <p>Halal, fresh, and our Sauce Bible at every spot. You're part of the OMGYRO family too.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cm-section-divider" aria-hidden="true" />

      {/* Timeline */}
      <section className="cm-timeline" aria-label="How It Works">
        <div className="cm-timeline__inner">
          <span className="cm-section-label cm-hidden">HOW IT WORKS</span>
          <h2 className="cm-section-title cm-hidden">Three Simple Steps</h2>
          <p className="cm-section-sub cm-hidden">No apps. No codes. Just bring yourself and your ID.</p>

          <div className="cm-timeline__nodes">
            <div className="tl-line"><div className="tl-line-inner" id="tlLine" /></div>

            <div className="tl-node tl-node--left">
              <div className="tl-card cm-hidden cm-from-left">
                <div className="tl-card__icon"><i className="fa-solid fa-door-open" /></div>
                <h3>Walk In</h3>
                <p>Visit any OMGYRO location across New Jersey. No reservation needed.</p>
              </div>
              <div className="tl-dot" />
            </div>

            <div className="tl-node tl-node--right">
              <div className="tl-card cm-hidden cm-from-right" style={{ transitionDelay: '0.15s' }}>
                <div className="tl-card__icon"><i className="fa-solid fa-id-card" /></div>
                <h3>Show Your ID</h3>
                <p>Present your student, military, or first-responder ID at checkout. That's it.</p>
              </div>
              <div className="tl-dot" />
            </div>

            <div className="tl-node tl-node--left">
              <div className="tl-card cm-hidden cm-from-left" style={{ transitionDelay: '0.3s' }}>
                <div className="tl-card__icon"><i className="fa-solid fa-face-laugh-beam" /></div>
                <h3>Save &amp; Enjoy</h3>
                <p>Your discount applies instantly. Great halal food for less, every single time.</p>
              </div>
              <div className="tl-dot" />
            </div>
          </div>
        </div>
      </section>

      <div className="cm-section-divider cm-section-divider--dark" aria-hidden="true" />

      {/* Testimonials */}
      <section className="cm-testimonials" aria-label="Testimonials">
        <div className="cm-testimonials__inner">
          <div className="cm-testimonials__quote-mark" aria-hidden="true">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30 60c-8.3 0-15-6.7-15-15 0-16.6 13.4-30 30-30v12c-9.9 0-18 8.1-18 18h3c8.3 0 15 6.7 15 15s-6.7 15-15 15zm45 0c-8.3 0-15-6.7-15-15 0-16.6 13.4-30 30-30v12c-9.9 0-18 8.1-18 18h3c8.3 0 15 6.7 15 15s-6.7 15-15 15z" /></svg>
          </div>

          <div className="testimonial-carousel" id="testimonialCarousel">
            {slides.map((s, i) => (
              <div key={i} className={`testimonial-slide${slide === i ? ' active' : ''}`}>
                <blockquote>{s.quote}</blockquote>
                <cite>{s.cite}</cite>
              </div>
            ))}
          </div>

          <div className="testimonial-dots" id="testimonialDots">
            {slides.map((_, i) => (
              <button key={i} className={`testimonial-dot${slide === i ? ' active' : ''}`} data-slide={i} aria-label={`Testimonial ${i + 1}`} onClick={() => setSlide(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="cm-marquee" aria-hidden="true">
        <div className="marquee__track">
          <div className="marquee__set">
            <span className="marquee__item">10,000+ STUDENTS SERVED</span><span className="marquee__dot" />
            <span className="marquee__item">50+ CAMPUS EVENTS</span><span className="marquee__dot" />
            <span className="marquee__item">6 NJ LOCATIONS</span><span className="marquee__dot" />
            <span className="marquee__item">100% HALAL</span><span className="marquee__dot" />
            <span className="marquee__item">4 SIGNATURE SAUCES</span><span className="marquee__dot" />
          </div>
          <div className="marquee__set">
            <span className="marquee__item">10,000+ STUDENTS SERVED</span><span className="marquee__dot" />
            <span className="marquee__item">50+ CAMPUS EVENTS</span><span className="marquee__dot" />
            <span className="marquee__item">6 NJ LOCATIONS</span><span className="marquee__dot" />
            <span className="marquee__item">100% HALAL</span><span className="marquee__dot" />
            <span className="marquee__item">4 SIGNATURE SAUCES</span><span className="marquee__dot" />
          </div>
        </div>
      </div>

      <div className="cm-section-divider" aria-hidden="true" />

      {/* Blog Preview */}
      <section className="cm-blog" aria-label="Blog">
        <div className="cm-blog__inner">
          <span className="cm-section-label cm-hidden">STORIES &amp; UPDATES</span>
          <h2 className="cm-section-title cm-hidden">Read the Blog</h2>
          <div className="cm-blog__heading cm-hidden">
            <Link to="/blog">View all posts <i className="fa-solid fa-arrow-right" /></Link>
          </div>

          <div className="cm-blog-grid">
            <div className="cm-blog-card cm-hidden" style={{ transitionDelay: '0.1s' }}>
              <Link to="/blog">
                <div className="cm-blog-card__img">
                  <img src={IMG + 'The-store.jpg'} alt="OMGYRO Store" loading="lazy" />
                </div>
                <div className="cm-blog-card__body">
                  <h3>OMGYRO Locations in NJ: Now Open &amp; Coming Soon</h3>
                  <p>Where to find us across New Jersey -- and where we're opening next.</p>
                  <span className="read-link">Read more <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </Link>
            </div>
            <div className="cm-blog-card cm-hidden" style={{ transitionDelay: '0.2s' }}>
              <Link to="/blog">
                <div className="cm-blog-card__img">
                  <img src={IMG + 'people.jpg'} alt="OMGYRO Community" loading="lazy" />
                </div>
                <div className="cm-blog-card__body">
                  <h3>NJ.com Spotlights OMGYRO Halal</h3>
                  <p>Fresh halal flavors, fast service, and the momentum behind our expansion.</p>
                  <span className="read-link">Read more <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </Link>
            </div>
            <div className="cm-blog-card cm-hidden" style={{ transitionDelay: '0.3s' }}>
              <Link to="/blog">
                <div className="cm-blog-card__img">
                  <img src={IMG + 'Platters/Compo-Platter.jpeg'} alt="OMGYRO Platter" loading="lazy" />
                </div>
                <div className="cm-blog-card__body">
                  <h3>What Makes OMGYRO the Best Gyro Spot Near You</h3>
                  <p>Quality halal, house-made sauces, and the Sauce Bible you can take home.</p>
                  <span className="read-link">Read more <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="cm-section-divider" aria-hidden="true" />

      {/* CTA */}
      <section className="cm-cta" aria-label="Call to Action">
        <div className="cm-cta__box cm-hidden">
          <div className="cm-cta__card">
            <h2>Find a Location</h2>
            <p>Show your student, military, or first-responder ID for discounts at any OMGYRO in New Jersey.</p>
            <Link to="/locations" className="cm-cta__btn">Find Your Nearest OMGYRO <i className="fa-solid fa-arrow-right" /></Link>
          </div>
        </div>
      </section>

    </main>
  );
}
