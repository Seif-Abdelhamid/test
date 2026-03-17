import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

export default function CateringPage() {
  useEffect(() => { document.title = 'Catering | OMGyro Halal'; }, []);
  const [activeTab, setActiveTab] = useState('trays');

  return (
    <main className="site-content__main page-id--catering">

      {/* Hero */}
      <section className="menu-hero" aria-label="Catering">
        <div className="menu-hero__bg" role="presentation" aria-hidden="true" />
        <div className="menu-hero__particles" aria-hidden="true">
          <span className="menu-hero__particle menu-hero__particle--1" />
          <span className="menu-hero__particle menu-hero__particle--2" />
          <span className="menu-hero__particle menu-hero__particle--3" />
          <span className="menu-hero__particle menu-hero__particle--4" />
          <span className="menu-hero__particle menu-hero__particle--5" />
          <span className="menu-hero__particle menu-hero__particle--6" />
        </div>
        <div className="menu-hero__floating" aria-hidden="true">
          <span className="menu-hero__float menu-hero__float--1"><i className="fa-solid fa-utensils" /></span>
          <span className="menu-hero__float menu-hero__float--2"><i className="fa-solid fa-pepper-hot" /></span>
          <span className="menu-hero__float menu-hero__float--3"><i className="fa-solid fa-bowl-food" /></span>
          <span className="menu-hero__float menu-hero__float--4"><i className="fa-solid fa-burger" /></span>
          <span className="menu-hero__float menu-hero__float--5"><i className="fa-solid fa-ice-cream" /></span>
          <span className="menu-hero__float menu-hero__float--6"><i className="fa-solid fa-mug-hot" /></span>
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
            <a href="https://omgyrohalal.square.site/" className="menu-hero__btn m-magnetic" target="_blank" rel="noopener">
              <span className="menu-hero__btn-text">ORDER CATERING</span>
              <span className="menu-hero__btn-icon"><i className="fa-solid fa-arrow-right" /></span>
              <span className="m-confetti-container" aria-hidden="true" />
            </a>
          </div>
          <a href="#menus" className="menu-hero__scroll" aria-label="Scroll to catering menu">
            <span className="menu-hero__scroll-line" />
            <span className="menu-hero__scroll-label">BROWSE CATERING</span>
          </a>
        </div>
      </section>

      {/* Ticker */}
      <div className="menu-ticker" aria-hidden="true">
        <div className="menu-ticker__track">
          <span className="menu-ticker__item">TRAYS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SANDWICH TRAYS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SANDWICH STATIONS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SIDE TRAYS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">PASTRIES</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">DRINKS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">EXTRAS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">TRAYS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SANDWICH TRAYS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SANDWICH STATIONS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SIDE TRAYS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">PASTRIES</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">DRINKS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">EXTRAS</span><span className="menu-ticker__dot" />
        </div>
      </div>

      {/* Featured Items */}
      <section className="menu-featured" aria-label="Featured catering items">
        <div className="menu-featured__wrap">
          <div className="menu-featured__header m-reveal">
            <span className="menu-featured__label">MOST POPULAR</span>
            <h2 className="menu-featured__h2">Catering Favorites</h2>
            <p className="menu-featured__sub">The items everyone keeps ordering for their events</p>
          </div>
          <div className="menu-featured__grid">
            <div className="menu-featured__card m-reveal" data-featured-link="trays">
              <div className="menu-featured__card-img">
                <img src={IMG + 'Platters/Compo-Platter.jpeg'} alt="Vegetarian Platter" loading="lazy" />
                <span className="menu-featured__badge"><i className="fa-solid fa-fire" /> #1 Seller</span>
              </div>
              <div className="menu-featured__card-body">
                <h3 className="menu-featured__card-name">Vegetarian Platter</h3>
                <p className="menu-featured__card-desc">A generous vegetarian platter with falafel, hummus, baba ganouj, tabbouleh, and more</p>
              </div>
            </div>
            <div className="menu-featured__card m-reveal" data-featured-link="trays">
              <div className="menu-featured__card-img">
                <img src={IMG + 'Platters/Lamp-Chicken.jpeg'} alt="Meat Platter" loading="lazy" />
                <span className="menu-featured__badge"><i className="fa-solid fa-users" /> Feeds 8-12</span>
              </div>
              <div className="menu-featured__card-body">
                <h3 className="menu-featured__card-name">Meat Platter</h3>
                <p className="menu-featured__card-desc">A hearty meat platter with shawarma, chicken kebob, and all the fixings</p>
              </div>
            </div>
            <div className="menu-featured__card m-reveal" data-featured-link="stations">
              <div className="menu-featured__card-img">
                <img src={IMG + 'Sides/FalafelBox.jpeg'} alt="Falafel Station" loading="lazy" />
                <span className="menu-featured__badge"><i className="fa-solid fa-hands" /> DIY Setup</span>
              </div>
              <div className="menu-featured__card-body">
                <h3 className="menu-featured__card-name">Falafel Station</h3>
                <p className="menu-featured__card-desc">A DIY falafel station with all the toppings &mdash; let your guests build their own</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category nav */}
      <nav className="tabs-bar" aria-label="Catering categories" id="tabsBar">
        <div className="tabs-bar__inner">
          <ul className="tabs-nav" role="tablist">
            {[
              { id: 'trays', label: 'Trays' },
              { id: 'sandwich-trays', label: 'Sandwich Trays' },
              { id: 'stations', label: 'Stations' },
              { id: 'side-trays', label: 'Side Trays' },
              { id: 'pastries-drinks', label: 'Pastries & Drinks' },
              { id: 'extras', label: 'Extras' },
            ].map(({ id, label }) => (
              <li key={id} role="presentation">
                <button
                  id={'tab-' + id}
                  className={'btn btn-tabs' + (activeTab === id ? ' active' : '')}
                  role="tab"
                  aria-selected={activeTab === id}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="menus" aria-label="menus-section" className="content revealable">
        <div className="tabs">
          <div className="tabs-content">

            {/* TRAYS */}
            {activeTab === 'trays' && (
              <section id="trays" className="menu-category-section" role="region" aria-labelledby="tab-trays">
                <div className="menu-description container-sm">
                  <h1>Trays</h1><p>large catering trays perfect for any event or gathering</p>
                </div>
                <div className="menu-flex-container"><section className="menu-section"><ul className="menu-flex-layout">
                  <li className="menu-item menu-item--flex" data-popular="">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Vegetarian Platter" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Vegetarian Platter</p></div>
                    <p className="menu-item__details--description">falafel, hummus, baba ganouj, tabbouleh, grape leaves, and pita bread</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Lamp-Chicken.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Meat Platter" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Meat Platter</p></div>
                    <p className="menu-item__details--description">shawarma, chicken kebob, seasoned rice, hummus, salad, and pita bread</p>
                  </li>
                </ul></section></div>
              </section>
            )}

            {/* SANDWICH TRAYS */}
            {activeTab === 'sandwich-trays' && (
              <section id="sandwich-trays" className="menu-category-section" role="region" aria-labelledby="tab-sandwich-trays">
                <div className="menu-description container-sm">
                  <h1>Sandwich Trays</h1><p>trays of our signature sandwiches, available in 10 or 24 packs</p>
                </div>
                <div className="menu-flex-container"><section className="menu-section"><ul className="menu-flex-layout">
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Sides/FalafelBox.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Tray" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Tray (10/24 Pack)</p></div>
                    <p className="menu-item__details--description">crispy falafel sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/House-Chicken.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Chicken Tray" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Chicken Tray (10/24 Pack)</p></div>
                    <p className="menu-item__details--description">chicken kebob sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Falafel-Chicken.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Shawarma Tray" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Shawarma Tray (10/24 Pack)</p></div>
                    <p className="menu-item__details--description">shawarma sandwiches in a pita with lettuce, tomatoes, onions, and tahineh sauce</p>
                  </li>
                </ul></section></div>
              </section>
            )}

            {/* STATIONS */}
            {activeTab === 'stations' && (
              <section id="stations" className="menu-category-section" role="region" aria-labelledby="tab-stations">
                <div className="menu-description container-sm">
                  <h1>Sandwich Stations</h1><p>DIY sandwich stations with all the fixings &mdash; let your guests build their own</p>
                </div>
                <div className="menu-flex-container"><section className="menu-section"><ul className="menu-flex-layout">
                  <li className="menu-item menu-item--flex" data-popular="">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Sides/FalafelBox.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Station" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Station</p></div>
                    <p className="menu-item__details--description">crispy falafel with pita, lettuce, tomatoes, onions, tahineh, and hot sauce</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/House-Chicken.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Chicken Station" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Chicken Station</p></div>
                    <p className="menu-item__details--description">grilled chicken kebob with pita, lettuce, tomatoes, onions, tahineh, and hot sauce</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Lamp-Chicken.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Shawarma Station" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Shawarma Station</p></div>
                    <p className="menu-item__details--description">thinly sliced shawarma with pita, lettuce, tomatoes, onions, tahineh, and hot sauce</p>
                  </li>
                </ul></section></div>
              </section>
            )}

            {/* SIDE TRAYS */}
            {activeTab === 'side-trays' && (
              <section id="side-trays" className="menu-category-section" role="region" aria-labelledby="tab-side-trays">
                <div className="menu-description container-sm">
                  <h1>Side Trays</h1><p>large trays of our most popular sides</p>
                </div>
                <div className="menu-flex-container"><section className="menu-section"><ul className="menu-flex-layout">
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Sides/FalafelBox.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Tray 30pc" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Tray 30pc</p></div>
                    <p className="menu-item__details--description">30 pieces of our crispy, golden falafel</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Hummus / Baba Ganouj" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Hummus / Baba Ganouj</p></div>
                    <p className="menu-item__details--description">large tray of our home-made hummus or roasted eggplant baba ganouj</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Tabbouleh" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Tabbouleh</p></div>
                    <p className="menu-item__details--description">bulgur wheat salad with finely chopped mint, parsley, garlic, onions, and peppers</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Seasoned Rice" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Seasoned Rice</p></div>
                    <p className="menu-item__details--description">large tray of our signature seasoned rice</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Sides/SeasonFries.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Seasoned Fries" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Seasoned Fries</p></div>
                    <p className="menu-item__details--description">large tray of our seasoned fries with our special blend of spices</p>
                  </li>
                </ul></section></div>
              </section>
            )}

            {/* PASTRIES & DRINKS */}
            {activeTab === 'pastries-drinks' && (
              <section id="pastries-drinks" className="menu-category-section" role="region" aria-labelledby="tab-pastries-drinks">
                <div className="menu-description container-sm">
                  <h1>Pastries &amp; Drinks</h1><p>sweet treats and refreshing drinks for your event</p>
                </div>
                <div className="menu-flex-container"><section className="menu-section"><ul className="menu-flex-layout">
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Desserts/Baklava.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Baklava Walnuts 72pc" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Baklava Walnuts 72pc</p></div>
                    <p className="menu-item__details--description">72 pieces of traditional fillo dough baklava stuffed with walnuts</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Desserts/Baklava.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Baklava Pistachios 72pc" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Baklava Pistachios 72pc</p></div>
                    <p className="menu-item__details--description">72 pieces of traditional fillo dough baklava stuffed with pistachios</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Drinks/Lmonade.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Specialty Drinks 1gal" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Specialty Drinks 1gal</p></div>
                    <p className="menu-item__details--description">one gallon of your choice: mint lemonade, mango, tamarind, or iced tea</p>
                  </li>
                </ul></section></div>
              </section>
            )}

            {/* EXTRAS */}
            {activeTab === 'extras' && (
              <section id="extras" className="menu-category-section" role="region" aria-labelledby="tab-extras">
                <div className="menu-description container-sm">
                  <h1>Extra Sides</h1><p>add-ons and extras to complete your catering order</p>
                </div>
                <div className="menu-flex-container"><section className="menu-section"><ul className="menu-flex-layout">
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Hot Sauce" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Hot Sauce</p></div>
                    <p className="menu-item__details--description">spicy sauce made from the finest, imported hot pepper spices</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Tahineh Sauce" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Tahineh Sauce</p></div>
                    <p className="menu-item__details--description">smooth sesame seed-based sauce</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Garlic Sauce" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Garlic Sauce</p></div>
                    <p className="menu-item__details--description">savory, garlic infused sauce</p>
                  </li>
                  <li className="menu-item menu-item--flex">
                    <div className="image-thumbnail" style={{ backgroundImage: "url('" + IMG + "Platters/Compo-Platter.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Bag of Pita Bread" /></div>
                    <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Bag of Pita Bread</p></div>
                    <p className="menu-item__details--description">6 pieces; baked fresh in-house daily</p>
                  </li>
                </ul></section></div>
              </section>
            )}

          </div>
        </div>
      </section>

      {/* Sauce Cross-Sell */}
      <section className="menu-sauces m-reveal" aria-label="Our sauces">
        <div className="menu-sauces__wrap">
          <span className="menu-sauces__eyebrow">THE SAUCE BIBLE</span>
          <h2 className="menu-sauces__h2">Bring The Flavor Home</h2>
          <p className="menu-sauces__sub">Our legendary sauces are now available to buy. Drizzle, dip, and pour to your heart's content.</p>
          <div className="menu-sauces__grid">
            <Link to="/store" className="menu-sauces__card" data-heat="mild">
              <div className="menu-sauces__card-glow" />
              <div className="menu-sauces__card-img"><img src={IMG + 'Sauces/Green-Sauce.png'} alt="Green Sauce" loading="lazy" /></div>
              <div className="menu-sauces__card-body">
                <span className="menu-sauces__card-tag"><i className="fa-solid fa-leaf" /> Mild</span>
                <div className="menu-sauces__card-name">Green Sauce</div>
                <p className="menu-sauces__card-desc">Fresh, herby &amp; zesty</p>
                <span className="menu-sauces__card-cta">Shop Now <i className="fa-solid fa-arrow-right" /></span>
              </div>
            </Link>
            <Link to="/store" className="menu-sauces__card" data-heat="hot">
              <div className="menu-sauces__card-glow" />
              <div className="menu-sauces__card-img"><img src={IMG + 'Sauces/Hot-Sauce.png'} alt="Hot Sauce" loading="lazy" /></div>
              <div className="menu-sauces__card-body">
                <span className="menu-sauces__card-tag"><i className="fa-solid fa-pepper-hot" /> Hot</span>
                <div className="menu-sauces__card-name">Hot Sauce</div>
                <p className="menu-sauces__card-desc">Bold heat, rich flavor</p>
                <span className="menu-sauces__card-cta">Shop Now <i className="fa-solid fa-arrow-right" /></span>
              </div>
            </Link>
            <Link to="/store" className="menu-sauces__card" data-heat="extra">
              <div className="menu-sauces__card-glow" />
              <div className="menu-sauces__card-img"><img src={IMG + 'Sauces/OMG-Sauce.png'} alt="OMG Sauce" loading="lazy" /></div>
              <div className="menu-sauces__card-body">
                <span className="menu-sauces__card-tag"><i className="fa-solid fa-fire" /> Extra Hot</span>
                <div className="menu-sauces__card-name">OMG Sauce</div>
                <p className="menu-sauces__card-desc">Our signature fire</p>
                <span className="menu-sauces__card-cta">Shop Now <i className="fa-solid fa-arrow-right" /></span>
              </div>
            </Link>
            <Link to="/store" className="menu-sauces__card" data-heat="creamy">
              <div className="menu-sauces__card-glow" />
              <div className="menu-sauces__card-img"><img src={IMG + 'Sauces/White-Sauce.png'} alt="White Sauce" loading="lazy" /></div>
              <div className="menu-sauces__card-body">
                <span className="menu-sauces__card-tag"><i className="fa-solid fa-droplet" /> Creamy</span>
                <div className="menu-sauces__card-name">White Sauce</div>
                <p className="menu-sauces__card-desc">Smooth &amp; tangy classic</p>
                <span className="menu-sauces__card-cta">Shop Now <i className="fa-solid fa-arrow-right" /></span>
              </div>
            </Link>
          </div>
          <Link to="/store" className="menu-sauces__btn m-magnetic">
            <span>SHOP ALL SAUCES</span>
            <span className="menu-sauces__btn-icon"><i className="fa-solid fa-arrow-right" /></span>
            <span className="m-confetti-container" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Rewards Callout */}
      <section className="menu-rewards-cta m-reveal" aria-label="Earn rewards">
        <div className="menu-rewards-cta__inner">
          <div className="menu-rewards-cta__copy">
            <span className="menu-rewards-cta__eyebrow">OMGYRO REWARDS</span>
            <h3 className="menu-rewards-cta__h3">Earn Free Food<br />Every Time You Order</h3>
            <p className="menu-rewards-cta__text">Every $1 you spend earns 10 points. Stack them up and redeem for free food — from fries to full entrees.</p>
            <Link to="/rewards" className="menu-rewards-cta__btn m-magnetic">
              <span>JOIN REWARDS</span>
              <span className="menu-rewards-cta__btn-icon"><i className="fa-solid fa-arrow-right" /></span>
              <span className="m-confetti-container" aria-hidden="true" />
            </Link>
          </div>
          <div className="menu-rewards-cta__visual">
            <div className="menu-rewards-cta__stats">
              <div className="menu-rewards-cta__stat m-reveal">
                <span className="menu-rewards-cta__stat-icon"><i className="fa-solid fa-coins" /></span>
                <span className="menu-rewards-cta__stat-num">10x</span>
                <span className="menu-rewards-cta__stat-label">POINTS PER $1</span>
              </div>
              <div className="menu-rewards-cta__stat m-reveal">
                <span className="menu-rewards-cta__stat-icon"><i className="fa-solid fa-gift" /></span>
                <span className="menu-rewards-cta__stat-num">FREE</span>
                <span className="menu-rewards-cta__stat-label">BIRTHDAY REWARD</span>
              </div>
              <div className="menu-rewards-cta__stat m-reveal">
                <span className="menu-rewards-cta__stat-icon"><i className="fa-solid fa-bolt" /></span>
                <span className="menu-rewards-cta__stat-num">85</span>
                <span className="menu-rewards-cta__stat-label">PTS FOR FRIES</span>
              </div>
              <div className="menu-rewards-cta__stat m-reveal">
                <span className="menu-rewards-cta__stat-icon"><i className="fa-solid fa-trophy" /></span>
                <span className="menu-rewards-cta__stat-num">VIP</span>
                <span className="menu-rewards-cta__stat-label">EXCLUSIVE DEALS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="menu-order-cta" aria-label="Order catering">
        <div className="menu-order-cta__inner">
          <h2 className="menu-order-cta__title">Ready to order catering?</h2>
          <p className="menu-order-cta__text">Order online and we'll have your catering order ready for pickup.</p>
          <div className="menu-order-cta__actions">
            <a href="https://omgyrohalal.square.site/" className="menu-order-cta__btn m-magnetic" target="_blank" rel="noopener">
              <span className="menu-order-cta__btn-text">Order catering</span>
              <span className="menu-order-cta__btn-icon"><i className="fa-solid fa-arrow-right" /></span>
              <span className="m-confetti-container" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
