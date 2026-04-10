// Heart particle animation on canvas
(function () {
  const canvas = document.getElementById("heartCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, particles, animationId;
  const PARTICLE_COUNT = 300;
  const COLORS = ["#ec4899", "#a855f7", "#c084fc", "#f472b6", "#e879f9"];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  // Parametric heart shape: t in [0, 2*PI]
  function heartX(t) {
    return 16 * Math.pow(Math.sin(t), 3);
  }

  function heartY(t) {
    return -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  }

  function createParticles() {
    particles = [];
    const scale = Math.min(width, height) * 0.018;
    const cx = width / 2;
    const cy = height / 2 - 20;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = (i / PARTICLE_COUNT) * Math.PI * 2;
      const tx = cx + heartX(t) * scale;
      const ty = cy + heartY(t) * scale;

      particles.push({
        x: cx + (Math.random() - 0.5) * width,
        y: cy + (Math.random() - 0.5) * height,
        tx: tx,
        ty: ty,
        size: Math.random() * 3 + 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.02 + 0.008,
        progress: 0,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleRadius: Math.random() * 3 + 1,
      });
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      if (p.progress < 1) {
        p.progress = Math.min(1, p.progress + p.speed);
      }

      const ease = easeInOutCubic(p.progress);
      const baseX = p.x + (p.tx - p.x) * ease;
      const baseY = p.y + (p.ty - p.y) * ease;

      p.wobble += p.wobbleSpeed;
      const wx = Math.sin(p.wobble) * p.wobbleRadius * (1 - ease * 0.7);
      const wy = Math.cos(p.wobble) * p.wobbleRadius * (1 - ease * 0.7);

      ctx.beginPath();
      ctx.arc(baseX + wx, baseY + wy, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha * (0.6 + ease * 0.4);
      ctx.fill();

      if (ease > 0.8) {
        ctx.beginPath();
        ctx.arc(baseX + wx, baseY + wy, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.08;
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(animate);
  }

  function init() {
    resize();
    createParticles();
    animate();
  }

  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationId);
    init();
  });

  init();
})();

// Scroll-reveal animations
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
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  const els = [
    ...document.querySelectorAll(".message-card"),
    ...document.querySelectorAll(".gallery-item"),
    ...document.querySelectorAll(".video-wrapper"),
    ...document.querySelectorAll(".tribute-tl-item"),
    ...document.querySelectorAll(".quote-card"),
    ...document.querySelectorAll(".section-title"),
    ...document.querySelectorAll(".section-subtitle"),
    ...document.querySelectorAll(".final-heart"),
    ...document.querySelectorAll(".final-title"),
    ...document.querySelectorAll(".final-subtitle"),
    ...document.querySelectorAll(".final-signature"),
  ];

  els.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = `${(i % 8) * 0.08}s`;
    observer.observe(el);
  });
});
