/**
 * Removes header-related CSS from <style> blocks in all index.html files.
 * Run with: node scripts/remove-header-css.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const pages = [
  'index.html',
  'locations/index.html', 'rewards/index.html', 'menu/index.html', 'catering/index.html',
  'halal/index.html', 'pirates/index.html', 'blog/index.html', 'contact/index.html',
  'store/index.html', 'store/cart/index.html',
  'store/product/mamouns-hot-sauce/index.html', 'store/product/omg-sauce/index.html',
  'store/product/white-sauce/index.html', 'store/product/green-sauce/index.html',
  'store/product/hot-sauce/index.html', 'store/product/omgyro-hot-sauce/index.html',
];

// Patterns to remove (regex, replace with empty string or simplified)
const removals = [
  // Remove .site-nav-cta from btn-brand selectors
  [/\s*,\s*\.site-nav-cta\.btn-brand\s*,?\s*\.site-nav-cta\.btn-brand-alt\s*/g, ''],
  [/\s*,\s*\.site-nav-cta\.btn-brand-alt\s*/g, ''],
  [/\s*,\s*\.site-nav-cta\.btn-brand\s*/g, ''],
  // Remove entire nav-toggle-btn__line rule block
  [/\s*\/\*\s*Mobile Navigation Toggle Button\s*\/\*[\s\S]*?\.nav-toggle-btn__line\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.nav-toggle-btn__line\s*\{[^}]*\}\s*/g, ''],
  // Remove quick-action rules
  [/\s*\/\*\s*Quick Action[^*]*\*\/[\s\S]*?\.quick-action-icon\s*\{[^}]*\}\s*\.quick-action-text\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.quick-action-icon\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.quick-action-text\s*\{[^}]*\}\s*/g, ''],
  // Remove site-header rules (but not site-content)
  [/\s*\.site-header\s*,\s*header\.site-header\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.site-header-desktop-primary\s*,\s*\.site-header-desktop-secondary[^}]*\}\s*/g, ''],
  [/\s*\.site-header-desktop\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.site-header-desktop-primary\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.site-header-mobi[^}]*\}\s*/g, ''],
  [/\s*\.site-header-mobi-panel[^}]*\}\s*/g, ''],
  [/\s*\.site-header\s*\{[^}]*\}\s*/g, ''],
  // Remove nav-header, nav-section, nav-icon rules
  [/\s*\.nav-header[^}]*\}\s*/g, ''],
  [/\s*\.nav-section-title[^}]*\}\s*/g, ''],
  [/\s*\.nav-section\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.nav-icon\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.nav-quick-actions[^}]*\}\s*/g, ''],
  [/\s*\.quick-action-card[^}]*\}\s*/g, ''],
  // site-nav when in header context (be careful - footer has .site-footer .site-nav-link)
  [/\s*\.site-header-desktop-primary\s+\.site-nav-menu[^}]*\}\s*/g, ''],
  [/\s*\.site-header-desktop\s+\.site-nav-menu[^}]*\}\s*/g, ''],
  [/\s*nav\s+\.site-nav-menu[^}]*\}\s*/g, ''],
  [/\s*\.site-nav-menu\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.site-nav-menu\s+li[^}]*\}\s*/g, ''],
  [/\s*\.site-nav-link\s*\{[^}]*\}\s*/g, ''],
  [/\s*\.site-nav-cta[^}]*\}\s*/g, ''],
  // Comments about header
  [/\s*\/\*\s*Header[^*]*\*\/\s*/g, ''],
  [/\s*\/\*\s*Mobile navigation[^*]*\*\/\s*/g, ''],
  [/\s*\/\*\s*Navigation[^*]*\*\/\s*/g, ''],
];

// Simpler: remove blocks that contain ONLY header selectors
// Complex regex for full rule blocks including @media
function removeHeaderCSS(html) {
  let result = html;
  for (const [pattern, replacement] of removals) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

pages.forEach(file => {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.log('Skip:', file);
    return;
  }
  let html = fs.readFileSync(filePath, 'utf8');
  const before = html.length;
  html = removeHeaderCSS(html);
  if (html.length !== before) {
    fs.writeFileSync(filePath, html);
    console.log('Updated:', file);
  } else {
    console.log('No changes:', file);
  }
});

console.log('Done.');
