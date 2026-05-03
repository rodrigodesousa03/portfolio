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

  var logoHtml, linksHtml;

  if (page === 'portfolio') {
    logoHtml = '<a href="#hero" class="nav-logo" style="text-decoration:none">'
      + '<span class="logo-bracket">&lt;</span>'
      + '<span class="logo-text">RdS</span>'
      + '<span class="logo-bracket">/&gt;</span>'
      + '</a>';
    linksHtml = [
      li('#hero',      'nav.home',      'Início'),
      li('#sobre',     'nav.about',     'Sobre'),
      li('#skills',    'nav.skills',    'Skills'),
      li('#projetos',  'nav.projects',  'Projetos Pessoais'),
      li('#educacao',  'nav.education', 'Formação'),
      li('#contato',   'nav.contact',   'Contato'),
      li(basePath + 'tools/index.html', 'nav.tools', 'Ferramentas', active === 'tools'),
    ].join('');
  } else {
    logoHtml = '<a href="' + basePath + 'index.html" class="nav-logo" style="text-decoration:none">'
      + '<span class="logo-bracket">&lt;</span>'
      + '<span class="logo-text">RdS</span>'
      + '<span class="logo-bracket">/&gt;</span>'
      + '</a>';
    linksHtml = [
      li(basePath + 'index.html',         'nav.portfolio', '← Portfolio'),
      li(basePath + 'tools/index.html',   'nav.tools',     'Ferramentas', active === 'tools'),
    ].join('');
  }

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
