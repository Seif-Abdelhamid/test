import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const exchangeItems = [
  { name: 'Side of Fries', pts: 85, img: IMG + 'Sides/SeasonFries.jpeg', desc: 'Crispy golden seasoned fries — the perfect side. Lightly salted with our signature spice blend.', spend: '$8.50' },
  { name: 'Onion Rings', pts: 350, img: IMG + 'Sides/OnionsRings.jpeg', desc: 'Hand-battered crispy onion rings served golden and hot. A fan-favorite side that pairs with everything.', spend: '$35' },
  { name: 'Fountain Drink', pts: 400, img: IMG + 'Drinks/Lmonade.jpeg', desc: 'Ice-cold fountain drink of your choice. Fresh lemonade, soda, or iced tea to wash it all down.', spend: '$40' },
  { name: 'Falafel Box', pts: 500, img: IMG + 'Sides/FalafelBox.jpeg', desc: 'Freshly fried crispy falafel served in a box with tahini sauce. Made from scratch, always fresh, never frozen.', spend: '$50' },
  { name: 'Double Protein', pts: 700, img: IMG + 'Sides/Lamp-Chicken.jpeg', desc: 'Double up on protein in any platter or gyro. Extra lamb, chicken, or falafel — because one serving is never enough.', spend: '$70' },
  { name: 'Free Entree', pts: 1625, img: IMG + 'Gyros/Combo-Gyro.jpeg', desc: 'Any entree on the menu — completely free. Gyro, platter, salad, or wrap. You earned it, you choose it.', spend: '$162.50' },
];

const features = [
  { side: 'left', num: '01', title: ['EARN 10 POINTS', 'FOR EVERY $1'], desc: 'Order through our Square site and watch the points stack up. Every dollar you spend gets you 10 points closer to free food.', tag: { icon: 'fa-solid fa-coins', text: 'Points on every order' }, floatTag: '$1 = 10 PTS', img: IMG + 'Platters/Compo-Platter.jpeg', alt: 'OMGyro platter' },
  { side: 'right', num: '02', title: ['BIRTHDAY', 'REWARD'], desc: 'Birthdays are a big deal here. Members get a surprise reward during their birthday month. Because you deserve it.', tag: { icon: 'fa-solid fa-cake-candles', text: 'Free birthday treat' }, floatTag: 'ON US', img: IMG + 'Desserts/Baklava.jpeg', alt: 'Birthday baklava' },
  { side: 'left', num: '03', title: ['EXCLUSIVE', 'OFFERS'], desc: "Access Members-Only deals and bonus point events throughout the year. The kind of deals you can't get anywhere else.", tag: { icon: 'fa-solid fa-lock', text: 'Members only' }, floatTag: 'VIP ONLY', img: IMG + 'Gyros/Combo-Gyro.jpeg', alt: 'OMGyro combo gyro' },
  { side: 'right', num: '04', title: ['SURPRISE', 'FOOD DROPS'], desc: "Like free food? We do too. Keep an eye out — we randomly drop free rewards to members just because we can.", tag: { icon: 'fa-solid fa-gift', text: 'Random free food' }, floatTag: 'FREE', img: IMG + 'Fries/Combo-Fries.jpeg', alt: 'Loaded fries' },
];

