/**
 * Lenis smooth scroll – init only when script runs and Lenis is loaded.
 * Respects prefers-reduced-motion (no smooth scroll).
 * Call window.initLenis() after Lenis script load, or use DOMContentLoaded.
 */
(function() {
	'use strict';

	function initLenis() {
		if (typeof Lenis === 'undefined') return null;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

		var lenis = new Lenis({
			lerp: 0.08,
			duration: 1.2,
			smoothWheel: true,
			syncTouch: false
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		// Anchor links: use Lenis scrollTo
		document.querySelectorAll('a[href^="#"]').forEach(function(link) {
			var href = link.getAttribute('href');
			if (href === '#') return;
			var id = href.slice(1);
			var target = document.getElementById(id);
			if (!target) return;
			link.addEventListener('click', function(e) {
				e.preventDefault();
				lenis.scrollTo('#' + id, { offset: -20, duration: 1.1 });
			});
		});

		window.__lenis = lenis;
		return lenis;
	}

	window.initLenis = initLenis;

	// Run when DOM ready; Lenis script must be loaded before this file
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() { initLenis(); });
	} else {
		initLenis();
	}
})();
