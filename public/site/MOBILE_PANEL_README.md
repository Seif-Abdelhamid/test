# Mobile panel (site-header-mobi-panel__inner) – single place to edit

The mobile hamburger panel is the same on every page. Edit in **one place** and it applies everywhere.

## Where to edit what

- **Panel look and layout** (centering, social icons, spacing): `assets/css/global-overrides.css` – search for `site-header-mobi-panel` or `site-header-mobi-panel__inner`. Mobile styles are inside `@media (max-width: 768px)`.
- **Panel structure and base styles**: `assets/css/header-unified.css` – search for `site-header-mobi-panel`.
- **Panel open/close behavior**: `assets/js/mobile-panel.js` – toggle, close button, click outside, close on link click.
- **Canonical panel HTML**: `includes/header.html` (the block inside `#SiteHeaderMobilePanel`). For static HTML pages, copy that block and replace `{{BASE}}` / `{{ASSETS}}` with the correct path for that page (e.g. `../` for one level down).

## Making the panel work on every page

Each index file must have:

1. **CSS** in head: `global-overrides.css` and `header-unified.css` (paths relative to that page).
2. **Script** before `</body>`: `<script src="assets/js/mobile-panel.js"></script>` (path relative to that page; e.g. `../assets/js/mobile-panel.js` from a subfolder).
3. **HTML**: Same structure as in `includes/header.html` – `#SiteHeaderMobilePanel` with `.site-header-mobi-panel__inner`, close button, nav-header, site-nav, and site-social with **four** social links (Facebook, Instagram, TikTok with .tiktok-icon SVG, Email).

If the panel does not open on a page, add the script and ensure the IDs/classes match.
