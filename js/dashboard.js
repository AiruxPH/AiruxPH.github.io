/* Compact mobile navigation. Desktop links stay visible. */
(function () {
  const header = document.querySelector('portfolio-header header');
  const sidebar = document.querySelector('portfolio-sidebar');
  if (!header || !sidebar) return;
  const existing = header.querySelector('.mobile-menu-toggle');
  if (existing) existing.hidden = true;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'dashboard-menu-toggle';
  button.setAttribute('aria-label','Toggle navigation');
  button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-controls','sidebar-nav');
  button.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  header.appendChild(button);
  function closeMenu() {
    sidebar.dataset.expanded = 'false';
    button.setAttribute('aria-expanded','false');
  }
  button.addEventListener('click', () => {
    const open = sidebar.dataset.expanded !== 'true';
    sidebar.dataset.expanded = String(open);
    button.setAttribute('aria-expanded',String(open));
  });
  sidebar.querySelectorAll('nav a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();
