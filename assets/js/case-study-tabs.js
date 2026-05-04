/**
 * Solutions Page - Case Study Tabs
 * Handles tab switching for case study previews
 */

(function() {
  'use strict';

  // Initialize tabs when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.case-study-tab');

    if (!tabs.length) {
      return;
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', handleTabClick);
    });
  }

  function handleTabClick(event) {
    const clickedTab = event.currentTarget;
    const tabId = clickedTab.dataset.tab;

    // Update active tab
    document.querySelectorAll('.case-study-tab').forEach(tab => {
      tab.classList.remove('case-study-tab--active');
    });
    clickedTab.classList.add('case-study-tab--active');

    // Update active panel
    document.querySelectorAll('.case-study-panel').forEach(panel => {
      panel.classList.remove('case-study-panel--active');
    });

    const activePanel = document.querySelector(`[data-panel="${tabId}"]`);
    if (activePanel) {
      activePanel.classList.add('case-study-panel--active');
    }
  }

})();
