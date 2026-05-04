/**
 * Careers V2 Interactions
 * Team carousel, role filtering, dialog, scroll animations
 */

(function () {
  'use strict';

  // --- Team Carousel ---
  (function initTeamCarousel() {
    var carousel = document.querySelector('[data-team-carousel]');
    if (!carousel) return;

    var track = carousel.querySelector('[data-team-track]');
    var slides = carousel.querySelectorAll('[data-team-slide]');
    var prevBtn = carousel.querySelector('[data-team-prev]');
    var nextBtn = carousel.querySelector('[data-team-next]');
    var dotsContainer = carousel.querySelector('[data-team-dots]');

    if (!track || !slides.length) return;

    var currentIndex = 0;
    var slidesPerView = window.innerWidth >= 768 ? 2 : 1;

    // Create dots
    for (var i = 0; i < Math.ceil(slides.length / slidesPerView); i++) {
      var dot = document.createElement('button');
      dot.className = 'careers-v2-team__dot';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.setAttribute('data-index', i);
      if (i === 0) dot.classList.add('is-active');
      dotsContainer.appendChild(dot);
    }

    var dots = dotsContainer.querySelectorAll('.careers-v2-team__dot');

    function updateCarousel() {
      var offset = -(currentIndex * 100);
      track.style.transform = 'translateX(' + offset + '%)';

      // Update dots
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === currentIndex);
      });

      // Update button states
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= Math.ceil(slides.length / slidesPerView) - 1;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (currentIndex < Math.ceil(slides.length / slidesPerView) - 1) {
          currentIndex++;
          updateCarousel();
        }
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        currentIndex = parseInt(this.getAttribute('data-index'), 10);
        updateCarousel();
      });
    });

    // Handle resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var newSlidesPerView = window.innerWidth >= 768 ? 2 : 1;
        if (newSlidesPerView !== slidesPerView) {
          slidesPerView = newSlidesPerView;
          currentIndex = 0;
          updateCarousel();
        }
      }, 250);
    });

    updateCarousel();
  })();

  // --- Role Filtering ---
  (function initRoleFilter() {
    var filterButtons = document.querySelectorAll('[data-filter]');
    var roleCards = document.querySelectorAll('[data-role-category]');

    if (!filterButtons.length || !roleCards.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        // Update button states
        filterButtons.forEach(function (b) {
          b.classList.remove('is-active');
        });
        this.classList.add('is-active');

        // Filter cards
        roleCards.forEach(function (card) {
          var category = card.getAttribute('data-role-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  })();

  // --- Talent Community Dialog ---
  (function initDialog() {
    var trigger = document.getElementById('talent-community-trigger');
    var dialog = document.getElementById('talent-dialog');
    var closeButtons = dialog ? dialog.querySelectorAll('[data-dialog-close]') : [];
    var form = document.getElementById('talent-form');
    var formWrap = form ? form.parentElement : null;
    var successEl = document.getElementById('talent-success');

    if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;

    function openDialog() {
      dialog.showModal();
      var firstInput = dialog.querySelector('input[type="text"]:not(.honeypot)');
      if (firstInput) firstInput.focus();
    }

    function closeDialog() {
      dialog.close();
      // Reset form state
      if (form) form.reset();
      if (formWrap) formWrap.style.display = '';
      if (successEl) successEl.hidden = true;
    }

    trigger.addEventListener('click', openDialog);

    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', closeDialog);
    });

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog();
    });

    dialog.addEventListener('close', closeDialog);

    // Handle form submission
    if (form) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();

        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Submitting...';
        }

        try {
          var formData = new FormData(form);
          var response = await fetch(form.action, {
            method: 'POST',
            body: formData,
          });

          var data = await response.json();

          if (response.ok && data.success) {
            // Show success state
            if (formWrap) formWrap.style.display = 'none';
            if (successEl) successEl.hidden = false;
          } else {
            alert(data.message || 'Something went wrong. Please try again or email careers@alkyme.io.');
          }
        } catch (error) {
          console.error('Form submission error:', error);
          alert('Network error. Please check your connection and try again.');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Join community';
          }
        }
      });
    }
  })();

  // --- Topbar Logo Swap on Scroll ---
  (function initTopbar() {
    var hero = document.getElementById('careers-hero');
    var topbar = document.querySelector('.topbar');
    var logo = document.getElementById('brand-logo');

    if (!hero || !topbar || !topbar.classList.contains('topbar--over-hero') || !logo) return;

    var logoCream = 'assets/logos/alkyme-logo-rt-hzt-cream.svg';
    var logoBlack = 'assets/logos/alkyme-logo-rt-hzt-black.svg';
    var FADE_START = 80;
    var FADE_COMPLETE = 200;

    function shouldSolidTopbar() {
      var scrollPos = window.pageYOffset;
      var pastHero = hero.getBoundingClientRect().bottom <= 0;
      if (pastHero) return 'solid';
      if (scrollPos < FADE_START) return 'transparent';
      if (scrollPos < FADE_COMPLETE) return 'fading';
      return 'solid';
    }

    function applyTopbar() {
      var state = shouldSolidTopbar();
      topbar.classList.remove('topbar--fading', 'topbar--solid');

      if (state === 'fading') {
        topbar.classList.add('topbar--fading');
      } else if (state === 'solid') {
        topbar.classList.add('topbar--solid');
      }

      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      var useDarkLogo = state === 'solid';
      logo.src = useDarkLogo ? (dark ? logoCream : logoBlack) : logoCream;
    }

    window.addEventListener('scroll', applyTopbar, { passive: true });
    window.addEventListener('resize', applyTopbar);
    document.addEventListener('alkyme-theme-applied', applyTopbar);
    applyTopbar();
  })();

  // --- Scroll-triggered Fade-in Animations ---
  (function initScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    var animatedElements = document.querySelectorAll(
      '[data-timeline-item], .careers-v2-impact__card, .careers-v2-traits__item'
    );

    animatedElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  })();
})();
