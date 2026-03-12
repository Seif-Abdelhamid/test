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
	
	<script type="text/javascript">
		Modernizr.addTest("maybemobile", function(){ return (Modernizr.touchevents && Modernizr.mq("only screen and (max-width: 768px)")) ? true : false; });
	</script>
	<script>
		!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1774517649433672'); fbq('track', 'PageView');
	</script>
	<noscript>
		<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1774517649433672&amp;ev=PageView&amp;noscript=1"/>
	</noscript>
	<script src="https://www.googletagmanager.com/gtag/js?id=G-1W51SGCDTH&amp;l=newGADatalayer" async></script>
	<script>
		window.newGADatalayer = window.newGADatalayer || [];
		function gtag4(){newGADatalayer.push(arguments);}
		gtag4('js', new Date());
		gtag4('config', 'G-1W51SGCDTH');
	</script>
	<script>
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PVB6BSZ');
	</script>
<script type="text/javascript" src="../cdn.rlets.com_443/capture_configs/d93/9d7/917/0e9415e85874c67faac3033.js" async="async"></script>
<script type="application/ld+json">{"@context": "http://schema.org", "@type": "Organization", "@id": "https://www.mamouns.com/#organization", "url": "https://www.mamouns.com", "name": "OMGYRO Halal", "description": "OMGYRO Halal - Serving fresh, authentic Halal food in NJ.", "logo": "../assets/images/OMGYRO-logo.png", "subOrganization": [{"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-new-haven-ct/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-new-haven-ct/", "name": "New Haven, CT", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "New Haven, CT", "streetAddress": "85 Howe Street", "addressLocality": "New Haven", "addressRegion": "CT", "postalCode": "06511"}, "location": {"@type": "PostalAddress", "name": "New Haven, CT", "streetAddress": "85 Howe Street", "addressLocality": "New Haven", "addressRegion": "CT", "postalCode": "06511"}, "telephone": "203.562.8444", "hasMap": "https://www.mamouns.com/location/mamouns-new-haven-ct/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-east-rutherford-nj/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-east-rutherford-nj/", "name": "East Rutherford, NJ", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "East Rutherford, NJ", "streetAddress": "84 Route 17", "addressLocality": "East Rutherford", "addressRegion": "NJ", "postalCode": "07073"}, "location": {"@type": "PostalAddress", "name": "East Rutherford, NJ", "streetAddress": "84 Route 17", "addressLocality": "East Rutherford", "addressRegion": "NJ", "postalCode": "07073"}, "telephone": "201.340.4102", "hasMap": "https://www.mamouns.com/location/mamouns-east-rutherford-nj/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-hoboken-nj/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-hoboken-nj/", "name": "Hoboken, NJ", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "Hoboken, NJ", "streetAddress": "300 Washington Street", "addressLocality": "Hoboken", "addressRegion": "NJ", "postalCode": "07030"}, "location": {"@type": "PostalAddress", "name": "Hoboken, NJ", "streetAddress": "300 Washington Street", "addressLocality": "Hoboken", "addressRegion": "NJ", "postalCode": "07030"}, "telephone": "201.656.0310", "hasMap": "https://www.mamouns.com/location/mamouns-hoboken-nj/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-new-brunswick-nj/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-new-brunswick-nj/", "name": "New Brunswick, NJ", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "New Brunswick, NJ", "streetAddress": "58 Easton Avenue", "addressLocality": "New Brunswick", "addressRegion": "NJ", "postalCode": "08901"}, "location": {"@type": "PostalAddress", "name": "New Brunswick, NJ", "streetAddress": "58 Easton Avenue", "addressLocality": "New Brunswick", "addressRegion": "NJ", "postalCode": "08901"}, "telephone": "732.640.0794", "hasMap": "https://www.mamouns.com/location/mamouns-new-brunswick-nj/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-princeton-nj/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-princeton-nj/", "name": "Princeton, NJ", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "Princeton, NJ", "streetAddress": "20 Witherspoon Street", "addressLocality": "Princeton", "addressRegion": "NJ", "postalCode": "08542"}, "location": {"@type": "PostalAddress", "name": "Princeton, NJ", "streetAddress": "20 Witherspoon Street", "addressLocality": "Princeton", "addressRegion": "NJ", "postalCode": "08542"}, "telephone": "609.454.5936", "hasMap": "https://www.mamouns.com/location/mamouns-princeton-nj/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-east-village-nyc/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-east-village-nyc/", "name": "East Village, NYC", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "East Village, NYC", "streetAddress": "30 St. Marks Place", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10003"}, "location": {"@type": "PostalAddress", "name": "East Village, NYC", "streetAddress": "30 St. Marks Place", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10003"}, "telephone": "646.870.5785", "hasMap": "https://www.mamouns.com/location/mamouns-east-village-nyc/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-greenwich-village-nyc/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-greenwich-village-nyc/", "name": "Greenwich Village, NYC", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "Greenwich Village, NYC", "streetAddress": "119 Macdougal Street", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10012"}, "location": {"@type": "PostalAddress", "name": "Greenwich Village, NYC", "streetAddress": "119 Macdougal Street", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10012"}, "telephone": null, "hasMap": "https://www.mamouns.com/location/mamouns-greenwich-village-nyc/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-upper-east-side-nyc/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-upper-east-side-nyc/", "name": "Upper East Side, NY", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "Upper East Side, NY", "streetAddress": "1105 Lexington Avenue", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10075"}, "location": {"@type": "PostalAddress", "name": "Upper East Side, NY", "streetAddress": "1105 Lexington Avenue", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10075"}, "telephone": "646.814.7373", "hasMap": "https://www.mamouns.com/location/mamouns-upper-east-side-nyc/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}, {"@type": "FoodEstablishment", "@id": "https://www.mamouns.com/location/mamouns-upper-west-side-nyc/#foodestablishment", "url": "https://www.mamouns.com/location/mamouns-upper-west-side-nyc/", "name": "Upper West Side, NYC", "description": "", "image": "", "photo": "", "address": {"@type": "PostalAddress", "name": "Upper West Side, NYC", "streetAddress": "508 Columbus Avenue", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10024"}, "location": {"@type": "PostalAddress", "name": "Upper West Side, NYC", "streetAddress": "508 Columbus Avenue", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10024"}, "telephone": "347.379.7676", "hasMap": "https://www.mamouns.com/location/mamouns-upper-west-side-nyc/", "parentOrganization": {"@type": "Organization", "@id": "https://www.mamouns.com/#organization"}, "servesCuisine": "Halal / Mediterranean", "priceRange": "$"}], "email": "\u0026#102;\u0026#101;\u0026#101;\u0026#100;\u0026#98;\u0026#97;\u0026#99;\u0026#107;\u0026#64;\u0026#109;\u0026#97;\u0026#109;\u0026#111;\u0026#117;\u0026#110;\u0026#115;\u0026#46;\u0026#99;\u0026#111;\u0026#109;", "sameAs": ["https://www.facebook.com/mamounsfalafel", "https://www.linkedin.com/company/64915638/", "https://www.youtube.com/channel/UCkRIDHTjWVFu5I1ipK8xIzw", "https://www.instagram.com/mamounsfalafel/"], "potentialAction": {"@type": "ReserveAction", "object": {"@type": "Reservation", "name": "Table", "url": "https://www.mamouns.com/#action-reservations"}, "result": {"@type": "Reservation", "name": "Table"}, "target": "https://www.mamouns.com"}}</script>
	<script type="application/ld+json">{"@context": "http://schema.org", "@type": "WebSite", "@id": "https://www.mamouns.com/#website", "url": "https://www.mamouns.com", "name": "OMGyro Halal"}</script>
	<script type="application/ld+json">{"@context": "http://schema.org", "@type": "WebPage", "@id": "https://www.mamouns.com/#webpage", "url": "https://www.mamouns.com", "name": "OMGyro Halal"}</script>
