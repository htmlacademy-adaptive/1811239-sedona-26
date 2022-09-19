const buttonClose = document.querySelector('.main-nav__close-button');
const buttonOpen = document.querySelector('.page-header__open-nav-button');
const menuElement = document.querySelector('.main-nav__list');

menuElement.hidden = true;
buttonClose.hidden = true;
buttonOpen.hidden = false;

buttonClose.addEventListener('click', () => {
  menuElement.hidden = true;
  buttonClose.hidden = true;
  buttonOpen.hidden = false;
})

buttonOpen.addEventListener('click', () => {
  menuElement.hidden = false;
  buttonOpen.hidden = true;
  buttonClose.hidden = false;
})
