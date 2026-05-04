/**
 * AI Capabilities Carousel
 * Card-in-card carousel with prev/next navigation
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }

  function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel__slide');
    const prevBtn = document.querySelector('.carousel__btn--prev');
    const nextBtn = document.querySelector('.carousel__btn--next');

    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentSlide = 0;

    // Show initial slide immediately
    if (slides[0]) {
      slides[0].classList.add('active');
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
      currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
      showSlide(currentSlide);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevBtn.click();
      } else if (e.key === 'ArrowRight') {
        nextBtn.click();
      }
    });

    function showSlide(index) {
      // Remove active class from all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });

      // Add active class to current slide
      slides[index].classList.add('active');

      // Update button states (optional - disable at boundaries)
      // Uncomment if you want buttons disabled at start/end
      // prevBtn.disabled = index === 0;
      // nextBtn.disabled = index === slides.length - 1;
    }
  }
})();
