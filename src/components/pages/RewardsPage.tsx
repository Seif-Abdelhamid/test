import { useEffect, useState } from 'react';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

type PopupData = {
  name: string; pts: string; img: string; desc: string; spend: string;
};

export default function RewardsPage() {
  useEffect(() => { document.title = 'Rewards | OMGyro Halal'; }, []);
  const [popup, setPopup] = useState<PopupData | null>(null);
  const [calcValue, setCalcValue] = useState(25);

  const calcPoints = calcValue * 10;
  const rewards = [
    { pts: 85, label: 'Side of Fries' },
    { pts: 350, label: 'Onion Rings' },
    { pts: 400, label: 'Fountain Drink' },
    { pts: 500, label: 'Falafel Box' },
    { pts: 700, label: 'Double Protein' },
    { pts: 1625, label: 'Free Entree' },
  ];
  const unlocked = [...rewards].reverse().find(r => calcPoints >= r.pts);

  const openPopup = (el: EventTarget & HTMLDivElement) => {
    setPopup({
      name: el.dataset.popupName || '',
      pts: el.dataset.popupPts || '',
      img: el.dataset.popupImg?.replace('../assets/images/', IMG) || '',
      desc: el.dataset.popupDesc || '',
      spend: el.dataset.popupSpend || '',
    });
  };

  return (
    <main className="site-content__main page-id--1001177">

      {/* 1. Hero */}
      <section className="r-hero" aria-label="Join rewards">
        <div className="r-hero__particles" aria-hidden="true">
          <span className="r-particle r-particle--1" /><span className="r-particle r-particle--2" />
          <span className="r-particle r-particle--3" /><span className="r-particle r-particle--4" />
          <span className="r-particle r-particle--5" /><span className="r-particle r-particle--6" />
          <span className="r-particle r-particle--7" /><span className="r-particle r-particle--8" />
        </div>
        <div className="r-hero__floating" aria-hidden="true">
          <span className="r-float r-float--1"><i className="fa-solid fa-pepper-hot" /></span>
          <span className="r-float r-float--2"><i className="fa-solid fa-star" /></span>
          <span className="r-float r-float--3"><i className="fa-solid fa-fire" /></span>
          <span className="r-float r-float--4"><i className="fa-solid fa-bolt" /></span>
          <span className="r-float r-float--5"><i className="fa-solid fa-trophy" /></span>
          <span className="r-float r-float--6"><i className="fa-solid fa-gift" /></span>
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
            <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--primary r-magnetic" target="_blank" rel="noopener">
              <span className="r-btn__text">JOIN NOW</span>
              <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
              <span className="r-confetti-container" aria-hidden="true" />
            </a>
          </div>
          <a href="#how-it-works" className="r-hero__scroll">
            <span className="r-hero__scroll-line" />
            <span className="r-hero__scroll-label">SCROLL</span>
          </a>
        </div>
      </section>

      {/* 2. Ticker */}
      <div className="r-ticker" aria-hidden="true">
        <div className="r-ticker__track">
          <span className="r-ticker__item">$1 = 10 POINTS</span><span className="r-ticker__dot" />
          <span className="r-ticker__item">FREE FOOD</span><span className="r-ticker__dot" />
          <span className="r-ticker__item">BIRTHDAY REWARDS</span><span className="r-ticker__dot" />
          <span className="r-ticker__item">EXCLUSIVE OFFERS</span><span className="r-ticker__dot" />
          <span className="r-ticker__item">$1 = 10 POINTS</span><span className="r-ticker__dot" />
          <span className="r-ticker__item">FREE FOOD</span><span className="r-ticker__dot" />
          <span className="r-ticker__item">BIRTHDAY REWARDS</span><span className="r-ticker__dot" />
          <span className="r-ticker__item">EXCLUSIVE OFFERS</span><span className="r-ticker__dot" />
        </div>
      </div>

      {/* 3. Feature Cards */}
      <section className="r-features" id="how-it-works" aria-label="How rewards work">
        <div className="r-features__container">
          <div className="r-features__line" aria-hidden="true">
            <span className="r-features__line-dot r-features__line-dot--1" />
            <span className="r-features__line-dot r-features__line-dot--2" />
            <span className="r-features__line-dot r-features__line-dot--3" />
            <span className="r-features__line-dot r-features__line-dot--4" />
          </div>

          <div className="r-feat r-feat--left reveal-on-scroll">
            <div className="r-feat__visual">
              <div className="r-feat__img-frame">
                <img src={IMG + 'Platters/Compo-Platter.jpeg'} alt="OMGyro platter" className="r-feat__img" loading="lazy" />
                <div className="r-feat__img-overlay" />
              </div>
              <span className="r-feat__float-tag">$1 = 10 PTS</span>
            </div>
            <div className="r-feat__copy">
              <span className="r-feat__num">01</span>
              <h3 className="r-feat__title">EARN 10 POINTS<br />FOR EVERY $1</h3>
              <p className="r-feat__desc">Order through our Square site and watch the points stack up. Every dollar you spend gets you 10 points closer to free food.</p>
              <div className="r-feat__tag"><i className="fa-solid fa-coins" /> Points on every order</div>
            </div>
          </div>

          <div className="r-feat r-feat--right reveal-on-scroll">
            <div className="r-feat__copy">
              <span className="r-feat__num">02</span>
              <h3 className="r-feat__title">BIRTHDAY<br />REWARD</h3>
              <p className="r-feat__desc">Birthdays are a big deal here. Members get a surprise reward during their birthday month. Because you deserve it.</p>
              <div className="r-feat__tag"><i className="fa-solid fa-cake-candles" /> Free birthday treat</div>
            </div>
            <div className="r-feat__visual">
              <div className="r-feat__img-frame">
                <img src={IMG + 'Desserts/Baklava.jpeg'} alt="Birthday baklava" className="r-feat__img" loading="lazy" />
                <div className="r-feat__img-overlay" />
              </div>
              <span className="r-feat__float-tag">ON US</span>
            </div>
          </div>

          <div className="r-feat r-feat--left reveal-on-scroll">
            <div className="r-feat__visual">
              <div className="r-feat__img-frame">
                <img src={IMG + 'Gyros/Combo-Gyro.jpeg'} alt="OMGyro combo gyro" className="r-feat__img" loading="lazy" />
                <div className="r-feat__img-overlay" />
              </div>
              <span className="r-feat__float-tag">VIP ONLY</span>
            </div>
            <div className="r-feat__copy">
              <span className="r-feat__num">03</span>
              <h3 className="r-feat__title">EXCLUSIVE<br />OFFERS</h3>
              <p className="r-feat__desc">Access Members-Only deals and bonus point events throughout the year. The kind of deals you can't get anywhere else.</p>
              <div className="r-feat__tag"><i className="fa-solid fa-lock" /> Members only</div>
            </div>
          </div>

          <div className="r-feat r-feat--right reveal-on-scroll">
            <div className="r-feat__copy">
              <span className="r-feat__num">04</span>
              <h3 className="r-feat__title">SURPRISE<br />FOOD DROPS</h3>
              <p className="r-feat__desc">Like free food? We do too. Keep an eye out—we randomly drop free rewards to members just because we can.</p>
              <div className="r-feat__tag"><i className="fa-solid fa-gift" /> Random free food</div>
            </div>
            <div className="r-feat__visual">
              <div className="r-feat__img-frame">
                <img src={IMG + 'Fries/Combo-Fries.jpeg'} alt="Loaded fries" className="r-feat__img" loading="lazy" />
                <div className="r-feat__img-overlay" />
              </div>
              <span className="r-feat__float-tag">FREE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Extra */}
      <section className="r-extra" aria-label="Be extra">
        <div className="r-extra__bg-text" aria-hidden="true">EXTRA</div>
        <div className="r-extra__wrap reveal-on-scroll">
          <h2 className="r-extra__h2">IT'S OKAY TO BE<br /><span className="r-extra__accent">EXTRA</span></h2>
          <p className="r-extra__body">Earn even more points with bonus challenges, special events, and surprise multipliers. The more you order, the faster you get to free halal.</p>
          <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--dark r-magnetic" target="_blank" rel="noopener">
            <span className="r-btn__text">START EARNING</span>
            <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
            <span className="r-confetti-container" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* 5. Exchange */}
      <section className="r-exchange" aria-label="Rewards exchange">
        <div className="r-exchange__wrap">
          <div className="r-exchange__header reveal-on-scroll">
            <span className="r-exchange__label">REWARDS EXCHANGE</span>
            <h2 className="r-exchange__h2">REAL FOOD IS<br />REALLY REWARDING</h2>
            <p className="r-exchange__sub">Exchange your points for free OMGyro favorites</p>
          </div>
          <div className="r-exchange__grid">
            {[
              { name: 'Side of Fries', pts: '85', img: IMG + 'Sides/SeasonFries.jpeg', desc: 'Crispy golden seasoned fries — the perfect side. Lightly salted with our signature spice blend.', spend: '$8.50' },
              { name: 'Onion Rings', pts: '350', img: IMG + 'Sides/OnionsRings.jpeg', desc: 'Hand-battered crispy onion rings served golden and hot. A fan-favorite side that pairs with everything.', spend: '$35' },
              { name: 'Fountain Drink', pts: '400', img: IMG + 'Drinks/Lmonade.jpeg', desc: 'Ice-cold fountain drink of your choice. Fresh lemonade, soda, or iced tea to wash it all down.', spend: '$40' },
              { name: 'Falafel Box', pts: '500', img: IMG + 'Sides/FalafelBox.jpeg', desc: 'Freshly fried crispy falafel served in a box with tahini sauce. Made from scratch, always fresh, never frozen.', spend: '$50' },
              { name: 'Double Protein', pts: '700', img: IMG + 'Sides/Lamp-Chicken.jpeg', desc: 'Double up on protein in any platter or gyro. Extra lamb, chicken, or falafel — because one serving is never enough.', spend: '$70' },
              { name: 'Free Entree', pts: '1625', img: IMG + 'Gyros/Combo-Gyro.jpeg', desc: 'Any entree on the menu — completely free. Gyro, platter, salad, or wrap. You earned it, you choose it.', spend: '$162.50' },
            ].map(item => (
              <div
                key={item.name}
                className="r-exchange__card r-tilt reveal-on-scroll"
                style={{ cursor: 'pointer' }}
                onClick={() => setPopup(item)}
              >
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
              <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--primary" target="_blank" rel="noopener">
                <span className="r-btn__text">ORDER TO REDEEM</span>
                <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 6. Calculator */}
      <section className="r-calc" aria-label="Points calculator">
        <div className="r-calc__wrap">
          <div className="r-calc__header reveal-on-scroll">
            <span className="r-calc__eyebrow"><i className="fa-solid fa-calculator" /> POINTS CALCULATOR</span>
            <h2 className="r-calc__h2">How Much Free Food<br />Can You Get?</h2>
            <p className="r-calc__sub">Drag the slider to see how many points you'd earn</p>
          </div>
          <div className="r-calc__body reveal-on-scroll">
            <div className="r-calc__slider-wrap">
              <div className="r-calc__amount">
                <span className="r-calc__dollar">$</span>
                <span className="r-calc__value">{calcValue}</span>
              </div>
              <input
                type="range"
                className="r-calc__slider"
                min={5} max={200} value={calcValue} step={5}
                onChange={e => setCalcValue(Number(e.target.value))}
              />
              <div className="r-calc__range-labels"><span>$5</span><span>$200</span></div>
            </div>
            <div className="r-calc__result">
              <div className="r-calc__points-earned">
                <span className="r-calc__points-num">{calcPoints}</span>
                <span className="r-calc__points-label">POINTS EARNED</span>
              </div>
              <div className="r-calc__progress-wrap">
                <div className="r-calc__progress-bar">
                  <div className="r-calc__progress-fill" style={{ width: Math.min(100, (calcPoints / 1625) * 100) + '%' }} />
                  <div className="r-calc__progress-markers">
                    <span className="r-calc__marker" data-pts="85" style={{ left: '5.2%' }}><span className="r-calc__marker-dot" /><span className="r-calc__marker-label">Fries</span></span>
                    <span className="r-calc__marker" data-pts="350" style={{ left: '21.5%' }}><span className="r-calc__marker-dot" /><span className="r-calc__marker-label">Rings</span></span>
                    <span className="r-calc__marker" data-pts="400" style={{ left: '24.6%' }}><span className="r-calc__marker-dot" /><span className="r-calc__marker-label">Drink</span></span>
                    <span className="r-calc__marker" data-pts="500" style={{ left: '30.8%' }}><span className="r-calc__marker-dot" /><span className="r-calc__marker-label">Falafel</span></span>
                    <span className="r-calc__marker" data-pts="700" style={{ left: '43.1%' }}><span className="r-calc__marker-dot" /><span className="r-calc__marker-label">Protein</span></span>
                    <span className="r-calc__marker" data-pts="1625" style={{ left: '100%' }}><span className="r-calc__marker-dot" /><span className="r-calc__marker-label">Entree</span></span>
                  </div>
                </div>
              </div>
              <div className="r-calc__unlocked">
                <i className={unlocked ? 'fa-solid fa-lock-open' : 'fa-solid fa-lock'} />
                <span>{unlocked ? <>You unlocked: <strong>{unlocked.label}!</strong></> : 'Keep spending to unlock rewards'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Split CTA */}
      <section className="r-split" aria-label="Order online">
        <div className="r-split__left">
          <img src={IMG + 'Salad/Combo-Salad.jpeg'} alt="OMGyro Salad" className="r-split__img" loading="lazy" />
        </div>
        <div className="r-split__right">
          <span className="r-split__eyebrow">ALL IN ONE PLACE</span>
          <h2 className="r-split__h2">Your Rewards,<br />Your Way</h2>
          <p className="r-split__copy">Order online through Square to track your points, redeem rewards, and get free food. It's that simple.</p>
          <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--primary r-magnetic" target="_blank" rel="noopener">
            <span className="r-btn__text">ORDER ONLINE</span>
            <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
            <span className="r-confetti-container" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* 8. Become a Member */}
      <section className="r-join" aria-label="Become a member">
        <div className="r-join__inner">
          <h2 className="r-join__h2">
            <span className="r-join__line">BECOME A</span>
            <span className="r-join__line r-join__line--big">MEMBER</span>
          </h2>
          <p className="r-join__sub">What are you waiting for? You're leaving free halal on the table.</p>
          <a href="https://omgyrohalal.square.site/" className="r-btn r-btn--white r-magnetic" target="_blank" rel="noopener">
            <span className="r-btn__text">JOIN NOW</span>
            <span className="r-btn__icon"><i className="fa-solid fa-arrow-right" /></span>
            <span className="r-confetti-container" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="r-faq" aria-label="Rewards FAQ">
        <div className="r-faq__wrap">
          <div className="r-faq__header reveal-on-scroll">
            <span className="r-faq__eyebrow">GOT QUESTIONS?</span>
            <h2 className="r-faq__h2">Rewards FAQ</h2>
          </div>
          <div className="r-faq__list">
            <details className="r-faq__item">
              <summary className="r-faq__q"><span>Do points and rewards expire?</span><span className="r-faq__icon" /></summary>
              <div className="r-faq__a"><p>Points don't expire as long as you keep ordering. Redeemed rewards have their own expiration—check the reward details when you redeem.</p></div>
            </details>
            <details className="r-faq__item">
              <summary className="r-faq__q"><span>Can I earn points on delivery?</span><span className="r-faq__icon" /></summary>
              <div className="r-faq__a"><p>Yes—when you order through our Square site for pickup or delivery, you earn points on every order.</p></div>
            </details>
            <details className="r-faq__item">
              <summary className="r-faq__q"><span>How do I sign up?</span><span className="r-faq__icon" /></summary>
              <div className="r-faq__a"><p>Click any "Join Now" button on this page to go to our Square site. When you place an order, create an account or log in with your email. That's it—you're in.</p></div>
            </details>
            <details className="r-faq__item">
              <summary className="r-faq__q"><span>Can I use rewards at any location?</span><span className="r-faq__icon" /></summary>
              <div className="r-faq__a"><p>Yes! Your rewards work at all OMGyro locations. Just make sure you're logged in when ordering.</p></div>
            </details>
            <details className="r-faq__item">
              <summary className="r-faq__q"><span>How many points do I need for free food?</span><span className="r-faq__icon" /></summary>
              <div className="r-faq__a"><p>It starts at just 85 points for a side of fries. A free entree is 1,625 points. Since you earn 10 points per dollar, that's a free meal after about $163 in orders.</p></div>
            </details>
          </div>
        </div>
      </section>

    </main>
  );
}
