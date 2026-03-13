import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const tickerItems = ['TRAYS', 'SANDWICH TRAYS', 'STATIONS', 'SIDE TRAYS', 'PASTRIES & DRINKS', 'EXTRAS'];

const featured = [
  { img: IMG + 'Platters/Compo-Platter.jpeg', name: 'Vegetarian Platter', desc: 'A generous vegetarian platter with falafel, hummus, baba ganouj, tabbouleh, and more', badge: '#1 Seller' },
  { img: IMG + 'Platters/Lamp-Chicken.jpeg', name: 'Meat Platter', desc: 'A hearty meat platter with shawarma, chicken kebob, and all the fixings' },
  { img: IMG + 'Sides/FalafelBox.jpeg', name: 'Falafel Station', desc: 'A DIY falafel station with all the toppings — let your guests build their own' },
];

const categories = [
  { id: 'trays', label: 'Trays', subtitle: 'Large catering trays perfect for any event or gathering', items: [
    { name: 'Vegetarian Platter', desc: 'Falafel, hummus, baba ganouj, tabbouleh, grape leaves, and pita bread', popular: true },
    { name: 'Meat Platter', desc: 'Shawarma, chicken kebob, seasoned rice, hummus, salad, and pita bread' },
  ]},
  { id: 'sandwich-trays', label: 'Sandwich Trays', subtitle: 'Trays of our signature sandwiches, available in 10 or 24 packs', items: [
    { name: 'Falafel Tray (10/24 Pack)', desc: 'Crispy falafel sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce' },
    { name: 'Chicken Tray (10/24 Pack)', desc: 'Chicken kebob sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce' },
    { name: 'Shawarma Tray (10/24 Pack)', desc: 'Shawarma sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce' },
  ]},
  { id: 'stations', label: 'Stations', subtitle: 'DIY sandwich stations with all the fixings — let your guests build their own', items: [
    { name: 'Falafel Station', desc: 'Crispy falafel with pita, lettuce, tomatoes, onions, tahineh, and hot sauce', popular: true },
    { name: 'Chicken Station', desc: 'Grilled chicken kebob with pita, lettuce, tomatoes, onions, tahineh, and hot sauce' },
    { name: 'Shawarma Station', desc: 'Thinly sliced shawarma with pita, lettuce, tomatoes, onions, tahineh, and hot sauce' },
  ]},
  { id: 'side-trays', label: 'Side Trays', subtitle: 'Large trays of our most popular sides', items: [
    { name: 'Falafel Tray 30pc', desc: '30 pieces of our crispy, golden falafel' },
    { name: 'Hummus / Baba Ganouj', desc: 'Large tray of our home-made hummus or roasted eggplant baba ganouj' },
    { name: 'Tabbouleh', desc: 'Bulgur wheat salad with finely chopped mint, parsley, garlic, onions, and peppers' },
    { name: 'Seasoned Rice', desc: 'Large tray of our signature seasoned rice' },
    { name: 'Seasoned Fries', desc: 'Large tray of our seasoned fries with our special blend of spices' },
  ]},
  { id: 'pastries-drinks', label: 'Pastries & Drinks', subtitle: 'Sweet treats and refreshing drinks for your event', items: [
    { name: 'Baklava Walnuts 72pc', desc: '72 pieces of traditional fillo dough baklava stuffed with walnuts' },
    { name: 'Baklava Pistachios 72pc', desc: '72 pieces of traditional fillo dough baklava stuffed with pistachios' },
    { name: 'Specialty Drinks 1gal', desc: 'One gallon of your choice: mint lemonade, mango, tamarind, or iced tea' },
  ]},
  { id: 'extras', label: 'Extra Sides', subtitle: 'Add-ons and extras to complete your catering order', items: [
    { name: 'Hot Sauce', desc: 'Spicy sauce made from the finest, imported hot pepper spices' },
    { name: 'Tahineh Sauce', desc: 'Smooth sesame seed-based sauce' },
    { name: 'Garlic Sauce', desc: 'Savory, garlic infused sauce' },
    { name: 'Bag of Pita Bread', desc: '6 pieces; baked fresh in-house daily' },
  ]},
];

