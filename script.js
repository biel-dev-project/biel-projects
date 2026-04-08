const translations = {
  pt: {
    nav_about: "Sobre",
    nav_experience: "Experiência",
    nav_projects: "Projetos",
    nav_certs: "Certificações",
    nav_contact: "Contato",
    hero_badge: "Disponível para novos desafios",
    hero_title: "Engenheiro de DevOps & Automação",
    hero_subtitle: "Integração de Sistemas de TI",
    hero_cta: "Entre em contato",
    hero_projects: "Ver projetos",
    about_label: "01 — Sobre mim",
    about_heading: 'Construo automações que <span class="highlight">eliminam trabalho manual</span> e conectam sistemas complexos.',
    about_p1: 'Engenheiro de DevOps & Automação com experiência em produção construindo sistemas reais dentro do ambiente corporativo do <strong>Nubank</strong> — incluindo como desenvolvedor principal do <strong>Operária</strong>, plataforma interna de automação em FastAPI integrando 7+ sistemas enterprise.',
    about_p2: "Especializado em Python, Shell scripting, integrações via REST API e engenharia assistida por IA utilizando Claude Code, Glean e Cursor. Domínio prático em automação via Jira API, gestão de dispositivos com JAMF Pro e design de workflows escaláveis.",
    stat_systems: "Sistemas Integrados",
    stat_workflows: "Workflows Automatizados",
    stat_contributors: "Contribuidores Ativos",
    stat_years: "Anos no Ecossistema",
    exp_label: "02 — Experiência",
    exp_title: "Trajetória Profissional",
    exp1_date: "Jan 2026 — Presente",
    exp1_role: "DevOps Engineer — Automação & Plataformas",
    exp1_location: "Híbrido · São Paulo, SP",
    exp1_li1: "Desenvolvimento de scripts de automação em Python e Shell para processos core de operações de TI",
    exp1_li2: "Integração bidirecional entre Jira e Snipe-IT via REST APIs — automação de manutenções, check-in/check-out de ativos e atualização em tempo real",
    exp1_li3: "Pipelines automatizados de relatórios consolidando dados do Jira com envio via Slack webhooks",
    exp1_li4: "Aplicação de ferramentas AI-first (Claude Code, Claude API, Glean, Cursor) para acelerar ciclos de desenvolvimento",
    exp1_li5: "Suporte a Zero Touch Deployment (ZTD) para dispositivos Apple corporativos com Jamf Pro",
    exp1_li6: "Atuação com Kubernetes no contexto de ferramentas internas e operações de plataforma",
    exp2_date: "Set 2024 — Jan 2026",
    exp2_role: "Analista de TI — Aprendiz",
    exp2_location: "Híbrido · São Paulo, SP",
    exp2_li1: 'Desenvolvedor principal do <strong>"Operária"</strong> — plataforma modular de automação (FastAPI + OAuth2) que se tornou ferramenta crítica com 5 contribuidores ativos',
    exp2_li2: "Integrações com 7+ sistemas enterprise: Jira, Snipe-IT, JAMF Pro, Okta, Slack, AWS SES e Rudder",
    exp2_li3: "Integração completa com Snipe-IT: check-in/check-out automatizado, transições de status, gestão de substatus — tudo disparado por eventos do Jira",
    exp2_li4: "Schedulers automatizados (5 min) para manutenção, validação de stock requests, rastreamento de replacement e geração de PDFs",
    exp2_li5: "Integração JAMF Pro / DEP para validação de prestage ZTD",
    exp2_li6: "Sistema de e-mails multilíngues (BR, MX, CO) com AWS SES para onboarding de novos colaboradores",
    exp2_li7: "Geração de declarações PDF criptografadas com entrega automática via Slack DM",
    exp3_date: "Nov 2022 — Ago 2024",
    exp3_role: "Especialista em Logística e Onboarding",
    exp3_location: "Presencial · São Paulo, SP",
    exp3_li1: "Planejamento e execução de logística de kits de onboarding de TI em escala para o Nubank em todo o Brasil",
    exp3_li2: "Gestão de controle de custos de frete, coordenação com fornecedores e operações de alto volume",
    exp3_li3: "Desenvolvimento de expertise em fluxos operacionais e gestão de estoque, criando base para transição para TI",
    proj_label: "03 — Projetos",
    proj_title: "Projetos & Conquistas",
    proj_badge: "Principal",
    proj1_desc: "Plataforma modular de automação (FastAPI + OAuth2) integrando Jira, Snipe-IT, JAMF Pro, Okta, Slack, AWS SES e Rudder. Substituiu horas de trabalho manual diário por automações agendadas rodando a cada 5 minutos em 10+ workflows distintos.",
    proj2_desc: "Integração completa via API criando automaticamente registros de manutenção, atualizando status e localizações no Snipe-IT com base em eventos e transições de status no Jira.",
    proj3_desc: "Pipeline multi-etapas validando solicitações de laptops — cruzando inventário Snipe-IT, enrolment DEP no JAMF Pro e vencimento de leasing, roteando ativos e criando tickets automaticamente.",
    proj4_desc: "Pipeline Python consultando o Jira e enviando reports estruturados e declarações PDF criptografadas via Slack DM — eliminando processos totalmente manuais.",
    skills_title: "Competências Técnicas",
    skill_cat1: "Linguagens & Scripting",
    skill_python: "Python (produção)",
    skill_clojure: "Clojure (funcional)",
    skill_cat3: "Automação & Integração",
    skill_integration: "Integração entre sistemas",
    skill_cat4: "Jira (Avançado)",
    skill_jira1: "Automação via API",
    skill_jira2: "Ciclo de vida de tickets",
    skill_jira4: "Relatórios",
    skill_cat5: "Plataformas & Ferramentas",
    skill_cat7: "Device Management",
    skill_cat8: "Boas Práticas",
    skill_docs: "Documentação técnica",
    certs_label: "05 — Certificações & Formação",
    certs_title: "Certificações",
    cert2_name: "Desenvolvimento OO com Python",
    cert2_desc: "10h · Fundação Bradesco",
    cert3_name: "Interface Gráfica com Python",
    cert3_desc: "10h · Fundação Bradesco",
    edu_title: "Formação",
    edu_name: "Curso Técnico em Tecnologia da Informação",
    lang_title: "Idiomas",
    lang_pt: "Português",
    lang_pt_level: "Nativo",
    lang_en: "Inglês",
    lang_en_level: "Básico (em desenvolvimento)",
    contact_label: "06 — Contato",
    contact_title: "Vamos conversar?",
    contact_desc: "Estou sempre aberto a novos desafios e oportunidades. Se quiser trocar uma ideia sobre automação, DevOps ou qualquer projeto interessante, me manda uma mensagem.",
    footer: "&lt;gsm /&gt; · Feito com código e café · 2026",
  },

  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_certs: "Certifications",
    nav_contact: "Contact",
    hero_badge: "Open to new challenges",
    hero_title: "DevOps & Automation Engineer",
    hero_subtitle: "IT Systems Integration",
    hero_cta: "Get in touch",
    hero_projects: "View projects",
    about_label: "01 — About me",
    about_heading: 'I build automations that <span class="highlight">eliminate manual work</span> and connect complex systems.',
    about_p1: 'DevOps & Automation Engineer with production experience building real systems within <strong>Nubank\'s</strong> corporate environment — including as lead developer of <strong>Operária</strong>, an internal automation platform built with FastAPI integrating 7+ enterprise systems.',
    about_p2: "Specialized in Python, Shell scripting, REST API integrations and AI-assisted engineering using Claude Code, Glean and Cursor. Deep hands-on expertise in Jira API automation, device management with JAMF Pro and scalable workflow design.",
    stat_systems: "Integrated Systems",
    stat_workflows: "Automated Workflows",
    stat_contributors: "Active Contributors",
    stat_years: "Years in Ecosystem",
    exp_label: "02 — Experience",
    exp_title: "Professional Journey",
    exp1_date: "Jan 2026 — Present",
    exp1_role: "DevOps Engineer — Automation & Platforms",
    exp1_location: "Hybrid · São Paulo, Brazil",
    exp1_li1: "Development of Python and Shell automation scripts for core IT operations processes",
    exp1_li2: "Bidirectional integration between Jira and Snipe-IT via REST APIs — automating maintenance, asset check-in/check-out and real-time status updates",
    exp1_li3: "Automated reporting pipelines consolidating Jira data with delivery via Slack webhooks",
    exp1_li4: "Application of AI-first tools (Claude Code, Claude API, Glean, Cursor) to accelerate development cycles",
    exp1_li5: "Support for Zero Touch Deployment (ZTD) for corporate Apple devices with Jamf Pro",
    exp1_li6: "Working with Kubernetes in the context of internal tools and platform operations",
    exp2_date: "Sep 2024 — Jan 2026",
    exp2_role: "IT Analyst — Apprentice",
    exp2_location: "Hybrid · São Paulo, Brazil",
    exp2_li1: 'Lead developer of <strong>"Operária"</strong> — modular automation platform (FastAPI + OAuth2) that became a critical tool with 5 active contributors',
    exp2_li2: "Integrations with 7+ enterprise systems: Jira, Snipe-IT, JAMF Pro, Okta, Slack, AWS SES and Rudder",
    exp2_li3: "Complete Snipe-IT integration: automated check-in/check-out, status transitions, substatus management — all triggered by Jira events",
    exp2_li4: "Automated schedulers (5 min) for maintenance, stock request validation, replacement tracking and PDF generation",
    exp2_li5: "JAMF Pro / DEP integration for ZTD prestage validation",
    exp2_li6: "Multilingual email system (BR, MX, CO) with AWS SES for new employee onboarding",
    exp2_li7: "Encrypted PDF declaration generation with automatic delivery via Slack DM",
    exp3_date: "Nov 2022 — Aug 2024",
    exp3_role: "Logistics & Onboarding Specialist",
    exp3_location: "On-site · São Paulo, Brazil",
    exp3_li1: "Planning and execution of IT onboarding kit logistics at scale for Nubank across Brazil",
    exp3_li2: "Shipping cost control management, vendor coordination and high-volume operations",
    exp3_li3: "Development of expertise in operational workflows and inventory management, building foundation for IT transition",
    proj_label: "03 — Projects",
    proj_title: "Projects & Achievements",
    proj_badge: "Main",
    proj1_desc: "Modular automation platform (FastAPI + OAuth2) integrating Jira, Snipe-IT, JAMF Pro, Okta, Slack, AWS SES and Rudder. Replaced hours of daily manual work with scheduled automations running every 5 minutes across 10+ distinct workflows.",
    proj2_desc: "Complete API integration automatically creating maintenance records, updating statuses and locations in Snipe-IT based on Jira events and status transitions.",
    proj3_desc: "Multi-stage pipeline validating laptop requests — cross-referencing Snipe-IT inventory, JAMF Pro DEP enrollment and lease expiration, routing assets and automatically creating Jira tickets.",
    proj4_desc: "Python pipeline querying Jira and sending structured reports and encrypted PDF declarations via Slack DM — eliminating fully manual processes.",
    skills_title: "Technical Skills",
    skill_cat1: "Languages & Scripting",
    skill_python: "Python (production)",
    skill_clojure: "Clojure (functional)",
    skill_cat3: "Automation & Integration",
    skill_integration: "Cross-system integration",
    skill_cat4: "Jira (Advanced)",
    skill_jira1: "API automation",
    skill_jira2: "Ticket lifecycle management",
    skill_jira4: "Reports",
    skill_cat5: "Platforms & Tools",
    skill_cat7: "Device Management",
    skill_cat8: "Best Practices",
    skill_docs: "Technical documentation",
    certs_label: "05 — Certifications & Education",
    certs_title: "Certifications",
    cert2_name: "OOP Development with Python",
    cert2_desc: "10h · Fundação Bradesco",
    cert3_name: "GUI Development with Python",
    cert3_desc: "10h · Fundação Bradesco",
    edu_title: "Education",
    edu_name: "Technical Degree in Information Technology",
    lang_title: "Languages",
    lang_pt: "Portuguese",
    lang_pt_level: "Native",
    lang_en: "English",
    lang_en_level: "Basic (in progress)",
    contact_label: "06 — Contact",
    contact_title: "Let's talk?",
    contact_desc: "I'm always open to new challenges and opportunities. If you'd like to chat about automation, DevOps or any interesting project, send me a message.",
    footer: "&lt;gsm /&gt; · Made with code and coffee · 2026",
  },

  es: {
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_projects: "Proyectos",
    nav_certs: "Certificaciones",
    nav_contact: "Contacto",
    hero_badge: "Disponible para nuevos desafíos",
    hero_title: "Ingeniero de DevOps & Automatización",
    hero_subtitle: "Integración de Sistemas de TI",
    hero_cta: "Contáctame",
    hero_projects: "Ver proyectos",
    about_label: "01 — Sobre mí",
    about_heading: 'Construyo automatizaciones que <span class="highlight">eliminan trabajo manual</span> y conectan sistemas complejos.',
    about_p1: 'Ingeniero de DevOps & Automatización con experiencia en producción construyendo sistemas reales dentro del entorno corporativo de <strong>Nubank</strong> — incluyendo como desarrollador principal de <strong>Operária</strong>, plataforma interna de automatización en FastAPI integrando 7+ sistemas enterprise.',
    about_p2: "Especializado en Python, Shell scripting, integraciones via REST API e ingeniería asistida por IA utilizando Claude Code, Glean y Cursor. Dominio práctico en automatización via Jira API, gestión de dispositivos con JAMF Pro y diseño de workflows escalables.",
    stat_systems: "Sistemas Integrados",
    stat_workflows: "Workflows Automatizados",
    stat_contributors: "Contribuidores Activos",
    stat_years: "Años en el Ecosistema",
    exp_label: "02 — Experiencia",
    exp_title: "Trayectoria Profesional",
    exp1_date: "Ene 2026 — Presente",
    exp1_role: "DevOps Engineer — Automatización & Plataformas",
    exp1_location: "Híbrido · São Paulo, Brasil",
    exp1_li1: "Desarrollo de scripts de automatización en Python y Shell para procesos core de operaciones de TI",
    exp1_li2: "Integración bidireccional entre Jira y Snipe-IT via REST APIs — automatización de mantenimientos, check-in/check-out de activos y actualización en tiempo real",
    exp1_li3: "Pipelines automatizados de reportes consolidando datos de Jira con envío via Slack webhooks",
    exp1_li4: "Aplicación de herramientas AI-first (Claude Code, Claude API, Glean, Cursor) para acelerar ciclos de desarrollo",
    exp1_li5: "Soporte a Zero Touch Deployment (ZTD) para dispositivos Apple corporativos con Jamf Pro",
    exp1_li6: "Actuación con Kubernetes en el contexto de herramientas internas y operaciones de plataforma",
    exp2_date: "Sep 2024 — Ene 2026",
    exp2_role: "Analista de TI — Aprendiz",
    exp2_location: "Híbrido · São Paulo, Brasil",
    exp2_li1: 'Desarrollador principal de <strong>"Operária"</strong> — plataforma modular de automatización (FastAPI + OAuth2) que se convirtió en herramienta crítica con 5 contribuidores activos',
    exp2_li2: "Integraciones con 7+ sistemas enterprise: Jira, Snipe-IT, JAMF Pro, Okta, Slack, AWS SES y Rudder",
    exp2_li3: "Integración completa con Snipe-IT: check-in/check-out automatizado, transiciones de status, gestión de substatus — todo disparado por eventos del Jira",
    exp2_li4: "Schedulers automatizados (5 min) para mantenimiento, validación de stock requests, rastreo de replacement y generación de PDFs",
    exp2_li5: "Integración JAMF Pro / DEP para validación de prestage ZTD",
    exp2_li6: "Sistema de e-mails multilingüe (BR, MX, CO) con AWS SES para onboarding de nuevos colaboradores",
    exp2_li7: "Generación de declaraciones PDF encriptadas con entrega automática via Slack DM",
    exp3_date: "Nov 2022 — Ago 2024",
    exp3_role: "Especialista en Logística y Onboarding",
    exp3_location: "Presencial · São Paulo, Brasil",
    exp3_li1: "Planificación y ejecución de logística de kits de onboarding de TI a escala para Nubank en todo Brasil",
    exp3_li2: "Gestión de control de costos de envío, coordinación con proveedores y operaciones de alto volumen",
    exp3_li3: "Desarrollo de expertise en flujos operacionales y gestión de inventario, creando base para transición a TI",
    proj_label: "03 — Proyectos",
    proj_title: "Proyectos & Logros",
    proj_badge: "Principal",
    proj1_desc: "Plataforma modular de automatización (FastAPI + OAuth2) integrando Jira, Snipe-IT, JAMF Pro, Okta, Slack, AWS SES y Rudder. Reemplazó horas de trabajo manual diario por automatizaciones programadas cada 5 minutos en 10+ workflows distintos.",
    proj2_desc: "Integración completa via API creando automáticamente registros de mantenimiento, actualizando status y ubicaciones en Snipe-IT basado en eventos y transiciones de status en Jira.",
    proj3_desc: "Pipeline multi-etapas validando solicitudes de laptops — cruzando inventario Snipe-IT, enrolment DEP en JAMF Pro y vencimiento de leasing, ruteando activos y creando tickets automáticamente.",
    proj4_desc: "Pipeline Python consultando Jira y enviando reportes estructurados y declaraciones PDF encriptadas via Slack DM — eliminando procesos totalmente manuales.",
    skills_title: "Competencias Técnicas",
    skill_cat1: "Lenguajes & Scripting",
    skill_python: "Python (producción)",
    skill_clojure: "Clojure (funcional)",
    skill_cat3: "Automatización & Integración",
    skill_integration: "Integración entre sistemas",
    skill_cat4: "Jira (Avanzado)",
    skill_jira1: "Automatización via API",
    skill_jira2: "Ciclo de vida de tickets",
    skill_jira4: "Reportes",
    skill_cat5: "Plataformas & Herramientas",
    skill_cat7: "Device Management",
    skill_cat8: "Buenas Prácticas",
    skill_docs: "Documentación técnica",
    certs_label: "05 — Certificaciones & Formación",
    certs_title: "Certificaciones",
    cert2_name: "Desarrollo OO con Python",
    cert2_desc: "10h · Fundação Bradesco",
    cert3_name: "Interfaz Gráfica con Python",
    cert3_desc: "10h · Fundação Bradesco",
    edu_title: "Formación",
    edu_name: "Curso Técnico en Tecnología de la Información",
    lang_title: "Idiomas",
    lang_pt: "Portugués",
    lang_pt_level: "Nativo",
    lang_en: "Inglés",
    lang_en_level: "Básico (en desarrollo)",
    contact_label: "06 — Contacto",
    contact_title: "¿Hablamos?",
    contact_desc: "Siempre estoy abierto a nuevos desafíos y oportunidades. Si quieres intercambiar ideas sobre automatización, DevOps o cualquier proyecto interesante, envíame un mensaje.",
    footer: "&lt;gsm /&gt; · Hecho con código y café · 2026",
  }
};

