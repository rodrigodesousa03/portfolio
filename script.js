// =============================================
// I18N
// =============================================
const i18nData = {
  pt: {
    nav: {
      home: "Início", about: "Sobre", skills: "Skills",
      projects: "Projetos Pessoais", education: "Formação", contact: "Contato", driver: "Piloto"
    },
    hero: {
      descHtml: 'Engenheiro de Software com <strong>+10 anos</strong> de experiência em desenvolvimento backend.<br/>Especializado em <span class="highlight">Go</span>, <span class="highlight">Java</span>, <span class="highlight">Microserviços</span> e <span class="highlight">APIs de alto desempenho</span>.',
      btnProjects: "Ver Projetos",
      phrases: ["Senior Software Engineer", "Go & Java Developer", "Microservices Architect", "Backend Specialist", "Tech Lead"]
    },
    sobre: {
      title: "Sobre Mim",
      p1Html: 'Sou um <span class="highlight">Engenheiro de Software Sênior</span> apaixonado por construir sistemas robustos, escaláveis e de alta performance. Com mais de uma década de experiência, já atuei em startups, fintechs e grandes empresas do mercado brasileiro.',
      p2Html: 'Atualmente trabalho como <strong>Engenheiro de Software Sênior no PicPay</strong>, um dos maiores super apps financeiros do Brasil. Anteriormente fui <strong>Líder Técnico na NAPP</strong> e <strong>Engenheiro de Software Sênior na Getnet Brasil</strong>.',
      p3Html: 'Minha stack principal gira em torno de <span class="highlight">Go</span> e <span class="highlight">Java</span>, com forte domínio em arquitetura de microserviços, mensageria, bancos relacionais e não relacionais, além de práticas modernas de DevOps e Cloud.',
      statYears: "Anos de Exp.", statProjects: "Projetos Online", statCompanies: "Empresas",
      tl1Date: "ago/2024 — atual", tl1Role: "Analista de Desenvolvimento de Sistemas Sênior",
      tl2Date: "nov/2022 — ago/2024", tl2Role: "Líder Técnico",
      tl3Date: "abr/2022 — nov/2022", tl3Role: "Engenheiro de Software Sênior",
      tl4Date: "jul/2021 — abr/2022", tl4Role: "Analista Desenvolvedor Sênior",
      tl5Date: "ago/2015 — jul/2021", tl5Role: "Java Developer (6 anos)"
    },
    skills: {
      title: "Stack & Skills", databases: "Banco de Dados", tools: "Ferramentas", architecture: "Arquitetura",
      obs: "Observabilidade (Dynatrace / Grafana)", automated: "Testes Automatizados / TDD",
      messaging: "Mensageria (SQS / SNS / Kafka)", microservicesTag: "Microserviços"
    },
    projetos: {
      title: "Projetos Pessoais",
      raceHubDesc: "Sistema completo para gerenciamento e exibição de resultados de corridas virtuais. Plataforma robusta com dados de pilotos, campeonatos e estatísticas detalhadas.",
      gripDesc: "Site oficial da equipe Grip Racing — lenda do automobilismo virtual brasileiro desde 2008. 311 pilotos, 169 títulos e 18 anos de história apresentados em uma plataforma moderna e dinâmica.",
      raceResultsDesc: "Ferramenta que transforma logs de simuladores de corrida em resultados formatados. Suporta iRacing, Assetto Corsa, Automobilista, rFactor e outros. 37 releases publicadas.",
      simuladores: "Simuladores", visitSite: "Visitar Site →", viewGithub: "Ver no GitHub →"
    },
    educacao: {
      title: "Formação",
      degree1: "Bacharel em Sistemas de Informação",
      edu1Desc: "Formação completa em tecnologia da informação, algoritmos, engenharia de software e banco de dados.",
      degree2: "Pós-Graduação: Desenvolvimento e Gestão de Projetos em Fábrica de Software",
      edu2Desc: "Especialização em gestão de projetos de software, metodologias ágeis e liderança de equipes técnicas.",
      certsTitle: "Certificações",
      cert1: "Python 2: Programando com a linguagem (16h)",
      cert2: "Testes: TDD com Java (12h)",
      cert3: "Java 8: Novos recursos da linguagem (12h)",
      cert4: "Go: Desenvolvendo uma API Rest",
      cert5: "Android: Avançando com listeners, menu e UI"
    },
    contato: {
      title: "Contato",
      h3Html: 'Vamos construir algo <span class="highlight">incrível</span> juntos?',
      p: "Estou sempre aberto a novos projetos, desafios técnicos e oportunidades de colaboração. Fique à vontade para entrar em contato!",
      emailLabel: "E-mail", linkedinLabel: "LinkedIn", githubLabel: "GitHub"
    }
  },
  en: {
    nav: {
      home: "Home", about: "About", skills: "Skills",
      projects: "Personal Projects", education: "Education", contact: "Contact", driver: "Driver"
    },
    hero: {
      descHtml: 'Software Engineer with <strong>10+ years</strong> of experience in backend development.<br/>Specialized in <span class="highlight">Go</span>, <span class="highlight">Java</span>, <span class="highlight">Microservices</span> and <span class="highlight">high-performance APIs</span>.',
      btnProjects: "View Projects",
      phrases: ["Senior Software Engineer", "Go & Java Developer", "Microservices Architect", "Backend Specialist", "Tech Lead"]
    },
    sobre: {
      title: "About Me",
      p1Html: 'I am a <span class="highlight">Senior Software Engineer</span> passionate about building robust, scalable, and high-performance systems. With over a decade of experience, I have worked at startups, fintechs, and large companies in the Brazilian market.',
      p2Html: 'I currently work as a <strong>Senior Software Engineer at PicPay</strong>, one of Brazil\'s largest financial super apps. Previously I was <strong>Tech Lead at NAPP</strong> and <strong>Senior Software Engineer at Getnet Brasil</strong>.',
      p3Html: 'My main stack revolves around <span class="highlight">Go</span> and <span class="highlight">Java</span>, with strong expertise in microservices architecture, messaging, relational and non-relational databases, and modern DevOps and Cloud practices.',
      statYears: "Years of Exp.", statProjects: "Online Projects", statCompanies: "Companies",
      tl1Date: "Aug/2024 — present", tl1Role: "Senior Systems Development Analyst",
      tl2Date: "Nov/2022 — Aug/2024", tl2Role: "Tech Lead",
      tl3Date: "Apr/2022 — Nov/2022", tl3Role: "Senior Software Engineer",
      tl4Date: "Jul/2021 — Apr/2022", tl4Role: "Senior Development Analyst",
      tl5Date: "Aug/2015 — Jul/2021", tl5Role: "Java Developer (6 years)"
    },
    skills: {
      title: "Stack & Skills", databases: "Databases", tools: "Tools", architecture: "Architecture",
      obs: "Observability (Dynatrace / Grafana)", automated: "Automated Testing / TDD",
      messaging: "Messaging (SQS / SNS / Kafka)", microservicesTag: "Microservices"
    },
    projetos: {
      title: "Personal Projects",
      raceHubDesc: "Complete system for managing and displaying virtual racing results. Robust platform with driver data, championships and detailed statistics.",
      gripDesc: "Official website of the Grip Racing team — a legend of Brazilian virtual motorsport since 2008. 311 drivers, 169 titles and 18 years of history presented on a modern and dynamic platform.",
      raceResultsDesc: "Tool that transforms racing simulator logs into formatted results. Supports iRacing, Assetto Corsa, Automobilista, rFactor and more. 37 published releases.",
      simuladores: "Simulators", visitSite: "Visit Site →", viewGithub: "View on GitHub →"
    },
    educacao: {
      title: "Education",
      degree1: "Bachelor's in Information Systems",
      edu1Desc: "Comprehensive education in information technology, algorithms, software engineering and databases.",
      degree2: "Post-Graduate: Software Factory Project Development and Management",
      edu2Desc: "Specialization in software project management, agile methodologies and technical team leadership.",
      certsTitle: "Certifications",
      cert1: "Python 2: Programming with the language (16h)",
      cert2: "Testing: TDD with Java (12h)",
      cert3: "Java 8: New language features (12h)",
      cert4: "Go: Building a REST API",
      cert5: "Android: Advancing with listeners, menu and UI"
    },
    contato: {
      title: "Contact",
      h3Html: 'Let\'s build something <span class="highlight">amazing</span> together?',
      p: "I'm always open to new projects, technical challenges and collaboration opportunities. Feel free to reach out!",
      emailLabel: "E-mail", linkedinLabel: "LinkedIn", githubLabel: "GitHub"
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';
let translations = i18nData[currentLang];

function getKey(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

function applyTranslations() {
  translations = i18nData[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getKey(translations, el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getKey(translations, el.dataset.i18nHtml);
    if (val !== null) el.innerHTML = val;
  });
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('lang-flag').innerHTML = currentLang === 'pt' ? '🇧🇷 <small>PT</small>' : '🇺🇸 <small>EN</small>';

  // Atualiza frases do typewriter
  phraseIdx = 0; charIdx = 0; deleting = false;
  clearTimeout(typewriteTimer);
  const ph = getKey(translations, 'hero.phrases');
  if (ph) currentPhrases = ph;
  typewrite();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
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

// Inicializa i18n
applyTranslations();


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
