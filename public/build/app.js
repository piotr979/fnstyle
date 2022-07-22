(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_dropzone_src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-dropzone/src/style.css */ "./vendor/symfony/ux-dropzone/Resources/assets/src/style.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-dropzone--dropzone': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-dropzone/dist/controller.js */ "./vendor/symfony/ux-dropzone/Resources/assets/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_chapter_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/chapter-navigator */ "./assets/js/chapter-navigator.js");
/* harmony import */ var _js_chapter_navigator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_chapter_navigator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_shopping_cart_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/shopping-cart-manager */ "./assets/js/shopping-cart-manager.js");
/* harmony import */ var _js_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/custom */ "./assets/js/custom.js");
/* harmony import */ var _js_custom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_custom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_search_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/search-form */ "./assets/js/search-form.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)





/* import './js/jquery.min.js';
import './js/jquery.uploadifive.min.js';
*/

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

__webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css"); // start the Stimulus application




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/chapter-navigator.js":
/*!****************************************!*\
  !*** ./assets/js/chapter-navigator.js ***!
  \****************************************/
/***/ (() => {

/* check if screen resizes, than check/uncheck input
 *  if screen size < 80em sidebar is hidden
 *  if bigger (desktop) than show sidebar
 *  it's based on:
 *  https://stackoverflow.com/a/46438472/1496972 
 */
var sidebar = document.getElementById('navigator-sidebar');

if (document.getElementById('navigator-check') != null) {
  if (window.matchMedia('(min-width: 80em').matches) {
    document.getElementById('navigator-check').checked = true;
  }

  window.addEventListener('resize', function () {
    if (window.matchMedia('(max-width: 80em)').matches) {
      document.getElementById('navigator-check').checked = false;
    } else {
      document.getElementById('navigator-check').checked = true;
    }
  }, true);
}

/***/ }),

/***/ "./assets/js/custom.js":
/*!*****************************!*\
  !*** ./assets/js/custom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

// *********
// SLIDER
// **********
var slides = document.querySelectorAll("#my-slider > .slide"); // const slides = slider.children;

if (slides.length > 0) {
  slides.item(0).style.opacity = 1;
  var slidesCount = slides.length;
  var currentSlide = 0;
  var nextSlide = 1;
  var slideText = document.querySelectorAll(".slide-text__head");
  var slideSubText = document.querySelectorAll(".slide-text__subhead");
  console.log(slideText);
  setInterval(function () {
    slides.item(currentSlide).style.opacity = 0;
    nextSlide = nextSlide == slidesCount - 1 ? 0 : currentSlide + 1;
    console.log(currentSlide);
    console.log(slideText.length);

    if (currentSlide < slideText.length) {
      slideText[currentSlide].classList.remove("animate__slideInUp");
      slideSubText[currentSlide].classList.remove("animate__slideInUp");
    } // here currentSlide is previous slide


    currentSlide = nextSlide;
    slides.item(nextSlide).style.opacity = 1; //if must be repeated for the some condition, need to find better way

    if (currentSlide < slideText.length) {
      slideText[currentSlide].classList.add("animate__slideInUp");
      slideSubText[currentSlide].classList.add("animate__slideInUp");
    }
  }, 5000);
}

var modalButton = document.getElementById('cart-modal');
var switchButton = document.getElementById('cart-modal-switcher');
var main = document.getElementById('main');

var transformModal = function transformModal() {
  main.classList.toggle("nav-open");
};

if (switchButton != null && modalButton != null) {
  switchButton.addEventListener('click', function () {
    transformModal();
  });
  modalButton.addEventListener('click', function () {
    transformModal();
  });
}

/***/ }),

/***/ "./assets/js/search-form.js":
/*!**********************************!*\
  !*** ./assets/js/search-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default().setRoutingData(routes);
document.addEventListener('DOMContentLoaded', function () {
  var searchForm = document.getElementById('top-search-form');
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var searchString = document.getElementById('search-string').value;
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default().generate('items_filter', {
      'searchText': searchString
    });
    location.href = url;
  });
});

/***/ }),

/***/ "./assets/js/shopping-cart-manager.js":
/*!********************************************!*\
  !*** ./assets/js/shopping-cart-manager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopping_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-cart */ "./assets/js/shopping-cart.js");









var colorSelect = document.getElementById('color-select');
var sizeSelect = document.getElementById('size-select');
var productPriceItem = document.getElementById('product-price');
var totalPriceInCart = document.getElementById('total-price'); // displays final price for products in modal shipping cart

var shoppingCart = new _shopping_cart__WEBPACK_IMPORTED_MODULE_8__["default"](); // just creates "p" element

var addParagraph = function addParagraph(text, listItem, classesArray) {
  var item = document.createElement('p');
  item.innerText = text;
  classesArray.forEach(function (className) {
    item.classList.add(className);
  });
  listItem.appendChild(item);
}; // creates "p" element and then inside of it a "small" one


var addSmallText = function addSmallText(text, listItem, classes) {
  var parentItem = document.createElement('p');
  var smallItem = document.createElement('small');
  smallItem.innerText = text;
  parentItem.classList.add(classes);
  parentItem.appendChild(smallItem);
  listItem.appendChild(parentItem);
};

var updateNumberByCartButton = function updateNumberByCartButton() {
  var cartAnchor = document.getElementById('cart-anchor');
  cartAnchor.innerText = "(".concat(shoppingCart.cartItems.length, ")");
};

var populateList = function populateList(shoppingUl) {
  // shoppingUl is HTML collection
  // shoppingCart is JS array of objects
  while (shoppingUl.firstChild) {
    shoppingUl.removeChild(shoppingUl.firstChild);
  } //populate list again


  shoppingCart.cartItems.forEach(function (shoppingItem) {
    var li = document.createElement("li");
    addParagraph(shoppingItem.brand, li, ['fw-bold', 'mb-0']);
    addParagraph(shoppingItem.name, li, ['mb-1']);
    addSmallText('Quantity: ' + shoppingItem.qty, li, 'mb-0');
    addSmallText('Color: ' + shoppingItem.color, li, 'mb-0');
    addSmallText('Size: ' + shoppingItem.size, li, 'mb-0');
    var hrLine = document.createElement('hr');
    li.appendChild(hrLine);
    shoppingUl.appendChild(li);
  }); // Calculates and displays total price for all products in the bag

  totalPriceInCart.innerText = shoppingCart.calculateTotalPrice().toFixed(2);
};

document.addEventListener('DOMContentLoaded', function () {
  var shoppingUl = document.getElementById('shopping-list-ul');
  populateList(shoppingUl);
  var addToCartBtn = document.getElementById('add-to-cart-button');
  var deleteConfirmButtons = document.querySelectorAll('.delete-confirm-button');
  updateNumberByCartButton();

  if (addToCartBtn != null) {
    addToCartBtn.addEventListener('click', function (e) {
      var productId = addToCartBtn.dataset.id;
      var productBrand = addToCartBtn.dataset.productname;
      var productModel = addToCartBtn.dataset.productmodel;
      var productPrice = productPriceItem.dataset.price;
      var qty = parseInt(document.getElementById('amount-input').value);
      var color = colorSelect.value;
      var size = sizeSelect.value;
      shoppingCart.addItemToCart({
        id: productId,
        qty: qty,
        brand: productBrand,
        name: productModel,
        color: color,
        size: size,
        price: productPrice
      });
      populateList(shoppingUl); // changes button text for a second when new item is added
      // its' asynchronous therefore "Added to cart" will be displayed first.

      setInterval(function () {
        console.log("test");
        buttonSwitchWithColors(addToCartBtn, 'Add to cart', 'black', 'white');
      }, 2400);
      addToCartBtn.innerText = "Added to cart!";
      buttonSwitchWithColors(addToCartBtn, 'Added to cart!', 'white', 'black'); // button "animate" ends here

      updateNumberByCartButton();
      var response = fetch("/../checkout", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          data: shoppingCart.cartItems
        })
      }).then(function (response) {
        console.log(response.status);

        if (response.status === 200) {
          return response.text();
        }
      }).then(function (response) {
        console.log(response);
      });
    });
  } // When the delete button is clicked on shopping-bag page 
  // it removes item from localStorage Jsoned array
  // and from session


  if (deleteConfirmButtons != null) {
    deleteConfirmButtons.forEach(function (button) {
      button.addEventListener('click', function (ev) {
        var id = ev.target.dataset.id;
        shoppingCart.removeItemFromCart(id);
        location.href = "/delete-from-bag/".concat(id);
      });
    });
  }
});

var buttonSwitchWithColors = function buttonSwitchWithColors(button, text, foregroundColor, backgroundColor) {
  button.innerText = text;
  button.style.backgroundColor = foregroundColor;
  button.style.color = backgroundColor;
};

/***/ }),

/***/ "./assets/js/shopping-cart.js":
/*!************************************!*\
  !*** ./assets/js/shopping-cart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShoppingCart)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ShoppingCart = /*#__PURE__*/function () {
  /** This scripts adds items to shopping cart, but 
   * is stored in localStorage only not in SessionStorage
   */
  function ShoppingCart() {
    _classCallCheck(this, ShoppingCart);

    // It will storage all shopping cart items here
    this.cartItems = [];
    this.cartItems = this.getDataFromStorage();
    this.totalPrice = this.calculateTotalPrice();
  }

  _createClass(ShoppingCart, [{
    key: "calculateTotalPrice",
    value: function calculateTotalPrice() {
      if (this.cartItems.length > 0) {
        var _totalPrice = 0;
        this.cartItems.forEach(function (item) {
          _totalPrice += item.qty * item.price;
        });
        return _totalPrice;
      }

      return 0;
    }
  }, {
    key: "getDataFromStorage",
    value: function getDataFromStorage() {
      if (localStorage.getItem('cartItems') === null || localStorage.getItem('cartItems').length === 0) {
        return [];
      } else {
        return JSON.parse(localStorage.getItem('cartItems'));
      }
    }
  }, {
    key: "setDataInStorage",
    value: function setDataInStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }, {
    key: "setTotalPriceInStorage",
    value: function setTotalPriceInStorage() {
      localStorage.setItem('totalPrice', totalPrice());
    }
  }, {
    key: "totalPrice",
    value: function totalPrice() {}
  }, {
    key: "addItemToCart",
    value: function addItemToCart(product) {
      // check if item is in the array already
      var searchObjectIdx = this.cartItems.findIndex(function (item) {
        return item.id == product.id;
      });

      if (searchObjectIdx === -1) {
        this.cartItems.push(product);
        this.setDataInStorage();
      } else {
        this.cartItems[searchObjectIdx].qty += 1;
        this.setDataInStorage();
      }
    }
  }, {
    key: "removeItemFromCart",
    value: function removeItemFromCart(id) {
      var data = this.getDataFromStorage();
      console.log(id);
      var searchObjectIdx = data.findIndex(function (item) {
        // id must be parsed to Int, otherwise doesn't work
        return item.id == parseInt(id);
      });
      data.splice(searchObjectIdx, 1);
      localStorage.setItem('cartItems', JSON.stringify(data));
    }
  }, {
    key: "removeAllItems",
    value: function removeAllItems() {
      this.cartItems = [];
      localStorage.setItem('cartItems', []);
    }
  }]);

  return ShoppingCart;
}();



/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

