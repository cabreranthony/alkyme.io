(function() {
  'use strict';

  const galleries = document.querySelectorAll('.horizontal-scroll');
  if (!galleries.length) return;

  galleries.forEach(gallery => {
    const container = gallery.querySelector('.horizontal-scroll__container');
    const progressBar = gallery.querySelector('.horizontal-scroll__progress-bar');
    const prevBtn = gallery.querySelector('.horizontal-scroll__nav--prev .horizontal-scroll__nav-btn');
    const nextBtn = gallery.querySelector('.horizontal-scroll__nav--next .horizontal-scroll__nav-btn');

    if (!container) return;

    function updateProgress() {
      if (!progressBar) return;

      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrolled = container.scrollLeft;
      const progress = (scrolled / scrollWidth) * 100;

      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }

    function updateArrows() {
      if (!prevBtn || !nextBtn) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;

      prevBtn.disabled = scrollLeft <= 0;
      nextBtn.disabled = scrollLeft >= scrollWidth - 1;
    }

    function scrollNext() {
      const itemWidth = container.querySelector('.horizontal-scroll__item')?.offsetWidth || 0;
      const gap = parseInt(getComputedStyle(container).gap) || 0;
      container.scrollBy({ left: itemWidth + gap, behavior: 'smooth' });
    }

    function scrollPrev() {
      const itemWidth = container.querySelector('.horizontal-scroll__item')?.offsetWidth || 0;
      const gap = parseInt(getComputedStyle(container).gap) || 0;
      container.scrollBy({ left: -(itemWidth + gap), behavior: 'smooth' });
    }

    container.addEventListener('scroll', () => {
      updateProgress();
      updateArrows();
    });

    if (prevBtn) prevBtn.addEventListener('click', scrollPrev);
    if (nextBtn) nextBtn.addEventListener('click', scrollNext);

    container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollNext();
      }
    });

    if (!container.hasAttribute('tabindex')) {
      container.setAttribute('tabindex', '0');
    }

    updateProgress();
    updateArrows();
  });
})();
