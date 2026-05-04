/**
 * Home Page V2 Interactions
 * Scroll effects, video controls, topbar behavior
 */

(function () {
  'use strict';

  // --- Topbar Logo Swap on Scroll ---
  (function initTopbar() {
    var hero = document.getElementById('hero');
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

  // --- Hero Video Playback Rate ---
  (function initHeroVideo() {
    var video = document.getElementById('hero-video');
    if (!video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      video.removeAttribute('autoplay');
      return;
    }

    function slowPlayback() {
      video.playbackRate = 0.7;
    }

    slowPlayback();
    video.addEventListener('loadedmetadata', slowPlayback);
    video.addEventListener('playing', slowPlayback);
    video.addEventListener('ratechange', function () {
      if (video.playbackRate > 0.71) slowPlayback();
    });
  })();

  // --- Scroll to Content Button ---
  (function initScrollButton() {
    var scrollBtn = document.querySelector('.home-v2-hero__scroll');
    if (!scrollBtn) return;

    scrollBtn.addEventListener('click', function () {
      var firstSection = document.querySelector('#how-we-work');
      if (firstSection) {
        var offset = 80; // Account for fixed header
        var top = firstSection.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    });

    // Hide scroll button after scrolling past hero
    function checkScrollButton() {
      var hero = document.getElementById('hero');
      if (!hero) return;

      var heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom <= 100) {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.pointerEvents = 'none';
      } else {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'auto';
      }
    }

    window.addEventListener('scroll', checkScrollButton, { passive: true });
    checkScrollButton();
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

    // Animate process steps, venture cards, and sections
    var animatedElements = document.querySelectorAll(
      '.home-v2-process__step, .alk-section__header, .ai-v2-principle-card'
    );

    animatedElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  })();

  // --- Smooth Scroll for Anchor Links ---
  (function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#') return;

        var target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        var offset = 80; // Account for fixed header
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      });
    });
  })();

  // --- Parallax Effect on Hero ---
  (function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var hero = document.querySelector('.home-v2-hero');
    var heroContent = document.querySelector('.home-v2-hero__content');

    if (!hero || !heroContent) return;

    function applyParallax() {
      var scrolled = window.pageYOffset;
      var heroHeight = hero.offsetHeight;

      if (scrolled < heroHeight) {
        var parallaxAmount = scrolled * 0.5;
        heroContent.style.transform = 'translateY(' + parallaxAmount + 'px)';
        heroContent.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
      }
    }

    window.addEventListener('scroll', applyParallax, { passive: true });
    applyParallax();
  })();

  // --- Stats Counter Animation ---
  (function initStatsCounter() {
    var stats = document.querySelectorAll('.home-v2-hero__stat-value');
    if (!stats.length) return;

    var animated = false;

    function animateCounter(element) {
      var target = element.textContent.trim();
      var isNumeric = /^\d+\+?$/.test(target);

      if (!isNumeric) return; // Skip non-numeric stats

      var finalValue = parseInt(target, 10);
      var duration = 2000;
      var startTime = null;
      var hasPlus = target.includes('+');

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);

        var currentValue = Math.floor(finalValue * percentage);
        element.textContent = currentValue + (hasPlus ? '+' : '');

        if (percentage < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = target; // Ensure final value
        }
      }

      requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !animated) {
            animated = true;
            stats.forEach(function (stat) {
              animateCounter(stat);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    var statsContainer = document.querySelector('.home-v2-hero__stats');
    if (statsContainer) {
      observer.observe(statsContainer);
    }
  })();
})();
