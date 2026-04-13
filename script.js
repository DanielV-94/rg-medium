document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  setActivePageLink();
  setupMobileMenu();
  setupSmoothAnchors();
  setupFormHandler();
  setupScrollProgress();
  setupCounterAnimation();
  setupGsapAnimations();

  document.body.classList.add("ready");
});

function setFooterYear() {
  document.querySelectorAll("#year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

function setActivePageLink() {
  const current = document.body.dataset.page;
  if (!current) return;

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === current);
  });
}

function setupMobileMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.getElementById("mainNav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("show");
    button.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("href");
      if (!targetSelector || targetSelector === "#") return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupFormHandler() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(form).entries());
    formData.timestamp = new Date().toLocaleString("es-MX");

    if (
      !formData.nombre ||
      !formData.email ||
      !formData.telefono ||
      !formData.servicio ||
      !formData.descripcion
    ) {
      alert("Por favor completa los campos obligatorios antes de enviar.");
      return;
    }

    const submissions = JSON.parse(
      localStorage.getItem("rgmediumSubmissions") || "[]",
    );
    submissions.push(formData);
    localStorage.setItem("rgmediumSubmissions", JSON.stringify(submissions));

    alert(
      `¡Gracias, ${formData.nombre}!\n\nTu solicitud fue recibida.\nNos comunicaremos contigo muy pronto por ${formData.telefono}.`,
    );
    form.reset();
  });
}

function setupScrollProgress() {
  const progress = document.querySelector(".scroll-progress");
  if (!progress) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height <= 0 ? 0 : (scrollTop / height) * 100;
    progress.style.width = `${percent}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupCounterAnimation() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const runCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const duration = 1000;
    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      element.textContent = Math.floor(progress * target).toString();
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = String(target);
      }
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.45 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupGsapAnimations() {
  if (!window.gsap) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) return;

  if (window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  window.gsap.from(".hero-title", {
    y: 44,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  window.gsap.from(".hero-copy, .hero-actions", {
    y: 24,
    opacity: 0,
    duration: 0.65,
    ease: "power2.out",
    stagger: 0.1,
    delay: 0.2,
  });

  if (window.ScrollTrigger) {
    window.gsap.utils.toArray(".reveal").forEach((item) => {
      window.gsap.fromTo(
        item,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true,
          },
        },
      );
    });
  }
}
