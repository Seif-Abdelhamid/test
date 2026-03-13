import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CommunityPage() {
  useEffect(() => { document.title = 'Community | OMGyro Halal'; }, []);

  return (
    <main className="site-content__main page-id--community">

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
              <span>OMGYRO COMMUNITY</span>
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
            <div className="hero-card hero-card--1"><i className="fa-solid fa-graduation-cap" /><span>Students</span></div>
            <div className="hero-card hero-card--2"><i className="fa-solid fa-shield-halved" /><span>First Responders</span></div>
            <div className="hero-card hero-card--3"><i className="fa-solid fa-medal" /><span>Veterans</span></div>
            <div className="hero-card hero-card--4"><i className="fa-solid fa-users" /><span>Everyone</span></div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Who We Serve */}
      <section className="cm-serve" id="community-sections" aria-label="Who We Serve">
        <div className="cm-serve__inner">
          <span className="cm-section-label">WHO WE SERVE</span>
          <h2 className="cm-section-title">Built for the People Who Matter</h2>
          <p className="cm-section-sub">We give back to the people who make our neighborhoods strong. Bring a valid ID to any store.</p>

          <div className="cm-serve-grid">
            <div className="cm-serve-card cm-serve-card--orange">
              <div className="card-icon">
                <div className="card-icon__ring card-icon__ring--orange" />
                <i className="fa-solid fa-graduation-cap" />
              </div>
              <h3>College Students</h3>
              <p>Seton Hall, Rutgers, Montclair, and every NJ campus. Student ID = discount + meals that don't break the bank.</p>
            </div>
            <div className="cm-serve-card cm-serve-card--blue">
              <div className="card-icon">
                <div className="card-icon__ring card-icon__ring--blue" />
                <i className="fa-solid fa-shield-halved" />
              </div>
              <h3>First Responders</h3>
              <p>Police, fire, EMT — show your department or service ID. We've got your back with a thank-you discount.</p>
            </div>
            <div className="cm-serve-card cm-serve-card--green">
              <div className="card-icon">
                <div className="card-icon__ring card-icon__ring--green" />
                <i className="fa-solid fa-star" />
              </div>
              <h3>Veterans &amp; Military</h3>
              <p>Active duty and veterans: military or veteran ID gets you a discount. We're proud to serve those who served.</p>
            </div>
            <div className="cm-serve-card cm-serve-card--purple">
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

      {/* How It Works */}
      <section className="cm-timeline" aria-label="How It Works">
        <div className="cm-timeline__inner">
          <span className="cm-section-label">HOW IT WORKS</span>
          <h2 className="cm-section-title">Three Simple Steps</h2>
          <p className="cm-section-sub">No apps. No codes. Just bring yourself and your ID.</p>

          <div className="cm-timeline__nodes">
            <div className="tl-line"><div className="tl-line-inner" /></div>

            <div className="tl-node tl-node--left">
              <div className="tl-card">
                <div className="tl-card__icon"><i className="fa-solid fa-door-open" /></div>
                <h3>Walk In</h3>
                <p>Visit any OMGYRO location across New Jersey. No reservation needed.</p>
              </div>
              <div className="tl-dot" />
            </div>

            <div className="tl-node tl-node--right">
              <div className="tl-card">
                <div className="tl-card__icon"><i className="fa-solid fa-id-card" /></div>
                <h3>Show Your ID</h3>
                <p>Present your student, military, or first-responder ID at checkout. That's it.</p>
              </div>
              <div className="tl-dot" />
            </div>

            <div className="tl-node tl-node--left">
              <div className="tl-card">
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

    </main>
  );
}
