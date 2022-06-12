const burgerBtn = document.querySelector('.burger')
const navBar = document.querySelector('.header__nav')
const slideBarWelcome = document.querySelector('.main-slider')
const toHide = document.querySelectorAll('.tohide')

// for tablet
const backgroundImg = document.querySelector('.welcome-section .wrapper')
const welcomeTablet = document.querySelector('.welcome__tablet')

burgerBtn.addEventListener('click', toggle)

function toggle() {
  navBar.classList.toggle('open')
  burgerBtn.classList.toggle('close')
  slideBarWelcome.classList.toggle('move')
  backgroundImg.classList.toggle('move_bg')
  toHide.forEach(item => item.classList.toggle('hide'))
  welcomeTablet.classList.toggle('show')
}