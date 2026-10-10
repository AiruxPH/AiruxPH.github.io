/* Persisted, accessible theme toggle. No dependency on portfolio routing. */
(function () {
  const key = 'airux-portfolio-theme';
  let theme = 'glass';
  try { theme = localStorage.getItem(key) === 'cartoon' ? 'cartoon' : 'glass'; } catch (_) {}
  function apply(next) {
    document.body.dataset.theme = next;
    const button = document.getElementById('theme-switcher');
    if (button) {
      button.textContent = next === 'cartoon' ? '🎨 Cartoon theme: On' : '🎨 Cartoon theme: Off';
      button.setAttribute('aria-pressed', String(next === 'cartoon'));
      button.setAttribute('aria-label', next === 'cartoon' ? 'Switch to original glass theme' : 'Switch to cartoon theme');
    }
    try { localStorage.setItem(key, next); } catch (_) {}
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'theme-switcher';
  button.className = 'theme-switcher';
  button.addEventListener('click', () => apply(document.body.dataset.theme === 'cartoon' ? 'glass' : 'cartoon'));
  document.body.appendChild(button);
  apply(theme);
})();
