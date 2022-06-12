/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/main.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./sass/main.scss\");\n/* harmony import */ var _js_burger_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/burger-menu.js */ \"./js/burger-menu.js\");\n/* harmony import */ var _js_burger_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_burger_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/video.js */ \"./js/video.js\");\n/* harmony import */ var _js_video_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_video_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_gallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/gallery.js */ \"./js/gallery.js\");\n/* harmony import */ var _js_gallery_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_gallery_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_ticket_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/ticket-form.js */ \"./js/ticket-form.js\");\n/* harmony import */ var _js_ticket_form_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_ticket_form_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_ticket_form_open_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/ticket-form-open.js */ \"./js/ticket-form-open.js\");\n/* harmony import */ var _js_ticket_form_open_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_ticket_form_open_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_ticket_form_datetime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/ticket-form-datetime.js */ \"./js/ticket-form-datetime.js\");\n/* harmony import */ var _js_ticket_form_datetime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_ticket_form_datetime_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_ripple_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/ripple.js */ \"./js/ripple.js\");\n/* harmony import */ var _js_ripple_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_ripple_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _js_welcome_slider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/welcome-slider.js */ \"./js/welcome-slider.js\");\n/* harmony import */ var _js_welcome_slider_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_welcome_slider_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _js_explore_slider_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/explore-slider.js */ \"./js/explore-slider.js\");\n/* harmony import */ var _js_explore_slider_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_explore_slider_js__WEBPACK_IMPORTED_MODULE_9__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/burger-menu.js":
/*!***************************!*\
  !*** ./js/burger-menu.js ***!
  \***************************/
/***/ (() => {

eval("const burgerBtn = document.querySelector('.burger')\r\nconst navBar = document.querySelector('.header__nav')\r\nconst slideBarWelcome = document.querySelector('.main-slider')\r\nconst toHide = document.querySelectorAll('.tohide')\r\n\r\n// for tablet\r\nconst backgroundImg = document.querySelector('.welcome-section .wrapper')\r\nconst welcomeTablet = document.querySelector('.welcome__tablet')\r\n\r\nburgerBtn.addEventListener('click', toggle)\r\n\r\nfunction toggle() {\r\n  navBar.classList.toggle('open')\r\n  burgerBtn.classList.toggle('close')\r\n  slideBarWelcome.classList.toggle('move')\r\n  backgroundImg.classList.toggle('move_bg')\r\n  toHide.forEach(item => item.classList.toggle('hide'))\r\n  welcomeTablet.classList.toggle('show')\r\n}\n\n//# sourceURL=webpack:///./js/burger-menu.js?");

/***/ }),

/***/ "./js/explore-slider.js":
/*!******************************!*\
  !*** ./js/explore-slider.js ***!
  \******************************/
/***/ (() => {

eval("const exploreSurface = document.querySelector('.explore-img')\r\nconst ruler = document.querySelector('.explore-ruler')\r\nconst imgBefore = document.querySelector('.before')\r\nconst imgAfter = document.querySelector('.after')\r\n\r\nlet distX = 0\r\nlet clicked = 0\r\n\r\nruler.addEventListener('mousedown', function(e) {\r\n  e.preventDefault()\r\n  clicked = 1\r\n\r\n  const imgX = imgAfter.getClientRects()[0].x\r\n\r\n  exploreSurface.addEventListener('mousemove', function slideMove(e) {\r\n\r\n    if (clicked == 0) return false\r\n    distX = e.pageX - imgX\r\n  \r\n    if (distX >= -10 && distX <= 710) {\r\n      imgBefore.style.width = `${distX}px`\r\n      ruler.style.left = `${distX - 10}px`\r\n    } else {\r\n      clicked = 0\r\n    }\r\n\r\n  })  \r\n\r\n})\r\n\r\nexploreSurface.addEventListener('mouseup', function() {\r\n  clicked = 0\r\n})\n\n//# sourceURL=webpack:///./js/explore-slider.js?");

/***/ }),

/***/ "./js/gallery.js":
/*!***********************!*\
  !*** ./js/gallery.js ***!
  \***********************/
