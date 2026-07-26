(function () {
  var cfg = window.siteConfig || {};
  var basePath = cfg.basePath || '';
  var page = cfg.page || 'portfolio';
  var active = cfg.active || '';

  var lang = localStorage.getItem('lang') || 'pt';
  var flagHtml = lang === 'pt' ? '&#x1F1E7;&#x1F1F7; <small>PT</small>' : '&#x1F1FA;&#x1F1F8; <small>EN</small>';

  function li(href, key, text, isActive) {
    return '<li><a href="' + href + '" data-i18n="' + key + '"' + (isActive ? ' class="active"' : '') + '>' + text + '</a></li>';
  }

  var home = page === 'portfolio' ? '' : (basePath + 'index.html');

  var logoHtml = '<a href="' + home + '#hero" class="nav-logo" style="text-decoration:none">'
    + '<span class="logo-bracket">&lt;</span>'
    + '<span class="logo-text">RdS</span>'
    + '<span class="logo-bracket">/&gt;</span>'
    + '</a>';
  var linksHtml = [
    li(home + '#hero',      'nav.home',      'Início'),
    li(home + '#sobre',     'nav.about',     'Sobre'),
    li(home + '#skills',    'nav.skills',    'Skills'),
    li(home + '#projetos',  'nav.projects',  'Projetos Pessoais'),
    li(home + '#educacao',  'nav.education', 'Formação'),
    li(home + '#contato',   'nav.contact',   'Contato'),
    li(basePath + 'driver/index.html', 'nav.driver', 'Piloto', active === 'driver'),
  ].join('');

  var placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = '<nav class="navbar" id="navbar">'
    + '<div class="nav-container">'
    + logoHtml
    + '<ul class="nav-links" id="nav-links">' + linksHtml + '</ul>'
    + '<button class="lang-toggle" id="lang-toggle" aria-label="Toggle language" title="Switch language">'
    + '<span id="lang-flag">' + flagHtml + '</span>'
    + '</button>'
    + '<button class="hamburger" id="hamburger" aria-label="Menu">'
    + '<span></span><span></span><span></span>'
    + '</button>'
    + '</div>'
    + '</nav>';
})();
