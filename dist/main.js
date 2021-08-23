/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bakery.js":
/*!***********************!*\
  !*** ./src/bakery.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBakery);\r\n\r\nfunction createBakery() {\r\n  const containerDivEl = document.createElement(\"div\");\r\n  containerDivEl.classList.add(\"container\", \"content-section--md\");\r\n  containerDivEl.appendChild(createContentSection());\r\n  containerDivEl.appendChild(createSection());\r\n\r\n  return containerDivEl;\r\n}\r\n\r\nfunction createContentSection() {\r\n  const sectionEl = document.createElement(\"section\");\r\n  sectionEl.classList.add(\"content-section\");\r\n\r\n  sectionEl.appendChild(createTitle(\"The bakery\"));\r\n  sectionEl.appendChild(createSubtitle(\"Culturing wild yeast since 2011!\"));\r\n  sectionEl.appendChild(\r\n    createBody(\r\n      \" Led by the traditional principles of simple, additive-free, wild yeast sourdough baking, we have an ongoing commitment to working with quality, organic flours and seasonal flavours.\"\r\n    )\r\n  );\r\n\r\n  const imgSection = document.createElement(\"div\");\r\n  imgSection.classList.add(\"section__images\");\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582019677476-0BOWDV3AN91MVABBW8PX/Trove+Bakery+.png\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582019675493-DC6CVJ17AL8QDIUXJAVE/IMG_7343.JPG\"\r\n    )\r\n  );\r\n\r\n  sectionEl.appendChild(imgSection);\r\n\r\n  sectionEl.appendChild(\r\n    createBody(\r\n      \"You can buy our loaves direct from our cafes, or join our bread subscription service and collect your favourite bakes from our chosen pick up partners across Manchester, Salford, Cheshire and Stockport.\"\r\n    )\r\n  );\r\n\r\n  return sectionEl;\r\n}\r\n\r\nfunction createSection() {\r\n  const sectionEl = document.createElement(\"section\");\r\n  sectionEl.classList.add(\"content-section\");\r\n\r\n  sectionEl.appendChild(createTitle(\"Our Pastries + Cakesy\"));\r\n  sectionEl.appendChild(\r\n    createBody(\r\n      \"Our pastry team make a range of seasonal tray bakes, tarts and sweet and savoury pastries available on the counter daily at our cafes.\"\r\n    )\r\n  );\r\n\r\n  sectionEl.appendChild(\r\n    createBody(\r\n      \"Our pastries take 42 hours to complete; the dough is made with organic white and wholemeal flour, French butter, organic eggs, sea salt, sugar and levain; keeping our use of commercial yeast to a minimum. After mixing, cold proving, laminating, hand-cutting and shaping, the dough is proved before being baked fresh every morning at 6am!\"\r\n    )\r\n  );\r\n\r\n  const imgSection = document.createElement(\"div\");\r\n  imgSection.classList.add(\"section__images\");\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582020367485-EQP57ZB58SQI1OBW2V7Y/IMG_7321.PNG\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582020227532-TIBTAG6YN57ATN7BAI06/Elderflower+bundt.png\"\r\n    )\r\n  );\r\n\r\n  sectionEl.appendChild(imgSection);\r\n\r\n  sectionEl.appendChild(\r\n    createBody(\r\n      \"You can buy our loaves direct from our cafes, or join our bread subscription service and collect your favourite bakes from our chosen pick up partners across Manchester, Salford, Cheshire and Stockport.\"\r\n    )\r\n  );\r\n\r\n  return sectionEl;\r\n}\r\n\r\nfunction createTitle(bodyText) {\r\n  const h2El = document.createElement(\"h2\");\r\n  h2El.classList.add(\"section__title\");\r\n  h2El.innerText = bodyText;\r\n\r\n  return h2El;\r\n}\r\n\r\nfunction createSubtitle(bodyText) {\r\n  const pEl = document.createElement(\"p\");\r\n  pEl.classList.add(\"section__subtitle\");\r\n  pEl.innerText = bodyText;\r\n\r\n  return pEl;\r\n}\r\n\r\nfunction createBody(bodyText) {\r\n  const pEl = document.createElement(\"p\");\r\n  pEl.classList.add(\"section__body\");\r\n  pEl.innerText = bodyText;\r\n\r\n  return pEl;\r\n}\r\n\r\nfunction createImg(url) {\r\n  const imgEl = document.createElement(\"img\");\r\n  imgEl.setAttribute(\"src\", url);\r\n  imgEl.classList.add(\"section__image\");\r\n\r\n  return imgEl;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/bakery.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\ndocument.body.appendChild((0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\r\ndocument.body.appendChild((0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createMainPage)());\r\ndocument.body.appendChild((0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);\r\n\r\nfunction createMain() {\r\n  const divContainer = document.createElement(\"div\");\r\n  divContainer.classList.add(\"container\");\r\n\r\n  const heroSection = createSectionEl(\"hero\");\r\n  const heroImage = createImgEl(\r\n    \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1615548013753-CVPINXNQH4D0H22I4CG2/Trove_web_banner2021new.jpg\"\r\n  );\r\n  heroSection.appendChild(heroImage);\r\n  divContainer.appendChild(heroSection);\r\n\r\n  const boxesSection = createSectionEl(\"boxes\");\r\n\r\n  const box1 = createBox(\r\n    \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582204257078-3MOGUC57UHXNNW80EEIU/Trove+Bakery+.jpg\",\r\n    \"Est. 2011. Sourdough bakery + patisserie with a central focus on organic flour, wild yeast and quality, seasonal flavours\",\r\n    \"the bakery\"\r\n  );\r\n\r\n  const box2 = createBox(\r\n    \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582204279239-Z7UZCX9ZJ9E3G1VNRPCP/Trove.Bakery.jpg\",\r\n    \"Shop our selection of handmade delectables for collection from our Levenshulem or Ancaots Cafes.\",\r\n    \"online shop\"\r\n  );\r\n\r\n  const box3 = createBox(\r\n    \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582207752538-2UPWY56QS6HDT01LELTU/Levy+Cafe+2.jpg\",\r\n    \"A destination for innovative, seasonal brunch dishes alongside our freshly baked sourdough, pastries, cakes, jams + chutneys, all made in house by our team\",\r\n    \"our cafes\"\r\n  );\r\n\r\n  boxesSection.append(box1, box2, box3);\r\n  divContainer.appendChild(boxesSection);\r\n\r\n  return divContainer;\r\n}\r\n\r\nfunction createBox(imageUrl, bodyText, buttonName) {\r\n  const divEl = document.createElement(\"div\");\r\n  divEl.classList.add(\"box__item\");\r\n\r\n  const imgEl = document.createElement(\"img\");\r\n  imgEl.setAttribute(\"src\", imageUrl);\r\n  imgEl.classList.add(\"box__image\");\r\n  divEl.appendChild(imgEl);\r\n\r\n  const blockEl = document.createElement(\"div\");\r\n  blockEl.classList.add(\"box__body-block\");\r\n\r\n  const pEl = document.createElement(\"p\");\r\n  pEl.classList.add(\"box__body-text\");\r\n  pEl.innerText = bodyText;\r\n  blockEl.appendChild(pEl);\r\n\r\n  const btnEl = document.createElement(\"button\");\r\n  btnEl.classList.add(\"btn\", \"btn--body\");\r\n  btnEl.innerText = buttonName;\r\n  blockEl.appendChild(btnEl);\r\n\r\n  divEl.appendChild(blockEl);\r\n\r\n  return divEl;\r\n}\r\n\r\nfunction createSectionEl(className) {\r\n  const sectionEl = document.createElement(\"section\");\r\n  sectionEl.classList.add(className);\r\n\r\n  return sectionEl;\r\n}\r\n\r\nfunction createImgEl(url) {\r\n  const imgEl = document.createElement(\"img\");\r\n  imgEl.setAttribute(\"src\", url);\r\n\r\n  return imgEl;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/main-page.js?");

/***/ }),

