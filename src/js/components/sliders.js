import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
new Swiper(".compare__slider", {
  slidesPerView: 'auto',
  spaceBetween: 50,
  navigation: {
    prevEl: '.compare__btn-prev',
    nextEl: '.compare__btn-next',
  }
});
new Swiper(".quiz__slider", {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.quiz__label'
  }
});


new Swiper(".cases__slider", {
  slidesPerView: 1,
  navigation: {
    prevEl: '.cases__btn-prev',
    nextEl: '.cases__btn-next',
  }
});
