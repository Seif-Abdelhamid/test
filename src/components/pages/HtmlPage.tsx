import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Bundle all HTML files from public/ at build time (loaded lazily per route)
const pages = import.meta.glob('/public/**/*.html', { as: 'raw', eager: false });

export default function HtmlPage() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/^\/+|\/+$/g, '');

    // Try exact path first, then fall back to index.html inside that folder
    const candidates = [
      `/public/${path}/index.html`,
      `/public/${path}.html`,
    ];

    const filePath = candidates.find((p) => pages[p]);
    const loader = filePath ? pages[filePath] : undefined;

    if (!loader) return;

    loader().then((html) => {
      document.open();
      document.write(html as string);
      document.close();
    });
  }, [location.pathname]);

  return null;
}
