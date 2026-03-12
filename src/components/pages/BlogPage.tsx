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
					<li><a class="site-nav-link" href="/" aria-label="Blog" role="button">Blog</a></li>
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
					</ul>
				</div>
				<div class="nav-section">
					<div class="nav-section-title">About</div>
					<ul class="site-nav-menu" data-menu-type="mobile">
						<li><a class="site-nav-link" href="/" aria-label="Blog"><span class="nav-icon"><i class="fa-solid fa-newspaper"></i></span><span>Blog</span></a></li>
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
					<li><a href="mailto:feedback@mamouns.com" aria-label="Email" target="_self"><span class="fa-solid fa-envelope" aria-hidden="true"></span><span class="sr-only">Email</span></a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
</header>

<main class="site-content">

	<!-- ==================== PREMIUM BLOG HERO ==================== -->
	<section class="blog-hero" aria-label="Blog">
		<div class="blog-hero__bg">
			<div class="blog-orb blog-orb--1"></div>
			<div class="blog-orb blog-orb--2"></div>
			<div class="blog-orb blog-orb--3"></div>
		</div>
		<div class="blog-hero__content">
			<div class="blog-hero__badge-wrap">
				<span class="blog-hero__badge">
					<i class="fa-solid fa-newspaper"></i>
					<span>Stories & Updates</span>
				</span>
			</div>
			<h1 class="blog-hero__title">
				<span class="blog-title-line">OMGYRO</span>
				<span class="blog-title-line blog-title-line--accent">BLOG</span>
			</h1>
			<p class="blog-hero__subtitle">News, stories, and behind-the-scenes from New Jersey's fastest-growing halal brand.</p>
			<div class="blog-hero__cta">
				<a href="#filterBar" class="blog-hero-btn blog-hero-btn--primary">
					<span>Read Posts</span>
					<i class="fa-solid fa-arrow-right"></i>
				</a>
			</div>
		</div>
		<div class="blog-hero__visual">
			<div class="blog-floating-cards">
				<div class="blog-float-card blog-float-card--1">
					<i class="fa-solid fa-location-dot"></i>
					<span>New Locations</span>
				</div>
				<div class="blog-float-card blog-float-card--2">
					<i class="fa-solid fa-utensils"></i>
					<span>Menu Guides</span>
				</div>
				<div class="blog-float-card blog-float-card--3">
					<i class="fa-solid fa-handshake"></i>
					<span>Partnerships</span>
				</div>
				<div class="blog-float-card blog-float-card--4">
					<i class="fa-solid fa-newspaper"></i>
					<span>Press</span>
				</div>
			</div>
		</div>
		<div class="blog-scroll-indicator">
			<span>Scroll to explore</span>
			<div class="blog-scroll-line"></div>
		</div>
	</section>

	<!-- ── Category Filter Bar ── -->
	<div class="filter-bar" id="filterBar">
		<div class="filter-bar__inner">
			<button class="filter-pill active" data-filter="all">All</button>
			<button class="filter-pill" data-filter="Press">Press</button>
			<button class="filter-pill" data-filter="Guide">Guide</button>
			<button class="filter-pill" data-filter="Partnerships">Partnerships</button>
			<button class="filter-pill" data-filter="News">News</button>
			<button class="filter-pill" data-filter="Locations">Locations</button>
		</div>
	</div>

	<!-- ── Spotlight Featured Article ── -->
	<section class="spotlight-section" id="spotlightSection" data-category="Locations">
		<div class="container">
			<div class="spotlight-label">
				<span class="spotlight-dot"></span>
				Spotlight
			</div>
			<article class="spotlight-card fade-in" id="spotlightCard" onclick="openBlogModal('locations-nj')">
				<div class="spotlight-card__image-wrap">
					<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/The-store.jpg" alt="OMGYRO Locations in New Jersey" />
				</div>
				<div class="spotlight-card__content">
					<div class="spotlight-card__meta">
						<span class="category-badge" data-cat="Locations">Locations</span>
						<span class="article-date">February 20, 2025</span>
						<span class="read-time"><i class="fa-regular fa-clock"></i> 3 min read</span>
					</div>
					<h3>OMGYRO Locations in New Jersey: Now Open & Coming Soon</h3>
					<p class="article-excerpt">OMGYRO is growing across New Jersey. Our current locations include South Orange, Union, Paramus, and more — each serving 100% halal, fresh-made gyros, platters, and our signature sauces.</p>
					<button class="btn-read-article" type="button">Read Full Article <i class="fa-solid fa-arrow-right"></i></button>
				</div>
			</article>
		</div>
	</section>

	<!-- ── Blog Grid ── -->
	<section class="blog-grid-section">
		<div class="container">
			<div class="section-header">
				<span class="section-header__label">More Stories</span>
				<h2>From the Blog</h2>
				<p>Catch up on press features, guides, partnerships, and the latest OMGYRO news.</p>
			</div>

			<div class="blog-masonry" id="blogMasonry">
				<!-- Card 1 -->
				<article class="blog-card stagger-in" data-category="Press" onclick="openBlogModal('njcom-spotlight')">
					<div class="blog-card__image">
						<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/people.jpg" alt="NJ.com Spotlights OMGYRO" />
						<span class="category-badge" data-cat="Press">Press</span>
					</div>
					<div class="blog-card__body">
						<div class="blog-card__body-meta">
							<span class="article-date">Feb 15, 2025</span>
							<span class="read-time"><i class="fa-regular fa-clock"></i> 2 min read</span>
						</div>
						<h3>NJ.com Spotlights OMGYRO: Fresh Flavors, Fast Service, Big Momentum</h3>
						<p class="article-excerpt">NJ.com has spotlighted OMGYRO for our fresh halal flavors, fast service, and the momentum behind our expansion across the state.</p>
						<span class="read-more-link">Read More <i class="fa-solid fa-arrow-right"></i></span>
					</div>
				</article>

				<!-- Card 2 -->
				<article class="blog-card stagger-in" data-category="Guide" onclick="openBlogModal('best-gyro-spot')">
					<div class="blog-card__image">
						<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Platters/Compo-Platter.jpeg" alt="Best Gyro Spot Near You" />
						<span class="category-badge" data-cat="Guide">Guide</span>
					</div>
					<div class="blog-card__body">
						<div class="blog-card__body-meta">
							<span class="article-date">Feb 10, 2025</span>
							<span class="read-time"><i class="fa-regular fa-clock"></i> 3 min read</span>
						</div>
						<h3>What Makes OMGYRO the Best Gyro Spot Near You</h3>
						<p class="article-excerpt">It starts with quality: 100% halal proteins, fresh vegetables, and house-made sauces. Our gyros and platters are made to order so every bite is as good as the first.</p>
						<span class="read-more-link">Read More <i class="fa-solid fa-arrow-right"></i></span>
					</div>
				</article>

				<!-- Card 3 -->
				<article class="blog-card stagger-in" data-category="Partnerships" onclick="openBlogModal('crunch-fitness')">
					<div class="blog-card__image">
						<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Team.jpeg" alt="OMGYRO x Crunch Fitness" />
						<span class="category-badge" data-cat="Partnerships">Partnerships</span>
					</div>
					<div class="blog-card__body">
						<div class="blog-card__body-meta">
							<span class="article-date">Feb 5, 2025</span>
							<span class="read-time"><i class="fa-regular fa-clock"></i> 2 min read</span>
						</div>
						<h3>OMGYRO x Crunch Fitness: Fueling Livingston with Flavor</h3>
						<p class="article-excerpt">OMGYRO is proud to partner with Crunch Fitness in Livingston. After your workout, refuel with halal gyros, platters, and bowls that taste great and fit your lifestyle.</p>
						<span class="read-more-link">Read More <i class="fa-solid fa-arrow-right"></i></span>
					</div>
				</article>

				<!-- Card 4 -->
				<article class="blog-card stagger-in" data-category="News" onclick="openBlogModal('halal-scene')">
					<div class="blog-card__image">
						<img src="https://seif-abdelhamid.github.io/inprogress/assets/images/Sauce-Bible.jpeg" alt="OMGYRO Halal Scene" />
						<span class="category-badge" data-cat="News">News</span>
					</div>
					<div class="blog-card__body">
						<div class="blog-card__body-meta">
							<span class="article-date">Feb 1, 2025</span>
							<span class="read-time"><i class="fa-regular fa-clock"></i> 2 min read</span>
						</div>
						<h3>OMGYRO: The Flavor That's Taking Over New Jersey's Halal Scene</h3>
						<p class="article-excerpt">Signature sauces, fresh halal cooking, and a growing footprint — OMGYRO is the flavor that's taking over New Jersey's halal scene.</p>
						<span class="read-more-link">Read More <i class="fa-solid fa-arrow-right"></i></span>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- ── Newsletter CTA ── -->
	<section class="newsletter-cta">
		<div class="newsletter-cta__card">
			<h2><span class="newsletter-cta__typing">Stay in the Loop</span><span class="newsletter-cta__cursor"></span></h2>
			<p>Follow us on social media for the latest OMGYRO news, new location announcements, menu drops, and behind-the-scenes content.</p>
			<div class="newsletter-cta__socials">
				<a href="https://www.facebook.com/profile.php?id=61565412359779&mibextid=ZbWKwL" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
				<a href="https://www.instagram.com/omgyrohalal/#" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
				<a href="https://www.tiktok.com/@omgyrohalal" target="_blank" rel="noopener" aria-label="TikTok"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em"><path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg></a>
				<a href="mailto:feedback@mamouns.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
			</div>
		</div>
	</section>

