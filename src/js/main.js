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
const menuItems = menu.querySelectorAll('.menu__item')
burger.addEventListener('click', e => {
  e.stopPropagation()
  e.preventDefault()
  menu.classList.toggle('active')
  header.classList.toggle('active')
})
menuItems.forEach(btn => {
   btn.addEventListener('click', () => {
    menu.classList.remove('active')
  header.classList.remove('active')
   })
})

const playBtns = document.querySelectorAll('[data-video-play]')
playBtns.forEach(el => {
  const videoWrapper = el.closest('[data-video-wrap]')
  const video = videoWrapper.querySelector('[data-video]')

  el.addEventListener('click', e => {
    el.style.display = 'none'
    video.setAttribute('controls', null)
    video.play()
  })
})
