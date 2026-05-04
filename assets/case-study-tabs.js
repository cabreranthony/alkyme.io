/**
 * Solutions Page - Case Study Tabs
 * Full ARIA tabs pattern implementation
 * Keyboard navigation: Arrow keys, Home, End, Tab
 */

(function() {
  'use strict';

  // Get tabs and panels
  const tabs = document.querySelectorAll('.case-study-tab');
  const panels = document.querySelectorAll('.case-study-panel');

  if (!tabs.length || !panels.length) return;

  let currentIndex = 0;

  /**
   * Activate a tab and its associated panel
   * @param {HTMLElement} tab - The tab to activate
   * @param {boolean} focus - Whether to focus the tab
   */
  function activateTab(tab, focus = false) {
    if (!tab) return;

    const targetPanel = tab.dataset.tab;
    if (!targetPanel) return;

    // Deactivate all tabs
    tabs.forEach(t => {
      t.classList.remove('case-study-tab--active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    // Hide all panels
    panels.forEach(panel => {
      panel.classList.remove('case-study-panel--active');
      panel.setAttribute('hidden', '');
    });

    // Activate selected tab
    tab.classList.add('case-study-tab--active');
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');

    // Show corresponding panel
    const panel = document.querySelector(
      `.case-study-panel[data-panel="${targetPanel}"]`
    );
    if (panel) {
      panel.classList.add('case-study-panel--active');
      panel.removeAttribute('hidden');
    }

    // Update current index
    currentIndex = Array.from(tabs).indexOf(tab);

    // Focus if requested
    if (focus) {
      tab.focus();
    }
  }

  /**
   * Handle click events
   */
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateTab(tab);
    });
  });

  /**
   * Handle keyboard navigation (ARIA tabs pattern)
   */
  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', (e) => {
      let targetTab = null;

      switch(e.key) {
        case 'ArrowRight':
          e.preventDefault();
          // Move to next tab (circular)
          targetTab = tabs[(index + 1) % tabs.length];
          break;

        case 'ArrowLeft':
          e.preventDefault();
          // Move to previous tab (circular)
          targetTab = tabs[(index - 1 + tabs.length) % tabs.length];
          break;

        case 'Home':
          e.preventDefault();
          // Move to first tab
          targetTab = tabs[0];
          break;

        case 'End':
          e.preventDefault();
          // Move to last tab
          targetTab = tabs[tabs.length - 1];
          break;
      }

      if (targetTab) {
        activateTab(targetTab, true);
      }
    });
  });

  // Initialize: activate first tab
  if (tabs.length > 0) {
    activateTab(tabs[0]);
  }

})();