/***/ "./src/our-cafes.js":
/*!**************************!*\
  !*** ./src/our-cafes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOurCafes);\r\n\r\nfunction createOurCafes() {\r\n  const containerDivEl = document.createElement(\"div\");\r\n  containerDivEl.classList.add(\"container\", \"content-section--md\");\r\n  containerDivEl.appendChild(contentSection1());\r\n  containerDivEl.appendChild(contentSection2());\r\n  containerDivEl.appendChild(contentSection3());\r\n\r\n  return containerDivEl;\r\n}\r\n\r\nfunction contentSection1() {\r\n  const sectionEl = document.createElement(\"section\");\r\n  sectionEl.classList.add(\"content-section\");\r\n\r\n  sectionEl.appendChild(createTitle(\"Trove Levenshulme\"));\r\n  sectionEl.appendChild(\r\n    createSubtitle(\"1032-1034 Stockport Rd, Levenshulme, Manchester, M19 3WX\")\r\n  );\r\n\r\n  const btnSection = document.createElement(\"div\");\r\n  btnSection.classList.add(\"section__buttons\");\r\n  btnSection.appendChild(createButton(\"brunch menu\"));\r\n  btnSection.appendChild(createButton(\"book a table\"));\r\n  sectionEl.appendChild(btnSection);\r\n\r\n  const imgSection = document.createElement(\"div\");\r\n  imgSection.classList.add(\"section__images\");\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026438220-7QGZU06NOJI27OGWFMAI/Levy+Cafe.jpg\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026476109-9EH0NQ7FTSBNDM4DUF1J/JM-TROVE-PRESS-18.JPG\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1584357109518-JTMTJLU9L8MI1A0GPW18/IMG_7359.jpg\"\r\n    )\r\n  );\r\n\r\n  sectionEl.appendChild(imgSection);\r\n\r\n  return sectionEl;\r\n}\r\n\r\nfunction contentSection2() {\r\n  const sectionEl = document.createElement(\"section\");\r\n  sectionEl.classList.add(\"content-section\");\r\n\r\n  sectionEl.appendChild(createTitle(\"Trove Ancoats\"));\r\n  sectionEl.appendChild(\r\n    createSubtitle(\"5 Murray Street, Ancoats, Manchester, M4 6HS\")\r\n  );\r\n\r\n  const btnSection = document.createElement(\"div\");\r\n  btnSection.classList.add(\"section__buttons\");\r\n  btnSection.appendChild(createButton(\"brunch menu\"));\r\n  btnSection.appendChild(createButton(\"book a table\"));\r\n  sectionEl.appendChild(btnSection);\r\n\r\n  const imgSection = document.createElement(\"div\");\r\n  imgSection.classList.add(\"section__images\");\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026305259-1PXFAS29OV916WBSR7RI/Trove+Ancoats_Image+1.JPG\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026328354-E0TE9QKPGIUPG8OMNFMG/1c8d0221-931e-47e0-aefa-36f1eccf0833+2.jpg\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1584357018940-Q906YBKE1BNJKR1RZMT4/IMG_8325.jpg\"\r\n    )\r\n  );\r\n\r\n  sectionEl.appendChild(imgSection);\r\n\r\n  return sectionEl;\r\n}\r\n\r\nfunction contentSection3() {\r\n  const sectionEl = document.createElement(\"section\");\r\n  sectionEl.classList.add(\"content-section\");\r\n\r\n  sectionEl.appendChild(createTitle(\"Trove Marble Street\"));\r\n  sectionEl.appendChild(\r\n    createSubtitle(\"5 Murray Street, Ancoats, Manchester, M4 6HS\")\r\n  );\r\n\r\n  const imgSection = document.createElement(\"div\");\r\n  imgSection.classList.add(\"section__images\");\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1622201816321-0U6ZWMD87KFHXIOMEHS9/IMG_7995.jpg\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1622201814819-GZRT07S5NNPDC6AR54NW/IMG_7990.jpg\"\r\n    )\r\n  );\r\n  imgSection.appendChild(\r\n    createImg(\r\n      \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1622201818600-NWTNMGA0NHNRNLD4BATM/IMG_7999.jpg\"\r\n    )\r\n  );\r\n\r\n  sectionEl.appendChild(imgSection);\r\n\r\n  return sectionEl;\r\n}\r\n\r\nfunction createTitle(bodyText) {\r\n  const h2El = document.createElement(\"h2\");\r\n  h2El.classList.add(\"section__title\");\r\n  h2El.innerText = bodyText;\r\n\r\n  return h2El;\r\n}\r\n\r\nfunction createSubtitle(bodyText) {\r\n  const pEl = document.createElement(\"p\");\r\n  pEl.classList.add(\"section__subtitle\");\r\n  pEl.innerText = bodyText;\r\n\r\n  return pEl;\r\n}\r\n\r\nfunction createImg(url) {\r\n  const imgEl = document.createElement(\"img\");\r\n  imgEl.setAttribute(\"src\", url);\r\n  imgEl.classList.add(\"section__image\");\r\n\r\n  return imgEl;\r\n}\r\n\r\nfunction createButton(btnText) {\r\n  const btnEl = document.createElement(\"button\");\r\n  btnEl.classList.add(\"btn\", \"btn--section\");\r\n  btnEl.textContent = btnText;\r\n\r\n  return btnEl;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/our-cafes.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createMainPage\": () => (/* binding */ createMainPage),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\n/* harmony import */ var _main_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.js */ \"./src/main-page.js\");\n/* harmony import */ var _bakery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bakery.js */ \"./src/bakery.js\");\n/* harmony import */ var _our_cafes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./our-cafes.js */ \"./src/our-cafes.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"page-head\");\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"container\", \"container--flex\");\r\n\r\n  container.appendChild(createLogo());\r\n  container.appendChild(createNav());\r\n\r\n  header.appendChild(container);\r\n\r\n  return header;\r\n}\r\n\r\nfunction createLogo() {\r\n  const anchor = document.createElement(\"a\");\r\n  const imageElement = document.createElement(\"img\");\r\n\r\n  anchor.setAttribute(\"href\", \"./index.html\");\r\n\r\n  imageElement.classList.add(\"logo\");\r\n  imageElement.setAttribute(\r\n    \"src\",\r\n    \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1486653555218-DVCX3DVTL6KP31OPTWW0/trove_logo-FINAL.png\"\r\n  );\r\n\r\n  anchor.appendChild(imageElement);\r\n\r\n  return anchor;\r\n}\r\n\r\nfunction createNav() {\r\n  let pages = [\r\n    {\r\n      name: \"Our cafes\",\r\n      id: \"our-cafes\",\r\n    },\r\n    {\r\n      name: \"The bakery\",\r\n      id: \"bakery\",\r\n    },\r\n    {\r\n      name: \"Events\",\r\n      id: \"events\",\r\n    },\r\n    {\r\n      name: \"Careers\",\r\n      id: \"careers\",\r\n    },\r\n    {\r\n      name: \"Contact us\",\r\n      id: \"contact-us\",\r\n    },\r\n  ];\r\n\r\n  const navEl = document.createElement(\"nav\");\r\n  const ulEl = document.createElement(\"ul\");\r\n\r\n  navEl.classList.add(\"nav\");\r\n  ulEl.classList.add(\"nav__list\");\r\n\r\n  for (let page of pages) {\r\n    const liEl = document.createElement(\"li\");\r\n    const aEl = document.createElement(\"a\");\r\n\r\n    liEl.classList.add(\"nav__item\");\r\n    aEl.classList.add(\"nav__link\");\r\n    aEl.setAttribute(\"id\", page.id);\r\n    aEl.setAttribute(\"href\", \"#\");\r\n\r\n    aEl.addEventListener(\"click\", e => {\r\n      console.log(e.target.id);\r\n    });\r\n\r\n    aEl.innerText = page.name;\r\n\r\n    liEl.appendChild(aEl);\r\n    ulEl.appendChild(liEl);\r\n  }\r\n\r\n  navEl.appendChild(ulEl);\r\n\r\n  return navEl;\r\n}\r\n\r\nfunction createMainPage() {\r\n  const mainEl = document.createElement(\"main\");\r\n  mainEl.classList.add(\"page-content\");\r\n\r\n  mainEl.appendChild((0,_our_cafes_js__WEBPACK_IMPORTED_MODULE_2__.default)());\r\n\r\n  return mainEl;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footerEl = document.createElement(\"footer\");\r\n  const containerDiv = document.createElement(\"div\");\r\n\r\n  footerEl.classList.add(\"footer\");\r\n  containerDiv.classList.add(\"container\", \"container--flex-column\");\r\n\r\n  /* Brand Name Element */\r\n  const pEl = document.createElement(\"p\");\r\n  pEl.classList.add(\"brand-name\");\r\n  pEl.innerText = \"TROVE\";\r\n  containerDiv.appendChild(pEl);\r\n\r\n  /* Social Media Container */\r\n\r\n  const socialMediaDiv = document.createElement(\"div\");\r\n  socialMediaDiv.classList.add(\"social-media\");\r\n\r\n  [\"Instagram\", \"Twitter\"].forEach(name => {\r\n    const aEl = document.createElement(\"a\");\r\n    aEl.classList.add(\"social-media__link\");\r\n    aEl.setAttribute(\"target\", \"_blank\");\r\n    aEl.innerText = name;\r\n    socialMediaDiv.appendChild(aEl);\r\n  });\r\n\r\n  containerDiv.appendChild(socialMediaDiv);\r\n\r\n  /* Signup Form Container */\r\n\r\n  const signUpDiv = document.createElement(\"div\");\r\n  signUpDiv.classList.add(\"signup\");\r\n\r\n  const formEl = document.createElement(\"form\");\r\n  formEl.classList.add(\"signup-form\");\r\n\r\n  const inputText = document.createElement(\"input\");\r\n  inputText.classList.add(\"signup-form__text\");\r\n  inputText.setAttribute(\"type\", \"text\");\r\n  inputText.setAttribute(\"placeholder\", \"Email address\");\r\n  formEl.appendChild(inputText);\r\n\r\n  const signUpBtn = document.createElement(\"button\");\r\n  signUpBtn.classList.add(\"btn\", \"btn--signup-form\");\r\n  signUpBtn.innerText = \"SIGNUP\";\r\n  formEl.appendChild(signUpBtn);\r\n\r\n  signUpDiv.appendChild(formEl);\r\n\r\n  const signUpCopyEl = document.createElement(\"p\");\r\n  signUpCopyEl.classList.add(\"signup__copy\");\r\n  signUpCopyEl.innerText =\r\n    \"Sign up to our newsletter to receive all the news, events and updates\";\r\n\r\n  signUpDiv.appendChild(signUpCopyEl);\r\n  containerDiv.appendChild(signUpDiv);\r\n\r\n  footerEl.appendChild(containerDiv);\r\n\r\n  return footerEl;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;