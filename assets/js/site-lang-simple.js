(function () {
  "use strict";

  var LOCALE_LABELS = { en: "EN", es: "ES", tl: "TL" };
  var LOCALE_NAMES = { en: "English", es: "Español", tl: "Tagalog" };
  var LOCALE_REGIONS = {
    en: "United States",
    es: "México / Internacional",
    tl: "Philippines"
  };
  var DEFAULT_LOCALE = "en";
  var STORAGE_KEY = "alkyme-locale";

  function getStoredLocale() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LOCALE;
    } catch (e) {
      return DEFAULT_LOCALE;
    }
  }

  function setStoredLocale(code) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {}
  }

  function getLocaleFromPath() {
    var path = window.location.pathname;
    if (path.indexOf("/es/") === 0 || path === "/es") return "es";
    if (path.indexOf("/tl/") === 0 || path === "/tl") return "tl";
    return "en";
  }

  function updateTriggerLabel(locale) {
    document.querySelectorAll("[data-alkyme-lang-code]").forEach(function (span) {
      span.textContent = LOCALE_LABELS[locale] || LOCALE_LABELS.en;
    });
  }

  function updateCurrentIndicator(locale) {
    document.querySelectorAll(".topbar__lang-option").forEach(function (option) {
      var isActive = option.getAttribute("data-lang") === locale;
      option.setAttribute("aria-current", isActive ? "true" : "false");

      if (isActive) {
        option.classList.add("topbar__lang-option--active");
      } else {
        option.classList.remove("topbar__lang-option--active");
      }
    });
  }

  function toggleDropdown(btn, dropdown) {
    var isExpanded = btn.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".topbar__lang-btn").forEach(function (b) {
      if (b !== btn) {
        b.setAttribute("aria-expanded", "false");
      }
    });
    document.querySelectorAll(".topbar__lang-dropdown").forEach(function (dd) {
      if (dd !== dropdown) {
        dd.hidden = true;
      }
    });

    btn.setAttribute("aria-expanded", !isExpanded);
    dropdown.hidden = isExpanded;

    if (!isExpanded) {
      var firstOption = dropdown.querySelector(".topbar__lang-option");
      if (firstOption) {
        setTimeout(function() { firstOption.focus(); }, 50);
      }
    }
  }

  function closeAllDropdowns() {
    document.querySelectorAll(".topbar__lang-dropdown").forEach(function (dd) {
      dd.hidden = true;
    });
    document.querySelectorAll(".topbar__lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function init() {
    var currentLocale = getLocaleFromPath();
    var storedLocale = getStoredLocale();

    if (currentLocale !== storedLocale) {
      setStoredLocale(currentLocale);
    }

    updateTriggerLabel(currentLocale);
    updateCurrentIndicator(currentLocale);

    document.querySelectorAll(".topbar__lang-btn").forEach(function (btn) {
      var dropdown = btn.nextElementSibling;
      if (!dropdown || !dropdown.classList.contains("topbar__lang-dropdown")) return;

      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleDropdown(btn, dropdown);
      });

      btn.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          var isExpanded = btn.getAttribute("aria-expanded") === "true";
          if (!isExpanded) {
            toggleDropdown(btn, dropdown);
          }
        }
      });
    });

    document.querySelectorAll(".topbar__lang-option").forEach(function (option) {
      option.addEventListener("click", function (e) {
        var lang = option.getAttribute("data-lang");
        if (lang) {
          setStoredLocale(lang);
        }
      });

      option.addEventListener("keydown", function (e) {
        var dropdown = option.closest(".topbar__lang-dropdown");
        var options = Array.from(dropdown.querySelectorAll(".topbar__lang-option"));
        var currentIndex = options.indexOf(option);

        if (e.key === "ArrowDown") {
          e.preventDefault();
          var nextIndex = (currentIndex + 1) % options.length;
          options[nextIndex].focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          var prevIndex = (currentIndex - 1 + options.length) % options.length;
          options[prevIndex].focus();
        } else if (e.key === "Escape") {
          e.preventDefault();
          closeAllDropdowns();
          var btn = dropdown.previousElementSibling;
          if (btn && btn.classList.contains("topbar__lang-btn")) {
            btn.focus();
          }
        }
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".topbar__lang")) {
        closeAllDropdowns();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeAllDropdowns();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
