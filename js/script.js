// =========================
// GLORY SCRIPT V8 CLEAN
// UI / AB TEST / ANIMATION
// =========================

// -------- A/B TEST --------
const AB_TEST = {
  hero: Math.random() > 0.5 ? "A" : "B"
};

// -------- HERO SWITCH --------
window.addEventListener("DOMContentLoaded", () => {
  const heroA = document.getElementById("heroA");
  const heroB = document.getElementById("heroB");

  if (heroA && heroB) {
    if (AB_TEST.hero === "A") {
      heroA.style.display = "block";
    } else {
      heroB.style.display = "block";
    }
  }
});

// -------- SMOOTH SCROLL (optional future) --------
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.scrollBehavior = "smooth";
});
