const popupOpenbutton = document.querySelector('.button--review');
const body = document.querySelector('body');

let unlock = true;

if (popupOpenbutton.length > 0) {
  for (let index = 0; index < popupOpenbutton.length; index++) {
    const popupOpenbutton = popupOpenbutton[index];
    popupOpenbutton.addEventListener('click', function (e) {
      const popupName = popupOpenbutton.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefult();
    });
  }
}

const popupSuccess = document.querySelector('.popup__button--failure');
const popupCloseOkButton = document.querySelector('.popup__button');
popupCloseOkButton.addEventListener('click', () => {
  popupSuccess.hidden = false;
})
