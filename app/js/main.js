let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const contactBtn = document.querySelector('.header__contact-btn');
const contactBtnClose = document.querySelector('.close-btn');
const contactBlock = document.querySelector('.header__contact-block');

contactBtn.addEventListener('click', () => {
  contactBtn.classList.remove('header__contact-btn--active');
  contactBlock.classList.add('header__contact-block--active');
});

contactBtnClose.addEventListener('click', () => {
  contactBtn.classList.add('header__contact-btn--active');
  contactBlock.classList.remove('header__contact-block--active');
});

const langBtn = document.querySelector('.header__lang-btn');
const langBlock = document.querySelector('.header__lang-block');
const langChange = document.querySelectorAll('.header__lang-item');

langBtn.addEventListener('click', () => {
  langBtn.classList.remove('header__lang-btn--active');
  langBlock.classList.add('header__lang-block--active');
});

langChange.forEach((change) => {
  change.addEventListener('click', () => {
    langBtn.classList.add('header__lang-btn--active');
    langBlock.classList.remove('header__lang-block--active');
  })
});

$(document).ready(function () {
  let mixer = mixitup('.services__content');
});
