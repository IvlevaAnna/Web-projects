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

/***/ "./cards.js":
/*!******************!*\
  !*** ./cards.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img1.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img2.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img3.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img4.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\nconst gallery = [\r\n    {\r\n        res: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img1.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\r\n        title: \"Rocks\",\r\n        type: \"image\"\r\n    },\r\n    {\r\n        res: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img2.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\r\n        title: \"Road\",\r\n        type: \"image\"\r\n    },\r\n    {\r\n        res: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img3.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\r\n        title: \"Waterfall\",\r\n        type: \"image\"\r\n    },\r\n    {\r\n        res: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './static/img4.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\r\n        title: \"Nature\",\r\n        type: \"image\"\r\n    },\r\n]\r\n\r\nfor ( let i =0; i < gallery.length; i++) {\r\n    if (gallery[i].type === 'image') {\r\n        const img = new Image()\r\n        img.src = gallery[i].res\r\n\r\n        document.querySelector('.cardBox').insertAdjacentHTML('beforeend', '<div class=\"card\"></div>')\r\n\r\n        document.querySelectorAll('.card')[i].appendChild(img)\r\n        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', gallery[i].title)\r\n\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lesson_3/./cards.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./cards.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://lesson_3/./main.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson_3/./style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;