export default function RewardsPage() {
  useEffect(() => { document.title = 'Rewards | OMGyro Halal'; }, []);
  const [popup, setPopup] = useState<typeof exchangeItems[0] | null>(null);

  return (
    <main className="site-content__main page-id--rewards">

      {/* Hero */}
      <section className="r-hero" aria-label="Join rewards">
        <div className="r-hero__particles" aria-hidden="true">
          {[1,2,3,4,5,6,7,8].map(n => <span key={n} className={'r-particle r-particle--' + n} />)}
        </div>
        <div className="r-hero__floating" aria-hidden="true">
          <span className="r-float r-float--1"><i className="fa-solid fa-pepper-hot" /></span>
          <span className="r-float r-float--2"><i className="fa-solid fa-coins" /></span>
          <span className="r-float r-float--3"><i className="fa-solid fa-star" /></span>
          <span className="r-float r-float--4"><i className="fa-solid fa-crown" /></span>
          <span className="r-float r-float--5"><i className="fa-solid fa-gift" /></span>
          <span className="r-float r-float--6"><i className="fa-solid fa-fire-flame-curved" /></span>
        </div>
        <div className="r-hero__content">
          <div className="r-hero__badge">
            <i className="fa-solid fa-crown" />
            <span>OMGYRO REWARDS</span>
          </div>
          <h1 className="r-hero__h1">
            <span className="r-hero__line r-hero__line--1">EAT.</span>
            <span className="r-hero__line r-hero__line--2">EARN.</span>
            <span className="r-hero__line r-hero__line--3">GET REWARDED.</span>
          </h1>
          <p className="r-hero__sub">Join OMGyro Rewards and get <strong>free halal on your next order</strong>.</p>
          <div className="r-hero__btns">
            <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--primary" target="_blank" rel="noopener noreferrer">
              <span className="r-btn__text">JOIN NOW</span>
              <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
            </a>
          </div>
          <a href="#how-it-works" className="r-hero__scroll">
            <span className="r-hero__scroll-line" />
            <span className="r-hero__scroll-label">SCROLL</span>
          </a>
        </div>
      </section>

      {/* Ticker */}
      <div className="r-ticker" aria-hidden="true">
        <div className="r-ticker__track">
          {['$1 = 10 POINTS', 'FREE FOOD', 'BIRTHDAY REWARDS', 'EXCLUSIVE OFFERS', '$1 = 10 POINTS', 'FREE FOOD', 'BIRTHDAY REWARDS', 'EXCLUSIVE OFFERS'].map((item, i) => (
            <span key={i}><span className="r-ticker__item">{item}</span><span className="r-ticker__dot" /></span>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <section className="r-features" id="how-it-works" aria-label="How rewards work">
        <div className="r-features__container">
          <div className="r-features__line" aria-hidden="true">
            {[1,2,3,4].map(n => <span key={n} className={'r-features__line-dot r-features__line-dot--' + n} />)}
          </div>
          {features.map(({ side, num, title, desc, tag, floatTag, img, alt }) => {
            const visual = (
              <div className="r-feat__visual">
                <div className="r-feat__img-frame">
                  <img src={img} alt={alt} className="r-feat__img" loading="lazy" />
                  <div className="r-feat__img-overlay" />
                </div>
                <span className="r-feat__float-tag">{floatTag}</span>
              </div>
            );
            const copy = (
              <div className="r-feat__copy">
                <span className="r-feat__num">{num}</span>
                <h3 className="r-feat__title">{title[0]}<br />{title[1]}</h3>
                <p className="r-feat__desc">{desc}</p>
                <div className="r-feat__tag"><i className={tag.icon} /> {tag.text}</div>
              </div>
            );
            return (
              <div key={num} className={'r-feat r-feat--' + side + ' reveal-on-scroll'}>
                {side === 'left' ? <>{visual}{copy}</> : <>{copy}{visual}</>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Extra */}
      <section className="r-extra" aria-label="Be extra">
        <div className="r-extra__bg-text" aria-hidden="true">EXTRA</div>
        <div className="r-extra__wrap reveal-on-scroll">
          <h2 className="r-extra__h2">IT'S OKAY TO BE<br /><span className="r-extra__accent">EXTRA</span></h2>
          <p className="r-extra__body">Earn even more points with bonus challenges, special events, and surprise multipliers. The more you order, the faster you get to free halal.</p>
          <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--dark" target="_blank" rel="noopener noreferrer">
            <span className="r-btn__text">START EARNING</span>
            <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
          </a>
        </div>
      </section>

      {/* Exchange */}
      <section className="r-exchange" aria-label="Rewards exchange">
        <div className="r-exchange__wrap">
          <div className="r-exchange__header reveal-on-scroll">
            <span className="r-exchange__label">REWARDS EXCHANGE</span>
            <h2 className="r-exchange__h2">REAL FOOD IS<br />REALLY REWARDING</h2>
            <p className="r-exchange__sub">Exchange your points for free OMGyro favorites</p>
          </div>
          <div className="r-exchange__grid">
            {exchangeItems.map(item => (
              <div key={item.name} className="r-exchange__card r-tilt reveal-on-scroll" onClick={() => setPopup(item)} style={{ cursor: 'pointer' }}>
                <div className="r-exchange__card-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <span className="r-exchange__card-badge">{item.pts} PTS</span>
                </div>
                <div className="r-exchange__card-body">
                  <h4 className="r-exchange__card-name">{item.name}</h4>
                  <span className="r-exchange__card-arrow"><i className="fa-solid fa-arrow-right" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split CTA */}
      <section className="r-split" aria-label="Order online">
        <div className="r-split__left">
          <img src={IMG + 'Salad/Combo-Salad.jpeg'} alt="OMGyro Salad" className="r-split__img" loading="lazy" />
        </div>
        <div className="r-split__right">
          <span className="r-split__eyebrow">ALL IN ONE PLACE</span>
          <h2 className="r-split__h2">Your Rewards,<br />Your Way</h2>
          <p className="r-split__copy">Order online through Square to track your points, redeem rewards, and get free food. It's that simple.</p>
          <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--primary" target="_blank" rel="noopener noreferrer">
            <span className="r-btn__text">ORDER ONLINE</span>
            <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
          </a>
        </div>
      </section>

      {/* Popup */}
      {popup && (
        <div className="r-popup-overlay" style={{ display: 'flex' }} onClick={() => setPopup(null)}>
          <div className="r-popup" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
            <button className="r-popup__close" aria-label="Close popup" onClick={() => setPopup(null)}>
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="r-popup__img-wrap">
              <img className="r-popup__img" src={popup.img} alt={popup.name} />
              <span className="r-popup__badge">{popup.pts} PTS</span>
            </div>
            <div className="r-popup__content">
              <h3 className="r-popup__name">{popup.name}</h3>
              <p className="r-popup__desc">{popup.desc}</p>
              <div className="r-popup__stats">
                <div className="r-popup__stat">
                  <span className="r-popup__stat-num">{popup.pts}</span>
                  <span className="r-popup__stat-label">POINTS NEEDED</span>
                </div>
                <div className="r-popup__stat-divider" />
                <div className="r-popup__stat">
                  <span className="r-popup__stat-num">{popup.spend}</span>
                  <span className="r-popup__stat-label">SPEND TO EARN</span>
                </div>
              </div>
              <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--primary" target="_blank" rel="noopener noreferrer">
                <span className="r-btn__text">ORDER TO REDEEM</span>
                <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
              </a>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
