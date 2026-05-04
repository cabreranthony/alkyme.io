/**
 * Homepage Interactions
 * Smooth scrolling, hero video optimization, and micro-interactions
 */

(function() {
  'use strict';

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initHeroScroll();
    initSmoothScrolling();
    initVideoOptimization();
    initProcessStepAnimations();
  }

  /**
   * Hero Scroll Button
   */
  function initHeroScroll() {
    const scrollBtn = document.querySelector('.home-hero__scroll');
    if (!scrollBtn) return;

    scrollBtn.addEventListener('click', function() {
      const processSection = document.getElementById('how-we-work');
      if (processSection) {
        processSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /**
   * Smooth Scrolling for Anchor Links
   */
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if just "#" or if it's the brand link
        if (href === '#' || href === '#hero') {
          if (href === '#hero') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /**
   * Video Optimization
   * - Pause video when not in viewport to save resources
   * - Play when visible
   */
  function initVideoOptimization() {
    const video = document.getElementById('hero-video');
    if (!video) return;

    // Intersection Observer for video playback
    const options = {
      threshold: 0.5 // Play when 50% visible
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          video.play().catch(function() {
            // Autoplay may be blocked, that's ok
          });
        } else {
          video.pause();
        }
      });
    }, options);

    observer.observe(video);

    // Ensure video plays on load (if autoplay is allowed)
    video.play().catch(function() {
      // Autoplay blocked, that's ok
    });
  }

  /**
   * Process Step Animations
   * - Fade in steps as user scrolls
   * - Stagger animation delays
   */
  function initProcessStepAnimations() {
    const steps = document.querySelectorAll('.home-process__step');
    if (steps.length === 0) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Intersection Observer for fade-in animations
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          // Add animated class with stagger delay
          setTimeout(function() {
            entry.target.classList.add('is-visible');
          }, index * 100);

          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, options);

    steps.forEach(function(step) {
      // Set initial state
      step.style.opacity = '0';
      step.style.transform = 'translateY(20px)';
      step.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

      observer.observe(step);
    });

    // Add CSS class for visible state
    const style = document.createElement('style');
    style.textContent = `
      .home-process__step.is-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }

})();
