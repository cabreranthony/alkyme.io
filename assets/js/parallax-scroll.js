(function() {
  'use strict';

  const parallaxSections = document.querySelectorAll('.parallax-section');
  if (!parallaxSections.length) return;

  let ticking = false;

  function updateParallax() {
    parallaxSections.forEach(section => {
      const bg = section.querySelector('.parallax-section__bg');
      if (!bg) return;

      const rect = section.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (scrolled - sectionTop) * 0.5;
        bg.style.transform = `translateY(${offset}px)`;
      }
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);

  updateParallax();
})();
