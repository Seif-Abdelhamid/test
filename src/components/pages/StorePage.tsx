import { useEffect } from 'react';

export default function StorePage() {
  useEffect(() => { document.title = 'The Sauce Bible | OMGyro Halal'; }, []);

  return (
    <main className="site-content__main page-id--1001165">

      {/* Hero */}
      <section className="menu-hero" aria-label="Sauce Bible">
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
          <span className="menu-hero__float menu-hero__float--1"><i className="fa-solid fa-fire" /></span>
          <span className="menu-hero__float menu-hero__float--2"><i className="fa-solid fa-pepper-hot" /></span>
          <span className="menu-hero__float menu-hero__float--3"><i className="fa-solid fa-droplet" /></span>
          <span className="menu-hero__float menu-hero__float--4"><i className="fa-solid fa-bottle-droplet" /></span>
          <span className="menu-hero__float menu-hero__float--5"><i className="fa-solid fa-leaf" /></span>
          <span className="menu-hero__float menu-hero__float--6"><i className="fa-solid fa-fire-flame-curved" /></span>
        </div>
        <div className="menu-hero__inner">
          <div className="menu-hero__badge">
            <i className="fa-solid fa-fire" />
            <span>HALAL &bull; CRAFTED &bull; SIGNATURE SAUCES</span>
          </div>
          <h1 className="menu-hero__title">
            <span className="menu-hero__title-line menu-hero__title-line--1">THE</span>
            <span className="menu-hero__title-line menu-hero__title-line--2">SAUCE BIBLE</span>
          </h1>
          <p className="menu-hero__tagline">Bring the flavor home. Explore our sauces below and order online for pickup or delivery.</p>
          <div className="menu-hero__cta">
            <a href="https://omgyrohalal.square.site/" className="menu-hero__btn m-magnetic" target="_blank" rel="noopener">
              <span className="menu-hero__btn-text">ORDER NOW</span>
              <span className="menu-hero__btn-icon"><i className="fa-solid fa-arrow-right" /></span>
              <span className="m-confetti-container" aria-hidden="true" />
            </a>
          </div>
          <a href="#sauces" className="menu-hero__scroll" aria-label="Scroll to sauces">
            <span className="menu-hero__scroll-line" />
            <span className="menu-hero__scroll-label">BROWSE SAUCES</span>
          </a>
        </div>
      </section>

      {/* Ticker */}
      <div className="menu-ticker" aria-hidden="true">
        <div className="menu-ticker__track">
          <span className="menu-ticker__item">HOT SAUCE</span>
          <span className="menu-ticker__dot" />
          <span className="menu-ticker__item">OMG SAUCE</span>
          <span className="menu-ticker__dot" />
          <span className="menu-ticker__item">WHITE SAUCE</span>
          <span className="menu-ticker__dot" />
          <span className="menu-ticker__item">GREEN SAUCE</span>
          <span className="menu-ticker__dot" />
          <span className="menu-ticker__item">HOT SAUCE</span>
          <span className="menu-ticker__dot" />
          <span className="menu-ticker__item">OMG SAUCE</span>
          <span className="menu-ticker__dot" />
          <span className="menu-ticker__item">WHITE SAUCE</span>
          <span className="menu-ticker__dot" />
          <span className="menu-ticker__item">GREEN SAUCE</span>
          <span className="menu-ticker__dot" />
        </div>
      </div>

      {/* Signature Sauces */}
      <section id="sauces" aria-label="Signature sauces">
        <div className="menu-description container-sm">
          <h1>Explore Our Signature Sauces</h1>
          <p>Discover the perfect sauce to elevate your meal. Each of our handcrafted sauces brings unique flavors that complement any dish.</p>
        </div>
        <div className="menu-flex-container">
          <section className="menu-section">
            <ul className="menu-flex-layout">

              <li className="menu-item menu-item--flex">
                <a href="https://omgyrohalal.square.site/" aria-label="Hot Sauce" target="_blank" rel="noopener">
                  <div className="image-thumbnail sauce-bottle-wrap">
                    <div className="sauce-bottle" data-sauce="hot" aria-hidden="true">
                      <div className="bottle-base">
                        <div className="bottle-cap" />
                        <div className="bottle-neck" />
                        <div className="bottle-body"><div className="juice" /></div>
                      </div>
                    </div>
                    <img className="sr-only" alt="Hot Sauce" />
                  </div>
                  <div className="menu-item__heading">
                    <p className="menu-item__heading--name">Hot Sauce</p>
                  </div>
                  <p className="menu-item__details--description">Spicy and flavorful</p>
                  <div className="sauce-flavor-tags">
                    <span className="flavor-tag">Smoky</span>
                    <span className="flavor-tag">Bold</span>
                  </div>
                </a>
              </li>

              <li className="menu-item menu-item--flex menu-item--featured">
                <a href="https://omgyrohalal.square.site/" aria-label="OMG Sauce" target="_blank" rel="noopener">
                  <div className="sauce-featured-badge">Signature</div>
                  <div className="image-thumbnail sauce-bottle-wrap">
                    <div className="sauce-bottle" data-sauce="omg" aria-hidden="true">
                      <div className="bottle-base">
                        <div className="bottle-cap" />
                        <div className="bottle-neck" />
                        <div className="bottle-body"><div className="juice" /></div>
                      </div>
                    </div>
                    <img className="sr-only" alt="OMG Sauce" />
                  </div>
                  <div className="menu-item__heading">
                    <p className="menu-item__heading--name">OMG Sauce</p>
                  </div>
                  <p className="menu-item__details--description">Signature OMGYRO sauce</p>
                  <div className="sauce-flavor-tags">
                    <span className="flavor-tag">Zesty</span>
                    <span className="flavor-tag">Iconic</span>
                  </div>
                </a>
              </li>

              <li className="menu-item menu-item--flex">
                <a href="https://omgyrohalal.square.site/" aria-label="White Sauce" target="_blank" rel="noopener">
                  <div className="image-thumbnail sauce-bottle-wrap">
                    <div className="sauce-bottle" data-sauce="white" aria-hidden="true">
                      <div className="bottle-base">
                        <div className="bottle-cap" />
                        <div className="bottle-neck" />
                        <div className="bottle-body"><div className="juice" /></div>
                      </div>
                    </div>
                    <img className="sr-only" alt="White Sauce" />
                  </div>
                  <div className="menu-item__heading">
                    <p className="menu-item__heading--name">White Sauce</p>
                  </div>
                  <p className="menu-item__details--description">Creamy and tangy</p>
                  <div className="sauce-flavor-tags">
                    <span className="flavor-tag">Garlic</span>
                    <span className="flavor-tag">Rich</span>
                  </div>
                </a>
              </li>

              <li className="menu-item menu-item--flex">
                <a href="https://omgyrohalal.square.site/" aria-label="Green Sauce" target="_blank" rel="noopener">
                  <div className="image-thumbnail sauce-bottle-wrap">
                    <div className="sauce-bottle" data-sauce="green" aria-hidden="true">
                      <div className="bottle-base">
                        <div className="bottle-cap" />
                        <div className="bottle-neck" />
                        <div className="bottle-body"><div className="juice" /></div>
                      </div>
                    </div>
                    <img className="sr-only" alt="Green Sauce" />
                  </div>
                  <div className="menu-item__heading">
                    <p className="menu-item__heading--name">Green Sauce</p>
                  </div>
                  <p className="menu-item__details--description">Fresh and herbaceous</p>
                  <div className="sauce-flavor-tags">
                    <span className="flavor-tag">Herb</span>
                    <span className="flavor-tag">Bright</span>
                  </div>
                </a>
              </li>

            </ul>
          </section>
        </div>
      </section>

    </main>
  );
}
