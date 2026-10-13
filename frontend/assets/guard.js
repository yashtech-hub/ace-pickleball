/* Ace — route guard: protected pages require a signed-in user (demo auth) */
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  var protectedPages = ['dashboard.html','player.html','insights.html','report.html','playback.html','upload.html'];
  var user = null;
  try { user = JSON.parse(localStorage.getItem('ace_current_user') || 'null'); } catch (e) {}
  if (protectedPages.indexOf(page) !== -1 && !user) {
    location.replace('signin.html?next=' + encodeURIComponent(page));
  }
  // where to go after signing in/up: ?next=<page>.html, else dashboard
  window.aceNext = function () {
    var n = new URLSearchParams(location.search).get('next');
    return /^[a-z]+\.html$/.test(n || '') ? n : 'dashboard.html';
  };
})();
