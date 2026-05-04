/**
 * What We Do - Tabs and Accordions
 * Handles tab switching and accordion interactions
 */

(function() {
  'use strict';

  // Tab switching functionality
  function initTabs() {
    const tabs = document.querySelectorAll('.what-tab');
    const panels = document.querySelectorAll('.what-tab-panel');

    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetPanel = tab.dataset.tab;

        // Remove active state from all tabs and panels
        tabs.forEach(t => {
          t.classList.remove('what-tab--active');
          t.setAttribute('aria-selected', 'false');
        });

        panels.forEach(p => {
          p.classList.remove('what-tab-panel--active');
        });

        // Add active state to clicked tab and corresponding panel
        tab.classList.add('what-tab--active');
        tab.setAttribute('aria-selected', 'true');

        const targetPanelElement = document.querySelector(`[data-panel="${targetPanel}"]`);
        if (targetPanelElement) {
          targetPanelElement.classList.add('what-tab-panel--active');
        }
      });

      // Keyboard navigation
      tab.addEventListener('keydown', (e) => {
        let newIndex;
        const currentIndex = Array.from(tabs).indexOf(tab);

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
          tabs[newIndex].focus();
          tabs[newIndex].click();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
          tabs[newIndex].focus();
          tabs[newIndex].click();
        } else if (e.key === 'Home') {
          e.preventDefault();
          tabs[0].focus();
          tabs[0].click();
        } else if (e.key === 'End') {
          e.preventDefault();
          tabs[tabs.length - 1].focus();
          tabs[tabs.length - 1].click();
        }
      });
    });
  }

  // Accordion functionality (native <details> elements handle open/close automatically)
  function initAccordions() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      // Add smooth animation on toggle
      item.addEventListener('toggle', () => {
        if (item.open) {
          // Animate the icon rotation
          const icon = item.querySelector('.accordion-header__icon');
          if (icon) {
            icon.style.transform = 'rotate(180deg)';
          }
        } else {
          const icon = item.querySelector('.accordion-header__icon');
          if (icon) {
            icon.style.transform = 'rotate(0deg)';
          }
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTabs();
      initAccordions();
    });
  } else {
    initTabs();
    initAccordions();
  }

})();
