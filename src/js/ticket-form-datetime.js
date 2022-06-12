const bookDate = document.querySelector('.input__date')
const bookTime = document.querySelector('.input__time')
const bookDateDisplay = document.querySelector('.tour__date')
const bookTimeDisplay = document.querySelector('.tour__time')

const bookDayTicketFormat = (dateString) => new Date(dateString).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
bookDate.min = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate()}`
bookDate.max = '2022-12-31'
bookDate.addEventListener('change', function() {
  bookDateDisplay.textContent = bookDayTicketFormat(this.value)
})

bookTime.addEventListener('change', function() {
  bookTimeDisplay.textContent = this.value
})

const inputDateTime = [document.querySelector('.input__date__wrapper'), document.querySelector('.input__time__wrapper')]

inputDateTime.forEach(field => field.addEventListener('input', function() {
    this.classList.add('changed')
  })
)