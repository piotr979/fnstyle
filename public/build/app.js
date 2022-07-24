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
  } // prepares search based on routename and search string
  // search products (when route name = catalog)
  // search stocks (when routename = stock)
  // search customers (when routename = customers)


  if (searchProductForm != null) {
    searchProductForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var searchString = document.getElementById('search-product__input').value;
      console.log(searchString);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUQsVUFBSixFQUFmO0FBQ0FDLE1BQUFBLE1BQU0sQ0FBQzVNLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFVBQUM4TCxLQUFELEVBQVc7QUFDdkMsY0FBSSxDQUFDTSxrQkFBTCxDQUF3Qi9MLEtBQXhCLENBQThCNEwsT0FBOUIsR0FBd0MsT0FBeEM7QUFDQSxjQUFJLENBQUNHLGtCQUFMLENBQXdCL0wsS0FBeEIsQ0FBOEJnTSxlQUE5QixHQUFnRCxVQUFVUCxLQUFLLENBQUN6RixNQUFOLENBQWF3RyxNQUF2QixHQUFnQyxJQUFoRjtBQUNILE9BSEQ7QUFJQUQsTUFBQUEsTUFBTSxDQUFDRSxhQUFQLENBQXFCUCxJQUFyQjtBQUNIOzs7V0FDRCx3QkFBZWxJLElBQWYsRUFBbUM7QUFBQSxVQUFkMEksT0FBYyx1RUFBSixFQUFJO0FBQy9CLFdBQUs1TixPQUFMLENBQWE2TixhQUFiLENBQTJCLElBQUlDLFdBQUosQ0FBZ0I1SSxJQUFoQixFQUFzQjtBQUFFNkksUUFBQUEsTUFBTSxFQUFFSDtBQUFWLE9BQXRCLENBQTNCO0FBQ0g7Ozs7RUE3Q21CN047O0FBK0N4QndNLFNBQVMsQ0FBQ3lCLE9BQVYsR0FBb0IsQ0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QixTQUF6QixFQUFvQyxvQkFBcEMsRUFBMEQsaUJBQTFELEVBQTZFLGNBQTdFLENBQXBCOzs7Ozs7Ozs7Ozs7O0FDakRBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGFwdGVyLW5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2hvcHBpbmctY2FydC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaG9wcGluZy1jYXJ0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWRyb3B6b25lL1Jlc291cmNlcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWRyb3B6b25lL1Jlc291cmNlcy9hc3NldHMvc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAnQHN5bWZvbnkvdXgtZHJvcHpvbmUvc3JjL3N0eWxlLmNzcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1kcm9wem9uZS0tZHJvcHpvbmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtZHJvcHpvbmUvZGlzdC9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0ICcuL2pzL2NoYXB0ZXItbmF2aWdhdG9yJztcbmltcG9ydCAnLi9qcy9zaG9wcGluZy1jYXJ0LW1hbmFnZXInO1xuaW1wb3J0ICcuL2pzL2N1c3RvbSc7XG5pbXBvcnQgJy4vanMvc2VhcmNoLWZvcm0nO1xuXG4vKiBpbXBvcnQgJy4vanMvanF1ZXJ5Lm1pbi5qcyc7XG5pbXBvcnQgJy4vanMvanF1ZXJ5LnVwbG9hZGlmaXZlLm1pbi5qcyc7XG4qL1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCdhbmltYXRlLmNzcycpO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvKiBjaGVjayBpZiBzY3JlZW4gcmVzaXplcywgdGhhbiBjaGVjay91bmNoZWNrIGlucHV0XG4gKiAgaWYgc2NyZWVuIHNpemUgPCA4MGVtIHNpZGViYXIgaXMgaGlkZGVuXG4gKiAgaWYgYmlnZ2VyIChkZXNrdG9wKSB0aGFuIHNob3cgc2lkZWJhclxuICogIGl0J3MgYmFzZWQgb246XG4gKiAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2NDM4NDcyLzE0OTY5NzIgXG4gKi9cblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3Itc2lkZWJhcicpO1xuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1jaGVjaycpICE9IG51bGwpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDgwZW0nKS5tYXRjaGVzKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3ItY2hlY2snKS5jaGVja2VkID0gdHJ1ZTtcblxuXG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogODBlbSknKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLWNoZWNrJykuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1jaGVjaycpLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwgdHJ1ZSk7XG59IiwiXG4vLyAqKioqKioqKipcbiAgLy8gU0xJREVSXG4gIC8vICoqKioqKioqKipcblxuXG4gIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbXktc2xpZGVyID4gLnNsaWRlXCIpO1xuICAvLyBjb25zdCBzbGlkZXMgPSBzbGlkZXIuY2hpbGRyZW47XG4gIGlmIChzbGlkZXMubGVuZ3RoID4gMCkge1xuICAgIHNsaWRlcy5pdGVtKDApLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIGNvbnN0IHNsaWRlc0NvdW50ID0gc2xpZGVzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcbiAgICBsZXQgbmV4dFNsaWRlID0gMTtcblxuICAgIGNvbnN0IHNsaWRlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtdGV4dF9faGVhZFwiKTtcbiAgICBjb25zdCBzbGlkZVN1YlRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLXRleHRfX3N1YmhlYWRcIik7XG4gICAgc2V0SW50ZXJ2YWwoXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlcy5pdGVtKGN1cnJlbnRTbGlkZSkuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIG5leHRTbGlkZSA9IG5leHRTbGlkZSA9PSBzbGlkZXNDb3VudCAtIDEgPyAwIDogY3VycmVudFNsaWRlICsgMTtcblxuICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgc2xpZGVUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHNsaWRlVGV4dFtjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluVXBcIik7XG4gICAgICAgICAgc2xpZGVTdWJUZXh0W2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX3NsaWRlSW5VcFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoZXJlIGN1cnJlbnRTbGlkZSBpcyBwcmV2aW91cyBzbGlkZVxuICAgICAgICBjdXJyZW50U2xpZGUgPSBuZXh0U2xpZGU7XG4gICAgICAgIHNsaWRlcy5pdGVtKG5leHRTbGlkZSkuc3R5bGUub3BhY2l0eSA9IDE7XG5cbiAgICAgICAgLy9pZiBtdXN0IGJlIHJlcGVhdGVkIGZvciB0aGUgc29tZSBjb25kaXRpb24sIG5lZWQgdG8gZmluZCBiZXR0ZXIgd2F5XG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPCBzbGlkZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgc2xpZGVUZXh0W2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX3NsaWRlSW5VcFwiKTtcbiAgICAgICAgICBzbGlkZVN1YlRleHRbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fc2xpZGVJblVwXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgNTAwMFxuICAgICk7XG4gIH1cblx0XHRjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LW1vZGFsJyk7XG5cdFx0Y29uc3Qgc3dpdGNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtbW9kYWwtc3dpdGNoZXInKTtcblx0XHRjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblx0XHRjb25zdCB0cmFuc2Zvcm1Nb2RhbCA9ICgpID0+IHtcblx0XHRcdG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcGVuXCIpO1xuXHRcdH1cbiAgICBpZiAoc3dpdGNoQnV0dG9uICE9IG51bGwgJiYgbW9kYWxCdXR0b24gIT0gbnVsbCApIHtcblx0XHRzd2l0Y2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdHRyYW5zZm9ybU1vZGFsKCk7XG5cdFx0fSlcblx0XHRtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJhbnNmb3JtTW9kYWwoKTtcblx0XHR9KVxuICB9XG5cblxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmltcG9ydCBSb3V0aW5nIGZyb20gJy92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XG5cblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlYXJjaEFsbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLXNlYXJjaC1mb3JtJyk7XG4gICAgY29uc3Qgc2VhcmNoUHJvZHVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXByb2R1Y3RfX2Zvcm0nKTtcbiAgICBcbiAgICBjb25zdCBzZWFyY2hTdG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3RvY2snKTtcbiAgICBjb25zdCBzZWFyY2hVc2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdXNlcnMnKTtcblxuXG4gICAgLy8gc2VhcmNoIG9uIHRoZSBtYWluIHBhZ2VcbiAgICBpZiAoc2VhcmNoQWxsRm9ybSAhPSBudWxsKSB7XG4gICAgc2VhcmNoQWxsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdHJpbmcnKS52YWx1ZTtcblxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnaXRlbXNfZmlsdGVyJywge1xuICAgICAgICAgICAgJ3NlYXJjaFRleHQnOiBzZWFyY2hTdHJpbmdcbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSk7XG4gICAgfSBcblxuICAgIC8vIHByZXBhcmVzIHNlYXJjaCBiYXNlZCBvbiByb3V0ZW5hbWUgYW5kIHNlYXJjaCBzdHJpbmdcbiAgICAvLyBzZWFyY2ggcHJvZHVjdHMgKHdoZW4gcm91dGUgbmFtZSA9IGNhdGFsb2cpXG4gICAgLy8gc2VhcmNoIHN0b2NrcyAod2hlbiByb3V0ZW5hbWUgPSBzdG9jaylcbiAgICAvLyBzZWFyY2ggY3VzdG9tZXJzICh3aGVuIHJvdXRlbmFtZSA9IGN1c3RvbWVycylcbiAgICBpZiAoc2VhcmNoUHJvZHVjdEZvcm0gIT0gbnVsbCkge1xuICAgICAgICBzZWFyY2hQcm9kdWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXByb2R1Y3RfX2lucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hTdHJpbmcpO1xuICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvZHVjdEZvcm0uZGF0YXNldC5yb3V0ZW5hbWUsIHtcbiAgICAgICAgICAgICAgICAnc2VhcmNoU3RyaW5nJzogc2VhcmNoU3RyaW5nXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICB9KTtcblxuICAgXG4gICAgfVxufSkiLCJpbXBvcnQgU2hvcHBpbmdDYXJ0IGZyb20gJy4vc2hvcHBpbmctY2FydCc7XG5cbmxldCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zZWxlY3QnKTtcbmxldCBzaXplU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUtc2VsZWN0Jyk7XG5cbmxldCBwcm9kdWN0UHJpY2VJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtcHJpY2UnKTtcbmxldCB0b3RhbFByaWNlSW5DYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLXByaWNlJyk7XG4vLyBkaXNwbGF5cyBmaW5hbCBwcmljZSBmb3IgcHJvZHVjdHMgaW4gbW9kYWwgc2hpcHBpbmcgY2FydFxubGV0IHNob3BwaW5nQ2FydCA9IG5ldyBTaG9wcGluZ0NhcnQoKTtcblxuLy8ganVzdCBjcmVhdGVzIFwicFwiIGVsZW1lbnRcbmNvbnN0IGFkZFBhcmFncmFwaCA9ICh0ZXh0LCBsaXN0SXRlbSwgY2xhc3Nlc0FycmF5KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbS5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGNsYXNzZXNBcnJheS5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbSk7XG59XG5cbi8vIGNyZWF0ZXMgXCJwXCIgZWxlbWVudCBhbmQgdGhlbiBpbnNpZGUgb2YgaXQgYSBcInNtYWxsXCIgb25lXG5jb25zdCBhZGRTbWFsbFRleHQgPSAodGV4dCwgbGlzdEl0ZW0sIGNsYXNzZXMpID0+IHtcbiAgICBsZXQgcGFyZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgc21hbGxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcbiAgICBzbWFsbEl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgcGFyZW50SXRlbS5hcHBlbmRDaGlsZChzbWFsbEl0ZW0pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHBhcmVudEl0ZW0pO1xufVxuXG5jb25zdCB1cGRhdGVOdW1iZXJCeUNhcnRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgY2FydEFuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWFuY2hvcicpO1xuICAgIGNhcnRBbmNob3IuaW5uZXJUZXh0ID0gYCgke3Nob3BwaW5nQ2FydC5jYXJ0SXRlbXMubGVuZ3RofSlgO1xufVxuXG5jb25zdCBwb3B1bGF0ZUxpc3QgPSAoc2hvcHBpbmdVbCkgPT4ge1xuICAgIC8vIHNob3BwaW5nVWwgaXMgSFRNTCBjb2xsZWN0aW9uXG4gICAgLy8gc2hvcHBpbmdDYXJ0IGlzIEpTIGFycmF5IG9mIG9iamVjdHNcbiAgICBpZiAoc2hvcHBpbmdVbCAhPSBudWxsKSB7XG4gICAgICAgIHdoaWxlIChzaG9wcGluZ1VsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNob3BwaW5nVWwucmVtb3ZlQ2hpbGQoc2hvcHBpbmdVbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgLy9wb3B1bGF0ZSBsaXN0IGFnYWluXG4gICAgc2hvcHBpbmdDYXJ0LmNhcnRJdGVtcy5mb3JFYWNoKChzaG9wcGluZ0l0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGFkZFBhcmFncmFwaChzaG9wcGluZ0l0ZW0uYnJhbmQsIGxpLCBbJ2Z3LWJvbGQnLCAnbWItMCddKTtcbiAgICAgICAgYWRkUGFyYWdyYXBoKHNob3BwaW5nSXRlbS5uYW1lLCBsaSwgWydtYi0xJ10pO1xuICAgICAgICBhZGRTbWFsbFRleHQoJ1F1YW50aXR5OiAnICsgc2hvcHBpbmdJdGVtLnF0eSwgbGksICdtYi0wJyk7XG4gICAgICAgIGFkZFNtYWxsVGV4dCgnQ29sb3I6ICcgKyBzaG9wcGluZ0l0ZW0uY29sb3IsIGxpLCAnbWItMCcpO1xuICAgICAgICBhZGRTbWFsbFRleHQoJ1NpemU6ICcgKyBzaG9wcGluZ0l0ZW0uc2l6ZSwgbGksICdtYi0wJyk7XG5cbiAgICAgICAgY29uc3QgaHJMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaHJMaW5lKTtcbiAgICAgICAgc2hvcHBpbmdVbC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG5cbiAgICAvLyBDYWxjdWxhdGVzIGFuZCBkaXNwbGF5cyB0b3RhbCBwcmljZSBmb3IgYWxsIHByb2R1Y3RzIGluIHRoZSBiYWdcbiAgICB0b3RhbFByaWNlSW5DYXJ0LmlubmVyVGV4dCA9IHNob3BwaW5nQ2FydC5jYWxjdWxhdGVUb3RhbFByaWNlKCkudG9GaXhlZCgyKTtcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2hvcHBpbmdVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9wcGluZy1saXN0LXVsJyk7XG4gICBcbiAgICBwb3B1bGF0ZUxpc3Qoc2hvcHBpbmdVbCk7XG4gICAgY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1jYXJ0LWJ1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUNvbmZpcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1jb25maXJtLWJ1dHRvbicpO1xuICAgIHVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbigpO1xuXG4gICAgaWYgKGFkZFRvQ2FydEJ0biAhPSBudWxsKSB7XG4gICAgICAgIGFkZFRvQ2FydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBhZGRUb0NhcnRCdG4uZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RCcmFuZCA9IGFkZFRvQ2FydEJ0bi5kYXRhc2V0LnByb2R1Y3RuYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdE1vZGVsID0gYWRkVG9DYXJ0QnRuLmRhdGFzZXQucHJvZHVjdG1vZGVsO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gcHJvZHVjdFByaWNlSXRlbS5kYXRhc2V0LnByaWNlO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ftb3VudC1pbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gc2l6ZVNlbGVjdC52YWx1ZTtcblxuICAgICAgICAgICAgc2hvcHBpbmdDYXJ0LmFkZEl0ZW1Ub0NhcnQoe1xuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgcXR5OiBxdHksXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHByb2R1Y3RCcmFuZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0TW9kZWwsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3RQcmljZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBvcHVsYXRlTGlzdChzaG9wcGluZ1VsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY2hhbmdlcyBidXR0b24gdGV4dCBmb3IgYSBzZWNvbmQgd2hlbiBuZXcgaXRlbSBpcyBhZGRlZFxuICAgICAgICAgICAgLy8gaXRzJyBhc3luY2hyb25vdXMgdGhlcmVmb3JlIFwiQWRkZWQgdG8gY2FydFwiIHdpbGwgYmUgZGlzcGxheWVkIGZpcnN0LlxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uU3dpdGNoV2l0aENvbG9ycyhcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0QnRuLFxuICAgICAgICAgICAgICAgICAgICAnQWRkIHRvIGNhcnQnLFxuICAgICAgICAgICAgICAgICAgICAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAnd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH0sIDI0MDApO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnRuLmlubmVyVGV4dCA9IFwiQWRkZWQgdG8gY2FydCFcIlxuICAgICAgICAgICAgYnV0dG9uU3dpdGNoV2l0aENvbG9ycyhcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnRCdG4sXG4gICAgICAgICAgICAgICAgJ0FkZGVkIHRvIGNhcnQhJyxcbiAgICAgICAgICAgICAgICAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICdibGFjaydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gYnV0dG9uIFwiYW5pbWF0ZVwiIGVuZHMgaGVyZVxuXG4gICAgICAgICAgICB1cGRhdGVOdW1iZXJCeUNhcnRCdXR0b24oKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGZldGNoKFwiLy4uL2NoZWNrb3V0XCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc2hvcHBpbmdDYXJ0LmNhcnRJdGVtc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZCBvbiBzaG9wcGluZy1iYWcgcGFnZSBcbiAgICAvLyBpdCByZW1vdmVzIGl0ZW0gZnJvbSBsb2NhbFN0b3JhZ2UgSnNvbmVkIGFycmF5XG4gICAgLy8gYW5kIGZyb20gc2Vzc2lvblxuXG4gICAgaWYgKGRlbGV0ZUNvbmZpcm1CdXR0b25zICE9IG51bGwpIHtcbiAgICAgICAgZGVsZXRlQ29uZmlybUJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+ICB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZXYudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQucmVtb3ZlSXRlbUZyb21DYXJ0KGlkKTtcbiAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2RlbGV0ZS1mcm9tLWJhZy8ke2lkfWA7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgfVxufSk7XG5jb25zdCBidXR0b25Td2l0Y2hXaXRoQ29sb3JzID0gKGJ1dHRvbiwgdGV4dCxmb3JlZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvcikgPT4ge1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmb3JlZ3JvdW5kQ29sb3I7XG4gICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gYmFja2dyb3VuZENvbG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BwaW5nQ2FydCB7XG5cbiAgICAvKiogVGhpcyBzY3JpcHRzIGFkZHMgaXRlbXMgdG8gc2hvcHBpbmcgY2FydCwgYnV0IFxuICAgICAqIGlzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2Ugb25seSBub3QgaW4gU2Vzc2lvblN0b3JhZ2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gSXQgd2lsbCBzdG9yYWdlIGFsbCBzaG9wcGluZyBjYXJ0IGl0ZW1zIGhlcmVcbiAgICAgICAgdGhpcy5jYXJ0SXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jYXJ0SXRlbXMgPSB0aGlzLmdldERhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUHJpY2UoKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FydEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FydEl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gaXRlbS5xdHkgKiBpdGVtLnByaWNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXREYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydEl0ZW1zJykgPT09IG51bGxcbiAgICAgICAgICAgIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0SXRlbXMnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydEl0ZW1zJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldERhdGFJblN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0SXRlbXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnRJdGVtcykpO1xuICAgIH1cbiAgICBzZXRUb3RhbFByaWNlSW5TdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWxQcmljZScsIHRvdGFsUHJpY2UoKSlcbiAgICB9XG4gICAgdG90YWxQcmljZSgpIHtcblxuICAgIH1cbiAgICBhZGRJdGVtVG9DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSBpcyBpbiB0aGUgYXJyYXkgYWxyZWFkeVxuICAgICAgICBjb25zdCBzZWFyY2hPYmplY3RJZHggPSB0aGlzLmNhcnRJdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IHsgXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkO1xuICAgICAgICAgfSApXG4gICAgICAgIGlmIChzZWFyY2hPYmplY3RJZHggPT09IC0gMSkge1xuICAgICAgICAgICAgdGhpcy5jYXJ0SXRlbXMucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YUluU3RvcmFnZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcnRJdGVtc1tzZWFyY2hPYmplY3RJZHhdLnF0eSArPSAxO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhSW5TdG9yYWdlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVJdGVtRnJvbUNhcnQoaWQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIGNvbnN0IHNlYXJjaE9iamVjdElkeCA9IGRhdGEuZmluZEluZGV4KCBpdGVtID0+IHsgXG4gICAgICAgICAgICAvLyBpZCBtdXN0IGJlIHBhcnNlZCB0byBJbnQsIG90aGVyd2lzZSBkb2Vzbid0IHdvcmtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09IHBhcnNlSW50KGlkKTtcbiAgICAgICAgIH0gKTtcbiAgICAgICAgZGF0YS5zcGxpY2Uoc2VhcmNoT2JqZWN0SWR4LDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgfVxuICAgIHJlbW92ZUFsbEl0ZW1zKCkge1xuICAgICAgICB0aGlzLmNhcnRJdGVtcyA9IFtdO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydEl0ZW1zJywgW10pO1xuICAgIH1cbn1cbiIsIiFmdW5jdGlvbihlKXsodD17fSkuX19lc01vZHVsZT0hMCx0LlJvdXRpbmc9dC5Sb3V0ZXI9dm9pZCAwLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGUsdCl7dGhpcy5jb250ZXh0Xz1lfHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyh0fHx7fSl9cmV0dXJuIGwuZ2V0SW5zdGFuY2U9ZnVuY3Rpb24oKXtyZXR1cm4gdC5Sb3V0aW5nfSxsLnNldERhdGE9ZnVuY3Rpb24oZSl7bC5nZXRJbnN0YW5jZSgpLnNldFJvdXRpbmdEYXRhKGUpfSxsLnByb3RvdHlwZS5zZXRSb3V0aW5nRGF0YT1mdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLHZvaWQgMCE9PWUucHJlZml4JiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksdm9pZCAwIT09ZS5wb3J0JiZ0aGlzLnNldFBvcnQoZS5wb3J0KSx2b2lkIDAhPT1lLmxvY2FsZSYmdGhpcy5zZXRMb2NhbGUoZS5sb2NhbGUpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHZvaWQgMCE9PWUuc2NoZW1lJiZ0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9LGwucHJvdG90eXBlLnNldFJvdXRlcz1mdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX0sbC5wcm90b3R5cGUuZ2V0Um91dGVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX30sbC5wcm90b3R5cGUuc2V0QmFzZVVybD1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9LGwucHJvdG90eXBlLmdldEJhc2VVcmw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH0sbC5wcm90b3R5cGUuc2V0UHJlZml4PWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9LGwucHJvdG90eXBlLnNldFNjaGVtZT1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfSxsLnByb3RvdHlwZS5nZXRTY2hlbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9LGwucHJvdG90eXBlLnNldEhvc3Q9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9LGwucHJvdG90eXBlLmdldEhvc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fSxsLnByb3RvdHlwZS5zZXRQb3J0PWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucG9ydD1lfSxsLnByb3RvdHlwZS5nZXRQb3J0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH0sbC5wcm90b3R5cGUuc2V0TG9jYWxlPWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9LGwucHJvdG90eXBlLmdldExvY2FsZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZX0sbC5wcm90b3R5cGUuYnVpbGRRdWVyeVBhcmFtcz1mdW5jdGlvbihvLGUsbil7dmFyIHQscj10aGlzLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKGUgaW5zdGFuY2VvZiBBcnJheSllLmZvckVhY2goZnVuY3Rpb24oZSx0KXtzLnRlc3Qobyk/bihvLGUpOnIuYnVpbGRRdWVyeVBhcmFtcyhvK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT90OlwiXCIpK1wiXVwiLGUsbil9KTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWZvcih0IGluIGUpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKG8rXCJbXCIrdCtcIl1cIixlW3RdLG4pO2Vsc2UgbihvLGUpfSxsLnByb3RvdHlwZS5nZXRSb3V0ZT1mdW5jdGlvbihlKXt2YXIgdCxvPVt0aGlzLmNvbnRleHRfLnByZWZpeCtlLGUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsdGhpcy5jb250ZXh0Xy5wcmVmaXgrZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxlXTtmb3IodCBpbiBvKWlmKG9bdF1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tvW3RdXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9LGwucHJvdG90eXBlLmdlbmVyYXRlPWZ1bmN0aW9uKHIsZSxwKXt2YXIgdCxzPXRoaXMuZ2V0Um91dGUociksaT1lfHx7fSx1PU9iamVjdC5hc3NpZ24oe30saSksYz1cIlwiLGE9ITAsbz1cIlwiLGU9dm9pZCAwPT09dGhpcy5nZXRQb3J0KCl8fG51bGw9PT10aGlzLmdldFBvcnQoKT9cIlwiOnRoaXMuZ2V0UG9ydCgpO2lmKHMudG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoXCJ0ZXh0XCI9PT1lWzBdJiZcInN0cmluZ1wiPT10eXBlb2YgZVsxXSlyZXR1cm4gYz1sLmVuY29kZVBhdGhDb21wb25lbnQoZVsxXSkrYyx2b2lkKGE9ITEpO2lmKFwidmFyaWFibGVcIiE9PWVbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrZVswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTs2PT09ZS5sZW5ndGgmJiEwPT09ZVs1XSYmKGE9ITEpO3ZhciB0PXMuZGVmYXVsdHMmJiFBcnJheS5pc0FycmF5KHMuZGVmYXVsdHMpJiZcInN0cmluZ1wiPT10eXBlb2YgZVszXSYmZVszXWluIHMuZGVmYXVsdHM7aWYoITE9PT1hfHwhdHx8XCJzdHJpbmdcIj09dHlwZW9mIGVbM10mJmVbM11pbiBpJiYhQXJyYXkuaXNBcnJheShzLmRlZmF1bHRzKSYmaVtlWzNdXSE9cy5kZWZhdWx0c1tlWzNdXSl7dmFyIG8sbj12b2lkIDA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGVbM10mJmVbM11pbiBpKW49aVtlWzNdXSxkZWxldGUgdVtlWzNdXTtlbHNle2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlWzNdfHwhdHx8QXJyYXkuaXNBcnJheShzLmRlZmF1bHRzKSl7aWYoYSlyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK3IrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK2VbM10rJ1wiLicpfW49cy5kZWZhdWx0c1tlWzNdXX0oITA9PT1ufHwhMT09PW58fFwiXCI9PT1uKSYmYXx8KG89bC5lbmNvZGVQYXRoQ29tcG9uZW50KG4pLGM9ZVsxXSsobz1cIm51bGxcIj09PW8mJm51bGw9PT1uP1wiXCI6bykrYyksYT0hMX1lbHNlIHQmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzNdJiZlWzNdaW4gdSYmZGVsZXRlIHVbZVszXV19KSxcIlwiPT09YyYmKGM9XCIvXCIpLHMuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0O1widGV4dFwiIT09ZVswXT9cInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIGk/KHQ9aVtlWzNdXSxkZWxldGUgdVtlWzNdXSk6cy5kZWZhdWx0cyYmIUFycmF5LmlzQXJyYXkocy5kZWZhdWx0cykmJmVbM11pbiBzLmRlZmF1bHRzJiYodD1zLmRlZmF1bHRzW2VbM11dKSxvPWVbMV0rdCtvKTpvPWVbMV0rb30pLGM9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCtjLHMucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIHMucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1zLnJlcXVpcmVtZW50cy5fc2NoZW1lPyh0PW98fHRoaXMuZ2V0SG9zdCgpLGM9cy5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiK3QrKC0xPHQuaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKStjKTp2b2lkIDAhPT1zLnNjaGVtZXMmJnZvaWQgMCE9PXMuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PXMuc2NoZW1lc1swXT8odD1vfHx0aGlzLmdldEhvc3QoKSxjPXMuc2NoZW1lc1swXStcIjovL1wiK3QrKC0xPHQuaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKStjKTpvJiZ0aGlzLmdldEhvc3QoKSE9PW8rKC0xPG8uaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKT9jPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIitvKygtMTxvLmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYzohMD09PXAmJihjPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSsoLTE8dGhpcy5nZXRIb3N0KCkuaW5kZXhPZihcIjpcIitlKXx8XCJcIj09PWU/XCJcIjpcIjpcIitlKStjKSwwPE9iamVjdC5rZXlzKHUpLmxlbmd0aCl7ZnVuY3Rpb24gZihlLHQpe3Q9bnVsbD09PSh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQpP1wiXCI6dCxoLnB1c2gobC5lbmNvZGVRdWVyeUNvbXBvbmVudChlKStcIj1cIitsLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHQpKX12YXIgbixoPVtdO2ZvcihuIGluIHUpdS5oYXNPd25Qcm9wZXJ0eShuKSYmdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKG4sdVtuXSxmKTtjPWMrXCI/XCIraC5qb2luKFwiJlwiKX1yZXR1cm4gY30sbC5jdXN0b21FbmNvZGVVUklDb21wb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lMkYvZyxcIi9cIikucmVwbGFjZSgvJTQwL2csXCJAXCIpLnJlcGxhY2UoLyUzQS9nLFwiOlwiKS5yZXBsYWNlKC8lMjEvZyxcIiFcIikucmVwbGFjZSgvJTNCL2csXCI7XCIpLnJlcGxhY2UoLyUyQy9nLFwiLFwiKS5yZXBsYWNlKC8lMkEvZyxcIipcIikucmVwbGFjZSgvXFwoL2csXCIlMjhcIikucmVwbGFjZSgvXFwpL2csXCIlMjlcIikucmVwbGFjZSgvJy9nLFwiJTI3XCIpfSxsLmVuY29kZVBhdGhDb21wb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGwuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUzRC9nLFwiPVwiKS5yZXBsYWNlKC8lMkIvZyxcIitcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyU3Qy9nLFwifFwiKX0sbC5lbmNvZGVRdWVyeUNvbXBvbmVudD1mdW5jdGlvbihlKXtyZXR1cm4gbC5jdXN0b21FbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTNGL2csXCI/XCIpfSxsfSgpLHQuUm91dGVyPW8sdC5Sb3V0aW5nPW5ldyBvLHQuZGVmYXVsdD10LlJvdXRpbmc7dmFyIHQsbz17Um91dGVyOnQuUm91dGVyLFJvdXRpbmc6dC5Sb3V0aW5nfTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG8uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9by5Sb3V0aW5nOihlLlJvdXRpbmc9by5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6by5Sb3V0ZXJ9KX0odGhpcyk7IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsZWFyKCkpO1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50KSk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNvbm5lY3QnKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZW5hbWVUYXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnZHJvcHpvbmU6Y2xlYXInKTtcbiAgICB9XG4gICAgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAodHlwZW9mIGZpbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ZpbGVuYW1lVGFyZ2V0LnRleHRDb250ZW50ID0gZmlsZS5uYW1lO1xuICAgICAgICB0aGlzLnByZXZpZXdUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKGZpbGUudHlwZSAmJiBmaWxlLnR5cGUuaW5kZXhPZignaW1hZ2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNoYW5nZScsIGZpbGUpO1xuICAgIH1cbiAgICBfcG9wdWxhdGVJbWFnZVByZXZpZXcoZmlsZSkge1xuICAgICAgICBpZiAodHlwZW9mIEZpbGVSZWFkZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBldmVudC50YXJnZXQucmVzdWx0ICsgJ1wiKSc7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IHt9KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnRhcmdldHMgPSBbJ2lucHV0JywgJ3BsYWNlaG9sZGVyJywgJ3ByZXZpZXcnLCAncHJldmlld0NsZWFyQnV0dG9uJywgJ3ByZXZpZXdGaWxlbmFtZScsICdwcmV2aWV3SW1hZ2UnXTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0Iiwic2lkZWJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIml0ZW0iLCJzdHlsZSIsIm9wYWNpdHkiLCJzbGlkZXNDb3VudCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInNsaWRlVGV4dCIsInNsaWRlU3ViVGV4dCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwibW9kYWxCdXR0b24iLCJzd2l0Y2hCdXR0b24iLCJtYWluIiwidHJhbnNmb3JtTW9kYWwiLCJ0b2dnbGUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJzZWFyY2hBbGxGb3JtIiwic2VhcmNoUHJvZHVjdEZvcm0iLCJzZWFyY2hTdG9jayIsInNlYXJjaFVzZXJzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoU3RyaW5nIiwidmFsdWUiLCJ1cmwiLCJnZW5lcmF0ZSIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhc2V0Iiwicm91dGVuYW1lIiwiU2hvcHBpbmdDYXJ0IiwiY29sb3JTZWxlY3QiLCJzaXplU2VsZWN0IiwicHJvZHVjdFByaWNlSXRlbSIsInRvdGFsUHJpY2VJbkNhcnQiLCJzaG9wcGluZ0NhcnQiLCJhZGRQYXJhZ3JhcGgiLCJ0ZXh0IiwibGlzdEl0ZW0iLCJjbGFzc2VzQXJyYXkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiYWRkU21hbGxUZXh0IiwiY2xhc3NlcyIsInBhcmVudEl0ZW0iLCJzbWFsbEl0ZW0iLCJ1cGRhdGVOdW1iZXJCeUNhcnRCdXR0b24iLCJjYXJ0QW5jaG9yIiwiY2FydEl0ZW1zIiwicG9wdWxhdGVMaXN0Iiwic2hvcHBpbmdVbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInNob3BwaW5nSXRlbSIsImxpIiwiYnJhbmQiLCJuYW1lIiwicXR5IiwiY29sb3IiLCJzaXplIiwiaHJMaW5lIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvRml4ZWQiLCJhZGRUb0NhcnRCdG4iLCJkZWxldGVDb25maXJtQnV0dG9ucyIsInByb2R1Y3RJZCIsImlkIiwicHJvZHVjdEJyYW5kIiwicHJvZHVjdG5hbWUiLCJwcm9kdWN0TW9kZWwiLCJwcm9kdWN0bW9kZWwiLCJwcm9kdWN0UHJpY2UiLCJwcmljZSIsInBhcnNlSW50IiwiYWRkSXRlbVRvQ2FydCIsImJ1dHRvblN3aXRjaFdpdGhDb2xvcnMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInRoZW4iLCJzdGF0dXMiLCJidXR0b24iLCJldiIsInRhcmdldCIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsImZvcmVncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImdldERhdGFGcm9tU3RvcmFnZSIsInRvdGFsUHJpY2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRJdGVtIiwicHJvZHVjdCIsInNlYXJjaE9iamVjdElkeCIsImZpbmRJbmRleCIsInB1c2giLCJzZXREYXRhSW5TdG9yYWdlIiwic3BsaWNlIiwidCIsIl9fZXNNb2R1bGUiLCJSb3V0ZXIiLCJvIiwibCIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsImdldEluc3RhbmNlIiwic2V0RGF0YSIsInByb3RvdHlwZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJPYmplY3QiLCJmcmVlemUiLCJnZXRSb3V0ZXMiLCJnZXRCYXNlVXJsIiwiZ2V0U2NoZW1lIiwiZ2V0SG9zdCIsImdldFBvcnQiLCJnZXRMb2NhbGUiLCJidWlsZFF1ZXJ5UGFyYW1zIiwibiIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJFcnJvciIsInAiLCJpIiwidSIsImFzc2lnbiIsImMiLCJhIiwidG9rZW5zIiwiZW5jb2RlUGF0aENvbXBvbmVudCIsImRlZmF1bHRzIiwiaXNBcnJheSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJfc2NoZW1lIiwiaW5kZXhPZiIsInNjaGVtZXMiLCJrZXlzIiwiZiIsImgiLCJlbmNvZGVRdWVyeUNvbXBvbmVudCIsImhhc093blByb3BlcnR5Iiwiam9pbiIsImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9zIiwiZGVmYXVsdF8xIiwiY2xlYXIiLCJwcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQiLCJpbnB1dFRhcmdldCIsImV2ZW50Iiwib25JbnB1dENoYW5nZSIsIl9kaXNwYXRjaEV2ZW50IiwiZGlzcGxheSIsInBsYWNlaG9sZGVyVGFyZ2V0IiwicHJldmlld1RhcmdldCIsInByZXZpZXdJbWFnZVRhcmdldCIsImJhY2tncm91bmRJbWFnZSIsInByZXZpZXdGaWxlbmFtZVRhcmdldCIsImZpbGUiLCJmaWxlcyIsInR5cGUiLCJfcG9wdWxhdGVJbWFnZVByZXZpZXciLCJGaWxlUmVhZGVyIiwicmVhZGVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJ0YXJnZXRzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=