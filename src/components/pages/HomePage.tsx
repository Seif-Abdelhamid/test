import { useEffect } from 'react';

const pageHTML = `
<!-- Site Notifications Container -->
<!-- Main Site Header -->
		<header class="site-header">
<div class="site-header-desktop">
		<div class="site-header-desktop-primary" data-header-sticky>
			<div class="container omgyro-header-inner">
				<div class="site-logo">
					<a class="site-logo__btn" href="/" aria-label="OMGYRO Halal Food">
						<img class="site-logo__expanded" src="https://seif-abdelhamid.github.io/inprogress/assets/images/OMGYRO-logo.png" alt="OMGYRO Halal Food" loading="eager" fetchpriority="high" />
					</a>
				</div>
				<nav class="site-nav">
					<ul class="site-nav-menu" data-menu-type="desktop">
						<li><a class="site-nav-link" href="/locations" aria-label="Locations" role="button">Locations</a></li>
						<li><a class="site-nav-link" href="/menu" aria-label="Menu" role="button">Menu</a></li>
						<li><a class="site-nav-link" href="/catering" aria-label="Catering" role="button">Catering</a></li>
						<li><a class="site-nav-link" href="/store" aria-label="Sauce Bible" role="button">Sauce Bible</a></li>
						<li><a class="site-nav-link" href="/blog" aria-label="Blog" role="button">Blog</a></li>
						<li><a href="https://omgyrohalal.square.site/" class="btn btn-brand site-nav-cta" target="_blank" rel="noopener" aria-label="Order Online" role="button">Order Online</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<div class="site-header-mobi" aria-label="Navigation Menu Modal">
		<div class="site-logo">
			<a class="site-logo__btn" href="/" aria-label="OMGYRO Halal Food">
				<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/OMGYRO-logo.png" alt="OMGYRO Halal Food" />
			</a>
		</div>
		<button type="button" class="nav-toggle-btn" aria-controls="SiteHeaderMobilePanel" aria-expanded="false">
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
						<a href="/" aria-label="OMGYRO Halal Food">
							<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/OMGYRO-logo.png" alt="OMGYRO Halal Food" />
						</a>
					</div>
					<div class="nav-quick-actions">
						<a href="https://omgyrohalal.square.site/" class="quick-action-card" target="_blank" rel="noopener">
							<span class="quick-action-icon"><i class="fa fa-bag-shopping"></i></span>
							<span class="quick-action-text">Order Now</span>
						</a>
						<a href="/locations" class="quick-action-card">
							<span class="quick-action-icon"><i class="fa fa-location-dot"></i></span>
							<span class="quick-action-text">Find Us</span>
						</a>
					</div>
				</div>
				<nav class="site-nav" aria-label="Navigation Menu">
					<div class="nav-section">
						<div class="nav-section-title">Main</div>
						<ul class="site-nav-menu" data-menu-type="mobile">
							<li><a class="site-nav-link" href="/menu" aria-label="Menu"><span class="nav-icon"><i class="fa-solid fa-utensils"></i></span><span>Menu</span></a></li>
							<li><a class="site-nav-link" href="/locations" aria-label="Locations"><span class="nav-icon"><i class="fa-solid fa-location-dot"></i></span><span>Locations</span></a></li>
							<li><a class="site-nav-link" href="/catering" aria-label="Catering"><span class="nav-icon"><i class="fa-solid fa-champagne-glasses"></i></span><span>Catering</span></a></li>
							<li><a class="site-nav-link" href="/store" aria-label="Sauce Bible"><span class="nav-icon"><i class="fa-solid fa-fire"></i></span><span>Sauce Bible</span></a></li>
							<li><a class="site-nav-link" href="/blog" aria-label="Blog"><span class="nav-icon"><i class="fa-solid fa-newspaper"></i></span><span>Blog</span></a></li>
						</ul>
					</div>
					<div class="nav-section">
						<div class="nav-section-title">About</div>
						<ul class="site-nav-menu" data-menu-type="mobile">
							<li><a class="site-nav-link" href="/blog" aria-label="Blog"><span class="nav-icon"><i class="fa-solid fa-newspaper"></i></span><span>Blog</span></a></li>
							<li><a class="site-nav-link" href="/gift-card" aria-label="Gift Card"><span class="nav-icon"><i class="fa-solid fa-gift"></i></span><span>Gift Card</span></a></li>
							<li><a class="site-nav-link" href="/contact" aria-label="Contact"><span class="nav-icon"><i class="fa-solid fa-envelope"></i></span><span>Contact</span></a></li>
							<li><a class="site-nav-link" href="/community" aria-label="Community"><span class="nav-icon"><i class="fa-solid fa-users"></i></span><span>Community</span></a></li>
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
</header>

		

		<div class="site-content">

			
			<main class="site-content__main page-id--1001173">
          <h1 class="sr-only">Home</h1>
<!-- Hero Section: Full-Height Video Background -->
			<section id="hero" aria-label="hero-section" class="hero hero--gallery hero--fullheight revealable">
				<div class="gallery gallery--fit">
					<div class="gallery__item gallery__item--dimmed">
						<video autoplay muted loop playsinline>
							<source src="https://seif-abdelhamid.github.io/inprogress/assets/images/OMGyro.mp4" type="video/mp4">
						</video>
						<div class="hero-overlay"></div>
						<div class="gallery__content container">
							<h2 class="h1 hero-title">Experience<br>the OMG Way</h2>
							<p class="hero-subtitle">Creamy, savory, and absolutely delicious platters that will have you saying "Oh my GAWWD"</p>
							<img class="sr-only" alt="Buy One Feed One Heart">
							<a href="https://omgyrohalal.square.site/" class="btn btn-brand-alt hero-cta" target="_blank" rel="noopener" aria-label="Order Now" role="button">Order Now</a>
						</div>
					</div>
				</div>
			</section>

			<!-- Why Choose OMGYRO Section -->
			<section class="why-omg revealable">
				<div class="why-omg__inner">
					<div class="why-omg__header">
						<span class="why-omg__tag">Why OMGYRO</span>
						<h2 class="why-omg__title">What Sets Us Apart</h2>
					</div>
					<div class="why-omg__row">
						<div class="why-omg__card">
							<div class="why-omg__icon-wrap">
								<i class="fa-solid fa-star"></i>
							</div>
							<h3 class="why-omg__name">The OMG Way</h3>
							<p class="why-omg__desc">Excellence in every bite, every time.</p>
						</div>
						<div class="why-omg__card">
							<div class="why-omg__icon-wrap">
								<i class="fa-solid fa-certificate"></i>
							</div>
							<h3 class="why-omg__name">100% Halal</h3>
							<p class="why-omg__desc">Certified and prepared with integrity.</p>
						</div>
						<div class="why-omg__card">
							<div class="why-omg__icon-wrap">
								<i class="fa-solid fa-fire-flame-curved"></i>
							</div>
							<h3 class="why-omg__name">Signature Sauces</h3>
							<p class="why-omg__desc">Bold flavors that hit different.</p>
						</div>
						<div class="why-omg__card">
							<div class="why-omg__icon-wrap">
								<i class="fa-solid fa-location-dot"></i>
							</div>
							<h3 class="why-omg__name">Growing Fast</h3>
							<p class="why-omg__desc">Expanding all across New Jersey.</p>
						</div>
					</div>
				</div>
			</section>

						<!-- Modern Content Section 1: The OMG Way -->
			<section class="modern-content-section revealable">
				<div class="modern-content-wrapper">
					<div class="modern-content-image">
						<div class="image-container" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/Compo-Platter.jpeg');"></div>
					</div>
					<div class="modern-content-text">
						<span class="content-label">Our Story</span>
						<h2 data-heading="The Original Platters Restaurant in NJ"><span>The Original Platters Restaurant in NJ</span></h2>
						<p>At OMGYRO, we're more than just delicious food — we're about creating unforgettable experiences, one platter at a time. Our slogan, <strong>"The OMG Way,"</strong> reflects our commitment to excellence in everything we do.</p>
						<a href="/locations" class="modern-btn" target="_parent">Find a Location</a>
					</div>
				</div>
			</section>

			<!-- Modern Content Section 2: In The News -->
			<section class="modern-content-section modern-content-reverse revealable">
				<div class="modern-content-wrapper">
					<div class="modern-content-image">
						<div class="image-container" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/The-store.jpg');"></div>
					</div>
					<div class="modern-content-text">
						<span class="content-label">In The News</span>
						<h2 data-heading="OMGYRO Is Taking Over New Jersey"><span>OMGYRO Is Taking Over New Jersey</span></h2>
						<p>From our South Orange roots to new locations in Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is redefining halal dining across the state. Featured on Yahoo Finance and NJ.com, our bold platters and signature sauces have caught the attention of food lovers everywhere. As Partner Lou Bari puts it: "We want to create an experience where people remember both the meal and the hospitality."</p>
						<a href="https://finance.yahoo.com/news/omgyro-expands-footprint-across-jersey-125500175.html" class="modern-btn" target="_blank" rel="noopener">Read The Full Story</a>
					</div>
				</div>
			</section>

			<!-- Modern Content Section 3: Sauce Bible -->
			<section class="modern-content-section revealable">
				<div class="modern-content-wrapper">
					<div class="modern-content-image">
						<div class="image-container" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Sauce-Bible.jpeg');"></div>
					</div>
					<div class="modern-content-text">
						<span class="content-label">Our Sauces</span>
						<h2 data-heading="Paid the Cost To Be the Sauce"><span>Paid the Cost To Be the Sauce</span></h2>
						<p>At OMGYRO, our sauces are more than just condiments—they're crafted to elevate every bite, bringing bold flavors and unique twists to your meal. Whether you're drizzling, dipping, or smothering, our sauces are designed to complement your favorite meals and take your dining experience to the next level.</p>
						<a href="/store" class="modern-btn" target="_parent">Explore Our Sauce Bible</a>
					</div>
				</div>
			</section>

			<!-- Certification section removed -->

</main>

			
					

		</div>

		<!-- Site Footer -->
		<footer>
          <div class="site-footer-desktop">
                  <div class="site-footer-desktop-primary">
                      <div class="site-footer-desktop-primary__container container">
                              <ul class="social-accounts">
        <li><a href="https://www.facebook.com/profile.php?id=61565412359779&mibextid=ZbWKwL" aria-label="Facebook" target="_blank" rel="noopener"><span class="fa-brands fa-facebook" aria-hidden="true"></span><span class="sr-only">Facebook</span></a></li>
        <li><a href="https://www.instagram.com/omgyrohalal/#" aria-label="Instagram" target="_blank" rel="noopener"><span class="fa-brands fa-instagram" aria-hidden="true"></span><span class="sr-only">Instagram</span></a></li>
        <li><a href="https://www.tiktok.com/@omgyrohalal" aria-label="TikTok" target="_blank" rel="noopener"><span class="tiktok-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em"><path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg></span><span class="sr-only">TikTok</span></a></li>
        <li><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#102;&#101;&#101;&#100;&#98;&#97;&#99;&#107;&#64;&#109;&#97;&#109;&#111;&#117;&#110;&#115;&#46;&#99;&#111;&#109;" aria-label="Email" target="_self"><span class="fa-solid fa-envelope" aria-hidden="true"></span><span class="sr-only">Email</span></a></li>
		</ul>
                              <nav class="site-nav">
                                  <ul class="site-nav-menu"><li>
			<a class="site-nav-link "  href="/gift-card"  aria-label="Gift Card">Gift Card</a>
		</li>
		<li>
			<a class="site-nav-link "  href="/rewards"  aria-label="Rewards">Rewards</a>
		</li>
		<li>
			<a class="site-nav-link "  href="/contact"  aria-label="Contact">Contact</a>
		</li>
		<li>
			<a class="site-nav-link "  href="/community"  aria-label="Community">Community</a>
		</li>
                                  </ul>
                              </nav>
                      </div>
                  </div>
                  <div class="site-footer-desktop-secondary">
                      
                  </div>
          </div>
        </footer>
`;

