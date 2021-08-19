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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\ndocument.body.appendChild((0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\r\ndocument.body.appendChild((0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createMain)());\r\ndocument.body.appendChild((0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\r\n\r\nfunction createPage() {\r\n  const divContainer = document.createElement(\"div\");\r\n  divContainer.classList.add(\"container\");\r\n\r\n  const heroSection = createSectionEl(\"hero\");\r\n  const heroImage = createImgEl(\r\n    \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1615548013753-CVPINXNQH4D0H22I4CG2/Trove_web_banner2021new.jpg\"\r\n  );\r\n  heroSection.appendChild(heroImage);\r\n\r\n  divContainer.appendChild(heroSection);\r\n\r\n  return divContainer;\r\n}\r\n\r\nfunction createSectionEl(className) {\r\n  const sectionEl = document.createElement(\"section\");\r\n  sectionEl.classList.add(className);\r\n\r\n  return sectionEl;\r\n}\r\n\r\nfunction createImgEl(url) {\r\n  const imgEl = document.createElement(\"img\");\r\n  imgEl.setAttribute(\"src\", url);\r\n\r\n  return imgEl;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/main-page.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createMain\": () => (/* binding */ createMain),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\n/* harmony import */ var _main_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.js */ \"./src/main-page.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"page-head\");\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"container\", \"container--flex\");\r\n\r\n  container.appendChild(createLogo());\r\n  container.appendChild(createNav());\r\n\r\n  header.appendChild(container);\r\n\r\n  return header;\r\n}\r\n\r\nfunction createLogo() {\r\n  const anchor = document.createElement(\"a\");\r\n  const imageElement = document.createElement(\"img\");\r\n\r\n  anchor.setAttribute(\"href\", \"./index.html\");\r\n\r\n  imageElement.classList.add(\"logo\");\r\n  imageElement.setAttribute(\r\n    \"src\",\r\n    \"https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1486653555218-DVCX3DVTL6KP31OPTWW0/trove_logo-FINAL.png\"\r\n  );\r\n\r\n  anchor.appendChild(imageElement);\r\n\r\n  return anchor;\r\n}\r\n\r\nfunction createNav() {\r\n  let pages = [\r\n    {\r\n      name: \"Our cafes\",\r\n      id: \"our-fafes\",\r\n    },\r\n    {\r\n      name: \"The bakery\",\r\n      id: \"bakery\",\r\n    },\r\n    {\r\n      name: \"Events\",\r\n      id: \"events\",\r\n    },\r\n    {\r\n      name: \"Careers\",\r\n      id: \"careers\",\r\n    },\r\n    {\r\n      name: \"Contact us\",\r\n      id: \"contact-us\",\r\n    },\r\n  ];\r\n\r\n  const navEl = document.createElement(\"nav\");\r\n  const ulEl = document.createElement(\"ul\");\r\n\r\n  navEl.classList.add(\"nav\");\r\n  ulEl.classList.add(\"nav__list\");\r\n\r\n  for (let page of pages) {\r\n    const liEl = document.createElement(\"li\");\r\n    const aEl = document.createElement(\"a\");\r\n\r\n    liEl.classList.add(\"nav__item\");\r\n    aEl.classList.add(\"nav__link\");\r\n    aEl.setAttribute(\"id\", page.id);\r\n\r\n    aEl.addEventListener(\"click\", e => {\r\n      console.log(e.target.id);\r\n    });\r\n\r\n    aEl.innerText = page.name;\r\n\r\n    liEl.appendChild(aEl);\r\n    ulEl.appendChild(liEl);\r\n  }\r\n\r\n  navEl.appendChild(ulEl);\r\n\r\n  return navEl;\r\n}\r\n\r\nfunction createMain() {\r\n  const mainEl = document.createElement(\"main\");\r\n  mainEl.classList.add(\"page-content\");\r\n\r\n  mainEl.appendChild((0,_main_page_js__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n\r\n  return mainEl;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footerEl = document.createElement(\"footer\");\r\n  const containerDiv = document.createElement(\"div\");\r\n\r\n  footerEl.classList.add(\"footer\");\r\n  containerDiv.classList.add(\"container\", \"container--flex-column\");\r\n\r\n  /* Brand Name Element */\r\n  const pEl = document.createElement(\"p\");\r\n  pEl.classList.add(\"brand-name\");\r\n  pEl.innerText = \"TROVE\";\r\n  containerDiv.appendChild(pEl);\r\n\r\n  /* Social Media Container */\r\n\r\n  const socialMediaDiv = document.createElement(\"div\");\r\n  socialMediaDiv.classList.add(\"social-media\");\r\n\r\n  [\"Instagram\", \"Twitter\"].forEach(name => {\r\n    const aEl = document.createElement(\"a\");\r\n    aEl.classList.add(\"social-media__link\");\r\n    aEl.setAttribute(\"target\", \"_blank\");\r\n    aEl.innerText = name;\r\n    socialMediaDiv.appendChild(aEl);\r\n  });\r\n\r\n  containerDiv.appendChild(socialMediaDiv);\r\n\r\n  /* Signup Form Container */\r\n\r\n  const signUpDiv = document.createElement(\"div\");\r\n  signUpDiv.classList.add(\"signup\");\r\n\r\n  const formEl = document.createElement(\"form\");\r\n  formEl.classList.add(\"signup-form\");\r\n\r\n  const inputText = document.createElement(\"input\");\r\n  inputText.classList.add(\"signup-form__text\");\r\n  inputText.setAttribute(\"type\", \"text\");\r\n  inputText.setAttribute(\"placeholder\", \"Email address\");\r\n  formEl.appendChild(inputText);\r\n\r\n  const signUpBtn = document.createElement(\"button\");\r\n  signUpBtn.classList.add(\"btn\", \"btn--signup-form\");\r\n  signUpBtn.innerText = \"SIGNUP\";\r\n  formEl.appendChild(signUpBtn);\r\n\r\n  signUpDiv.appendChild(formEl);\r\n\r\n  const signUpCopyEl = document.createElement(\"p\");\r\n  signUpCopyEl.classList.add(\"signup__copy\");\r\n  signUpCopyEl.innerText =\r\n    \"Sign up to our newsletter to receive all the news, events and updates\";\r\n\r\n  signUpDiv.appendChild(signUpCopyEl);\r\n  containerDiv.appendChild(signUpDiv);\r\n\r\n  footerEl.appendChild(containerDiv);\r\n\r\n  return footerEl;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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