import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const modalBtns = document.querySelectorAll('[data-modal-btn]')

const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal__window')
const closeBtn = document.querySelector('.modal__close')
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
