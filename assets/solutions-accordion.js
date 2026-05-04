/**
 * Solutions Page - Capabilities Accordion
 * Interactive accordion with image showcase sync
 * Full keyboard navigation support (Arrow keys, Home, End)
 */

(function() {
  'use strict';

  // Get all accordion items and showcase images
  const capabilityItems = document.querySelectorAll('.capability-item');
  const showcaseImages = document.querySelectorAll('.capabilities-showcase__image');

  if (!capabilityItems.length) return;

  let currentIndex = 0; // Track focused item for keyboard navigation

  /**
   * Activate a capability item
   * @param {HTMLElement} item - The capability item to activate
   * @param {boolean} focus - Whether to focus the element
   */
  function activateCapability(item, focus = false) {
    if (!item) return;

    const capability = item.dataset.capability;
    if (!capability) return;

    // Deactivate all items
    capabilityItems.forEach(btn => {
      btn.classList.remove('capability-item--active');
      btn.setAttribute('aria-expanded', 'false');
    });

    // Hide all images
    showcaseImages.forEach(img => {
      img.classList.remove('capabilities-showcase__image--active');
    });

    // Activate clicked/selected item
    item.classList.add('capability-item--active');
    item.setAttribute('aria-expanded', 'true');

    // Show corresponding image
    const targetImage = document.querySelector(
      `.capabilities-showcase__image[data-capability="${capability}"]`
    );
    if (targetImage) {
      targetImage.classList.add('capabilities-showcase__image--active');
    }

    // Update current index
    currentIndex = Array.from(capabilityItems).indexOf(item);

    // Focus if requested
    if (focus) {
      item.focus();
    }
  }

  /**
   * Handle click events
   */
  capabilityItems.forEach(item => {
    item.addEventListener('click', () => {
      activateCapability(item);
    });
  });

  /**
   * Handle keyboard navigation
   */
  capabilityItems.forEach((item, index) => {
    item.addEventListener('keydown', (e) => {
      let targetItem = null;

      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          // Move to next item (circular)
          targetItem = capabilityItems[(index + 1) % capabilityItems.length];
          break;

        case 'ArrowUp':
          e.preventDefault();
          // Move to previous item (circular)
          targetItem = capabilityItems[(index - 1 + capabilityItems.length) % capabilityItems.length];
          break;

        case 'Home':
          e.preventDefault();
          // Move to first item
          targetItem = capabilityItems[0];
          break;

        case 'End':
          e.preventDefault();
          // Move to last item
          targetItem = capabilityItems[capabilityItems.length - 1];
          break;

        case 'Enter':
        case ' ':
          e.preventDefault();
          // Activate current item
          activateCapability(item);
          break;
      }

      if (targetItem) {
        activateCapability(targetItem, true);
      }
    });
  });

  // Initialize: activate first item
  if (capabilityItems.length > 0) {
    activateCapability(capabilityItems[0]);
  }

})();
