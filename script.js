// =========================================================================
// Alia Phan · personal portfolio
// Small interactive touches. The site still works if this file fails to load.
// =========================================================================

// ---------- 1. Mobile menu (the "Menu" button on smaller screens) ----------
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.nav__toggle');

function setMenu(open) {
  header.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
}

menuButton.addEventListener('click', () => {
  setMenu(!header.classList.contains('is-open'));
});

// Close the menu after tapping a link, or when pressing Escape
document.querySelectorAll('.nav__links a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header.classList.contains('is-open')) {
    setMenu(false);
    menuButton.focus();
  }
});

// ---------- 2. Underline the menu link for the section on screen ----------
// Sections without a menu link (like Competitions) clear the underline.
const navLinks = [...document.querySelectorAll('.nav__links a[href^="#"]')];
const sections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((section) => sectionObserver.observe(section));
}

// ---------- 3. Fade sections in as you scroll ----------
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// ---------- 4. "Back to top" and the name links always go to the top ----------
// Without this, a second click does nothing once the address already ends in #home.
document.querySelectorAll('a[href="#home"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});

// ---------- 5. Keep the copyright year current ----------
document.getElementById('year').textContent = new Date().getFullYear();
