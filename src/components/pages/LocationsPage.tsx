import { useEffect } from 'react';

const bodyContent = `        
	
		
<header class="site-header">
<div class="site-header-desktop">
		<div class="site-header-desktop-primary" data-header-sticky>
			<div class="container omgyro-header-inner">
				<div class="site-logo">
					<a class="site-logo__btn" href="../index.html" aria-label="OMGYRO Halal Food">
						<img class="site-logo__expanded" src="../assets/images/OMGYRO-logo.png" alt="OMGYRO Halal Food" loading="eager" fetchpriority="high" />
					</a>
				</div>
				<nav class="site-nav">
					<ul class="site-nav-menu" data-menu-type="desktop">
						<li><a class="site-nav-link" href="../locations/index.html" aria-label="Locations" role="button">Locations</a></li>
						<li><a class="site-nav-link" href="../menu/index.html" aria-label="Menu" role="button">Menu</a></li>
						<li><a class="site-nav-link" href="../catering/index.html" aria-label="Catering" role="button">Catering</a></li>
						<li><a class="site-nav-link" href="../store/index.html" aria-label="Sauce Bible" role="button">Sauce Bible</a></li>
						<li><a class="site-nav-link" href="../blog/index.html" aria-label="Blog" role="button">Blog</a></li>
						<li><a href="https://omgyrohalal.square.site/" class="btn btn-brand site-nav-cta" target="_blank" rel="noopener" aria-label="Order Online" role="button">Order Online</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<div class="site-header-mobi" aria-label="Navigation Menu Modal">
		<div class="site-logo">
			<a class="site-logo__btn" href="../index.html" aria-label="OMGYRO Halal Food">
				<img src="../assets/images/OMGYRO-logo.png" alt="OMGYRO Halal Food" />
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
						<a href="../index.html" aria-label="OMGYRO Halal Food">
							<img src="../assets/images/OMGYRO-logo.png" alt="OMGYRO Halal Food" />
						</a>
					</div>
					<div class="nav-quick-actions">
						<a href="https://omgyrohalal.square.site/" class="quick-action-card" target="_blank" rel="noopener">
							<span class="quick-action-icon"><i class="fa fa-bag-shopping"></i></span>
							<span class="quick-action-text">Order Now</span>
						</a>
						<a href="../locations/index.html" class="quick-action-card">
							<span class="quick-action-icon"><i class="fa fa-location-dot"></i></span>
							<span class="quick-action-text">Find Us</span>
						</a>
					</div>
				</div>
				<nav class="site-nav" aria-label="Navigation Menu">
					<div class="nav-section">
						<div class="nav-section-title">Main</div>
						<ul class="site-nav-menu" data-menu-type="mobile">
							<li><a class="site-nav-link" href="../menu/index.html" aria-label="Menu"><span class="nav-icon"><i class="fa-solid fa-utensils"></i></span><span>Menu</span></a></li>
							<li><a class="site-nav-link" href="../locations/index.html" aria-label="Locations"><span class="nav-icon"><i class="fa-solid fa-location-dot"></i></span><span>Locations</span></a></li>
							<li><a class="site-nav-link" href="../catering/index.html" aria-label="Catering"><span class="nav-icon"><i class="fa-solid fa-champagne-glasses"></i></span><span>Catering</span></a></li>
							<li><a class="site-nav-link" href="../store/index.html" aria-label="Sauce Bible"><span class="nav-icon"><i class="fa-solid fa-fire"></i></span><span>Sauce Bible</span></a></li>
							<li><a class="site-nav-link" href="../blog/index.html" aria-label="Blog"><span class="nav-icon"><i class="fa-solid fa-newspaper"></i></span><span>Blog</span></a></li>
						</ul>
					</div>
					<div class="nav-section">
						<div class="nav-section-title">About</div>
						<ul class="site-nav-menu" data-menu-type="mobile">
							<li><a class="site-nav-link" href="../blog/index.html" aria-label="Blog"><span class="nav-icon"><i class="fa-solid fa-newspaper"></i></span><span>Blog</span></a></li>
							<li><a class="site-nav-link" href="../gift-card/index.html" aria-label="Gift Card"><span class="nav-icon"><i class="fa-solid fa-gift"></i></span><span>Gift Card</span></a></li>
							<li><a class="site-nav-link" href="../contact/index.html" aria-label="Contact"><span class="nav-icon"><i class="fa-solid fa-envelope"></i></span><span>Contact</span></a></li>
							<li><a class="site-nav-link" href="../community/index.html" aria-label="Community"><span class="nav-icon"><i class="fa-solid fa-users"></i></span><span>Community</span></a></li>
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

			
			<main class="site-content__main page-id--1001174">
<section class="content container locations-page locations-page--full-width" style="padding: 40px 20px 60px;">
	<div class="locations-container" style="display: flex; gap: 30px; align-items: flex-start;">
		
		<!-- Location List on Left -->
		<div class="locations-list" style="flex: 0 0 450px; background: linear-gradient(180deg, #fff 0%, #fffbf9 100%); border-radius: 20px; padding: 32px; box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,102,0,0.1); max-height: 750px; overflow-y: auto; position: sticky; top: 20px;">
			
			<!-- South Orange, NJ -->
			<div class="location-item" data-lat="40.7489" data-lng="-74.2610" style="margin-bottom: 30px; padding: 25px; border: 2px solid #f0f0f0; border-radius: 10px; background: #ffffff; transition: all 0.3s ease; cursor: default;">
				<h2 class="h2" style="color: var(--omgyro-orange); margin-bottom: 15px; font-size: 22px; cursor: pointer; font-weight: 600; transition: color 0.3s ease;" onclick="focusLocation(40.7489, -74.2610)" onmouseover="this.style.color='#E55A00'" onmouseout="this.style.color='var(--omgyro-orange)'">📍 South Orange, NJ</h2>
				<p style="color: var(--omgyro-black); margin-bottom: 20px; font-size: 14px; line-height: 1.7;">
					<strong style="color: var(--omgyro-black); font-size: 15px; display: block; margin-bottom: 8px;">Hours</strong>
					<span style="display: block; margin-top: 4px;">🕒 Sunday-Tuesday: 10:30am - 1:00am</span>
					<span style="display: block; margin-top: 4px;">🕒 Wednesday-Thursday: 10:30am - 2:00am</span>
					<span style="display: block; margin-top: 4px;">🕒 Friday-Saturday: 10:30am - 3:00am</span>
				</p>
				<div class="location-buttons" style="display: flex; flex-direction: column; gap: 10px; margin-top: 18px; align-items: center; width: 100%;">
					<button onclick="focusLocation(40.7489, -74.2610); openLocationInfo(40.7489, -74.2610);" class="btn btn-brand location-btn" style="width: 100%; padding: 12px 20px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; text-align: center; margin: 0;">View on Map</button>
					<button onclick="showLocationDetails('South Orange, NJ', '40.7489', '-74.2610')" class="btn btn-brand-alt location-btn" style="width: 100%; padding: 12px 20px; border: 2px solid var(--omgyro-orange); background: transparent; color: var(--omgyro-orange); border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; text-align: center; margin: 0;">Location Details</button>
					<a href="https://omgyrohalal.square.site/" class="btn btn-brand location-btn" target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; width: 100%; text-align: center; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; border: none; margin: 0;">Order Online</a>
				</div>
			</div>
			
			<!-- Union, NJ -->
			<div class="location-item" data-lat="40.6976" data-lng="-74.2632" style="margin-bottom: 30px; padding: 25px; border: 2px solid #f0f0f0; border-radius: 10px; background: #ffffff; transition: all 0.3s ease; cursor: default;">
				<h2 class="h2" style="color: var(--omgyro-orange); margin-bottom: 15px; font-size: 22px; cursor: pointer; font-weight: 600; transition: color 0.3s ease;" onclick="focusLocation(40.6976, -74.2632)" onmouseover="this.style.color='#E55A00'" onmouseout="this.style.color='var(--omgyro-orange)'">📍 Union, NJ</h2>
				<p style="color: var(--omgyro-black); margin-bottom: 20px; font-size: 14px; line-height: 1.7;">
					<strong style="color: var(--omgyro-black); font-size: 15px; display: block; margin-bottom: 8px;">Hours</strong>
					<span style="display: block; margin-top: 4px;">🕒 Sunday-Thursday: 10:30am - 1:00am</span>
					<span style="display: block; margin-top: 4px;">🕒 Friday-Saturday: 10:30am - 2:00am</span>
				</p>
				<div class="location-buttons" style="display: flex; flex-direction: column; gap: 10px; margin-top: 18px; align-items: center; width: 100%;">
					<button onclick="focusLocation(40.6976, -74.2632); openLocationInfo(40.6976, -74.2632);" class="btn btn-brand location-btn" style="width: 100%; padding: 12px 20px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; text-align: center; margin: 0;">View on Map</button>
					<button onclick="showLocationDetails('Union, NJ', '40.6976', '-74.2632')" class="btn btn-brand-alt location-btn" style="width: 100%; padding: 12px 20px; border: 2px solid var(--omgyro-orange); background: transparent; color: var(--omgyro-orange); border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; text-align: center; margin: 0;">Location Details</button>
					<a href="https://omgyrohalal.square.site/" class="btn btn-brand location-btn" target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; width: 100%; text-align: center; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; border: none; margin: 0;">Order Online</a>
				</div>
			</div>
			
			<!-- Paramus, NJ -->
			<div class="location-item" data-lat="40.9485" data-lng="-74.0933" style="margin-bottom: 30px; padding: 25px; border: 2px solid #f0f0f0; border-radius: 10px; background: #ffffff; transition: all 0.3s ease; cursor: default;">
				<h2 class="h2" style="color: var(--omgyro-orange); margin-bottom: 15px; font-size: 22px; cursor: pointer; font-weight: 600; transition: color 0.3s ease;" onclick="focusLocation(40.9485, -74.0933)" onmouseover="this.style.color='#E55A00'" onmouseout="this.style.color='var(--omgyro-orange)'">📍 Paramus, NJ</h2>
				<p style="color: var(--omgyro-black); margin-bottom: 20px; font-size: 14px; line-height: 1.7;">
					<strong style="color: var(--omgyro-black); font-size: 15px; display: block; margin-bottom: 8px;">Hours</strong>
					<span style="display: block; margin-top: 4px;">🕒 Sunday-Saturday: 10:30am - 11:00pm</span>
				</p>
				<div class="location-buttons" style="display: flex; flex-direction: column; gap: 10px; margin-top: 18px; align-items: center; width: 100%;">
					<button onclick="focusLocation(40.9485, -74.0933); openLocationInfo(40.9485, -74.0933);" class="btn btn-brand location-btn" style="width: 100%; padding: 12px 20px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; text-align: center; margin: 0;">View on Map</button>
					<button onclick="showLocationDetails('Paramus, NJ', '40.9485', '-74.0933')" class="btn btn-brand-alt location-btn" style="width: 100%; padding: 12px 20px; border: 2px solid var(--omgyro-orange); background: transparent; color: var(--omgyro-orange); border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; text-align: center; margin: 0;">Location Details</button>
					<a href="https://omgyrohalal.square.site/" class="btn btn-brand location-btn" target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; width: 100%; text-align: center; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; transition: all 0.3s ease; height: 44px; box-sizing: border-box; border: none; margin: 0;">Order Online</a>
				</div>
			</div>
			
			<!-- Coming Soon Section -->
			<div style="margin-top: 40px; padding-top: 30px; border-top: 3px solid #e0e0e0;">
				<h3 class="h3" style="color: var(--omgyro-black); margin-bottom: 20px; font-size: 20px; font-weight: 600;">Coming Soon</h3>
				
				<div class="coming-soon-item" data-lat="40.4140" data-lng="-74.3196" style="margin-bottom: 12px; padding: 18px 20px; background: #f9f9f9; border-radius: 8px; cursor: pointer; border: 2px solid #e8e8e8; transition: all 0.3s ease;" onclick="focusLocation(40.4140, -74.3196)" onmouseover="this.style.borderColor='var(--omgyro-orange)'; this.style.background='#fff5f0'; this.style.transform='translateX(3px)'" onmouseout="this.style.borderColor='#e8e8e8'; this.style.background='#f9f9f9'; this.style.transform='translateX(0)'">
					<h4 style="color: var(--omgyro-orange); margin: 0; font-size: 16px; font-weight: 600;">📍 Old Bridge, NJ</h4>
				</div>
				
				<div class="coming-soon-item" data-lat="40.8198" data-lng="-74.2904" style="margin-bottom: 12px; padding: 18px 20px; background: #f9f9f9; border-radius: 8px; cursor: pointer; border: 2px solid #e8e8e8; transition: all 0.3s ease;" onclick="focusLocation(40.8198, -74.2904)" onmouseover="this.style.borderColor='var(--omgyro-orange)'; this.style.background='#fff5f0'; this.style.transform='translateX(3px)'" onmouseout="this.style.borderColor='#e8e8e8'; this.style.background='#f9f9f9'; this.style.transform='translateX(0)'">
					<h4 style="color: var(--omgyro-orange); margin: 0; font-size: 16px; font-weight: 600;">📍 Elmwood, NJ</h4>
				</div>
				
				<div class="coming-soon-item" data-lat="40.7968" data-lng="-74.4815" style="margin-bottom: 12px; padding: 18px 20px; background: #f9f9f9; border-radius: 8px; cursor: pointer; border: 2px solid #e8e8e8; transition: all 0.3s ease;" onclick="focusLocation(40.7968, -74.4815)" onmouseover="this.style.borderColor='var(--omgyro-orange)'; this.style.background='#fff5f0'; this.style.transform='translateX(3px)'" onmouseout="this.style.borderColor='#e8e8e8'; this.style.background='#f9f9f9'; this.style.transform='translateX(0)'">
					<h4 style="color: var(--omgyro-orange); margin: 0; font-size: 16px; font-weight: 600;">📍 Morris Twp, NJ</h4>
				</div>
			</div>
			
		</div>
		
		<!-- Map on Right -->
		<div class="map-wrapper">
			<div class="map-container">
				<div class="map-accent"></div>
				<div id="map" class="map-inner"></div>
				<div class="map-attribution">OMGYRO® · Find us in NJ</div>
			</div>
		</div>
		
	</div>
</section>

<style>
	/* Desktop: section full width; only a small side inset (20px) so the two gaps are minimal */
	.locations-page.locations-page--full-width {
		width: 100% !important;
		max-width: 100% !important;
		margin: 0 !important;
		box-sizing: border-box !important;
	}
	.locations-page.locations-page--full-width .locations-container {
		width: 100% !important;
		max-width: 100% !important;
		margin: 0 !important;
		padding: 0 !important;
		box-sizing: border-box !important;
	}
	.locations-page .map-wrapper {
		flex: 1 1 auto !important;
		min-width: 0 !important;
		max-width: 1150px !important;
	}
	/* Two-column stagger */
	.locations-page .locations-container {
		position: relative;
	}
	.locations-page .locations-list {
		opacity: 0;
		transform: translateX(-20px);
		animation: listReveal 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s forwards;
	}
	.locations-page .location-item {
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease, background 0.3s ease;
		position: relative;
		text-align: left;
		opacity: 0;
		transform: translateX(-24px);
		animation: cardSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}
	.locations-page .location-item:nth-child(1) { animation-delay: 0.1s; }
	.locations-page .location-item:nth-child(2) { animation-delay: 0.2s; }
	.locations-page .location-item:nth-child(3) { animation-delay: 0.3s; }
	.locations-page .location-item:nth-child(4) { animation-delay: 0.4s; }
	.locations-page .location-item:nth-child(5) { animation-delay: 0.5s; }
	.locations-page .location-item:nth-child(6) { animation-delay: 0.6s; }
	.locations-page .location-item:nth-child(7) { animation-delay: 0.7s; }
	.locations-page .location-item:nth-child(8) { animation-delay: 0.8s; }
	@keyframes listReveal {
		to { opacity: 1; transform: translateX(0); }
	}
	@keyframes cardSlideIn {
		to { opacity: 1; transform: translateX(0); }
	}
	.location-buttons {
		text-align: center;
	}
	.locations-page .location-item:hover {
		background: linear-gradient(135deg, #fffbf8 0%, #fff5f0 100%) !important;
		border-color: var(--omgyro-orange) !important;
		box-shadow: 0 12px 32px rgba(255, 102, 0, 0.18), 0 4px 12px rgba(0,0,0,0.06) !important;
		transform: translateY(-4px) scale(1.01);
	}
	
	/* Section background */
	.locations-page {
		background: linear-gradient(180deg, #faf9f7 0%, #fff 20%, #fff 80%, #faf8f6 100%);
		position: relative;
	}
	.locations-page::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(255,102,0,0.2), transparent);
		opacity: 0.6;
	}
	/* ========== Locations page: map theme + animations ========== */
	.locations-page .map-wrapper {
		flex: 1;
		min-height: 750px;
		position: relative;
		opacity: 0;
		animation: mapWrapperIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
	}
	@keyframes mapWrapperIn {
		to { opacity: 1; }
	}
	.locations-page .map-container {
		position: relative;
		min-height: 750px;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 24px 64px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06), 0 0 0 4px rgba(255,102,0,0.12);
		background: linear-gradient(165deg, #fffaf7 0%, #fff 35%, #fdf8f4 100%);
		transition: box-shadow 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
		animation: mapReveal 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s forwards;
		opacity: 0;
		transform: scale(0.96) translateY(30px);
	}
	.locations-page .map-container::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 24px;
		padding: 4px;
		background: linear-gradient(120deg, #c44a00 0%, #FF6600 25%, #ff8533 50%, #FF6600 75%, #e55a00 100%);
		background-size: 300% 300%;
		animation: mapBorderGlow 8s ease-in-out infinite;
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none;
		z-index: 2;
	}
	.locations-page .map-container::after {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: 25px;
		padding: 1px;
		background: linear-gradient(135deg, rgba(255,102,0,0.4), transparent 40%, rgba(255,102,0,0.2) 100%);
		pointer-events: none;
		z-index: 1;
		opacity: 0;
		transition: opacity 0.4s ease;
	}
	.locations-page .map-container:hover::after {
		opacity: 1;
	}
	@keyframes mapReveal {
		to { opacity: 1; transform: scale(1) translateY(0); }
	}
	@keyframes mapBorderGlow {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	.locations-page .map-container:hover {
		box-shadow: 0 32px 72px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,102,0,0.25), 0 0 60px rgba(255,102,0,0.12) !important;
		transform: translateY(-6px) scale(1.005);
	}
	.locations-page .map-accent {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 6px;
		background: linear-gradient(90deg, transparent 0%, #FF6600 15%, #ff8533 50%, #FF6600 85%, transparent 100%);
		background-size: 200% 100%;
		animation: mapAccentShift 3.5s ease-in-out infinite;
		z-index: 1;
		pointer-events: none;
		box-shadow: 0 2px 12px rgba(255,102,0,0.4);
	}
	.locations-page .map-accent::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
		animation: mapShimmer 2.5s ease-in-out infinite;
	}
	@keyframes mapShimmer {
		0%, 100% { transform: translateX(-100%); }
		50% { transform: translateX(100%); }
	}
	@keyframes mapAccentShift {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	.locations-page .map-inner {
		width: 100%;
		height: 750px;
		position: relative;
		z-index: 0;
		border-radius: 0 0 24px 24px;
		transition: filter 0.5s ease, transform 0.5s ease;
	}
	.locations-page .map-container.active .map-inner {
		filter: brightness(1.06) saturate(1.08);
		transform: scale(1.01);
	}
	.locations-page .map-attribution {
		position: absolute;
		bottom: 16px;
		right: 16px;
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.15em;
		color: #1a1a1a;
		background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,240,0.98) 100%);
		padding: 8px 14px;
		border-radius: 10px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,102,0,0.2);
		z-index: 1;
		pointer-events: none;
	}
	/* Leaflet theme overrides */
	.locations-page .map-container .leaflet-container {
		background: #f0ede8 !important;
		font-family: inherit;
	}
	.locations-page .map-container .leaflet-control-zoom {
		border: none !important;
		box-shadow: 0 4px 16px rgba(0,0,0,0.3) !important;
		border-radius: 10px !important;
		overflow: hidden;
	}
	.locations-page .map-container .leaflet-control-zoom a {
		background: #1a1a1a !important;
		color: #fff !important;
		border: none !important;
		width: 36px !important;
		height: 36px !important;
		line-height: 36px !important;
		font-size: 20px !important;
		transition: background 0.2s, color 0.2s;
	}
	.locations-page .map-container .leaflet-control-zoom a:hover {
		background: #FF6600 !important;
		color: #fff !important;
	}
	.locations-page .map-container .leaflet-popup-content-wrapper {
		background: linear-gradient(180deg, #fff 0%, #fffbf8 100%);
		border-radius: 16px;
		box-shadow: 0 16px 48px rgba(0,0,0,0.18), 0 0 0 2px rgba(255,102,0,0.15);
		border: none;
		animation: popupIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes popupIn {
		from { opacity: 0; transform: scale(0.92) translateY(-8px); }
		to { opacity: 1; transform: scale(1) translateY(0); }
	}
	.locations-page .map-container .leaflet-popup-tip {
		background: #fffbf8;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
	}
	.locations-page .map-container .leaflet-popup-content {
		margin: 0;
	}
	.locations-page .map-container .leaflet-popup-content a[href*="google.com/maps"],
	.locations-page .map-container .leaflet-popup-content a[href*="maps.app"] {
		background: #FF6600 !important;
		color: #fff !important;
		padding: 10px 16px !important;
		border-radius: 8px !important;
		font-weight: 600 !important;
		text-decoration: none !important;
		display: inline-block !important;
		transition: background 0.2s, transform 0.2s !important;
	}
	.locations-page .map-container .leaflet-popup-content a[href*="google.com/maps"]:hover,
	.locations-page .map-container .leaflet-popup-content a[href*="maps.app"]:hover {
		background: #E55A00 !important;
		transform: translateY(-1px);
	}
	/* Marker: ring ripple + pulse */
	.locations-page .omgyro-marker {
		position: relative;
	}
	.locations-page .omgyro-marker::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 24px;
		height: 24px;
		margin: -12px 0 0 -12px;
		border: 2px solid rgba(255,102,0,0.6);
		border-radius: 50%;
		animation: markerRipple 2.2s ease-out infinite;
		pointer-events: none;
	}
	.locations-page .omgyro-marker.soon::before {
		border-color: rgba(100,100,100,0.5);
		animation-duration: 2.8s;
	}
	@keyframes markerRipple {
		0% { transform: scale(0.8); opacity: 0.8; }
		100% { transform: scale(2.2); opacity: 0; }
	}
	.locations-page .omgyro-marker span,
	.locations-page .omgyro-marker.soon span {
		animation: markerPulse 2.2s ease-in-out infinite;
		position: relative;
		z-index: 1;
	}
	.locations-page .omgyro-marker.soon span {
		animation-duration: 2.8s;
	}
	@keyframes markerPulse {
		0%, 100% { transform: scale(1); box-shadow: 0 2px 10px rgba(0,0,0,0.25), 0 0 0 0 rgba(255,102,0,0.4); }
		50% { transform: scale(1.15); box-shadow: 0 6px 20px rgba(255,102,0,0.35), 0 0 0 8px rgba(255,102,0,0); }
	}
	.locations-page .omgyro-marker.soon span {
		box-shadow: 0 2px 8px rgba(0,0,0,0.2);
	}
	.locations-page .omgyro-marker.soon span {
		animation-name: markerPulseSoon;
	}
	@keyframes markerPulseSoon {
		0%, 100% { transform: scale(1); opacity: 0.92; }
		50% { transform: scale(1.1); opacity: 1; }
	}
	@media (prefers-reduced-motion: reduce) {
		.locations-page .map-container,
		.locations-page .map-container::before,
		.locations-page .map-accent,
		.locations-page .map-accent::after,
		.locations-page .map-wrapper,
		.locations-page .omgyro-marker::before,
		.locations-page .omgyro-marker span { animation: none !important; }
		.locations-page .map-container { opacity: 1; transform: none; }
		.locations-page .map-wrapper { opacity: 1; }
		.locations-page .location-item { animation: none !important; opacity: 1; transform: none; }
		.locations-page .locations-list { animation: none !important; opacity: 1; transform: none; }
	}
	
	.map-container {
		transition: box-shadow 0.4s ease, transform 0.3s ease;
	}
	
	.map-container:hover {
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
	}
	
	#map {
		transition: filter 0.3s ease;
	}
	
	.map-container.active {
		box-shadow: 0 8px 30px rgba(255, 102, 0, 0.25) !important;
	}
	
	.map-container.active #map,
	.map-container.active .map-inner {
		filter: brightness(1.05);
	}
	.location-item::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 0;
		background: var(--omgyro-orange);
		border-radius: 10px 0 0 10px;
		transition: width 0.3s ease;
	}
	.location-item:hover::before {
		width: 4px;
	}
	.location-btn {
		transition: all 0.3s ease !important;
		text-align: center !important;
	}
	.location-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 2px 8px rgba(255, 102, 0, 0.3) !important;
	}
	.btn-brand-alt:hover {
		background: var(--omgyro-orange) !important;
		color: var(--omgyro-white) !important;
	}
	.google-maps-btn,
	a[href*="google.com/maps"] {
		color: #FFFFFF !important;
	}
	.google-maps-btn:hover,
	.google-maps-btn:active,
	.google-maps-btn:focus,
	.google-maps-btn:visited,
	a[href*="google.com/maps"]:hover,
	a[href*="google.com/maps"]:active,
	a[href*="google.com/maps"]:focus,
	a[href*="google.com/maps"]:visited {
		color: #FFFFFF !important;
	}
	/* Coming Soon block */
	.locations-page .locations-list > div[style*="border-top"] {
		animation: comingSoonReveal 0.6s ease-out 0.9s backwards;
	}
	@keyframes comingSoonReveal {
		from { opacity: 0; transform: translateY(12px); }
		to { opacity: 1; transform: translateY(0); }
	}
	.locations-page .coming-soon-item {
		transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.3s, background 0.3s !important;
	}
	.locations-page .coming-soon-item:hover {
		transform: translateX(6px) scale(1.02) !important;
		box-shadow: 0 6px 20px rgba(255,102,0,0.12) !important;
	}
	.locations-list::-webkit-scrollbar {
		width: 8px;
	}
	.locations-list::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 10px;
	}
	.locations-list::-webkit-scrollbar-thumb {
		background: var(--omgyro-orange);
		border-radius: 10px;
	}
	.locations-list::-webkit-scrollbar-thumb:hover {
		background: #E55A00;
	}
	@media (max-width: 968px) {
		.locations-container {
			flex-direction: column !important;
			align-items: stretch !important;
			gap: 20px !important;
		}
		.locations-list {
			flex: 1 1 auto !important;
			width: 100% !important;
			max-height: none !important;
			position: relative !important;
			top: 0 !important;
		}
		.map-wrapper {
			width: 100% !important;
		}
		.map-container {
			min-height: 450px !important;
		}
		#map {
			height: 450px !important;
		}
	}
	@media (max-width: 768px) {
		section.content.container {
			padding: 20px 12px !important;
		}
		.locations-container {
			gap: 16px !important;
		}
		.locations-list {
			padding: 16px !important;
			border-radius: 14px !important;
		}
		.location-item {
			padding: 18px !important;
			margin-bottom: 16px !important;
		}
		.map-container {
			min-height: 350px !important;
			border-radius: 14px !important;
		}
		#map {
			height: 350px !important;
		}
	}
	
	/* Location Details Modal Styles */
	.location-details-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10000;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
		pointer-events: none;
	}
	
	.location-details-modal.active {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}
	
	.location-modal-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(4px);
		animation: fadeIn 0.3s ease-out;
	}
	
	.location-modal-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.9);
		background: #ffffff;
		border-radius: 20px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		max-width: 500px;
		width: 90%;
		max-height: 85vh;
		overflow-y: auto;
		animation: modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		z-index: 10001;
	}
	
	.location-details-modal.active .location-modal-content {
		transform: translate(-50%, -50%) scale(1);
	}
	
	.location-modal-close {
		position: absolute;
		top: 15px;
		right: 15px;
		background: transparent;
		border: none;
		font-size: 32px;
		color: #999;
		cursor: pointer;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s ease;
		z-index: 10002;
		line-height: 1;
		padding: 0;
	}
	
	.location-modal-close:hover {
		background: #f5f5f5;
		color: var(--omgyro-orange);
		transform: rotate(90deg);
	}
	
	.location-modal-header {
		padding: 30px 30px 20px;
		border-bottom: 2px solid #f0f0f0;
		background: linear-gradient(135deg, #fff5f0 0%, #ffffff 100%);
		border-radius: 20px 20px 0 0;
	}
	
	.location-modal-title {
		color: var(--omgyro-orange);
		font-size: 28px;
		font-weight: 700;
		margin: 0;
		animation: slideInDown 0.5s ease-out 0.1s both;
	}
	
	.location-modal-body {
		padding: 30px;
	}
	
	.location-info-section {
		margin-bottom: 25px;
		animation: fadeInUp 0.5s ease-out both;
	}
	
	.location-info-section:nth-child(1) {
		animation-delay: 0.2s;
	}
	
	.location-info-section:nth-child(2) {
		animation-delay: 0.3s;
	}
	
	.location-info-title {
		color: var(--omgyro-black);
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px 0;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	
	.parking-title {
		color: var(--omgyro-orange);
	}
	
	.location-info-text {
		color: #555;
		font-size: 15px;
		line-height: 1.7;
		margin: 0;
	}
	
	.parking-section {
		background: linear-gradient(135deg, #fff5f0 0%, #ffe8d6 100%);
		padding: 20px;
		border-radius: 12px;
		border: 2px solid rgba(255, 102, 0, 0.2);
		position: relative;
		overflow: hidden;
	}
	
	.parking-section::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(255, 102, 0, 0.1) 0%, transparent 70%);
		animation: pulse 3s ease-in-out infinite;
	}
	
	.parking-badge {
		display: flex;
		align-items: center;
		gap: 12px;
		background: #ffffff;
		padding: 16px 20px;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(255, 102, 0, 0.15);
		position: relative;
		z-index: 1;
		animation: slideInRight 0.5s ease-out 0.4s both;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	
	.parking-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(255, 102, 0, 0.25);
	}
	
	.parking-icon {
		font-size: 32px;
		animation: bounce 2s ease-in-out infinite;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
	}
	
	.parking-text {
		color: #333;
		font-size: 15px;
		line-height: 1.6;
		font-weight: 500;
		flex: 1;
	}
	
	/* Animations */
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	
	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: translate(-50%, -50%) scale(0.8) translateY(20px);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1) translateY(0);
		}
	}
	
	@keyframes slideInDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes slideInLeft {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	
	@keyframes slideInRight {
		from {
			opacity: 0;
			transform: translateX(20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(15px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}
	
	@keyframes pulse {
		0%, 100% {
			opacity: 0.3;
		}
		50% {
			opacity: 0.6;
		}
	}
	
	@media (max-width: 768px) {
		.location-modal-content {
			max-width: 95%;
			border-radius: 15px;
		}
		
		.location-modal-header {
			padding: 25px 20px 15px;
		}
		
		.location-modal-title {
			font-size: 24px;
		}
		
		.location-modal-body {
			padding: 20px;
		}
		
		.parking-badge {
			flex-direction: column;
			text-align: center;
			gap: 10px;
		}
	}
	
	/* Coming Soon Modal Styles */
	.coming-soon-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10000;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
		pointer-events: none;
	}
	
	.coming-soon-modal.active {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}
	
	.coming-soon-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(5px);
		animation: fadeIn 0.3s ease-out;
	}
	
	.coming-soon-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.85);
		background: #ffffff;
		border-radius: 24px;
		box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
		max-width: 600px;
		width: 90%;
		max-height: 90vh;
		overflow-y: auto;
		animation: comingSoonSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		z-index: 10001;
	}
	
	.coming-soon-modal.active .coming-soon-content {
		transform: translate(-50%, -50%) scale(1);
	}
	
	.coming-soon-close {
		position: absolute;
		top: 15px;
		right: 15px;
		background: transparent;
		border: none;
		font-size: 36px;
		color: #999;
		cursor: pointer;
		width: 45px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s ease;
		z-index: 10002;
		line-height: 1;
		padding: 0;
	}
	
	.coming-soon-close:hover {
		background: #f5f5f5;
		color: var(--omgyro-orange);
		transform: rotate(90deg) scale(1.1);
	}
	
	.coming-soon-header {
		padding: 35px 35px 25px;
		background: linear-gradient(135deg, #fff5f0 0%, #ffe8d6 50%, #ffffff 100%);
		border-radius: 24px 24px 0 0;
		text-align: center;
		position: relative;
		overflow: hidden;
	}
	
	.coming-soon-header::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(255, 102, 0, 0.1) 0%, transparent 70%);
		animation: pulse 4s ease-in-out infinite;
	}
	
	.coming-soon-badge {
		display: inline-block;
		background: linear-gradient(135deg, var(--omgyro-orange) 0%, #FF8533 100%);
		color: #ffffff;
		padding: 10px 24px;
		border-radius: 25px;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin-bottom: 15px;
		box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
		animation: badgePulse 2s ease-in-out infinite;
		position: relative;
		z-index: 1;
	}
	
	.coming-soon-title {
		color: var(--omgyro-orange);
		font-size: 32px;
		font-weight: 700;
		margin: 0;
		animation: slideInDown 0.6s ease-out 0.2s both;
		position: relative;
		z-index: 1;
	}
	
	.coming-soon-body {
		padding: 30px 35px 35px;
	}
	
	.coming-soon-message {
		margin-bottom: 25px;
		animation: fadeInUp 0.6s ease-out 0.3s both;
	}
	
	.coming-soon-text {
		color: #555;
		font-size: 16px;
		line-height: 1.7;
		margin: 0 0 12px 0;
	}
	
	.coming-soon-text strong {
		color: var(--omgyro-orange);
		font-weight: 600;
	}
	
	.coming-soon-parking {
		margin-bottom: 30px;
		animation: fadeInUp 0.6s ease-out 0.4s both;
	}
	
	.coming-soon-parking-badge {
		background: linear-gradient(135deg, #fff5f0 0%, #ffe8d6 100%);
		border: 2px solid rgba(255, 102, 0, 0.3);
		padding: 20px;
		border-radius: 15px;
		display: flex;
		align-items: center;
		gap: 15px;
		box-shadow: 0 4px 15px rgba(255, 102, 0, 0.15);
		transition: all 0.3s ease;
	}
	
	.coming-soon-parking-badge:hover {
		transform: translateY(-3px);
		box-shadow: 0 6px 25px rgba(255, 102, 0, 0.25);
		border-color: var(--omgyro-orange);
	}
	
	.coming-soon-parking-badge .parking-icon {
		font-size: 40px;
		animation: bounce 2s ease-in-out infinite;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
	}
	
	.coming-soon-parking-badge .parking-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	
	.coming-soon-parking-badge .parking-label {
		color: var(--omgyro-orange);
		font-size: 18px;
		font-weight: 700;
	}
	
	.coming-soon-parking-badge .parking-details {
		color: #666;
		font-size: 14px;
		line-height: 1.5;
	}
	
	.coming-soon-map-container {
		animation: fadeInUp 0.6s ease-out 0.5s both;
	}
	
	.map-title {
		color: var(--omgyro-black);
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 15px 0;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	
	.map-title::before {
		content: '🗺️';
		font-size: 20px;
	}
	
	.coming-soon-map {
		width: 100%;
		height: 300px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
		border: 2px solid rgba(255, 102, 0, 0.2);
		animation: mapFadeIn 0.8s ease-out 0.6s both;
	}
	
	@keyframes comingSoonSlideIn {
		from {
			opacity: 0;
			transform: translate(-50%, -50%) scale(0.7) translateY(30px);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1) translateY(0);
		}
	}
	
	@keyframes badgePulse {
		0%, 100% {
			transform: scale(1);
			box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
		}
		50% {
			transform: scale(1.05);
			box-shadow: 0 6px 20px rgba(255, 102, 0, 0.4);
		}
	}
	
	@keyframes mapFadeIn {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	
	@media (max-width: 768px) {
		.coming-soon-content {
			max-width: 95%;
			border-radius: 20px;
		}
		
		.coming-soon-header {
			padding: 30px 20px 20px;
		}
		
		.coming-soon-title {
			font-size: 26px;
		}
		
		.coming-soon-body {
			padding: 25px 20px 30px;
		}
		
		.coming-soon-parking-badge {
			flex-direction: column;
			text-align: center;
		}
		
		.coming-soon-map {
			height: 250px;
		}
	}
	/* Order Online - ORANGE on all pages */
	.site-header .site-nav-cta, .site-header-desktop-primary .site-nav-cta, .site-header-mobi-panel .site-nav-cta, .mobi-footer .site-nav-cta { background: #FF6600 !important; background-color: #FF6600 !important; border-color: #FF6600 !important; color: #fff !important; }
	.site-header .site-nav-cta:hover, .site-header-desktop-primary .site-nav-cta:hover, .site-header-mobi-panel .site-nav-cta:hover, .mobi-footer .site-nav-cta:hover { background: #E55A00 !important; background-color: #E55A00 !important; border-color: #E55A00 !important; }
	</style>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<script>
	// Locations data (open + coming soon from https://www.omgyrohalal.com/locations)
	var LOCATIONS_DATA = [
		{ name: 'South Orange, NJ', lat: 40.7489, lng: -74.2610, hours: 'Sunday-Tuesday: 10:30am - 1:00am<br>Wednesday-Thursday: 10:30am - 2:00am<br>Friday-Saturday: 10:30am - 3:00am', parking: 'Free parking available on-site and nearby street parking', status: 'open', googleMapsUrl: 'https://maps.app.goo.gl/shMSTyc97xvK8syq9' },
		{ name: 'Union, NJ', lat: 40.6976, lng: -74.2632, hours: 'Sunday-Thursday: 10:30am - 1:00am<br>Friday-Saturday: 10:30am - 2:00am', parking: 'Free parking available on-site and nearby street parking', status: 'open', googleMapsUrl: 'https://maps.app.goo.gl/JPYjqnsVPQ4ZLAs4A' },
		{ name: 'Paramus, NJ', lat: 40.9485, lng: -74.0933, hours: 'Sunday-Saturday: 10:30am - 11:00pm', parking: 'Free parking available on-site and nearby street parking', status: 'open', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=40.9485,-74.0933' },
		{ name: 'Old Bridge, NJ', lat: 40.4140, lng: -74.3196, status: 'coming-soon', googleMapsUrl: '' },
		{ name: 'Elmwood, NJ', lat: 40.8198, lng: -74.2904, status: 'coming-soon', googleMapsUrl: 'https://maps.app.goo.gl/GUYA9pCF2kG1CsTB8' },
		{ name: 'Morris Twp, NJ', lat: 40.7968, lng: -74.4815, status: 'coming-soon', googleMapsUrl: 'https://maps.app.goo.gl/47v2nt45n4TyGx9A6' }
	];

	function initMap() {
		var mapEl = document.getElementById('map');
		if (!mapEl || !window.L) return;
		// Leaflet: center NJ, zoom 9
		var map = L.map('map').setView([40.7, -74.3], 9);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom: 19 }).addTo(map);
		window.map = map;
		var markersByLocation = {};
		var openIcon = L.divIcon({ className: 'omgyro-marker', html: '<span style="background:#FF6600;width:24px;height:24px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:block;"></span>', iconSize: [24, 24], iconAnchor: [12, 24] });
		var soonIcon = L.divIcon({ className: 'omgyro-marker soon', html: '<span style="background:#888;width:20px;height:20px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 4px rgba(0,0,0,0.2);display:block;"></span>', iconSize: [20, 20], iconAnchor: [10, 20] });
		LOCATIONS_DATA.forEach(function(loc) {
			var googleMapsUrl = loc.googleMapsUrl || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(loc.lat + ',' + loc.lng));
			var content = '<div style="padding:16px;min-width:260px;font-family:inherit"><h3 style="color:#FF6600;margin:0 0 10px;font-size:18px">' + loc.name + '</h3>';
			if (loc.status === 'coming-soon') {
				content += '<p style="color:#666;margin:0 0 12px;font-size:14px"><strong>Coming Soon</strong></p>';
			} else {
				content += '<p style="color:#333;margin:0 0 10px;font-size:13px;line-height:1.5">' + (loc.hours || '') + '</p>';
				if (loc.parking) content += '<p style="margin:0 0 12px;font-size:12px;color:#555">🅿️ ' + loc.parking + '</p>';
			}
			content += '<a href="' + googleMapsUrl + '" target="_blank" rel="noopener" style="display:inline-block;padding:8px 14px;background:#FF6600;color:#fff!important;text-decoration:none;border-radius:6px;font-weight:600;font-size:13px">Directions</a></div>';
			var marker = L.marker([loc.lat, loc.lng], { icon: loc.status === 'coming-soon' ? soonIcon : openIcon }).addTo(map).bindPopup(content);
			marker.on('click', function() {
				if (loc.status === 'coming-soon') showComingSoonModal(loc.name, loc.lat, loc.lng);
			});
			var key = loc.lat + ',' + loc.lng;
			markersByLocation[key] = { marker: marker, location: loc };
		});
		window.markersByLocation = markersByLocation;
		window.infoWindows = [];
		setTimeout(function() { map.invalidateSize(); }, 100);
		// Mobile: redraw map after layout so it gets correct dimensions
		setTimeout(function() { map.invalidateSize(); }, 500);
	}

	function focusLocation(lat, lng) {
		if (!window.map) return;
		var targetLat = parseFloat(lat);
		var targetLng = parseFloat(lng);
		var locationKey = targetLat + ',' + targetLng;
		var data = window.markersByLocation && window.markersByLocation[locationKey];
		if (data && data.location.status === 'coming-soon') {
			showComingSoonModal(data.location.name, targetLat, targetLng);
			return;
		}
		window.map.flyTo([targetLat, targetLng], 14, { duration: 0.8 });
		var mapContainer = document.querySelector('.map-container');
		if (mapContainer) { mapContainer.classList.add('active'); setTimeout(function() { mapContainer.classList.remove('active'); }, 1000); }
		if (data) setTimeout(function() { data.marker.openPopup(); }, 900);
	}

	function openLocationInfo(lat, lng) {
		var locationKey = parseFloat(lat) + ',' + parseFloat(lng);
		var data = window.markersByLocation && window.markersByLocation[locationKey];
		if (!data || data.location.status === 'coming-soon') return;
		window.map.eachLayer(function(l) { if (l.closePopup) l.closePopup(); });
		setTimeout(function() { data.marker.openPopup(); }, 150);
	}
	
	function showLocationDetails(locationName, lat, lng) {
		focusLocation(lat, lng);
		openLocationInfo(lat, lng);
		
		// Find location data
		var locationKey = parseFloat(lat) + ',' + parseFloat(lng);
		var locationData = null;
		if (window.markersByLocation && window.markersByLocation[locationKey]) {
			locationData = window.markersByLocation[locationKey].location;
		}
		
		// Show location details modal with parking info
		showLocationDetailsModal(locationName, locationData);
		
		if (window.innerWidth <= 968) {
			setTimeout(function() {
				document.querySelector('.map-container').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
			}, 300);
		}
	}
	
	function showLocationDetailsModal(locationName, locationData) {
		// Create or get modal
		var modal = document.getElementById('location-details-modal');
		if (!modal) {
			modal = document.createElement('div');
			modal.id = 'location-details-modal';
			modal.className = 'location-details-modal';
			document.body.appendChild(modal);
		}
		
		var parkingInfo = locationData && locationData.parking ? locationData.parking : 'Free parking available on-site and nearby street parking';
		var hours = locationData && locationData.hours ? locationData.hours.replace(/<br>/g, '\\n') : '';
		
		modal.innerHTML = '<div class="location-modal-overlay" onclick="closeLocationDetailsModal()"></div>' +
			'<div class="location-modal-content">' +
			'<button class="location-modal-close" onclick="closeLocationDetailsModal()" aria-label="Close">×</button>' +
			'<div class="location-modal-header">' +
			'<h2 class="location-modal-title">📍 ' + locationName + '</h2>' +
			'</div>' +
			'<div class="location-modal-body">' +
			(hours ? '<div class="location-info-section"><h3 class="location-info-title">🕒 Hours</h3><p class="location-info-text">' + hours.replace(/\\n/g, '<br>') + '</p></div>' : '') +
			'<div class="location-info-section parking-section">' +
			'<h3 class="location-info-title parking-title">🅿️ Parking Information</h3>' +
			'<div class="parking-badge">' +
			'<span class="parking-icon">🚗</span>' +
			'<span class="parking-text">' + parkingInfo + '</span>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>';
		
		// Show modal with animation
		modal.classList.add('active');
		document.body.style.overflow = 'hidden';
	}
	
	function closeLocationDetailsModal() {
		var modal = document.getElementById('location-details-modal');
		if (modal) {
			modal.classList.remove('active');
			setTimeout(function() {
				modal.classList.add('closing');
				setTimeout(function() {
					document.body.style.overflow = '';
				}, 300);
			}, 10);
		}
	}
	
	function showComingSoonModal(locationName, lat, lng) {
		// Create or get modal
		var modal = document.getElementById('coming-soon-modal');
		if (!modal) {
			modal = document.createElement('div');
			modal.id = 'coming-soon-modal';
			modal.className = 'coming-soon-modal';
			document.body.appendChild(modal);
		}
		
		// Create unique map container ID
		var mapId = 'coming-soon-map-' + Date.now();
		
		modal.innerHTML = '<div class="coming-soon-overlay" onclick="closeComingSoonModal()"></div>' +
			'<div class="coming-soon-content">' +
			'<button class="coming-soon-close" onclick="closeComingSoonModal()" aria-label="Close">×</button>' +
			'<div class="coming-soon-header">' +
			'<div class="coming-soon-badge">Coming Soon</div>' +
			'<h2 class="coming-soon-title">📍 ' + locationName + '</h2>' +
			'</div>' +
			'<div class="coming-soon-body">' +
			'<div class="coming-soon-message">' +
			'<p class="coming-soon-text">We\\'re excited to announce that we\\'re opening a new location in <strong>' + locationName + '</strong>!</p>' +
			'<p class="coming-soon-text">Stay tuned for updates on our grand opening.</p>' +
			'</div>' +
			'<div class="coming-soon-parking">' +
			'<div class="parking-badge coming-soon-parking-badge">' +
			'<span class="parking-icon">🅿️</span>' +
			'<div class="parking-info">' +
			'<strong class="parking-label">Free Parking Available</strong>' +
			'<span class="parking-details">On-site and nearby street parking will be available</span>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="coming-soon-map-container">' +
			'<h3 class="map-title">Location Preview</h3>' +
			'<div id="' + mapId + '" class="coming-soon-map"></div>' +
			'</div>' +
			'</div>' +
			'</div>';
		
		// Show modal with animation
		modal.classList.add('active');
		document.body.style.overflow = 'hidden';
		
		// Initialize map after modal is shown
		setTimeout(function() {
			initComingSoonMap(mapId, lat, lng, locationName);
		}, 300);
	}
	
	function initComingSoonMap(mapId, lat, lng, locationName) {
		if (!window.L) return;
		var el = document.getElementById(mapId);
		if (!el) return;
		var latN = parseFloat(lat);
		var lngN = parseFloat(lng);
		var m = L.map(mapId).setView([latN, lngN], 15);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(m);
		var icon = L.divIcon({ className: 'coming-soon-marker', html: '<span style="background:#888;width:28px;height:28px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:block;"></span>', iconSize: [28, 28], iconAnchor: [14, 28] });
		var marker = L.marker([latN, lngN], { icon: icon }).addTo(m).bindPopup('<strong style="color:#FF6600">' + locationName + '</strong><p style="margin:4px 0 0 0;color:#666;font-size:13px">Coming Soon</p>');
		setTimeout(function() { marker.openPopup(); }, 400);
	}
	
	function closeComingSoonModal() {
		var modal = document.getElementById('coming-soon-modal');
		if (modal) {
			modal.classList.remove('active');
			setTimeout(function() {
				document.body.style.overflow = '';
			}, 300);
		}
	}
</script>
<script>
	document.addEventListener('DOMContentLoaded', function() {
		if (window.L && document.getElementById('map')) initMap();
		// On resize (e.g. mobile rotate), redraw map so it stays visible
		window.addEventListener('resize', function() {
			if (window.map) {
				setTimeout(function() { window.map.invalidateSize(); }, 150);
			}
		});
	});
</script>
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
			<a class="site-nav-link "  href="../gift-card/index.html"  aria-label="Gift Card">Gift Card</a>
		</li>
		<li>
			<a class="site-nav-link "  href="../rewards/index.html"  aria-label="Rewards">Rewards</a>
		</li>
		<li>
			<a class="site-nav-link "  href="../contact/index.html"  aria-label="Contact">Contact</a>
		</li>
		<li>
			<a class="site-nav-link "  href="../community/index.html"  aria-label="Community">Community</a>
		</li>
                                  </ul>
                              </nav>
                      </div>
                  </div>
                  <div class="site-footer-desktop-secondary">
                      
                  </div>
          </div>
        </footer>

		
	

	
	
		
    
    
    
<script src="../assets/js/mobile-panel.js"></script>
`;

export default function LocationsPage() {
  useEffect(() => {
    document.title = 'Locations | OMGYRO Halal in NJ';
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}
