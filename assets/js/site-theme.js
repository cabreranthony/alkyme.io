(function () {
  'use strict';

  var STORAGE_KEY = 'alkyme-theme';
  var THEME_DARK = 'dark';
  var THEME_LIGHT = 'light';

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function effectiveTheme() {
    var s = getStored();
    if (s === THEME_DARK || s === THEME_LIGHT) return s;
    if (typeof window.matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches)
      return THEME_DARK;
    return THEME_LIGHT;
  }

  function applyTheme(mode) {
    var dark = mode === THEME_DARK;
    if (dark) {
      document.documentElement.setAttribute('data-theme', THEME_DARK);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var c = getComputedStyle(document.documentElement).getPropertyValue('--theme-color').trim();
      if (c) meta.setAttribute('content', c);
    }

    var buttons = document.querySelectorAll('.theme-toggle');
    buttons.forEach(function(btn) {
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });

    try {
      document.dispatchEvent(new CustomEvent('alkyme-theme-applied', { detail: { theme: mode } }));
    } catch (e) {}
  }

  function setPreference(mode) {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {}
    applyTheme(mode);
  }

  function onToggle() {
    setPreference(effectiveTheme() === THEME_DARK ? THEME_LIGHT : THEME_DARK);
  }

  function init() {
    applyTheme(effectiveTheme());

    var buttons = document.querySelectorAll('.theme-toggle');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', onToggle);
    });

    if (typeof window.matchMedia === 'function') {
      var mq = matchMedia('(prefers-color-scheme: dark)');
      var onSystem = function () {
        if (getStored() === null) applyTheme(effectiveTheme());
      };
      if (mq.addEventListener) mq.addEventListener('change', onSystem);
      else if (mq.addListener) mq.addListener(onSystem);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
