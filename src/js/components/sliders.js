
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
quizInputs.forEach(el => {
  const length = document.querySelector('.quiz__slider').querySelectorAll('.swiper-slide').length


  el.addEventListener('click', () => {
    if(quizImagesSlider.activeIndex != length - 1){
      setTimeout(() => {
        quizImagesSlider.slideNext()
        quizSlider.slideNext()
      }, 300)
    } else {
      const modal = document.querySelector('[data-sec-modal]')

      const modalWindow = modal.querySelector('.modal__window')
      const closeBtn = modal.querySelector('.modal__close')
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
      closeBtn.addEventListener('click', e => {
        e.preventDefault()

        modal.classList.remove('active');
        document.body.style.overflow = null;
      })
      modal.addEventListener('click', e => {
        e.stopPropagation()
        modal.classList.remove('active');
        document.body.style.overflow = null;
      })
      modalWindow.addEventListener('click', e => {
        e.stopPropagation()
      })

    }
  })
})

export {quizSlider, quizImagesSlider}
