(function () {
  function init(root) {
    if (!root) return;
    var slides = root.querySelectorAll(".careers-benefits-showcase__slide");
    var prev = root.querySelector('[data-dir="prev"]');
    var next = root.querySelector('[data-dir="next"]');
    var live = root.querySelector("[data-benefits-live]");
    if (!slides.length || !prev || !next) return;

    var i = 0;
    var total = slides.length;

    function slideTitle(n) {
      var el = slides[n];
      var quote = el && el.querySelector(".careers-benefits-showcase__quote-text");
      return quote ? quote.textContent.trim() : "";
    }

    function show(idx) {
      i = (idx + total) % total;
      slides.forEach(function (el, j) {
        var on = j === i;
        el.classList.toggle("is-active", on);
        el.setAttribute("aria-hidden", on ? "false" : "true");
        el.toggleAttribute("inert", !on);
      });
      if (live) {
        live.textContent = slideTitle(i) || "";
      }
    }

    prev.addEventListener("click", function () {
      show(i - 1);
    });
    next.addEventListener("click", function () {
      show(i + 1);
    });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        show(i - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        show(i + 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        show(0);
      } else if (e.key === "End") {
        e.preventDefault();
        show(total - 1);
      }
    });

    show(0);
  }

  function boot() {
    document.querySelectorAll("[data-careers-benefits-carousel]").forEach(init);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