export default function CateringPage() {
  useEffect(() => { document.title = 'Catering | OMGyro Halal'; }, []);
  const [activeTab, setActiveTab] = useState('trays');
  const activeCat = categories.find(c => c.id === activeTab)!;

  return (
    <main className="site-content__main page-id--catering">

      {/* Hero */}
      <section className="menu-hero" aria-label="Catering">
        <div className="menu-hero__bg" role="presentation" aria-hidden="true" />
        <div className="menu-hero__particles" aria-hidden="true">
          {[1,2,3,4,5,6].map(n => <span key={n} className={'menu-hero__particle menu-hero__particle--' + n} />)}
        </div>
        <div className="menu-hero__floating" aria-hidden="true">
          <span className="menu-hero__float menu-hero__float--1"><i className="fa-solid fa-utensils" /></span>
          <span className="menu-hero__float menu-hero__float--2"><i className="fa-solid fa-champagne-glasses" /></span>
          <span className="menu-hero__float menu-hero__float--3"><i className="fa-solid fa-fire" /></span>
          <span className="menu-hero__float menu-hero__float--4"><i className="fa-solid fa-star" /></span>
          <span className="menu-hero__float menu-hero__float--5"><i className="fa-solid fa-certificate" /></span>
          <span className="menu-hero__float menu-hero__float--6"><i className="fa-solid fa-truck" /></span>
        </div>
        <div className="menu-hero__inner">
          <div className="menu-hero__badge">
            <i className="fa-solid fa-champagne-glasses" />
            <span>HALAL &bull; FRESH &bull; FEEDS A CROWD</span>
          </div>
          <h1 className="menu-hero__title">
            <span className="menu-hero__title-line menu-hero__title-line--1">OUR</span>
            <span className="menu-hero__title-line menu-hero__title-line--2">CATERING</span>
          </h1>
          <p className="menu-hero__tagline">Pick a category below and explore our catering options.</p>
          <div className="menu-hero__cta">
            <a href="https://omgyrohalal.square.site/" className="menu-hero__btn" target="_blank" rel="noopener noreferrer">
              <span className="menu-hero__btn-text">ORDER CATERING</span>
              <span className="menu-hero__btn-icon"><i className="fa-solid fa-arrow-right" /></span>
            </a>
          </div>
          <a href="#menus" className="menu-hero__scroll" aria-label="Scroll to catering menu">
            <span className="menu-hero__scroll-line" />
            <span className="menu-hero__scroll-label">BROWSE MENU</span>
          </a>
        </div>
      </section>

      {/* Ticker */}
      <div className="menu-ticker" aria-hidden="true">
        <div className="menu-ticker__track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}><span className="menu-ticker__item">{item}</span><span className="menu-ticker__dot" /></span>
          ))}
        </div>
      </div>

      {/* Featured */}
      <section className="menu-featured" aria-label="Featured catering items">
        <div className="menu-featured__wrap">
          <div className="menu-featured__header m-reveal">
            <span className="menu-featured__label">MOST POPULAR</span>
            <h2 className="menu-featured__h2">Catering Favorites</h2>
            <p className="menu-featured__sub">The items everyone keeps ordering for their events</p>
          </div>
          <div className="menu-featured__grid">
            {featured.map(({ img, name, desc, badge }) => (
              <div key={name} className="menu-featured__card m-reveal">
                <div className="menu-featured__card-img">
                  <img src={img} alt={name} loading="lazy" />
                  {badge && <span className="menu-featured__badge"><i className="fa-solid fa-fire" /> {badge}</span>}
                </div>
                <div className="menu-featured__card-body">
                  <h3 className="menu-featured__card-name">{name}</h3>
                  <p className="menu-featured__card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs nav */}
      <nav className="tabs-bar" id="tabsBar">
        <div className="tabs-bar__inner">
          <ul className="tabs-nav" role="tablist">
            {categories.map(cat => (
              <li key={cat.id} role="presentation">
                <button
                  className={'btn btn-tabs' + (activeTab === cat.id ? ' active' : '')}
                  role="tab"
                  aria-selected={activeTab === cat.id}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Menu Content */}
      <section id="menus" aria-label="menus-section" className="content revealable">
        <div className="tabs">
          <div className="tabs-content">
            <section className="menu-category-section" role="region">
              <div className="menu-description container-sm">
                <h1>{activeCat.label}</h1>
                <p>{activeCat.subtitle}</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    {activeCat.items.map(({ name, desc, popular }) => (
                      <li key={name} className={'menu-item menu-item--flex' + (popular ? '' : '')} {...(popular ? { 'data-popular': true } : {})}>
                        <div className="menu-item__heading">
                          <p className="menu-item__heading menu-item__heading--name">{name}</p>
                        </div>
                        <p className="menu-item__details--description">{desc}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>

    </main>
  );
}
