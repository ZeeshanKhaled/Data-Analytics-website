(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("nav-list");

  if (!toggle || !navList) return;

  toggle.addEventListener("click", function () {
    const isOpen = navList.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
})();
