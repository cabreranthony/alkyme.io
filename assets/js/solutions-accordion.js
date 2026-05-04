/**
 * Solutions Page - Capabilities Accordion
 * Handles expand/collapse and image switching
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const accordion = document.querySelector('.capabilities-accordion');
    if (!accordion) return;

    const items = accordion.querySelectorAll('.capability-item');
    const images = document.querySelectorAll('.capabilities-showcase__image');

    items.forEach(item => {
      item.addEventListener('click', function() {
        const capability = this.getAttribute('data-capability');
        const isActive = this.classList.contains('capability-item--active');

        // Close all items
        items.forEach(i => {
          i.classList.remove('capability-item--active');
          i.setAttribute('aria-expanded', 'false');
        });

        // Hide all images and pause videos
        images.forEach(img => {
          img.classList.remove('capabilities-showcase__image--active');
          if (img.tagName === 'VIDEO') {
            img.pause();
            img.currentTime = 0;
          }
        });

        // If clicking on already active item, just close it
        if (isActive) {
          return;
        }

        // Open clicked item
        this.classList.add('capability-item--active');
        this.setAttribute('aria-expanded', 'true');

        // Show corresponding image
        const targetImage = document.querySelector(`.capabilities-showcase__image[data-capability="${capability}"]`);
        if (targetImage) {
          targetImage.classList.add('capabilities-showcase__image--active');

          // If it's a video, play it
          if (targetImage.tagName === 'VIDEO') {
            targetImage.play().catch(err => {
              console.log('Video autoplay prevented:', err);
            });
          }
        }
      });
    });

    // Ensure first item starts as active and video plays if applicable
    const firstActiveImage = document.querySelector('.capabilities-showcase__image--active');
    if (firstActiveImage && firstActiveImage.tagName === 'VIDEO') {
      firstActiveImage.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }
})();