!function (e) {
  (t = {}).__esModule = !0, t.Routing = t.Router = void 0, o = function () {
    function l(e, t) {
      this.context_ = e || {
        base_url: "",
        prefix: "",
        host: "",
        port: "",
        scheme: "",
        locale: ""
      }, this.setRoutes(t || {});
    }

    return l.getInstance = function () {
      return t.Routing;
    }, l.setData = function (e) {
      l.getInstance().setRoutingData(e);
    }, l.prototype.setRoutingData = function (e) {
      this.setBaseUrl(e.base_url), this.setRoutes(e.routes), void 0 !== e.prefix && this.setPrefix(e.prefix), void 0 !== e.port && this.setPort(e.port), void 0 !== e.locale && this.setLocale(e.locale), this.setHost(e.host), void 0 !== e.scheme && this.setScheme(e.scheme);
    }, l.prototype.setRoutes = function (e) {
      this.routes_ = Object.freeze(e);
    }, l.prototype.getRoutes = function () {
      return this.routes_;
    }, l.prototype.setBaseUrl = function (e) {
      this.context_.base_url = e;
    }, l.prototype.getBaseUrl = function () {
      return this.context_.base_url;
    }, l.prototype.setPrefix = function (e) {
      this.context_.prefix = e;
    }, l.prototype.setScheme = function (e) {
      this.context_.scheme = e;
    }, l.prototype.getScheme = function () {
      return this.context_.scheme;
    }, l.prototype.setHost = function (e) {
      this.context_.host = e;
    }, l.prototype.getHost = function () {
      return this.context_.host;
    }, l.prototype.setPort = function (e) {
      this.context_.port = e;
    }, l.prototype.getPort = function () {
      return this.context_.port;
    }, l.prototype.setLocale = function (e) {
      this.context_.locale = e;
    }, l.prototype.getLocale = function () {
      return this.context_.locale;
    }, l.prototype.buildQueryParams = function (o, e, n) {
      var t,
          r = this,
          s = new RegExp(/\[\]$/);
      if (e instanceof Array) e.forEach(function (e, t) {
        s.test(o) ? n(o, e) : r.buildQueryParams(o + "[" + ("object" == _typeof(e) ? t : "") + "]", e, n);
      });else if ("object" == _typeof(e)) for (t in e) {
        this.buildQueryParams(o + "[" + t + "]", e[t], n);
      } else n(o, e);
    }, l.prototype.getRoute = function (e) {
      var t,
          o = [this.context_.prefix + e, e + "." + this.context_.locale, this.context_.prefix + e + "." + this.context_.locale, e];

      for (t in o) {
        if (o[t] in this.routes_) return this.routes_[o[t]];
      }

      throw new Error('The route "' + e + '" does not exist.');
    }, l.prototype.generate = function (r, e, p) {
      var t,
          s = this.getRoute(r),
          i = e || {},
          u = Object.assign({}, i),
          c = "",
          a = !0,
          o = "",
          e = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();

      if (s.tokens.forEach(function (e) {
        if ("text" === e[0] && "string" == typeof e[1]) return c = l.encodePathComponent(e[1]) + c, void (a = !1);
        if ("variable" !== e[0]) throw new Error('The token type "' + e[0] + '" is not supported.');
        6 === e.length && !0 === e[5] && (a = !1);
        var t = s.defaults && !Array.isArray(s.defaults) && "string" == typeof e[3] && e[3] in s.defaults;

        if (!1 === a || !t || "string" == typeof e[3] && e[3] in i && !Array.isArray(s.defaults) && i[e[3]] != s.defaults[e[3]]) {
          var o,
              n = void 0;
          if ("string" == typeof e[3] && e[3] in i) n = i[e[3]], delete u[e[3]];else {
            if ("string" != typeof e[3] || !t || Array.isArray(s.defaults)) {
              if (a) return;
              throw new Error('The route "' + r + '" requires the parameter "' + e[3] + '".');
            }

            n = s.defaults[e[3]];
          }
          (!0 === n || !1 === n || "" === n) && a || (o = l.encodePathComponent(n), c = e[1] + (o = "null" === o && null === n ? "" : o) + c), a = !1;
        } else t && "string" == typeof e[3] && e[3] in u && delete u[e[3]];
      }), "" === c && (c = "/"), s.hosttokens.forEach(function (e) {
        var t;
        "text" !== e[0] ? "variable" === e[0] && (e[3] in i ? (t = i[e[3]], delete u[e[3]]) : s.defaults && !Array.isArray(s.defaults) && e[3] in s.defaults && (t = s.defaults[e[3]]), o = e[1] + t + o) : o = e[1] + o;
      }), c = this.context_.base_url + c, s.requirements && "_scheme" in s.requirements && this.getScheme() != s.requirements._scheme ? (t = o || this.getHost(), c = s.requirements._scheme + "://" + t + (-1 < t.indexOf(":" + e) || "" === e ? "" : ":" + e) + c) : void 0 !== s.schemes && void 0 !== s.schemes[0] && this.getScheme() !== s.schemes[0] ? (t = o || this.getHost(), c = s.schemes[0] + "://" + t + (-1 < t.indexOf(":" + e) || "" === e ? "" : ":" + e) + c) : o && this.getHost() !== o + (-1 < o.indexOf(":" + e) || "" === e ? "" : ":" + e) ? c = this.getScheme() + "://" + o + (-1 < o.indexOf(":" + e) || "" === e ? "" : ":" + e) + c : !0 === p && (c = this.getScheme() + "://" + this.getHost() + (-1 < this.getHost().indexOf(":" + e) || "" === e ? "" : ":" + e) + c), 0 < Object.keys(u).length) {
        var f = function f(e, t) {
          t = null === (t = "function" == typeof t ? t() : t) ? "" : t, h.push(l.encodeQueryComponent(e) + "=" + l.encodeQueryComponent(t));
        };

        var n,
            h = [];

        for (n in u) {
          u.hasOwnProperty(n) && this.buildQueryParams(n, u[n], f);
        }

        c = c + "?" + h.join("&");
      }

      return c;
    }, l.customEncodeURIComponent = function (e) {
      return encodeURIComponent(e).replace(/%2F/g, "/").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%21/g, "!").replace(/%3B/g, ";").replace(/%2C/g, ",").replace(/%2A/g, "*").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27");
    }, l.encodePathComponent = function (e) {
      return l.customEncodeURIComponent(e).replace(/%3D/g, "=").replace(/%2B/g, "+").replace(/%21/g, "!").replace(/%7C/g, "|");
    }, l.encodeQueryComponent = function (e) {
      return l.customEncodeURIComponent(e).replace(/%3F/g, "?");
    }, l;
  }(), t.Router = o, t.Routing = new o(), t["default"] = t.Routing;
  var t,
      o = {
    Router: t.Router,
    Routing: t.Routing
  };
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (o.Routing),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this);

/***/ }),

/***/ "./vendor/symfony/ux-dropzone/Resources/assets/dist/controller.js":
/*!************************************************************************!*\
  !*** ./vendor/symfony/ux-dropzone/Resources/assets/dist/controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);

  var _super = _createSuper(default_1);

  function default_1() {
    _classCallCheck(this, default_1);

    return _super.apply(this, arguments);
  }

  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.clear();
      this.previewClearButtonTarget.addEventListener('click', function () {
        return _this.clear();
      });
      this.inputTarget.addEventListener('change', function (event) {
        return _this.onInputChange(event);
      });

      this._dispatchEvent('dropzone:connect');
    }
  }, {
    key: "clear",
    value: function clear() {
      this.inputTarget.value = '';
      this.inputTarget.style.display = 'block';
      this.placeholderTarget.style.display = 'block';
      this.previewTarget.style.display = 'none';
      this.previewImageTarget.style.display = 'none';
      this.previewImageTarget.style.backgroundImage = 'none';
      this.previewFilenameTarget.textContent = '';

      this._dispatchEvent('dropzone:clear');
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      var file = event.target.files[0];

      if (typeof file === 'undefined') {
        return;
      }

      this.inputTarget.style.display = 'none';
      this.placeholderTarget.style.display = 'none';
      this.previewFilenameTarget.textContent = file.name;
      this.previewTarget.style.display = 'flex';
      this.previewImageTarget.style.display = 'none';

      if (file.type && file.type.indexOf('image') !== -1) {
        this._populateImagePreview(file);
      }

      this._dispatchEvent('dropzone:change', file);
    }
  }, {
    key: "_populateImagePreview",
    value: function _populateImagePreview(file) {
      var _this2 = this;

      if (typeof FileReader === 'undefined') {
        return;
      }

      var reader = new FileReader();
      reader.addEventListener('load', function (event) {
        _this2.previewImageTarget.style.display = 'block';
        _this2.previewImageTarget.style.backgroundImage = 'url("' + event.target.result + '")';
      });
      reader.readAsDataURL(file);
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(name) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.element.dispatchEvent(new CustomEvent(name, {
        detail: payload
      }));
    }
  }]);

  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);

default_1.targets = ['input', 'placeholder', 'preview', 'previewClearButton', 'previewFilename', 'previewImage'];


/***/ }),

