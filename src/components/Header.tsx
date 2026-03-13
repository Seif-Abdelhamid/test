import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image } from '@/components/ui/image';

const LOGO = 'https://seif-abdelhamid.github.io/inprogress/assets/images/OMGYRO-logo.png';
const ORDER_URL = 'https://omgyrohalal.square.site/';

const desktopNav = [
  { name: 'Locations', path: '/locations' },
  { name: 'Menu', path: '/menu' },
  { name: 'Catering', path: '/catering' },
  { name: 'Sauce Bible', path: '/store' },
  { name: 'Blog', path: '/blog' },
];

const mobileMainNav = [
  { name: 'Menu', path: '/menu', icon: 'fa-solid fa-utensils' },
  { name: 'Locations', path: '/locations', icon: 'fa-solid fa-location-dot' },
  { name: 'Catering', path: '/catering', icon: 'fa-solid fa-champagne-glasses' },
  { name: 'Sauce Bible', path: '/store', icon: 'fa-solid fa-fire' },
  { name: 'Blog', path: '/blog', icon: 'fa-solid fa-newspaper' },
];

const mobileAboutNav = [
  { name: 'Gift Card', path: '/gift-card', icon: 'fa-solid fa-gift' },
  { name: 'Rewards', path: '/rewards', icon: 'fa-solid fa-star' },
  { name: 'Contact', path: '/contact', icon: 'fa-solid fa-envelope' },
  { name: 'Community', path: '/community', icon: 'fa-solid fa-users' },
];

const TikTokSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close panel on route change
  useEffect(() => {
    setOpen(false);
    document.body.classList.remove('nav-open');
  }, [location.pathname]);

  const openMenu = () => { setOpen(true); document.body.classList.add('nav-open'); };
  const closeMenu = () => { setOpen(false); document.body.classList.remove('nav-open'); };
  const onLinkClick = () => setTimeout(closeMenu, 250);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      {/* ── Desktop ── */}
      <div className="site-header-desktop">
        <div className="site-header-desktop-primary" data-header-sticky="">
          <div className="container omgyro-header-inner">
            <div className="site-logo">
              <Link to="/" className="site-logo__btn" aria-label="OMGYRO Halal Food">
                <Image className="site-logo__expanded" src={LOGO} alt="OMGYRO Halal Food" loading="eager" />
              </Link>
            </div>
            <nav className="site-nav">
              <ul className="site-nav-menu" data-menu-type="desktop">
                {desktopNav.map(({ name, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`site-nav-link${location.pathname === path ? ' is-active' : ''}`}
                      aria-label={name}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={ORDER_URL} className="btn btn-brand site-nav-cta" target="_blank" rel="noopener noreferrer">
                    Order Online
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="site-header-mobi" aria-label="Navigation Menu">
        <div className="site-logo">
          <Link to="/" className="site-logo__btn" aria-label="OMGYRO Halal Food">
            <Image src={LOGO} alt="OMGYRO Halal Food" />
          </Link>
        </div>

        <button
          type="button"
          className={`nav-toggle-btn${open ? ' is-active' : ''}`}
          aria-controls="SiteHeaderMobilePanel"
          aria-expanded={open}
          onClick={open ? closeMenu : openMenu}
        >
          <span className="sr-only">Toggle Navigation</span>
          <span className="nav-toggle-btn__line" />
          <span className="nav-toggle-btn__line" />
          <span className="nav-toggle-btn__line" />
        </button>

        <div
          id="SiteHeaderMobilePanel"
          className={`site-header-mobi-panel${open ? ' is-open' : ''}`}
          onClick={(e) => { if (e.target === e.currentTarget) closeMenu(); }}
        >
          <div className="site-header-mobi-panel__inner">
            <button className="nav-close-btn" aria-label="Close Navigation" onClick={closeMenu} />

            <div className="nav-header">
              <div className="site-logo">
                <Link to="/" aria-label="OMGYRO" onClick={onLinkClick}>
                  <Image src={LOGO} alt="OMGYRO Halal Food" />
                </Link>
              </div>
              <div className="nav-quick-actions">
                <a href={ORDER_URL} className="quick-action-card" target="_blank" rel="noopener noreferrer">
                  <span className="quick-action-icon"><i className="fa fa-bag-shopping" /></span>
                  <span className="quick-action-text">Order Now</span>
                </a>
                <Link to="/locations" className="quick-action-card" onClick={onLinkClick}>
                  <span className="quick-action-icon"><i className="fa fa-location-dot" /></span>
                  <span className="quick-action-text">Find Us</span>
                </Link>
              </div>
            </div>

            <nav className="site-nav" aria-label="Navigation Menu">
              <div className="nav-section">
                <div className="nav-section-title">Main</div>
                <ul className="site-nav-menu" data-menu-type="mobile">
                  {mobileMainNav.map(({ name, path, icon }) => (
                    <li key={path}>
                      <Link to={path} className="site-nav-link" onClick={onLinkClick}>
                        <span className="nav-icon"><i className={icon} /></span>
                        <span>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-section">
                <div className="nav-section-title">More</div>
                <ul className="site-nav-menu" data-menu-type="mobile">
                  {mobileAboutNav.map(({ name, path, icon }) => (
                    <li key={path}>
                      <Link to={path} className="site-nav-link" onClick={onLinkClick}>
                        <span className="nav-icon"><i className={icon} /></span>
                        <span>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="site-social site-social--bordered">
              <div className="social-section-divider">
                <div className="social-section-title">Connect With Us</div>
              </div>
              <ul className="social-accounts">
                <li><a href="https://www.facebook.com/profile.php?id=61565412359779" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><span className="fa-brands fa-facebook" /><span className="sr-only">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/omgyrohalal/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><span className="fa-brands fa-instagram" /><span className="sr-only">Instagram</span></a></li>
                <li><a href="https://www.tiktok.com/@omgyrohalal" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><span className="tiktok-icon"><TikTokSVG /></span><span className="sr-only">TikTok</span></a></li>
                <li><a href="mailto:feedback@mamounts.com" aria-label="Email"><span className="fa-solid fa-envelope" /><span className="sr-only">Email</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
