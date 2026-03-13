import { useEffect, useState } from 'react';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const spotlightPost = {
  img: IMG + 'The-store.jpg',
  alt: 'OMGYRO Locations in New Jersey',
  category: 'Locations',
  date: 'February 20, 2025',
  readTime: '3 min read',
  title: 'OMGYRO Locations in New Jersey: Now Open & Coming Soon',
  excerpt: 'OMGYRO is growing across New Jersey. Our current locations include South Orange, Union, Paramus, and more — each serving 100% halal, fresh-made gyros, platters, and our signature sauces.',
};

const blogCards = [
  {
    img: IMG + 'people.jpg',
    alt: 'NJ.com Spotlights OMGYRO',
    category: 'Press',
    date: 'Feb 15, 2025',
    readTime: '2 min read',
    title: 'NJ.com Spotlights OMGYRO: Fresh Flavors, Fast Service, Big Momentum',
    excerpt: 'NJ.com has spotlighted OMGYRO for our fresh halal flavors, fast service, and the momentum behind our expansion across the state.',
  },
  {
    img: IMG + 'Platters/Compo-Platter.jpeg',
    alt: 'Best Gyro Spot Near You',
    category: 'Guide',
    date: 'Feb 10, 2025',
    readTime: '3 min read',
    title: 'What Makes OMGYRO the Best Gyro Spot Near You',
    excerpt: 'It starts with quality: 100% halal proteins, fresh vegetables, and house-made sauces. Our gyros and platters are made to order so every bite is as good as the first.',
  },
  {
    img: IMG + 'Team.jpeg',
    alt: 'OMGYRO x Crunch Fitness',
    category: 'Partnerships',
    date: 'Feb 5, 2025',
    readTime: '2 min read',
    title: 'OMGYRO x Crunch Fitness: Fueling Livingston with Flavor',
    excerpt: 'OMGYRO is proud to partner with Crunch Fitness in Livingston. After your workout, refuel with halal gyros, platters, and bowls that taste great and fit your lifestyle.',
  },
  {
    img: IMG + 'Sauce-Bible.jpeg',
    alt: 'OMGYRO Halal Scene',
    category: 'News',
    date: 'Feb 1, 2025',
    readTime: '2 min read',
    title: "OMGYRO: The Flavor That's Taking Over New Jersey's Halal Scene",
    excerpt: "Signature sauces, fresh halal cooking, and a growing footprint — OMGYRO is the flavor that's taking over New Jersey's halal scene.",
  },
];

const catColors: Record<string, string> = {
  Press: 'var(--color-press, #3b82f6)',
  Guide: 'var(--color-guide, #10b981)',
  Partnerships: 'var(--color-partnerships, #8b5cf6)',
  News: 'var(--color-news, #f59e0b)',
  Locations: 'var(--color-locations, #ef4444)',
};

export default function BlogPage() {
  useEffect(() => { document.title = 'Blog | OMGyro Halal'; }, []);
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'Press', 'Guide', 'Partnerships', 'News', 'Locations'];

  const visibleCards = activeFilter === 'all'
    ? blogCards
    : blogCards.filter(c => c.category === activeFilter);

  const spotlightVisible = activeFilter === 'all' || activeFilter === 'Locations';

  return (
    <main className="site-content__main page-id--blog">

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
              <span>OMGYRO NEWS &bull; STORIES &bull; UPDATES</span>
            </span>
          </div>
          <h1 className="blog-hero__title">
            <span className="blog-title-line">OMGYRO</span>
            <span className="blog-title-line blog-title-line--accent">BLOG</span>
          </h1>
          <p className="blog-hero__subtitle">News, stories, and behind-the-scenes from New Jersey's fastest-growing halal brand.</p>
          <div className="blog-hero__cta">
            <a href="#filterBar" className="blog-hero-btn blog-hero-btn--primary">
              <span>Browse Stories</span>
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="blog-hero__visual">
          <div className="blog-floating-cards">
            <div className="blog-float-card blog-float-card--1"><i className="fa-solid fa-location-dot" /><span>New Locations</span></div>
            <div className="blog-float-card blog-float-card--2"><i className="fa-solid fa-utensils" /><span>Food Guides</span></div>
            <div className="blog-float-card blog-float-card--3"><i className="fa-solid fa-handshake" /><span>Partnerships</span></div>
            <div className="blog-float-card blog-float-card--4"><i className="fa-solid fa-newspaper" /><span>Press Coverage</span></div>
          </div>
        </div>
        <div className="blog-scroll-indicator">
          <div className="blog-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="filter-bar" id="filterBar">
        <div className="filter-bar__inner">
          {filters.map(f => (
            <button
              key={f}
              className={'filter-pill' + (activeFilter === f ? ' active' : '')}
              onClick={() => setActiveFilter(f)}
            >
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
      </div>

      {/* Spotlight */}
      {spotlightVisible && (
        <section className="spotlight-section" id="spotlightSection">
          <div className="container">
            <div className="spotlight-label">
              <span className="spotlight-dot" />
              Spotlight
            </div>
            <article className="spotlight-card">
              <div className="spotlight-card__image-wrap">
                <img src={spotlightPost.img} alt={spotlightPost.alt} />
              </div>
              <div className="spotlight-card__content">
                <div className="spotlight-card__meta">
                  <span className="category-badge" data-cat={spotlightPost.category}>{spotlightPost.category}</span>
                  <span className="article-date">{spotlightPost.date}</span>
                  <span className="read-time"><i className="fa-regular fa-clock" /> {spotlightPost.readTime}</span>
                </div>
                <h3>{spotlightPost.title}</h3>
                <p className="article-excerpt">{spotlightPost.excerpt}</p>
                <a
                  href="https://finance.yahoo.com/news/omgyro-expands-footprint-across-jersey-125500175.html"
                  className="btn-read-article"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Article <i className="fa-solid fa-arrow-right" />
                </a>
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
            {visibleCards.map(({ img, alt, category, date, readTime, title, excerpt }) => (
              <article key={title} className="blog-card stagger-in" data-category={category}>
                <div className="blog-card__image">
                  <img src={img} alt={alt} />
                  <span className="category-badge" data-cat={category}>{category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__body-meta">
                    <span className="article-date">{date}</span>
                    <span className="read-time"><i className="fa-regular fa-clock" /> {readTime}</span>
                  </div>
                  <h3>{title}</h3>
                  <p className="article-excerpt">{excerpt}</p>
                  <span className="read-more-link">Read More <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="newsletter-cta__card">
          <h2><span className="newsletter-cta__typing">Stay in the Loop</span></h2>
          <p>Follow us on social media for the latest OMGYRO news, new location announcements, menu drops, and behind-the-scenes content.</p>
          <div className="newsletter-cta__socials">
            <a href="https://www.facebook.com/profile.php?id=61565412359779" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
            <a href="https://www.instagram.com/omgyrohalal/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            <a href="https://www.tiktok.com/@omgyrohalal" target="_blank" rel="noopener" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em"><path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg>
            </a>
            <a href="mailto:feedback@mamouns.com" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
          </div>
        </div>
      </section>

    </main>
  );
}
