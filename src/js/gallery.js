const pictureInnerContainer = document.querySelector('.picture-inner-container')
const gal =[]

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5)
}

for (let i = 1; i < 16; i++){
  let img = document.createElement('img')
  img.classList.add('gal-pic')
  img.src = `gallery/gallery${i}.jpg`
  img.alt = `gallery${i}`
  gal.push(img)
}

shuffle(gal)
gal.map(picture => pictureInnerContainer.append(picture))