/***/ (() => {

eval("const pictureInnerContainer = document.querySelector('.picture-inner-container')\r\nconst gal =[]\r\n\r\nfunction shuffle(arr) {\r\n  arr.sort(() => Math.random() - 0.5)\r\n}\r\n\r\nfor (let i = 1; i < 16; i++){\r\n  let img = document.createElement('img')\r\n  img.classList.add('gal-pic')\r\n  img.src = `gallery/gallery${i}.jpg`\r\n  img.alt = `gallery${i}`\r\n  gal.push(img)\r\n}\r\n\r\nshuffle(gal)\r\ngal.map(picture => pictureInnerContainer.append(picture))\r\n\n\n//# sourceURL=webpack:///./js/gallery.js?");

/***/ }),

/***/ "./js/ripple.js":
/*!**********************!*\
  !*** ./js/ripple.js ***!
  \**********************/
/***/ (() => {

eval("const rippleBtn = document.querySelector('.book-btn')\r\n\r\nrippleBtn.addEventListener('click', function (e) {\r\n  const x = e.clientX\r\n  const y = e.clientY\r\n\r\n  const buttonLeft = Object.values(rippleBtn.getClientRects())[0].x\r\n  const buttonTop = Object.values(rippleBtn.getClientRects())[0].y\r\n\r\n  const xInside = x - buttonLeft\r\n  const yInside = y - buttonTop\r\n\r\n  const circle = document.createElement('span')\r\n  circle.classList.add('circle')\r\n  circle.style.top = yInside + 'px'\r\n  circle.style.left = xInside + 'px'\r\n\r\n  this.appendChild(circle)\r\n\r\n  setTimeout(() => circle.remove(), 500)\r\n})\n\n//# sourceURL=webpack:///./js/ripple.js?");

/***/ }),

/***/ "./js/ticket-form-datetime.js":
/*!************************************!*\
  !*** ./js/ticket-form-datetime.js ***!
  \************************************/
/***/ (() => {

eval("const bookDate = document.querySelector('.input__date')\r\nconst bookTime = document.querySelector('.input__time')\r\nconst bookDateDisplay = document.querySelector('.tour__date')\r\nconst bookTimeDisplay = document.querySelector('.tour__time')\r\n\r\nconst bookDayTicketFormat = (dateString) => new Date(dateString).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })\r\nbookDate.min = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate()}`\r\nbookDate.max = '2022-12-31'\r\nbookDate.addEventListener('change', function() {\r\n  bookDateDisplay.textContent = bookDayTicketFormat(this.value)\r\n})\r\n\r\nbookTime.addEventListener('change', function() {\r\n  bookTimeDisplay.textContent = this.value\r\n})\r\n\r\nconst inputDateTime = [document.querySelector('.input__date__wrapper'), document.querySelector('.input__time__wrapper')]\r\n\r\ninputDateTime.forEach(field => field.addEventListener('input', function() {\r\n    this.classList.add('changed')\r\n  })\r\n)\n\n//# sourceURL=webpack:///./js/ticket-form-datetime.js?");

/***/ }),

/***/ "./js/ticket-form-open.js":
/*!********************************!*\
  !*** ./js/ticket-form-open.js ***!
  \********************************/
/***/ (() => {

eval("const overlay = document.querySelector('.overlay')\r\nconst buyForm = document.getElementById('buyForm')\r\nconst openFormBtn = document.querySelector('.tickets-submit')\r\nconst closeFormBtn = document.querySelector('.tickets__form-close')\r\n\r\nconst closeObjects = [closeFormBtn, overlay]\r\n\r\nfunction removeAnimation() {\r\n  buyForm.classList.remove('hide', 'show', 'active')\r\n  overlay.classList.remove('active')\r\n}\r\n\r\nfunction showForm() {\r\n  buyForm.removeEventListener('animationend', removeAnimation)\r\n  overlay.classList.add('active')\r\n  buyForm.classList.add('active', 'show')\r\n}\r\n\r\nfunction hideForm() {\r\n  buyForm.classList.add('hide')\r\n  buyForm.addEventListener('animationend', removeAnimation)  \r\n}\r\n\r\nopenFormBtn.addEventListener('click', showForm)\r\ncloseObjects.forEach(obj => obj.addEventListener('click', hideForm))\r\n\n\n//# sourceURL=webpack:///./js/ticket-form-open.js?");

/***/ }),

