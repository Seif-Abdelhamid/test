const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const pages = [
  'index.html', 'locations/index.html', 'rewards/index.html', 'menu/index.html', 'catering/index.html',
  'halal/index.html', 'pirates/index.html', 'blog/index.html', 'contact/index.html',
  'store/index.html', 'store/cart/index.html',
  'store/product/mamouns-hot-sauce/index.html', 'store/product/omg-sauce/index.html',
  'store/product/white-sauce/index.html', 'store/product/green-sauce/index.html',
  'store/product/hot-sauce/index.html', 'store/product/omgyro-hot-sauce/index.html',
];

function removeBlocks(css) {
  let s = css;
  const patterns = [
    /[\s\S]*?\.(site-header|site-header-desktop|site-header-mobi|site-header-mobi-panel)[\s\S]*?\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\s*/g,
    /[\s\S]*?\.(nav-toggle-btn|nav-close-btn|nav-header|nav-section|nav-icon|nav-quick-actions)[\s\S]*?\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\s*/g,
    /[\s\S]*?\.(quick-action-card|quick-action-icon|quick-action-text)[\s\S]*?\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\s*/g,
    /[\s\S]*?\.(omgyro-header-inner)[\s\S]*?\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\s*/g,
  ];
  for (const p of patterns) s = s.replace(p, '');
  s = s.replace(/,?\s*\.site-nav-cta\.btn-brand-alt\s*/g, '');
  s = s.replace(/,?\s*\.site-nav-cta\.btn-brand\s*/g, '');
  s = s.replace(/\s*\/\*\s*Header[^*]*\*\/\s*/g, '');
  s = s.replace(/\s*\/\*\s*Mobile [Nn]av[^*]*\*\/\s*/g, '');
  s = s.replace(/\s*\/\*\s*Navigation[^*]*\*\/\s*/g, '');
  s = s.replace(/\s*\/\*\s*Header\/nav layout[^*]*\*\/\s*/g, '');
  s = s.replace(/\s*\/\*\s*Layout\/size from header[^*]*\*\/\s*/g, '');
  return s;
}

function strip(css) {
  const rule = /([^{]+)\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  let out = '';
  let m;
  const headerRe = /site-header|site-header-desktop|site-header-mobi|nav-toggle|nav-close|nav-header|nav-section|nav-icon|nav-quick|quick-action|omgyro-header|site-nav-link|site-nav-menu|site-nav-cta|social-section-divider|social-section-title|navBgShift|body\.nav-open/;
  while ((m = rule.exec(css)) !== null) {
    const sel = m[1];
    const body = m[2];
    if (headerRe.test(sel) && !/\.site-footer/.test(sel)) continue;
    if (/\.site-nav-cta\.btn-brand/.test(sel)) {
      const newSel = sel.replace(/,?\s*\.site-nav-cta\.btn-brand-alt\s*/g, '').replace(/,?\s*\.site-nav-cta\.btn-brand\s*/g, '').replace(/,(\s*)$/, '$1').trim();
      if (newSel) out += newSel + '{' + body + '}';
      continue;
    }
    out += m[0];
  }
  const leftover = css.replace(rule, '');
  if (leftover.trim()) out += leftover;
  return out;
}

pages.forEach(f => {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, 'utf8');
  html = html.replace(/<style>([\s\S]*?)<\/style>/gi, (_, css) => '<style>' + strip(css) + '</style>');
  fs.writeFileSync(p, html);
  console.log(f);
});
