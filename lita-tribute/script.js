// =================== HEART CANVAS (Intro) ===================

(function () {
  const canvas = document.getElementById("heartCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height, particles, animId;
  const COUNT = 400;
  const COLORS = ["#ec4899", "#a855f7", "#c084fc", "#f472b6", "#e879f9", "#fb7185"];

  function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }

  function heartX(t) { return 16 * Math.pow(Math.sin(t), 3); }
  function heartY(t) { return -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)); }

  function createParticles() {
    particles = [];
    const scale = Math.min(width, height) * 0.02;
    const cx = width / 2, cy = height / 2 - 20;

    for (let i = 0; i < COUNT; i++) {
      const t = (i / COUNT) * Math.PI * 2;
      const jitter = (Math.random() - 0.5) * scale * 0.5;
      particles.push({
        x: cx + (Math.random() - 0.5) * width * 1.2,
        y: cy + (Math.random() - 0.5) * height * 1.2,
        tx: cx + heartX(t) * scale + jitter,
        ty: cy + heartY(t) * scale + jitter,
        size: Math.random() * 3.5 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.015 + 0.005,
        progress: 0,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.025 + 0.008,
        wobbleRadius: Math.random() * 4 + 1.5,
      });
    }
  }

  function ease(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3) / 2; }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      if (p.progress < 1) p.progress = Math.min(1, p.progress + p.speed);
      const e = ease(p.progress);
      const bx = p.x + (p.tx - p.x) * e;
      const by = p.y + (p.ty - p.y) * e;
      p.wobble += p.wobbleSpeed;
      const drift = 1 - e * 0.8;
      const wx = Math.sin(p.wobble) * p.wobbleRadius * drift;
      const wy = Math.cos(p.wobble * 0.7) * p.wobbleRadius * drift;

      ctx.beginPath();
      ctx.arc(bx + wx, by + wy, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha * (0.5 + e * 0.5);
      ctx.fill();

      if (e > 0.7) {
        ctx.beginPath();
        ctx.arc(bx + wx, by + wy, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.06;
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(animate);
  }

  function init() { resize(); createParticles(); animate(); }
  window.addEventListener("resize", () => { cancelAnimationFrame(animId); init(); });
  init();
})();

// =================== FINAL CANVAS (Sparkles) ===================

(function () {
  const canvas = document.getElementById("finalCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, sparkles = [], animId;
  const COLORS = ["#ec4899", "#a855f7", "#f472b6", "#c084fc"];

  function resize() { w = canvas.width = canvas.parentElement.offsetWidth; h = canvas.height = canvas.parentElement.offsetHeight; }

  function createSparkles() {
    sparkles = [];
    for (let i = 0; i < 60; i++) {
      sparkles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        speed: Math.random() * 0.3 + 0.1,
        angle: Math.random() * Math.PI * 2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (const s of sparkles) {
      s.y -= s.speed;
      s.x += Math.sin(s.angle) * 0.3;
      s.angle += 0.01;
      s.pulse += s.pulseSpeed;
      if (s.y < -10) { s.y = h + 10; s.x = Math.random() * w; }

      const scale = 0.5 + Math.sin(s.pulse) * 0.5;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * scale, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = 0.4 + scale * 0.4;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * scale * 3, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = 0.06;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(animate);
  }

  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { resize(); createSparkles(); animate(); obs.disconnect(); }
  }, { threshold: 0.1 });
  obs.observe(canvas.parentElement);

  window.addEventListener("resize", () => { if (sparkles.length) { cancelAnimationFrame(animId); resize(); createSparkles(); animate(); } });
})();

// =================== TYPING EFFECT ===================

(function () {
  const el = document.getElementById("typingPre");
  if (!el) return;
  const text = "Obrigado por tudo";
  let i = 0;
  el.innerHTML = '<span class="cursor-blink"></span>';

  function type() {
    if (i <= text.length) {
      el.innerHTML = text.slice(0, i) + '<span class="cursor-blink"></span>';
      i++;
      setTimeout(type, 80 + Math.random() * 40);
    }
  }

  setTimeout(type, 800);
})();

// =================== FLOATING HEARTS ===================

(function () {
  const container = document.getElementById("floatingHearts");
  if (!container) return;
  const hearts = ["💜", "💗", "💖", "✨", "💕", "🤍"];

  function spawnHeart() {
    const span = document.createElement("span");
    span.className = "floating-heart";
    span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.bottom = "-30px";
    span.style.fontSize = (0.8 + Math.random() * 1.2) + "rem";
    const duration = 8 + Math.random() * 12;
    span.style.animationDuration = duration + "s";
    span.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(span);
    setTimeout(() => span.remove(), (duration + 2) * 1000);
  }

  setInterval(spawnHeart, 1500);
  for (let i = 0; i < 8; i++) setTimeout(spawnHeart, i * 400);
})();

// =================== COUNTER ANIMATION ===================

(function () {
  const counters = document.querySelectorAll(".stat-number-tribute[data-target]");
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const duration = target > 100 ? 2000 : 1200;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * ease).toLocaleString("pt-BR");
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString("pt-BR");
      }

      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
})();

// =================== SCROLL REVEAL ===================

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
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
  );

  const els = [
    ...document.querySelectorAll(".stat-card-tribute"),
    ...document.querySelectorAll(".message-card"),
    ...document.querySelectorAll(".identity-card"),
    ...document.querySelectorAll(".gallery-item"),
    ...document.querySelectorAll(".video-wrapper"),
    ...document.querySelectorAll(".tribute-tl-item"),
    ...document.querySelectorAll(".quote-card"),
    ...document.querySelectorAll(".section-title"),
    ...document.querySelectorAll(".section-subtitle"),
    ...document.querySelectorAll(".final-heart"),
    ...document.querySelectorAll(".final-title"),
    ...document.querySelectorAll(".final-subtitle"),
    ...document.querySelectorAll(".final-badge"),
    ...document.querySelectorAll(".final-signature"),
  ];

  els.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = `${(i % 8) * 0.07}s`;
    observer.observe(el);
  });
});

// =================== HEART CLICK BURST ===================

document.addEventListener("DOMContentLoaded", () => {
  const heart = document.getElementById("finalHeart");
  if (!heart) return;

  heart.addEventListener("click", () => {
    for (let i = 0; i < 12; i++) {
      const span = document.createElement("span");
      span.textContent = ["💜", "💗", "✨", "💖"][Math.floor(Math.random() * 4)];
      span.style.cssText = `
        position:fixed; font-size:${1 + Math.random()}rem; pointer-events:none; z-index:9999;
        left:${heart.getBoundingClientRect().left + heart.offsetWidth/2}px;
        top:${heart.getBoundingClientRect().top + heart.offsetHeight/2}px;
        transition: all ${0.6 + Math.random()*0.6}s ease-out;
      `;
      document.body.appendChild(span);
      requestAnimationFrame(() => {
        span.style.transform = `translate(${(Math.random()-0.5)*200}px, ${-80 - Math.random()*150}px) scale(${0.5+Math.random()})`;
        span.style.opacity = "0";
      });
      setTimeout(() => span.remove(), 1500);
    }
  });
});