/***/ "./js/ticket-form.js":
/*!***************************!*\
  !*** ./js/ticket-form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const museumProposals = __webpack_require__(/*! ../assets/museumProposals */ \"./assets/museumProposals.json\")\r\nclass Ticket {\r\n  constructor(typeKey, visitorBasic, visitorSenior) {\r\n    this.typeKey = typeKey,\r\n    this.visitorBasic = visitorBasic,\r\n    this.visitorSenior = visitorSenior\r\n  }\r\n  getTicketTypes() {\r\n    return museumProposals.map(item => item['type'])\r\n  }\r\n  getPriceList() {\r\n    return museumProposals.filter(item => Object.keys(item['type'])[0] === this.typeKey)[0]['price']\r\n  }\r\n  getTotalPrice() {\r\n    return this.getPriceList()['basic'] * this.visitorBasic + this.getPriceList()['senior'] * this.visitorSenior\r\n  }\r\n}\r\n// !\r\nlet ticket = new Ticket('permanent', 3, 1)\r\n// !\r\n\r\nconst ticketType = document.querySelectorAll('.radio-btn')\r\nconst ticketTypeLable = document.querySelectorAll('.type__info')\r\nconst ticketTypeLableForm = document.querySelectorAll('.calc__type')\r\n\r\nconst tourType = document.querySelector('.tour__type')\r\n\r\nconst changeTicketsNumber = document.querySelectorAll('.amount-btn')\r\nconst changeTicketsNumberForm = document.querySelectorAll('.type__control')\r\n\r\nconst ticketsAmount = document.querySelectorAll('.amount-input') // main page\r\nconst ticketsAmountInput = document.querySelectorAll('.type__input') // form - duplicate\r\n\r\nconst ticketsAmountBuy = document.querySelectorAll('.calc__count') // form - black square\r\nconst ticketsPrice = document.querySelectorAll('.calc__price') // form - summ price basic and senior\r\nconst ticketsPriceTotal = document.querySelector('.amount-total') // main page - total price\r\nconst ticketsPriceTotalForm = document.querySelector('.calc__res') // form - total price\r\nlet ticketSet = [ticket.visitorBasic, ticket.visitorSenior]\r\n// !\r\n\r\nfunction applyTypeInfo(param) {\r\n  ticket.typeKey = param\r\n  tourType.textContent = ticket.getTicketTypes().filter(item => item[param])[0][param]\r\n  ticketTypeLable[0].textContent = `Basic 18+ (${Object.values(ticket.getPriceList())[0]} €)`\r\n  ticketTypeLableForm[0].textContent = `Basic (${Object.values(ticket.getPriceList())[0]} €)`\r\n  ticketTypeLable[1].textContent = `Senior 65+ (${Object.values(ticket.getPriceList())[1]} €)`\r\n  ticketTypeLableForm[1].textContent = `Senior (${Object.values(ticket.getPriceList())[1]} €)`\r\n\r\n  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])\r\n\r\n  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()\r\n  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`\r\n}\r\n\r\napplyTypeInfo(ticket.typeKey)\r\n\r\nticketType.forEach(el => el.addEventListener('click', function() {\r\n  this.checked ? applyTypeInfo(this.value) : ''\r\n}))\r\n\r\nticketTypeLable[0].textContent = `Basic 18+ (${Object.values(ticket.getPriceList())[0]} €)`\r\nticketTypeLableForm[0].textContent = `Basic (${Object.values(ticket.getPriceList())[0]} €)`\r\nticketTypeLable[1].textContent = `Senior 65+ (${Object.values(ticket.getPriceList())[1]} €)`\r\nticketTypeLableForm[1].textContent = `Senior (${Object.values(ticket.getPriceList())[1]} €)`\r\nconsole.log(ticket.getPriceList());\r\n\r\nticketsPriceTotal.innerHTML = ticket.getTotalPrice()\r\nticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`\r\n\r\nticketsAmount.forEach((el, i) => el.value = ticketSet[i])\r\nticketsAmountInput.forEach((el, i)=> el.value = ticketSet[i])\r\nticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])\r\n\r\nticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])\r\n\r\nchangeTicketsNumber.forEach(btn => btn.addEventListener('click', function() {\r\n  this.textContent === '+' ?\r\n  +this.parentElement.children[1].value++ :\r\n  +this.parentElement.children[1].value--\r\n\r\n  ticket.visitorBasic = ticketsAmount[0].value\r\n  ticket.visitorSenior = ticketsAmount[1].value\r\n  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]\r\n\r\n  ticketsAmountInput.forEach((el, i)=> el.value = ticketSet[i])\r\n  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])\r\n  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])\r\n  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()\r\n  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`\r\n}\r\n))\r\n\r\nchangeTicketsNumberForm.forEach(btn => btn.addEventListener('click', function() {\r\n  this.textContent === '+' ?\r\n  +this.parentElement.children[1].value++ :\r\n  +this.parentElement.children[1].value--\r\n\r\n  ticket.visitorBasic = ticketsAmountInput[0].value\r\n  ticket.visitorSenior = ticketsAmountInput[1].value\r\n  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]\r\n\r\n  ticketsAmount.forEach((el, i)=> el.value = ticketSet[i])\r\n  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])\r\n  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])\r\n  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()\r\n  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`\r\n}\r\n))\r\n\r\nticketsAmount.forEach((amount, i) => amount.addEventListener('input', function() {\r\n  ticket.visitorBasic = ticketsAmount[0].value\r\n  ticket.visitorSenior = ticketsAmount[1].value\r\n  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]\r\n\r\n  ticketsAmountInput.forEach((el, i)=> el.value = ticketSet[i])\r\n  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])\r\n  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])\r\n  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()\r\n  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`\r\n}))\r\n\r\nticketsAmountInput.forEach((amount, i) => amount.addEventListener('input', function() {\r\n  ticket.visitorBasic = ticketsAmountInput[0].value\r\n  ticket.visitorSenior = ticketsAmountInput[1].value\r\n  ticketSet = [ticket.visitorBasic, ticket.visitorSenior]\r\n\r\n  ticketsAmount.forEach((el, i)=> el.value = ticketSet[i])\r\n  ticketsAmountBuy.forEach((el, i)=> el.textContent = ticketSet[i])\r\n  ticketsPrice.forEach((el, i) => el.textContent = ticketSet[i] * Object.values(ticket.getPriceList())[i])\r\n  ticketsPriceTotal.innerHTML = ticket.getTotalPrice()\r\n  ticketsPriceTotalForm.innerHTML = `${ticket.getTotalPrice()} &euro;`\r\n}))\n\n//# sourceURL=webpack:///./js/ticket-form.js?");