/***/ "./vendor/symfony/ux-dropzone/Resources/assets/src/style.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-dropzone/Resources/assets/src/style.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"items_filter":{"tokens":[["variable","/","[^/]++","sortBy",true],["variable","/","[^/]++","searchText",true],["variable","/","[^/]++","category",true],["variable","/","[^/]++","priceTo",true],["variable","/","[^/]++","priceFrom",true],["variable","/","[^/]++","brands",true],["variable","/","[^/]++","sizes",true],["text","/items-filter"]],"defaults":{"sizes":"noSizes","brands":"noBrands","priceFrom":0,"priceTo":99999,"category":"allCats","searchText":"none","sortBy":"noSort"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--a0b2e9","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-2945d7"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjRDO0FBQzVDLGlFQUFlO0FBQ2Ysb0NBQW9DLDZNQUE0RTtBQUNoSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBRUksbUJBQVU7QUFDTixXQUFLQyxPQUFMLENBQWFDLFdBQWIsR0FBMkIsbUVBQTNCO0FBQ0g7Ozs7RUFId0JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQUcsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDJEQUFELENBQVAsRUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ25CQTs7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRCx5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBaEI7O0FBRUEsSUFBSUQsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixLQUE4QyxJQUFsRCxFQUF3RDtBQUNwRCxNQUFJQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0Isa0JBQWxCLEVBQXNDQyxPQUExQyxFQUFtRDtBQUMvQ0osSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0ksT0FBM0MsR0FBcUQsSUFBckQ7QUFHSDs7QUFDREgsRUFBQUEsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzFDLFFBQUlKLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixtQkFBbEIsRUFBdUNDLE9BQTNDLEVBQW9EO0FBQ2hESixNQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDSSxPQUEzQyxHQUFxRCxLQUFyRDtBQUNILEtBRkQsTUFFTztBQUNITCxNQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDSSxPQUEzQyxHQUFxRCxJQUFyRDtBQUNIO0FBQ0osR0FORCxFQU1HLElBTkg7QUFPSDs7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0U7QUFDQTtBQUdBLElBQU1FLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBZixFQUNBOztBQUNBLElBQUlELE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQkYsRUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVksQ0FBWixFQUFlQyxLQUFmLENBQXFCQyxPQUFyQixHQUErQixDQUEvQjtBQUNBLE1BQU1DLFdBQVcsR0FBR04sTUFBTSxDQUFDRSxNQUEzQjtBQUNBLE1BQUlLLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUVBLE1BQU1DLFNBQVMsR0FBR2hCLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWxCO0FBQ0EsTUFBTVMsWUFBWSxHQUFHakIsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixzQkFBMUIsQ0FBckI7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFFQUksRUFBQUEsV0FBVyxDQUNULFlBQVk7QUFDVmIsSUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVlJLFlBQVosRUFBMEJILEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxDQUExQztBQUNBRyxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsSUFBSUYsV0FBVyxHQUFHLENBQTNCLEdBQStCLENBQS9CLEdBQW1DQyxZQUFZLEdBQUcsQ0FBOUQ7QUFFQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFlBQVo7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVMsQ0FBQ1AsTUFBdEI7O0FBR0EsUUFBSUssWUFBWSxHQUFHRSxTQUFTLENBQUNQLE1BQTdCLEVBQXFDO0FBQ25DTyxNQUFBQSxTQUFTLENBQUNGLFlBQUQsQ0FBVCxDQUF3Qk8sU0FBeEIsQ0FBa0NDLE1BQWxDLENBQXlDLG9CQUF6QztBQUNBTCxNQUFBQSxZQUFZLENBQUNILFlBQUQsQ0FBWixDQUEyQk8sU0FBM0IsQ0FBcUNDLE1BQXJDLENBQTRDLG9CQUE1QztBQUNELEtBWFMsQ0FZVjs7O0FBQ0FSLElBQUFBLFlBQVksR0FBR0MsU0FBZjtBQUNBUixJQUFBQSxNQUFNLENBQUNHLElBQVAsQ0FBWUssU0FBWixFQUF1QkosS0FBdkIsQ0FBNkJDLE9BQTdCLEdBQXVDLENBQXZDLENBZFUsQ0FnQlY7O0FBQ0EsUUFBSUUsWUFBWSxHQUFHRSxTQUFTLENBQUNQLE1BQTdCLEVBQXFDO0FBQ25DTyxNQUFBQSxTQUFTLENBQUNGLFlBQUQsQ0FBVCxDQUF3Qk8sU0FBeEIsQ0FBa0NFLEdBQWxDLENBQXNDLG9CQUF0QztBQUNBTixNQUFBQSxZQUFZLENBQUNILFlBQUQsQ0FBWixDQUEyQk8sU0FBM0IsQ0FBcUNFLEdBQXJDLENBQXlDLG9CQUF6QztBQUNEO0FBQ0YsR0F0QlEsRUF3QlQsSUF4QlMsQ0FBWDtBQTBCRDs7QUFHRCxJQUFNQyxXQUFXLEdBQUd4QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBcEI7QUFDQSxJQUFNd0IsWUFBWSxHQUFHekIsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUFyQjtBQUNBLElBQU15QixJQUFJLEdBQUcxQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjs7QUFDQSxJQUFNMEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzVCRCxFQUFBQSxJQUFJLENBQUNMLFNBQUwsQ0FBZU8sTUFBZixDQUFzQixVQUF0QjtBQUNBLENBRkQ7O0FBR0UsSUFBSUgsWUFBWSxJQUFJLElBQWhCLElBQXdCRCxXQUFXLElBQUksSUFBM0MsRUFBa0Q7QUFDcERDLEVBQUFBLFlBQVksQ0FBQ25CLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQVc7QUFDakRxQixJQUFBQSxjQUFjO0FBRWQsR0FIRDtBQU1BSCxFQUFBQSxXQUFXLENBQUNsQixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFXO0FBQ2hEcUIsSUFBQUEsY0FBYztBQUNkLEdBRkQ7QUFHQzs7Ozs7Ozs7Ozs7Ozs7QUMvREgsSUFBTUUsTUFBTSxHQUFHbEMsbUJBQU8sQ0FBQyxnRkFBRCxDQUF0Qjs7QUFDQTtBQUVBbUMsaUlBQUEsQ0FBdUJELE1BQXZCO0FBRUE3QixRQUFRLENBQUNNLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JELE1BQU0wQixVQUFVLEdBQUdoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQW5CO0FBRUErQixFQUFBQSxVQUFVLENBQUMxQixnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxVQUFTMkIsQ0FBVCxFQUFZO0FBQzlDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxZQUFZLEdBQUduQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNtQyxLQUE5RDtBQUVBLFFBQUlDLEdBQUcsR0FBR1AsMkhBQUEsQ0FBaUIsY0FBakIsRUFBaUM7QUFDdkMsb0JBQWNLO0FBRHlCLEtBQWpDLENBQVY7QUFJQUksSUFBQUEsUUFBUSxDQUFDQyxJQUFULEdBQWdCSCxHQUFoQjtBQUNILEdBVEQ7QUFVSCxDQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQSxJQUFJSyxXQUFXLEdBQUcxQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbEI7QUFDQSxJQUFJMEMsVUFBVSxHQUFHM0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWpCO0FBRUEsSUFBSTJDLGdCQUFnQixHQUFHNUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXZCO0FBQ0EsSUFBSTRDLGdCQUFnQixHQUFHN0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXZCLEVBQ0E7O0FBQ0EsSUFBSTZDLFlBQVksR0FBRyxJQUFJTCxzREFBSixFQUFuQixFQUVBOztBQUNBLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFpQkMsWUFBakIsRUFBa0M7QUFDbkQsTUFBSXhDLElBQUksR0FBR1YsUUFBUSxDQUFDbUQsYUFBVCxDQUF1QixHQUF2QixDQUFYO0FBQ0F6QyxFQUFBQSxJQUFJLENBQUMwQyxTQUFMLEdBQWlCSixJQUFqQjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsVUFBQUMsU0FBUyxFQUFJO0FBQzlCNUMsSUFBQUEsSUFBSSxDQUFDVyxTQUFMLENBQWVFLEdBQWYsQ0FBbUIrQixTQUFuQjtBQUNILEdBRkQ7QUFHQUwsRUFBQUEsUUFBUSxDQUFDTSxXQUFULENBQXFCN0MsSUFBckI7QUFDSCxDQVBELEVBU0E7OztBQUNBLElBQU04QyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDUixJQUFELEVBQU9DLFFBQVAsRUFBaUJRLE9BQWpCLEVBQTZCO0FBQzlDLE1BQUlDLFVBQVUsR0FBRzFELFFBQVEsQ0FBQ21ELGFBQVQsQ0FBdUIsR0FBdkIsQ0FBakI7QUFDQSxNQUFJUSxTQUFTLEdBQUczRCxRQUFRLENBQUNtRCxhQUFULENBQXVCLE9BQXZCLENBQWhCO0FBQ0FRLEVBQUFBLFNBQVMsQ0FBQ1AsU0FBVixHQUFzQkosSUFBdEI7QUFDQVUsRUFBQUEsVUFBVSxDQUFDckMsU0FBWCxDQUFxQkUsR0FBckIsQ0FBeUJrQyxPQUF6QjtBQUNBQyxFQUFBQSxVQUFVLENBQUNILFdBQVgsQ0FBdUJJLFNBQXZCO0FBQ0FWLEVBQUFBLFFBQVEsQ0FBQ00sV0FBVCxDQUFxQkcsVUFBckI7QUFDSCxDQVBEOztBQVNBLElBQU1FLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNuQyxNQUFNQyxVQUFVLEdBQUc3RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQTRELEVBQUFBLFVBQVUsQ0FBQ1QsU0FBWCxjQUEyQk4sWUFBWSxDQUFDZ0IsU0FBYixDQUF1QnJELE1BQWxEO0FBQ0gsQ0FIRDs7QUFLQSxJQUFNc0QsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNqQztBQUNBO0FBQ0EsU0FBT0EsVUFBVSxDQUFDQyxVQUFsQixFQUE4QjtBQUMxQkQsSUFBQUEsVUFBVSxDQUFDRSxXQUFYLENBQXVCRixVQUFVLENBQUNDLFVBQWxDO0FBRUgsR0FOZ0MsQ0FPakM7OztBQUNBbkIsRUFBQUEsWUFBWSxDQUFDZ0IsU0FBYixDQUF1QlQsT0FBdkIsQ0FBK0IsVUFBQ2MsWUFBRCxFQUFrQjtBQUM3QyxRQUFNQyxFQUFFLEdBQUdwRSxRQUFRLENBQUNtRCxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUosSUFBQUEsWUFBWSxDQUFDb0IsWUFBWSxDQUFDRSxLQUFkLEVBQXFCRCxFQUFyQixFQUF5QixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQXpCLENBQVo7QUFDQXJCLElBQUFBLFlBQVksQ0FBQ29CLFlBQVksQ0FBQ0csSUFBZCxFQUFvQkYsRUFBcEIsRUFBd0IsQ0FBQyxNQUFELENBQXhCLENBQVo7QUFDQVosSUFBQUEsWUFBWSxDQUFDLGVBQWVXLFlBQVksQ0FBQ0ksR0FBN0IsRUFBa0NILEVBQWxDLEVBQXNDLE1BQXRDLENBQVo7QUFDQVosSUFBQUEsWUFBWSxDQUFDLFlBQVlXLFlBQVksQ0FBQ0ssS0FBMUIsRUFBaUNKLEVBQWpDLEVBQXFDLE1BQXJDLENBQVo7QUFDQVosSUFBQUEsWUFBWSxDQUFDLFdBQVdXLFlBQVksQ0FBQ00sSUFBekIsRUFBK0JMLEVBQS9CLEVBQW1DLE1BQW5DLENBQVo7QUFFQSxRQUFNTSxNQUFNLEdBQUcxRSxRQUFRLENBQUNtRCxhQUFULENBQXVCLElBQXZCLENBQWY7QUFDQWlCLElBQUFBLEVBQUUsQ0FBQ2IsV0FBSCxDQUFlbUIsTUFBZjtBQUNBVixJQUFBQSxVQUFVLENBQUNULFdBQVgsQ0FBdUJhLEVBQXZCO0FBQ0gsR0FYRCxFQVJpQyxDQXFCakM7O0FBQ0F2QixFQUFBQSxnQkFBZ0IsQ0FBQ08sU0FBakIsR0FBNkJOLFlBQVksQ0FBQzZCLG1CQUFiLEdBQW1DQyxPQUFuQyxDQUEyQyxDQUEzQyxDQUE3QjtBQUNILENBdkJEOztBQXdCQTVFLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEQsTUFBTTBELFVBQVUsR0FBR2hFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBbkI7QUFFQThELEVBQUFBLFlBQVksQ0FBQ0MsVUFBRCxDQUFaO0FBQ0EsTUFBTWEsWUFBWSxHQUFHN0UsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQUFyQjtBQUNBLE1BQU02RSxvQkFBb0IsR0FBRzlFLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQTdCO0FBQ0FvRCxFQUFBQSx3QkFBd0I7O0FBRXhCLE1BQUlpQixZQUFZLElBQUksSUFBcEIsRUFBMEI7QUFDdEJBLElBQUFBLFlBQVksQ0FBQ3ZFLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUMyQixDQUFELEVBQU87QUFDMUMsVUFBTThDLFNBQVMsR0FBR0YsWUFBWSxDQUFDRyxPQUFiLENBQXFCQyxFQUF2QztBQUNBLFVBQU1DLFlBQVksR0FBR0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCRyxXQUExQztBQUNBLFVBQU1DLFlBQVksR0FBR1AsWUFBWSxDQUFDRyxPQUFiLENBQXFCSyxZQUExQztBQUNBLFVBQU1DLFlBQVksR0FBRzFDLGdCQUFnQixDQUFDb0MsT0FBakIsQ0FBeUJPLEtBQTlDO0FBQ0EsVUFBTWhCLEdBQUcsR0FBR2lCLFFBQVEsQ0FBQ3hGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q21DLEtBQXpDLENBQXBCO0FBQ0EsVUFBTW9DLEtBQUssR0FBRzlCLFdBQVcsQ0FBQ04sS0FBMUI7QUFDQSxVQUFNcUMsSUFBSSxHQUFHOUIsVUFBVSxDQUFDUCxLQUF4QjtBQUVBVSxNQUFBQSxZQUFZLENBQUMyQyxhQUFiLENBQTJCO0FBQ3ZCUixRQUFBQSxFQUFFLEVBQUVGLFNBRG1CO0FBRXZCUixRQUFBQSxHQUFHLEVBQUVBLEdBRmtCO0FBR3ZCRixRQUFBQSxLQUFLLEVBQUVhLFlBSGdCO0FBSXZCWixRQUFBQSxJQUFJLEVBQUVjLFlBSmlCO0FBS3ZCWixRQUFBQSxLQUFLLEVBQUVBLEtBTGdCO0FBTXZCQyxRQUFBQSxJQUFJLEVBQUVBLElBTmlCO0FBT3ZCYyxRQUFBQSxLQUFLLEVBQUVEO0FBUGdCLE9BQTNCO0FBVUF2QixNQUFBQSxZQUFZLENBQUNDLFVBQUQsQ0FBWixDQW5CMEMsQ0FxQjFDO0FBQ0E7O0FBQ0E1QyxNQUFBQSxXQUFXLENBQUUsWUFBTTtBQUNmRixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0F1RSxRQUFBQSxzQkFBc0IsQ0FDbEJiLFlBRGtCLEVBRWxCLGFBRmtCLEVBR2xCLE9BSGtCLEVBSWxCLE9BSmtCLENBQXRCO0FBT0gsT0FUVSxFQVNSLElBVFEsQ0FBWDtBQVVBQSxNQUFBQSxZQUFZLENBQUN6QixTQUFiLEdBQXlCLGdCQUF6QjtBQUNBc0MsTUFBQUEsc0JBQXNCLENBQ2xCYixZQURrQixFQUVsQixnQkFGa0IsRUFHbEIsT0FIa0IsRUFJbEIsT0FKa0IsQ0FBdEIsQ0FsQzBDLENBd0MxQzs7QUFFQWpCLE1BQUFBLHdCQUF3QjtBQUN4QixVQUFJK0IsUUFBUSxHQUFHQyxLQUFLLENBQUMsY0FBRCxFQUFpQjtBQUNqQ0MsUUFBQUEsTUFBTSxFQUFFLE1BRHlCO0FBRWpDQyxRQUFBQSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0I7QUFEWCxTQUZ3QjtBQUtqQ0MsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQkMsVUFBQUEsSUFBSSxFQUFFcEQsWUFBWSxDQUFDZ0I7QUFERixTQUFmO0FBTDJCLE9BQWpCLENBQUwsQ0FRWnFDLElBUlksQ0FRUCxVQUFDUixRQUFELEVBQWM7QUFDbEJ6RSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXdFLFFBQVEsQ0FBQ1MsTUFBckI7O0FBQ0EsWUFBSVQsUUFBUSxDQUFDUyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGlCQUFPVCxRQUFRLENBQUMzQyxJQUFULEVBQVA7QUFDSDtBQUNKLE9BYmMsRUFhWm1ELElBYlksQ0FhUCxVQUFDUixRQUFELEVBQWM7QUFDbEJ6RSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXdFLFFBQVo7QUFDSCxPQWZjLENBQWY7QUFnQkgsS0EzREQ7QUE0REgsR0FyRXFELENBdUV0RDtBQUNBO0FBQ0E7OztBQUVBLE1BQUliLG9CQUFvQixJQUFJLElBQTVCLEVBQWtDO0FBQzlCQSxJQUFBQSxvQkFBb0IsQ0FBQ3pCLE9BQXJCLENBQThCLFVBQUFnRCxNQUFNLEVBQUs7QUFDckNBLE1BQUFBLE1BQU0sQ0FBQy9GLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUNnRyxFQUFELEVBQVE7QUFDdEMsWUFBTXJCLEVBQUUsR0FBR3FCLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVdkIsT0FBVixDQUFrQkMsRUFBN0I7QUFDQW5DLFFBQUFBLFlBQVksQ0FBQzBELGtCQUFiLENBQWdDdkIsRUFBaEM7QUFDQTFDLFFBQUFBLFFBQVEsQ0FBQ0MsSUFBVCw4QkFBb0N5QyxFQUFwQztBQUNOLE9BSkc7QUFLUCxLQU5HO0FBT0g7QUFDSixDQXBGRDs7QUFxRkEsSUFBTVMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDVyxNQUFELEVBQVNyRCxJQUFULEVBQWN5RCxlQUFkLEVBQStCQyxlQUEvQixFQUFtRDtBQUM5RUwsRUFBQUEsTUFBTSxDQUFDakQsU0FBUCxHQUFtQkosSUFBbkI7QUFDQXFELEVBQUFBLE1BQU0sQ0FBQzFGLEtBQVAsQ0FBYStGLGVBQWIsR0FBK0JELGVBQS9CO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQzFGLEtBQVAsQ0FBYTZELEtBQWIsR0FBcUJrQyxlQUFyQjtBQUNILENBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoSnFCakU7QUFFakI7QUFDSjtBQUNBO0FBQ0ksMEJBQWM7QUFBQTs7QUFDVjtBQUNBLFNBQUtxQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0EsU0FBTCxHQUFpQixLQUFLNkMsa0JBQUwsRUFBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtqQyxtQkFBTCxFQUFsQjtBQUNIOzs7O1dBQ0QsK0JBQXNCO0FBQ2xCLFVBQUksS0FBS2IsU0FBTCxDQUFlckQsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUMzQixZQUFJbUcsV0FBVSxHQUFHLENBQWpCO0FBQ0EsYUFBSzlDLFNBQUwsQ0FBZVQsT0FBZixDQUF3QixVQUFBM0MsSUFBSSxFQUFJO0FBQzVCa0csVUFBQUEsV0FBVSxJQUFJbEcsSUFBSSxDQUFDNkQsR0FBTCxHQUFXN0QsSUFBSSxDQUFDNkUsS0FBOUI7QUFDSCxTQUZEO0FBR0EsZUFBT3FCLFdBQVA7QUFDSDs7QUFDRCxhQUFPLENBQVA7QUFDSDs7O1dBQ0QsOEJBQXFCO0FBQ2pCLFVBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixNQUFzQyxJQUF0QyxJQUNHRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NyRyxNQUFsQyxLQUE2QyxDQURwRCxFQUN1RDtBQUNuRCxlQUFPLEVBQVA7QUFDSCxPQUhELE1BR087QUFDUixlQUFPdUYsSUFBSSxDQUFDZSxLQUFMLENBQVdGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFYLENBQVA7QUFDRTtBQUNKOzs7V0FDRCw0QkFBbUI7QUFDZkQsTUFBQUEsWUFBWSxDQUFDRyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDaEIsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS25DLFNBQXBCLENBQWxDO0FBQ0g7OztXQUNELGtDQUF5QjtBQUNyQitDLE1BQUFBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixZQUFyQixFQUFtQ0osVUFBVSxFQUE3QztBQUNIOzs7V0FDRCxzQkFBYSxDQUVaOzs7V0FDRCx1QkFBY0ssT0FBZCxFQUF1QjtBQUNuQjtBQUNBLFVBQU1DLGVBQWUsR0FBRyxLQUFLcEQsU0FBTCxDQUFlcUQsU0FBZixDQUF5QixVQUFDekcsSUFBRCxFQUFVO0FBQ3ZELGVBQU9BLElBQUksQ0FBQ3VFLEVBQUwsSUFBV2dDLE9BQU8sQ0FBQ2hDLEVBQTFCO0FBQ0YsT0FGc0IsQ0FBeEI7O0FBR0EsVUFBSWlDLGVBQWUsS0FBSyxDQUFFLENBQTFCLEVBQTZCO0FBQ3pCLGFBQUtwRCxTQUFMLENBQWVzRCxJQUFmLENBQW9CSCxPQUFwQjtBQUNBLGFBQUtJLGdCQUFMO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsYUFBS3ZELFNBQUwsQ0FBZW9ELGVBQWYsRUFBZ0MzQyxHQUFoQyxJQUF1QyxDQUF2QztBQUNBLGFBQUs4QyxnQkFBTDtBQUNIO0FBQ0o7OztXQUNELDRCQUFtQnBDLEVBQW5CLEVBQXVCO0FBQ25CLFVBQUlpQixJQUFJLEdBQUcsS0FBS1Msa0JBQUwsRUFBWDtBQUNBekYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk4RCxFQUFaO0FBQ0EsVUFBTWlDLGVBQWUsR0FBR2hCLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZ0IsVUFBQXpHLElBQUksRUFBSTtBQUM1QztBQUNBLGVBQU9BLElBQUksQ0FBQ3VFLEVBQUwsSUFBV08sUUFBUSxDQUFDUCxFQUFELENBQTFCO0FBQ0YsT0FIc0IsQ0FBeEI7QUFJQWlCLE1BQUFBLElBQUksQ0FBQ29CLE1BQUwsQ0FBWUosZUFBWixFQUE0QixDQUE1QjtBQUNBTCxNQUFBQSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NoQixJQUFJLENBQUNDLFNBQUwsQ0FBZUMsSUFBZixDQUFsQztBQUVIOzs7V0FDRCwwQkFBaUI7QUFDYixXQUFLcEMsU0FBTCxHQUFpQixFQUFqQjtBQUNBK0MsTUFBQUEsWUFBWSxDQUFDRyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLEVBQWxDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVMLENBQUMsVUFBUy9FLENBQVQsRUFBVztBQUFDLEdBQUNzRixDQUFDLEdBQUMsRUFBSCxFQUFPQyxVQUFQLEdBQWtCLENBQUMsQ0FBbkIsRUFBcUJELENBQUMsQ0FBQ3pGLE9BQUYsR0FBVXlGLENBQUMsQ0FBQ0UsTUFBRixHQUFTLEtBQUssQ0FBN0MsRUFBK0NDLENBQUMsR0FBQyxZQUFVO0FBQUMsYUFBU0MsQ0FBVCxDQUFXMUYsQ0FBWCxFQUFhc0YsQ0FBYixFQUFlO0FBQUMsV0FBS0ssUUFBTCxHQUFjM0YsQ0FBQyxJQUFFO0FBQUM0RixRQUFBQSxRQUFRLEVBQUMsRUFBVjtBQUFhQyxRQUFBQSxNQUFNLEVBQUMsRUFBcEI7QUFBdUJDLFFBQUFBLElBQUksRUFBQyxFQUE1QjtBQUErQkMsUUFBQUEsSUFBSSxFQUFDLEVBQXBDO0FBQXVDQyxRQUFBQSxNQUFNLEVBQUMsRUFBOUM7QUFBaURDLFFBQUFBLE1BQU0sRUFBQztBQUF4RCxPQUFqQixFQUE2RSxLQUFLQyxTQUFMLENBQWVaLENBQUMsSUFBRSxFQUFsQixDQUE3RTtBQUFtRzs7QUFBQSxXQUFPSSxDQUFDLENBQUNTLFdBQUYsR0FBYyxZQUFVO0FBQUMsYUFBT2IsQ0FBQyxDQUFDekYsT0FBVDtBQUFpQixLQUExQyxFQUEyQzZGLENBQUMsQ0FBQ1UsT0FBRixHQUFVLFVBQVNwRyxDQUFULEVBQVc7QUFBQzBGLE1BQUFBLENBQUMsQ0FBQ1MsV0FBRixHQUFnQnJHLGNBQWhCLENBQStCRSxDQUEvQjtBQUFrQyxLQUFuRyxFQUFvRzBGLENBQUMsQ0FBQ1csU0FBRixDQUFZdkcsY0FBWixHQUEyQixVQUFTRSxDQUFULEVBQVc7QUFBQyxXQUFLc0csVUFBTCxDQUFnQnRHLENBQUMsQ0FBQzRGLFFBQWxCLEdBQTRCLEtBQUtNLFNBQUwsQ0FBZWxHLENBQUMsQ0FBQ0osTUFBakIsQ0FBNUIsRUFBcUQsS0FBSyxDQUFMLEtBQVNJLENBQUMsQ0FBQzZGLE1BQVgsSUFBbUIsS0FBS1UsU0FBTCxDQUFldkcsQ0FBQyxDQUFDNkYsTUFBakIsQ0FBeEUsRUFBaUcsS0FBSyxDQUFMLEtBQVM3RixDQUFDLENBQUMrRixJQUFYLElBQWlCLEtBQUtTLE9BQUwsQ0FBYXhHLENBQUMsQ0FBQytGLElBQWYsQ0FBbEgsRUFBdUksS0FBSyxDQUFMLEtBQVMvRixDQUFDLENBQUNpRyxNQUFYLElBQW1CLEtBQUtRLFNBQUwsQ0FBZXpHLENBQUMsQ0FBQ2lHLE1BQWpCLENBQTFKLEVBQW1MLEtBQUtTLE9BQUwsQ0FBYTFHLENBQUMsQ0FBQzhGLElBQWYsQ0FBbkwsRUFBd00sS0FBSyxDQUFMLEtBQVM5RixDQUFDLENBQUNnRyxNQUFYLElBQW1CLEtBQUtXLFNBQUwsQ0FBZTNHLENBQUMsQ0FBQ2dHLE1BQWpCLENBQTNOO0FBQW9QLEtBQS9YLEVBQWdZTixDQUFDLENBQUNXLFNBQUYsQ0FBWUgsU0FBWixHQUFzQixVQUFTbEcsQ0FBVCxFQUFXO0FBQUMsV0FBSzRHLE9BQUwsR0FBYUMsTUFBTSxDQUFDQyxNQUFQLENBQWM5RyxDQUFkLENBQWI7QUFBOEIsS0FBaGMsRUFBaWMwRixDQUFDLENBQUNXLFNBQUYsQ0FBWVUsU0FBWixHQUFzQixZQUFVO0FBQUMsYUFBTyxLQUFLSCxPQUFaO0FBQW9CLEtBQXRmLEVBQXVmbEIsQ0FBQyxDQUFDVyxTQUFGLENBQVlDLFVBQVosR0FBdUIsVUFBU3RHLENBQVQsRUFBVztBQUFDLFdBQUsyRixRQUFMLENBQWNDLFFBQWQsR0FBdUI1RixDQUF2QjtBQUF5QixLQUFuakIsRUFBb2pCMEYsQ0FBQyxDQUFDVyxTQUFGLENBQVlXLFVBQVosR0FBdUIsWUFBVTtBQUFDLGFBQU8sS0FBS3JCLFFBQUwsQ0FBY0MsUUFBckI7QUFBOEIsS0FBcG5CLEVBQXFuQkYsQ0FBQyxDQUFDVyxTQUFGLENBQVlFLFNBQVosR0FBc0IsVUFBU3ZHLENBQVQsRUFBVztBQUFDLFdBQUsyRixRQUFMLENBQWNFLE1BQWQsR0FBcUI3RixDQUFyQjtBQUF1QixLQUE5cUIsRUFBK3FCMEYsQ0FBQyxDQUFDVyxTQUFGLENBQVlNLFNBQVosR0FBc0IsVUFBUzNHLENBQVQsRUFBVztBQUFDLFdBQUsyRixRQUFMLENBQWNLLE1BQWQsR0FBcUJoRyxDQUFyQjtBQUF1QixLQUF4dUIsRUFBeXVCMEYsQ0FBQyxDQUFDVyxTQUFGLENBQVlZLFNBQVosR0FBc0IsWUFBVTtBQUFDLGFBQU8sS0FBS3RCLFFBQUwsQ0FBY0ssTUFBckI7QUFBNEIsS0FBdHlCLEVBQXV5Qk4sQ0FBQyxDQUFDVyxTQUFGLENBQVlLLE9BQVosR0FBb0IsVUFBUzFHLENBQVQsRUFBVztBQUFDLFdBQUsyRixRQUFMLENBQWNHLElBQWQsR0FBbUI5RixDQUFuQjtBQUFxQixLQUE1MUIsRUFBNjFCMEYsQ0FBQyxDQUFDVyxTQUFGLENBQVlhLE9BQVosR0FBb0IsWUFBVTtBQUFDLGFBQU8sS0FBS3ZCLFFBQUwsQ0FBY0csSUFBckI7QUFBMEIsS0FBdDVCLEVBQXU1QkosQ0FBQyxDQUFDVyxTQUFGLENBQVlHLE9BQVosR0FBb0IsVUFBU3hHLENBQVQsRUFBVztBQUFDLFdBQUsyRixRQUFMLENBQWNJLElBQWQsR0FBbUIvRixDQUFuQjtBQUFxQixLQUE1OEIsRUFBNjhCMEYsQ0FBQyxDQUFDVyxTQUFGLENBQVljLE9BQVosR0FBb0IsWUFBVTtBQUFDLGFBQU8sS0FBS3hCLFFBQUwsQ0FBY0ksSUFBckI7QUFBMEIsS0FBdGdDLEVBQXVnQ0wsQ0FBQyxDQUFDVyxTQUFGLENBQVlJLFNBQVosR0FBc0IsVUFBU3pHLENBQVQsRUFBVztBQUFDLFdBQUsyRixRQUFMLENBQWNNLE1BQWQsR0FBcUJqRyxDQUFyQjtBQUF1QixLQUFoa0MsRUFBaWtDMEYsQ0FBQyxDQUFDVyxTQUFGLENBQVllLFNBQVosR0FBc0IsWUFBVTtBQUFDLGFBQU8sS0FBS3pCLFFBQUwsQ0FBY00sTUFBckI7QUFBNEIsS0FBOW5DLEVBQStuQ1AsQ0FBQyxDQUFDVyxTQUFGLENBQVlnQixnQkFBWixHQUE2QixVQUFTNUIsQ0FBVCxFQUFXekYsQ0FBWCxFQUFhc0gsQ0FBYixFQUFlO0FBQUMsVUFBSWhDLENBQUo7QUFBQSxVQUFNaUMsQ0FBQyxHQUFDLElBQVI7QUFBQSxVQUFhQyxDQUFDLEdBQUMsSUFBSUMsTUFBSixDQUFXLE9BQVgsQ0FBZjtBQUFtQyxVQUFHekgsQ0FBQyxZQUFZMEgsS0FBaEIsRUFBc0IxSCxDQUFDLENBQUNvQixPQUFGLENBQVUsVUFBU3BCLENBQVQsRUFBV3NGLENBQVgsRUFBYTtBQUFDa0MsUUFBQUEsQ0FBQyxDQUFDRyxJQUFGLENBQU9sQyxDQUFQLElBQVU2QixDQUFDLENBQUM3QixDQUFELEVBQUd6RixDQUFILENBQVgsR0FBaUJ1SCxDQUFDLENBQUNGLGdCQUFGLENBQW1CNUIsQ0FBQyxHQUFDLEdBQUYsSUFBTyxvQkFBaUJ6RixDQUFqQixJQUFtQnNGLENBQW5CLEdBQXFCLEVBQTVCLElBQWdDLEdBQW5ELEVBQXVEdEYsQ0FBdkQsRUFBeURzSCxDQUF6RCxDQUFqQjtBQUE2RSxPQUFyRyxFQUF0QixLQUFrSSxJQUFHLG9CQUFpQnRILENBQWpCLENBQUgsRUFBc0IsS0FBSXNGLENBQUosSUFBU3RGLENBQVQ7QUFBVyxhQUFLcUgsZ0JBQUwsQ0FBc0I1QixDQUFDLEdBQUMsR0FBRixHQUFNSCxDQUFOLEdBQVEsR0FBOUIsRUFBa0N0RixDQUFDLENBQUNzRixDQUFELENBQW5DLEVBQXVDZ0MsQ0FBdkM7QUFBWCxPQUF0QixNQUFnRkEsQ0FBQyxDQUFDN0IsQ0FBRCxFQUFHekYsQ0FBSCxDQUFEO0FBQU8sS0FBeDZDLEVBQXk2QzBGLENBQUMsQ0FBQ1csU0FBRixDQUFZdUIsUUFBWixHQUFxQixVQUFTNUgsQ0FBVCxFQUFXO0FBQUMsVUFBSXNGLENBQUo7QUFBQSxVQUFNRyxDQUFDLEdBQUMsQ0FBQyxLQUFLRSxRQUFMLENBQWNFLE1BQWQsR0FBcUI3RixDQUF0QixFQUF3QkEsQ0FBQyxHQUFDLEdBQUYsR0FBTSxLQUFLMkYsUUFBTCxDQUFjTSxNQUE1QyxFQUFtRCxLQUFLTixRQUFMLENBQWNFLE1BQWQsR0FBcUI3RixDQUFyQixHQUF1QixHQUF2QixHQUEyQixLQUFLMkYsUUFBTCxDQUFjTSxNQUE1RixFQUFtR2pHLENBQW5HLENBQVI7O0FBQThHLFdBQUlzRixDQUFKLElBQVNHLENBQVQ7QUFBVyxZQUFHQSxDQUFDLENBQUNILENBQUQsQ0FBRCxJQUFPLEtBQUtzQixPQUFmLEVBQXVCLE9BQU8sS0FBS0EsT0FBTCxDQUFhbkIsQ0FBQyxDQUFDSCxDQUFELENBQWQsQ0FBUDtBQUFsQzs7QUFBNEQsWUFBTSxJQUFJdUMsS0FBSixDQUFVLGdCQUFjN0gsQ0FBZCxHQUFnQixtQkFBMUIsQ0FBTjtBQUFxRCxLQUF6cUQsRUFBMHFEMEYsQ0FBQyxDQUFDVyxTQUFGLENBQVloRyxRQUFaLEdBQXFCLFVBQVNrSCxDQUFULEVBQVd2SCxDQUFYLEVBQWE4SCxDQUFiLEVBQWU7QUFBQyxVQUFJeEMsQ0FBSjtBQUFBLFVBQU1rQyxDQUFDLEdBQUMsS0FBS0ksUUFBTCxDQUFjTCxDQUFkLENBQVI7QUFBQSxVQUF5QlEsQ0FBQyxHQUFDL0gsQ0FBQyxJQUFFLEVBQTlCO0FBQUEsVUFBaUNnSSxDQUFDLEdBQUNuQixNQUFNLENBQUNvQixNQUFQLENBQWMsRUFBZCxFQUFpQkYsQ0FBakIsQ0FBbkM7QUFBQSxVQUF1REcsQ0FBQyxHQUFDLEVBQXpEO0FBQUEsVUFBNERDLENBQUMsR0FBQyxDQUFDLENBQS9EO0FBQUEsVUFBaUUxQyxDQUFDLEdBQUMsRUFBbkU7QUFBQSxVQUFzRXpGLENBQUMsR0FBQyxLQUFLLENBQUwsS0FBUyxLQUFLbUgsT0FBTCxFQUFULElBQXlCLFNBQU8sS0FBS0EsT0FBTCxFQUFoQyxHQUErQyxFQUEvQyxHQUFrRCxLQUFLQSxPQUFMLEVBQTFIOztBQUF5SSxVQUFHSyxDQUFDLENBQUNZLE1BQUYsQ0FBU2hILE9BQVQsQ0FBaUIsVUFBU3BCLENBQVQsRUFBVztBQUFDLFlBQUcsV0FBU0EsQ0FBQyxDQUFDLENBQUQsQ0FBVixJQUFlLFlBQVUsT0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBcEMsRUFBd0MsT0FBT2tJLENBQUMsR0FBQ3hDLENBQUMsQ0FBQzJDLG1CQUFGLENBQXNCckksQ0FBQyxDQUFDLENBQUQsQ0FBdkIsSUFBNEJrSSxDQUE5QixFQUFnQyxNQUFLQyxDQUFDLEdBQUMsQ0FBQyxDQUFSLENBQXZDO0FBQWtELFlBQUcsZUFBYW5JLENBQUMsQ0FBQyxDQUFELENBQWpCLEVBQXFCLE1BQU0sSUFBSTZILEtBQUosQ0FBVSxxQkFBbUI3SCxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUF3QixxQkFBbEMsQ0FBTjtBQUErRCxjQUFJQSxDQUFDLENBQUN4QixNQUFOLElBQWMsQ0FBQyxDQUFELEtBQUt3QixDQUFDLENBQUMsQ0FBRCxDQUFwQixLQUEwQm1JLENBQUMsR0FBQyxDQUFDLENBQTdCO0FBQWdDLFlBQUk3QyxDQUFDLEdBQUNrQyxDQUFDLENBQUNjLFFBQUYsSUFBWSxDQUFDWixLQUFLLENBQUNhLE9BQU4sQ0FBY2YsQ0FBQyxDQUFDYyxRQUFoQixDQUFiLElBQXdDLFlBQVUsT0FBT3RJLENBQUMsQ0FBQyxDQUFELENBQTFELElBQStEQSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU93SCxDQUFDLENBQUNjLFFBQTlFOztBQUF1RixZQUFHLENBQUMsQ0FBRCxLQUFLSCxDQUFMLElBQVEsQ0FBQzdDLENBQVQsSUFBWSxZQUFVLE9BQU90RixDQUFDLENBQUMsQ0FBRCxDQUFsQixJQUF1QkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPK0gsQ0FBOUIsSUFBaUMsQ0FBQ0wsS0FBSyxDQUFDYSxPQUFOLENBQWNmLENBQUMsQ0FBQ2MsUUFBaEIsQ0FBbEMsSUFBNkRQLENBQUMsQ0FBQy9ILENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBRCxJQUFTd0gsQ0FBQyxDQUFDYyxRQUFGLENBQVd0SSxDQUFDLENBQUMsQ0FBRCxDQUFaLENBQXJGLEVBQXNHO0FBQUMsY0FBSXlGLENBQUo7QUFBQSxjQUFNNkIsQ0FBQyxHQUFDLEtBQUssQ0FBYjtBQUFlLGNBQUcsWUFBVSxPQUFPdEgsQ0FBQyxDQUFDLENBQUQsQ0FBbEIsSUFBdUJBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTytILENBQWpDLEVBQW1DVCxDQUFDLEdBQUNTLENBQUMsQ0FBQy9ILENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBSCxFQUFVLE9BQU9nSSxDQUFDLENBQUNoSSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQWxCLENBQW5DLEtBQWdFO0FBQUMsZ0JBQUcsWUFBVSxPQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFsQixJQUF1QixDQUFDc0YsQ0FBeEIsSUFBMkJvQyxLQUFLLENBQUNhLE9BQU4sQ0FBY2YsQ0FBQyxDQUFDYyxRQUFoQixDQUE5QixFQUF3RDtBQUFDLGtCQUFHSCxDQUFILEVBQUs7QUFBTyxvQkFBTSxJQUFJTixLQUFKLENBQVUsZ0JBQWNOLENBQWQsR0FBZ0IsNEJBQWhCLEdBQTZDdkgsQ0FBQyxDQUFDLENBQUQsQ0FBOUMsR0FBa0QsSUFBNUQsQ0FBTjtBQUF3RTs7QUFBQXNILFlBQUFBLENBQUMsR0FBQ0UsQ0FBQyxDQUFDYyxRQUFGLENBQVd0SSxDQUFDLENBQUMsQ0FBRCxDQUFaLENBQUY7QUFBbUI7QUFBQSxXQUFDLENBQUMsQ0FBRCxLQUFLc0gsQ0FBTCxJQUFRLENBQUMsQ0FBRCxLQUFLQSxDQUFiLElBQWdCLE9BQUtBLENBQXRCLEtBQTBCYSxDQUExQixLQUE4QjFDLENBQUMsR0FBQ0MsQ0FBQyxDQUFDMkMsbUJBQUYsQ0FBc0JmLENBQXRCLENBQUYsRUFBMkJZLENBQUMsR0FBQ2xJLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTXlGLENBQUMsR0FBQyxXQUFTQSxDQUFULElBQVksU0FBTzZCLENBQW5CLEdBQXFCLEVBQXJCLEdBQXdCN0IsQ0FBaEMsSUFBbUN5QyxDQUE5RixHQUFpR0MsQ0FBQyxHQUFDLENBQUMsQ0FBcEc7QUFBc0csU0FBN2IsTUFBa2M3QyxDQUFDLElBQUUsWUFBVSxPQUFPdEYsQ0FBQyxDQUFDLENBQUQsQ0FBckIsSUFBMEJBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBT2dJLENBQWpDLElBQW9DLE9BQU9BLENBQUMsQ0FBQ2hJLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBNUM7QUFBbUQsT0FBdnpCLEdBQXl6QixPQUFLa0ksQ0FBTCxLQUFTQSxDQUFDLEdBQUMsR0FBWCxDQUF6ekIsRUFBeTBCVixDQUFDLENBQUNnQixVQUFGLENBQWFwSCxPQUFiLENBQXFCLFVBQVNwQixDQUFULEVBQVc7QUFBQyxZQUFJc0YsQ0FBSjtBQUFNLG1CQUFTdEYsQ0FBQyxDQUFDLENBQUQsQ0FBVixHQUFjLGVBQWFBLENBQUMsQ0FBQyxDQUFELENBQWQsS0FBb0JBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTytILENBQVAsSUFBVXpDLENBQUMsR0FBQ3lDLENBQUMsQ0FBQy9ILENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBSCxFQUFVLE9BQU9nSSxDQUFDLENBQUNoSSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTVCLElBQW9Dd0gsQ0FBQyxDQUFDYyxRQUFGLElBQVksQ0FBQ1osS0FBSyxDQUFDYSxPQUFOLENBQWNmLENBQUMsQ0FBQ2MsUUFBaEIsQ0FBYixJQUF3Q3RJLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBT3dILENBQUMsQ0FBQ2MsUUFBakQsS0FBNERoRCxDQUFDLEdBQUNrQyxDQUFDLENBQUNjLFFBQUYsQ0FBV3RJLENBQUMsQ0FBQyxDQUFELENBQVosQ0FBOUQsQ0FBcEMsRUFBb0h5RixDQUFDLEdBQUN6RixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtzRixDQUFMLEdBQU9HLENBQWpKLENBQWQsR0FBa0tBLENBQUMsR0FBQ3pGLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS3lGLENBQXpLO0FBQTJLLE9BQWxOLENBQXowQixFQUE2aEN5QyxDQUFDLEdBQUMsS0FBS3ZDLFFBQUwsQ0FBY0MsUUFBZCxHQUF1QnNDLENBQXRqQyxFQUF3akNWLENBQUMsQ0FBQ2lCLFlBQUYsSUFBZ0IsYUFBWWpCLENBQUMsQ0FBQ2lCLFlBQTlCLElBQTRDLEtBQUt4QixTQUFMLE1BQWtCTyxDQUFDLENBQUNpQixZQUFGLENBQWVDLE9BQTdFLElBQXNGcEQsQ0FBQyxHQUFDRyxDQUFDLElBQUUsS0FBS3lCLE9BQUwsRUFBTCxFQUFvQmdCLENBQUMsR0FBQ1YsQ0FBQyxDQUFDaUIsWUFBRixDQUFlQyxPQUFmLEdBQXVCLEtBQXZCLEdBQTZCcEQsQ0FBN0IsSUFBZ0MsQ0FBQyxDQUFELEdBQUdBLENBQUMsQ0FBQ3FELE9BQUYsQ0FBVSxNQUFJM0ksQ0FBZCxDQUFILElBQXFCLE9BQUtBLENBQTFCLEdBQTRCLEVBQTVCLEdBQStCLE1BQUlBLENBQW5FLElBQXNFa0ksQ0FBbEwsSUFBcUwsS0FBSyxDQUFMLEtBQVNWLENBQUMsQ0FBQ29CLE9BQVgsSUFBb0IsS0FBSyxDQUFMLEtBQVNwQixDQUFDLENBQUNvQixPQUFGLENBQVUsQ0FBVixDQUE3QixJQUEyQyxLQUFLM0IsU0FBTCxPQUFtQk8sQ0FBQyxDQUFDb0IsT0FBRixDQUFVLENBQVYsQ0FBOUQsSUFBNEV0RCxDQUFDLEdBQUNHLENBQUMsSUFBRSxLQUFLeUIsT0FBTCxFQUFMLEVBQW9CZ0IsQ0FBQyxHQUFDVixDQUFDLENBQUNvQixPQUFGLENBQVUsQ0FBVixJQUFhLEtBQWIsR0FBbUJ0RCxDQUFuQixJQUFzQixDQUFDLENBQUQsR0FBR0EsQ0FBQyxDQUFDcUQsT0FBRixDQUFVLE1BQUkzSSxDQUFkLENBQUgsSUFBcUIsT0FBS0EsQ0FBMUIsR0FBNEIsRUFBNUIsR0FBK0IsTUFBSUEsQ0FBekQsSUFBNERrSSxDQUE5SixJQUFpS3pDLENBQUMsSUFBRSxLQUFLeUIsT0FBTCxPQUFpQnpCLENBQUMsSUFBRSxDQUFDLENBQUQsR0FBR0EsQ0FBQyxDQUFDa0QsT0FBRixDQUFVLE1BQUkzSSxDQUFkLENBQUgsSUFBcUIsT0FBS0EsQ0FBMUIsR0FBNEIsRUFBNUIsR0FBK0IsTUFBSUEsQ0FBckMsQ0FBckIsR0FBNkRrSSxDQUFDLEdBQUMsS0FBS2pCLFNBQUwsS0FBaUIsS0FBakIsR0FBdUJ4QixDQUF2QixJQUEwQixDQUFDLENBQUQsR0FBR0EsQ0FBQyxDQUFDa0QsT0FBRixDQUFVLE1BQUkzSSxDQUFkLENBQUgsSUFBcUIsT0FBS0EsQ0FBMUIsR0FBNEIsRUFBNUIsR0FBK0IsTUFBSUEsQ0FBN0QsSUFBZ0VrSSxDQUEvSCxHQUFpSSxDQUFDLENBQUQsS0FBS0osQ0FBTCxLQUFTSSxDQUFDLEdBQUMsS0FBS2pCLFNBQUwsS0FBaUIsS0FBakIsR0FBdUIsS0FBS0MsT0FBTCxFQUF2QixJQUF1QyxDQUFDLENBQUQsR0FBRyxLQUFLQSxPQUFMLEdBQWV5QixPQUFmLENBQXVCLE1BQUkzSSxDQUEzQixDQUFILElBQWtDLE9BQUtBLENBQXZDLEdBQXlDLEVBQXpDLEdBQTRDLE1BQUlBLENBQXZGLElBQTBGa0ksQ0FBckcsQ0FBL2dELEVBQXVuRCxJQUFFckIsTUFBTSxDQUFDZ0MsSUFBUCxDQUFZYixDQUFaLEVBQWV4SixNQUEzb0QsRUFBa3BEO0FBQUEsWUFBVXNLLENBQVYsR0FBQyxTQUFTQSxDQUFULENBQVc5SSxDQUFYLEVBQWFzRixDQUFiLEVBQWU7QUFBQ0EsVUFBQUEsQ0FBQyxHQUFDLFVBQVFBLENBQUMsR0FBQyxjQUFZLE9BQU9BLENBQW5CLEdBQXFCQSxDQUFDLEVBQXRCLEdBQXlCQSxDQUFuQyxJQUFzQyxFQUF0QyxHQUF5Q0EsQ0FBM0MsRUFBNkN5RCxDQUFDLENBQUM1RCxJQUFGLENBQU9PLENBQUMsQ0FBQ3NELG9CQUFGLENBQXVCaEosQ0FBdkIsSUFBMEIsR0FBMUIsR0FBOEIwRixDQUFDLENBQUNzRCxvQkFBRixDQUF1QjFELENBQXZCLENBQXJDLENBQTdDO0FBQTZHLFNBQTlIOztBQUE4SCxZQUFJZ0MsQ0FBSjtBQUFBLFlBQU15QixDQUFDLEdBQUMsRUFBUjs7QUFBVyxhQUFJekIsQ0FBSixJQUFTVSxDQUFUO0FBQVdBLFVBQUFBLENBQUMsQ0FBQ2lCLGNBQUYsQ0FBaUIzQixDQUFqQixLQUFxQixLQUFLRCxnQkFBTCxDQUFzQkMsQ0FBdEIsRUFBd0JVLENBQUMsQ0FBQ1YsQ0FBRCxDQUF6QixFQUE2QndCLENBQTdCLENBQXJCO0FBQVg7O0FBQWdFWixRQUFBQSxDQUFDLEdBQUNBLENBQUMsR0FBQyxHQUFGLEdBQU1hLENBQUMsQ0FBQ0csSUFBRixDQUFPLEdBQVAsQ0FBUjtBQUFvQjs7QUFBQSxhQUFPaEIsQ0FBUDtBQUFTLEtBQWh0SCxFQUFpdEh4QyxDQUFDLENBQUN5RCx3QkFBRixHQUEyQixVQUFTbkosQ0FBVCxFQUFXO0FBQUMsYUFBT29KLGtCQUFrQixDQUFDcEosQ0FBRCxDQUFsQixDQUFzQnFKLE9BQXRCLENBQThCLE1BQTlCLEVBQXFDLEdBQXJDLEVBQTBDQSxPQUExQyxDQUFrRCxNQUFsRCxFQUF5RCxHQUF6RCxFQUE4REEsT0FBOUQsQ0FBc0UsTUFBdEUsRUFBNkUsR0FBN0UsRUFBa0ZBLE9BQWxGLENBQTBGLE1BQTFGLEVBQWlHLEdBQWpHLEVBQXNHQSxPQUF0RyxDQUE4RyxNQUE5RyxFQUFxSCxHQUFySCxFQUEwSEEsT0FBMUgsQ0FBa0ksTUFBbEksRUFBeUksR0FBekksRUFBOElBLE9BQTlJLENBQXNKLE1BQXRKLEVBQTZKLEdBQTdKLEVBQWtLQSxPQUFsSyxDQUEwSyxLQUExSyxFQUFnTCxLQUFoTCxFQUF1TEEsT0FBdkwsQ0FBK0wsS0FBL0wsRUFBcU0sS0FBck0sRUFBNE1BLE9BQTVNLENBQW9OLElBQXBOLEVBQXlOLEtBQXpOLENBQVA7QUFBdU8sS0FBLzlILEVBQWcrSDNELENBQUMsQ0FBQzJDLG1CQUFGLEdBQXNCLFVBQVNySSxDQUFULEVBQVc7QUFBQyxhQUFPMEYsQ0FBQyxDQUFDeUQsd0JBQUYsQ0FBMkJuSixDQUEzQixFQUE4QnFKLE9BQTlCLENBQXNDLE1BQXRDLEVBQTZDLEdBQTdDLEVBQWtEQSxPQUFsRCxDQUEwRCxNQUExRCxFQUFpRSxHQUFqRSxFQUFzRUEsT0FBdEUsQ0FBOEUsTUFBOUUsRUFBcUYsR0FBckYsRUFBMEZBLE9BQTFGLENBQWtHLE1BQWxHLEVBQXlHLEdBQXpHLENBQVA7QUFBcUgsS0FBdm5JLEVBQXduSTNELENBQUMsQ0FBQ3NELG9CQUFGLEdBQXVCLFVBQVNoSixDQUFULEVBQVc7QUFBQyxhQUFPMEYsQ0FBQyxDQUFDeUQsd0JBQUYsQ0FBMkJuSixDQUEzQixFQUE4QnFKLE9BQTlCLENBQXNDLE1BQXRDLEVBQTZDLEdBQTdDLENBQVA7QUFBeUQsS0FBcHRJLEVBQXF0STNELENBQTV0STtBQUE4dEksR0FBNTFJLEVBQWpELEVBQWc1SUosQ0FBQyxDQUFDRSxNQUFGLEdBQVNDLENBQXo1SSxFQUEyNUlILENBQUMsQ0FBQ3pGLE9BQUYsR0FBVSxJQUFJNEYsQ0FBSixFQUFyNkksRUFBMjZJSCxDQUFDLFdBQUQsR0FBVUEsQ0FBQyxDQUFDekYsT0FBdjdJO0FBQSs3SSxNQUFJeUYsQ0FBSjtBQUFBLE1BQU1HLENBQUMsR0FBQztBQUFDRCxJQUFBQSxNQUFNLEVBQUNGLENBQUMsQ0FBQ0UsTUFBVjtBQUFpQjNGLElBQUFBLE9BQU8sRUFBQ3lGLENBQUMsQ0FBQ3pGO0FBQTNCLEdBQVI7QUFBNEMsVUFBc0N5SixpQ0FBTyxFQUFELG9DQUFJN0QsQ0FBQyxDQUFDNUYsT0FBTjtBQUFBO0FBQUE7QUFBQSxrR0FBNUMsR0FBMkQsQ0FBM0Q7QUFBMEssQ0FBanFKLENBQWtxSixJQUFscUosQ0FBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0lBRU04Sjs7Ozs7Ozs7Ozs7OztXQUNGLG1CQUFVO0FBQUE7O0FBQ04sV0FBS0MsS0FBTDtBQUNBLFdBQUtDLHdCQUFMLENBQThCeEwsZ0JBQTlCLENBQStDLE9BQS9DLEVBQXdEO0FBQUEsZUFBTSxLQUFJLENBQUN1TCxLQUFMLEVBQU47QUFBQSxPQUF4RDtBQUNBLFdBQUtFLFdBQUwsQ0FBaUJ6TCxnQkFBakIsQ0FBa0MsUUFBbEMsRUFBNEMsVUFBQzBMLEtBQUQ7QUFBQSxlQUFXLEtBQUksQ0FBQ0MsYUFBTCxDQUFtQkQsS0FBbkIsQ0FBWDtBQUFBLE9BQTVDOztBQUNBLFdBQUtFLGNBQUwsQ0FBb0Isa0JBQXBCO0FBQ0g7OztXQUNELGlCQUFRO0FBQ0osV0FBS0gsV0FBTCxDQUFpQjNKLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0EsV0FBSzJKLFdBQUwsQ0FBaUJwTCxLQUFqQixDQUF1QndMLE9BQXZCLEdBQWlDLE9BQWpDO0FBQ0EsV0FBS0MsaUJBQUwsQ0FBdUJ6TCxLQUF2QixDQUE2QndMLE9BQTdCLEdBQXVDLE9BQXZDO0FBQ0EsV0FBS0UsYUFBTCxDQUFtQjFMLEtBQW5CLENBQXlCd0wsT0FBekIsR0FBbUMsTUFBbkM7QUFDQSxXQUFLRyxrQkFBTCxDQUF3QjNMLEtBQXhCLENBQThCd0wsT0FBOUIsR0FBd0MsTUFBeEM7QUFDQSxXQUFLRyxrQkFBTCxDQUF3QjNMLEtBQXhCLENBQThCNEwsZUFBOUIsR0FBZ0QsTUFBaEQ7QUFDQSxXQUFLQyxxQkFBTCxDQUEyQjlNLFdBQTNCLEdBQXlDLEVBQXpDOztBQUNBLFdBQUt3TSxjQUFMLENBQW9CLGdCQUFwQjtBQUNIOzs7V0FDRCx1QkFBY0YsS0FBZCxFQUFxQjtBQUNqQixVQUFNUyxJQUFJLEdBQUdULEtBQUssQ0FBQ3pGLE1BQU4sQ0FBYW1HLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBYjs7QUFDQSxVQUFJLE9BQU9ELElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDN0I7QUFDSDs7QUFDRCxXQUFLVixXQUFMLENBQWlCcEwsS0FBakIsQ0FBdUJ3TCxPQUF2QixHQUFpQyxNQUFqQztBQUNBLFdBQUtDLGlCQUFMLENBQXVCekwsS0FBdkIsQ0FBNkJ3TCxPQUE3QixHQUF1QyxNQUF2QztBQUNBLFdBQUtLLHFCQUFMLENBQTJCOU0sV0FBM0IsR0FBeUMrTSxJQUFJLENBQUNuSSxJQUE5QztBQUNBLFdBQUsrSCxhQUFMLENBQW1CMUwsS0FBbkIsQ0FBeUJ3TCxPQUF6QixHQUFtQyxNQUFuQztBQUNBLFdBQUtHLGtCQUFMLENBQXdCM0wsS0FBeEIsQ0FBOEJ3TCxPQUE5QixHQUF3QyxNQUF4Qzs7QUFDQSxVQUFJTSxJQUFJLENBQUNFLElBQUwsSUFBYUYsSUFBSSxDQUFDRSxJQUFMLENBQVUvQixPQUFWLENBQWtCLE9BQWxCLE1BQStCLENBQUMsQ0FBakQsRUFBb0Q7QUFDaEQsYUFBS2dDLHFCQUFMLENBQTJCSCxJQUEzQjtBQUNIOztBQUNELFdBQUtQLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDTyxJQUF2QztBQUNIOzs7V0FDRCwrQkFBc0JBLElBQXRCLEVBQTRCO0FBQUE7O0FBQ3hCLFVBQUksT0FBT0ksVUFBUCxLQUFzQixXQUExQixFQUF1QztBQUNuQztBQUNIOztBQUNELFVBQU1DLE1BQU0sR0FBRyxJQUFJRCxVQUFKLEVBQWY7QUFDQUMsTUFBQUEsTUFBTSxDQUFDeE0sZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBQzBMLEtBQUQsRUFBVztBQUN2QyxjQUFJLENBQUNNLGtCQUFMLENBQXdCM0wsS0FBeEIsQ0FBOEJ3TCxPQUE5QixHQUF3QyxPQUF4QztBQUNBLGNBQUksQ0FBQ0csa0JBQUwsQ0FBd0IzTCxLQUF4QixDQUE4QjRMLGVBQTlCLEdBQWdELFVBQVVQLEtBQUssQ0FBQ3pGLE1BQU4sQ0FBYXdHLE1BQXZCLEdBQWdDLElBQWhGO0FBQ0gsT0FIRDtBQUlBRCxNQUFBQSxNQUFNLENBQUNFLGFBQVAsQ0FBcUJQLElBQXJCO0FBQ0g7OztXQUNELHdCQUFlbkksSUFBZixFQUFtQztBQUFBLFVBQWQySSxPQUFjLHVFQUFKLEVBQUk7QUFDL0IsV0FBS3hOLE9BQUwsQ0FBYXlOLGFBQWIsQ0FBMkIsSUFBSUMsV0FBSixDQUFnQjdJLElBQWhCLEVBQXNCO0FBQUU4SSxRQUFBQSxNQUFNLEVBQUVIO0FBQVYsT0FBdEIsQ0FBM0I7QUFDSDs7OztFQTdDbUJ6Tjs7QUErQ3hCb00sU0FBUyxDQUFDeUIsT0FBVixHQUFvQixDQUFDLE9BQUQsRUFBVSxhQUFWLEVBQXlCLFNBQXpCLEVBQW9DLG9CQUFwQyxFQUEwRCxpQkFBMUQsRUFBNkUsY0FBN0UsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7QUNqREE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXB0ZXItbmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC1mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaG9wcGluZy1jYXJ0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Nob3BwaW5nLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvUmVzb3VyY2VzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvUmVzb3VyY2VzL2Fzc2V0cy9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0ICdAc3ltZm9ueS91eC1kcm9wem9uZS9zcmMvc3R5bGUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWRyb3B6b25lLS1kcm9wem9uZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1kcm9wem9uZS9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJy4vanMvY2hhcHRlci1uYXZpZ2F0b3InO1xuaW1wb3J0ICcuL2pzL3Nob3BwaW5nLWNhcnQtbWFuYWdlcic7XG5pbXBvcnQgJy4vanMvY3VzdG9tJztcbmltcG9ydCAnLi9qcy9zZWFyY2gtZm9ybSc7XG5cbi8qIGltcG9ydCAnLi9qcy9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnLi9qcy9qcXVlcnkudXBsb2FkaWZpdmUubWluLmpzJztcbiovXG5yZXF1aXJlKCdib290c3RyYXAnKTtcbnJlcXVpcmUoJ2FuaW1hdGUuY3NzJyk7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8qIGNoZWNrIGlmIHNjcmVlbiByZXNpemVzLCB0aGFuIGNoZWNrL3VuY2hlY2sgaW5wdXRcbiAqICBpZiBzY3JlZW4gc2l6ZSA8IDgwZW0gc2lkZWJhciBpcyBoaWRkZW5cbiAqICBpZiBiaWdnZXIgKGRlc2t0b3ApIHRoYW4gc2hvdyBzaWRlYmFyXG4gKiAgaXQncyBiYXNlZCBvbjpcbiAqICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDY0Mzg0NzIvMTQ5Njk3MiBcbiAqL1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1zaWRlYmFyJyk7XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLWNoZWNrJykgIT0gbnVsbCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogODBlbScpLm1hdGNoZXMpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1jaGVjaycpLmNoZWNrZWQgPSB0cnVlO1xuXG5cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA4MGVtKScpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3ItY2hlY2snKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLWNoZWNrJykuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB0cnVlKTtcbn0iLCJcbi8vICoqKioqKioqKlxuICAvLyBTTElERVJcbiAgLy8gKioqKioqKioqKlxuXG5cbiAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNteS1zbGlkZXIgPiAuc2xpZGVcIik7XG4gIC8vIGNvbnN0IHNsaWRlcyA9IHNsaWRlci5jaGlsZHJlbjtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPiAwKSB7XG4gICAgc2xpZGVzLml0ZW0oMCkuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgY29uc3Qgc2xpZGVzQ291bnQgPSBzbGlkZXMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xuICAgIGxldCBuZXh0U2xpZGUgPSAxO1xuXG4gICAgY29uc3Qgc2xpZGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS10ZXh0X19oZWFkXCIpO1xuICAgIGNvbnN0IHNsaWRlU3ViVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtdGV4dF9fc3ViaGVhZFwiKTtcbiAgICBjb25zb2xlLmxvZyhzbGlkZVRleHQpO1xuXG4gICAgc2V0SW50ZXJ2YWwoXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlcy5pdGVtKGN1cnJlbnRTbGlkZSkuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIG5leHRTbGlkZSA9IG5leHRTbGlkZSA9PSBzbGlkZXNDb3VudCAtIDEgPyAwIDogY3VycmVudFNsaWRlICsgMTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2xpZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhzbGlkZVRleHQubGVuZ3RoKTtcbiAgICAgIFxuXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPCBzbGlkZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgc2xpZGVUZXh0W2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5VcFwiKTtcbiAgICAgICAgICBzbGlkZVN1YlRleHRbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblVwXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhlcmUgY3VycmVudFNsaWRlIGlzIHByZXZpb3VzIHNsaWRlXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IG5leHRTbGlkZTtcbiAgICAgICAgc2xpZGVzLml0ZW0obmV4dFNsaWRlKS5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgICAgICAvL2lmIG11c3QgYmUgcmVwZWF0ZWQgZm9yIHRoZSBzb21lIGNvbmRpdGlvbiwgbmVlZCB0byBmaW5kIGJldHRlciB3YXlcbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA8IHNsaWRlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBzbGlkZVRleHRbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fc2xpZGVJblVwXCIpO1xuICAgICAgICAgIHNsaWRlU3ViVGV4dFtjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19zbGlkZUluVXBcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIDUwMDBcbiAgICApO1xuICB9XG5cblxuXHRcdGNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtbW9kYWwnKTtcblx0XHRjb25zdCBzd2l0Y2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1tb2RhbC1zd2l0Y2hlcicpO1xuXHRcdGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXHRcdGNvbnN0IHRyYW5zZm9ybU1vZGFsID0gKCkgPT4ge1xuXHRcdFx0bWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wZW5cIik7XG5cdFx0fVxuICAgIGlmIChzd2l0Y2hCdXR0b24gIT0gbnVsbCAmJiBtb2RhbEJ1dHRvbiAhPSBudWxsICkge1xuXHRcdHN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJhbnNmb3JtTW9kYWwoKTtcbiAgXG5cdFx0fSlcbiAgXG5cblx0XHRtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJhbnNmb3JtTW9kYWwoKTtcblx0XHR9KVxuICB9XG5cbiAgXG5cblxuXG5cblxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmltcG9ydCBSb3V0aW5nIGZyb20gJy92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XG5cblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLXNlYXJjaC1mb3JtJyk7XG4gICAgXG4gICAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdHJpbmcnKS52YWx1ZTtcblxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnaXRlbXNfZmlsdGVyJywge1xuICAgICAgICAgICAgJ3NlYXJjaFRleHQnOiBzZWFyY2hTdHJpbmdcbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSk7XG59KSIsImltcG9ydCBTaG9wcGluZ0NhcnQgZnJvbSAnLi9zaG9wcGluZy1jYXJ0JztcblxubGV0IGNvbG9yU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXNlbGVjdCcpO1xubGV0IHNpemVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZS1zZWxlY3QnKTtcblxubGV0IHByb2R1Y3RQcmljZUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1wcmljZScpO1xubGV0IHRvdGFsUHJpY2VJbkNhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtcHJpY2UnKTtcbi8vIGRpc3BsYXlzIGZpbmFsIHByaWNlIGZvciBwcm9kdWN0cyBpbiBtb2RhbCBzaGlwcGluZyBjYXJ0XG5sZXQgc2hvcHBpbmdDYXJ0ID0gbmV3IFNob3BwaW5nQ2FydCgpO1xuXG4vLyBqdXN0IGNyZWF0ZXMgXCJwXCIgZWxlbWVudFxuY29uc3QgYWRkUGFyYWdyYXBoID0gKHRleHQsIGxpc3RJdGVtLCBjbGFzc2VzQXJyYXkpID0+IHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgY2xhc3Nlc0FycmF5LmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSlcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtKTtcbn1cblxuLy8gY3JlYXRlcyBcInBcIiBlbGVtZW50IGFuZCB0aGVuIGluc2lkZSBvZiBpdCBhIFwic21hbGxcIiBvbmVcbmNvbnN0IGFkZFNtYWxsVGV4dCA9ICh0ZXh0LCBsaXN0SXRlbSwgY2xhc3NlcykgPT4ge1xuICAgIGxldCBwYXJlbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBzbWFsbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICAgIHNtYWxsSXRlbS5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHBhcmVudEl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICBwYXJlbnRJdGVtLmFwcGVuZENoaWxkKHNtYWxsSXRlbSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocGFyZW50SXRlbSk7XG59XG5cbmNvbnN0IHVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJ0QW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYW5jaG9yJyk7XG4gICAgY2FydEFuY2hvci5pbm5lclRleHQgPSBgKCR7c2hvcHBpbmdDYXJ0LmNhcnRJdGVtcy5sZW5ndGh9KWA7XG59XG5cbmNvbnN0IHBvcHVsYXRlTGlzdCA9IChzaG9wcGluZ1VsKSA9PiB7XG4gICAgLy8gc2hvcHBpbmdVbCBpcyBIVE1MIGNvbGxlY3Rpb25cbiAgICAvLyBzaG9wcGluZ0NhcnQgaXMgSlMgYXJyYXkgb2Ygb2JqZWN0c1xuICAgIHdoaWxlIChzaG9wcGluZ1VsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2hvcHBpbmdVbC5yZW1vdmVDaGlsZChzaG9wcGluZ1VsLmZpcnN0Q2hpbGQpO1xuXG4gICAgfVxuICAgIC8vcG9wdWxhdGUgbGlzdCBhZ2FpblxuICAgIHNob3BwaW5nQ2FydC5jYXJ0SXRlbXMuZm9yRWFjaCgoc2hvcHBpbmdJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBhZGRQYXJhZ3JhcGgoc2hvcHBpbmdJdGVtLmJyYW5kLCBsaSwgWydmdy1ib2xkJywgJ21iLTAnXSk7XG4gICAgICAgIGFkZFBhcmFncmFwaChzaG9wcGluZ0l0ZW0ubmFtZSwgbGksIFsnbWItMSddKTtcbiAgICAgICAgYWRkU21hbGxUZXh0KCdRdWFudGl0eTogJyArIHNob3BwaW5nSXRlbS5xdHksIGxpLCAnbWItMCcpO1xuICAgICAgICBhZGRTbWFsbFRleHQoJ0NvbG9yOiAnICsgc2hvcHBpbmdJdGVtLmNvbG9yLCBsaSwgJ21iLTAnKTtcbiAgICAgICAgYWRkU21hbGxUZXh0KCdTaXplOiAnICsgc2hvcHBpbmdJdGVtLnNpemUsIGxpLCAnbWItMCcpO1xuXG4gICAgICAgIGNvbnN0IGhyTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGhyTGluZSk7XG4gICAgICAgIHNob3BwaW5nVWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2FsY3VsYXRlcyBhbmQgZGlzcGxheXMgdG90YWwgcHJpY2UgZm9yIGFsbCBwcm9kdWN0cyBpbiB0aGUgYmFnXG4gICAgdG90YWxQcmljZUluQ2FydC5pbm5lclRleHQgPSBzaG9wcGluZ0NhcnQuY2FsY3VsYXRlVG90YWxQcmljZSgpLnRvRml4ZWQoMik7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNob3BwaW5nVWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcHBpbmctbGlzdC11bCcpO1xuICAgXG4gICAgcG9wdWxhdGVMaXN0KHNob3BwaW5nVWwpO1xuICAgIGNvbnN0IGFkZFRvQ2FydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG8tY2FydC1idXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVDb25maXJtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtY29uZmlybS1idXR0b24nKTtcbiAgICB1cGRhdGVOdW1iZXJCeUNhcnRCdXR0b24oKTtcblxuICAgIGlmIChhZGRUb0NhcnRCdG4gIT0gbnVsbCkge1xuICAgICAgICBhZGRUb0NhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gYWRkVG9DYXJ0QnRuLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QnJhbmQgPSBhZGRUb0NhcnRCdG4uZGF0YXNldC5wcm9kdWN0bmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RNb2RlbCA9IGFkZFRvQ2FydEJ0bi5kYXRhc2V0LnByb2R1Y3Rtb2RlbDtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9IHByb2R1Y3RQcmljZUl0ZW0uZGF0YXNldC5wcmljZTtcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbW91bnQtaW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yU2VsZWN0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHNpemVTZWxlY3QudmFsdWU7XG5cbiAgICAgICAgICAgIHNob3BwaW5nQ2FydC5hZGRJdGVtVG9DYXJ0KHtcbiAgICAgICAgICAgICAgICBpZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgICAgIHF0eTogcXR5LFxuICAgICAgICAgICAgICAgIGJyYW5kOiBwcm9kdWN0QnJhbmQsXG4gICAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdE1vZGVsLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0UHJpY2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwb3B1bGF0ZUxpc3Qoc2hvcHBpbmdVbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNoYW5nZXMgYnV0dG9uIHRleHQgZm9yIGEgc2Vjb25kIHdoZW4gbmV3IGl0ZW0gaXMgYWRkZWRcbiAgICAgICAgICAgIC8vIGl0cycgYXN5bmNocm9ub3VzIHRoZXJlZm9yZSBcIkFkZGVkIHRvIGNhcnRcIiB3aWxsIGJlIGRpc3BsYXllZCBmaXJzdC5cbiAgICAgICAgICAgIHNldEludGVydmFsKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvblN3aXRjaFdpdGhDb2xvcnMoXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydEJ0bixcbiAgICAgICAgICAgICAgICAgICAgJ0FkZCB0byBjYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9LCAyNDAwKTtcbiAgICAgICAgICAgIGFkZFRvQ2FydEJ0bi5pbm5lclRleHQgPSBcIkFkZGVkIHRvIGNhcnQhXCJcbiAgICAgICAgICAgIGJ1dHRvblN3aXRjaFdpdGhDb2xvcnMoXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0QnRuLFxuICAgICAgICAgICAgICAgICdBZGRlZCB0byBjYXJ0IScsXG4gICAgICAgICAgICAgICAgJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAnYmxhY2snXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGJ1dHRvbiBcImFuaW1hdGVcIiBlbmRzIGhlcmVcblxuICAgICAgICAgICAgdXBkYXRlTnVtYmVyQnlDYXJ0QnV0dG9uKCk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBmZXRjaChcIi8uLi9jaGVja291dFwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNob3BwaW5nQ2FydC5jYXJ0SXRlbXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBkZWxldGUgYnV0dG9uIGlzIGNsaWNrZWQgb24gc2hvcHBpbmctYmFnIHBhZ2UgXG4gICAgLy8gaXQgcmVtb3ZlcyBpdGVtIGZyb20gbG9jYWxTdG9yYWdlIEpzb25lZCBhcnJheVxuICAgIC8vIGFuZCBmcm9tIHNlc3Npb25cblxuICAgIGlmIChkZWxldGVDb25maXJtQnV0dG9ucyAhPSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZUNvbmZpcm1CdXR0b25zLmZvckVhY2goIGJ1dHRvbiA9PiAge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICBjb25zdCBpZCA9IGV2LnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0LnJlbW92ZUl0ZW1Gcm9tQ2FydChpZCk7XG4gICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9kZWxldGUtZnJvbS1iYWcvJHtpZH1gO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIH1cbn0pO1xuY29uc3QgYnV0dG9uU3dpdGNoV2l0aENvbG9ycyA9IChidXR0b24sIHRleHQsZm9yZWdyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IpID0+IHtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZm9yZWdyb3VuZENvbG9yO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wcGluZ0NhcnQge1xuXG4gICAgLyoqIFRoaXMgc2NyaXB0cyBhZGRzIGl0ZW1zIHRvIHNob3BwaW5nIGNhcnQsIGJ1dCBcbiAgICAgKiBpcyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlIG9ubHkgbm90IGluIFNlc3Npb25TdG9yYWdlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIEl0IHdpbGwgc3RvcmFnZSBhbGwgc2hvcHBpbmcgY2FydCBpdGVtcyBoZXJlXG4gICAgICAgIHRoaXMuY2FydEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY2FydEl0ZW1zID0gdGhpcy5nZXREYXRhRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy50b3RhbFByaWNlID0gdGhpcy5jYWxjdWxhdGVUb3RhbFByaWNlKCk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZVRvdGFsUHJpY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhcnRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdG90YWxQcmljZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmNhcnRJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IGl0ZW0ucXR5ICogaXRlbS5wcmljZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQcmljZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZ2V0RGF0YUZyb21TdG9yYWdlKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRJdGVtcycpID09PSBudWxsXG4gICAgICAgICAgICB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydEl0ZW1zJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRJdGVtcycpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXREYXRhSW5TdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0SXRlbXMpKTtcbiAgICB9XG4gICAgc2V0VG90YWxQcmljZUluU3RvcmFnZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsUHJpY2UnLCB0b3RhbFByaWNlKCkpXG4gICAgfVxuICAgIHRvdGFsUHJpY2UoKSB7XG5cbiAgICB9XG4gICAgYWRkSXRlbVRvQ2FydChwcm9kdWN0KSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gaXMgaW4gdGhlIGFycmF5IGFscmVhZHlcbiAgICAgICAgY29uc3Qgc2VhcmNoT2JqZWN0SWR4ID0gdGhpcy5jYXJ0SXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiB7IFxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gcHJvZHVjdC5pZDtcbiAgICAgICAgIH0gKVxuICAgICAgICBpZiAoc2VhcmNoT2JqZWN0SWR4ID09PSAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FydEl0ZW1zLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGFJblN0b3JhZ2UoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJ0SXRlbXNbc2VhcmNoT2JqZWN0SWR4XS5xdHkgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YUluU3RvcmFnZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlSXRlbUZyb21DYXJ0KGlkKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICBjb25zdCBzZWFyY2hPYmplY3RJZHggPSBkYXRhLmZpbmRJbmRleCggaXRlbSA9PiB7IFxuICAgICAgICAgICAgLy8gaWQgbXVzdCBiZSBwYXJzZWQgdG8gSW50LCBvdGhlcndpc2UgZG9lc24ndCB3b3JrXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBwYXJzZUludChpZCk7XG4gICAgICAgICB9ICk7XG4gICAgICAgIGRhdGEuc3BsaWNlKHNlYXJjaE9iamVjdElkeCwxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRJdGVtcycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgIH1cbiAgICByZW1vdmVBbGxJdGVtcygpIHtcbiAgICAgICAgdGhpcy5jYXJ0SXRlbXMgPSBbXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRJdGVtcycsIFtdKTtcbiAgICB9XG59XG4iLCIhZnVuY3Rpb24oZSl7KHQ9e30pLl9fZXNNb2R1bGU9ITAsdC5Sb3V0aW5nPXQuUm91dGVyPXZvaWQgMCxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbChlLHQpe3RoaXMuY29udGV4dF89ZXx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXModHx8e30pfXJldHVybiBsLmdldEluc3RhbmNlPWZ1bmN0aW9uKCl7cmV0dXJuIHQuUm91dGluZ30sbC5zZXREYXRhPWZ1bmN0aW9uKGUpe2wuZ2V0SW5zdGFuY2UoKS5zZXRSb3V0aW5nRGF0YShlKX0sbC5wcm90b3R5cGUuc2V0Um91dGluZ0RhdGE9ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSx2b2lkIDAhPT1lLnByZWZpeCYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLHZvaWQgMCE9PWUucG9ydCYmdGhpcy5zZXRQb3J0KGUucG9ydCksdm9pZCAwIT09ZS5sb2NhbGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx2b2lkIDAhPT1lLnNjaGVtZSYmdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfSxsLnByb3RvdHlwZS5zZXRSb3V0ZXM9ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9LGwucHJvdG90eXBlLmdldFJvdXRlcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199LGwucHJvdG90eXBlLnNldEJhc2VVcmw9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfSxsLnByb3RvdHlwZS5nZXRCYXNlVXJsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9LGwucHJvdG90eXBlLnNldFByZWZpeD1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfSxsLnByb3RvdHlwZS5zZXRTY2hlbWU9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX0sbC5wcm90b3R5cGUuZ2V0U2NoZW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfSxsLnByb3RvdHlwZS5zZXRIb3N0PWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfSxsLnByb3RvdHlwZS5nZXRIb3N0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH0sbC5wcm90b3R5cGUuc2V0UG9ydD1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX0sbC5wcm90b3R5cGUuZ2V0UG9ydD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnBvcnR9LGwucHJvdG90eXBlLnNldExvY2FsZT1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfSxsLnByb3RvdHlwZS5nZXRMb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9LGwucHJvdG90eXBlLmJ1aWxkUXVlcnlQYXJhbXM9ZnVuY3Rpb24obyxlLG4pe3ZhciB0LHI9dGhpcyxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZihlIGluc3RhbmNlb2YgQXJyYXkpZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cy50ZXN0KG8pP24obyxlKTpyLmJ1aWxkUXVlcnlQYXJhbXMobytcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGU/dDpcIlwiKStcIl1cIixlLG4pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IodCBpbiBlKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhvK1wiW1wiK3QrXCJdXCIsZVt0XSxuKTtlbHNlIG4obyxlKX0sbC5wcm90b3R5cGUuZ2V0Um91dGU9ZnVuY3Rpb24oZSl7dmFyIHQsbz1bdGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLHRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsZV07Zm9yKHQgaW4gbylpZihvW3RdaW4gdGhpcy5yb3V0ZXNfKXJldHVybiB0aGlzLnJvdXRlc19bb1t0XV07dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpfSxsLnByb3RvdHlwZS5nZW5lcmF0ZT1mdW5jdGlvbihyLGUscCl7dmFyIHQscz10aGlzLmdldFJvdXRlKHIpLGk9ZXx8e30sdT1PYmplY3QuYXNzaWduKHt9LGkpLGM9XCJcIixhPSEwLG89XCJcIixlPXZvaWQgMD09PXRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihzLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKFwidGV4dFwiPT09ZVswXSYmXCJzdHJpbmdcIj09dHlwZW9mIGVbMV0pcmV0dXJuIGM9bC5lbmNvZGVQYXRoQ29tcG9uZW50KGVbMV0pK2Msdm9pZChhPSExKTtpZihcInZhcmlhYmxlXCIhPT1lWzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK2VbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7Nj09PWUubGVuZ3RoJiYhMD09PWVbNV0mJihhPSExKTt2YXIgdD1zLmRlZmF1bHRzJiYhQXJyYXkuaXNBcnJheShzLmRlZmF1bHRzKSYmXCJzdHJpbmdcIj09dHlwZW9mIGVbM10mJmVbM11pbiBzLmRlZmF1bHRzO2lmKCExPT09YXx8IXR8fFwic3RyaW5nXCI9PXR5cGVvZiBlWzNdJiZlWzNdaW4gaSYmIUFycmF5LmlzQXJyYXkocy5kZWZhdWx0cykmJmlbZVszXV0hPXMuZGVmYXVsdHNbZVszXV0pe3ZhciBvLG49dm9pZCAwO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlWzNdJiZlWzNdaW4gaSluPWlbZVszXV0sZGVsZXRlIHVbZVszXV07ZWxzZXtpZihcInN0cmluZ1wiIT10eXBlb2YgZVszXXx8IXR8fEFycmF5LmlzQXJyYXkocy5kZWZhdWx0cykpe2lmKGEpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytyKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJytlWzNdKydcIi4nKX1uPXMuZGVmYXVsdHNbZVszXV19KCEwPT09bnx8ITE9PT1ufHxcIlwiPT09bikmJmF8fChvPWwuZW5jb2RlUGF0aENvbXBvbmVudChuKSxjPWVbMV0rKG89XCJudWxsXCI9PT1vJiZudWxsPT09bj9cIlwiOm8pK2MpLGE9ITF9ZWxzZSB0JiZcInN0cmluZ1wiPT10eXBlb2YgZVszXSYmZVszXWluIHUmJmRlbGV0ZSB1W2VbM11dfSksXCJcIj09PWMmJihjPVwiL1wiKSxzLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdDtcInRleHRcIiE9PWVbMF0/XCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiBpPyh0PWlbZVszXV0sZGVsZXRlIHVbZVszXV0pOnMuZGVmYXVsdHMmJiFBcnJheS5pc0FycmF5KHMuZGVmYXVsdHMpJiZlWzNdaW4gcy5kZWZhdWx0cyYmKHQ9cy5kZWZhdWx0c1tlWzNdXSksbz1lWzFdK3Qrbyk6bz1lWzFdK299KSxjPXRoaXMuY29udGV4dF8uYmFzZV91cmwrYyxzLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBzLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9cy5yZXF1aXJlbWVudHMuX3NjaGVtZT8odD1vfHx0aGlzLmdldEhvc3QoKSxjPXMucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIit0KygtMTx0LmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYyk6dm9pZCAwIT09cy5zY2hlbWVzJiZ2b2lkIDAhPT1zLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1zLnNjaGVtZXNbMF0/KHQ9b3x8dGhpcy5nZXRIb3N0KCksYz1zLnNjaGVtZXNbMF0rXCI6Ly9cIit0KygtMTx0LmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYyk6byYmdGhpcy5nZXRIb3N0KCkhPT1vKygtMTxvLmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSk/Yz10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrbysoLTE8by5pbmRleE9mKFwiOlwiK2UpfHxcIlwiPT09ZT9cIlwiOlwiOlwiK2UpK2M6ITA9PT1wJiYoYz10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrKC0xPHRoaXMuZ2V0SG9zdCgpLmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYyksMDxPYmplY3Qua2V5cyh1KS5sZW5ndGgpe2Z1bmN0aW9uIGYoZSx0KXt0PW51bGw9PT0odD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0KT9cIlwiOnQsaC5wdXNoKGwuZW5jb2RlUXVlcnlDb21wb25lbnQoZSkrXCI9XCIrbC5lbmNvZGVRdWVyeUNvbXBvbmVudCh0KSl9dmFyIG4saD1bXTtmb3IobiBpbiB1KXUuaGFzT3duUHJvcGVydHkobikmJnRoaXMuYnVpbGRRdWVyeVBhcmFtcyhuLHVbbl0sZik7Yz1jK1wiP1wiK2guam9pbihcIiZcIil9cmV0dXJuIGN9LGwuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTJGL2csXCIvXCIpLnJlcGxhY2UoLyU0MC9nLFwiQFwiKS5yZXBsYWNlKC8lM0EvZyxcIjpcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyUzQi9nLFwiO1wiKS5yZXBsYWNlKC8lMkMvZyxcIixcIikucmVwbGFjZSgvJTJBL2csXCIqXCIpLnJlcGxhY2UoL1xcKC9nLFwiJTI4XCIpLnJlcGxhY2UoL1xcKS9nLFwiJTI5XCIpLnJlcGxhY2UoLycvZyxcIiUyN1wiKX0sbC5lbmNvZGVQYXRoQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3JldHVybiBsLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lM0QvZyxcIj1cIikucmVwbGFjZSgvJTJCL2csXCIrXCIpLnJlcGxhY2UoLyUyMS9nLFwiIVwiKS5yZXBsYWNlKC8lN0MvZyxcInxcIil9LGwuZW5jb2RlUXVlcnlDb21wb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGwuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUzRi9nLFwiP1wiKX0sbH0oKSx0LlJvdXRlcj1vLHQuUm91dGluZz1uZXcgbyx0LmRlZmF1bHQ9dC5Sb3V0aW5nO3ZhciB0LG89e1JvdXRlcjp0LlJvdXRlcixSb3V0aW5nOnQuUm91dGluZ307XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxvLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW8uUm91dGluZzooZS5Sb3V0aW5nPW8uUm91dGluZyxlLmZvcz17Um91dGVyOm8uUm91dGVyfSl9KHRoaXMpOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbGVhcigpKTtcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMub25JbnB1dENoYW5nZShldmVudCkpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdkcm9wem9uZTpjb25uZWN0Jyk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ZpbGVuYW1lVGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNsZWFyJyk7XG4gICAgfVxuICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdGaWxlbmFtZVRhcmdldC50ZXh0Q29udGVudCA9IGZpbGUubmFtZTtcbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmIChmaWxlLnR5cGUgJiYgZmlsZS50eXBlLmluZGV4T2YoJ2ltYWdlJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZUltYWdlUHJldmlldyhmaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdkcm9wem9uZTpjaGFuZ2UnLCBmaWxlKTtcbiAgICB9XG4gICAgX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGaWxlUmVhZGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgZXZlbnQudGFyZ2V0LnJlc3VsdCArICdcIiknO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICAgIF9kaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQgfSkpO1xuICAgIH1cbn1cbmRlZmF1bHRfMS50YXJnZXRzID0gWydpbnB1dCcsICdwbGFjZWhvbGRlcicsICdwcmV2aWV3JywgJ3ByZXZpZXdDbGVhckJ1dHRvbicsICdwcmV2aWV3RmlsZW5hbWUnLCAncHJldmlld0ltYWdlJ107XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsInNpZGViYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjaGVja2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpdGVtIiwic3R5bGUiLCJvcGFjaXR5Iiwic2xpZGVzQ291bnQiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJzbGlkZVRleHQiLCJzbGlkZVN1YlRleHQiLCJjb25zb2xlIiwibG9nIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJtb2RhbEJ1dHRvbiIsInN3aXRjaEJ1dHRvbiIsIm1haW4iLCJ0cmFuc2Zvcm1Nb2RhbCIsInRvZ2dsZSIsInJvdXRlcyIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsInNlYXJjaEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hTdHJpbmciLCJ2YWx1ZSIsInVybCIsImdlbmVyYXRlIiwibG9jYXRpb24iLCJocmVmIiwiU2hvcHBpbmdDYXJ0IiwiY29sb3JTZWxlY3QiLCJzaXplU2VsZWN0IiwicHJvZHVjdFByaWNlSXRlbSIsInRvdGFsUHJpY2VJbkNhcnQiLCJzaG9wcGluZ0NhcnQiLCJhZGRQYXJhZ3JhcGgiLCJ0ZXh0IiwibGlzdEl0ZW0iLCJjbGFzc2VzQXJyYXkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiYWRkU21hbGxUZXh0IiwiY2xhc3NlcyIsInBhcmVudEl0ZW0iLCJzbWFsbEl0ZW0iLCJ1cGRhdGVOdW1iZXJCeUNhcnRCdXR0b24iLCJjYXJ0QW5jaG9yIiwiY2FydEl0ZW1zIiwicG9wdWxhdGVMaXN0Iiwic2hvcHBpbmdVbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInNob3BwaW5nSXRlbSIsImxpIiwiYnJhbmQiLCJuYW1lIiwicXR5IiwiY29sb3IiLCJzaXplIiwiaHJMaW5lIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvRml4ZWQiLCJhZGRUb0NhcnRCdG4iLCJkZWxldGVDb25maXJtQnV0dG9ucyIsInByb2R1Y3RJZCIsImRhdGFzZXQiLCJpZCIsInByb2R1Y3RCcmFuZCIsInByb2R1Y3RuYW1lIiwicHJvZHVjdE1vZGVsIiwicHJvZHVjdG1vZGVsIiwicHJvZHVjdFByaWNlIiwicHJpY2UiLCJwYXJzZUludCIsImFkZEl0ZW1Ub0NhcnQiLCJidXR0b25Td2l0Y2hXaXRoQ29sb3JzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJ0aGVuIiwic3RhdHVzIiwiYnV0dG9uIiwiZXYiLCJ0YXJnZXQiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJmb3JlZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXREYXRhRnJvbVN0b3JhZ2UiLCJ0b3RhbFByaWNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2V0SXRlbSIsInByb2R1Y3QiLCJzZWFyY2hPYmplY3RJZHgiLCJmaW5kSW5kZXgiLCJwdXNoIiwic2V0RGF0YUluU3RvcmFnZSIsInNwbGljZSIsInQiLCJfX2VzTW9kdWxlIiwiUm91dGVyIiwibyIsImwiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJnZXRJbnN0YW5jZSIsInNldERhdGEiLCJwcm90b3R5cGUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiT2JqZWN0IiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiZ2V0QmFzZVVybCIsImdldFNjaGVtZSIsImdldEhvc3QiLCJnZXRQb3J0IiwiZ2V0TG9jYWxlIiwiYnVpbGRRdWVyeVBhcmFtcyIsIm4iLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwidGVzdCIsImdldFJvdXRlIiwiRXJyb3IiLCJwIiwiaSIsInUiLCJhc3NpZ24iLCJjIiwiYSIsInRva2VucyIsImVuY29kZVBhdGhDb21wb25lbnQiLCJkZWZhdWx0cyIsImlzQXJyYXkiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiX3NjaGVtZSIsImluZGV4T2YiLCJzY2hlbWVzIiwia2V5cyIsImYiLCJoIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImpvaW4iLCJjdXN0b21FbmNvZGVVUklDb21wb25lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvcyIsImRlZmF1bHRfMSIsImNsZWFyIiwicHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0IiwiaW5wdXRUYXJnZXQiLCJldmVudCIsIm9uSW5wdXRDaGFuZ2UiLCJfZGlzcGF0Y2hFdmVudCIsImRpc3BsYXkiLCJwbGFjZWhvbGRlclRhcmdldCIsInByZXZpZXdUYXJnZXQiLCJwcmV2aWV3SW1hZ2VUYXJnZXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcmV2aWV3RmlsZW5hbWVUYXJnZXQiLCJmaWxlIiwiZmlsZXMiLCJ0eXBlIiwiX3BvcHVsYXRlSW1hZ2VQcmV2aWV3IiwiRmlsZVJlYWRlciIsInJlYWRlciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwidGFyZ2V0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9