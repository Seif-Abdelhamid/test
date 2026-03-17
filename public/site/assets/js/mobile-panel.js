/**
 * Mobile nav panel toggle – single source for all index pages.
 * Include this script on every page that has #SiteHeaderMobilePanel.
 * Runs on DOMContentLoaded so it works on Contact, Locations, and all pages.
 */
(function() {
	'use strict';

	function init() {
		var navToggleBtn = document.querySelector('.nav-toggle-btn');
		var mobilePanel = document.getElementById('SiteHeaderMobilePanel');
		var navCloseBtn = document.querySelector('.nav-close-btn');
		var body = document.body;

		if (!navToggleBtn && !mobilePanel) return;

		function openNav() {
			if (mobilePanel && navToggleBtn) {
				mobilePanel.classList.add('is-open');
				navToggleBtn.classList.add('is-active');
				navToggleBtn.setAttribute('aria-expanded', 'true');
				if (body) body.classList.add('nav-open');
			}
		}

		function closeNav() {
			if (mobilePanel && navToggleBtn) {
				mobilePanel.classList.remove('is-open');
				navToggleBtn.classList.remove('is-active');
				navToggleBtn.setAttribute('aria-expanded', 'false');
				if (body) body.classList.remove('nav-open');
			}
		}

		if (navToggleBtn) {
			navToggleBtn.addEventListener('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				if (mobilePanel && mobilePanel.classList.contains('is-open')) {
					closeNav();
				} else {
					openNav();
				}
			});
		}

		if (navCloseBtn) {
			navCloseBtn.addEventListener('click', function(e) {
				e.preventDefault();
				closeNav();
			});
		}

		if (mobilePanel) {
			mobilePanel.addEventListener('click', function(e) {
				if (e.target === mobilePanel) closeNav();
			});
			var navLinks = mobilePanel.querySelectorAll('.site-nav-link, .site-nav-cta, .quick-action-card');
			navLinks.forEach(function(link) {
				link.addEventListener('click', function() { setTimeout(closeNav, 300); });
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
