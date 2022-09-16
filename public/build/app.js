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
  setInterval(function () {
    slides.item(currentSlide).style.opacity = 0;
    nextSlide = nextSlide == slidesCount - 1 ? 0 : currentSlide + 1;

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
  var searchAllForm = document.getElementById('top-search-form');
  var searchProductForm = document.getElementById('search-product__form');
  var searchStock = document.getElementById('search-stock');
  var searchUsers = document.getElementById('search-users'); // search on the main page

  if (searchAllForm != null) {
    searchAllForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var searchString = document.getElementById('search-string').value;
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default().generate('items_filter', {
        'searchText': searchString
      });
      location.href = url;
    });
  } // prepares search based on routename and searches string
  // search products (when route name = catalog)
  // search stocks (when routename = stock)
  // search customers (when routename = customers)


  if (searchProductForm != null) {
    searchProductForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var searchString = document.getElementById('search-product__input').value;
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default().generate(searchProductForm.dataset.routename, {
        'searchString': searchString
      });
      location.href = url;
    });
  }
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
  if (shoppingUl != null) {
    while (shoppingUl.firstChild) {
      shoppingUl.removeChild(shoppingUl.firstChild);
    }
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
module.exports = JSON.parse('{"base_url":"","routes":{"catalog":{"tokens":[["variable","/","[^/]++","searchString",true],["variable","/","[^/]++","sorting",true],["variable","/","[^/]++","category",true],["variable","/","[^/]++","page",true],["text","/admin/catalog"]],"defaults":{"sorting":"name_desc","page":1,"category":"all","searchString":""},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"stock":{"tokens":[["variable","/","[^/]++","searchString",true],["variable","/","[^/]++","sorting",true],["variable","/","[^/]++","category",true],["variable","/","[^/]++","page",true],["text","/admin/stock"]],"defaults":{"sorting":"name_desc","page":1,"category":"all","searchString":""},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sales":{"tokens":[["text","/admin/sales"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"customers":{"tokens":[["variable","/","[^/]++","searchString",true],["variable","/","[^/]++","sorting",true],["variable","/","[^/]++","page",true],["text","/admin/customers"]],"defaults":{"sorting":"name_desc","page":1,"searchString":""},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"items_filter":{"tokens":[["variable","/","[^/]++","page",true],["variable","/","[^/]++","sortBy",true],["variable","/","[^/]++","searchText",true],["variable","/","[^/]++","category",true],["variable","/","[^/]++","priceTo",true],["variable","/","[^/]++","priceFrom",true],["variable","/","[^/]++","brands",true],["variable","/","[^/]++","sizes",true],["text","/items-filter"]],"defaults":{"sizes":"noSizes","brands":"noBrands","priceFrom":0,"priceTo":99999,"category":"allCats","searchText":"none","sortBy":"noSort","page":1},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--a0b2e9","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-2945d7"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQXdCLE1BQXhCLEVBQWdDLFVBQUM4TCxLQUFELEVBQVc7QUFDdkMsY0FBSSxDQUFDTSxrQkFBTCxDQUF3Qi9MLEtBQXhCLENBQThCNEwsT0FBOUIsR0FBd0MsT0FBeEM7QUFDQSxjQUFJLENBQUNHLGtCQUFMLENBQXdCL0wsS0FBeEIsQ0FBOEJnTSxlQUE5QixHQUFnRCxVQUFVUCxLQUFLLENBQUN6RixNQUFOLENBQWF3RyxNQUF2QixHQUFnQyxJQUFoRjtBQUNILE9BSEQ7QUFJQUQsTUFBQUEsTUFBTSxDQUFDRSxhQUFQLENBQXFCUCxJQUFyQjtBQUNIOzs7V0FDRCx3QkFBZXBJLElBQWYsRUFBbUM7QUFBQSxVQUFkNEksT0FBYyx1RUFBSixFQUFJO0FBQy9CLFdBQUs1TixPQUFMLENBQWE2TixhQUFiLENBQTJCLElBQUlDLFdBQUosQ0FBZ0I5SSxJQUFoQixFQUFzQjtBQUFFK0ksUUFBQUEsTUFBTSxFQUFFSDtBQUFWLE9BQXRCLENBQTNCO0FBQ0g7Ozs7RUE3Q21CN047O0FBK0N4QndNLFNBQVMsQ0FBQ3lCLE9BQVYsR0FBb0IsQ0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QixTQUF6QixFQUFvQyxvQkFBcEMsRUFBMEQsaUJBQTFELEVBQTZFLGNBQTdFLENBQXBCOzs7Ozs7Ozs7Ozs7O0FDakRBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGFwdGVyLW5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2hvcHBpbmctY2FydC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaG9wcGluZy1jYXJ0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWRyb3B6b25lL1Jlc291cmNlcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWRyb3B6b25lL1Jlc291cmNlcy9hc3NldHMvc3JjL3N0eWxlLmNzcz80YTY3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0ICdAc3ltZm9ueS91eC1kcm9wem9uZS9zcmMvc3R5bGUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWRyb3B6b25lLS1kcm9wem9uZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1kcm9wem9uZS9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJy4vanMvY2hhcHRlci1uYXZpZ2F0b3InO1xuaW1wb3J0ICcuL2pzL3Nob3BwaW5nLWNhcnQtbWFuYWdlcic7XG5pbXBvcnQgJy4vanMvY3VzdG9tJztcbmltcG9ydCAnLi9qcy9zZWFyY2gtZm9ybSc7XG5cbi8qIGltcG9ydCAnLi9qcy9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnLi9qcy9qcXVlcnkudXBsb2FkaWZpdmUubWluLmpzJztcbiovXG5yZXF1aXJlKCdib290c3RyYXAnKTtcbnJlcXVpcmUoJ2FuaW1hdGUuY3NzJyk7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8qIGNoZWNrIGlmIHNjcmVlbiByZXNpemVzLCB0aGFuIGNoZWNrL3VuY2hlY2sgaW5wdXRcbiAqICBpZiBzY3JlZW4gc2l6ZSA8IDgwZW0gc2lkZWJhciBpcyBoaWRkZW5cbiAqICBpZiBiaWdnZXIgKGRlc2t0b3ApIHRoYW4gc2hvdyBzaWRlYmFyXG4gKiAgaXQncyBiYXNlZCBvbjpcbiAqICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDY0Mzg0NzIvMTQ5Njk3MiBcbiAqL1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1zaWRlYmFyJyk7XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLWNoZWNrJykgIT0gbnVsbCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogODBlbScpLm1hdGNoZXMpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1jaGVjaycpLmNoZWNrZWQgPSB0cnVlO1xuXG5cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA4MGVtKScpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3ItY2hlY2snKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLWNoZWNrJykuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB0cnVlKTtcbn0iLCJcbi8vICoqKioqKioqKlxuICAvLyBTTElERVJcbiAgLy8gKioqKioqKioqKlxuXG5cbiAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNteS1zbGlkZXIgPiAuc2xpZGVcIik7XG4gIC8vIGNvbnN0IHNsaWRlcyA9IHNsaWRlci5jaGlsZHJlbjtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPiAwKSB7XG4gICAgc2xpZGVzLml0ZW0oMCkuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgY29uc3Qgc2xpZGVzQ291bnQgPSBzbGlkZXMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xuICAgIGxldCBuZXh0U2xpZGUgPSAxO1xuXG4gICAgY29uc3Qgc2xpZGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS10ZXh0X19oZWFkXCIpO1xuICAgIGNvbnN0IHNsaWRlU3ViVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtdGV4dF9fc3ViaGVhZFwiKTtcbiAgICBzZXRJbnRlcnZhbChcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVzLml0ZW0oY3VycmVudFNsaWRlKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgbmV4dFNsaWRlID0gbmV4dFNsaWRlID09IHNsaWRlc0NvdW50IC0gMSA/IDAgOiBjdXJyZW50U2xpZGUgKyAxO1xuXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPCBzbGlkZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgc2xpZGVUZXh0W2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5VcFwiKTtcbiAgICAgICAgICBzbGlkZVN1YlRleHRbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblVwXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhlcmUgY3VycmVudFNsaWRlIGlzIHByZXZpb3VzIHNsaWRlXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IG5leHRTbGlkZTtcbiAgICAgICAgc2xpZGVzLml0ZW0obmV4dFNsaWRlKS5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgICAgICAvL2lmIG11c3QgYmUgcmVwZWF0ZWQgZm9yIHRoZSBzb21lIGNvbmRpdGlvbiwgbmVlZCB0byBmaW5kIGJldHRlciB3YXlcbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA8IHNsaWRlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBzbGlkZVRleHRbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fc2xpZGVJblVwXCIpO1xuICAgICAgICAgIHNsaWRlU3ViVGV4dFtjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19zbGlkZUluVXBcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICA1MDAwXG4gICAgKTtcbiAgfVxuXHRcdGNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtbW9kYWwnKTtcblx0XHRjb25zdCBzd2l0Y2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1tb2RhbC1zd2l0Y2hlcicpO1xuXHRcdGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXHRcdGNvbnN0IHRyYW5zZm9ybU1vZGFsID0gKCkgPT4ge1xuXHRcdFx0bWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wZW5cIik7XG5cdFx0fVxuICAgIGlmIChzd2l0Y2hCdXR0b24gIT0gbnVsbCAmJiBtb2RhbEJ1dHRvbiAhPSBudWxsICkge1xuXHRcdHN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJhbnNmb3JtTW9kYWwoKTtcblx0XHR9KVxuXHRcdG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR0cmFuc2Zvcm1Nb2RhbCgpO1xuXHRcdH0pXG4gIH1cblxuXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcvcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoQWxsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3Atc2VhcmNoLWZvcm0nKTtcbiAgICBjb25zdCBzZWFyY2hQcm9kdWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcHJvZHVjdF9fZm9ybScpO1xuICAgIFxuICAgIGNvbnN0IHNlYXJjaFN0b2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdG9jaycpO1xuICAgIGNvbnN0IHNlYXJjaFVzZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC11c2VycycpO1xuXG5cbiAgICAvLyBzZWFyY2ggb24gdGhlIG1haW4gcGFnZVxuICAgIGlmIChzZWFyY2hBbGxGb3JtICE9IG51bGwpIHtcbiAgICBzZWFyY2hBbGxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXN0cmluZycpLnZhbHVlO1xuXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdpdGVtc19maWx0ZXInLCB7XG4gICAgICAgICAgICAnc2VhcmNoVGV4dCc6IHNlYXJjaFN0cmluZ1xuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9KTtcbiAgICB9IFxuXG4gICAgLy8gcHJlcGFyZXMgc2VhcmNoIGJhc2VkIG9uIHJvdXRlbmFtZSBhbmQgc2VhcmNoZXMgc3RyaW5nXG4gICAgLy8gc2VhcmNoIHByb2R1Y3RzICh3aGVuIHJvdXRlIG5hbWUgPSBjYXRhbG9nKVxuICAgIC8vIHNlYXJjaCBzdG9ja3MgKHdoZW4gcm91dGVuYW1lID0gc3RvY2spXG4gICAgLy8gc2VhcmNoIGN1c3RvbWVycyAod2hlbiByb3V0ZW5hbWUgPSBjdXN0b21lcnMpXG4gICAgaWYgKHNlYXJjaFByb2R1Y3RGb3JtICE9IG51bGwpIHtcbiAgICAgICAgc2VhcmNoUHJvZHVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXByb2R1Y3RfX2lucHV0JykudmFsdWU7XG4gICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9kdWN0Rm9ybS5kYXRhc2V0LnJvdXRlbmFtZSwge1xuICAgICAgICAgICAgICAgICdzZWFyY2hTdHJpbmcnOiBzZWFyY2hTdHJpbmdcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgIH0pO1xuXG4gICBcbiAgICB9XG59KSIsImltcG9ydCBTaG9wcGluZ0NhcnQgZnJvbSAnLi9zaG9wcGluZy1jYXJ0JztcblxubGV0IGNvbG9yU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXNlbGVjdCcpO1xubGV0IHNpemVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZS1zZWxlY3QnKTtcblxubGV0IHByb2R1Y3RQcmljZUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1wcmljZScpO1xubGV0IHRvdGFsUHJpY2VJbkNhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtcHJpY2UnKTtcbi8vIGRpc3BsYXlzIGZpbmFsIHByaWNlIGZvciBwcm9kdWN0cyBpbiBtb2RhbCBzaGlwcGluZyBjYXJ0XG5sZXQgc2hvcHBpbmdDYXJ0ID0gbmV3IFNob3BwaW5nQ2FydCgpO1xuXG4vLyBqdXN0IGNyZWF0ZXMgXCJwXCIgZWxlbWVudFxuY29uc3QgYWRkUGFyYWdyYXBoID0gKHRleHQsIGxpc3RJdGVtLCBjbGFzc2VzQXJyYXkpID0+IHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgY2xhc3Nlc0FycmF5LmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSlcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtKTtcbn1cblxuLy8gY3JlYXRlcyBcInBcIiBlbGVtZW50IGFuZCB0aGVuIGluc2lkZSBvZiBpdCBhIFwic21hbGxcIiBvbmVcbmNvbnN0IGFkZFNtYWxsVGV4dCA9ICh0ZXh0LCBsaXN0SXRlbSwgY2xhc3NlcykgPT4ge1xuICAgIGxldCBwYXJlbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBzbWFsbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICAgIHNtYWxsSXRlbS5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHBhcmVudEl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICBwYXJlbnRJdGVtLmFwcGVuZENoaWxkKHNtYWxsSXRlbSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocGFyZW50SXRlbSk7XG59XG5cbmNvbnN0IHVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJ0QW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYW5jaG9yJyk7XG4gICAgY2FydEFuY2hvci5pbm5lclRleHQgPSBgKCR7c2hvcHBpbmdDYXJ0LmNhcnRJdGVtcy5sZW5ndGh9KWA7XG59XG5cbmNvbnN0IHBvcHVsYXRlTGlzdCA9IChzaG9wcGluZ1VsKSA9PiB7XG4gICAgLy8gc2hvcHBpbmdVbCBpcyBIVE1MIGNvbGxlY3Rpb25cbiAgICAvLyBzaG9wcGluZ0NhcnQgaXMgSlMgYXJyYXkgb2Ygb2JqZWN0c1xuICAgIGlmIChzaG9wcGluZ1VsICE9IG51bGwpIHtcbiAgICAgICAgd2hpbGUgKHNob3BwaW5nVWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2hvcHBpbmdVbC5yZW1vdmVDaGlsZChzaG9wcGluZ1VsLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAvL3BvcHVsYXRlIGxpc3QgYWdhaW5cbiAgICBzaG9wcGluZ0NhcnQuY2FydEl0ZW1zLmZvckVhY2goKHNob3BwaW5nSXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgYWRkUGFyYWdyYXBoKHNob3BwaW5nSXRlbS5icmFuZCwgbGksIFsnZnctYm9sZCcsICdtYi0wJ10pO1xuICAgICAgICBhZGRQYXJhZ3JhcGgoc2hvcHBpbmdJdGVtLm5hbWUsIGxpLCBbJ21iLTEnXSk7XG4gICAgICAgIGFkZFNtYWxsVGV4dCgnUXVhbnRpdHk6ICcgKyBzaG9wcGluZ0l0ZW0ucXR5LCBsaSwgJ21iLTAnKTtcbiAgICAgICAgYWRkU21hbGxUZXh0KCdDb2xvcjogJyArIHNob3BwaW5nSXRlbS5jb2xvciwgbGksICdtYi0wJyk7XG4gICAgICAgIGFkZFNtYWxsVGV4dCgnU2l6ZTogJyArIHNob3BwaW5nSXRlbS5zaXplLCBsaSwgJ21iLTAnKTtcblxuICAgICAgICBjb25zdCBockxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChockxpbmUpO1xuICAgICAgICBzaG9wcGluZ1VsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcblxuICAgIC8vIENhbGN1bGF0ZXMgYW5kIGRpc3BsYXlzIHRvdGFsIHByaWNlIGZvciBhbGwgcHJvZHVjdHMgaW4gdGhlIGJhZ1xuICAgIHRvdGFsUHJpY2VJbkNhcnQuaW5uZXJUZXh0ID0gc2hvcHBpbmdDYXJ0LmNhbGN1bGF0ZVRvdGFsUHJpY2UoKS50b0ZpeGVkKDIpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzaG9wcGluZ1VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3BwaW5nLWxpc3QtdWwnKTtcbiAgIFxuICAgIHBvcHVsYXRlTGlzdChzaG9wcGluZ1VsKTtcbiAgICBjb25zdCBhZGRUb0NhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvLWNhcnQtYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQ29uZmlybUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWNvbmZpcm0tYnV0dG9uJyk7XG4gICAgdXBkYXRlTnVtYmVyQnlDYXJ0QnV0dG9uKCk7XG5cbiAgICBpZiAoYWRkVG9DYXJ0QnRuICE9IG51bGwpIHtcbiAgICAgICAgYWRkVG9DYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IGFkZFRvQ2FydEJ0bi5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEJyYW5kID0gYWRkVG9DYXJ0QnRuLmRhdGFzZXQucHJvZHVjdG5hbWU7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0TW9kZWwgPSBhZGRUb0NhcnRCdG4uZGF0YXNldC5wcm9kdWN0bW9kZWw7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0UHJpY2UgPSBwcm9kdWN0UHJpY2VJdGVtLmRhdGFzZXQucHJpY2U7XG4gICAgICAgICAgICBjb25zdCBxdHkgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50LWlucHV0JykudmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvclNlbGVjdC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBzaXplU2VsZWN0LnZhbHVlO1xuXG4gICAgICAgICAgICBzaG9wcGluZ0NhcnQuYWRkSXRlbVRvQ2FydCh7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICBxdHk6IHF0eSxcbiAgICAgICAgICAgICAgICBicmFuZDogcHJvZHVjdEJyYW5kLFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RNb2RlbCxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogcHJvZHVjdFByaWNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcG9wdWxhdGVMaXN0KHNob3BwaW5nVWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjaGFuZ2VzIGJ1dHRvbiB0ZXh0IGZvciBhIHNlY29uZCB3aGVuIG5ldyBpdGVtIGlzIGFkZGVkXG4gICAgICAgICAgICAvLyBpdHMnIGFzeW5jaHJvbm91cyB0aGVyZWZvcmUgXCJBZGRlZCB0byBjYXJ0XCIgd2lsbCBiZSBkaXNwbGF5ZWQgZmlyc3QuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgICAgICAgICAgICAgICBidXR0b25Td2l0Y2hXaXRoQ29sb3JzKFxuICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRCdG4sXG4gICAgICAgICAgICAgICAgICAgICdBZGQgdG8gY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfSwgMjQwMCk7XG4gICAgICAgICAgICBhZGRUb0NhcnRCdG4uaW5uZXJUZXh0ID0gXCJBZGRlZCB0byBjYXJ0IVwiXG4gICAgICAgICAgICBidXR0b25Td2l0Y2hXaXRoQ29sb3JzKFxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydEJ0bixcbiAgICAgICAgICAgICAgICAnQWRkZWQgdG8gY2FydCEnLFxuICAgICAgICAgICAgICAgICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgJ2JsYWNrJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBidXR0b24gXCJhbmltYXRlXCIgZW5kcyBoZXJlXG5cbiAgICAgICAgICAgIHVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbigpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZmV0Y2goXCIvLi4vY2hlY2tvdXRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzaG9wcGluZ0NhcnQuY2FydEl0ZW1zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgZGVsZXRlIGJ1dHRvbiBpcyBjbGlja2VkIG9uIHNob3BwaW5nLWJhZyBwYWdlIFxuICAgIC8vIGl0IHJlbW92ZXMgaXRlbSBmcm9tIGxvY2FsU3RvcmFnZSBKc29uZWQgYXJyYXlcbiAgICAvLyBhbmQgZnJvbSBzZXNzaW9uXG5cbiAgICBpZiAoZGVsZXRlQ29uZmlybUJ1dHRvbnMgIT0gbnVsbCkge1xuICAgICAgICBkZWxldGVDb25maXJtQnV0dG9ucy5mb3JFYWNoKCBidXR0b24gPT4gIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgICAgY29uc3QgaWQgPSBldi50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5yZW1vdmVJdGVtRnJvbUNhcnQoaWQpO1xuICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvZGVsZXRlLWZyb20tYmFnLyR7aWR9YDtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICB9XG59KTtcbmNvbnN0IGJ1dHRvblN3aXRjaFdpdGhDb2xvcnMgPSAoYnV0dG9uLCB0ZXh0LGZvcmVncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9yKSA9PiB7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZvcmVncm91bmRDb2xvcjtcbiAgICBidXR0b24uc3R5bGUuY29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcHBpbmdDYXJ0IHtcblxuICAgIC8qKiBUaGlzIHNjcmlwdHMgYWRkcyBpdGVtcyB0byBzaG9wcGluZyBjYXJ0LCBidXQgXG4gICAgICogaXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZSBvbmx5IG5vdCBpbiBTZXNzaW9uU3RvcmFnZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBJdCB3aWxsIHN0b3JhZ2UgYWxsIHNob3BwaW5nIGNhcnQgaXRlbXMgaGVyZVxuICAgICAgICB0aGlzLmNhcnRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmNhcnRJdGVtcyA9IHRoaXMuZ2V0RGF0YUZyb21TdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IHRoaXMuY2FsY3VsYXRlVG90YWxQcmljZSgpO1xuICAgIH1cbiAgICBjYWxjdWxhdGVUb3RhbFByaWNlKCkge1xuICAgICAgICBpZiAodGhpcy5jYXJ0SXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xuICAgICAgICAgICAgdGhpcy5jYXJ0SXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBpdGVtLnF0eSAqIGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUHJpY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldERhdGFGcm9tU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0SXRlbXMnKSA9PT0gbnVsbFxuICAgICAgICAgICAgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRJdGVtcycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0SXRlbXMnKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0RGF0YUluU3RvcmFnZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRJdGVtcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydEl0ZW1zKSk7XG4gICAgfVxuICAgIHNldFRvdGFsUHJpY2VJblN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbFByaWNlJywgdG90YWxQcmljZSgpKVxuICAgIH1cbiAgICB0b3RhbFByaWNlKCkge1xuXG4gICAgfVxuICAgIGFkZEl0ZW1Ub0NhcnQocHJvZHVjdCkge1xuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGlzIGluIHRoZSBhcnJheSBhbHJlYWR5XG4gICAgICAgIGNvbnN0IHNlYXJjaE9iamVjdElkeCA9IHRoaXMuY2FydEl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4geyBcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09IHByb2R1Y3QuaWQ7XG4gICAgICAgICB9IClcbiAgICAgICAgaWYgKHNlYXJjaE9iamVjdElkeCA9PT0gLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhcnRJdGVtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhSW5TdG9yYWdlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FydEl0ZW1zW3NlYXJjaE9iamVjdElkeF0ucXR5ICs9IDE7XG4gICAgICAgICAgICB0aGlzLnNldERhdGFJblN0b3JhZ2UoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUl0ZW1Gcm9tQ2FydChpZCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YUZyb21TdG9yYWdlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoT2JqZWN0SWR4ID0gZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4geyBcbiAgICAgICAgICAgIC8vIGlkIG11c3QgYmUgcGFyc2VkIHRvIEludCwgb3RoZXJ3aXNlIGRvZXNuJ3Qgd29ya1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGFyc2VJbnQoaWQpO1xuICAgICAgICAgfSApO1xuICAgICAgICBkYXRhLnNwbGljZShzZWFyY2hPYmplY3RJZHgsMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0SXRlbXMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICB9XG4gICAgcmVtb3ZlQWxsSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuY2FydEl0ZW1zID0gW107XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0SXRlbXMnLCBbXSk7XG4gICAgfVxufVxuIiwiIWZ1bmN0aW9uKGUpeyh0PXt9KS5fX2VzTW9kdWxlPSEwLHQuUm91dGluZz10LlJvdXRlcj12b2lkIDAsbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGwoZSx0KXt0aGlzLmNvbnRleHRfPWV8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixwb3J0OlwiXCIsc2NoZW1lOlwiXCIsbG9jYWxlOlwiXCJ9LHRoaXMuc2V0Um91dGVzKHR8fHt9KX1yZXR1cm4gbC5nZXRJbnN0YW5jZT1mdW5jdGlvbigpe3JldHVybiB0LlJvdXRpbmd9LGwuc2V0RGF0YT1mdW5jdGlvbihlKXtsLmdldEluc3RhbmNlKCkuc2V0Um91dGluZ0RhdGEoZSl9LGwucHJvdG90eXBlLnNldFJvdXRpbmdEYXRhPWZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksdm9pZCAwIT09ZS5wcmVmaXgmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSx2b2lkIDAhPT1lLnBvcnQmJnRoaXMuc2V0UG9ydChlLnBvcnQpLHZvaWQgMCE9PWUubG9jYWxlJiZ0aGlzLnNldExvY2FsZShlLmxvY2FsZSksdGhpcy5zZXRIb3N0KGUuaG9zdCksdm9pZCAwIT09ZS5zY2hlbWUmJnRoaXMuc2V0U2NoZW1lKGUuc2NoZW1lKX0sbC5wcm90b3R5cGUuc2V0Um91dGVzPWZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfSxsLnByb3RvdHlwZS5nZXRSb3V0ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffSxsLnByb3RvdHlwZS5zZXRCYXNlVXJsPWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uYmFzZV91cmw9ZX0sbC5wcm90b3R5cGUuZ2V0QmFzZVVybD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfSxsLnByb3RvdHlwZS5zZXRQcmVmaXg9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX0sbC5wcm90b3R5cGUuc2V0U2NoZW1lPWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uc2NoZW1lPWV9LGwucHJvdG90eXBlLmdldFNjaGVtZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX0sbC5wcm90b3R5cGUuc2V0SG9zdD1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX0sbC5wcm90b3R5cGUuZ2V0SG9zdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmhvc3R9LGwucHJvdG90eXBlLnNldFBvcnQ9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wb3J0PWV9LGwucHJvdG90eXBlLmdldFBvcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fSxsLnByb3RvdHlwZS5zZXRMb2NhbGU9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5sb2NhbGU9ZX0sbC5wcm90b3R5cGUuZ2V0TG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlfSxsLnByb3RvdHlwZS5idWlsZFF1ZXJ5UGFyYW1zPWZ1bmN0aW9uKG8sZSxuKXt2YXIgdCxyPXRoaXMscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYoZSBpbnN0YW5jZW9mIEFycmF5KWUuZm9yRWFjaChmdW5jdGlvbihlLHQpe3MudGVzdChvKT9uKG8sZSk6ci5idWlsZFF1ZXJ5UGFyYW1zKG8rXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlP3Q6XCJcIikrXCJdXCIsZSxuKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKHQgaW4gZSl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMobytcIltcIit0K1wiXVwiLGVbdF0sbik7ZWxzZSBuKG8sZSl9LGwucHJvdG90eXBlLmdldFJvdXRlPWZ1bmN0aW9uKGUpe3ZhciB0LG89W3RoaXMuY29udGV4dF8ucHJlZml4K2UsZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSx0aGlzLmNvbnRleHRfLnByZWZpeCtlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLGVdO2Zvcih0IGluIG8paWYob1t0XWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW29bdF1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX0sbC5wcm90b3R5cGUuZ2VuZXJhdGU9ZnVuY3Rpb24ocixlLHApe3ZhciB0LHM9dGhpcy5nZXRSb3V0ZShyKSxpPWV8fHt9LHU9T2JqZWN0LmFzc2lnbih7fSxpKSxjPVwiXCIsYT0hMCxvPVwiXCIsZT12b2lkIDA9PT10aGlzLmdldFBvcnQoKXx8bnVsbD09PXRoaXMuZ2V0UG9ydCgpP1wiXCI6dGhpcy5nZXRQb3J0KCk7aWYocy50b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXtpZihcInRleHRcIj09PWVbMF0mJlwic3RyaW5nXCI9PXR5cGVvZiBlWzFdKXJldHVybiBjPWwuZW5jb2RlUGF0aENvbXBvbmVudChlWzFdKStjLHZvaWQoYT0hMSk7aWYoXCJ2YXJpYWJsZVwiIT09ZVswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJytlWzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpOzY9PT1lLmxlbmd0aCYmITA9PT1lWzVdJiYoYT0hMSk7dmFyIHQ9cy5kZWZhdWx0cyYmIUFycmF5LmlzQXJyYXkocy5kZWZhdWx0cykmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzNdJiZlWzNdaW4gcy5kZWZhdWx0cztpZighMT09PWF8fCF0fHxcInN0cmluZ1wiPT10eXBlb2YgZVszXSYmZVszXWluIGkmJiFBcnJheS5pc0FycmF5KHMuZGVmYXVsdHMpJiZpW2VbM11dIT1zLmRlZmF1bHRzW2VbM11dKXt2YXIgbyxuPXZvaWQgMDtpZihcInN0cmluZ1wiPT10eXBlb2YgZVszXSYmZVszXWluIGkpbj1pW2VbM11dLGRlbGV0ZSB1W2VbM11dO2Vsc2V7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGVbM118fCF0fHxBcnJheS5pc0FycmF5KHMuZGVmYXVsdHMpKXtpZihhKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrcisnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrZVszXSsnXCIuJyl9bj1zLmRlZmF1bHRzW2VbM11dfSghMD09PW58fCExPT09bnx8XCJcIj09PW4pJiZhfHwobz1sLmVuY29kZVBhdGhDb21wb25lbnQobiksYz1lWzFdKyhvPVwibnVsbFwiPT09byYmbnVsbD09PW4/XCJcIjpvKStjKSxhPSExfWVsc2UgdCYmXCJzdHJpbmdcIj09dHlwZW9mIGVbM10mJmVbM11pbiB1JiZkZWxldGUgdVtlWzNdXX0pLFwiXCI9PT1jJiYoYz1cIi9cIikscy5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7XCJ0ZXh0XCIhPT1lWzBdP1widmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gaT8odD1pW2VbM11dLGRlbGV0ZSB1W2VbM11dKTpzLmRlZmF1bHRzJiYhQXJyYXkuaXNBcnJheShzLmRlZmF1bHRzKSYmZVszXWluIHMuZGVmYXVsdHMmJih0PXMuZGVmYXVsdHNbZVszXV0pLG89ZVsxXSt0K28pOm89ZVsxXStvfSksYz10aGlzLmNvbnRleHRfLmJhc2VfdXJsK2Mscy5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gcy5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPXMucmVxdWlyZW1lbnRzLl9zY2hlbWU/KHQ9b3x8dGhpcy5nZXRIb3N0KCksYz1zLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrdCsoLTE8dC5pbmRleE9mKFwiOlwiK2UpfHxcIlwiPT09ZT9cIlwiOlwiOlwiK2UpK2MpOnZvaWQgMCE9PXMuc2NoZW1lcyYmdm9pZCAwIT09cy5zY2hlbWVzWzBdJiZ0aGlzLmdldFNjaGVtZSgpIT09cy5zY2hlbWVzWzBdPyh0PW98fHRoaXMuZ2V0SG9zdCgpLGM9cy5zY2hlbWVzWzBdK1wiOi8vXCIrdCsoLTE8dC5pbmRleE9mKFwiOlwiK2UpfHxcIlwiPT09ZT9cIlwiOlwiOlwiK2UpK2MpOm8mJnRoaXMuZ2V0SG9zdCgpIT09bysoLTE8by5pbmRleE9mKFwiOlwiK2UpfHxcIlwiPT09ZT9cIlwiOlwiOlwiK2UpP2M9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK28rKC0xPG8uaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKStjOiEwPT09cCYmKGM9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpKygtMTx0aGlzLmdldEhvc3QoKS5pbmRleE9mKFwiOlwiK2UpfHxcIlwiPT09ZT9cIlwiOlwiOlwiK2UpK2MpLDA8T2JqZWN0LmtleXModSkubGVuZ3RoKXtmdW5jdGlvbiBmKGUsdCl7dD1udWxsPT09KHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCk/XCJcIjp0LGgucHVzaChsLmVuY29kZVF1ZXJ5Q29tcG9uZW50KGUpK1wiPVwiK2wuZW5jb2RlUXVlcnlDb21wb25lbnQodCkpfXZhciBuLGg9W107Zm9yKG4gaW4gdSl1Lmhhc093blByb3BlcnR5KG4pJiZ0aGlzLmJ1aWxkUXVlcnlQYXJhbXMobix1W25dLGYpO2M9YytcIj9cIitoLmpvaW4oXCImXCIpfXJldHVybiBjfSxsLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudD1mdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUyRi9nLFwiL1wiKS5yZXBsYWNlKC8lNDAvZyxcIkBcIikucmVwbGFjZSgvJTNBL2csXCI6XCIpLnJlcGxhY2UoLyUyMS9nLFwiIVwiKS5yZXBsYWNlKC8lM0IvZyxcIjtcIikucmVwbGFjZSgvJTJDL2csXCIsXCIpLnJlcGxhY2UoLyUyQS9nLFwiKlwiKS5yZXBsYWNlKC9cXCgvZyxcIiUyOFwiKS5yZXBsYWNlKC9cXCkvZyxcIiUyOVwiKS5yZXBsYWNlKC8nL2csXCIlMjdcIil9LGwuZW5jb2RlUGF0aENvbXBvbmVudD1mdW5jdGlvbihlKXtyZXR1cm4gbC5jdXN0b21FbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTNEL2csXCI9XCIpLnJlcGxhY2UoLyUyQi9nLFwiK1wiKS5yZXBsYWNlKC8lMjEvZyxcIiFcIikucmVwbGFjZSgvJTdDL2csXCJ8XCIpfSxsLmVuY29kZVF1ZXJ5Q29tcG9uZW50PWZ1bmN0aW9uKGUpe3JldHVybiBsLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lM0YvZyxcIj9cIil9LGx9KCksdC5Sb3V0ZXI9byx0LlJvdXRpbmc9bmV3IG8sdC5kZWZhdWx0PXQuUm91dGluZzt2YXIgdCxvPXtSb3V0ZXI6dC5Sb3V0ZXIsUm91dGluZzp0LlJvdXRpbmd9O1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sby5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1vLlJvdXRpbmc6KGUuUm91dGluZz1vLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpvLlJvdXRlcn0pfSh0aGlzKTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByZXZpZXdDbGVhckJ1dHRvblRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xlYXIoKSk7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXRDaGFuZ2UoZXZlbnQpKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnZHJvcHpvbmU6Y29ubmVjdCcpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnByZXZpZXdUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdGaWxlbmFtZVRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdkcm9wem9uZTpjbGVhcicpO1xuICAgIH1cbiAgICBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZW5hbWVUYXJnZXQudGV4dENvbnRlbnQgPSBmaWxlLm5hbWU7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoZmlsZS50eXBlICYmIGZpbGUudHlwZS5pbmRleE9mKCdpbWFnZScpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcG9wdWxhdGVJbWFnZVByZXZpZXcoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnZHJvcHpvbmU6Y2hhbmdlJywgZmlsZSk7XG4gICAgfVxuICAgIF9wb3B1bGF0ZUltYWdlUHJldmlldyhmaWxlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgRmlsZVJlYWRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArIGV2ZW50LnRhcmdldC5yZXN1bHQgKyAnXCIpJztcbiAgICAgICAgfSk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkID0ge30pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkIH0pKTtcbiAgICB9XG59XG5kZWZhdWx0XzEudGFyZ2V0cyA9IFsnaW5wdXQnLCAncGxhY2Vob2xkZXInLCAncHJldmlldycsICdwcmV2aWV3Q2xlYXJCdXR0b24nLCAncHJldmlld0ZpbGVuYW1lJywgJ3ByZXZpZXdJbWFnZSddO1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJzaWRlYmFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY2hlY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaXRlbSIsInN0eWxlIiwib3BhY2l0eSIsInNsaWRlc0NvdW50IiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwic2xpZGVUZXh0Iiwic2xpZGVTdWJUZXh0Iiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJtb2RhbEJ1dHRvbiIsInN3aXRjaEJ1dHRvbiIsIm1haW4iLCJ0cmFuc2Zvcm1Nb2RhbCIsInRvZ2dsZSIsInJvdXRlcyIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsInNlYXJjaEFsbEZvcm0iLCJzZWFyY2hQcm9kdWN0Rm9ybSIsInNlYXJjaFN0b2NrIiwic2VhcmNoVXNlcnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hTdHJpbmciLCJ2YWx1ZSIsInVybCIsImdlbmVyYXRlIiwibG9jYXRpb24iLCJocmVmIiwiZGF0YXNldCIsInJvdXRlbmFtZSIsIlNob3BwaW5nQ2FydCIsImNvbG9yU2VsZWN0Iiwic2l6ZVNlbGVjdCIsInByb2R1Y3RQcmljZUl0ZW0iLCJ0b3RhbFByaWNlSW5DYXJ0Iiwic2hvcHBpbmdDYXJ0IiwiYWRkUGFyYWdyYXBoIiwidGV4dCIsImxpc3RJdGVtIiwiY2xhc3Nlc0FycmF5IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImZvckVhY2giLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImFkZFNtYWxsVGV4dCIsImNsYXNzZXMiLCJwYXJlbnRJdGVtIiwic21hbGxJdGVtIiwidXBkYXRlTnVtYmVyQnlDYXJ0QnV0dG9uIiwiY2FydEFuY2hvciIsImNhcnRJdGVtcyIsInBvcHVsYXRlTGlzdCIsInNob3BwaW5nVWwiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzaG9wcGluZ0l0ZW0iLCJsaSIsImJyYW5kIiwibmFtZSIsInF0eSIsImNvbG9yIiwic2l6ZSIsImhyTGluZSIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJ0b0ZpeGVkIiwiYWRkVG9DYXJ0QnRuIiwiZGVsZXRlQ29uZmlybUJ1dHRvbnMiLCJwcm9kdWN0SWQiLCJpZCIsInByb2R1Y3RCcmFuZCIsInByb2R1Y3RuYW1lIiwicHJvZHVjdE1vZGVsIiwicHJvZHVjdG1vZGVsIiwicHJvZHVjdFByaWNlIiwicHJpY2UiLCJwYXJzZUludCIsImFkZEl0ZW1Ub0NhcnQiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uU3dpdGNoV2l0aENvbG9ycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwidGhlbiIsInN0YXR1cyIsImJ1dHRvbiIsImV2IiwidGFyZ2V0IiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwiZm9yZWdyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0RGF0YUZyb21TdG9yYWdlIiwidG90YWxQcmljZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInNldEl0ZW0iLCJwcm9kdWN0Iiwic2VhcmNoT2JqZWN0SWR4IiwiZmluZEluZGV4IiwicHVzaCIsInNldERhdGFJblN0b3JhZ2UiLCJzcGxpY2UiLCJ0IiwiX19lc01vZHVsZSIsIlJvdXRlciIsIm8iLCJsIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwiZ2V0SW5zdGFuY2UiLCJzZXREYXRhIiwicHJvdG90eXBlIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsIk9iamVjdCIsImZyZWV6ZSIsImdldFJvdXRlcyIsImdldEJhc2VVcmwiLCJnZXRTY2hlbWUiLCJnZXRIb3N0IiwiZ2V0UG9ydCIsImdldExvY2FsZSIsImJ1aWxkUXVlcnlQYXJhbXMiLCJuIiwiciIsInMiLCJSZWdFeHAiLCJBcnJheSIsInRlc3QiLCJnZXRSb3V0ZSIsIkVycm9yIiwicCIsImkiLCJ1IiwiYXNzaWduIiwiYyIsImEiLCJ0b2tlbnMiLCJlbmNvZGVQYXRoQ29tcG9uZW50IiwiZGVmYXVsdHMiLCJpc0FycmF5IiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsIl9zY2hlbWUiLCJpbmRleE9mIiwic2NoZW1lcyIsImtleXMiLCJmIiwiaCIsImVuY29kZVF1ZXJ5Q29tcG9uZW50IiwiaGFzT3duUHJvcGVydHkiLCJqb2luIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3MiLCJkZWZhdWx0XzEiLCJjbGVhciIsInByZXZpZXdDbGVhckJ1dHRvblRhcmdldCIsImlucHV0VGFyZ2V0IiwiZXZlbnQiLCJvbklucHV0Q2hhbmdlIiwiX2Rpc3BhdGNoRXZlbnQiLCJkaXNwbGF5IiwicGxhY2Vob2xkZXJUYXJnZXQiLCJwcmV2aWV3VGFyZ2V0IiwicHJldmlld0ltYWdlVGFyZ2V0IiwiYmFja2dyb3VuZEltYWdlIiwicHJldmlld0ZpbGVuYW1lVGFyZ2V0IiwiZmlsZSIsImZpbGVzIiwidHlwZSIsIl9wb3B1bGF0ZUltYWdlUHJldmlldyIsIkZpbGVSZWFkZXIiLCJyZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicGF5bG9hZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInRhcmdldHMiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==