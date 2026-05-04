(function () {
  'use strict';

  const SCROLL_THRESHOLD = 80;
  const DEBOUNCE_DELAY = 16;

  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  let isScrolled = false;
  let ticking = false;

  function updateNavigationState() {
    const scrollY = window.scrollY || window.pageYOffset;
    const shouldBeScrolled = scrollY > SCROLL_THRESHOLD;

    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;
      topbar.setAttribute('data-scrolled', isScrolled ? 'true' : 'false');
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateNavigationState);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });

  function initializeNavigation() {
    updateNavigationState();

    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateNavigationState, DEBOUNCE_DELAY);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavigation);
  } else {
    initializeNavigation();
  }

  function initializeSmoothScroll() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const navLinks = topbar.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();

        const navHeight = topbar.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        targetElement.focus({ preventScroll: true });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      });
    });
  }

  initializeSmoothScroll();

})();
