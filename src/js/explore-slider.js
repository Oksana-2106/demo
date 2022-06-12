const exploreSurface = document.querySelector('.explore-img')
const ruler = document.querySelector('.explore-ruler')
const imgBefore = document.querySelector('.before')
const imgAfter = document.querySelector('.after')

let distX = 0
let clicked = 0

ruler.addEventListener('mousedown', function(e) {
  e.preventDefault()
  clicked = 1

  const imgX = imgAfter.getClientRects()[0].x

  exploreSurface.addEventListener('mousemove', function slideMove(e) {

    if (clicked == 0) return false
    distX = e.pageX - imgX
  
    if (distX >= -10 && distX <= 710) {
      imgBefore.style.width = `${distX}px`
      ruler.style.left = `${distX - 10}px`
    } else {
      clicked = 0
    }

  })  

})

exploreSurface.addEventListener('mouseup', function() {
  clicked = 0
})