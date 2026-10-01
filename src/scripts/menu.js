const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');

function isMobile() {
  return window.matchMedia('(width < 768px)').matches;
}

function openMenu() {
  menuButton?.setAttribute('aria-expanded', 'true');
  menuButton?.setAttribute('aria-label', 'Cerrar menú');
  nav?.removeAttribute('inert');
}

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menú');
  nav?.setAttribute('inert', '');
}

function toggleMenu() {
  const menuIsClosed = menuButton?.getAttribute('aria-expanded') === 'false';

  if (menuIsClosed) {
    openMenu();
  } else {
    closeMenu();
  }
}

function handleWindowResize() {
  if (isMobile()) {
    nav?.setAttribute('role', 'dialog');

    if (menuButton?.getAttribute('aria-expanded') === 'false') {
      nav?.setAttribute('inert', '');
    }
  } else {
    nav?.removeAttribute('inert');
    nav?.removeAttribute('role');
  }
}

window.addEventListener('DOMContentLoaded', handleWindowResize);
window.addEventListener('resize', handleWindowResize);

menuButton?.addEventListener('click', toggleMenu);
document.querySelectorAll('a').forEach((anchor) =>
  anchor.addEventListener('click', () => {
    if (isMobile()) closeMenu();
  }),
);
