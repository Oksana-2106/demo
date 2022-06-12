const overlay = document.querySelector('.overlay')
const buyForm = document.getElementById('buyForm')
const openFormBtn = document.querySelector('.tickets-submit')
const closeFormBtn = document.querySelector('.tickets__form-close')

const closeObjects = [closeFormBtn, overlay]

function removeAnimation() {
  buyForm.classList.remove('hide', 'show', 'active')
  overlay.classList.remove('active')
}

function showForm() {
  buyForm.removeEventListener('animationend', removeAnimation)
  overlay.classList.add('active')
  buyForm.classList.add('active', 'show')
}

function hideForm() {
  buyForm.classList.add('hide')
  buyForm.addEventListener('animationend', removeAnimation)  
}

openFormBtn.addEventListener('click', showForm)
closeObjects.forEach(obj => obj.addEventListener('click', hideForm))