</head>

		
		<div class="site-content">

			
			<main class="site-content__main">
<section class="ultimate-form-section">
				<div class="form-mesh-bg"></div>
				<div class="container">
					<div class="ultimate-form-header">
						<div class="ultimate-badge badge-form">
							<div class="badge-sparkle"></div>
							<span class="badge-icon">💫</span>
							<span class="badge-text">Send Message</span>
						</div>
						<h2 class="ultimate-title">
							<span class="title-word word-1">Share</span>
							<span class="title-word word-2">Your</span>
							<span class="title-word word-3">Thoughts</span>
						</h2>
					</div>
					<div class="ultimate-form-wrapper">
						<div class="form-glow-orb"></div>
						<!-- Replace YOUR_FORMSPREE_ID with your form ID from https://formspree.io (free signup) -->
						<form class="ultimate-form" id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
							<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="form-honeypot" aria-hidden="true">
							<input type="hidden" name="_subject" value="OMGYRO Contact Form">
							<div class="form-row-ultimate">
								<div class="ultimate-field">
									<div class="field-glow"></div>
									<div class="field-icon-wrapper">
										<i class="fa fa-user"></i>
									</div>
									<input type="text" id="ultimate-name" name="name" class="ultimate-input" placeholder="Your Name" required>
									<div class="field-underline"></div>
									<div class="field-focus-line"></div>
								</div>

								<div class="ultimate-field">
									<div class="field-glow"></div>
									<div class="field-icon-wrapper">
										<i class="fa-solid fa-envelope"></i>
									</div>
									<input type="email" id="ultimate-email" name="email" class="ultimate-input" placeholder="Your Email" required>
									<div class="field-underline"></div>
									<div class="field-focus-line"></div>
								</div>
							</div>

							<div class="ultimate-field">
								<div class="field-glow"></div>
								<div class="field-icon-wrapper">
									<i class="fa fa-tag"></i>
								</div>
								<input type="text" id="ultimate-subject" name="subject" class="ultimate-input" placeholder="Subject">
								<div class="field-underline"></div>
								<div class="field-focus-line"></div>
							</div>

							<div class="ultimate-field textarea-field">
								<div class="field-glow"></div>
								<div class="field-icon-wrapper">
									<i class="fa fa-comment"></i>
								</div>
								<textarea id="ultimate-message" name="message" class="ultimate-input ultimate-textarea" rows="6" placeholder="Your Message" required></textarea>
								<div class="field-underline"></div>
								<div class="field-focus-line"></div>
							</div>

							<div class="form-status" id="form-status" aria-live="polite" role="status"></div>
							<div class="form-submit-wrap">
								<button type="submit" class="ultimate-submit" id="form-submit-btn">
									<span class="submit-text">Send Message</span>
									<span class="submit-icon">
										<i class="fa fa-paper-plane"></i>
									</span>
									<div class="submit-shine"></div>
									<div class="submit-ripple"></div>
									<div class="submit-particles">
										<span></span><span></span><span></span>
									</div>
								</button>
							</div>
						</form>
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
                                  <ul class="site-nav-menu"><li>
			<a class="site-nav-link "  href="/gift-card"  aria-label="Gift Card">Gift Card</a>
		</li>
		<li>
			<a class="site-nav-link "  href="/rewards"  aria-label="Rewards">Rewards</a>
		</li>
		<li>
			<a class="site-nav-link "  href="/"  aria-label="Contact">Contact</a>
		</li>
		<li>
			<a class="site-nav-link "  href="/community"  aria-label="Community">Community</a>
		</li>
                                  </ul>
                              </nav>
                      </div>
                  </div>
			<div class="site-footer-desktop-secondary"></div>
          </div>
        </footer><script>
		// Modern Scroll Reveal Animation
		(function() {
			const revealElements = document.querySelectorAll('.revealable, .c-split, .content');
			const observerOptions = {
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px'
			};
			
			const observer = new IntersectionObserver(function(entries) {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
						observer.unobserve(entry.target);
					}
				});
			}, observerOptions);
			
			revealElements.forEach(el => {
				observer.observe(el);
			});
			
			// Initial check for elements already in view
			revealElements.forEach(el => {
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					el.classList.add('revealed');
				}
			});
			
		})();

		// Contact form: submit via Formspree (AJAX), show success/error
		(function() {
			var form = document.getElementById('contact-form');
			var statusEl = document.getElementById('form-status');
			var submitBtn = document.getElementById('form-submit-btn');
			if (!form || !statusEl || !submitBtn) return;

			function setStatus(msg, type) {
				statusEl.textContent = msg;
				statusEl.className = 'form-status' + (type ? ' form-status--' + type : '');
			}

			form.addEventListener('submit', function(e) {
				e.preventDefault();
				var action = form.getAttribute('action');
				if (!action || action.indexOf('YOUR_FORMSPREE_ID') !== -1) {
					setStatus('Please set your Formspree form ID in the form action. Get one free at formspree.io', 'error');
					return;
				}
				setStatus('');
				submitBtn.disabled = true;
				submitBtn.querySelector('.submit-text').textContent = 'Sending…';

				var body = new FormData(form);
				fetch(action, {
					method: 'POST',
					body: body,
					headers: { 'Accept': 'application/json' }
				})
				.then(function(r) { return r.json(); })
				.then(function(data) {
					if (data.ok) {
						setStatus('Thanks! Your message was sent. We\'ll get back to you soon.', 'success');
						form.reset();
					} else {
						setStatus(data.error || 'Something went wrong. Please try again or email us directly.', 'error');
					}
				})
				.catch(function() {
					setStatus('Network error. Please check your connection and try again.', 'error');
				})
				.finally(function() {
					submitBtn.disabled = false;
					submitBtn.querySelector('.submit-text').textContent = 'Send Message';
				});
			});
		})();
	</script>
`;

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | OMGyro Halal';

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
