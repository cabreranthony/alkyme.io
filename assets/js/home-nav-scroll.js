(function() {
  'use strict';

  const nav = document.querySelector('.nav');
  if (!nav) return;

  const NAV_HEIGHT = 72;
  let ticking = false;
  let darkSections = [];

  function calculateDarkSections() {
    darkSections = [];
    const sections = document.querySelectorAll('.hero, .hero-visual, .stats-hero, .ai-hero, .section--dark, [data-nav-dark]');

    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      darkSections.push({
        top: rect.top + scrollY,
        bottom: rect.bottom + scrollY
      });
    });
  }

  function isInDarkSection(scrollY) {
    const navBottom = scrollY + NAV_HEIGHT;
    const offset = 30; // Add buffer so transition happens after navbar fully exits hero

    for (let i = 0; i < darkSections.length; i++) {
      const section = darkSections[i];
      // Nav is on dark when navbar's bottom edge is still within the hero section (plus offset)
      if (navBottom >= section.top && navBottom <= (section.bottom + offset)) {
        return true;
      }
    }
    return false;
  }

  function updateNav() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const inDarkSection = isInDarkSection(scrollY);

    console.log('Nav update - scrollY:', scrollY, 'inDarkSection:', inDarkSection, 'nav classes:', nav.className);

    if (inDarkSection) {
      nav.classList.add('nav--on-dark');
      nav.classList.remove('nav--scrolled');
      console.log('Applied: nav--on-dark, final classes:', nav.className);
    } else {
      nav.classList.remove('nav--on-dark');
      nav.classList.add('nav--scrolled');
      console.log('Applied: nav--scrolled, final classes:', nav.className);
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  }

  function onResize() {
    calculateDarkSections();
    updateNav();
  }

  calculateDarkSections();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  window.addEventListener('load', function() {
    calculateDarkSections();
    updateNav();
  });

  updateNav();
})();
