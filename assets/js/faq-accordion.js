(function () {
  document.querySelectorAll("[data-faq-trigger]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("aria-controls");
      var panel = id ? document.getElementById(id) : null;
      if (!panel) return;
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var next = !expanded;
      btn.setAttribute("aria-expanded", next ? "true" : "false");
      panel.hidden = !next;
      btn.closest(".faq-item").classList.toggle("is-open", next);
    });
  });
})();
