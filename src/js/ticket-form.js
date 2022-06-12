const museumProposals = require('../assets/museumProposals')
class Ticket {
  constructor(typeKey, visitorBasic, visitorSenior) {
    this.typeKey = typeKey,
    this.visitorBasic = visitorBasic,
    this.visitorSenior = visitorSenior
  }
  getTicketTypes() {
    return museumProposals.map(item => item['type'])
  }
  getPriceList() {
    return museumProposals.filter(item => Object.keys(item['type'])[0] === this.typeKey)[0]['price']
  }
  getTotalPrice() {
    return this.getPriceList()['basic'] * this.visitorBasic + this.getPriceList()['senior'] * this.visitorSenior
  }
}
// !
let ticket = new Ticket('permanent', 3, 1)
// !

const ticketType = document.querySelectorAll('.radio-btn')
const ticketTypeLable = document.querySelectorAll('.type__info')
const ticketTypeLableForm = document.querySelectorAll('.calc__type')

const tourType = document.querySelector('.tour__type')

const changeTicketsNumber = document.querySelectorAll('.amount-btn')
const changeTicketsNumberForm = document.querySelectorAll('.type__control')

const ticketsAmount = document.querySelectorAll('.amount-input') // main page
const ticketsAmountInput = document.querySelectorAll('.type__input') // form - duplicate

const ticketsAmountBuy = document.querySelectorAll('.calc__count') // form - black square
const ticketsPrice = document.querySelectorAll('.calc__price') // form - summ price basic and senior
const ticketsPriceTotal = document.querySelector('.amount-total') // main page - total price
const ticketsPriceTotalForm = document.querySelector('.calc__res') // form - total price
let ticketSet = [ticket.visitorBasic, ticket.visitorSenior]
// !

function applyTypeInfo(param) {
  ticket.typeKey = param
  tourType.textContent = ticket.getTicketTypes().filter(item => item[param])[0][param]
  ticketTypeLable[0].textContent = `Basic 18+ (${Object.values(ticket.getPriceList())[0]} €)`
  ticketTypeLableForm[0].textContent = `Basic (${Object.values(ticket.getPriceList())[0]} €)`
  ticketTypeLable[1].textContent = `Senior 65+ (${Object.values(ticket.getPriceList())[1]} €)`
  ticketTypeLableForm[1].textContent = `Senior (${Object.values(ticket.getPriceList())[1]} €)`

  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])

  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()
  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`
}

applyTypeInfo(ticket.typeKey)

ticketType.forEach(el => el.addEventListener('click', function() {
  this.checked ? applyTypeInfo(this.value) : ''
}))

ticketTypeLable[0].textContent = `Basic 18+ (${Object.values(ticket.getPriceList())[0]} €)`
ticketTypeLableForm[0].textContent = `Basic (${Object.values(ticket.getPriceList())[0]} €)`
ticketTypeLable[1].textContent = `Senior 65+ (${Object.values(ticket.getPriceList())[1]} €)`
ticketTypeLableForm[1].textContent = `Senior (${Object.values(ticket.getPriceList())[1]} €)`
console.log(ticket.getPriceList());

ticketsPriceTotal.innerHTML = ticket.getTotalPrice()
ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`

ticketsAmount.forEach((el, i) => el.value = ticketSet[i])
ticketsAmountInput.forEach((el, i)=> el.value = ticketSet[i])
ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])

ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])

changeTicketsNumber.forEach(btn => btn.addEventListener('click', function() {
  this.textContent === '+' ?
  +this.parentElement.children[1].value++ :
  +this.parentElement.children[1].value--

  ticket.visitorBasic = ticketsAmount[0].value
  ticket.visitorSenior = ticketsAmount[1].value
  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]

  ticketsAmountInput.forEach((el, i)=> el.value = ticketSet[i])
  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])
  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])
  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()
  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`
}
))

changeTicketsNumberForm.forEach(btn => btn.addEventListener('click', function() {
  this.textContent === '+' ?
  +this.parentElement.children[1].value++ :
  +this.parentElement.children[1].value--

  ticket.visitorBasic = ticketsAmountInput[0].value
  ticket.visitorSenior = ticketsAmountInput[1].value
  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]

  ticketsAmount.forEach((el, i)=> el.value = ticketSet[i])
  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])
  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])
  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()
  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`
}
))

ticketsAmount.forEach((amount, i) => amount.addEventListener('input', function() {
  ticket.visitorBasic = ticketsAmount[0].value
  ticket.visitorSenior = ticketsAmount[1].value
  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]

  ticketsAmountInput.forEach((el, i)=> el.value = ticketSet[i])
  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])
  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])
  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()
  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`
}))

ticketsAmountInput.forEach((amount, i) => amount.addEventListener('input', function() {
  ticket.visitorBasic = ticketsAmountInput[0].value
  ticket.visitorSenior = ticketsAmountInput[1].value
  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]

  ticketsAmount.forEach((el, i)=> el.value = ticketSet[i])
  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])
  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])
  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()
  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`
}))