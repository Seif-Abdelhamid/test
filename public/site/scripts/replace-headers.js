/**
 * Replaces the header block in all index.html files with a unified header.
 * Run with: node scripts/replace-headers.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const pages = [
  { file: 'index.html', base: '', assets: 'assets/' },
  { file: 'locations/index.html', base: '../', assets: '../assets/' },
  { file: 'rewards/index.html', base: '../', assets: '../assets/' },
  { file: 'menu/index.html', base: '../', assets: '../assets/' },
  { file: 'catering/index.html', base: '../', assets: '../assets/' },
  { file: 'halal/index.html', base: '../', assets: '../assets/' },
  { file: 'pirates/index.html', base: '../', assets: '../assets/' },
  { file: 'blog/index.html', base: '../', assets: '../assets/' },
  { file: 'contact/index.html', base: '../', assets: '../assets/' },
  { file: 'store/index.html', base: '../', assets: '../assets/' },
  { file: 'store/cart/index.html', base: '../../', assets: '../../assets/' },
  { file: 'store/product/mamouns-hot-sauce/index.html', base: '../../../', assets: '../../../assets/' },
  { file: 'store/product/omg-sauce/index.html', base: '../../../', assets: '../../../assets/' },
  { file: 'store/product/white-sauce/index.html', base: '../../../', assets: '../../../assets/' },
  { file: 'store/product/green-sauce/index.html', base: '../../../', assets: '../../../assets/' },
  { file: 'store/product/hot-sauce/index.html', base: '../../../', assets: '../../../assets/' },
  { file: 'store/product/omgyro-hot-sauce/index.html', base: '../../../', assets: '../../../assets/' },
];

function getHeader(p, hasCart = false) {
  const b = p.base;
  const a = p.assets;
  const cartBtn = hasCart ? '<a class="btn btn-cart btn-cart--empty" href="cart/index.html" aria-label="0 Items In Shopping Cart" data-cart-label="Items">0</a>\n\t\t' : '';
  return `<header class="site-header">
	<a href="#main-content" class="skip" aria-label="Skip to main content">Skip to main content</a>
	<div class="site-header-desktop">
		<div class="site-header-desktop-primary" data-header-sticky>
			<div class="container omgyro-header-inner">
				<div class="site-logo">
					<a class="site-logo__btn" href="${b}index.html" aria-label="OMGYRO Halal Food">
						<img class="site-logo__expanded" src="${a}images/OMGYRO-logo.png" alt="OMGYRO Halal Food" loading="eager" fetchpriority="high" />
					</a>
				</div>
				<nav class="site-nav">
					<ul class="site-nav-menu" data-menu-type="desktop">
						<li><a class="site-nav-link" href="${b}locations/index.html" aria-label="Locations" role="button">Locations</a></li>
						<li><a class="site-nav-link" href="${b}menu/index.html" aria-label="Menu" role="button">Menu</a></li>
						<li><a class="site-nav-link" href="${b}catering/index.html" aria-label="Catering" role="button">Catering</a></li>
						<li><a class="site-nav-link" href="${b}rewards/index.html" aria-label="Rewards" role="button">Rewards</a></li>
						<li><a class="site-nav-link" href="${b}store/index.html" aria-label="Sauce Bible" role="button">Sauce Bible</a></li>
						<li><a href="https://omgyrohalal.square.site/" class="btn btn-brand site-nav-cta" target="_blank" rel="noopener" aria-label="Order Online" role="button">Order Online</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<div class="site-header-mobi" aria-label="Navigation Menu Modal">
		<div class="site-logo">
			<a class="site-logo__btn" href="${b}index.html" aria-label="OMGYRO Halal Food">
				<img src="${a}images/OMGYRO-logo.png" alt="OMGYRO Halal Food" />
			</a>
		</div>
		${cartBtn}<button type="button" class="nav-toggle-btn" aria-controls="SiteHeaderMobilePanel" aria-expanded="false">
			<span class="sr-only">Toggle Navigation</span>
			<span class="nav-toggle-btn__line"></span>
			<span class="nav-toggle-btn__line"></span>
			<span class="nav-toggle-btn__line"></span>
		</button>
		<div id="SiteHeaderMobilePanel" class="site-header-mobi-panel">
			<div class="site-header-mobi-panel__inner">
				<button class="nav-close-btn" aria-label="Close Navigation"></button>
				<div class="nav-header">
					<div class="site-logo">
						<a href="${b}index.html" aria-label="OMGYRO Halal Food">
							<img src="${a}images/OMGYRO-logo.png" alt="OMGYRO Halal Food" />
						</a>
					</div>
					<div class="nav-quick-actions">
						<a href="https://omgyrohalal.square.site/" class="quick-action-card" target="_blank" rel="noopener">
							<span class="quick-action-icon"><i class="fa fa-bag-shopping"></i></span>
							<span class="quick-action-text">Order Now</span>
						</a>
						<a href="${b}locations/index.html" class="quick-action-card">
							<span class="quick-action-icon"><i class="fa fa-location-dot"></i></span>
							<span class="quick-action-text">Find Us</span>
						</a>
					</div>
				</div>
				<nav class="site-nav" aria-label="Navigation Menu">
					<div class="nav-section">
						<div class="nav-section-title">Main</div>
						<ul class="site-nav-menu" data-menu-type="mobile">
							<li><a class="site-nav-link" href="${b}menu/index.html" aria-label="Menu"><span class="nav-icon"><i class="fa-solid fa-utensils"></i></span><span>Menu</span></a></li>
							<li><a class="site-nav-link" href="${b}locations/index.html" aria-label="Locations"><span class="nav-icon"><i class="fa-solid fa-location-dot"></i></span><span>Locations</span></a></li>
							<li><a class="site-nav-link" href="${b}catering/index.html" aria-label="Catering"><span class="nav-icon"><i class="fa-solid fa-champagne-glasses"></i></span><span>Catering</span></a></li>
							<li><a class="site-nav-link" href="${b}rewards/index.html" aria-label="Rewards"><span class="nav-icon"><i class="fa-solid fa-star"></i></span><span>Rewards</span></a></li>
							<li><a class="site-nav-link" href="${b}store/index.html" aria-label="Sauce Bible"><span class="nav-icon"><i class="fa-solid fa-fire"></i></span><span>Sauce Bible</span></a></li>
						</ul>
					</div>
					<div class="nav-section">
						<div class="nav-section-title">About</div>
						<ul class="site-nav-menu" data-menu-type="mobile">
							<li><a class="site-nav-link" href="${b}halal/index.html" aria-label="Certification"><span class="nav-icon"><i class="fa-solid fa-certificate"></i></span><span>Certification</span></a></li>
							<li><a class="site-nav-link" href="${b}contact/index.html" aria-label="Contact"><span class="nav-icon"><i class="fa-solid fa-envelope"></i></span><span>Contact</span></a></li>
							<li><a class="site-nav-link" href="${b}pirates/index.html" aria-label="Community"><span class="nav-icon"><i class="fa-solid fa-users"></i></span><span>Community</span></a></li>
						</ul>
					</div>
				</nav>
				<div class="site-social site-social--bordered">
					<div class="social-section-divider">
						<div class="social-section-title">Connect With Us</div>
					</div>
					<ul class="social-accounts">
						<li><a href="https://www.facebook.com/profile.php?id=61565412359779&mibextid=ZbWKwL" aria-label="Facebook" target="_blank" rel="noopener"><span class="fa-brands fa-facebook" aria-hidden="true"></span><span class="sr-only">Facebook</span></a></li>
						<li><a href="https://www.instagram.com/omgyrohalal/#" aria-label="Instagram" target="_blank" rel="noopener"><span class="fa-brands fa-instagram" aria-hidden="true"></span><span class="sr-only">Instagram</span></a></li>
						<li><a href="https://www.tiktok.com/@omgyrohalal" aria-label="TikTok" target="_blank" rel="noopener"><span class="tiktok-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em"><path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg></span><span class="sr-only">TikTok</span></a></li>
						<li><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#102;&#101;&#101;&#100;&#98;&#97;&#99;&#107;&#64;&#109;&#97;&#109;&#111;&#117;&#110;&#115;&#46;&#99;&#111;&#109;" aria-label="Email" target="_self"><span class="fa-solid fa-envelope" aria-hidden="true"></span><span class="sr-only">Email</span></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</header>`;
}

// Fix store/cart paths - cart is at store/cart/ so cart link is cart/index.html (relative to store)
// Fix store product paths - they're in store/product/xxx/ so ../ goes to store/
const storeCartPages = ['store/index.html', 'store/cart/index.html'];
const storeProductPages = pages.filter(p => p.file.includes('store/product/'));

storeCartPages.forEach(file => {
  const idx = pages.findIndex(p => p.file === file);
  if (idx >= 0) {
    pages[idx].cartHref = file === 'store/index.html' ? 'cart/index.html' : 'index.html';
  }
});

pages.forEach(p => {
  const filePath = path.join(ROOT, p.file);
  if (!fs.existsSync(filePath)) {
    console.log('Skip (not found):', p.file);
    return;
  }
  let html = fs.readFileSync(filePath, 'utf8');
  const headerMatch = html.match(/<header\s+class="site-header">[\s\S]*?<\/header>/);
  if (!headerMatch) {
    console.log('Skip (no header match):', p.file);
    return;
  }
  const hasCart = p.file.startsWith('store/');
  const newHeader = getHeader(p, hasCart);
  if (hasCart && p.file === 'store/cart/index.html') {
    // Fix cart button href
    const fixed = newHeader.replace('href="cart/index.html"', 'href="index.html"');
    html = html.replace(headerMatch[0], fixed);
  } else {
    html = html.replace(headerMatch[0], newHeader);
  }
  fs.writeFileSync(filePath, html);
  console.log('Updated:', p.file);
});

console.log('Done.');
