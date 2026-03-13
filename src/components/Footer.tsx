import { Link } from 'react-router-dom';

const TikTokSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" />
  </svg>
);

const footerLinks = [
  { name: 'Rewards', path: '/rewards' },
  { name: 'Gift Card', path: '/gift-card' },
  { name: 'Contact', path: '/contact' },
  { name: 'Community', path: '/community' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <ul className="flex items-center gap-5 list-none m-0 p-0">
            <li>
              <a href="https://www.facebook.com/profile.php?id=61565412359779" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors text-xl">
                <i className="fa-brands fa-facebook" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/omgyrohalal/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors text-xl">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@omgyrohalal" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors text-xl">
                <TikTokSVG />
                <span className="sr-only">TikTok</span>
              </a>
            </li>
            <li>
              <a href="mailto:feedback@mamounts.com" aria-label="Email" className="text-white/60 hover:text-primary transition-colors text-xl">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </a>
            </li>
          </ul>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 list-none m-0 p-0">
              {footerLinks.map(({ name, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-white/30">
        &copy; {new Date().getFullYear()} OMGYRO Halal. All rights reserved.
      </div>
    </footer>
  );
}
