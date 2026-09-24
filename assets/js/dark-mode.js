// Respect a saved choice, otherwise follow the device preference.
(function () {
  const key = 'darkMode';
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const button = document.querySelector('.dark-mode-toggle');
  if (!button) return;

  function savedChoice() {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }
  function apply(dark) {
    document.body.classList.toggle('dark-mode', dark);
    document.body.classList.toggle('light-mode', !dark);
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('aria-pressed', String(dark));
    button.textContent = dark ? '☀' : '☾';
  }

  const choice = savedChoice();
  apply(choice === 'enabled' || (choice !== 'disabled' && media.matches));

  button.addEventListener('click', function () {
    const dark = !document.body.classList.contains('dark-mode');
    apply(dark);
    try { localStorage.setItem(key, dark ? 'enabled' : 'disabled'); } catch (_) {}
  });
  media.addEventListener('change', function (event) {
    if (!savedChoice()) apply(event.matches);
  });
})();
