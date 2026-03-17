const fs = require('fs');
const path = require('path');

const OVERRIDE = `
		/* Order Online - ORANGE on all pages */
		.site-header .site-nav-cta, .site-header-desktop-primary .site-nav-cta, .site-header-mobi-panel .site-nav-cta, .mobi-footer .site-nav-cta { background: #FF6600 !important; background-color: #FF6600 !important; border-color: #FF6600 !important; color: #fff !important; }
		.site-header .site-nav-cta:hover, .site-header-desktop-primary .site-nav-cta:hover, .site-header-mobi-panel .site-nav-cta:hover, .mobi-footer .site-nav-cta:hover { background: #E55A00 !important; background-color: #E55A00 !important; border-color: #E55A00 !important; }
`;

const files = [
  'catering/index.html',
  'menu/index.html',
  'rewards/index.html',
  'store/index.html',
  'store/product/hot-sauce/index.html',
  'store/product/omgyro-hot-sauce/index.html',
  'store/product/green-sauce/index.html',
  'store/product/white-sauce/index.html',
  'store/product/omg-sauce/index.html',
  'store/product/mamouns-hot-sauce/index.html',
  'store/cart/index.html',
  'contact/index.html',
  'blog/index.html',
  'pirates/index.html',
  'halal/index.html',
  'locations/index.html',
];

const root = path.join(__dirname, '..');

files.forEach(file => {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) {
    console.log('Skip (not found):', file);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('Order Online - ORANGE on all pages')) {
    console.log('Skip (already has):', file);
    return;
  }
  content = content.replace(/\s*<\/style>\s*(?=<link|<\/head>)/, OVERRIDE + '\n\t</style>');
  if (content.includes('Order Online - ORANGE on all pages')) {
    fs.writeFileSync(filePath, content);
    console.log('Added:', file);
  } else {
    content = content.replace(/\}\s*<\/style>/, '}' + OVERRIDE + '\n\t</style>');
    if (content.includes('Order Online - ORANGE on all pages')) {
      fs.writeFileSync(filePath, content);
      console.log('Added (alt):', file);
    } else {
      console.log('No match:', file);
    }
  }
});
