/**
 * AI Guardrails Accordion
 * Handles expand/collapse of protection areas
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }

  function initAccordion() {
    const accordionItems = document.querySelectorAll('.ai-accordion__item');

    if (!accordionItems.length) return;

    accordionItems.forEach(item => {
      item.addEventListener('click', function() {
        const accordionId = this.getAttribute('data-accordion');
        const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);

        if (!content) return;

        // Check if currently active
        const isActive = this.classList.contains('active');

        // Close all accordion items
        accordionItems.forEach(btn => {
          btn.classList.remove('active');
        });

        document.querySelectorAll('.ai-accordion__content').forEach(c => {
          c.classList.remove('active');
        });

        // If wasn't active, open this one
        if (!isActive) {
          this.classList.add('active');
          content.classList.add('active');
        }
      });
    });
  }
})();