export default function HomePage() {
  useEffect(() => {
    document.title = 'Home | OMGyro Halal';

    // Mobile nav panel
    const navToggleBtn = document.querySelector('.nav-toggle-btn') as HTMLElement | null;
    const mobilePanel = document.getElementById('SiteHeaderMobilePanel');
    const navCloseBtn = document.querySelector('.nav-close-btn') as HTMLElement | null;

    if (!navToggleBtn || !mobilePanel) return;

    function openNav() {
      mobilePanel!.classList.add('is-open');
      navToggleBtn!.classList.add('is-active');
      navToggleBtn!.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    }
    function closeNav() {
      mobilePanel!.classList.remove('is-open');
      navToggleBtn!.classList.remove('is-active');
      navToggleBtn!.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }

    navToggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mobilePanel!.classList.contains('is-open') ? closeNav() : openNav();
    });

    navCloseBtn?.addEventListener('click', function(e) { e.preventDefault(); closeNav(); });

    mobilePanel.addEventListener('click', function(e) {
      if (e.target === mobilePanel) closeNav();
    });

    const navLinks = mobilePanel.querySelectorAll('.site-nav-link, .quick-action-card');
    navLinks.forEach(link => link.addEventListener('click', () => setTimeout(closeNav, 300)));

    // Scroll reveal
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.revealable').forEach(el => observer.observe(el));

    return () => { observer.disconnect(); };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHTML }} />;
}
