(function() {
  'use strict';

  const processSteps = document.querySelectorAll('.process-step');
  if (!processSteps.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0.5
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('process-step--active');
      } else {
        entry.target.classList.remove('process-step--active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  processSteps.forEach((step) => {
    observer.observe(step);
  });
})();
