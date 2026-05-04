class AgentCarousel {
  constructor(element) {
    this.carousel = element;
    this.track = this.carousel.querySelector('[data-carousel-track]');
    this.slides = Array.from(this.carousel.querySelectorAll('[data-carousel-slide]'));
    this.prevButton = this.carousel.querySelector('[data-carousel-prev]');
    this.nextButton = this.carousel.querySelector('[data-carousel-next]');
    this.indicators = this.carousel.querySelector('[data-carousel-indicators]');

    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.autoplayDelay = 5000;

    this.init();
  }

  init() {
    this.createIndicators();

    this.prevButton?.addEventListener('click', () => this.prev());
    this.nextButton?.addEventListener('click', () => this.next());

    this.carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      }
    });

    this.setupTouchEvents();

    this.carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoplay());

    this.carousel.addEventListener('focusin', () => this.pauseAutoplay());
    this.carousel.addEventListener('focusout', () => this.startAutoplay());

    this.goTo(0);
    this.startAutoplay();
  }

  createIndicators() {
    if (!this.indicators) return;

    this.slides.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.setAttribute('type', 'button');
      indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
      indicator.classList.add('carousel-indicator');
      indicator.addEventListener('click', () => this.goTo(index));
      this.indicators.appendChild(indicator);
    });

    this.indicatorButtons = Array.from(this.indicators.querySelectorAll('button'));
  }

  goTo(index) {
    this.currentIndex = index;

    const slideWidth = this.slides[0].offsetWidth;
    const gap = 24;
    const offset = -(slideWidth + gap) * index;
    this.track.style.transform = `translateX(${offset}px)`;

    this.slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i !== index);
      slide.setAttribute('tabindex', i === index ? '0' : '-1');
    });

    this.indicatorButtons?.forEach((btn, i) => {
      btn.classList.toggle('carousel-indicator--active', i === index);
      btn.setAttribute('aria-current', i === index ? 'true' : 'false');
    });

    this.prevButton?.setAttribute('aria-disabled', index === 0);
    this.nextButton?.setAttribute('aria-disabled', index === this.slides.length - 1);
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goTo(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goTo(prevIndex);
  }

  setupTouchEvents() {
    let touchStartX = 0;
    let touchEndX = 0;

    this.carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    };

    this.handleSwipe = handleSwipe;
  }

  startAutoplay() {
    this.pauseAutoplay();
    this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
  }

  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(carousel => new AgentCarousel(carousel));
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
  document.documentElement.style.setProperty('--carousel-transition-duration', '0ms');
}
