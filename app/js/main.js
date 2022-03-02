var swiper = new Swiper(".mySwiper", {
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

const filterMix = document.querySelectorAll('.mix');
const filterBtn = document.querySelectorAll('.services__info-title');
document.querySelector('.services__info-filter').addEventListener('click', (event) => {

  if (event.target.tagName !== 'H3') return false;
  let filterClass = event.target.dataset['f'];

  filterMix.forEach(elem => {
    filterBtn.forEach(btn => {
      btn.classList.add('services__info-title--active');
    })
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass)) {
      filterBtn.forEach(btn => {
        btn.classList.remove('services__info-title--active');
      })
      elem.classList.add('hide');
    }
  });

});