/***/ }),

/***/ "./js/video.js":
/*!*********************!*\
  !*** ./js/video.js ***!
  \*********************/
/***/ (() => {

eval("const rangeBarTiming = document.querySelector('.range-timing')\r\nconst rangeBarVolume = document.querySelector('.range-volume')\r\n\r\n\r\nrangeBarTiming.addEventListener('input', function() {\r\n  const valueTiming = this.value\r\n  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueTiming}%, #c4c4c4 ${valueTiming}%, #c4c4c4 100%)`\r\n})\r\n\r\nrangeBarVolume.addEventListener('input', function() {\r\n  const valueVolume = this.value\r\n  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueVolume*2}%, #c4c4c4 ${valueVolume*2}%, #c4c4c4 100%)`\r\n})\r\n\r\n// ! Video Slider\r\n\r\nconst rightArrow = document.querySelector('.stroke.right')\r\nconst leftArrow = document.querySelector('.stroke.left')\r\n// const slideNumber = document.querySelector('.left-slide')\r\nconst thumbItem = document.querySelectorAll('.slider__dot')\r\nconst mainSliderThumb = document.querySelector('.slider__thumb')\r\nconst content = document.querySelectorAll('.slider__list-item')\r\n\r\nlet indexOfSlide = 0\r\nlet currentItem = 0\r\nconst direction = ['to-left', 'to-right', 'from-left', 'from-right']\r\n\r\nlet isUnabled = true\r\n\r\nfunction changeCurrentItem(n) {\r\n  currentItem = (n + content.length) % content.length\r\n}\r\n\r\nfunction hideItemContent(direction) {\r\n  isUnabled = false\r\n  content[currentItem].classList.add(direction)\r\n  content[currentItem].addEventListener('animationend', function() {\r\n    this.classList.remove('active-video', direction)\r\n  })\r\n}\r\n\r\nfunction removeHighlightThumb() {\r\n  thumbItem[currentItem].classList.remove('active-dot')\r\n}\r\n\r\nfunction highlightThumb() {\r\n  thumbItem[currentItem].classList.add('active-dot')\r\n}\r\n\r\nfunction showItemContent(direction) {\r\n  content[currentItem].classList.add('next', direction)\r\n  content[currentItem].addEventListener('animationend', function() {\r\n    this.classList.remove('next', direction)\r\n    this.classList.add('active-video')\r\n    isUnabled = true\r\n  })\r\n}\r\n\r\nfunction previousItem(n) {\r\n  hideItemContent(direction[1])\r\n  removeHighlightThumb()\r\n  changeCurrentItem(currentItem - 1)\r\n  showItemContent(direction[2])\r\n  highlightThumb()\r\n}\r\n\r\nfunction nextItem(n) {\r\n  hideItemContent(direction[0])\r\n  removeHighlightThumb()\r\n  changeCurrentItem(currentItem + 3)\r\n  showItemContent(direction[3])\r\n  changeCurrentItem(currentItem - 2)\r\n  highlightThumb()\r\n}\r\n\r\nfunction previousThumbItem(n) {\r\n  hideItemContent(direction[1])\r\n  currentItem = indexOfSlide\r\n  showItemContent(direction[2])\r\n}\r\n\r\nfunction nextThumbItem(n) {\r\n  hideItemContent(direction[0])\r\n  currentItem = indexOfSlide\r\n  showItemContent(direction[3])\r\n}\r\n\r\nleftArrow.addEventListener('click', function() {\r\n  if (isUnabled) {\r\n    previousItem(currentItem)\r\n  }\r\n})\r\n\r\nrightArrow.addEventListener('click', function() {\r\n  if (isUnabled) {\r\n     nextItem(currentItem)\r\n    }\r\n})\r\n\r\nthumbItem.forEach(element => element.addEventListener('click', (e) => {\r\n  if (isUnabled) {\r\n\r\n  thumbItem.forEach(item => /active-dot/.test(item.classList.value)?currentItem = Array.from(thumbItem).indexOf(item):'')\r\n\r\n  thumbItem.forEach(item => item.classList.remove('active-dot'))\r\n  e.target.classList.add('active-dot')\r\n  indexOfSlide = Array.from(thumbItem).indexOf(e.target)\r\n\r\n  \r\n  if (currentItem < indexOfSlide) {\r\n    nextThumbItem(currentItem)\r\n  } else if (currentItem > indexOfSlide) {\r\n    previousThumbItem(currentItem)\r\n  }\r\n  }\r\n\r\n}))\n\n//# sourceURL=webpack:///./js/video.js?");

/***/ }),