</main>

<!-- ── Blog Modal (Drawer) ── -->
<div class="blog-modal-overlay" id="blogModalOverlay" onclick="closeBlogModal(event)">
	<div class="blog-modal" onclick="event.stopPropagation()">
		<div class="blog-modal__progress">
			<div class="blog-modal__progress-bar" id="modalProgressBar"></div>
		</div>
		<button class="blog-modal__close" onclick="closeBlogModal()" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
		<img class="blog-modal__image" id="modalImage" src="" alt="" />
		<div class="blog-modal__inner">
			<a href="#" class="blog-modal__back" onclick="closeBlogModal(); return false;" aria-label="Back to Blog">
				<i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back to Blog
			</a>
			<div class="blog-modal__body">
				<div class="blog-modal__meta">
					<span class="category-badge" id="modalCategory"></span>
					<span id="modalDate"></span>
					<span id="modalAuthor"></span>
				</div>
				<h2 id="modalTitle"></h2>
				<div class="modal-content" id="modalContent"></div>
				<p class="blog-modal__share-label">Share this article</p>
				<div class="blog-modal__share">
					<button class="blog-modal__share-btn" aria-label="Share on Facebook"><i class="fa-brands fa-facebook-f"></i></button>
					<button class="blog-modal__share-btn" aria-label="Share on Twitter"><i class="fa-brands fa-x-twitter"></i></button>
					<button class="blog-modal__share-btn" aria-label="Copy link"><i class="fa-solid fa-link"></i></button>
					<button class="blog-modal__share-btn" aria-label="Share via email"><i class="fa-solid fa-envelope"></i></button>
				</div>
			</div>
		</div>
	</div>
