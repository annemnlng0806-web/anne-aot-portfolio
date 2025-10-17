/* =========================================
   Attack on Titan Portfolio Scroll Animation
   Accessible and Lightweight
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const options = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, options);

  sections.forEach((section) => {
    section.classList.add("hidden");
    appearOnScroll.observe(section);
  });
});

/* =============== Accessibility Helper =============== */
document.addEventListener("keyup", (e) => {
  // Press Tab to show outline for keyboard users
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");
  }
});
