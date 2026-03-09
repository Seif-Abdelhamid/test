/**
 * Sauce bottle fill animation – runs when #sauces section scrolls into view (store page).
 * Fills each bottle with a short stagger, then enables the liquid surface wave.
 */
(function () {
  var section = document.getElementById('sauces');
  if (!section || !document.body.classList.contains('store-page')) return;

  var bottles = section.querySelectorAll('.sauce-bottle');
  if (!bottles.length) return;

  var filled = false;
  var targetFillPercent = 88;
  var fillDuration = 3800;
  var staggerMs = 180;

  function animateFill(juiceEl, startTime, done) {
    function step(currentTime) {
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / fillDuration, 1);
      progress = -(Math.cos(Math.PI * progress) - 1) / 2;
      var heightPercent = progress * targetFillPercent;
      juiceEl.style.height = heightPercent + '%';

      if (heightPercent > 5) juiceEl.classList.add('filled');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        juiceEl.classList.remove('filling');
        if (typeof done === 'function') done();
      }
    }
    requestAnimationFrame(step);
  }

  function startFills() {
    if (filled) return;
    filled = true;
    var start = performance.now();
    bottles.forEach(function (bottle, i) {
      var juice = bottle.querySelector('.juice');
      if (!juice) return;
      juice.classList.add('filling');
      var delay = i * staggerMs;
      setTimeout(function () {
        animateFill(juice, performance.now());
      }, delay);
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startFills();
          observer.disconnect();
        }
      });
    },
    { rootMargin: '0px 0px -80px 0px', threshold: 0.2 }
  );

  observer.observe(section);
})();

/**
 * 3D Card Tilt Effect – Dynamic perspective on mouse move.
 */
(function () {
  var section = document.getElementById('sauces');
  if (!section) return;

  var cards = section.querySelectorAll('.menu-item');
  if (!cards.length) return;

  var maxTilt = 8;

  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      
      var rotateX = ((y - centerY) / centerY) * -maxTilt;
      var rotateY = ((x - centerX) / centerX) * maxTilt;
      
      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.03)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });
})();

/**
 * Sauce Detail Page Parallax Effect.
 */
(function () {
  if (!document.body.classList.contains('sauce-detail-page')) return;
  
  var hero = document.querySelector('.sauce-detail-hero');
  var bottle = document.querySelector('.sauce-detail-hero__bottle');
  if (!hero || !bottle) return;

  var maxMove = 15;

  document.addEventListener('mousemove', function (e) {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var moveX = (e.clientX - centerX) / centerX * maxMove;
    var moveY = (e.clientY - centerY) / centerY * maxMove;
    
    bottle.style.transform = 'scale(2.4) translate(' + moveX + 'px, ' + moveY + 'px)';
    bottle.style.transition = 'transform 0.3s ease-out';
  });
})();
