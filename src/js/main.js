import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const modalBtns = document.querySelectorAll('[data-modal-btn]')

const modal = document.querySelector('[data-modal]')
const modalWindow = modal.querySelector('.modal__window')
const closeBtn = modal.querySelector('.modal__close')
modalBtns.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()

    modal.classList.add('active')
    document.body.style.overflow = 'hidden'

  })
})
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


const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const header = document.querySelector('header')
burger.addEventListener('click', e => {
  e.stopPropagation()
  e.preventDefault()
  const isActive = menu.classList.toggle('active')
  header.classList.toggle('active')

  isActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null
})