</div>

<footer>
<div class="site-footer-desktop">
	<div class="site-footer-desktop-primary">
		<div class="site-footer-desktop-primary__container container">
			<ul class="social-accounts">
				<li><a href="https://www.facebook.com/profile.php?id=61565412359779&mibextid=ZbWKwL" aria-label="Facebook" target="_blank" rel="noopener"><span class="fa-brands fa-facebook" aria-hidden="true"></span><span class="sr-only">Facebook</span></a></li>
				<li><a href="https://www.instagram.com/omgyrohalal/#" aria-label="Instagram" target="_blank" rel="noopener"><span class="fa-brands fa-instagram" aria-hidden="true"></span><span class="sr-only">Instagram</span></a></li>
				<li><a href="https://www.tiktok.com/@omgyrohalal" aria-label="TikTok" target="_blank" rel="noopener"><span class="tiktok-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em"><path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg></span><span class="sr-only">TikTok</span></a></li>
				<li><a href="mailto:feedback@mamouns.com" aria-label="Email" target="_self"><span class="fa-solid fa-envelope" aria-hidden="true"></span><span class="sr-only">Email</span></a></li>
			</ul>
			<nav class="site-nav">
				<ul class="site-nav-menu">
					<li><a class="site-nav-link" href="/gift-card" aria-label="Gift Card">Gift Card</a></li>
					<li><a class="site-nav-link" href="/rewards" aria-label="Rewards">Rewards</a></li>
					<li><a class="site-nav-link" href="/contact" aria-label="Contact">Contact</a></li>
					<li><a class="site-nav-link" href="/community" aria-label="Community">Community</a></li>
				</ul>
			</nav>
		</div>
	</div>
	<div class="site-footer-desktop-secondary"></div>
