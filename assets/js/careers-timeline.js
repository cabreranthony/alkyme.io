/**
 * Timeline Scroll Reveal & Progress Line Animation
 * Adds visible class to timeline items and animates progress line as they scroll into view
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimeline);
  } else {
    initTimeline();
  }

  function initTimeline() {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (!timelineItems.length || !timeline) return;

    let highestVisibleIndex = -1;

    // IntersectionObserver for scroll reveal
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -120px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-item--visible');

          // Track highest visible item
          const index = Array.from(timelineItems).indexOf(entry.target);
          if (index > highestVisibleIndex) {
            highestVisibleIndex = index;
            updateProgressLine();
          }
        }
      });
    }, observerOptions);

    // Observe all timeline items
    timelineItems.forEach(item => {
      observer.observe(item);
    });

    // Update progress line based on scroll
    function updateProgressLine() {
      if (highestVisibleIndex === -1) return;

      const totalItems = timelineItems.length;
      const progress = ((highestVisibleIndex + 1) / totalItems) * 100;

      // Smoothly animate the progress line
      timeline.style.setProperty('--timeline-progress', `${progress}%`);

      // Update the ::after pseudo-element height via inline style
      requestAnimationFrame(() => {
        const style = document.createElement('style');
        style.textContent = `.timeline::after { height: ${progress}% !important; }`;

        // Remove old style if exists
        const oldStyle = document.querySelector('#timeline-progress-style');
        if (oldStyle) oldStyle.remove();

        style.id = 'timeline-progress-style';
        document.head.appendChild(style);
      });
    }

    // Also update on scroll for smoother animation
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgressLine();
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();
