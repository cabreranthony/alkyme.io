(function() {
  'use strict';

  // Only run accordion on mobile/tablet (<=640px)
  function initFooterAccordion() {
    const footerColumns = document.querySelectorAll('.site-footer-column');

    if (!footerColumns.length) return;

    footerColumns.forEach(column => {
      const heading = column.querySelector('.site-footer-heading');

      if (!heading) return;

      heading.addEventListener('click', () => {
        // Only toggle on mobile
        if (window.innerWidth <= 640) {
          column.classList.toggle('is-open');
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooterAccordion);
  } else {
    initFooterAccordion();
  }

  // Reset on resize (remove is-open class on desktop)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 640) {
        document.querySelectorAll('.site-footer-column.is-open').forEach(column => {
          column.classList.remove('is-open');
        });
      }
    }, 250);
  });
})();
