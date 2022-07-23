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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBNkUsY0FBN0UsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7QUNqREE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXB0ZXItbmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC1mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaG9wcGluZy1jYXJ0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Nob3BwaW5nLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvUmVzb3VyY2VzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvUmVzb3VyY2VzL2Fzc2V0cy9zcmMvc3R5bGUuY3NzPzRhNjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgJ0BzeW1mb255L3V4LWRyb3B6b25lL3NyYy9zdHlsZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtZHJvcHpvbmUtLWRyb3B6b25lJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWRyb3B6b25lL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCAnLi9qcy9jaGFwdGVyLW5hdmlnYXRvcic7XG5pbXBvcnQgJy4vanMvc2hvcHBpbmctY2FydC1tYW5hZ2VyJztcbmltcG9ydCAnLi9qcy9jdXN0b20nO1xuaW1wb3J0ICcuL2pzL3NlYXJjaC1mb3JtJztcblxuLyogaW1wb3J0ICcuL2pzL2pxdWVyeS5taW4uanMnO1xuaW1wb3J0ICcuL2pzL2pxdWVyeS51cGxvYWRpZml2ZS5taW4uanMnO1xuKi9cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnYW5pbWF0ZS5jc3MnKTtcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLyogY2hlY2sgaWYgc2NyZWVuIHJlc2l6ZXMsIHRoYW4gY2hlY2svdW5jaGVjayBpbnB1dFxuICogIGlmIHNjcmVlbiBzaXplIDwgODBlbSBzaWRlYmFyIGlzIGhpZGRlblxuICogIGlmIGJpZ2dlciAoZGVza3RvcCkgdGhhbiBzaG93IHNpZGViYXJcbiAqICBpdCdzIGJhc2VkIG9uOlxuICogIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjQzODQ3Mi8xNDk2OTcyIFxuICovXG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLXNpZGViYXInKTtcblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3ItY2hlY2snKSAhPSBudWxsKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA4MGVtJykubWF0Y2hlcykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLWNoZWNrJykuY2hlY2tlZCA9IHRydWU7XG5cblxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDgwZW0pJykubWF0Y2hlcykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1jaGVjaycpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3ItY2hlY2snKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHRydWUpO1xufSIsIlxuLy8gKioqKioqKioqXG4gIC8vIFNMSURFUlxuICAvLyAqKioqKioqKioqXG5cblxuICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI215LXNsaWRlciA+IC5zbGlkZVwiKTtcbiAgLy8gY29uc3Qgc2xpZGVzID0gc2xpZGVyLmNoaWxkcmVuO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA+IDApIHtcbiAgICBzbGlkZXMuaXRlbSgwKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBjb25zdCBzbGlkZXNDb3VudCA9IHNsaWRlcy5sZW5ndGg7XG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDA7XG4gICAgbGV0IG5leHRTbGlkZSA9IDE7XG5cbiAgICBjb25zdCBzbGlkZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLXRleHRfX2hlYWRcIik7XG4gICAgY29uc3Qgc2xpZGVTdWJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS10ZXh0X19zdWJoZWFkXCIpO1xuICAgIGNvbnNvbGUubG9nKHNsaWRlVGV4dCk7XG5cbiAgICBzZXRJbnRlcnZhbChcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVzLml0ZW0oY3VycmVudFNsaWRlKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgbmV4dFNsaWRlID0gbmV4dFNsaWRlID09IHNsaWRlc0NvdW50IC0gMSA/IDAgOiBjdXJyZW50U2xpZGUgKyAxO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNsaWRlVGV4dC5sZW5ndGgpO1xuICAgICAgXG5cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA8IHNsaWRlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBzbGlkZVRleHRbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblVwXCIpO1xuICAgICAgICAgIHNsaWRlU3ViVGV4dFtjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluVXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGVyZSBjdXJyZW50U2xpZGUgaXMgcHJldmlvdXMgc2xpZGVcbiAgICAgICAgY3VycmVudFNsaWRlID0gbmV4dFNsaWRlO1xuICAgICAgICBzbGlkZXMuaXRlbShuZXh0U2xpZGUpLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIC8vaWYgbXVzdCBiZSByZXBlYXRlZCBmb3IgdGhlIHNvbWUgY29uZGl0aW9uLCBuZWVkIHRvIGZpbmQgYmV0dGVyIHdheVxuICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgc2xpZGVUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHNsaWRlVGV4dFtjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19zbGlkZUluVXBcIik7XG4gICAgICAgICAgc2xpZGVTdWJUZXh0W2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX3NsaWRlSW5VcFwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgNTAwMFxuICAgICk7XG4gIH1cblxuXG5cdFx0Y29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1tb2RhbCcpO1xuXHRcdGNvbnN0IHN3aXRjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LW1vZGFsLXN3aXRjaGVyJyk7XG5cdFx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cdFx0Y29uc3QgdHJhbnNmb3JtTW9kYWwgPSAoKSA9PiB7XG5cdFx0XHRtYWluLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtb3BlblwiKTtcblx0XHR9XG4gICAgaWYgKHN3aXRjaEJ1dHRvbiAhPSBudWxsICYmIG1vZGFsQnV0dG9uICE9IG51bGwgKSB7XG5cdFx0c3dpdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR0cmFuc2Zvcm1Nb2RhbCgpO1xuICBcblx0XHR9KVxuICBcblxuXHRcdG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR0cmFuc2Zvcm1Nb2RhbCgpO1xuXHRcdH0pXG4gIH1cblxuICBcblxuXG5cblxuXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcvcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3Atc2VhcmNoLWZvcm0nKTtcbiAgICBcbiAgICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXN0cmluZycpLnZhbHVlO1xuXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdpdGVtc19maWx0ZXInLCB7XG4gICAgICAgICAgICAnc2VhcmNoVGV4dCc6IHNlYXJjaFN0cmluZ1xuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9KTtcbn0pIiwiaW1wb3J0IFNob3BwaW5nQ2FydCBmcm9tICcuL3Nob3BwaW5nLWNhcnQnO1xuXG5sZXQgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itc2VsZWN0Jyk7XG5sZXQgc2l6ZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplLXNlbGVjdCcpO1xuXG5sZXQgcHJvZHVjdFByaWNlSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXByaWNlJyk7XG5sZXQgdG90YWxQcmljZUluQ2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbC1wcmljZScpO1xuLy8gZGlzcGxheXMgZmluYWwgcHJpY2UgZm9yIHByb2R1Y3RzIGluIG1vZGFsIHNoaXBwaW5nIGNhcnRcbmxldCBzaG9wcGluZ0NhcnQgPSBuZXcgU2hvcHBpbmdDYXJ0KCk7XG5cbi8vIGp1c3QgY3JlYXRlcyBcInBcIiBlbGVtZW50XG5jb25zdCBhZGRQYXJhZ3JhcGggPSAodGV4dCwgbGlzdEl0ZW0sIGNsYXNzZXNBcnJheSkgPT4ge1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBjbGFzc2VzQXJyYXkuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KVxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW0pO1xufVxuXG4vLyBjcmVhdGVzIFwicFwiIGVsZW1lbnQgYW5kIHRoZW4gaW5zaWRlIG9mIGl0IGEgXCJzbWFsbFwiIG9uZVxuY29uc3QgYWRkU21hbGxUZXh0ID0gKHRleHQsIGxpc3RJdGVtLCBjbGFzc2VzKSA9PiB7XG4gICAgbGV0IHBhcmVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHNtYWxsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XG4gICAgc21hbGxJdGVtLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcGFyZW50SXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICAgIHBhcmVudEl0ZW0uYXBwZW5kQ2hpbGQoc21hbGxJdGVtKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwYXJlbnRJdGVtKTtcbn1cblxuY29uc3QgdXBkYXRlTnVtYmVyQnlDYXJ0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcnRBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1hbmNob3InKTtcbiAgICBjYXJ0QW5jaG9yLmlubmVyVGV4dCA9IGAoJHtzaG9wcGluZ0NhcnQuY2FydEl0ZW1zLmxlbmd0aH0pYDtcbn1cblxuY29uc3QgcG9wdWxhdGVMaXN0ID0gKHNob3BwaW5nVWwpID0+IHtcbiAgICAvLyBzaG9wcGluZ1VsIGlzIEhUTUwgY29sbGVjdGlvblxuICAgIC8vIHNob3BwaW5nQ2FydCBpcyBKUyBhcnJheSBvZiBvYmplY3RzXG4gICAgd2hpbGUgKHNob3BwaW5nVWwuZmlyc3RDaGlsZCkge1xuICAgICAgICBzaG9wcGluZ1VsLnJlbW92ZUNoaWxkKHNob3BwaW5nVWwuZmlyc3RDaGlsZCk7XG5cbiAgICB9XG4gICAgLy9wb3B1bGF0ZSBsaXN0IGFnYWluXG4gICAgc2hvcHBpbmdDYXJ0LmNhcnRJdGVtcy5mb3JFYWNoKChzaG9wcGluZ0l0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGFkZFBhcmFncmFwaChzaG9wcGluZ0l0ZW0uYnJhbmQsIGxpLCBbJ2Z3LWJvbGQnLCAnbWItMCddKTtcbiAgICAgICAgYWRkUGFyYWdyYXBoKHNob3BwaW5nSXRlbS5uYW1lLCBsaSwgWydtYi0xJ10pO1xuICAgICAgICBhZGRTbWFsbFRleHQoJ1F1YW50aXR5OiAnICsgc2hvcHBpbmdJdGVtLnF0eSwgbGksICdtYi0wJyk7XG4gICAgICAgIGFkZFNtYWxsVGV4dCgnQ29sb3I6ICcgKyBzaG9wcGluZ0l0ZW0uY29sb3IsIGxpLCAnbWItMCcpO1xuICAgICAgICBhZGRTbWFsbFRleHQoJ1NpemU6ICcgKyBzaG9wcGluZ0l0ZW0uc2l6ZSwgbGksICdtYi0wJyk7XG5cbiAgICAgICAgY29uc3QgaHJMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaHJMaW5lKTtcbiAgICAgICAgc2hvcHBpbmdVbC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG5cbiAgICAvLyBDYWxjdWxhdGVzIGFuZCBkaXNwbGF5cyB0b3RhbCBwcmljZSBmb3IgYWxsIHByb2R1Y3RzIGluIHRoZSBiYWdcbiAgICB0b3RhbFByaWNlSW5DYXJ0LmlubmVyVGV4dCA9IHNob3BwaW5nQ2FydC5jYWxjdWxhdGVUb3RhbFByaWNlKCkudG9GaXhlZCgyKTtcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2hvcHBpbmdVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9wcGluZy1saXN0LXVsJyk7XG4gICBcbiAgICBwb3B1bGF0ZUxpc3Qoc2hvcHBpbmdVbCk7XG4gICAgY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1jYXJ0LWJ1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUNvbmZpcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1jb25maXJtLWJ1dHRvbicpO1xuICAgIHVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbigpO1xuXG4gICAgaWYgKGFkZFRvQ2FydEJ0biAhPSBudWxsKSB7XG4gICAgICAgIGFkZFRvQ2FydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBhZGRUb0NhcnRCdG4uZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RCcmFuZCA9IGFkZFRvQ2FydEJ0bi5kYXRhc2V0LnByb2R1Y3RuYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdE1vZGVsID0gYWRkVG9DYXJ0QnRuLmRhdGFzZXQucHJvZHVjdG1vZGVsO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gcHJvZHVjdFByaWNlSXRlbS5kYXRhc2V0LnByaWNlO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ftb3VudC1pbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gc2l6ZVNlbGVjdC52YWx1ZTtcblxuICAgICAgICAgICAgc2hvcHBpbmdDYXJ0LmFkZEl0ZW1Ub0NhcnQoe1xuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgcXR5OiBxdHksXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHByb2R1Y3RCcmFuZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0TW9kZWwsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3RQcmljZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBvcHVsYXRlTGlzdChzaG9wcGluZ1VsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY2hhbmdlcyBidXR0b24gdGV4dCBmb3IgYSBzZWNvbmQgd2hlbiBuZXcgaXRlbSBpcyBhZGRlZFxuICAgICAgICAgICAgLy8gaXRzJyBhc3luY2hyb25vdXMgdGhlcmVmb3JlIFwiQWRkZWQgdG8gY2FydFwiIHdpbGwgYmUgZGlzcGxheWVkIGZpcnN0LlxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uU3dpdGNoV2l0aENvbG9ycyhcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0QnRuLFxuICAgICAgICAgICAgICAgICAgICAnQWRkIHRvIGNhcnQnLFxuICAgICAgICAgICAgICAgICAgICAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAnd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH0sIDI0MDApO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnRuLmlubmVyVGV4dCA9IFwiQWRkZWQgdG8gY2FydCFcIlxuICAgICAgICAgICAgYnV0dG9uU3dpdGNoV2l0aENvbG9ycyhcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnRCdG4sXG4gICAgICAgICAgICAgICAgJ0FkZGVkIHRvIGNhcnQhJyxcbiAgICAgICAgICAgICAgICAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICdibGFjaydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gYnV0dG9uIFwiYW5pbWF0ZVwiIGVuZHMgaGVyZVxuXG4gICAgICAgICAgICB1cGRhdGVOdW1iZXJCeUNhcnRCdXR0b24oKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGZldGNoKFwiLy4uL2NoZWNrb3V0XCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc2hvcHBpbmdDYXJ0LmNhcnRJdGVtc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZCBvbiBzaG9wcGluZy1iYWcgcGFnZSBcbiAgICAvLyBpdCByZW1vdmVzIGl0ZW0gZnJvbSBsb2NhbFN0b3JhZ2UgSnNvbmVkIGFycmF5XG4gICAgLy8gYW5kIGZyb20gc2Vzc2lvblxuXG4gICAgaWYgKGRlbGV0ZUNvbmZpcm1CdXR0b25zICE9IG51bGwpIHtcbiAgICAgICAgZGVsZXRlQ29uZmlybUJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+ICB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZXYudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQucmVtb3ZlSXRlbUZyb21DYXJ0KGlkKTtcbiAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2RlbGV0ZS1mcm9tLWJhZy8ke2lkfWA7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgfVxufSk7XG5jb25zdCBidXR0b25Td2l0Y2hXaXRoQ29sb3JzID0gKGJ1dHRvbiwgdGV4dCxmb3JlZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvcikgPT4ge1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmb3JlZ3JvdW5kQ29sb3I7XG4gICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gYmFja2dyb3VuZENvbG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BwaW5nQ2FydCB7XG5cbiAgICAvKiogVGhpcyBzY3JpcHRzIGFkZHMgaXRlbXMgdG8gc2hvcHBpbmcgY2FydCwgYnV0IFxuICAgICAqIGlzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2Ugb25seSBub3QgaW4gU2Vzc2lvblN0b3JhZ2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gSXQgd2lsbCBzdG9yYWdlIGFsbCBzaG9wcGluZyBjYXJ0IGl0ZW1zIGhlcmVcbiAgICAgICAgdGhpcy5jYXJ0SXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jYXJ0SXRlbXMgPSB0aGlzLmdldERhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUHJpY2UoKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FydEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FydEl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gaXRlbS5xdHkgKiBpdGVtLnByaWNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXREYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydEl0ZW1zJykgPT09IG51bGxcbiAgICAgICAgICAgIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0SXRlbXMnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydEl0ZW1zJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldERhdGFJblN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0SXRlbXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnRJdGVtcykpO1xuICAgIH1cbiAgICBzZXRUb3RhbFByaWNlSW5TdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWxQcmljZScsIHRvdGFsUHJpY2UoKSlcbiAgICB9XG4gICAgdG90YWxQcmljZSgpIHtcblxuICAgIH1cbiAgICBhZGRJdGVtVG9DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSBpcyBpbiB0aGUgYXJyYXkgYWxyZWFkeVxuICAgICAgICBjb25zdCBzZWFyY2hPYmplY3RJZHggPSB0aGlzLmNhcnRJdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IHsgXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkO1xuICAgICAgICAgfSApXG4gICAgICAgIGlmIChzZWFyY2hPYmplY3RJZHggPT09IC0gMSkge1xuICAgICAgICAgICAgdGhpcy5jYXJ0SXRlbXMucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YUluU3RvcmFnZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcnRJdGVtc1tzZWFyY2hPYmplY3RJZHhdLnF0eSArPSAxO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhSW5TdG9yYWdlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVJdGVtRnJvbUNhcnQoaWQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIGNvbnN0IHNlYXJjaE9iamVjdElkeCA9IGRhdGEuZmluZEluZGV4KCBpdGVtID0+IHsgXG4gICAgICAgICAgICAvLyBpZCBtdXN0IGJlIHBhcnNlZCB0byBJbnQsIG90aGVyd2lzZSBkb2Vzbid0IHdvcmtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09IHBhcnNlSW50KGlkKTtcbiAgICAgICAgIH0gKTtcbiAgICAgICAgZGF0YS5zcGxpY2Uoc2VhcmNoT2JqZWN0SWR4LDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgfVxuICAgIHJlbW92ZUFsbEl0ZW1zKCkge1xuICAgICAgICB0aGlzLmNhcnRJdGVtcyA9IFtdO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydEl0ZW1zJywgW10pO1xuICAgIH1cbn1cbiIsIiFmdW5jdGlvbihlKXsodD17fSkuX19lc01vZHVsZT0hMCx0LlJvdXRpbmc9dC5Sb3V0ZXI9dm9pZCAwLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGUsdCl7dGhpcy5jb250ZXh0Xz1lfHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyh0fHx7fSl9cmV0dXJuIGwuZ2V0SW5zdGFuY2U9ZnVuY3Rpb24oKXtyZXR1cm4gdC5Sb3V0aW5nfSxsLnNldERhdGE9ZnVuY3Rpb24oZSl7bC5nZXRJbnN0YW5jZSgpLnNldFJvdXRpbmdEYXRhKGUpfSxsLnByb3RvdHlwZS5zZXRSb3V0aW5nRGF0YT1mdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLHZvaWQgMCE9PWUucHJlZml4JiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksdm9pZCAwIT09ZS5wb3J0JiZ0aGlzLnNldFBvcnQoZS5wb3J0KSx2b2lkIDAhPT1lLmxvY2FsZSYmdGhpcy5zZXRMb2NhbGUoZS5sb2NhbGUpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHZvaWQgMCE9PWUuc2NoZW1lJiZ0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9LGwucHJvdG90eXBlLnNldFJvdXRlcz1mdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX0sbC5wcm90b3R5cGUuZ2V0Um91dGVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX30sbC5wcm90b3R5cGUuc2V0QmFzZVVybD1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9LGwucHJvdG90eXBlLmdldEJhc2VVcmw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH0sbC5wcm90b3R5cGUuc2V0UHJlZml4PWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9LGwucHJvdG90eXBlLnNldFNjaGVtZT1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfSxsLnByb3RvdHlwZS5nZXRTY2hlbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9LGwucHJvdG90eXBlLnNldEhvc3Q9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9LGwucHJvdG90eXBlLmdldEhvc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fSxsLnByb3RvdHlwZS5zZXRQb3J0PWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucG9ydD1lfSxsLnByb3RvdHlwZS5nZXRQb3J0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH0sbC5wcm90b3R5cGUuc2V0TG9jYWxlPWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9LGwucHJvdG90eXBlLmdldExvY2FsZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZX0sbC5wcm90b3R5cGUuYnVpbGRRdWVyeVBhcmFtcz1mdW5jdGlvbihvLGUsbil7dmFyIHQscj10aGlzLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKGUgaW5zdGFuY2VvZiBBcnJheSllLmZvckVhY2goZnVuY3Rpb24oZSx0KXtzLnRlc3Qobyk/bihvLGUpOnIuYnVpbGRRdWVyeVBhcmFtcyhvK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT90OlwiXCIpK1wiXVwiLGUsbil9KTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWZvcih0IGluIGUpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKG8rXCJbXCIrdCtcIl1cIixlW3RdLG4pO2Vsc2UgbihvLGUpfSxsLnByb3RvdHlwZS5nZXRSb3V0ZT1mdW5jdGlvbihlKXt2YXIgdCxvPVt0aGlzLmNvbnRleHRfLnByZWZpeCtlLGUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsdGhpcy5jb250ZXh0Xy5wcmVmaXgrZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxlXTtmb3IodCBpbiBvKWlmKG9bdF1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tvW3RdXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9LGwucHJvdG90eXBlLmdlbmVyYXRlPWZ1bmN0aW9uKHIsZSxwKXt2YXIgdCxzPXRoaXMuZ2V0Um91dGUociksaT1lfHx7fSx1PU9iamVjdC5hc3NpZ24oe30saSksYz1cIlwiLGE9ITAsbz1cIlwiLGU9dm9pZCAwPT09dGhpcy5nZXRQb3J0KCl8fG51bGw9PT10aGlzLmdldFBvcnQoKT9cIlwiOnRoaXMuZ2V0UG9ydCgpO2lmKHMudG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoXCJ0ZXh0XCI9PT1lWzBdJiZcInN0cmluZ1wiPT10eXBlb2YgZVsxXSlyZXR1cm4gYz1sLmVuY29kZVBhdGhDb21wb25lbnQoZVsxXSkrYyx2b2lkKGE9ITEpO2lmKFwidmFyaWFibGVcIiE9PWVbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrZVswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTs2PT09ZS5sZW5ndGgmJiEwPT09ZVs1XSYmKGE9ITEpO3ZhciB0PXMuZGVmYXVsdHMmJiFBcnJheS5pc0FycmF5KHMuZGVmYXVsdHMpJiZcInN0cmluZ1wiPT10eXBlb2YgZVszXSYmZVszXWluIHMuZGVmYXVsdHM7aWYoITE9PT1hfHwhdHx8XCJzdHJpbmdcIj09dHlwZW9mIGVbM10mJmVbM11pbiBpJiYhQXJyYXkuaXNBcnJheShzLmRlZmF1bHRzKSYmaVtlWzNdXSE9cy5kZWZhdWx0c1tlWzNdXSl7dmFyIG8sbj12b2lkIDA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGVbM10mJmVbM11pbiBpKW49aVtlWzNdXSxkZWxldGUgdVtlWzNdXTtlbHNle2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlWzNdfHwhdHx8QXJyYXkuaXNBcnJheShzLmRlZmF1bHRzKSl7aWYoYSlyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK3IrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK2VbM10rJ1wiLicpfW49cy5kZWZhdWx0c1tlWzNdXX0oITA9PT1ufHwhMT09PW58fFwiXCI9PT1uKSYmYXx8KG89bC5lbmNvZGVQYXRoQ29tcG9uZW50KG4pLGM9ZVsxXSsobz1cIm51bGxcIj09PW8mJm51bGw9PT1uP1wiXCI6bykrYyksYT0hMX1lbHNlIHQmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzNdJiZlWzNdaW4gdSYmZGVsZXRlIHVbZVszXV19KSxcIlwiPT09YyYmKGM9XCIvXCIpLHMuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0O1widGV4dFwiIT09ZVswXT9cInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIGk/KHQ9aVtlWzNdXSxkZWxldGUgdVtlWzNdXSk6cy5kZWZhdWx0cyYmIUFycmF5LmlzQXJyYXkocy5kZWZhdWx0cykmJmVbM11pbiBzLmRlZmF1bHRzJiYodD1zLmRlZmF1bHRzW2VbM11dKSxvPWVbMV0rdCtvKTpvPWVbMV0rb30pLGM9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCtjLHMucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIHMucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1zLnJlcXVpcmVtZW50cy5fc2NoZW1lPyh0PW98fHRoaXMuZ2V0SG9zdCgpLGM9cy5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiK3QrKC0xPHQuaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKStjKTp2b2lkIDAhPT1zLnNjaGVtZXMmJnZvaWQgMCE9PXMuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PXMuc2NoZW1lc1swXT8odD1vfHx0aGlzLmdldEhvc3QoKSxjPXMuc2NoZW1lc1swXStcIjovL1wiK3QrKC0xPHQuaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKStjKTpvJiZ0aGlzLmdldEhvc3QoKSE9PW8rKC0xPG8uaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKT9jPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIitvKygtMTxvLmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYzohMD09PXAmJihjPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSsoLTE8dGhpcy5nZXRIb3N0KCkuaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKStjKSwwPE9iamVjdC5rZXlzKHUpLmxlbmd0aCl7ZnVuY3Rpb24gZihlLHQpe3Q9bnVsbD09PSh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQpP1wiXCI6dCxoLnB1c2gobC5lbmNvZGVRdWVyeUNvbXBvbmVudChlKStcIj1cIitsLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHQpKX12YXIgbixoPVtdO2ZvcihuIGluIHUpdS5oYXNPd25Qcm9wZXJ0eShuKSYmdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKG4sdVtuXSxmKTtjPWMrXCI/XCIraC5qb2luKFwiJlwiKX1yZXR1cm4gY30sbC5jdXN0b21FbmNvZGVVUklDb21wb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lMkYvZyxcIi9cIikucmVwbGFjZSgvJTQwL2csXCJAXCIpLnJlcGxhY2UoLyUzQS9nLFwiOlwiKS5yZXBsYWNlKC8lMjEvZyxcIiFcIikucmVwbGFjZSgvJTNCL2csXCI7XCIpLnJlcGxhY2UoLyUyQy9nLFwiLFwiKS5yZXBsYWNlKC8lMkEvZyxcIipcIikucmVwbGFjZSgvXFwoL2csXCIlMjhcIikucmVwbGFjZSgvXFwpL2csXCIlMjlcIikucmVwbGFjZSgvJy9nLFwiJTI3XCIpfSxsLmVuY29kZVBhdGhDb21wb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGwuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUzRC9nLFwiPVwiKS5yZXBsYWNlKC8lMkIvZyxcIitcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyU3Qy9nLFwifFwiKX0sbC5lbmNvZGVRdWVyeUNvbXBvbmVudD1mdW5jdGlvbihlKXtyZXR1cm4gbC5jdXN0b21FbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTNGL2csXCI/XCIpfSxsfSgpLHQuUm91dGVyPW8sdC5Sb3V0aW5nPW5ldyBvLHQuZGVmYXVsdD10LlJvdXRpbmc7dmFyIHQsbz17Um91dGVyOnQuUm91dGVyLFJvdXRpbmc6dC5Sb3V0aW5nfTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG8uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9by5Sb3V0aW5nOihlLlJvdXRpbmc9by5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6by5Sb3V0ZXJ9KX0odGhpcyk7IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsZWFyKCkpO1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50KSk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNvbm5lY3QnKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZW5hbWVUYXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnZHJvcHpvbmU6Y2xlYXInKTtcbiAgICB9XG4gICAgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAodHlwZW9mIGZpbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ZpbGVuYW1lVGFyZ2V0LnRleHRDb250ZW50ID0gZmlsZS5uYW1lO1xuICAgICAgICB0aGlzLnByZXZpZXdUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKGZpbGUudHlwZSAmJiBmaWxlLnR5cGUuaW5kZXhPZignaW1hZ2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNoYW5nZScsIGZpbGUpO1xuICAgIH1cbiAgICBfcG9wdWxhdGVJbWFnZVByZXZpZXcoZmlsZSkge1xuICAgICAgICBpZiAodHlwZW9mIEZpbGVSZWFkZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBldmVudC50YXJnZXQucmVzdWx0ICsgJ1wiKSc7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IHt9KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnRhcmdldHMgPSBbJ2lucHV0JywgJ3BsYWNlaG9sZGVyJywgJ3ByZXZpZXcnLCAncHJldmlld0NsZWFyQnV0dG9uJywgJ3ByZXZpZXdGaWxlbmFtZScsICdwcmV2aWV3SW1hZ2UnXTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0Iiwic2lkZWJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIml0ZW0iLCJzdHlsZSIsIm9wYWNpdHkiLCJzbGlkZXNDb3VudCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInNsaWRlVGV4dCIsInNsaWRlU3ViVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1vZGFsQnV0dG9uIiwic3dpdGNoQnV0dG9uIiwibWFpbiIsInRyYW5zZm9ybU1vZGFsIiwidG9nZ2xlIiwicm91dGVzIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwic2VhcmNoRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaFN0cmluZyIsInZhbHVlIiwidXJsIiwiZ2VuZXJhdGUiLCJsb2NhdGlvbiIsImhyZWYiLCJTaG9wcGluZ0NhcnQiLCJjb2xvclNlbGVjdCIsInNpemVTZWxlY3QiLCJwcm9kdWN0UHJpY2VJdGVtIiwidG90YWxQcmljZUluQ2FydCIsInNob3BwaW5nQ2FydCIsImFkZFBhcmFncmFwaCIsInRleHQiLCJsaXN0SXRlbSIsImNsYXNzZXNBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJmb3JFYWNoIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJhZGRTbWFsbFRleHQiLCJjbGFzc2VzIiwicGFyZW50SXRlbSIsInNtYWxsSXRlbSIsInVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbiIsImNhcnRBbmNob3IiLCJjYXJ0SXRlbXMiLCJwb3B1bGF0ZUxpc3QiLCJzaG9wcGluZ1VsIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic2hvcHBpbmdJdGVtIiwibGkiLCJicmFuZCIsIm5hbWUiLCJxdHkiLCJjb2xvciIsInNpemUiLCJockxpbmUiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwidG9GaXhlZCIsImFkZFRvQ2FydEJ0biIsImRlbGV0ZUNvbmZpcm1CdXR0b25zIiwicHJvZHVjdElkIiwiZGF0YXNldCIsImlkIiwicHJvZHVjdEJyYW5kIiwicHJvZHVjdG5hbWUiLCJwcm9kdWN0TW9kZWwiLCJwcm9kdWN0bW9kZWwiLCJwcm9kdWN0UHJpY2UiLCJwcmljZSIsInBhcnNlSW50IiwiYWRkSXRlbVRvQ2FydCIsImJ1dHRvblN3aXRjaFdpdGhDb2xvcnMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInRoZW4iLCJzdGF0dXMiLCJidXR0b24iLCJldiIsInRhcmdldCIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsImZvcmVncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImdldERhdGFGcm9tU3RvcmFnZSIsInRvdGFsUHJpY2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRJdGVtIiwicHJvZHVjdCIsInNlYXJjaE9iamVjdElkeCIsImZpbmRJbmRleCIsInB1c2giLCJzZXREYXRhSW5TdG9yYWdlIiwic3BsaWNlIiwidCIsIl9fZXNNb2R1bGUiLCJSb3V0ZXIiLCJvIiwibCIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsImdldEluc3RhbmNlIiwic2V0RGF0YSIsInByb3RvdHlwZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJPYmplY3QiLCJmcmVlemUiLCJnZXRSb3V0ZXMiLCJnZXRCYXNlVXJsIiwiZ2V0U2NoZW1lIiwiZ2V0SG9zdCIsImdldFBvcnQiLCJnZXRMb2NhbGUiLCJidWlsZFF1ZXJ5UGFyYW1zIiwibiIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJFcnJvciIsInAiLCJpIiwidSIsImFzc2lnbiIsImMiLCJhIiwidG9rZW5zIiwiZW5jb2RlUGF0aENvbXBvbmVudCIsImRlZmF1bHRzIiwiaXNBcnJheSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJfc2NoZW1lIiwiaW5kZXhPZiIsInNjaGVtZXMiLCJrZXlzIiwiZiIsImgiLCJlbmNvZGVRdWVyeUNvbXBvbmVudCIsImhhc093blByb3BlcnR5Iiwiam9pbiIsImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9zIiwiZGVmYXVsdF8xIiwiY2xlYXIiLCJwcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQiLCJpbnB1dFRhcmdldCIsImV2ZW50Iiwib25JbnB1dENoYW5nZSIsIl9kaXNwYXRjaEV2ZW50IiwiZGlzcGxheSIsInBsYWNlaG9sZGVyVGFyZ2V0IiwicHJldmlld1RhcmdldCIsInByZXZpZXdJbWFnZVRhcmdldCIsImJhY2tncm91bmRJbWFnZSIsInByZXZpZXdGaWxlbmFtZVRhcmdldCIsImZpbGUiLCJmaWxlcyIsInR5cGUiLCJfcG9wdWxhdGVJbWFnZVByZXZpZXciLCJGaWxlUmVhZGVyIiwicmVhZGVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJ0YXJnZXRzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=