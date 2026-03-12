import { useEffect } from 'react';

const pageHTML = `
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

			<main class="site-content__main page-id--1001175">
<!-- Menu hero – cinematic, particles, floating icons, CTA -->
			<section class="menu-hero" aria-label="Menu">
				<div class="menu-hero__bg" role="presentation" aria-hidden="true"></div>
				<div class="menu-hero__particles" aria-hidden="true">
					<span class="menu-hero__particle menu-hero__particle--1"></span>
					<span class="menu-hero__particle menu-hero__particle--2"></span>
					<span class="menu-hero__particle menu-hero__particle--3"></span>
					<span class="menu-hero__particle menu-hero__particle--4"></span>
					<span class="menu-hero__particle menu-hero__particle--5"></span>
					<span class="menu-hero__particle menu-hero__particle--6"></span>
				</div>
				<div class="menu-hero__floating" aria-hidden="true">
					<span class="menu-hero__float menu-hero__float--1"><i class="fa-solid fa-utensils"></i></span>
					<span class="menu-hero__float menu-hero__float--2"><i class="fa-solid fa-pepper-hot"></i></span>
					<span class="menu-hero__float menu-hero__float--3"><i class="fa-solid fa-bowl-food"></i></span>
					<span class="menu-hero__float menu-hero__float--4"><i class="fa-solid fa-burger"></i></span>
					<span class="menu-hero__float menu-hero__float--5"><i class="fa-solid fa-ice-cream"></i></span>
					<span class="menu-hero__float menu-hero__float--6"><i class="fa-solid fa-mug-hot"></i></span>
				</div>
				<div class="menu-hero__inner">
					<div class="menu-hero__badge">
						<i class="fa-solid fa-fire"></i>
						<span>HALAL • FRESH • MADE TO ORDER</span>
					</div>
					<h1 class="menu-hero__title">
						<span class="menu-hero__title-line menu-hero__title-line--1" data-typewriter="OUR"></span>
						<span class="menu-hero__title-line menu-hero__title-line--2" data-typewriter="MENU"></span>
					</h1>
					<p class="menu-hero__tagline">Pick a category below and explore. Then order online for pickup or delivery.</p>
					<div class="menu-hero__cta">
						<a href="https://omgyrohalal.square.site/" class="menu-hero__btn m-magnetic" target="_blank" rel="noopener">
							<span class="menu-hero__btn-text">ORDER NOW</span>
							<span class="menu-hero__btn-icon"><i class="fa-solid fa-arrow-right"></i></span>
							<span class="m-confetti-container" aria-hidden="true"></span>
						</a>
						<button type="button" class="menu-hero__btn menu-hero__btn--download js-menu-download" aria-label="Download menu as PDF">
							<span class="menu-hero__btn-icon"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i></span>
							<span class="menu-hero__btn-text">Download menu</span>
						</button>
					</div>
					<a href="#menus" class="menu-hero__scroll" aria-label="Scroll to menu">
						<span class="menu-hero__scroll-line"></span>
						<span class="menu-hero__scroll-label">BROWSE MENU</span>
					</a>
				</div>
			</section>

			<!-- Marquee ticker (duplicated for seamless loop) -->
			<div class="menu-ticker" aria-hidden="true">
				<div class="menu-ticker__track">
					<span class="menu-ticker__item">RICE PLATTERS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">GYROS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">LOADED FRIES</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">SALADS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">FROM THE FRYER</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">SIDES</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">DESSERTS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">DRINKS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">RICE PLATTERS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">GYROS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">LOADED FRIES</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">SALADS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">FROM THE FRYER</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">SIDES</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">DESSERTS</span>
					<span class="menu-ticker__dot"></span>
					<span class="menu-ticker__item">DRINKS</span>
					<span class="menu-ticker__dot"></span>
				</div>
			</div>

			<!-- ==================== FEATURED ITEMS ==================== -->
			<section class="menu-featured" aria-label="Featured items">
				<div class="menu-featured__wrap">
					<div class="menu-featured__header m-reveal">
						<span class="menu-featured__label">MOST POPULAR</span>
						<h2 class="menu-featured__h2">Fan Favorites</h2>
						<p class="menu-featured__sub">The items everyone keeps coming back for</p>
					</div>
					<div class="menu-featured__grid">
						<div class="menu-featured__card m-reveal" data-featured-link="rice-platters">
							<div class="menu-featured__card-img">
								<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/Compo-Platter.jpeg" alt="Combo Platter" loading="lazy" />
								<span class="menu-featured__badge"><i class="fa-solid fa-fire"></i> #1 Seller</span>
								<span class="menu-featured__card-price">$15.99</span>
							</div>
							<div class="menu-featured__card-body">
								<h3 class="menu-featured__card-name">Combo Platter</h3>
								<p class="menu-featured__card-desc">A delicious combination platter with your choice of proteins over salad or rice</p>
							</div>
						</div>
						<div class="menu-featured__card m-reveal" data-featured-link="gyros">
							<div class="menu-featured__card-img">
								<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Gyros/Combo-Gyro.jpeg" alt="Combo Gyro" loading="lazy" />
								<span class="menu-featured__badge"><i class="fa-solid fa-star"></i> Fan Fave</span>
								<span class="menu-featured__card-price">$13.99</span>
							</div>
							<div class="menu-featured__card-body">
								<h3 class="menu-featured__card-name">Combo Gyro</h3>
								<p class="menu-featured__card-desc">A combination gyro with your choice of proteins in a warm pita</p>
							</div>
						</div>
						<div class="menu-featured__card m-reveal" data-featured-link="loaded-fries">
							<div class="menu-featured__card-img">
								<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Fries/Combo-Fries.jpeg" alt="Combo Fries" loading="lazy" />
								<span class="menu-featured__badge"><i class="fa-solid fa-bolt"></i> Trending</span>
								<span class="menu-featured__card-price">$12.99</span>
							</div>
							<div class="menu-featured__card-body">
								<h3 class="menu-featured__card-name">Loaded Fries</h3>
								<p class="menu-featured__card-desc">Loaded fries with your choice of toppings — the ultimate comfort food</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Category nav: in-page, scrolls with content (no overlay) -->
			<nav class="tabs-bar" aria-label="Menu categories" id="tabsBar">
				<div class="tabs-bar__inner">
					<ul class="tabs-nav" role="tablist">
						<li role="presentation"><a id="tab-rice-platters" class="btn btn-tabs active" href="#rice-platters" role="tab" aria-selected="true" tabindex="0">Rice Platters</a></li>
						<li role="presentation"><a id="tab-gyros" class="btn btn-tabs" href="#gyros" role="tab" aria-selected="false" tabindex="-1">Gyros</a></li>
						<li role="presentation"><a id="tab-loaded-fries" class="btn btn-tabs" href="#loaded-fries" role="tab" aria-selected="false" tabindex="-1">Loaded Fries</a></li>
						<li role="presentation"><a id="tab-salads" class="btn btn-tabs" href="#salads" role="tab" aria-selected="false" tabindex="-1">Salads</a></li>
						<li role="presentation"><a id="tab-from-the-fryer" class="btn btn-tabs" href="#from-the-fryer" role="tab" aria-selected="false" tabindex="-1">From The Fryer</a></li>
						<li role="presentation"><a id="tab-sides" class="btn btn-tabs" href="#sides" role="tab" aria-selected="false" tabindex="-1">Sides</a></li>
						<li role="presentation"><a id="tab-desserts" class="btn btn-tabs" href="#desserts" role="tab" aria-selected="false" tabindex="-1">Desserts</a></li>
						<li role="presentation"><a id="tab-drinks" class="btn btn-tabs" href="#drinks" role="tab" aria-selected="false" tabindex="-1">Drinks</a></li>
					</ul>
				</div>
			</nav>

		<section id="menus" aria-label="menus-section" class="content revealable">
			<div class="tabs">
				<div class="tabs-content">

						<section id="rice-platters" class="menu-category-section" role="region" aria-labelledby="tab-rice-platters">

		<div class="menu-description container-sm">
			<h1>Rice Platters</h1><p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<div class="menu-section__header">

					</div>
					<ul class="menu-flex-layout">

		<li class="menu-item menu-item--flex" data-popular>
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/Compo-Platter.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Combo Platter"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Combo Platter</p>
				<span class="menu-item__price">$15.99</span>
			</div>

			<p class="menu-item__details--description">a delicious combination platter with your choice of proteins</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/Falafel-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Falafel Platter"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Falafel Platter</p>
				<span class="menu-item__price">$14.99</span>
			</div>

			<p class="menu-item__details--description">crispy falafel and tender chicken served over salad or rice</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/House-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="House Chicken Platter"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">House Chicken Platter</p>
				<span class="menu-item__price">$14.99</span>
			</div>

			<p class="menu-item__details--description">our signature house chicken served over salad or rice</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/Jerk-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Jerk Chicken Platter"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Jerk Chicken Platter</p>
				<span class="menu-item__price">$15.99</span>
			</div>

			<p class="menu-item__details--description">spicy jerk seasoned chicken served over salad or rice</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/Lamp-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Lamb Platter"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Lamb Platter</p>
				<span class="menu-item__price">$16.99</span>
			</div>

			<p class="menu-item__details--description">tender lamb and chicken combination served over salad or rice</p>

		</li>

					</ul>
			</section>


        </div>

						</section>

						<section id="gyros" class="menu-category-section" role="region" aria-labelledby="tab-gyros">

		<div class="menu-description container-sm">
			<h1>Gyros</h1><p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<ul class="menu-flex-layout">

		<li class="menu-item menu-item--flex" data-popular>
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Gyros/Combo-Gyro.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Combo Gyro"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Combo Gyro</p>
				<span class="menu-item__price">$13.99</span>
			</div>

			<p class="menu-item__details--description">a combination gyro with your choice of proteins in a warm pita</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Gyros/Falafel-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Falafel Gyro"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Falafel Gyro</p>
				<span class="menu-item__price">$12.99</span>
			</div>

			<p class="menu-item__details--description">crispy falafel and chicken in a warm pita with fresh vegetables and tahineh sauce</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Gyros/House-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="House Chicken Gyro"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">House Chicken Gyro</p>
				<span class="menu-item__price">$11.99</span>
			</div>

			<p class="menu-item__details--description">our signature house chicken in a warm pita with fresh vegetables and tahineh sauce</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Gyros/Jerk-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Jerk Chicken Gyro"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Jerk Chicken Gyro</p>
				<span class="menu-item__price">$12.99</span>
			</div>

			<p class="menu-item__details--description">spicy jerk seasoned chicken in a warm pita with fresh vegetables and tahineh sauce</p>

		</li>

		<li class="menu-item menu-item--flex" data-popular>
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Gyros/Lamp-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Lamb Gyro"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Lamb Gyro</p>
				<span class="menu-item__price">$13.99</span>
			</div>

			<p class="menu-item__details--description">tender lamb and chicken combination in a warm pita with fresh vegetables and tahineh sauce</p>

		</li>

					</ul>
			</section>


        </div>

						</section>

						<section id="loaded-fries" class="menu-category-section" role="region" aria-labelledby="tab-loaded-fries">

		<div class="menu-description container-sm">
			<h1>Loaded Fries</h1><p>loaded fries with your choice of toppings</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<div class="menu-section__header">

					</div>
					<ul class="menu-flex-layout">

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Fries/Combo-Fries.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Combo Fries"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Combo Fries</p>
				<span class="menu-item__price">$12.99</span>
			</div>

			<p class="menu-item__details--description">fries with your choice of toppings</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Fries/Falafel-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Falafel Fries"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Falafel Fries</p>
				<span class="menu-item__price">$11.99</span>
			</div>

			<p class="menu-item__details--description">fries topped with falafel and chicken</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Fries/House-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="House Chicken Fries"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">House Chicken Fries</p>
				<span class="menu-item__price">$11.99</span>
			</div>

			<p class="menu-item__details--description">fries topped with our signature house chicken</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Fries/Jerk-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Jerk Chicken Fries"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Jerk Chicken Fries</p>
				<span class="menu-item__price">$12.99</span>
			</div>

			<p class="menu-item__details--description">fries topped with spicy jerk chicken</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Fries/Lamp-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Lamb Fries"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Lamb Fries</p>
				<span class="menu-item__price">$12.99</span>
			</div>

			<p class="menu-item__details--description">fries topped with lamb and chicken</p>

		</li>

					</ul>
			</section>


        </div>

						</section>

						<section id="salads" class="menu-category-section" role="region" aria-labelledby="tab-salads">

		<div class="menu-description container-sm">
			<h1>Salads</h1><p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<div class="menu-section__header">

					</div>
					<ul class="menu-flex-layout">

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Salad/Combo-Salad.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Combo Salad"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Combo Salad</p>
				<span class="menu-item__price">$14.99</span>
			</div>

			<p class="menu-item__details--description">fresh salad with your choice of proteins</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Salad/Falafel-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Falafel Salad"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Falafel Salad</p>
				<span class="menu-item__price">$13.99</span>
			</div>

			<p class="menu-item__details--description">fresh salad with falafel and chicken</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Salad/House-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="House Chicken Salad"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">House Chicken Salad</p>
				<span class="menu-item__price">$13.99</span>
			</div>

			<p class="menu-item__details--description">fresh salad with our signature house chicken</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Salad/Jerk-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Jerk Chicken Salad"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Jerk Chicken Salad</p>
				<span class="menu-item__price">$14.99</span>
			</div>

			<p class="menu-item__details--description">fresh salad with spicy jerk chicken</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Salad/Lamp-Chicken.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Lamb Salad"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Lamb Salad</p>
				<span class="menu-item__price">$14.99</span>
			</div>

			<p class="menu-item__details--description">fresh salad with lamb and chicken</p>

		</li>

					</ul>
			</section>


        </div>

						</section>

						<section id="from-the-fryer" class="menu-category-section" role="region" aria-labelledby="tab-from-the-fryer">

		<div class="menu-description container-sm">
			<h1>From The Fryer</h1><p>crispy favorites from the fryer</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<ul class="menu-flex-layout">

					</ul>
			</section>

        </div>

						</section>

						<section id="sides" class="menu-category-section" role="region" aria-labelledby="tab-sides">

		<div class="menu-description container-sm">
			<h1>Sides</h1><p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<div class="menu-section__header">

					</div>
					<ul class="menu-flex-layout">

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Sides/FalafelBox.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Falafel Box"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Falafel Box</p>
				<span class="menu-item__price">$6.99</span>
			</div>

			<p class="menu-item__details--description">crispy falafel served as a side</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Sides/HotWings.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Hot Wings"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Hot Wings</p>
				<span class="menu-item__price">$8.99</span>
			</div>

			<p class="menu-item__details--description">spicy chicken wings</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Sides/Mozz.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Mozzarella Sticks"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Mozzarella Sticks</p>
				<span class="menu-item__price">$6.99</span>
			</div>

			<p class="menu-item__details--description">crispy mozzarella sticks</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Sides/OnionsRings.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Onion Rings"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Onion Rings</p>
				<span class="menu-item__price">$5.99</span>
			</div>

			<p class="menu-item__details--description">crispy golden onion rings</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Sides/SeasonFries.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Seasoned Fries"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Seasoned Fries</p>
				<span class="menu-item__price">$4.99</span>
			</div>

			<p class="menu-item__details--description">fries seasoned with our special blend</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Sides/Tenders.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Chicken Tenders"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Chicken Tenders</p>
				<span class="menu-item__price">$7.99</span>
			</div>

			<p class="menu-item__details--description">crispy chicken tenders</p>

		</li>

					</ul>
			</section>


        </div>

						</section>

						<section id="desserts" class="menu-category-section" role="region" aria-labelledby="tab-desserts">

		<div class="menu-description container-sm">
			<h1>Desserts</h1><p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<div class="menu-section__header">

					</div>
					<ul class="menu-flex-layout">

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Desserts/Baklava.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Baklava"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Baklava</p>
				<span class="menu-item__price">$5.99</span>
			</div>

			<p class="menu-item__details--description">traditional Middle Eastern pastry with honey and nuts</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Desserts/Chocolate.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Chocolate Dessert"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Chocolate Dessert</p>
				<span class="menu-item__price">$6.99</span>
			</div>

			<p class="menu-item__details--description">rich chocolate dessert</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Desserts/Oreo-cheese-cake.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Oreo Cheesecake"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Oreo Cheesecake</p>
				<span class="menu-item__price">$7.99</span>
			</div>

			<p class="menu-item__details--description">creamy cheesecake with Oreo cookies</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Desserts/Regular-cheese-cake.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Regular Cheesecake"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Regular Cheesecake</p>
				<span class="menu-item__price">$6.99</span>
			</div>

			<p class="menu-item__details--description">classic creamy cheesecake</p>

		</li>

					</ul>
			</section>


        </div>

						</section>

						<section id="drinks" class="menu-category-section" role="region" aria-labelledby="tab-drinks">

		<div class="menu-description container-sm">
			<h1>Drinks</h1><p>served over a choice of salad or seasoned rice (or both for an additional charge) with tahineh sauce and a pita on the side</p><table style="width: 100%;"><tbody><tr></tr></tbody></table><div id="intro"><br></div>

		</div>

        <div class="menu-flex-container">

			<section class="menu-section">
					<div class="menu-section__header">

					</div>
					<ul class="menu-flex-layout">

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Drinks/CanSoda.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Canned Soda"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Canned Soda</p>
				<span class="menu-item__price">$2.99</span>
			</div>

			<p class="menu-item__details--description">refreshing canned soft drinks</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Drinks/Half&Half.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Half & Half"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Half & Half</p>
				<span class="menu-item__price">$3.99</span>
			</div>

			<p class="menu-item__details--description">a refreshing half lemonade half iced tea</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Drinks/Lmonade.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Lemonade"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Lemonade</p>
				<span class="menu-item__price">$3.99</span>
			</div>

			<p class="menu-item__details--description">freshly squeezed lemonade</p>

		</li>

		<li class="menu-item menu-item--flex">
			<div class="image-thumbnail" style="background-image: url('https://seif-abdelhamid.github.io/inprogress/assets/images/Drinks/SweetTea.jpeg');background-position: center; background-size: cover;"><img class="sr-only" alt="Sweet Tea"></div>

				<div class="menu-item__heading">
					<p class="menu-item__heading menu-item__heading--name">Sweet Tea</p>
				<span class="menu-item__price">$3.99</span>
			</div>

			<p class="menu-item__details--description">southern style sweet iced tea</p>

		</li>

					</ul>
			</section>


        </div>

						</section>

				</div>
			</div>
		</section>

			<!-- ==================== SAUCE CROSS-SELL ==================== -->
			<section class="menu-sauces m-reveal" aria-label="Our sauces">
				<div class="menu-sauces__wrap">
					<span class="menu-sauces__eyebrow">THE SAUCE BIBLE</span>
					<h2 class="menu-sauces__h2">Bring The Flavor Home</h2>
					<p class="menu-sauces__sub">Our legendary sauces are now available to buy. Drizzle, dip, and pour to your heart's content.</p>
					<div class="menu-sauces__grid">
						<a href="../store/product/green-sauce/index.html" class="menu-sauces__card" data-heat="mild">
							<div class="menu-sauces__card-glow"></div>
							<div class="menu-sauces__card-img">
								<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Sauces/Green-Sauce.png" alt="Green Sauce" loading="lazy" />
							</div>
							<div class="menu-sauces__card-body">
								<span class="menu-sauces__card-tag"><i class="fa-solid fa-leaf"></i> Mild</span>
								<div class="menu-sauces__card-name">Green Sauce</div>
								<p class="menu-sauces__card-desc">Fresh, herby &amp; zesty</p>
								<span class="menu-sauces__card-cta">Shop Now <i class="fa-solid fa-arrow-right"></i></span>
							</div>
						</a>
						<a href="../store/product/hot-sauce/index.html" class="menu-sauces__card" data-heat="hot">
							<div class="menu-sauces__card-glow"></div>
							<div class="menu-sauces__card-img">
								<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Sauces/Hot-Sauce.png" alt="Hot Sauce" loading="lazy" />
							</div>
							<div class="menu-sauces__card-body">
								<span class="menu-sauces__card-tag"><i class="fa-solid fa-pepper-hot"></i> Hot</span>
								<div class="menu-sauces__card-name">Hot Sauce</div>
								<p class="menu-sauces__card-desc">Bold heat, rich flavor</p>
								<span class="menu-sauces__card-cta">Shop Now <i class="fa-solid fa-arrow-right"></i></span>
							</div>
						</a>
						<a href="../store/product/omg-sauce/index.html" class="menu-sauces__card" data-heat="extra">
							<div class="menu-sauces__card-glow"></div>
							<div class="menu-sauces__card-img">
								<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Sauces/OMG-Sauce.png" alt="OMG Sauce" loading="lazy" />
							</div>
							<div class="menu-sauces__card-body">
								<span class="menu-sauces__card-tag"><i class="fa-solid fa-fire"></i> Extra Hot</span>
								<div class="menu-sauces__card-name">OMG Sauce</div>
								<p class="menu-sauces__card-desc">Our signature fire</p>
								<span class="menu-sauces__card-cta">Shop Now <i class="fa-solid fa-arrow-right"></i></span>
							</div>
						</a>
						<a href="../store/product/white-sauce/index.html" class="menu-sauces__card" data-heat="creamy">
							<div class="menu-sauces__card-glow"></div>
							<div class="menu-sauces__card-img">
								<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Sauces/White-Sauce.png" alt="White Sauce" loading="lazy" />
							</div>
							<div class="menu-sauces__card-body">
								<span class="menu-sauces__card-tag"><i class="fa-solid fa-droplet"></i> Creamy</span>
								<div class="menu-sauces__card-name">White Sauce</div>
								<p class="menu-sauces__card-desc">Smooth &amp; tangy classic</p>
								<span class="menu-sauces__card-cta">Shop Now <i class="fa-solid fa-arrow-right"></i></span>
							</div>
						</a>
					</div>
					<a href="/store" class="menu-sauces__btn m-magnetic">
						<span>SHOP ALL SAUCES</span>
						<span class="menu-sauces__btn-icon"><i class="fa-solid fa-arrow-right"></i></span>
						<span class="m-confetti-container" aria-hidden="true"></span>
					</a>
				</div>
			</section>

			<!-- ==================== REWARDS CALLOUT ==================== -->
			<section class="menu-rewards-cta m-reveal" aria-label="Earn rewards">
				<div class="menu-rewards-cta__inner">
					<div class="menu-rewards-cta__copy">
						<span class="menu-rewards-cta__eyebrow">OMGYRO REWARDS</span>
						<h3 class="menu-rewards-cta__h3">Earn Free Food<br>Every Time You Order</h3>
						<p class="menu-rewards-cta__text">Every $1 you spend earns 10 points. Stack them up and redeem for free food — from fries to full entrees.</p>
						<a href="/rewards" class="menu-rewards-cta__btn m-magnetic">
							<span>JOIN REWARDS</span>
							<span class="menu-rewards-cta__btn-icon"><i class="fa-solid fa-arrow-right"></i></span>
							<span class="m-confetti-container" aria-hidden="true"></span>
						</a>
					</div>
					<div class="menu-rewards-cta__visual">
						<div class="menu-rewards-cta__stats">
							<div class="menu-rewards-cta__stat m-reveal">
								<span class="menu-rewards-cta__stat-icon"><i class="fa-solid fa-coins"></i></span>
								<span class="menu-rewards-cta__stat-num">10x</span>
								<span class="menu-rewards-cta__stat-label">POINTS PER $1</span>
							</div>
							<div class="menu-rewards-cta__stat m-reveal">
								<span class="menu-rewards-cta__stat-icon"><i class="fa-solid fa-gift"></i></span>
								<span class="menu-rewards-cta__stat-num">FREE</span>
								<span class="menu-rewards-cta__stat-label">BIRTHDAY REWARD</span>
							</div>
							<div class="menu-rewards-cta__stat m-reveal">
								<span class="menu-rewards-cta__stat-icon"><i class="fa-solid fa-bolt"></i></span>
								<span class="menu-rewards-cta__stat-num">85</span>
								<span class="menu-rewards-cta__stat-label">PTS FOR FRIES</span>
							</div>
							<div class="menu-rewards-cta__stat m-reveal">
								<span class="menu-rewards-cta__stat-icon"><i class="fa-solid fa-trophy"></i></span>
								<span class="menu-rewards-cta__stat-num">VIP</span>
								<span class="menu-rewards-cta__stat-label">EXCLUSIVE DEALS</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Order CTA strip -->
			<section class="menu-order-cta" aria-label="Order online">
				<div class="menu-order-cta__inner">
					<h2 class="menu-order-cta__title">Ready to order?</h2>
					<p class="menu-order-cta__text">Pickup or delivery — order online and we’ll have it ready.</p>
					<div class="menu-order-cta__actions">
						<a href="https://omgyrohalal.square.site/" class="menu-order-cta__btn m-magnetic" target="_blank" rel="noopener">
							<span class="menu-order-cta__btn-text">Order online</span>
							<span class="menu-order-cta__btn-icon"><i class="fa-solid fa-arrow-right"></i></span>
							<span class="m-confetti-container" aria-hidden="true"></span>
						</a>
						<button type="button" class="menu-order-cta__btn menu-order-cta__btn--download js-menu-download" aria-label="Download menu as PDF">
							<span class="menu-order-cta__btn-icon"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i></span>
							<span class="menu-order-cta__btn-text">Download menu</span>
						</button>
					</div>
				</div>
			</section>

			</main>

	</div>

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
                                  <ul class="site-nav-menu">
		<li>
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

<!-- Menu Item Modal -->
    <div id="menuModal" class="menu-modal">
        <div class="menu-modal-content">
            <div class="menu-modal-header">
                <button class="menu-modal-close" id="modalClose" aria-label="Close">&times;</button>
            </div>
            <div class="menu-modal-image" id="modalImage">
                <div class="menu-modal-image-overlay">
                    <h2 class="menu-modal-image-title" id="modalTitle"></h2>
                </div>
            </div>
            <div class="menu-modal-body">
                <p class="menu-modal-description" id="modalDescription"></p>
            </div>
            <div class="menu-modal-footer">
                <a href="https://omgyrohalal.square.site/" class="menu-modal-btn" target="_blank" rel="noopener">Order Now</a>
                <button class="menu-modal-btn menu-modal-btn-secondary" id="modalCloseBtn">Close</button>
            </div>
        </div>
    </div>

    <!-- Download Menu Modal – shows menu images from assets/images/Menu/ -->
    <div id="menuDownloadModal" class="menu-download-modal" aria-hidden="true" aria-label="View menu">
        <div class="menu-download-modal__backdrop"></div>
        <div class="menu-download-modal__box">
            <button type="button" class="menu-download-modal__close" id="menuDownloadModalClose" aria-label="Close">&times;</button>
            <h2 class="menu-download-modal__title">Our Menu</h2>
            <p class="menu-download-modal__sub">View or download each page below.</p>
            <div class="menu-download-modal__list">
                <div class="menu-download-modal__item">
                    <img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Menu/1.webp" alt="Menu page 1" loading="lazy" />
                    <a href="../assets/images/Menu/1.webp" class="menu-download-modal__btn" download="OMGYRO-Menu-Page-1.webp" target="_blank" rel="noopener">Download page 1</a>
                </div>
                <div class="menu-download-modal__item">
                    <img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Menu/2.webp" alt="Menu page 2" loading="lazy" />
                    <a href="../assets/images/Menu/2.webp" class="menu-download-modal__btn" download="OMGYRO-Menu-Page-2.webp" target="_blank" rel="noopener">Download page 2</a>
                </div>
                <div class="menu-download-modal__item">
                    <img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Menu/3.webp" alt="Menu page 3" loading="lazy" />
                    <a href="../assets/images/Menu/3.webp" class="menu-download-modal__btn" download="OMGYRO-Menu-Page-3.webp" target="_blank" rel="noopener">Download page 3</a>
                </div>
            </div>
        </div>
    </div>

    <script>
    (function() {
        'use strict';

        // ======= 1. SCROLL REVEAL =======
        function revealOnScroll() {
            var els = document.querySelectorAll('.m-reveal');
            var wh = window.innerHeight;
            els.forEach(function(el) {
                if (el.getBoundingClientRect().top < wh - 80) el.classList.add('m-revealed');
            });
        }
        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll);
        revealOnScroll();

        // ======= 2. TYPEWRITER EFFECT ON HERO =======
        (function() {
            var lines = document.querySelectorAll('.menu-hero__title-line[data-typewriter]');
            var lineIdx = 0;
            function typeLine() {
                if (lineIdx >= lines.length) return;
                var el = lines[lineIdx];
                var text = el.getAttribute('data-typewriter');
                var charIdx = 0;
                el.textContent = '';
                el.classList.add('m-typing');
                var timer = setInterval(function() {
                    charIdx++;
                    el.textContent = text.slice(0, charIdx);
                    if (charIdx >= text.length) {
                        clearInterval(timer);
                        el.classList.remove('m-typing');
                        lineIdx++;
                        setTimeout(typeLine, 150);
                    }
                }, 100);
            }
            setTimeout(typeLine, 500);
        })();

        // ======= 3. MENU MODAL =======
        (function() {
            var modal = document.getElementById('menuModal');
            var modalTitle = document.getElementById('modalTitle');
            var modalImage = document.getElementById('modalImage');
            var modalDescription = document.getElementById('modalDescription');
            var closeBtn = document.getElementById('modalClose');
            var closeBtn2 = document.getElementById('modalCloseBtn');

            document.querySelectorAll('.menu-item').forEach(function(item) {
                item.style.cursor = 'pointer';
                item.addEventListener('click', function() {
                    var thumb = item.querySelector('.image-thumbnail');
                    var nameEl = item.querySelector('.menu-item__heading--name');
                    var descEl = item.querySelector('.menu-item__details--description');
                    if (thumb && nameEl && descEl) {
                        var imageUrl = window.getComputedStyle(thumb).backgroundImage.slice(5, -2);
                        modalTitle.textContent = nameEl.textContent.trim();
                        modalImage.style.backgroundImage = 'url(' + imageUrl + ')';
                        modalDescription.textContent = descEl.textContent.trim();
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                });
            });

            function closeModal() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            closeBtn.addEventListener('click', closeModal);
            closeBtn2.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
            });
        })();

        // ======= 4. TABS =======
        (function() {
            var tabLinks = document.querySelectorAll('.tabs-nav a[role="tab"]');
            var sections = document.querySelectorAll('.menu-category-section');

            function setActiveTab(id) {
                tabLinks.forEach(function(t) {
                    var isActive = (t.getAttribute('href') === '#' + id);
                    t.classList.toggle('active', isActive);
                    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
                    t.setAttribute('tabindex', isActive ? '0' : '-1');
                });
            }

            function showSection(id) {
                sections.forEach(function(s) { s.classList.toggle('is-visible', s.id === id); });
                setActiveTab(id);
                history.replaceState(null, null, '#' + id);
                var el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            tabLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var href = link.getAttribute('href');
                    if (href && href.charAt(0) === '#') showSection(href.substring(1));
                });
            });

            var defaultId = 'rice-platters';
            var hash = window.location.hash;
            if (hash && hash.length > 1 && document.getElementById(hash.substring(1))) {
                defaultId = hash.substring(1);
            }
            showSection(defaultId);
        })();

        // ======= 5. STICKY TABS =======
        (function() {
            var tabsBar = document.getElementById('tabsBar');
            if (!tabsBar) return;
            var placeholder = document.createElement('div');
            placeholder.className = 'm-tabs-placeholder';
            tabsBar.parentNode.insertBefore(placeholder, tabsBar);
            var offset = tabsBar.offsetTop - 75;

            function onScroll() {
                if (window.scrollY >= offset) {
                    tabsBar.classList.add('m-sticky');
                    placeholder.style.height = tabsBar.offsetHeight + 'px';
                    placeholder.classList.add('m-active');
                } else {
                    tabsBar.classList.remove('m-sticky');
                    placeholder.style.height = '';
                    placeholder.classList.remove('m-active');
                }
            }
            window.addEventListener('scroll', onScroll);
            onScroll();
        })();

        // ======= 6. 3D TILT ON MENU CARDS =======
        document.querySelectorAll('.menu-item').forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var cx = rect.width / 2;
                var cy = rect.height / 2;
                var rotX = ((y - cy) / cy) * -4;
                var rotY = ((x - cx) / cx) * 4;
                card.style.transform = 'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-6px)';
            });
            card.addEventListener('mouseleave', function() {
                card.style.transform = '';
            });
            // Add shine overlay
            var shine = document.createElement('div');
            shine.className = 'm-tilt-shine';
            card.appendChild(shine);
        });

        // ======= 7. CONFETTI BURST ON CTA =======
        document.querySelectorAll('.m-confetti-container').forEach(function(container) {
            var btn = container.closest('a, button');
            if (!btn) return;
            btn.addEventListener('click', function() {
                for (var i = 0; i < 18; i++) {
                    var dot = document.createElement('span');
                    dot.className = 'm-confetti-dot';
                    var angle = (Math.PI * 2 * i) / 18;
                    var vel = 50 + Math.random() * 70;
                    dot.style.setProperty('--tx', (Math.cos(angle) * vel) + 'px');
                    dot.style.setProperty('--ty', (Math.sin(angle) * vel) + 'px');
                    dot.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
                    dot.style.background = ['#FF6600','#FFB347','#FF4500','#FFA500','#fff'][Math.floor(Math.random()*5)];
                    container.appendChild(dot);
                    setTimeout(function(d) { d.remove(); }, 800, dot);
                }
            });
        });

        // ======= 8. MAGNETIC BUTTON EFFECT =======
        document.querySelectorAll('.m-magnetic').forEach(function(btn) {
            btn.addEventListener('mousemove', function(e) {
                var rect = btn.getBoundingClientRect();
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;
                btn.style.setProperty('--mx', (x * 0.2) + 'px');
                btn.style.setProperty('--my', (y * 0.2) + 'px');
            });
            btn.addEventListener('mouseleave', function() {
                btn.style.setProperty('--mx', '0px');
                btn.style.setProperty('--my', '0px');
            });
        });

        // ======= 9. FEATURED CARD CLICK → NAVIGATE TO CATEGORY =======
        document.querySelectorAll('[data-featured-link]').forEach(function(card) {
            card.addEventListener('click', function() {
                var id = card.dataset.featuredLink;
                var tabLink = document.querySelector('.tabs-nav a[href="#' + id + '"]');
                if (tabLink) tabLink.click();
            });
        });

        // ======= 10. DOWNLOAD MENU – open modal with menu images from assets/images/Menu/ =======
        (function() {
            var modal = document.getElementById('menuDownloadModal');
            var closeBtn = document.getElementById('menuDownloadModalClose');
            var backdrop = modal && modal.querySelector('.menu-download-modal__backdrop');

            function openDownloadModal() {
                if (!modal) return;
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
            function closeDownloadModal() {
                if (!modal) return;
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }

            document.querySelectorAll('.js-menu-download').forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    openDownloadModal();
                });
            });
            if (closeBtn) closeBtn.addEventListener('click', closeDownloadModal);
            if (backdrop) backdrop.addEventListener('click', closeDownloadModal);
            modal.addEventListener('click', function(e) { if (e.target === modal) closeDownloadModal(); });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.classList.contains('active')) closeDownloadModal();
            });
        })();

    })();
    </script>
`;

export default function MenuPage() {
  useEffect(() => {
    document.title = 'Menu | OMGyro Halal';

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

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.revealable, .reveal-on-scroll').forEach(el => observer.observe(el));

    return () => { observer.disconnect(); };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHTML }} />;
}
