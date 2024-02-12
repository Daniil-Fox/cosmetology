
import Swiper from "swiper";

import { register } from 'swiper/element/bundle';
// // register Swiper custom elements
register();
const compareSlider = new Swiper(".compare__slider", {
  slidesPerView: 'auto',
  spaceBetween: 50,
  navigation: {
    prevEl: '.compare__btn-prev',
    nextEl: '.compare__btn-next',
  },
  breakpoints: {
    320 : {
      spaceBetween: 15,
    },
    769 : {
      spaceBetween: 50
    }
  }
});
const quizSlider = new Swiper(".quiz__slider", {
  slidesPerView: 1,
  // loop: true,
  speed: 1000,
  delay: 300,
  pagination: {
    el: '.swiper-pagination',
    // clickable: true
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // navigation: {
  //   nextEl: '.quiz__label'
  // }
});

const quizImagesSlider = new Swiper(".quiz__images", {
  slidesPerView: 1,
  speed: 1000,
  delay: 300,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const casesSlider = new Swiper(".cases__slider", {
  slidesPerView: 1,
  navigation: {
    prevEl: '.cases__btn-prev',
    nextEl: '.cases__btn-next',
  }
});

const quizInputs = document.querySelectorAll('.quiz__label')
const quizPagination = document.querySelector('.quiz-pagination')
quizInputs.forEach(el => {
  const length = document.querySelector('.quiz__slider').querySelectorAll('.swiper-slide').length

  const title = document.querySelector('.quiz__title')
  const desc = document.querySelector('.quiz__desc')
  el.addEventListener('click', () => {
    if(quizImagesSlider.activeIndex != length - 2){
      setTimeout(() => {
        quizImagesSlider.slideNext()
        quizSlider.slideNext()
      }, 300)
    } else {
      quizImagesSlider.slideNext()
      quizSlider.slideNext()
      // quizPagination.style.display = 'none'
      title.textContent = 'Ваша персональная скидка 10%'
      desc.textContent = 'Отправьте заявку и мы свяжемся с вами в ближайшее время'
    }
  })
})

export {quizSlider, quizImagesSlider}
