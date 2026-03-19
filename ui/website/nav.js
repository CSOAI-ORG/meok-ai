// MEOK.AI — Set active nav link based on current page
(function() {
  var links = document.querySelectorAll('.nav-links a');
  var path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
