const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNavigation = document.querySelector('.nav-list');
const shadow = document.querySelector('#shadow');
const menuItems = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

function toggleMenu(e) {
  if (e.target != e.currentTarget) {
    hamburgerMenu.classList.toggle('opened');
    mainNavigation.classList.toggle('opened');
    shadow.classList.toggle('shadow');
    body.classList.toggle('stop-scrolling');
  }
  e.stopPropagation();
}

function isMenuOpen(e) {
  if (e.target.classList.contains('shadow')) toggleMenu(e);
}

hamburgerMenu.addEventListener('click', toggleMenu);
document.addEventListener('click', isMenuOpen);
