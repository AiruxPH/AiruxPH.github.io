/* Persisted, accessible theme toggle. No dependency on portfolio routing. */
(function () {
  const key = 'airux-portfolio-theme';
  let theme = 'glass';
  try { theme = ['arcade','cartoon'].includes(localStorage.getItem(key)) ? 'arcade' : 'glass'; } catch (_) {}
  function apply(next) {
    document.body.dataset.theme = next;
    const button = document.getElementById('theme-switcher');
    if (button) {
      button.textContent = next === 'arcade' ? '🎨 Arcade theme: On' : '🎨 Arcade theme: Off';
      button.setAttribute('aria-pressed', String(next === 'arcade'));
      button.setAttribute('aria-label', next === 'arcade' ? 'Switch to original glass theme' : 'Switch to arcade theme');
    }
    try { localStorage.setItem(key, next); } catch (_) {}
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'theme-switcher';
  button.className = 'theme-switcher';
  button.addEventListener('click', () => apply(document.body.dataset.theme === 'arcade' ? 'glass' : 'arcade'));
  document.body.appendChild(button);
  apply(theme);
})();
