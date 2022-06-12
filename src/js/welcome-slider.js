const rightArrow = document.querySelector('.main-slider__control.right')
const leftArrow = document.querySelector('.main-slider__control.left')
const slideNumber = document.querySelector('.left-slide')
const thumbItem = document.querySelectorAll('.main-slider__thumb-item')
const mainSliderThumb = document.querySelector('.main-slider__thumb')
const content = document.querySelectorAll('.section__img')
let indexOfSlide = 0
let currentItem = 0

const direction = ['to-left', 'to-right', 'from-left', 'from-right']

let isUnabled = true

function changeCurrentItem(n) {
  currentItem = (n + content.length) % content.length
}

function hideItemContent(direction) {
  isUnabled = false
  content[currentItem].classList.add(direction)
  content[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction)
  })
}

function removeHighlightThumb() {
  thumbItem[currentItem].classList.remove('active-thumb')
}

function highlightThumb() {
  thumbItem[currentItem].classList.add('active-thumb')
}

function showItemContent(direction) {
  content[currentItem].classList.add('next', direction)
  content[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction)
    this.classList.add('active')
    isUnabled = true
  })
}

function previousItem(n) {
  hideItemContent(direction[1])
  removeHighlightThumb()
  changeCurrentItem(currentItem - 1)
  showItemContent(direction[2])
  highlightThumb()
  slideNumber.innerText = `0${currentItem + 1}`
}

function nextItem(n) {
  hideItemContent(direction[0])
  removeHighlightThumb()
  changeCurrentItem(currentItem + 1)
  showItemContent(direction[3])
  highlightThumb()
  slideNumber.innerText = `0${currentItem + 1}`
}

function previousThumbItem(n) {
  hideItemContent(direction[1])
  currentItem = indexOfSlide
  showItemContent(direction[2])
}

function nextThumbItem(n) {
  hideItemContent(direction[0])
  currentItem = indexOfSlide
  showItemContent(direction[3])
}

leftArrow.addEventListener('click', function() {
  if (isUnabled) {
    previousItem(currentItem)
  }
})

rightArrow.addEventListener('click', function() {
  if (isUnabled) {
     nextItem(currentItem)
    }
})

thumbItem.forEach(element => element.addEventListener('click', (e) => {
  if (isUnabled) {

  thumbItem.forEach(item => /active-thumb/.test(item.classList.value)?currentItem = Array.from(thumbItem).indexOf(item):'')

  thumbItem.forEach(item => item.classList.remove('active-thumb'))
  e.target.classList.add('active-thumb')
  indexOfSlide = Array.from(thumbItem).indexOf(e.target)

  slideNumber.innerText = `0${indexOfSlide + 1}`
  
  if (currentItem < indexOfSlide) {
    nextThumbItem(currentItem)
  } else if (currentItem > indexOfSlide) {
    previousThumbItem(currentItem)
  }
  }

}))

// ! Closure
// ! Scrolling the slider with mouse swipes
const swipeDetect = (el) => {

  let surface = el
  let startX = 0
  let startY = 0
  let distX = 0
  let distY = 0
  let startTime = 0
  let elapsedTime = 0
  let threshold = 150
  let restraint = 100
  let allowedTime = 300

  surface.addEventListener('mousedown', function(e) {
    startX = e.pageX
    startY = e.pageY
    startTime = new Date().getTime()
    e.preventDefault()
  })

  surface.addEventListener('mouseup', function(e) {
    distX = e.pageX - startX
    distY = e.pageY - startY
    elapsedTime = new Date().getTime() - startTime

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX < 0) {
          isUnabled?nextItem(currentItem):null
        } else {
          isUnabled?previousItem(currentItem):null
        }
      }      
    }

    e.preventDefault()
  })
}

let el = document.querySelector('.welcome-section__img')
swipeDetect(el)
