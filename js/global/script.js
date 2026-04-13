import { hideLoadingScreen, showPage } from "./loading.js";

hideLoadingScreen();
showPage();

// ===== Scroll Reveal =====
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach((el) => observer.observe(el));
});
