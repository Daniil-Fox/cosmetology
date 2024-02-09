const items = document.querySelectorAll('[data-accord]')

items.forEach(el => {
  const button = el.querySelector('[data-accord-btn]')
  const content = el.querySelector('[data-accord-content]')
  console.log(content);
  button.addEventListener('click', e => {
    const isActive = el.classList.toggle('active')
    isActive ? content.style.maxHeight = content.scrollHeight + 'px' : content.style.maxHeight = null
  })
})
