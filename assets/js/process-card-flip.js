(function() {
  'use strict';

  const items = document.querySelectorAll('.process-accordion-item');
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector('.process-accordion-item__trigger');
    const image = item.querySelector('.process-accordion-item__image');

    const toggleAccordion = () => {
      const isExpanded = item.classList.contains('is-expanded');

      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-expanded');
          otherItem.querySelector('.process-accordion-item__trigger').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('is-expanded');
      trigger.setAttribute('aria-expanded', !isExpanded);
    };

    trigger.addEventListener('click', toggleAccordion);

    if (image) {
      image.addEventListener('click', toggleAccordion);
    }
  });
})();
