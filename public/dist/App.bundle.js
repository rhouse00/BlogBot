/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _sidebar = __webpack_require__(2);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _curationPicker = __webpack_require__(3);

var _curationPicker2 = _interopRequireDefault(_curationPicker);

var _curationRemover = __webpack_require__(4);

var _curationRemover2 = _interopRequireDefault(_curationRemover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sidebar2.default)('.sidebarTab');
(0, _curationPicker2.default)('.unselected_list', '.selected_list', 'button_remove');
(0, _curationPicker2.default)('.selected_list', '.unselected_list', 'button_add');
// curationRemover('.button_remove', '.unselected_list', 'button_add');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
function sideBar(el) {
   var tabs = document.querySelectorAll(el);

   tabs.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector('.active').classList.remove('active');
         elem.classList.add('active');

         document.querySelectorAll('.tabContent').forEach(function (element) {
            element.style.display = 'none';
         });

         document.getElementById(elem.dataset.name).style.display = 'block';
      });
   });
};

exports.default = sideBar;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

function curationPicker(element, targetElem, newClassName) {
   // const posts = document.querySelectorAll(element);
   var el = document.querySelector(element);
   console.log(el);
   el.addEventListener('click', function (e) {
      e.preventDefault();
      var child = e.target.parentNode.parentNode;
      console.log(child);
      var parNode = e.target.parentNode.parentNode.parentNode;
      console.log(parNode);
      e.target.className = newClassName;
      parNode.removeChild(child);
      document.querySelector(targetElem).appendChild(child);
   });

   // el.addEventListener('click', (e) => {
   //    console.log(e);
   // })
}

exports.default = curationPicker;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

function curationRemover(element, targetElem) {
   var posts = document.querySelectorAll(element);

   posts.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
         e.preventDefault();
         var child = e.target.parentNode.parentNode;
         var parNode = e.target.parentNode.parentNode.parentNode;
         e.target.className = 'button_add';
         parNode.removeChild(child);
         document.querySelector(targetElem).appendChild(child);
      });
   });
}

exports.default = curationRemover;

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map