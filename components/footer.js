(function () {
  var cfg = window.siteConfig || {};
  var basePath = cfg.basePath || '';

  var placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = '<footer class="footer">'
    + '<div class="container">'
    + '<div class="footer-content">'
    + '<a href="' + basePath + 'index.html" class="footer-logo" style="text-decoration:none">'
    + '<span class="logo-bracket">&lt;</span>'
    + '<span class="logo-text">RdS</span>'
    + '<span class="logo-bracket">/&gt;</span>'
    + '</a>'
    + '<p class="footer-copy">&copy; <span id="year"></span> Rodrigo de Sousa</p>'
    + '<p class="footer-location">&#x1F4CD; Barueri, S&atilde;o Paulo, Brasil</p>'
    + '</div>'
    + '</div>'
    + '</footer>';
})();
