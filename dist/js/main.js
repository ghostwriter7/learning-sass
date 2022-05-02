const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-nav__item');
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
    menuItems.forEach(x => x.classList.toggle('open'));
}