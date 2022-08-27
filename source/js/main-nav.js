const buttonClose = document.querySelector('.main-nav__close-button');
const buttonOpen = document.querySelector('.page-header__open-nav-button');
const menuElement = document.querySelector('.main-nav__list');

buttonOpen.addEventListener('click', => {
  menuElement.classList.toggle('. main-nav__opened')
})
