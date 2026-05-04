/**
 * Mobile Navigation Menu
 * Handles hamburger menu toggle, overlay, and accessibility
 */
(function () {
  'use strict';

  // Configuration
  const ANIMATION_DURATION = 250; // Match CSS transition duration
  const ESCAPE_KEY = 'Escape';
  const FOCUSABLE_ELEMENTS = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  // State
  let isOpen = false;
  let lastFocusedElement = null;

  // Elements
  const hamburger = document.querySelector('.nav__hamburger');
  const overlay = document.querySelector('.nav__mobile-overlay');
  const mobileMenu = document.querySelector('.nav__mobile-menu');

  if (!hamburger || !overlay || !mobileMenu) {
    console.warn('Mobile navigation elements not found');
    return;
  }

  /**
   * Opens the mobile menu
   */
  function openMenu() {
    if (isOpen) return;

    // Store the currently focused element
    lastFocusedElement = document.activeElement;

    // Update state
    isOpen = true;

    // Update ARIA attributes
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');

    // Add active classes
    overlay.classList.add('is-active');
    mobileMenu.classList.add('is-active');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus first link in menu after animation
    setTimeout(() => {
      const firstLink = mobileMenu.querySelector('.nav__mobile-link');
      if (firstLink) {
        firstLink.focus();
      }
    }, ANIMATION_DURATION);

    // Trap focus within mobile menu
    trapFocus(mobileMenu);
  }

  /**
   * Closes the mobile menu
   */
  function closeMenu() {
    if (!isOpen) return;

    // Update state
    isOpen = false;

    // Update ARIA attributes
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');

    // Remove active classes
    overlay.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');

    // Re-enable body scroll
    document.body.style.overflow = '';

    // Return focus to hamburger button
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  /**
   * Toggles the mobile menu
   */
  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /**
   * Traps focus within the mobile menu for accessibility
   * @param {HTMLElement} element - The container to trap focus within
   */
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(FOCUSABLE_ELEMENTS);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    function handleTabKey(e) {
      if (!isOpen) return;

      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }

    document.addEventListener('keydown', handleTabKey);
  }

  /**
   * Handles escape key press to close menu
   * @param {KeyboardEvent} e - Keyboard event
   */
  function handleEscapeKey(e) {
    if (e.key === ESCAPE_KEY && isOpen) {
      closeMenu();
    }
  }

  /**
   * Handles overlay click to close menu
   * @param {MouseEvent} e - Mouse event
   */
  function handleOverlayClick(e) {
    if (e.target === overlay) {
      closeMenu();
    }
  }

  /**
   * Handles mobile link clicks
   * @param {MouseEvent} e - Mouse event
   */
  function handleLinkClick() {
    // Close menu when a link is clicked
    closeMenu();
  }

  /**
   * Handles window resize to close menu if viewport becomes desktop size
   */
  function handleResize() {
    if (window.innerWidth > 768 && isOpen) {
      closeMenu();
    }
  }

  /**
   * Initializes event listeners
   */
  function initEventListeners() {
    // Hamburger toggle
    hamburger.addEventListener('click', toggleMenu);

    // Overlay click to close
    overlay.addEventListener('click', handleOverlayClick);

    // Escape key to close
    document.addEventListener('keydown', handleEscapeKey);

    // Close menu when links are clicked
    const mobileLinks = mobileMenu.querySelectorAll('.nav__mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    });
  }

  /**
   * Sets active link based on current page
   */
  function setActiveLink() {
    const currentPath = window.location.pathname;
    const mobileLinks = mobileMenu.querySelectorAll('.nav__mobile-link');

    mobileLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentPath === linkPath) {
        link.classList.add('nav__mobile-link--active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /**
   * Initialize mobile navigation
   */
  function init() {
    initEventListeners();
    setActiveLink();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
