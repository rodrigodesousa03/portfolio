// =============================================
// TYPEWRITER
// =============================================
const phrases = [
  'Senior Software Engineer',
  'Go & Java Developer',
  'Microservices Architect',
  'Backend Specialist',
  'Tech Lead',
];

let phraseIdx = 0, charIdx = 0, deleting = false;
const el = document.getElementById('typewriter');

function typewrite() {
  const phrase = phrases[phraseIdx];
  if (!deleting) {
    el.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      setTimeout(typewrite, 2000);
      return;
    }
  } else {
    el.textContent = phrase.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typewrite, deleting ? 40 : 80);
}

typewrite();

document.getElementById('year').textContent = new Date().getFullYear();

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
