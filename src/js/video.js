const rangeBarTiming = document.querySelector('.range-timing')
const rangeBarVolume = document.querySelector('.range-volume')


rangeBarTiming.addEventListener('input', function() {
  const valueTiming = this.value
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueTiming}%, #c4c4c4 ${valueTiming}%, #c4c4c4 100%)`
})

rangeBarVolume.addEventListener('input', function() {
  const valueVolume = this.value
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueVolume*2}%, #c4c4c4 ${valueVolume*2}%, #c4c4c4 100%)`
})

// ! Video Slider

const rightArrow = document.querySelector('.stroke.right')
const leftArrow = document.querySelector('.stroke.left')
// const slideNumber = document.querySelector('.left-slide')
const thumbItem = document.querySelectorAll('.slider__dot')
const mainSliderThumb = document.querySelector('.slider__thumb')
const content = document.querySelectorAll('.slider__list-item')

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
    this.classList.remove('active-video', direction)
  })
}

function removeHighlightThumb() {
  thumbItem[currentItem].classList.remove('active-dot')
}

function highlightThumb() {
  thumbItem[currentItem].classList.add('active-dot')
}

function showItemContent(direction) {
  content[currentItem].classList.add('next', direction)
  content[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction)
    this.classList.add('active-video')
    isUnabled = true
  })
}

function previousItem(n) {
  hideItemContent(direction[1])
  removeHighlightThumb()
  changeCurrentItem(currentItem - 1)
  showItemContent(direction[2])
  highlightThumb()
}

function nextItem(n) {
  hideItemContent(direction[0])
  removeHighlightThumb()
  changeCurrentItem(currentItem + 3)
  showItemContent(direction[3])
  changeCurrentItem(currentItem - 2)
  highlightThumb()
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

  thumbItem.forEach(item => /active-dot/.test(item.classList.value)?currentItem = Array.from(thumbItem).indexOf(item):'')

  thumbItem.forEach(item => item.classList.remove('active-dot'))
  e.target.classList.add('active-dot')
  indexOfSlide = Array.from(thumbItem).indexOf(e.target)

  
  if (currentItem < indexOfSlide) {
    nextThumbItem(currentItem)
  } else if (currentItem > indexOfSlide) {
    previousThumbItem(currentItem)
  }
  }

}))