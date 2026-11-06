// Theme preference stays in this browser. The page also works without JavaScript.
const root = document.documentElement;
const button = document.querySelector('[data-theme-toggle]');
const system = window.matchMedia('(prefers-color-scheme: dark)');
const current = () => root.dataset.theme || (system.matches ? 'dark' : 'light');
const label = () => button.setAttribute('aria-label', `Switch to ${current() === 'dark' ? 'light' : 'dark'} mode`);
button.hidden = false;
button.addEventListener('click', () => {
  root.dataset.theme = current() === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('waymark-theme', root.dataset.theme); } catch {}
  label();
});
system.addEventListener('change', label);
label();
