import { useEffect, useState, useRef } from 'react';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

type ArticleKey = 'locations-nj' | 'njcom-spotlight' | 'best-gyro-spot' | 'crunch-fitness' | 'halal-scene';

interface BlogArticle {
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

const blogData: Record<ArticleKey, BlogArticle> = {
  'locations-nj': {
    title: 'OMGYRO Locations in New Jersey: Now Open & Coming Soon',
    category: 'Locations',
    author: 'OMGyro Team',
    date: 'February 20, 2025',
    image: IMG + 'The-store.jpg',
    content: '<p>OMGYRO is growing across New Jersey. Our current locations include South Orange, Union, Paramus, and more — each serving 100% halal, fresh-made gyros, platters, and our signature sauces.</p><p>We\'re also opening new spots so even more of NJ can get a taste. Keep an eye on our Locations page for the latest openings and coming-soon cities.</p><p>Find the OMGYRO nearest you, stop in, and see why we\'re the flavor that\'s taking over New Jersey\'s halal scene.</p>',
  },
  'njcom-spotlight': {
    title: 'NJ.com Spotlights OMGYRO: Fresh Flavors, Fast Service, Big Momentum',
    category: 'Press',
    author: 'OMGyro Team',
    date: 'February 15, 2025',
    image: IMG + 'people.jpg',
    content: '<p>NJ.com has spotlighted OMGYRO for our fresh halal flavors, fast service, and the momentum behind our expansion across the state.</p><p>We\'re proud to be part of New Jersey\'s food scene and to bring quality halal options to more communities. Thank you to everyone who has made this growth possible.</p><p>Read the full feature on NJ.com and then come see us at a location near you.</p>',
  },
  'best-gyro-spot': {
    title: 'What Makes OMGYRO the Best Gyro Spot Near You',
    category: 'Guide',
    author: 'OMGyro Team',
    date: 'February 10, 2025',
    image: IMG + 'Platters/Compo-Platter.jpeg',
    content: '<p>It starts with quality: 100% halal proteins, fresh vegetables, and house-made sauces. Our gyros and platters are made to order so every bite is as good as the first.</p><p>Then there\'s our Sauce Bible — Hot, OMG, White, and Green sauces that you can take home. Plus fast, friendly service and locations across NJ.</p><p>That\'s what makes OMGYRO the best gyro spot near you. Come taste the difference.</p>',
  },
  'crunch-fitness': {
    title: 'OMGYRO x Crunch Fitness: Fueling Livingston with Flavor',
    category: 'Partnerships',
    author: 'OMGyro Team',
    date: 'February 5, 2025',
    image: IMG + 'Team.jpeg',
    content: '<p>OMGYRO is proud to partner with Crunch Fitness in Livingston. After your workout, refuel with halal gyros, platters, and bowls that taste great and fit your lifestyle.</p><p>Good food and fitness go hand in hand. We\'re excited to bring OMGYRO flavor to the Livingston community and to everyone who trains at Crunch.</p><p>Stop by and see us — we\'re here to fuel your gains with flavor.</p>',
  },
  'halal-scene': {
    title: "OMGYRO: The Flavor That's Taking Over New Jersey's Halal Scene",
    category: 'News',
    author: 'OMGyro Team',
    date: 'February 1, 2025',
    image: IMG + 'Sauce-Bible.jpeg',
    content: '<p>Signature sauces, fresh halal cooking, and a growing footprint — OMGYRO is the flavor that\'s taking over New Jersey\'s halal scene.</p><p>From our iconic Hot and OMG sauces to our White and Green options, we\'re known for taste that keeps people coming back. Add in platters, gyros, and bowls made with care, and it\'s no wonder we\'re expanding across NJ.</p><p>Thank you for being part of the OMGYRO community. There\'s more to come.</p>',
  },
};

export default function BlogPage() {
  useEffect(() => { document.title = 'Blog | OMGyro Halal'; }, []);
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalKey, setModalKey] = useState<ArticleKey | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (key: ArticleKey) => {
    setModalKey(key);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalKey(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const modalArticle = modalKey ? blogData[modalKey] : null;

  return (
    <main className="site-content">

      {/* Hero */}
      <section className="blog-hero" aria-label="Blog">
        <div className="blog-hero__bg">
          <div className="blog-orb blog-orb--1" />
          <div className="blog-orb blog-orb--2" />
          <div className="blog-orb blog-orb--3" />
        </div>
        <div className="blog-hero__content">
          <div className="blog-hero__badge-wrap">
            <span className="blog-hero__badge">
              <i className="fa-solid fa-newspaper" />
              <span>Stories &amp; Updates</span>
            </span>
          </div>
          <h1 className="blog-hero__title">
            <span className="blog-title-line">OMGYRO</span>
            <span className="blog-title-line blog-title-line--accent">BLOG</span>
          </h1>
          <p className="blog-hero__subtitle">News, stories, and behind-the-scenes from New Jersey's fastest-growing halal brand.</p>
          <div className="blog-hero__cta">
            <a href="#filterBar" className="blog-hero-btn blog-hero-btn--primary">
              <span>Read Posts</span>
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="blog-hero__visual">
          <div className="blog-floating-cards">
            <div className="blog-float-card blog-float-card--1">
              <i className="fa-solid fa-location-dot" />
              <span>New Locations</span>
            </div>
            <div className="blog-float-card blog-float-card--2">
              <i className="fa-solid fa-utensils" />
              <span>Menu Guides</span>
            </div>
            <div className="blog-float-card blog-float-card--3">
              <i className="fa-solid fa-handshake" />
              <span>Partnerships</span>
            </div>
            <div className="blog-float-card blog-float-card--4">
              <i className="fa-solid fa-newspaper" />
              <span>Press</span>
            </div>
          </div>
        </div>
        <div className="blog-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="blog-scroll-line" />
        </div>
      </section>

      {/* Filter Bar */}
      <div className="filter-bar" id="filterBar">
        <div className="filter-bar__inner">
          <button className={`filter-pill${activeFilter === 'all' ? ' active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
          <button className={`filter-pill${activeFilter === 'Press' ? ' active' : ''}`} onClick={() => setActiveFilter('Press')}>Press</button>
          <button className={`filter-pill${activeFilter === 'Guide' ? ' active' : ''}`} onClick={() => setActiveFilter('Guide')}>Guide</button>
          <button className={`filter-pill${activeFilter === 'Partnerships' ? ' active' : ''}`} onClick={() => setActiveFilter('Partnerships')}>Partnerships</button>
          <button className={`filter-pill${activeFilter === 'News' ? ' active' : ''}`} onClick={() => setActiveFilter('News')}>News</button>
          <button className={`filter-pill${activeFilter === 'Locations' ? ' active' : ''}`} onClick={() => setActiveFilter('Locations')}>Locations</button>
        </div>
      </div>

      {/* Spotlight Featured Article */}
      {(activeFilter === 'all' || activeFilter === 'Locations') && (
        <section className="spotlight-section" id="spotlightSection" data-category="Locations">
          <div className="container">
            <div className="spotlight-label">
              <span className="spotlight-dot" />
              Spotlight
            </div>
            <article className="spotlight-card fade-in" id="spotlightCard" onClick={() => openModal('locations-nj')}>
              <div className="spotlight-card__image-wrap">
                <img src={IMG + 'The-store.jpg'} alt="OMGYRO Locations in New Jersey" />
              </div>
              <div className="spotlight-card__content">
                <div className="spotlight-card__meta">
                  <span className="category-badge" data-cat="Locations">Locations</span>
                  <span className="article-date">February 20, 2025</span>
                  <span className="read-time"><i className="fa-regular fa-clock" /> 3 min read</span>
                </div>
                <h3>OMGYRO Locations in New Jersey: Now Open &amp; Coming Soon</h3>
                <p className="article-excerpt">OMGYRO is growing across New Jersey. Our current locations include South Orange, Union, Paramus, and more — each serving 100% halal, fresh-made gyros, platters, and our signature sauces.</p>
                <button className="btn-read-article" type="button">Read Full Article <i className="fa-solid fa-arrow-right" /></button>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">More Stories</span>
            <h2>From the Blog</h2>
            <p>Catch up on press features, guides, partnerships, and the latest OMGYRO news.</p>
          </div>

          <div className="blog-masonry" id="blogMasonry">

            {(activeFilter === 'all' || activeFilter === 'Press') && (
              <article className="blog-card stagger-in" data-category="Press" onClick={() => openModal('njcom-spotlight')}>
                <div className="blog-card__image">
                  <img src={IMG + 'people.jpg'} alt="NJ.com Spotlights OMGYRO" />
                  <span className="category-badge" data-cat="Press">Press</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__body-meta">
                    <span className="article-date">Feb 15, 2025</span>
                    <span className="read-time"><i className="fa-regular fa-clock" /> 2 min read</span>
                  </div>
                  <h3>NJ.com Spotlights OMGYRO: Fresh Flavors, Fast Service, Big Momentum</h3>
                  <p className="article-excerpt">NJ.com has spotlighted OMGYRO for our fresh halal flavors, fast service, and the momentum behind our expansion across the state.</p>
                  <span className="read-more-link">Read More <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </article>
            )}

            {(activeFilter === 'all' || activeFilter === 'Guide') && (
              <article className="blog-card stagger-in" data-category="Guide" onClick={() => openModal('best-gyro-spot')}>
                <div className="blog-card__image">
                  <img src={IMG + 'Platters/Compo-Platter.jpeg'} alt="Best Gyro Spot Near You" />
                  <span className="category-badge" data-cat="Guide">Guide</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__body-meta">
                    <span className="article-date">Feb 10, 2025</span>
                    <span className="read-time"><i className="fa-regular fa-clock" /> 3 min read</span>
                  </div>
                  <h3>What Makes OMGYRO the Best Gyro Spot Near You</h3>
                  <p className="article-excerpt">It starts with quality: 100% halal proteins, fresh vegetables, and house-made sauces. Our gyros and platters are made to order so every bite is as good as the first.</p>
                  <span className="read-more-link">Read More <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </article>
            )}

            {(activeFilter === 'all' || activeFilter === 'Partnerships') && (
              <article className="blog-card stagger-in" data-category="Partnerships" onClick={() => openModal('crunch-fitness')}>
                <div className="blog-card__image">
                  <img src={IMG + 'Team.jpeg'} alt="OMGYRO x Crunch Fitness" />
                  <span className="category-badge" data-cat="Partnerships">Partnerships</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__body-meta">
                    <span className="article-date">Feb 5, 2025</span>
                    <span className="read-time"><i className="fa-regular fa-clock" /> 2 min read</span>
                  </div>
                  <h3>OMGYRO x Crunch Fitness: Fueling Livingston with Flavor</h3>
                  <p className="article-excerpt">OMGYRO is proud to partner with Crunch Fitness in Livingston. After your workout, refuel with halal gyros, platters, and bowls that taste great and fit your lifestyle.</p>
                  <span className="read-more-link">Read More <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </article>
            )}

            {(activeFilter === 'all' || activeFilter === 'News') && (
              <article className="blog-card stagger-in" data-category="News" onClick={() => openModal('halal-scene')}>
                <div className="blog-card__image">
                  <img src={IMG + 'Sauce-Bible.jpeg'} alt="OMGYRO Halal Scene" />
                  <span className="category-badge" data-cat="News">News</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__body-meta">
                    <span className="article-date">Feb 1, 2025</span>
                    <span className="read-time"><i className="fa-regular fa-clock" /> 2 min read</span>
                  </div>
                  <h3>OMGYRO: The Flavor That's Taking Over New Jersey's Halal Scene</h3>
                  <p className="article-excerpt">Signature sauces, fresh halal cooking, and a growing footprint — OMGYRO is the flavor that's taking over New Jersey's halal scene.</p>
                  <span className="read-more-link">Read More <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </article>
            )}

          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="newsletter-cta__card">
          <h2><span className="newsletter-cta__typing">Stay in the Loop</span><span className="newsletter-cta__cursor" /></h2>
          <p>Follow us on social media for the latest OMGYRO news, new location announcements, menu drops, and behind-the-scenes content.</p>
          <div className="newsletter-cta__socials">
            <a href="https://www.facebook.com/profile.php?id=61565412359779&mibextid=ZbWKwL" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
            <a href="https://www.instagram.com/omgyrohalal/#" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            <a href="https://www.tiktok.com/@omgyrohalal" target="_blank" rel="noopener" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em"><path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" /></svg>
            </a>
            <a href="mailto:feedback@mamouns.com" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
          </div>
        </div>
      </section>

      {/* Blog Modal Drawer */}
      <div
        className={`blog-modal-overlay${modalKey ? ' active' : ''}`}
        id="blogModalOverlay"
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className="blog-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <div className="blog-modal__progress">
            <div className="blog-modal__progress-bar" id="modalProgressBar" />
          </div>
          <button className="blog-modal__close" onClick={closeModal} aria-label="Close">
            <i className="fa-solid fa-xmark" />
          </button>
          {modalArticle && (
            <>
              <img className="blog-modal__image" src={modalArticle.image} alt={modalArticle.title} />
              <div className="blog-modal__inner">
                <a href="#" className="blog-modal__back" onClick={(e) => { e.preventDefault(); closeModal(); }} aria-label="Back to Blog">
                  <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Blog
                </a>
                <div className="blog-modal__body">
                  <div className="blog-modal__meta">
                    <span className="category-badge" data-cat={modalArticle.category}>{modalArticle.category}</span>
                    <span>{modalArticle.date}</span>
                    <span>{modalArticle.author}</span>
                  </div>
                  <h2>{modalArticle.title}</h2>
                  <div className="modal-content" dangerouslySetInnerHTML={{ __html: modalArticle.content }} />
                  <p className="blog-modal__share-label">Share this article</p>
                  <div className="blog-modal__share">
                    <button className="blog-modal__share-btn" aria-label="Share on Facebook"><i className="fa-brands fa-facebook-f" /></button>
                    <button className="blog-modal__share-btn" aria-label="Share on Twitter"><i className="fa-brands fa-x-twitter" /></button>
                    <button className="blog-modal__share-btn" aria-label="Copy link"><i className="fa-solid fa-link" /></button>
                    <button className="blog-modal__share-btn" aria-label="Share via email"><i className="fa-solid fa-envelope" /></button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

    </main>
  );
}