const langMeta = {
  pt: { flag: "\u{1F1E7}\u{1F1F7}", label: "PT" },
  en: { flag: "\u{1F1EC}\u{1F1E7}", label: "EN" },
  es: { flag: "\u{1F1EA}\u{1F1F8}", label: "ES" },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;

    if (el.hasAttribute("data-i18n-html") || dict[key].includes("<")) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

  const meta = langMeta[lang];
  document.getElementById("langFlag").textContent = meta.flag;
  document.getElementById("langLabel").textContent = meta.label;

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });

  localStorage.setItem("portfolio-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");

  // --- Language switcher ---
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle("open");
  });

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.addEventListener("click", () => {
      setLanguage(opt.dataset.lang);
      langDropdown.classList.remove("open");
    });
  });

  document.addEventListener("click", () => {
    langDropdown.classList.remove("open");
  });

  const savedLang = localStorage.getItem("portfolio-lang");
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  }

  // --- Navbar scroll ---
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  // --- Mobile menu ---
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });

  // --- Scroll reveal ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  const animateElements = [
    ...document.querySelectorAll(".timeline-item"),
    ...document.querySelectorAll(".project-card"),
    ...document.querySelectorAll(".skill-category"),
    ...document.querySelectorAll(".cert-card"),
    ...document.querySelectorAll(".stat-card"),
    ...document.querySelectorAll(".contato-card"),
    ...document.querySelectorAll(".lang-card"),
    ...document.querySelectorAll(".sobre-text"),
    ...document.querySelectorAll(".section-title"),
    ...document.querySelectorAll(".section-label"),
  ];

  animateElements.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = `${(i % 6) * 0.08}s`;
    observer.observe(el);
  });

  // --- Active nav highlight ---
  const sections = document.querySelectorAll(".section, .hero");
  const navLinksAll = document.querySelectorAll(".nav-links a:not(.nav-cta)");

  const highlightNav = () => {
    let current = "";
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150) current = section.id;
    });
    navLinksAll.forEach(link => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  };

  window.addEventListener("scroll", highlightNav);
  highlightNav();

  // --- Smooth scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