/***/ "./js/welcome-slider.js":
/*!******************************!*\
  !*** ./js/welcome-slider.js ***!
  \******************************/
/***/ (() => {

eval("const rightArrow = document.querySelector('.main-slider__control.right')\r\nconst leftArrow = document.querySelector('.main-slider__control.left')\r\nconst slideNumber = document.querySelector('.left-slide')\r\nconst thumbItem = document.querySelectorAll('.main-slider__thumb-item')\r\nconst mainSliderThumb = document.querySelector('.main-slider__thumb')\r\nconst content = document.querySelectorAll('.section__img')\r\nlet indexOfSlide = 0\r\nlet currentItem = 0\r\n\r\nconst direction = ['to-left', 'to-right', 'from-left', 'from-right']\r\n\r\nlet isUnabled = true\r\n\r\nfunction changeCurrentItem(n) {\r\n  currentItem = (n + content.length) % content.length\r\n}\r\n\r\nfunction hideItemContent(direction) {\r\n  isUnabled = false\r\n  content[currentItem].classList.add(direction)\r\n  content[currentItem].addEventListener('animationend', function() {\r\n    this.classList.remove('active', direction)\r\n  })\r\n}\r\n\r\nfunction removeHighlightThumb() {\r\n  thumbItem[currentItem].classList.remove('active-thumb')\r\n}\r\n\r\nfunction highlightThumb() {\r\n  thumbItem[currentItem].classList.add('active-thumb')\r\n}\r\n\r\nfunction showItemContent(direction) {\r\n  content[currentItem].classList.add('next', direction)\r\n  content[currentItem].addEventListener('animationend', function() {\r\n    this.classList.remove('next', direction)\r\n    this.classList.add('active')\r\n    isUnabled = true\r\n  })\r\n}\r\n\r\nfunction previousItem(n) {\r\n  hideItemContent(direction[1])\r\n  removeHighlightThumb()\r\n  changeCurrentItem(currentItem - 1)\r\n  showItemContent(direction[2])\r\n  highlightThumb()\r\n  slideNumber.innerText = `0${currentItem + 1}`\r\n}\r\n\r\nfunction nextItem(n) {\r\n  hideItemContent(direction[0])\r\n  removeHighlightThumb()\r\n  changeCurrentItem(currentItem + 1)\r\n  showItemContent(direction[3])\r\n  highlightThumb()\r\n  slideNumber.innerText = `0${currentItem + 1}`\r\n}\r\n\r\nfunction previousThumbItem(n) {\r\n  hideItemContent(direction[1])\r\n  currentItem = indexOfSlide\r\n  showItemContent(direction[2])\r\n}\r\n\r\nfunction nextThumbItem(n) {\r\n  hideItemContent(direction[0])\r\n  currentItem = indexOfSlide\r\n  showItemContent(direction[3])\r\n}\r\n\r\nleftArrow.addEventListener('click', function() {\r\n  if (isUnabled) {\r\n    previousItem(currentItem)\r\n  }\r\n})\r\n\r\nrightArrow.addEventListener('click', function() {\r\n  if (isUnabled) {\r\n     nextItem(currentItem)\r\n    }\r\n})\r\n\r\nthumbItem.forEach(element => element.addEventListener('click', (e) => {\r\n  if (isUnabled) {\r\n\r\n  thumbItem.forEach(item => /active-thumb/.test(item.classList.value)?currentItem = Array.from(thumbItem).indexOf(item):'')\r\n\r\n  thumbItem.forEach(item => item.classList.remove('active-thumb'))\r\n  e.target.classList.add('active-thumb')\r\n  indexOfSlide = Array.from(thumbItem).indexOf(e.target)\r\n\r\n  slideNumber.innerText = `0${indexOfSlide + 1}`\r\n  \r\n  if (currentItem < indexOfSlide) {\r\n    nextThumbItem(currentItem)\r\n  } else if (currentItem > indexOfSlide) {\r\n    previousThumbItem(currentItem)\r\n  }\r\n  }\r\n\r\n}))\r\n\r\n// ! Closure\r\n// ! Scrolling the slider with mouse swipes\r\nconst swipeDetect = (el) => {\r\n\r\n  let surface = el\r\n  let startX = 0\r\n  let startY = 0\r\n  let distX = 0\r\n  let distY = 0\r\n  let startTime = 0\r\n  let elapsedTime = 0\r\n  let threshold = 150\r\n  let restraint = 100\r\n  let allowedTime = 300\r\n\r\n  surface.addEventListener('mousedown', function(e) {\r\n    startX = e.pageX\r\n    startY = e.pageY\r\n    startTime = new Date().getTime()\r\n    e.preventDefault()\r\n  })\r\n\r\n  surface.addEventListener('mouseup', function(e) {\r\n    distX = e.pageX - startX\r\n    distY = e.pageY - startY\r\n    elapsedTime = new Date().getTime() - startTime\r\n\r\n    if (elapsedTime <= allowedTime) {\r\n      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {\r\n        if (distX < 0) {\r\n          isUnabled?nextItem(currentItem):null\r\n        } else {\r\n          isUnabled?previousItem(currentItem):null\r\n        }\r\n      }      \r\n    }\r\n\r\n    e.preventDefault()\r\n  })\r\n}\r\n\r\nlet el = document.querySelector('.welcome-section__img')\r\nswipeDetect(el)\r\n\n\n//# sourceURL=webpack:///./js/welcome-slider.js?");

/***/ }),

/***/ "./assets/museumProposals.json":
/*!*************************************!*\
  !*** ./assets/museumProposals.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"type\":{\"permanent\":\"Permanent exhibition\"},\"price\":{\"basic\":20,\"senior\":10}},{\"type\":{\"temporary\":\"Temporary exhibition\"},\"price\":{\"basic\":25,\"senior\":12.5}},{\"type\":{\"combi\":\"Combined Admission\"},\"price\":{\"basic\":40,\"senior\":20}}]');\n\n//# sourceURL=webpack:///./assets/museumProposals.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;