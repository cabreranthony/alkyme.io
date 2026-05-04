(function () {
  "use strict";

  var input = document.getElementById("help-search-input");
  var articles = document.querySelectorAll("[data-help-item]");
  var catButtons = document.querySelectorAll("[data-help-cat-filter]");
  var statusEl = document.getElementById("help-search-status");
  var emptyEl = document.getElementById("help-empty");

  if (!input || !articles.length) return;

  var activeCat = "all";

  function norm(s) {
    return (s || "").toLowerCase().trim();
  }

  function tokens(s) {
    return norm(s)
      .split(/\s+/)
      .filter(function (t) {
        return t.length > 0;
      });
  }

  function articleMatchesSearch(el, toks) {
    if (!toks.length) return true;
    var hay = norm(el.getAttribute("data-help-search") || "") + " " + norm(el.textContent || "");
    return toks.every(function (t) {
      return hay.indexOf(t) !== -1;
    });
  }

  function articleMatchesCat(el) {
    if (activeCat === "all") return true;
    return (el.getAttribute("data-help-category") || "") === activeCat;
  }

  function apply() {
    var toks = tokens(input.value);
    var visible = 0;
    for (var i = 0; i < articles.length; i++) {
      var el = articles[i];
      var show = articleMatchesCat(el) && articleMatchesSearch(el, toks);
      el.hidden = !show;
      if (show) visible++;
    }
    if (statusEl) {
      statusEl.innerHTML =
        visible === articles.length
          ? "Showing <strong>" + visible + "</strong> articles."
          : "Showing <strong>" + visible + "</strong> of <strong>" + articles.length + "</strong> articles.";
    }
    if (emptyEl) {
      emptyEl.hidden = visible !== 0;
    }
  }

  function setCat(cat) {
    activeCat = cat;
    for (var j = 0; j < catButtons.length; j++) {
      var c = catButtons[j];
      var v = c.getAttribute("data-help-cat-filter") || "all";
      c.setAttribute("aria-pressed", v === cat ? "true" : "false");
    }
    apply();
  }

  input.addEventListener("input", function () {
    apply();
  });

  for (var k = 0; k < catButtons.length; k++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-help-cat-filter") || "all";
        setCat(cat);
      });
    })(catButtons[k]);
  }

  /* Deep link ?q= from bookmarks or subdomain entry */
  try {
    var params = new URLSearchParams(window.location.search);
    var q = params.get("q");
    if (q) {
      input.value = q;
    }
  } catch (e) {}

  setCat("all");
})();