</div>
</footer>

<script>
	// Blog Data
	const blogData = {
		'locations-nj': {
			title: 'OMGYRO Locations in New Jersey: Now Open & Coming Soon',
			category: 'Locations',
			author: 'OMGyro Team',
			date: 'February 20, 2025',
			image: '../assets/images/The-store.jpg',
			content: \`<p>OMGYRO is growing across New Jersey. Our current locations include South Orange, Union, Paramus, and more — each serving 100% halal, fresh-made gyros, platters, and our signature sauces.</p><p>We're also opening new spots so even more of NJ can get a taste. Keep an eye on our Locations page for the latest openings and coming-soon cities.</p><p>Find the OMGYRO nearest you, stop in, and see why we're the flavor that's taking over New Jersey's halal scene.</p>\`
		},
		'njcom-spotlight': {
			title: 'NJ.com Spotlights OMGYRO: Fresh Flavors, Fast Service, Big Momentum',
			category: 'Press',
			author: 'OMGyro Team',
			date: 'February 15, 2025',
			image: '../assets/images/people.jpg',
			content: \`<p>NJ.com has spotlighted OMGYRO for our fresh halal flavors, fast service, and the momentum behind our expansion across the state.</p><p>We're proud to be part of New Jersey's food scene and to bring quality halal options to more communities. Thank you to everyone who has made this growth possible.</p><p>Read the full feature on NJ.com and then come see us at a location near you.</p>\`
		},
		'best-gyro-spot': {
			title: 'What Makes OMGYRO the Best Gyro Spot Near You',
			category: 'Guide',
			author: 'OMGyro Team',
			date: 'February 10, 2025',
			image: '../assets/images/Platters/Compo-Platter.jpeg',
			content: \`<p>It starts with quality: 100% halal proteins, fresh vegetables, and house-made sauces. Our gyros and platters are made to order so every bite is as good as the first.</p><p>Then there's our Sauce Bible — Hot, OMG, White, and Green sauces that you can take home. Plus fast, friendly service and locations across NJ.</p><p>That's what makes OMGYRO the best gyro spot near you. Come taste the difference.</p>\`
		},
		'crunch-fitness': {
			title: 'OMGYRO x Crunch Fitness: Fueling Livingston with Flavor',
			category: 'Partnerships',
			author: 'OMGyro Team',
			date: 'February 5, 2025',
			image: '../assets/images/Team.jpeg',
			content: \`<p>OMGYRO is proud to partner with Crunch Fitness in Livingston. After your workout, refuel with halal gyros, platters, and bowls that taste great and fit your lifestyle.</p><p>Good food and fitness go hand in hand. We're excited to bring OMGYRO flavor to the Livingston community and to everyone who trains at Crunch.</p><p>Stop by and see us — we're here to fuel your gains with flavor.</p>\`
		},
		'halal-scene': {
			title: "OMGYRO: The Flavor That's Taking Over New Jersey's Halal Scene",
			category: 'News',
			author: 'OMGyro Team',
			date: 'February 1, 2025',
			image: '../assets/images/Sauce-Bible.jpeg',
			content: \`<p>Signature sauces, fresh halal cooking, and a growing footprint — OMGYRO is the flavor that's taking over New Jersey's halal scene.</p><p>From our iconic Hot and OMG sauces to our White and Green options, we're known for taste that keeps people coming back. Add in platters, gyros, and bowls made with care, and it's no wonder we're expanding across NJ.</p><p>Thank you for being part of the OMGYRO community. There's more to come.</p>\`
		}
	};

	function openBlogModal(key) {
		const data = blogData[key];
		if (!data) return;
		document.getElementById('modalImage').src = data.image;
		document.getElementById('modalImage').alt = data.title;
		document.getElementById('modalCategory').textContent = data.category;
		// Set category badge color
		document.getElementById('modalCategory').setAttribute('data-cat', data.category);
		document.getElementById('modalAuthor').textContent = data.author;
		document.getElementById('modalDate').textContent = data.date;
		document.getElementById('modalTitle').textContent = data.title;
		document.getElementById('modalContent').innerHTML = data.content;
		document.getElementById('blogModalOverlay').classList.add('active');
		document.body.style.overflow = 'hidden';
		// Reset progress bar
		document.getElementById('modalProgressBar').style.width = '0%';
	}

	function closeBlogModal(event) {
		if (event && event.target !== document.getElementById('blogModalOverlay')) return;
		document.getElementById('blogModalOverlay').classList.remove('active');
		document.body.style.overflow = '';
	}

	// Close on Escape key
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			document.getElementById('blogModalOverlay').classList.remove('active');
			document.body.style.overflow = '';
		}
	});

	document.addEventListener('DOMContentLoaded', function() {

		// ── Typewriter effect on hero (same as Sauce Bible) ──
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
				}, 80);
			}
			setTimeout(typeLine, 500);
		})();

		// ── Hero scroll button ──
		var blogHeroScrollBtn = document.getElementById('blogHeroScrollBtn');
		if (blogHeroScrollBtn) {
			blogHeroScrollBtn.addEventListener('click', function(e) {
				e.preventDefault();
				var target = document.getElementById('filterBar');
				if (target) target.scrollIntoView({ behavior: 'smooth' });
			});
		}

		// ── Filter Bar scroll effect ──
		var filterBar = document.getElementById('filterBar');
		if (filterBar) {
			window.addEventListener('scroll', function() {
				if (window.scrollY > 100) {
					filterBar.classList.add('scrolled');
				} else {
					filterBar.classList.remove('scrolled');
				}
			});
		}

		// ── Filter Pills ──
		var pills = document.querySelectorAll('.filter-pill');
		var blogCards = document.querySelectorAll('.blog-masonry .blog-card');
		var spotlightSection = document.getElementById('spotlightSection');

		pills.forEach(function(pill) {
			pill.addEventListener('click', function() {
				pills.forEach(function(p) { p.classList.remove('active'); });
				pill.classList.add('active');
				var filter = pill.getAttribute('data-filter');

				// Filter spotlight
				if (spotlightSection) {
					var spotCat = spotlightSection.getAttribute('data-category');
					if (filter === 'all' || filter === spotCat) {
						spotlightSection.style.display = '';
					} else {
						spotlightSection.style.display = 'none';
					}
				}

				// Filter grid cards
				blogCards.forEach(function(card, idx) {
					var cardCat = card.getAttribute('data-category');
					if (filter === 'all' || filter === cardCat) {
						card.classList.remove('card-hidden');
						card.classList.add('card-fading-in');
						card.style.animationDelay = (idx * 0.07) + 's';
						setTimeout(function() {
							card.classList.remove('card-fading-in');
						}, 400);
					} else {
						card.classList.add('card-hidden');
					}
				});
			});
		});

		// ── Stagger-in on scroll ──
		var staggerEls = document.querySelectorAll('.stagger-in');
		var staggerObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					var idx = Array.from(staggerEls).indexOf(entry.target);
					entry.target.style.transitionDelay = (idx * 0.1) + 's';
					entry.target.classList.add('visible');
					staggerObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1 });
		staggerEls.forEach(function(el) { staggerObserver.observe(el); });

		// ── Fade-in on scroll ──
		var fadeEls = document.querySelectorAll('.fade-in');
		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });
		fadeEls.forEach(function(el) { observer.observe(el); });

		// ── Spotlight 3D tilt on hover ──
		var spotlightCard = document.getElementById('spotlightCard');
		if (spotlightCard) {
			spotlightCard.addEventListener('mousemove', function(e) {
				var rect = spotlightCard.getBoundingClientRect();
				var x = e.clientX - rect.left;
				var y = e.clientY - rect.top;
				var centerX = rect.width / 2;
				var centerY = rect.height / 2;
				var rotateX = ((y - centerY) / centerY) * -4;
				var rotateY = ((x - centerX) / centerX) * 4;
				spotlightCard.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
			});
			spotlightCard.addEventListener('mouseleave', function() {
				spotlightCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
			});
		}

		// ── Modal scroll progress bar ──
		var modal = document.querySelector('.blog-modal');
		if (modal) {
			modal.addEventListener('scroll', function() {
				var scrollTop = modal.scrollTop;
				var scrollHeight = modal.scrollHeight - modal.clientHeight;
				var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
				document.getElementById('modalProgressBar').style.width = progress + '%';
			});
		}

	});
</script>
`;

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Blog | OMGyro Halal';

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
