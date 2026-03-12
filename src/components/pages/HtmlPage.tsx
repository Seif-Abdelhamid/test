import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Bundle all HTML files from public/ at build time (loaded lazily per route)
const pages = import.meta.glob('/public/**/*.html', { as: 'raw', eager: false });

export default function HtmlPage() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/^\/+|\/+$/g, '');
    const filePath = path ? `/public/${path}/index.html` : '/public/index.html';
    const loader = pages[filePath];

    if (!loader) return;

    loader().then((html) => {
      document.open();
      document.write(html as string);
      document.close();
    });
  }, [location.pathname]);

  return null;
}
