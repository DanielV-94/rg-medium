const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.querySelector(".site-header");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener(
  "scroll",
  () => {
    siteHeader?.classList.toggle("is-scrolled", window.scrollY > 10);
  },
  { passive: true },
);

const revealNodes = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.18 },
);

revealNodes.forEach((node) => revealObserver.observe(node));

const counterNodes = document.querySelectorAll("[data-count]");

const animateCounter = (el) => {
  const target = Number(el.dataset.count || 0);
  const suffix = el.dataset.suffix ?? "";
  if (!target) return;

  const duration = 1100;
  const start = performance.now();

  const run = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * ease);
    el.textContent = value.toLocaleString("es-MX") + suffix;

    if (progress < 1) {
      requestAnimationFrame(run);
    }
  };

  requestAnimationFrame(run);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

counterNodes.forEach((node) => counterObserver.observe(node));

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;

    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
