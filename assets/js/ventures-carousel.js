(function() {
  'use strict';

  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.ventures-carousel__track');
  const slides = carousel.querySelectorAll('.ventures-carousel__slide');
  const dots = carousel.querySelectorAll('.ventures-carousel__dot');

  let currentSlide = 0;
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 5000;

  function goToSlide(index) {
    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    const offset = currentSlide * -100;
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('ventures-carousel__dot--active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('ventures-carousel__dot--active');
        dot.removeAttribute('aria-current');
      }
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideIndex = parseInt(e.currentTarget.getAttribute('data-slide'), 10);
      goToSlide(slideIndex);
      startAutoplay();
    });
  });

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToSlide(currentSlide - 1);
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      goToSlide(currentSlide + 1);
      startAutoplay();
    }
  });

  startAutoplay();

  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-label', 'Ventures showcase');
  carousel.setAttribute('tabindex', '0');
})();
