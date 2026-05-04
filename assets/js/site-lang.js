(function () {
  'use strict';

  const LOCALES = {
    en: { label: 'EN', name: 'English', path: '/' },
    es: { label: 'ES', name: 'Español', path: '/es/' },
    tl: { label: 'TL', name: 'Tagalog', path: '/tl/' }
  };

  const STORAGE_KEY = 'alkyme-locale';
  const DEFAULT_LOCALE = 'en';

  function getCurrentLocale() {
    const path = window.location.pathname;
    if (path.startsWith('/es/') || path === '/es') return 'es';
    if (path.startsWith('/tl/') || path === '/tl') return 'tl';
    return 'en';
  }

  function getStoredLocale() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LOCALE;
    } catch (e) {
      return DEFAULT_LOCALE;
    }
  }

  function setStoredLocale(locale) {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (e) {}
  }

  function updateTriggerLabel(locale) {
    const labels = document.querySelectorAll('[data-alkyme-lang-code]');
    labels.forEach(label => {
      label.textContent = LOCALES[locale]?.label || 'EN';
    });
  }

  function createDropdown(trigger) {
    const currentLocale = getCurrentLocale();
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.setAttribute('role', 'menu');
    dropdown.hidden = true;

    Object.keys(LOCALES).forEach(key => {
      const locale = LOCALES[key];
      const option = document.createElement('a');
      option.className = 'lang-dropdown__option';
      option.setAttribute('role', 'menuitem');
      option.href = locale.path + (window.location.pathname.replace(/^\/(es|tl)\//, ''));
      option.textContent = locale.name;

      if (key === currentLocale) {
        option.classList.add('lang-dropdown__option--active');
        option.setAttribute('aria-current', 'true');
      }

      option.addEventListener('click', (e) => {
        setStoredLocale(key);
      });

      dropdown.appendChild(option);
    });

    trigger.parentElement.style.position = 'relative';
    trigger.after(dropdown);
    return dropdown;
  }

  function toggleDropdown(trigger, dropdown) {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.alkyme-lang-trigger').forEach(btn => {
      if (btn !== trigger) {
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.querySelectorAll('.lang-dropdown').forEach(dd => {
      if (dd !== dropdown) {
        dd.hidden = true;
      }
    });

    trigger.setAttribute('aria-expanded', !isExpanded);
    dropdown.hidden = isExpanded;
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.lang-dropdown').forEach(dd => {
      dd.hidden = true;
    });
    document.querySelectorAll('.alkyme-lang-trigger').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  function init() {
    const currentLocale = getCurrentLocale();
    const storedLocale = getStoredLocale();

    if (currentLocale !== storedLocale) {
      setStoredLocale(currentLocale);
    }

    updateTriggerLabel(currentLocale);

    const triggers = document.querySelectorAll('.alkyme-lang-trigger');
    triggers.forEach(trigger => {
      const dropdown = createDropdown(trigger);

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(trigger, dropdown);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeAllDropdowns();
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.alkyme-lang-trigger') && !e.target.closest('.lang-dropdown')) {
        closeAllDropdowns();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
