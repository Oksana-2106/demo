const rippleBtn = document.querySelector('.book-btn')

rippleBtn.addEventListener('click', function (e) {
  const x = e.clientX
  const y = e.clientY

  const buttonLeft = Object.values(rippleBtn.getClientRects())[0].x
  const buttonTop = Object.values(rippleBtn.getClientRects())[0].y

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
})