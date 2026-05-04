(function() {
  const statItems = document.querySelectorAll('.stat-item');
  if (!statItems.length) return;

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateValue(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    const frameInterval = 16;
    let lastUpdate = startTime;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      if (currentTime - lastUpdate >= frameInterval || progress === 1) {
        const current = Math.floor(start + (end - start) * easedProgress);
        element.textContent = current.toLocaleString() + suffix;
        lastUpdate = currentTime;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
        entry.target.classList.add('is-visible');

        const numberElement = entry.target.querySelector('.stat-item__number');
        if (numberElement) {
          const targetValue = parseInt(numberElement.getAttribute('data-count')) || 0;
          const suffix = numberElement.getAttribute('data-suffix') || '';

          setTimeout(() => {
            animateValue(numberElement, 0, targetValue, 1500, suffix);
          }, 100);
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  statItems.forEach(item => {
    observer.observe(item);
  });
})();
