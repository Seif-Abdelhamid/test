import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

type TabId = 'rice-platters' | 'gyros' | 'loaded-fries' | 'salads' | 'from-the-fryer' | 'sides' | 'desserts' | 'drinks';

export default function MenuPage() {
  useEffect(() => { document.title = 'Menu | OMGyro Halal'; }, []);
  const [activeTab, setActiveTab] = useState<TabId>('rice-platters');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', img: '', desc: '' });
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  function openModal(title: string, img: string, desc: string) {
    setModalData({ title, img, desc });
    setModalOpen(true);
  }

  return (
    <main className="site-content__main page-id--1001175">

      {/* Hero */}
      <section className="menu-hero" aria-label="Menu">
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
            <i className="fa-solid fa-fire" />
            <span>HALAL &bull; FRESH &bull; MADE TO ORDER</span>
          </div>
          <h1 className="menu-hero__title">
            <span className="menu-hero__title-line menu-hero__title-line--1">OUR</span>
            <span className="menu-hero__title-line menu-hero__title-line--2">MENU</span>
          </h1>
          <p className="menu-hero__tagline">Pick a category below and explore. Then order online for pickup or delivery.</p>
          <div className="menu-hero__cta">
            <a href="https://omgyrohalal.square.site/" className="menu-hero__btn m-magnetic" target="_blank" rel="noopener">
              <span className="menu-hero__btn-text">ORDER NOW</span>
              <span className="menu-hero__btn-icon"><i className="fa-solid fa-arrow-right" /></span>
              <span className="m-confetti-container" aria-hidden="true" />
            </a>
            <button type="button" className="menu-hero__btn menu-hero__btn--download" aria-label="Download menu as PDF" onClick={() => setDownloadModalOpen(true)}>
              <span className="menu-hero__btn-icon"><i className="fa-solid fa-file-pdf" aria-hidden="true" /></span>
              <span className="menu-hero__btn-text">Download menu</span>
            </button>
          </div>
          <a href="#menus" className="menu-hero__scroll" aria-label="Scroll to menu">
            <span className="menu-hero__scroll-line" />
            <span className="menu-hero__scroll-label">BROWSE MENU</span>
          </a>
        </div>
      </section>

      {/* Ticker */}
      <div className="menu-ticker" aria-hidden="true">
        <div className="menu-ticker__track">
          <span className="menu-ticker__item">RICE PLATTERS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">GYROS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">LOADED FRIES</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SALADS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">FROM THE FRYER</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SIDES</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">DESSERTS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">DRINKS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">RICE PLATTERS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">GYROS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">LOADED FRIES</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SALADS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">FROM THE FRYER</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">SIDES</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">DESSERTS</span><span className="menu-ticker__dot" />
          <span className="menu-ticker__item">DRINKS</span><span className="menu-ticker__dot" />
        </div>
      </div>

      {/* Featured Items */}
      <section className="menu-featured" aria-label="Featured items">
        <div className="menu-featured__wrap">
          <div className="menu-featured__header m-reveal">
            <span className="menu-featured__label">MOST POPULAR</span>
            <h2 className="menu-featured__h2">Fan Favorites</h2>
            <p className="menu-featured__sub">The items everyone keeps coming back for</p>
          </div>
          <div className="menu-featured__grid">
            <div className="menu-featured__card m-reveal" data-featured-link="rice-platters" onClick={() => setActiveTab('rice-platters')}>
              <div className="menu-featured__card-img">
                <img src={IMG + 'Platters/Compo-Platter.jpeg'} alt="Combo Platter" loading="lazy" />
                <span className="menu-featured__badge"><i className="fa-solid fa-fire" /> #1 Seller</span>
                <span className="menu-featured__card-price">$15.99</span>
              </div>
              <div className="menu-featured__card-body">
                <h3 className="menu-featured__card-name">Combo Platter</h3>
                <p className="menu-featured__card-desc">A delicious combination platter with your choice of proteins over salad or rice</p>
              </div>
            </div>
            <div className="menu-featured__card m-reveal" data-featured-link="gyros" onClick={() => setActiveTab('gyros')}>
              <div className="menu-featured__card-img">
                <img src={IMG + 'Gyros/Combo-Gyro.jpeg'} alt="Combo Gyro" loading="lazy" />
                <span className="menu-featured__badge"><i className="fa-solid fa-star" /> Fan Fave</span>
                <span className="menu-featured__card-price">$13.99</span>
              </div>
              <div className="menu-featured__card-body">
                <h3 className="menu-featured__card-name">Combo Gyro</h3>
                <p className="menu-featured__card-desc">A combination gyro with your choice of proteins in a warm pita</p>
              </div>
            </div>
            <div className="menu-featured__card m-reveal" data-featured-link="loaded-fries" onClick={() => setActiveTab('loaded-fries')}>
              <div className="menu-featured__card-img">
                <img src={IMG + 'Fries/Combo-Fries.jpeg'} alt="Combo Fries" loading="lazy" />
                <span className="menu-featured__badge"><i className="fa-solid fa-bolt" /> Trending</span>
                <span className="menu-featured__card-price">$12.99</span>
              </div>
              <div className="menu-featured__card-body">
                <h3 className="menu-featured__card-name">Loaded Fries</h3>
                <p className="menu-featured__card-desc">Loaded fries with your choice of toppings — the ultimate comfort food</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Nav */}
      <nav className="tabs-bar" aria-label="Menu categories" id="tabsBar">
        <div className="tabs-bar__inner">
          <ul className="tabs-nav" role="tablist">
            {([
              ['rice-platters', 'Rice Platters'],
              ['gyros', 'Gyros'],
              ['loaded-fries', 'Loaded Fries'],
              ['salads', 'Salads'],
              ['from-the-fryer', 'From The Fryer'],
              ['sides', 'Sides'],
              ['desserts', 'Desserts'],
              ['drinks', 'Drinks'],
            ] as [TabId, string][]).map(([id, label]) => (
              <li key={id} role="presentation">
                <a
                  id={`tab-${id}`}
                  className={`btn btn-tabs${activeTab === id ? ' active' : ''}`}
                  href={`#${id}`}
                  role="tab"
                  aria-selected={activeTab === id}
                  tabIndex={activeTab === id ? 0 : -1}
                  onClick={e => { e.preventDefault(); setActiveTab(id); }}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="menus" aria-label="menus-section" className="content revealable">
        <div className="tabs">
          <div className="tabs-content">

            {/* Rice Platters */}
            <section id="rice-platters" className="menu-category-section" role="region" aria-labelledby="tab-rice-platters" style={{ display: activeTab === 'rice-platters' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>Rice Platters</h1>
                <p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    <li className="menu-item menu-item--flex" data-popular onClick={() => openModal('Combo Platter', IMG + 'Platters/Compo-Platter.jpeg', 'a delicious combination platter with your choice of proteins')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Platters/Compo-Platter.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Combo Platter" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Combo Platter</p><span className="menu-item__price">$15.99</span></div>
                      <p className="menu-item__details--description">a delicious combination platter with your choice of proteins</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Falafel Platter', IMG + 'Platters/Falafel-Chicken.jpeg', 'crispy falafel and tender chicken served over salad or rice')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Platters/Falafel-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Platter" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Platter</p><span className="menu-item__price">$14.99</span></div>
                      <p className="menu-item__details--description">crispy falafel and tender chicken served over salad or rice</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('House Chicken Platter', IMG + 'Platters/House-Chicken.jpeg', 'our signature house chicken served over salad or rice')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Platters/House-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="House Chicken Platter" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">House Chicken Platter</p><span className="menu-item__price">$14.99</span></div>
                      <p className="menu-item__details--description">our signature house chicken served over salad or rice</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Jerk Chicken Platter', IMG + 'Platters/Jerk-Chicken.jpeg', 'spicy jerk seasoned chicken served over salad or rice')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Platters/Jerk-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Jerk Chicken Platter" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Jerk Chicken Platter</p><span className="menu-item__price">$15.99</span></div>
                      <p className="menu-item__details--description">spicy jerk seasoned chicken served over salad or rice</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Lamb Platter', IMG + 'Platters/Lamp-Chicken.jpeg', 'tender lamb and chicken combination served over salad or rice')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Platters/Lamp-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Lamb Platter" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Lamb Platter</p><span className="menu-item__price">$16.99</span></div>
                      <p className="menu-item__details--description">tender lamb and chicken combination served over salad or rice</p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>

            {/* Gyros */}
            <section id="gyros" className="menu-category-section" role="region" aria-labelledby="tab-gyros" style={{ display: activeTab === 'gyros' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>Gyros</h1>
                <p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    <li className="menu-item menu-item--flex" data-popular onClick={() => openModal('Combo Gyro', IMG + 'Gyros/Combo-Gyro.jpeg', 'a combination gyro with your choice of proteins in a warm pita')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Gyros/Combo-Gyro.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Combo Gyro" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Combo Gyro</p><span className="menu-item__price">$13.99</span></div>
                      <p className="menu-item__details--description">a combination gyro with your choice of proteins in a warm pita</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Falafel Gyro', IMG + 'Gyros/Falafel-Chicken.jpeg', 'crispy falafel and chicken in a warm pita with fresh vegetables and tahineh sauce')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Gyros/Falafel-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Gyro" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Gyro</p><span className="menu-item__price">$12.99</span></div>
                      <p className="menu-item__details--description">crispy falafel and chicken in a warm pita with fresh vegetables and tahineh sauce</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('House Chicken Gyro', IMG + 'Gyros/House-Chicken.jpeg', 'our signature house chicken in a warm pita with fresh vegetables and tahineh sauce')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Gyros/House-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="House Chicken Gyro" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">House Chicken Gyro</p><span className="menu-item__price">$11.99</span></div>
                      <p className="menu-item__details--description">our signature house chicken in a warm pita with fresh vegetables and tahineh sauce</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Jerk Chicken Gyro', IMG + 'Gyros/Jerk-Chicken.jpeg', 'spicy jerk seasoned chicken in a warm pita with fresh vegetables and tahineh sauce')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Gyros/Jerk-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Jerk Chicken Gyro" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Jerk Chicken Gyro</p><span className="menu-item__price">$12.99</span></div>
                      <p className="menu-item__details--description">spicy jerk seasoned chicken in a warm pita with fresh vegetables and tahineh sauce</p>
                    </li>
                    <li className="menu-item menu-item--flex" data-popular onClick={() => openModal('Lamb Gyro', IMG + 'Gyros/Lamp-Chicken.jpeg', 'tender lamb and chicken combination in a warm pita with fresh vegetables and tahineh sauce')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Gyros/Lamp-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Lamb Gyro" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Lamb Gyro</p><span className="menu-item__price">$13.99</span></div>
                      <p className="menu-item__details--description">tender lamb and chicken combination in a warm pita with fresh vegetables and tahineh sauce</p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>

            {/* Loaded Fries */}
            <section id="loaded-fries" className="menu-category-section" role="region" aria-labelledby="tab-loaded-fries" style={{ display: activeTab === 'loaded-fries' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>Loaded Fries</h1>
                <p>loaded fries with your choice of toppings</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Combo Fries', IMG + 'Fries/Combo-Fries.jpeg', 'fries with your choice of toppings')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Fries/Combo-Fries.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Combo Fries" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Combo Fries</p><span className="menu-item__price">$12.99</span></div>
                      <p className="menu-item__details--description">fries with your choice of toppings</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Falafel Fries', IMG + 'Fries/Falafel-Chicken.jpeg', 'fries topped with falafel and chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Fries/Falafel-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Fries" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Fries</p><span className="menu-item__price">$11.99</span></div>
                      <p className="menu-item__details--description">fries topped with falafel and chicken</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('House Chicken Fries', IMG + 'Fries/House-Chicken.jpeg', 'fries topped with our signature house chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Fries/House-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="House Chicken Fries" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">House Chicken Fries</p><span className="menu-item__price">$11.99</span></div>
                      <p className="menu-item__details--description">fries topped with our signature house chicken</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Jerk Chicken Fries', IMG + 'Fries/Jerk-Chicken.jpeg', 'fries topped with spicy jerk chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Fries/Jerk-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Jerk Chicken Fries" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Jerk Chicken Fries</p><span className="menu-item__price">$12.99</span></div>
                      <p className="menu-item__details--description">fries topped with spicy jerk chicken</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Lamb Fries', IMG + 'Fries/Lamp-Chicken.jpeg', 'fries topped with lamb and chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Fries/Lamp-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Lamb Fries" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Lamb Fries</p><span className="menu-item__price">$12.99</span></div>
                      <p className="menu-item__details--description">fries topped with lamb and chicken</p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>

            {/* Salads */}
            <section id="salads" className="menu-category-section" role="region" aria-labelledby="tab-salads" style={{ display: activeTab === 'salads' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>Salads</h1>
                <p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Combo Salad', IMG + 'Salad/Combo-Salad.jpeg', 'fresh salad with your choice of proteins')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Salad/Combo-Salad.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Combo Salad" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Combo Salad</p><span className="menu-item__price">$14.99</span></div>
                      <p className="menu-item__details--description">fresh salad with your choice of proteins</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Falafel Salad', IMG + 'Salad/Falafel-Chicken.jpeg', 'fresh salad with falafel and chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Salad/Falafel-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Salad" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Salad</p><span className="menu-item__price">$13.99</span></div>
                      <p className="menu-item__details--description">fresh salad with falafel and chicken</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('House Chicken Salad', IMG + 'Salad/House-Chicken.jpeg', 'fresh salad with our signature house chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Salad/House-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="House Chicken Salad" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">House Chicken Salad</p><span className="menu-item__price">$13.99</span></div>
                      <p className="menu-item__details--description">fresh salad with our signature house chicken</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Jerk Chicken Salad', IMG + 'Salad/Jerk-Chicken.jpeg', 'fresh salad with spicy jerk chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Salad/Jerk-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Jerk Chicken Salad" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Jerk Chicken Salad</p><span className="menu-item__price">$14.99</span></div>
                      <p className="menu-item__details--description">fresh salad with spicy jerk chicken</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Lamb Salad', IMG + 'Salad/Lamp-Chicken.jpeg', 'fresh salad with lamb and chicken')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Salad/Lamp-Chicken.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Lamb Salad" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Lamb Salad</p><span className="menu-item__price">$14.99</span></div>
                      <p className="menu-item__details--description">fresh salad with lamb and chicken</p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>

            {/* From The Fryer */}
            <section id="from-the-fryer" className="menu-category-section" role="region" aria-labelledby="tab-from-the-fryer" style={{ display: activeTab === 'from-the-fryer' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>From The Fryer</h1>
                <p>crispy favorites from the fryer</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout" />
                </section>
              </div>
            </section>

            {/* Sides */}
            <section id="sides" className="menu-category-section" role="region" aria-labelledby="tab-sides" style={{ display: activeTab === 'sides' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>Sides</h1>
                <p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Falafel Box', IMG + 'Sides/FalafelBox.jpeg', 'crispy falafel served as a side')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Sides/FalafelBox.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Falafel Box" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Falafel Box</p><span className="menu-item__price">$6.99</span></div>
                      <p className="menu-item__details--description">crispy falafel served as a side</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Hot Wings', IMG + 'Sides/HotWings.jpeg', 'spicy chicken wings')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Sides/HotWings.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Hot Wings" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Hot Wings</p><span className="menu-item__price">$8.99</span></div>
                      <p className="menu-item__details--description">spicy chicken wings</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Mozzarella Sticks', IMG + 'Sides/Mozz.jpeg', 'crispy mozzarella sticks')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Sides/Mozz.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Mozzarella Sticks" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Mozzarella Sticks</p><span className="menu-item__price">$6.99</span></div>
                      <p className="menu-item__details--description">crispy mozzarella sticks</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Onion Rings', IMG + 'Sides/OnionsRings.jpeg', 'crispy golden onion rings')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Sides/OnionsRings.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Onion Rings" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Onion Rings</p><span className="menu-item__price">$5.99</span></div>
                      <p className="menu-item__details--description">crispy golden onion rings</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Seasoned Fries', IMG + 'Sides/SeasonFries.jpeg', 'fries seasoned with our special blend')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Sides/SeasonFries.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Seasoned Fries" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Seasoned Fries</p><span className="menu-item__price">$4.99</span></div>
                      <p className="menu-item__details--description">fries seasoned with our special blend</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Chicken Tenders', IMG + 'Sides/Tenders.jpeg', 'crispy chicken tenders')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Sides/Tenders.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Chicken Tenders" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Chicken Tenders</p><span className="menu-item__price">$7.99</span></div>
                      <p className="menu-item__details--description">crispy chicken tenders</p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>

            {/* Desserts */}
            <section id="desserts" className="menu-category-section" role="region" aria-labelledby="tab-desserts" style={{ display: activeTab === 'desserts' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>Desserts</h1>
                <p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Baklava', IMG + 'Desserts/Baklava.jpeg', 'traditional Middle Eastern pastry with honey and nuts')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Desserts/Baklava.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Baklava" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Baklava</p><span className="menu-item__price">$5.99</span></div>
                      <p className="menu-item__details--description">traditional Middle Eastern pastry with honey and nuts</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Chocolate Dessert', IMG + 'Desserts/Chocolate.jpeg', 'rich chocolate dessert')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Desserts/Chocolate.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Chocolate Dessert" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Chocolate Dessert</p><span className="menu-item__price">$6.99</span></div>
                      <p className="menu-item__details--description">rich chocolate dessert</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Oreo Cheesecake', IMG + 'Desserts/Oreo-cheese-cake.jpeg', 'creamy cheesecake with Oreo cookies')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Desserts/Oreo-cheese-cake.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Oreo Cheesecake" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Oreo Cheesecake</p><span className="menu-item__price">$7.99</span></div>
                      <p className="menu-item__details--description">creamy cheesecake with Oreo cookies</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Regular Cheesecake', IMG + 'Desserts/Regular-cheese-cake.jpeg', 'classic creamy cheesecake')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Desserts/Regular-cheese-cake.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Regular Cheesecake" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Regular Cheesecake</p><span className="menu-item__price">$6.99</span></div>
                      <p className="menu-item__details--description">classic creamy cheesecake</p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>

            {/* Drinks */}
            <section id="drinks" className="menu-category-section" role="region" aria-labelledby="tab-drinks" style={{ display: activeTab === 'drinks' ? undefined : 'none' }}>
              <div className="menu-description container-sm">
                <h1>Drinks</h1>
                <p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p>
              </div>
              <div className="menu-flex-container">
                <section className="menu-section">
                  <ul className="menu-flex-layout">
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Canned Soda', IMG + 'Drinks/CanSoda.jpeg', 'refreshing canned soft drinks')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Drinks/CanSoda.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Canned Soda" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Canned Soda</p><span className="menu-item__price">$2.99</span></div>
                      <p className="menu-item__details--description">refreshing canned soft drinks</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Half & Half', IMG + 'Drinks/Half&Half.jpeg', 'a refreshing half lemonade half iced tea')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Drinks/Half&Half.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Half & Half" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Half &amp; Half</p><span className="menu-item__price">$3.99</span></div>
                      <p className="menu-item__details--description">a refreshing half lemonade half iced tea</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Lemonade', IMG + 'Drinks/Lmonade.jpeg', 'freshly squeezed lemonade')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Drinks/Lmonade.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Lemonade" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Lemonade</p><span className="menu-item__price">$3.99</span></div>
                      <p className="menu-item__details--description">freshly squeezed lemonade</p>
                    </li>
                    <li className="menu-item menu-item--flex" onClick={() => openModal('Sweet Tea', IMG + 'Drinks/SweetTea.jpeg', 'southern style sweet iced tea')}>
                      <div className="image-thumbnail" style={{ backgroundImage: `url('${IMG}Drinks/SweetTea.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}><img className="sr-only" alt="Sweet Tea" /></div>
                      <div className="menu-item__heading"><p className="menu-item__heading menu-item__heading--name">Sweet Tea</p><span className="menu-item__price">$3.99</span></div>
                      <p className="menu-item__details--description">southern style sweet iced tea</p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>

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
              <div className="menu-sauces__card-img">
                <img src={IMG + 'Sauces/Green-Sauce.png'} alt="Green Sauce" loading="lazy" />
              </div>
              <div className="menu-sauces__card-body">
                <span className="menu-sauces__card-tag"><i className="fa-solid fa-leaf" /> Mild</span>
                <div className="menu-sauces__card-name">Green Sauce</div>
                <p className="menu-sauces__card-desc">Fresh, herby &amp; zesty</p>
                <span className="menu-sauces__card-cta">Shop Now <i className="fa-solid fa-arrow-right" /></span>
              </div>
            </Link>
            <Link to="/store" className="menu-sauces__card" data-heat="hot">
              <div className="menu-sauces__card-glow" />
              <div className="menu-sauces__card-img">
                <img src={IMG + 'Sauces/Hot-Sauce.png'} alt="Hot Sauce" loading="lazy" />
              </div>
              <div className="menu-sauces__card-body">
                <span className="menu-sauces__card-tag"><i className="fa-solid fa-pepper-hot" /> Hot</span>
                <div className="menu-sauces__card-name">Hot Sauce</div>
                <p className="menu-sauces__card-desc">Bold heat, rich flavor</p>
                <span className="menu-sauces__card-cta">Shop Now <i className="fa-solid fa-arrow-right" /></span>
              </div>
            </Link>
            <Link to="/store" className="menu-sauces__card" data-heat="extra">
              <div className="menu-sauces__card-glow" />
              <div className="menu-sauces__card-img">
                <img src={IMG + 'Sauces/OMG-Sauce.png'} alt="OMG Sauce" loading="lazy" />
              </div>
              <div className="menu-sauces__card-body">
                <span className="menu-sauces__card-tag"><i className="fa-solid fa-fire" /> Extra Hot</span>
                <div className="menu-sauces__card-name">OMG Sauce</div>
                <p className="menu-sauces__card-desc">Our signature fire</p>
                <span className="menu-sauces__card-cta">Shop Now <i className="fa-solid fa-arrow-right" /></span>
              </div>
            </Link>
            <Link to="/store" className="menu-sauces__card" data-heat="creamy">
              <div className="menu-sauces__card-glow" />
              <div className="menu-sauces__card-img">
                <img src={IMG + 'Sauces/White-Sauce.png'} alt="White Sauce" loading="lazy" />
              </div>
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
                <span className="menu-rewards-cta__stat-label">Points per $1</span>
              </div>
              <div className="menu-rewards-cta__stat m-reveal">
                <span className="menu-rewards-cta__stat-icon"><i className="fa-solid fa-gift" /></span>
                <span className="menu-rewards-cta__stat-num">Free</span>
                <span className="menu-rewards-cta__stat-label">Food Rewards</span>
              </div>
              <div className="menu-rewards-cta__stat m-reveal">
                <span className="menu-rewards-cta__stat-icon"><i className="fa-solid fa-bolt" /></span>
                <span className="menu-rewards-cta__stat-num">Instant</span>
                <span className="menu-rewards-cta__stat-label">Point Earning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Item Modal */}
      <div id="menuModal" className={`menu-modal${modalOpen ? ' active' : ''}`}>
        <div className="menu-modal-content">
          <div className="menu-modal-header">
            <button className="menu-modal-close" id="modalClose" aria-label="Close" onClick={() => setModalOpen(false)}>&times;</button>
          </div>
          <div className="menu-modal-image" id="modalImage" style={{ backgroundImage: `url(${modalData.img})` }}>
            <div className="menu-modal-image-overlay">
              <h2 className="menu-modal-image-title" id="modalTitle">{modalData.title}</h2>
            </div>
          </div>
          <div className="menu-modal-body">
            <p className="menu-modal-description" id="modalDescription">{modalData.desc}</p>
          </div>
          <div className="menu-modal-footer">
            <a href="https://omgyrohalal.square.site/" className="menu-modal-btn" target="_blank" rel="noopener">Order Now</a>
            <button className="menu-modal-btn menu-modal-btn-secondary" id="modalCloseBtn" onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      </div>

      {/* Download Menu Modal */}
      <div id="menuDownloadModal" className={`menu-download-modal${downloadModalOpen ? '' : ''}`} aria-hidden={!downloadModalOpen} aria-label="View menu" style={{ display: downloadModalOpen ? undefined : 'none' }}>
        <div className="menu-download-modal__backdrop" onClick={() => setDownloadModalOpen(false)} />
        <div className="menu-download-modal__box">
          <button type="button" className="menu-download-modal__close" id="menuDownloadModalClose" aria-label="Close" onClick={() => setDownloadModalOpen(false)}>&times;</button>
          <h2 className="menu-download-modal__title">Our Menu</h2>
          <p className="menu-download-modal__sub">View or download each page below.</p>
          <div className="menu-download-modal__list">
            <div className="menu-download-modal__item">
              <img src={IMG + 'Menu/1.webp'} alt="Menu page 1" loading="lazy" />
              <a href={IMG + 'Menu/1.webp'} className="menu-download-modal__btn" download="OMGYRO-Menu-Page-1.webp" target="_blank" rel="noopener">Download page 1</a>
            </div>
            <div className="menu-download-modal__item">
              <img src={IMG + 'Menu/2.webp'} alt="Menu page 2" loading="lazy" />
              <a href={IMG + 'Menu/2.webp'} className="menu-download-modal__btn" download="OMGYRO-Menu-Page-2.webp" target="_blank" rel="noopener">Download page 2</a>
            </div>
            <div className="menu-download-modal__item">
              <img src={IMG + 'Menu/3.webp'} alt="Menu page 3" loading="lazy" />
              <a href={IMG + 'Menu/3.webp'} className="menu-download-modal__btn" download="OMGYRO-Menu-Page-3.webp" target="_blank" rel="noopener">Download page 3</a>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
