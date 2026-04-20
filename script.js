(function () {
  "use strict";

  var burger = document.querySelector(".burger");
  var mobileNav = document.querySelector(".nav-mobile");
  if (!burger || !mobileNav) return;

  function setOpen(open) {
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    mobileNav.classList.toggle("is-open", open);
    burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  }

  burger.addEventListener("click", function () {
    setOpen(!mobileNav.classList.contains("is-open"));
  });

  document.addEventListener("click", function (e) {
    if (!mobileNav.classList.contains("is-open")) return;
    var wrap = document.querySelector(".nav-mobile-wrap");
    if (wrap && !wrap.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
})();
