// =============================================
// I18N
// =============================================
let currentLang = localStorage.getItem('lang') || 'pt';
let translations = {};

async function loadTranslations(lang) {
  const res = await fetch(`${lang}.json`);
  translations = await res.json();
}

function getKey(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getKey(translations, el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getKey(translations, el.dataset.i18nHtml);
    if (val !== null) el.innerHTML = val;
  });
  const htmlEl = document.documentElement;
  htmlEl.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('lang-flag').textContent = currentLang === 'pt' ? '🇺🇸' : '🇧🇷';

  // Atualiza frases do typewriter
  phraseIdx = 0; charIdx = 0; deleting = false;
  clearTimeout(typewriteTimer);
  const ph = getKey(translations, 'hero.phrases');
  if (ph) currentPhrases = ph;
  typewrite();
}

async function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  await loadTranslations(lang);
  applyTranslations();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  setLang(currentLang === 'pt' ? 'en' : 'pt');
});

// =============================================
// TYPEWRITER
// =============================================
let currentPhrases = [
  'Senior Software Engineer',
  'Go & Java Developer',
  'Microservices Architect',
  'Backend Specialist',
  'Tech Lead',
];

let phraseIdx = 0, charIdx = 0, deleting = false;
let typewriteTimer = null;
const el = document.getElementById('typewriter');

function typewrite() {
  const phrase = currentPhrases[phraseIdx];
  if (!deleting) {
    el.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      typewriteTimer = setTimeout(typewrite, 2000);
      return;
    }
  } else {
    el.textContent = phrase.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % currentPhrases.length;
    }
  }
  typewriteTimer = setTimeout(typewrite, deleting ? 40 : 80);
}

document.getElementById('year').textContent = new Date().getFullYear();

// Inicializa i18n e depois inicia typewriter
loadTranslations(currentLang).then(() => {
  applyTranslations();
});


// =============================================
// NAVBAR SCROLL
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// =============================================
// HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// =============================================
// REVEAL ON SCROLL
// =============================================
const revealTargets = [
  '.section-header',
  '.sobre-text',
  '.sobre-timeline',
  '.skill-card',
  '.project-card',
  '.edu-card',
  '.certs-section',
  '.contact-text',
  '.contact-links',
  '.timeline-item',
];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(revealTargets.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

// =============================================
// SMOOTH ACTIVE NAV
// =============================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

// =============================================
// GLITCH EFFECT ON HERO TITLE (occasional)
// =============================================
const title = document.querySelector('.hero-title');
if (title) {
  setInterval(() => {
    title.style.filter = 'blur(1px) brightness(1.5)';
    setTimeout(() => { title.style.filter = 'none'; }, 60);
    setTimeout(() => {
      title.style.filter = 'blur(.5px)';
      setTimeout(() => { title.style.filter = 'none'; }, 40);
    }, 100);
  }, 5000);
}
