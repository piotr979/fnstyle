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
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopping_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart */ "./assets/js/shopping-cart.js");







var colorSelect = document.getElementById('color-select');
var sizeSelect = document.getElementById('size-select');
var shoppingCart = new _shopping_cart__WEBPACK_IMPORTED_MODULE_6__["default"](); // creates just "p" element

var addParagraph = function addParagraph(text, listItem, classesArray) {
  var item = document.createElement('p');
  item.innerText = text;
  classesArray.forEach(function (className) {
    item.classList.add(className);
  });
  listItem.appendChild(item);
}; // creates "p" element and then inside of it "small" one


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
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var shoppingUl = document.getElementById('shopping-list-ul');
  populateList(shoppingUl);
  var addToCartBtn = document.getElementById('add-to-cart-button');
  updateNumberByCartButton();

  if (addToCartBtn != null) {
    addToCartBtn.addEventListener('click', function (e) {
      var productId = addToCartBtn.dataset.id;
      var productBrand = addToCartBtn.dataset.productname;
      var productModel = addToCartBtn.dataset.productmodel;
      var qty = parseInt(document.getElementById('amount-input').value);
      var color = colorSelect.value;
      var size = sizeSelect.value;
      shoppingCart.addItemToCart({
        id: productId,
        qty: qty,
        brand: productBrand,
        name: productModel,
        color: color,
        size: size
      });
      populateList(shoppingUl);
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
  }
});

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
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ShoppingCart = /*#__PURE__*/function () {
  function ShoppingCart() {
    _classCallCheck(this, ShoppingCart);

    console.log('testuj'); // It will storage all shopping cart items here

    this.cartItems = [];
    this.cartItems = this.getDataFromStorage();
    console.log("The cart" + this.cartItems);
  }

  _createClass(ShoppingCart, [{
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
    key: "addItemToCart",
    value: function addItemToCart(product) {
      console.log(this.cartItems); // check if item is already in the array

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

      console.log(searchObjectIdx);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_check-correctness-of-iteration_js-node_modules_core-js-e97e62","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-9ee140"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjRDO0FBQzVDLGlFQUFlO0FBQ2Ysb0NBQW9DLDZNQUE0RTtBQUNoSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBRUksbUJBQVU7QUFDTixXQUFLQyxPQUFMLENBQWFDLFdBQWIsR0FBMkIsbUVBQTNCO0FBQ0g7Ozs7RUFId0JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQUcsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDJEQUFELENBQVAsRUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ25CQTs7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRCx5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBaEI7O0FBRUEsSUFBSUQsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixLQUE4QyxJQUFsRCxFQUF3RDtBQUNwRCxNQUFJQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0Isa0JBQWxCLEVBQXNDQyxPQUExQyxFQUFtRDtBQUMvQ0osSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0ksT0FBM0MsR0FBcUQsSUFBckQ7QUFHSDs7QUFDREgsRUFBQUEsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzFDLFFBQUlKLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixtQkFBbEIsRUFBdUNDLE9BQTNDLEVBQW9EO0FBQ2hESixNQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDSSxPQUEzQyxHQUFxRCxLQUFyRDtBQUNILEtBRkQsTUFFTztBQUNITCxNQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDSSxPQUEzQyxHQUFxRCxJQUFyRDtBQUNIO0FBQ0osR0FORCxFQU1HLElBTkg7QUFPSDs7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0U7QUFDQTtBQUdBLElBQU1FLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBZixFQUNBOztBQUNBLElBQUlELE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQkYsRUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVksQ0FBWixFQUFlQyxLQUFmLENBQXFCQyxPQUFyQixHQUErQixDQUEvQjtBQUNBLE1BQU1DLFdBQVcsR0FBR04sTUFBTSxDQUFDRSxNQUEzQjtBQUNBLE1BQUlLLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUVBLE1BQU1DLFNBQVMsR0FBR2hCLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWxCO0FBQ0EsTUFBTVMsWUFBWSxHQUFHakIsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixzQkFBMUIsQ0FBckI7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFFQUksRUFBQUEsV0FBVyxDQUNULFlBQVk7QUFDVmIsSUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVlJLFlBQVosRUFBMEJILEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxDQUExQztBQUNBRyxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsSUFBSUYsV0FBVyxHQUFHLENBQTNCLEdBQStCLENBQS9CLEdBQW1DQyxZQUFZLEdBQUcsQ0FBOUQ7QUFFQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFlBQVo7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVMsQ0FBQ1AsTUFBdEI7O0FBR0EsUUFBSUssWUFBWSxHQUFHRSxTQUFTLENBQUNQLE1BQTdCLEVBQXFDO0FBQ25DTyxNQUFBQSxTQUFTLENBQUNGLFlBQUQsQ0FBVCxDQUF3Qk8sU0FBeEIsQ0FBa0NDLE1BQWxDLENBQXlDLG9CQUF6QztBQUNBTCxNQUFBQSxZQUFZLENBQUNILFlBQUQsQ0FBWixDQUEyQk8sU0FBM0IsQ0FBcUNDLE1BQXJDLENBQTRDLG9CQUE1QztBQUNELEtBWFMsQ0FZVjs7O0FBQ0FSLElBQUFBLFlBQVksR0FBR0MsU0FBZjtBQUNBUixJQUFBQSxNQUFNLENBQUNHLElBQVAsQ0FBWUssU0FBWixFQUF1QkosS0FBdkIsQ0FBNkJDLE9BQTdCLEdBQXVDLENBQXZDLENBZFUsQ0FnQlY7O0FBQ0EsUUFBSUUsWUFBWSxHQUFHRSxTQUFTLENBQUNQLE1BQTdCLEVBQXFDO0FBQ25DTyxNQUFBQSxTQUFTLENBQUNGLFlBQUQsQ0FBVCxDQUF3Qk8sU0FBeEIsQ0FBa0NFLEdBQWxDLENBQXNDLG9CQUF0QztBQUNBTixNQUFBQSxZQUFZLENBQUNILFlBQUQsQ0FBWixDQUEyQk8sU0FBM0IsQ0FBcUNFLEdBQXJDLENBQXlDLG9CQUF6QztBQUNEO0FBQ0YsR0F0QlEsRUF3QlQsSUF4QlMsQ0FBWDtBQTBCRDs7QUFHRCxJQUFNQyxXQUFXLEdBQUd4QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBcEI7QUFDQSxJQUFNd0IsWUFBWSxHQUFHekIsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUFyQjtBQUNBLElBQU15QixJQUFJLEdBQUcxQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjs7QUFDQSxJQUFNMEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzVCRCxFQUFBQSxJQUFJLENBQUNMLFNBQUwsQ0FBZU8sTUFBZixDQUFzQixVQUF0QjtBQUNBLENBRkQ7O0FBR0UsSUFBSUgsWUFBWSxJQUFJLElBQWhCLElBQXdCRCxXQUFXLElBQUksSUFBM0MsRUFBa0Q7QUFDcERDLEVBQUFBLFlBQVksQ0FBQ25CLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQVc7QUFDakRxQixJQUFBQSxjQUFjO0FBRWQsR0FIRDtBQU1BSCxFQUFBQSxXQUFXLENBQUNsQixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFXO0FBQ2hEcUIsSUFBQUEsY0FBYztBQUNkLEdBRkQ7QUFHQzs7Ozs7Ozs7Ozs7Ozs7QUMvREgsSUFBTUUsTUFBTSxHQUFHbEMsbUJBQU8sQ0FBQyxnRkFBRCxDQUF0Qjs7QUFDQTtBQUVBbUMsaUlBQUEsQ0FBdUJELE1BQXZCO0FBRUE3QixRQUFRLENBQUNNLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JELE1BQU0wQixVQUFVLEdBQUdoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQW5CO0FBRUErQixFQUFBQSxVQUFVLENBQUMxQixnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxVQUFTMkIsQ0FBVCxFQUFZO0FBQzlDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxZQUFZLEdBQUduQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNtQyxLQUE5RDtBQUVBLFFBQUlDLEdBQUcsR0FBR1AsMkhBQUEsQ0FBaUIsY0FBakIsRUFBaUM7QUFDdkMsb0JBQWNLO0FBRHlCLEtBQWpDLENBQVY7QUFJQUksSUFBQUEsUUFBUSxDQUFDQyxJQUFULEdBQWdCSCxHQUFoQjtBQUNILEdBVEQ7QUFVSCxDQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFSSxJQUFJSyxXQUFXLEdBQUcxQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbEI7QUFDSCxJQUFJMEMsVUFBVSxHQUFHM0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWpCO0FBQ0csSUFBSTJDLFlBQVksR0FBRyxJQUFJSCxzREFBSixFQUFuQixFQUVBOztBQUNBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFpQkMsWUFBakIsRUFBa0M7QUFDbkQsTUFBSXRDLElBQUksR0FBR1YsUUFBUSxDQUFDaUQsYUFBVCxDQUF1QixHQUF2QixDQUFYO0FBQ0F2QyxFQUFBQSxJQUFJLENBQUN3QyxTQUFMLEdBQWlCSixJQUFqQjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLE9BQWIsQ0FBc0IsVUFBQUMsU0FBUyxFQUFJO0FBQy9CMUMsSUFBQUEsSUFBSSxDQUFDVyxTQUFMLENBQWVFLEdBQWYsQ0FBbUI2QixTQUFuQjtBQUNILEdBRkQ7QUFHQUwsRUFBQUEsUUFBUSxDQUFDTSxXQUFULENBQXFCM0MsSUFBckI7QUFDSCxDQVBELEVBU0E7OztBQUNBLElBQU00QyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDUixJQUFELEVBQU9DLFFBQVAsRUFBaUJRLE9BQWpCLEVBQTZCO0FBQzlDLE1BQUlDLFVBQVUsR0FBR3hELFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsR0FBdkIsQ0FBakI7QUFDQSxNQUFJUSxTQUFTLEdBQUd6RCxRQUFRLENBQUNpRCxhQUFULENBQXVCLE9BQXZCLENBQWhCO0FBQ0FRLEVBQUFBLFNBQVMsQ0FBQ1AsU0FBVixHQUFzQkosSUFBdEI7QUFDQVUsRUFBQUEsVUFBVSxDQUFDbkMsU0FBWCxDQUFxQkUsR0FBckIsQ0FBeUJnQyxPQUF6QjtBQUNBQyxFQUFBQSxVQUFVLENBQUNILFdBQVgsQ0FBdUJJLFNBQXZCO0FBQ0FWLEVBQUFBLFFBQVEsQ0FBQ00sV0FBVCxDQUFxQkcsVUFBckI7QUFDSCxDQVBEOztBQVNBLElBQU1FLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUN2QyxNQUFNQyxVQUFVLEdBQUczRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQTBELEVBQUFBLFVBQVUsQ0FBQ1QsU0FBWCxjQUEyQk4sWUFBWSxDQUFDZ0IsU0FBYixDQUF1Qm5ELE1BQWxEO0FBQ0MsQ0FIRDs7QUFLQSxJQUFNb0QsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsVUFBRCxFQUFnQjtBQUMxQjtBQUNQO0FBQ0osU0FBUUEsVUFBVSxDQUFDQyxVQUFuQixFQUErQjtBQUMzQkQsSUFBQUEsVUFBVSxDQUFDRSxXQUFYLENBQXVCRixVQUFVLENBQUNDLFVBQWxDO0FBRUgsR0FOb0MsQ0FRckM7OztBQUNBbkIsRUFBQUEsWUFBWSxDQUFDZ0IsU0FBYixDQUF1QlQsT0FBdkIsQ0FBZ0MsVUFBQ2MsWUFBRCxFQUFtQjtBQUMvQyxRQUFNQyxFQUFFLEdBQUdsRSxRQUFRLENBQUNpRCxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUosSUFBQUEsWUFBWSxDQUFDb0IsWUFBWSxDQUFDRSxLQUFkLEVBQXFCRCxFQUFyQixFQUF5QixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQXpCLENBQVo7QUFDQXJCLElBQUFBLFlBQVksQ0FBQ29CLFlBQVksQ0FBQ0csSUFBZCxFQUFvQkYsRUFBcEIsRUFBd0IsQ0FBQyxNQUFELENBQXhCLENBQVo7QUFDQVosSUFBQUEsWUFBWSxDQUFDLGVBQWVXLFlBQVksQ0FBQ0ksR0FBN0IsRUFBa0NILEVBQWxDLEVBQXNDLE1BQXRDLENBQVo7QUFDQVosSUFBQUEsWUFBWSxDQUFDLFlBQVlXLFlBQVksQ0FBQ0ssS0FBMUIsRUFBaUNKLEVBQWpDLEVBQXFDLE1BQXJDLENBQVo7QUFDQVosSUFBQUEsWUFBWSxDQUFDLFdBQVdXLFlBQVksQ0FBQ00sSUFBekIsRUFBK0JMLEVBQS9CLEVBQW1DLE1BQW5DLENBQVo7QUFFQSxRQUFNTSxNQUFNLEdBQUd4RSxRQUFRLENBQUNpRCxhQUFULENBQXVCLElBQXZCLENBQWY7QUFDQWlCLElBQUFBLEVBQUUsQ0FBQ2IsV0FBSCxDQUFlbUIsTUFBZjtBQUVBVixJQUFBQSxVQUFVLENBQUNULFdBQVgsQ0FBdUJhLEVBQXZCO0FBQ0gsR0FaRDtBQWFDLENBdEJEOztBQXVCSmxFLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDckQsTUFBTXdELFVBQVUsR0FBRzlELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBbkI7QUFDQTRELEVBQUFBLFlBQVksQ0FBQ0MsVUFBRCxDQUFaO0FBQ0EsTUFBTVcsWUFBWSxHQUFHekUsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQUFyQjtBQUNBeUQsRUFBQUEsd0JBQXdCOztBQUN4QixNQUFJZSxZQUFZLElBQUksSUFBcEIsRUFBMEI7QUFHMUJBLElBQUFBLFlBQVksQ0FBQ25FLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUMyQixDQUFELEVBQU87QUFFOUMsVUFBTXlDLFNBQVMsR0FBR0QsWUFBWSxDQUFDRSxPQUFiLENBQXFCQyxFQUF2QztBQUNBLFVBQU1DLFlBQVksR0FBR0osWUFBWSxDQUFDRSxPQUFiLENBQXFCRyxXQUExQztBQUNBLFVBQU1DLFlBQVksR0FBR04sWUFBWSxDQUFDRSxPQUFiLENBQXFCSyxZQUExQztBQUNBLFVBQU1YLEdBQUcsR0FBR1ksUUFBUSxDQUFDakYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDbUMsS0FBekMsQ0FBcEI7QUFFQSxVQUFNa0MsS0FBSyxHQUFHNUIsV0FBVyxDQUFDTixLQUExQjtBQUNBLFVBQU1tQyxJQUFJLEdBQUc1QixVQUFVLENBQUNQLEtBQXhCO0FBRUFRLE1BQUFBLFlBQVksQ0FBQ3NDLGFBQWIsQ0FDSTtBQUNJTixRQUFBQSxFQUFFLEVBQUVGLFNBRFI7QUFFSUwsUUFBQUEsR0FBRyxFQUFFQSxHQUZUO0FBR0lGLFFBQUFBLEtBQUssRUFBRVUsWUFIWDtBQUlJVCxRQUFBQSxJQUFJLEVBQUVXLFlBSlY7QUFLSVQsUUFBQUEsS0FBSyxFQUFFQSxLQUxYO0FBTUlDLFFBQUFBLElBQUksRUFBRUE7QUFOVixPQURKO0FBV0FWLE1BQUFBLFlBQVksQ0FBQ0MsVUFBRCxDQUFaO0FBQ0FKLE1BQUFBLHdCQUF3QjtBQUN4QixVQUFJeUIsUUFBUSxHQUFHQyxLQUFLLENBQUUsY0FBRixFQUFrQjtBQUNsQ0MsUUFBQUEsTUFBTSxFQUFFLE1BRDBCO0FBRWxDQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwwQkFBZ0I7QUFEVCxTQUZ5QjtBQUtsQ0MsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0I7QUFDbEJDLFVBQUFBLElBQUksRUFBRTlDLFlBQVksQ0FBQ2dCO0FBREQsU0FBaEI7QUFMNEIsT0FBbEIsQ0FBTCxDQVFaK0IsSUFSWSxDQVFQLFVBQUNSLFFBQUQsRUFBYztBQUNsQmpFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0UsUUFBUSxDQUFDUyxNQUFyQjs7QUFDQSxZQUFJVCxRQUFRLENBQUNTLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekIsaUJBQU9ULFFBQVEsQ0FBQ3JDLElBQVQsRUFBUDtBQUNIO0FBQ0osT0FiYyxFQWFaNkMsSUFiWSxDQWFQLFVBQUVSLFFBQUYsRUFBZTtBQUNuQmpFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0UsUUFBWjtBQUNILE9BZmMsQ0FBZjtBQWtCQyxLQXpDRDtBQTBDSDtBQUNBLENBbkREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdERxQjFDO0FBQ2pCLDBCQUFjO0FBQUE7O0FBQ1Z2QixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBRFUsQ0FFVjs7QUFDQSxTQUFLeUMsU0FBTCxHQUFpQixFQUFqQjtBQUVELFNBQUtBLFNBQUwsR0FBaUIsS0FBS2lDLGtCQUFMLEVBQWpCO0FBQ0MzRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhLEtBQUt5QyxTQUE5QjtBQUNIOzs7O1dBQ0QsOEJBQXFCO0FBQ2pCLFVBQUlrQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsTUFBc0MsSUFBdEMsSUFDR0QsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDdEYsTUFBbEMsS0FBNkMsQ0FEcEQsRUFDdUQ7QUFDbkQsZUFBTyxFQUFQO0FBQ0gsT0FIRCxNQUdPO0FBQ1IsZUFBTytFLElBQUksQ0FBQ1EsS0FBTCxDQUFXRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWCxDQUFQO0FBQ0U7QUFDSjs7O1dBQ0QsNEJBQW1CO0FBQ2ZELE1BQUFBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixXQUFyQixFQUFrQ1QsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBSzdCLFNBQXBCLENBQWxDO0FBQ0g7OztXQUNELHVCQUFjc0MsT0FBZCxFQUF1QjtBQUNuQmhGLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt5QyxTQUFqQixFQURtQixDQUVuQjs7QUFDQSxVQUFNdUMsZUFBZSxHQUFHLEtBQUt2QyxTQUFMLENBQWV3QyxTQUFmLENBQXlCLFVBQUMxRixJQUFELEVBQVU7QUFFdkQsZUFBT0EsSUFBSSxDQUFDa0UsRUFBTCxJQUFXc0IsT0FBTyxDQUFDdEIsRUFBMUI7QUFDRixPQUhzQixDQUF4Qjs7QUFJQSxVQUFJdUIsZUFBZSxLQUFLLENBQUUsQ0FBMUIsRUFBNkI7QUFDekIsYUFBS3ZDLFNBQUwsQ0FBZXlDLElBQWYsQ0FBb0JILE9BQXBCO0FBQ0EsYUFBS0ksZ0JBQUw7QUFDSCxPQUhELE1BR087QUFDSCxhQUFLMUMsU0FBTCxDQUFldUMsZUFBZixFQUFnQzlCLEdBQWhDLElBQXVDLENBQXZDO0FBQ0EsYUFBS2lDLGdCQUFMO0FBQ0g7O0FBQ0RwRixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWdGLGVBQVo7QUFFSDs7O1dBQ0QsMEJBQWlCO0FBQ2IsV0FBS3ZDLFNBQUwsR0FBaUIsRUFBakI7QUFDQWtDLE1BQUFBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixXQUFyQixFQUFrQyxFQUFsQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDTCxDQUFDLFVBQVNoRSxDQUFULEVBQVc7QUFBQyxHQUFDc0UsQ0FBQyxHQUFDLEVBQUgsRUFBT0MsVUFBUCxHQUFrQixDQUFDLENBQW5CLEVBQXFCRCxDQUFDLENBQUN6RSxPQUFGLEdBQVV5RSxDQUFDLENBQUNFLE1BQUYsR0FBUyxLQUFLLENBQTdDLEVBQStDQyxDQUFDLEdBQUMsWUFBVTtBQUFDLGFBQVNDLENBQVQsQ0FBVzFFLENBQVgsRUFBYXNFLENBQWIsRUFBZTtBQUFDLFdBQUtLLFFBQUwsR0FBYzNFLENBQUMsSUFBRTtBQUFDNEUsUUFBQUEsUUFBUSxFQUFDLEVBQVY7QUFBYUMsUUFBQUEsTUFBTSxFQUFDLEVBQXBCO0FBQXVCQyxRQUFBQSxJQUFJLEVBQUMsRUFBNUI7QUFBK0JDLFFBQUFBLElBQUksRUFBQyxFQUFwQztBQUF1Q0MsUUFBQUEsTUFBTSxFQUFDLEVBQTlDO0FBQWlEQyxRQUFBQSxNQUFNLEVBQUM7QUFBeEQsT0FBakIsRUFBNkUsS0FBS0MsU0FBTCxDQUFlWixDQUFDLElBQUUsRUFBbEIsQ0FBN0U7QUFBbUc7O0FBQUEsV0FBT0ksQ0FBQyxDQUFDUyxXQUFGLEdBQWMsWUFBVTtBQUFDLGFBQU9iLENBQUMsQ0FBQ3pFLE9BQVQ7QUFBaUIsS0FBMUMsRUFBMkM2RSxDQUFDLENBQUNVLE9BQUYsR0FBVSxVQUFTcEYsQ0FBVCxFQUFXO0FBQUMwRSxNQUFBQSxDQUFDLENBQUNTLFdBQUYsR0FBZ0JyRixjQUFoQixDQUErQkUsQ0FBL0I7QUFBa0MsS0FBbkcsRUFBb0cwRSxDQUFDLENBQUNXLFNBQUYsQ0FBWXZGLGNBQVosR0FBMkIsVUFBU0UsQ0FBVCxFQUFXO0FBQUMsV0FBS3NGLFVBQUwsQ0FBZ0J0RixDQUFDLENBQUM0RSxRQUFsQixHQUE0QixLQUFLTSxTQUFMLENBQWVsRixDQUFDLENBQUNKLE1BQWpCLENBQTVCLEVBQXFELEtBQUssQ0FBTCxLQUFTSSxDQUFDLENBQUM2RSxNQUFYLElBQW1CLEtBQUtVLFNBQUwsQ0FBZXZGLENBQUMsQ0FBQzZFLE1BQWpCLENBQXhFLEVBQWlHLEtBQUssQ0FBTCxLQUFTN0UsQ0FBQyxDQUFDK0UsSUFBWCxJQUFpQixLQUFLUyxPQUFMLENBQWF4RixDQUFDLENBQUMrRSxJQUFmLENBQWxILEVBQXVJLEtBQUssQ0FBTCxLQUFTL0UsQ0FBQyxDQUFDaUYsTUFBWCxJQUFtQixLQUFLUSxTQUFMLENBQWV6RixDQUFDLENBQUNpRixNQUFqQixDQUExSixFQUFtTCxLQUFLUyxPQUFMLENBQWExRixDQUFDLENBQUM4RSxJQUFmLENBQW5MLEVBQXdNLEtBQUssQ0FBTCxLQUFTOUUsQ0FBQyxDQUFDZ0YsTUFBWCxJQUFtQixLQUFLVyxTQUFMLENBQWUzRixDQUFDLENBQUNnRixNQUFqQixDQUEzTjtBQUFvUCxLQUEvWCxFQUFnWU4sQ0FBQyxDQUFDVyxTQUFGLENBQVlILFNBQVosR0FBc0IsVUFBU2xGLENBQVQsRUFBVztBQUFDLFdBQUs0RixPQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjOUYsQ0FBZCxDQUFiO0FBQThCLEtBQWhjLEVBQWljMEUsQ0FBQyxDQUFDVyxTQUFGLENBQVlVLFNBQVosR0FBc0IsWUFBVTtBQUFDLGFBQU8sS0FBS0gsT0FBWjtBQUFvQixLQUF0ZixFQUF1ZmxCLENBQUMsQ0FBQ1csU0FBRixDQUFZQyxVQUFaLEdBQXVCLFVBQVN0RixDQUFULEVBQVc7QUFBQyxXQUFLMkUsUUFBTCxDQUFjQyxRQUFkLEdBQXVCNUUsQ0FBdkI7QUFBeUIsS0FBbmpCLEVBQW9qQjBFLENBQUMsQ0FBQ1csU0FBRixDQUFZVyxVQUFaLEdBQXVCLFlBQVU7QUFBQyxhQUFPLEtBQUtyQixRQUFMLENBQWNDLFFBQXJCO0FBQThCLEtBQXBuQixFQUFxbkJGLENBQUMsQ0FBQ1csU0FBRixDQUFZRSxTQUFaLEdBQXNCLFVBQVN2RixDQUFULEVBQVc7QUFBQyxXQUFLMkUsUUFBTCxDQUFjRSxNQUFkLEdBQXFCN0UsQ0FBckI7QUFBdUIsS0FBOXFCLEVBQStxQjBFLENBQUMsQ0FBQ1csU0FBRixDQUFZTSxTQUFaLEdBQXNCLFVBQVMzRixDQUFULEVBQVc7QUFBQyxXQUFLMkUsUUFBTCxDQUFjSyxNQUFkLEdBQXFCaEYsQ0FBckI7QUFBdUIsS0FBeHVCLEVBQXl1QjBFLENBQUMsQ0FBQ1csU0FBRixDQUFZWSxTQUFaLEdBQXNCLFlBQVU7QUFBQyxhQUFPLEtBQUt0QixRQUFMLENBQWNLLE1BQXJCO0FBQTRCLEtBQXR5QixFQUF1eUJOLENBQUMsQ0FBQ1csU0FBRixDQUFZSyxPQUFaLEdBQW9CLFVBQVMxRixDQUFULEVBQVc7QUFBQyxXQUFLMkUsUUFBTCxDQUFjRyxJQUFkLEdBQW1COUUsQ0FBbkI7QUFBcUIsS0FBNTFCLEVBQTYxQjBFLENBQUMsQ0FBQ1csU0FBRixDQUFZYSxPQUFaLEdBQW9CLFlBQVU7QUFBQyxhQUFPLEtBQUt2QixRQUFMLENBQWNHLElBQXJCO0FBQTBCLEtBQXQ1QixFQUF1NUJKLENBQUMsQ0FBQ1csU0FBRixDQUFZRyxPQUFaLEdBQW9CLFVBQVN4RixDQUFULEVBQVc7QUFBQyxXQUFLMkUsUUFBTCxDQUFjSSxJQUFkLEdBQW1CL0UsQ0FBbkI7QUFBcUIsS0FBNThCLEVBQTY4QjBFLENBQUMsQ0FBQ1csU0FBRixDQUFZYyxPQUFaLEdBQW9CLFlBQVU7QUFBQyxhQUFPLEtBQUt4QixRQUFMLENBQWNJLElBQXJCO0FBQTBCLEtBQXRnQyxFQUF1Z0NMLENBQUMsQ0FBQ1csU0FBRixDQUFZSSxTQUFaLEdBQXNCLFVBQVN6RixDQUFULEVBQVc7QUFBQyxXQUFLMkUsUUFBTCxDQUFjTSxNQUFkLEdBQXFCakYsQ0FBckI7QUFBdUIsS0FBaGtDLEVBQWlrQzBFLENBQUMsQ0FBQ1csU0FBRixDQUFZZSxTQUFaLEdBQXNCLFlBQVU7QUFBQyxhQUFPLEtBQUt6QixRQUFMLENBQWNNLE1BQXJCO0FBQTRCLEtBQTluQyxFQUErbkNQLENBQUMsQ0FBQ1csU0FBRixDQUFZZ0IsZ0JBQVosR0FBNkIsVUFBUzVCLENBQVQsRUFBV3pFLENBQVgsRUFBYXNHLENBQWIsRUFBZTtBQUFDLFVBQUloQyxDQUFKO0FBQUEsVUFBTWlDLENBQUMsR0FBQyxJQUFSO0FBQUEsVUFBYUMsQ0FBQyxHQUFDLElBQUlDLE1BQUosQ0FBVyxPQUFYLENBQWY7QUFBbUMsVUFBR3pHLENBQUMsWUFBWTBHLEtBQWhCLEVBQXNCMUcsQ0FBQyxDQUFDa0IsT0FBRixDQUFVLFVBQVNsQixDQUFULEVBQVdzRSxDQUFYLEVBQWE7QUFBQ2tDLFFBQUFBLENBQUMsQ0FBQ0csSUFBRixDQUFPbEMsQ0FBUCxJQUFVNkIsQ0FBQyxDQUFDN0IsQ0FBRCxFQUFHekUsQ0FBSCxDQUFYLEdBQWlCdUcsQ0FBQyxDQUFDRixnQkFBRixDQUFtQjVCLENBQUMsR0FBQyxHQUFGLElBQU8sb0JBQWlCekUsQ0FBakIsSUFBbUJzRSxDQUFuQixHQUFxQixFQUE1QixJQUFnQyxHQUFuRCxFQUF1RHRFLENBQXZELEVBQXlEc0csQ0FBekQsQ0FBakI7QUFBNkUsT0FBckcsRUFBdEIsS0FBa0ksSUFBRyxvQkFBaUJ0RyxDQUFqQixDQUFILEVBQXNCLEtBQUlzRSxDQUFKLElBQVN0RSxDQUFUO0FBQVcsYUFBS3FHLGdCQUFMLENBQXNCNUIsQ0FBQyxHQUFDLEdBQUYsR0FBTUgsQ0FBTixHQUFRLEdBQTlCLEVBQWtDdEUsQ0FBQyxDQUFDc0UsQ0FBRCxDQUFuQyxFQUF1Q2dDLENBQXZDO0FBQVgsT0FBdEIsTUFBZ0ZBLENBQUMsQ0FBQzdCLENBQUQsRUFBR3pFLENBQUgsQ0FBRDtBQUFPLEtBQXg2QyxFQUF5NkMwRSxDQUFDLENBQUNXLFNBQUYsQ0FBWXVCLFFBQVosR0FBcUIsVUFBUzVHLENBQVQsRUFBVztBQUFDLFVBQUlzRSxDQUFKO0FBQUEsVUFBTUcsQ0FBQyxHQUFDLENBQUMsS0FBS0UsUUFBTCxDQUFjRSxNQUFkLEdBQXFCN0UsQ0FBdEIsRUFBd0JBLENBQUMsR0FBQyxHQUFGLEdBQU0sS0FBSzJFLFFBQUwsQ0FBY00sTUFBNUMsRUFBbUQsS0FBS04sUUFBTCxDQUFjRSxNQUFkLEdBQXFCN0UsQ0FBckIsR0FBdUIsR0FBdkIsR0FBMkIsS0FBSzJFLFFBQUwsQ0FBY00sTUFBNUYsRUFBbUdqRixDQUFuRyxDQUFSOztBQUE4RyxXQUFJc0UsQ0FBSixJQUFTRyxDQUFUO0FBQVcsWUFBR0EsQ0FBQyxDQUFDSCxDQUFELENBQUQsSUFBTyxLQUFLc0IsT0FBZixFQUF1QixPQUFPLEtBQUtBLE9BQUwsQ0FBYW5CLENBQUMsQ0FBQ0gsQ0FBRCxDQUFkLENBQVA7QUFBbEM7O0FBQTRELFlBQU0sSUFBSXVDLEtBQUosQ0FBVSxnQkFBYzdHLENBQWQsR0FBZ0IsbUJBQTFCLENBQU47QUFBcUQsS0FBenFELEVBQTBxRDBFLENBQUMsQ0FBQ1csU0FBRixDQUFZaEYsUUFBWixHQUFxQixVQUFTa0csQ0FBVCxFQUFXdkcsQ0FBWCxFQUFhOEcsQ0FBYixFQUFlO0FBQUMsVUFBSXhDLENBQUo7QUFBQSxVQUFNa0MsQ0FBQyxHQUFDLEtBQUtJLFFBQUwsQ0FBY0wsQ0FBZCxDQUFSO0FBQUEsVUFBeUJRLENBQUMsR0FBQy9HLENBQUMsSUFBRSxFQUE5QjtBQUFBLFVBQWlDZ0gsQ0FBQyxHQUFDbkIsTUFBTSxDQUFDb0IsTUFBUCxDQUFjLEVBQWQsRUFBaUJGLENBQWpCLENBQW5DO0FBQUEsVUFBdURHLENBQUMsR0FBQyxFQUF6RDtBQUFBLFVBQTREQyxDQUFDLEdBQUMsQ0FBQyxDQUEvRDtBQUFBLFVBQWlFMUMsQ0FBQyxHQUFDLEVBQW5FO0FBQUEsVUFBc0V6RSxDQUFDLEdBQUMsS0FBSyxDQUFMLEtBQVMsS0FBS21HLE9BQUwsRUFBVCxJQUF5QixTQUFPLEtBQUtBLE9BQUwsRUFBaEMsR0FBK0MsRUFBL0MsR0FBa0QsS0FBS0EsT0FBTCxFQUExSDs7QUFBeUksVUFBR0ssQ0FBQyxDQUFDWSxNQUFGLENBQVNsRyxPQUFULENBQWlCLFVBQVNsQixDQUFULEVBQVc7QUFBQyxZQUFHLFdBQVNBLENBQUMsQ0FBQyxDQUFELENBQVYsSUFBZSxZQUFVLE9BQU9BLENBQUMsQ0FBQyxDQUFELENBQXBDLEVBQXdDLE9BQU9rSCxDQUFDLEdBQUN4QyxDQUFDLENBQUMyQyxtQkFBRixDQUFzQnJILENBQUMsQ0FBQyxDQUFELENBQXZCLElBQTRCa0gsQ0FBOUIsRUFBZ0MsTUFBS0MsQ0FBQyxHQUFDLENBQUMsQ0FBUixDQUF2QztBQUFrRCxZQUFHLGVBQWFuSCxDQUFDLENBQUMsQ0FBRCxDQUFqQixFQUFxQixNQUFNLElBQUk2RyxLQUFKLENBQVUscUJBQW1CN0csQ0FBQyxDQUFDLENBQUQsQ0FBcEIsR0FBd0IscUJBQWxDLENBQU47QUFBK0QsY0FBSUEsQ0FBQyxDQUFDeEIsTUFBTixJQUFjLENBQUMsQ0FBRCxLQUFLd0IsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsS0FBMEJtSCxDQUFDLEdBQUMsQ0FBQyxDQUE3QjtBQUFnQyxZQUFJN0MsQ0FBQyxHQUFDa0MsQ0FBQyxDQUFDYyxRQUFGLElBQVksQ0FBQ1osS0FBSyxDQUFDYSxPQUFOLENBQWNmLENBQUMsQ0FBQ2MsUUFBaEIsQ0FBYixJQUF3QyxZQUFVLE9BQU90SCxDQUFDLENBQUMsQ0FBRCxDQUExRCxJQUErREEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPd0csQ0FBQyxDQUFDYyxRQUE5RTs7QUFBdUYsWUFBRyxDQUFDLENBQUQsS0FBS0gsQ0FBTCxJQUFRLENBQUM3QyxDQUFULElBQVksWUFBVSxPQUFPdEUsQ0FBQyxDQUFDLENBQUQsQ0FBbEIsSUFBdUJBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTytHLENBQTlCLElBQWlDLENBQUNMLEtBQUssQ0FBQ2EsT0FBTixDQUFjZixDQUFDLENBQUNjLFFBQWhCLENBQWxDLElBQTZEUCxDQUFDLENBQUMvRyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUQsSUFBU3dHLENBQUMsQ0FBQ2MsUUFBRixDQUFXdEgsQ0FBQyxDQUFDLENBQUQsQ0FBWixDQUFyRixFQUFzRztBQUFDLGNBQUl5RSxDQUFKO0FBQUEsY0FBTTZCLENBQUMsR0FBQyxLQUFLLENBQWI7QUFBZSxjQUFHLFlBQVUsT0FBT3RHLENBQUMsQ0FBQyxDQUFELENBQWxCLElBQXVCQSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU8rRyxDQUFqQyxFQUFtQ1QsQ0FBQyxHQUFDUyxDQUFDLENBQUMvRyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUgsRUFBVSxPQUFPZ0gsQ0FBQyxDQUFDaEgsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFsQixDQUFuQyxLQUFnRTtBQUFDLGdCQUFHLFlBQVUsT0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBbEIsSUFBdUIsQ0FBQ3NFLENBQXhCLElBQTJCb0MsS0FBSyxDQUFDYSxPQUFOLENBQWNmLENBQUMsQ0FBQ2MsUUFBaEIsQ0FBOUIsRUFBd0Q7QUFBQyxrQkFBR0gsQ0FBSCxFQUFLO0FBQU8sb0JBQU0sSUFBSU4sS0FBSixDQUFVLGdCQUFjTixDQUFkLEdBQWdCLDRCQUFoQixHQUE2Q3ZHLENBQUMsQ0FBQyxDQUFELENBQTlDLEdBQWtELElBQTVELENBQU47QUFBd0U7O0FBQUFzRyxZQUFBQSxDQUFDLEdBQUNFLENBQUMsQ0FBQ2MsUUFBRixDQUFXdEgsQ0FBQyxDQUFDLENBQUQsQ0FBWixDQUFGO0FBQW1CO0FBQUEsV0FBQyxDQUFDLENBQUQsS0FBS3NHLENBQUwsSUFBUSxDQUFDLENBQUQsS0FBS0EsQ0FBYixJQUFnQixPQUFLQSxDQUF0QixLQUEwQmEsQ0FBMUIsS0FBOEIxQyxDQUFDLEdBQUNDLENBQUMsQ0FBQzJDLG1CQUFGLENBQXNCZixDQUF0QixDQUFGLEVBQTJCWSxDQUFDLEdBQUNsSCxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU15RSxDQUFDLEdBQUMsV0FBU0EsQ0FBVCxJQUFZLFNBQU82QixDQUFuQixHQUFxQixFQUFyQixHQUF3QjdCLENBQWhDLElBQW1DeUMsQ0FBOUYsR0FBaUdDLENBQUMsR0FBQyxDQUFDLENBQXBHO0FBQXNHLFNBQTdiLE1BQWtjN0MsQ0FBQyxJQUFFLFlBQVUsT0FBT3RFLENBQUMsQ0FBQyxDQUFELENBQXJCLElBQTBCQSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU9nSCxDQUFqQyxJQUFvQyxPQUFPQSxDQUFDLENBQUNoSCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTVDO0FBQW1ELE9BQXZ6QixHQUF5ekIsT0FBS2tILENBQUwsS0FBU0EsQ0FBQyxHQUFDLEdBQVgsQ0FBenpCLEVBQXkwQlYsQ0FBQyxDQUFDZ0IsVUFBRixDQUFhdEcsT0FBYixDQUFxQixVQUFTbEIsQ0FBVCxFQUFXO0FBQUMsWUFBSXNFLENBQUo7QUFBTSxtQkFBU3RFLENBQUMsQ0FBQyxDQUFELENBQVYsR0FBYyxlQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEtBQW9CQSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU8rRyxDQUFQLElBQVV6QyxDQUFDLEdBQUN5QyxDQUFDLENBQUMvRyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUgsRUFBVSxPQUFPZ0gsQ0FBQyxDQUFDaEgsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUE1QixJQUFvQ3dHLENBQUMsQ0FBQ2MsUUFBRixJQUFZLENBQUNaLEtBQUssQ0FBQ2EsT0FBTixDQUFjZixDQUFDLENBQUNjLFFBQWhCLENBQWIsSUFBd0N0SCxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU93RyxDQUFDLENBQUNjLFFBQWpELEtBQTREaEQsQ0FBQyxHQUFDa0MsQ0FBQyxDQUFDYyxRQUFGLENBQVd0SCxDQUFDLENBQUMsQ0FBRCxDQUFaLENBQTlELENBQXBDLEVBQW9IeUUsQ0FBQyxHQUFDekUsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLc0UsQ0FBTCxHQUFPRyxDQUFqSixDQUFkLEdBQWtLQSxDQUFDLEdBQUN6RSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUt5RSxDQUF6SztBQUEySyxPQUFsTixDQUF6MEIsRUFBNmhDeUMsQ0FBQyxHQUFDLEtBQUt2QyxRQUFMLENBQWNDLFFBQWQsR0FBdUJzQyxDQUF0akMsRUFBd2pDVixDQUFDLENBQUNpQixZQUFGLElBQWdCLGFBQVlqQixDQUFDLENBQUNpQixZQUE5QixJQUE0QyxLQUFLeEIsU0FBTCxNQUFrQk8sQ0FBQyxDQUFDaUIsWUFBRixDQUFlQyxPQUE3RSxJQUFzRnBELENBQUMsR0FBQ0csQ0FBQyxJQUFFLEtBQUt5QixPQUFMLEVBQUwsRUFBb0JnQixDQUFDLEdBQUNWLENBQUMsQ0FBQ2lCLFlBQUYsQ0FBZUMsT0FBZixHQUF1QixLQUF2QixHQUE2QnBELENBQTdCLElBQWdDLENBQUMsQ0FBRCxHQUFHQSxDQUFDLENBQUNxRCxPQUFGLENBQVUsTUFBSTNILENBQWQsQ0FBSCxJQUFxQixPQUFLQSxDQUExQixHQUE0QixFQUE1QixHQUErQixNQUFJQSxDQUFuRSxJQUFzRWtILENBQWxMLElBQXFMLEtBQUssQ0FBTCxLQUFTVixDQUFDLENBQUNvQixPQUFYLElBQW9CLEtBQUssQ0FBTCxLQUFTcEIsQ0FBQyxDQUFDb0IsT0FBRixDQUFVLENBQVYsQ0FBN0IsSUFBMkMsS0FBSzNCLFNBQUwsT0FBbUJPLENBQUMsQ0FBQ29CLE9BQUYsQ0FBVSxDQUFWLENBQTlELElBQTRFdEQsQ0FBQyxHQUFDRyxDQUFDLElBQUUsS0FBS3lCLE9BQUwsRUFBTCxFQUFvQmdCLENBQUMsR0FBQ1YsQ0FBQyxDQUFDb0IsT0FBRixDQUFVLENBQVYsSUFBYSxLQUFiLEdBQW1CdEQsQ0FBbkIsSUFBc0IsQ0FBQyxDQUFELEdBQUdBLENBQUMsQ0FBQ3FELE9BQUYsQ0FBVSxNQUFJM0gsQ0FBZCxDQUFILElBQXFCLE9BQUtBLENBQTFCLEdBQTRCLEVBQTVCLEdBQStCLE1BQUlBLENBQXpELElBQTREa0gsQ0FBOUosSUFBaUt6QyxDQUFDLElBQUUsS0FBS3lCLE9BQUwsT0FBaUJ6QixDQUFDLElBQUUsQ0FBQyxDQUFELEdBQUdBLENBQUMsQ0FBQ2tELE9BQUYsQ0FBVSxNQUFJM0gsQ0FBZCxDQUFILElBQXFCLE9BQUtBLENBQTFCLEdBQTRCLEVBQTVCLEdBQStCLE1BQUlBLENBQXJDLENBQXJCLEdBQTZEa0gsQ0FBQyxHQUFDLEtBQUtqQixTQUFMLEtBQWlCLEtBQWpCLEdBQXVCeEIsQ0FBdkIsSUFBMEIsQ0FBQyxDQUFELEdBQUdBLENBQUMsQ0FBQ2tELE9BQUYsQ0FBVSxNQUFJM0gsQ0FBZCxDQUFILElBQXFCLE9BQUtBLENBQTFCLEdBQTRCLEVBQTVCLEdBQStCLE1BQUlBLENBQTdELElBQWdFa0gsQ0FBL0gsR0FBaUksQ0FBQyxDQUFELEtBQUtKLENBQUwsS0FBU0ksQ0FBQyxHQUFDLEtBQUtqQixTQUFMLEtBQWlCLEtBQWpCLEdBQXVCLEtBQUtDLE9BQUwsRUFBdkIsSUFBdUMsQ0FBQyxDQUFELEdBQUcsS0FBS0EsT0FBTCxHQUFleUIsT0FBZixDQUF1QixNQUFJM0gsQ0FBM0IsQ0FBSCxJQUFrQyxPQUFLQSxDQUF2QyxHQUF5QyxFQUF6QyxHQUE0QyxNQUFJQSxDQUF2RixJQUEwRmtILENBQXJHLENBQS9nRCxFQUF1bkQsSUFBRXJCLE1BQU0sQ0FBQ2dDLElBQVAsQ0FBWWIsQ0FBWixFQUFleEksTUFBM29ELEVBQWtwRDtBQUFBLFlBQVVzSixDQUFWLEdBQUMsU0FBU0EsQ0FBVCxDQUFXOUgsQ0FBWCxFQUFhc0UsQ0FBYixFQUFlO0FBQUNBLFVBQUFBLENBQUMsR0FBQyxVQUFRQSxDQUFDLEdBQUMsY0FBWSxPQUFPQSxDQUFuQixHQUFxQkEsQ0FBQyxFQUF0QixHQUF5QkEsQ0FBbkMsSUFBc0MsRUFBdEMsR0FBeUNBLENBQTNDLEVBQTZDeUQsQ0FBQyxDQUFDM0QsSUFBRixDQUFPTSxDQUFDLENBQUNzRCxvQkFBRixDQUF1QmhJLENBQXZCLElBQTBCLEdBQTFCLEdBQThCMEUsQ0FBQyxDQUFDc0Qsb0JBQUYsQ0FBdUIxRCxDQUF2QixDQUFyQyxDQUE3QztBQUE2RyxTQUE5SDs7QUFBOEgsWUFBSWdDLENBQUo7QUFBQSxZQUFNeUIsQ0FBQyxHQUFDLEVBQVI7O0FBQVcsYUFBSXpCLENBQUosSUFBU1UsQ0FBVDtBQUFXQSxVQUFBQSxDQUFDLENBQUNpQixjQUFGLENBQWlCM0IsQ0FBakIsS0FBcUIsS0FBS0QsZ0JBQUwsQ0FBc0JDLENBQXRCLEVBQXdCVSxDQUFDLENBQUNWLENBQUQsQ0FBekIsRUFBNkJ3QixDQUE3QixDQUFyQjtBQUFYOztBQUFnRVosUUFBQUEsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsR0FBRixHQUFNYSxDQUFDLENBQUNHLElBQUYsQ0FBTyxHQUFQLENBQVI7QUFBb0I7O0FBQUEsYUFBT2hCLENBQVA7QUFBUyxLQUFodEgsRUFBaXRIeEMsQ0FBQyxDQUFDeUQsd0JBQUYsR0FBMkIsVUFBU25JLENBQVQsRUFBVztBQUFDLGFBQU9vSSxrQkFBa0IsQ0FBQ3BJLENBQUQsQ0FBbEIsQ0FBc0JxSSxPQUF0QixDQUE4QixNQUE5QixFQUFxQyxHQUFyQyxFQUEwQ0EsT0FBMUMsQ0FBa0QsTUFBbEQsRUFBeUQsR0FBekQsRUFBOERBLE9BQTlELENBQXNFLE1BQXRFLEVBQTZFLEdBQTdFLEVBQWtGQSxPQUFsRixDQUEwRixNQUExRixFQUFpRyxHQUFqRyxFQUFzR0EsT0FBdEcsQ0FBOEcsTUFBOUcsRUFBcUgsR0FBckgsRUFBMEhBLE9BQTFILENBQWtJLE1BQWxJLEVBQXlJLEdBQXpJLEVBQThJQSxPQUE5SSxDQUFzSixNQUF0SixFQUE2SixHQUE3SixFQUFrS0EsT0FBbEssQ0FBMEssS0FBMUssRUFBZ0wsS0FBaEwsRUFBdUxBLE9BQXZMLENBQStMLEtBQS9MLEVBQXFNLEtBQXJNLEVBQTRNQSxPQUE1TSxDQUFvTixJQUFwTixFQUF5TixLQUF6TixDQUFQO0FBQXVPLEtBQS85SCxFQUFnK0gzRCxDQUFDLENBQUMyQyxtQkFBRixHQUFzQixVQUFTckgsQ0FBVCxFQUFXO0FBQUMsYUFBTzBFLENBQUMsQ0FBQ3lELHdCQUFGLENBQTJCbkksQ0FBM0IsRUFBOEJxSSxPQUE5QixDQUFzQyxNQUF0QyxFQUE2QyxHQUE3QyxFQUFrREEsT0FBbEQsQ0FBMEQsTUFBMUQsRUFBaUUsR0FBakUsRUFBc0VBLE9BQXRFLENBQThFLE1BQTlFLEVBQXFGLEdBQXJGLEVBQTBGQSxPQUExRixDQUFrRyxNQUFsRyxFQUF5RyxHQUF6RyxDQUFQO0FBQXFILEtBQXZuSSxFQUF3bkkzRCxDQUFDLENBQUNzRCxvQkFBRixHQUF1QixVQUFTaEksQ0FBVCxFQUFXO0FBQUMsYUFBTzBFLENBQUMsQ0FBQ3lELHdCQUFGLENBQTJCbkksQ0FBM0IsRUFBOEJxSSxPQUE5QixDQUFzQyxNQUF0QyxFQUE2QyxHQUE3QyxDQUFQO0FBQXlELEtBQXB0SSxFQUFxdEkzRCxDQUE1dEk7QUFBOHRJLEdBQTUxSSxFQUFqRCxFQUFnNUlKLENBQUMsQ0FBQ0UsTUFBRixHQUFTQyxDQUF6NUksRUFBMjVJSCxDQUFDLENBQUN6RSxPQUFGLEdBQVUsSUFBSTRFLENBQUosRUFBcjZJLEVBQTI2SUgsQ0FBQyxXQUFELEdBQVVBLENBQUMsQ0FBQ3pFLE9BQXY3STtBQUErN0ksTUFBSXlFLENBQUo7QUFBQSxNQUFNRyxDQUFDLEdBQUM7QUFBQ0QsSUFBQUEsTUFBTSxFQUFDRixDQUFDLENBQUNFLE1BQVY7QUFBaUIzRSxJQUFBQSxPQUFPLEVBQUN5RSxDQUFDLENBQUN6RTtBQUEzQixHQUFSO0FBQTRDLFVBQXNDeUksaUNBQU8sRUFBRCxvQ0FBSTdELENBQUMsQ0FBQzVFLE9BQU47QUFBQTtBQUFBO0FBQUEsa0dBQTVDLEdBQTJELENBQTNEO0FBQTBLLENBQWpxSixDQUFrcUosSUFBbHFKLENBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztJQUVNOEk7Ozs7Ozs7Ozs7Ozs7V0FDRixtQkFBVTtBQUFBOztBQUNOLFdBQUtDLEtBQUw7QUFDQSxXQUFLQyx3QkFBTCxDQUE4QnhLLGdCQUE5QixDQUErQyxPQUEvQyxFQUF3RDtBQUFBLGVBQU0sS0FBSSxDQUFDdUssS0FBTCxFQUFOO0FBQUEsT0FBeEQ7QUFDQSxXQUFLRSxXQUFMLENBQWlCekssZ0JBQWpCLENBQWtDLFFBQWxDLEVBQTRDLFVBQUMwSyxLQUFEO0FBQUEsZUFBVyxLQUFJLENBQUNDLGFBQUwsQ0FBbUJELEtBQW5CLENBQVg7QUFBQSxPQUE1Qzs7QUFDQSxXQUFLRSxjQUFMLENBQW9CLGtCQUFwQjtBQUNIOzs7V0FDRCxpQkFBUTtBQUNKLFdBQUtILFdBQUwsQ0FBaUIzSSxLQUFqQixHQUF5QixFQUF6QjtBQUNBLFdBQUsySSxXQUFMLENBQWlCcEssS0FBakIsQ0FBdUJ3SyxPQUF2QixHQUFpQyxPQUFqQztBQUNBLFdBQUtDLGlCQUFMLENBQXVCekssS0FBdkIsQ0FBNkJ3SyxPQUE3QixHQUF1QyxPQUF2QztBQUNBLFdBQUtFLGFBQUwsQ0FBbUIxSyxLQUFuQixDQUF5QndLLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0EsV0FBS0csa0JBQUwsQ0FBd0IzSyxLQUF4QixDQUE4QndLLE9BQTlCLEdBQXdDLE1BQXhDO0FBQ0EsV0FBS0csa0JBQUwsQ0FBd0IzSyxLQUF4QixDQUE4QjRLLGVBQTlCLEdBQWdELE1BQWhEO0FBQ0EsV0FBS0MscUJBQUwsQ0FBMkI5TCxXQUEzQixHQUF5QyxFQUF6Qzs7QUFDQSxXQUFLd0wsY0FBTCxDQUFvQixnQkFBcEI7QUFDSDs7O1dBQ0QsdUJBQWNGLEtBQWQsRUFBcUI7QUFDakIsVUFBTVMsSUFBSSxHQUFHVCxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFiOztBQUNBLFVBQUksT0FBT0YsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUM3QjtBQUNIOztBQUNELFdBQUtWLFdBQUwsQ0FBaUJwSyxLQUFqQixDQUF1QndLLE9BQXZCLEdBQWlDLE1BQWpDO0FBQ0EsV0FBS0MsaUJBQUwsQ0FBdUJ6SyxLQUF2QixDQUE2QndLLE9BQTdCLEdBQXVDLE1BQXZDO0FBQ0EsV0FBS0sscUJBQUwsQ0FBMkI5TCxXQUEzQixHQUF5QytMLElBQUksQ0FBQ3JILElBQTlDO0FBQ0EsV0FBS2lILGFBQUwsQ0FBbUIxSyxLQUFuQixDQUF5QndLLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0EsV0FBS0csa0JBQUwsQ0FBd0IzSyxLQUF4QixDQUE4QndLLE9BQTlCLEdBQXdDLE1BQXhDOztBQUNBLFVBQUlNLElBQUksQ0FBQ0csSUFBTCxJQUFhSCxJQUFJLENBQUNHLElBQUwsQ0FBVWhDLE9BQVYsQ0FBa0IsT0FBbEIsTUFBK0IsQ0FBQyxDQUFqRCxFQUFvRDtBQUNoRCxhQUFLaUMscUJBQUwsQ0FBMkJKLElBQTNCO0FBQ0g7O0FBQ0QsV0FBS1AsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNPLElBQXZDO0FBQ0g7OztXQUNELCtCQUFzQkEsSUFBdEIsRUFBNEI7QUFBQTs7QUFDeEIsVUFBSSxPQUFPSyxVQUFQLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ25DO0FBQ0g7O0FBQ0QsVUFBTUMsTUFBTSxHQUFHLElBQUlELFVBQUosRUFBZjtBQUNBQyxNQUFBQSxNQUFNLENBQUN6TCxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxVQUFDMEssS0FBRCxFQUFXO0FBQ3ZDLGNBQUksQ0FBQ00sa0JBQUwsQ0FBd0IzSyxLQUF4QixDQUE4QndLLE9BQTlCLEdBQXdDLE9BQXhDO0FBQ0EsY0FBSSxDQUFDRyxrQkFBTCxDQUF3QjNLLEtBQXhCLENBQThCNEssZUFBOUIsR0FBZ0QsVUFBVVAsS0FBSyxDQUFDVSxNQUFOLENBQWFNLE1BQXZCLEdBQWdDLElBQWhGO0FBQ0gsT0FIRDtBQUlBRCxNQUFBQSxNQUFNLENBQUNFLGFBQVAsQ0FBcUJSLElBQXJCO0FBQ0g7OztXQUNELHdCQUFlckgsSUFBZixFQUFtQztBQUFBLFVBQWQ4SCxPQUFjLHVFQUFKLEVBQUk7QUFDL0IsV0FBS3pNLE9BQUwsQ0FBYTBNLGFBQWIsQ0FBMkIsSUFBSUMsV0FBSixDQUFnQmhJLElBQWhCLEVBQXNCO0FBQUVpSSxRQUFBQSxNQUFNLEVBQUVIO0FBQVYsT0FBdEIsQ0FBM0I7QUFDSDs7OztFQTdDbUIxTTs7QUErQ3hCb0wsU0FBUyxDQUFDMEIsT0FBVixHQUFvQixDQUFDLE9BQUQsRUFBVSxhQUFWLEVBQXlCLFNBQXpCLEVBQW9DLG9CQUFwQyxFQUEwRCxpQkFBMUQsRUFBNkUsY0FBN0UsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7QUNqREE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXB0ZXItbmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC1mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaG9wcGluZy1jYXJ0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Nob3BwaW5nLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvUmVzb3VyY2VzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvUmVzb3VyY2VzL2Fzc2V0cy9zcmMvc3R5bGUuY3NzPzRhNjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgJ0BzeW1mb255L3V4LWRyb3B6b25lL3NyYy9zdHlsZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtZHJvcHpvbmUtLWRyb3B6b25lJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWRyb3B6b25lL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCAnLi9qcy9jaGFwdGVyLW5hdmlnYXRvcic7XG5pbXBvcnQgJy4vanMvc2hvcHBpbmctY2FydC1tYW5hZ2VyJztcbmltcG9ydCAnLi9qcy9jdXN0b20nO1xuaW1wb3J0ICcuL2pzL3NlYXJjaC1mb3JtJztcblxuLyogaW1wb3J0ICcuL2pzL2pxdWVyeS5taW4uanMnO1xuaW1wb3J0ICcuL2pzL2pxdWVyeS51cGxvYWRpZml2ZS5taW4uanMnO1xuKi9cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnYW5pbWF0ZS5jc3MnKTtcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLyogY2hlY2sgaWYgc2NyZWVuIHJlc2l6ZXMsIHRoYW4gY2hlY2svdW5jaGVjayBpbnB1dFxuICogIGlmIHNjcmVlbiBzaXplIDwgODBlbSBzaWRlYmFyIGlzIGhpZGRlblxuICogIGlmIGJpZ2dlciAoZGVza3RvcCkgdGhhbiBzaG93IHNpZGViYXJcbiAqICBpdCdzIGJhc2VkIG9uOlxuICogIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjQzODQ3Mi8xNDk2OTcyIFxuICovXG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLXNpZGViYXInKTtcblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3ItY2hlY2snKSAhPSBudWxsKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA4MGVtJykubWF0Y2hlcykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdG9yLWNoZWNrJykuY2hlY2tlZCA9IHRydWU7XG5cblxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDgwZW0pJykubWF0Y2hlcykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRvci1jaGVjaycpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0b3ItY2hlY2snKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHRydWUpO1xufSIsIlxuLy8gKioqKioqKioqXG4gIC8vIFNMSURFUlxuICAvLyAqKioqKioqKioqXG5cblxuICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI215LXNsaWRlciA+IC5zbGlkZVwiKTtcbiAgLy8gY29uc3Qgc2xpZGVzID0gc2xpZGVyLmNoaWxkcmVuO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA+IDApIHtcbiAgICBzbGlkZXMuaXRlbSgwKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBjb25zdCBzbGlkZXNDb3VudCA9IHNsaWRlcy5sZW5ndGg7XG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDA7XG4gICAgbGV0IG5leHRTbGlkZSA9IDE7XG5cbiAgICBjb25zdCBzbGlkZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLXRleHRfX2hlYWRcIik7XG4gICAgY29uc3Qgc2xpZGVTdWJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS10ZXh0X19zdWJoZWFkXCIpO1xuICAgIGNvbnNvbGUubG9nKHNsaWRlVGV4dCk7XG5cbiAgICBzZXRJbnRlcnZhbChcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVzLml0ZW0oY3VycmVudFNsaWRlKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgbmV4dFNsaWRlID0gbmV4dFNsaWRlID09IHNsaWRlc0NvdW50IC0gMSA/IDAgOiBjdXJyZW50U2xpZGUgKyAxO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNsaWRlVGV4dC5sZW5ndGgpO1xuICAgICAgXG5cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA8IHNsaWRlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBzbGlkZVRleHRbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fc2xpZGVJblVwXCIpO1xuICAgICAgICAgIHNsaWRlU3ViVGV4dFtjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19zbGlkZUluVXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGVyZSBjdXJyZW50U2xpZGUgaXMgcHJldmlvdXMgc2xpZGVcbiAgICAgICAgY3VycmVudFNsaWRlID0gbmV4dFNsaWRlO1xuICAgICAgICBzbGlkZXMuaXRlbShuZXh0U2xpZGUpLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIC8vaWYgbXVzdCBiZSByZXBlYXRlZCBmb3IgdGhlIHNvbWUgY29uZGl0aW9uLCBuZWVkIHRvIGZpbmQgYmV0dGVyIHdheVxuICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgc2xpZGVUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHNsaWRlVGV4dFtjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19zbGlkZUluVXBcIik7XG4gICAgICAgICAgc2xpZGVTdWJUZXh0W2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX3NsaWRlSW5VcFwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgNTAwMFxuICAgICk7XG4gIH1cblxuXG5cdFx0Y29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1tb2RhbCcpO1xuXHRcdGNvbnN0IHN3aXRjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LW1vZGFsLXN3aXRjaGVyJyk7XG5cdFx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cdFx0Y29uc3QgdHJhbnNmb3JtTW9kYWwgPSAoKSA9PiB7XG5cdFx0XHRtYWluLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtb3BlblwiKTtcblx0XHR9XG4gICAgaWYgKHN3aXRjaEJ1dHRvbiAhPSBudWxsICYmIG1vZGFsQnV0dG9uICE9IG51bGwgKSB7XG5cdFx0c3dpdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR0cmFuc2Zvcm1Nb2RhbCgpO1xuICBcblx0XHR9KVxuICBcblxuXHRcdG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR0cmFuc2Zvcm1Nb2RhbCgpO1xuXHRcdH0pXG4gIH1cblxuICBcblxuXG5cblxuXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcvcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3Atc2VhcmNoLWZvcm0nKTtcbiAgICBcbiAgICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXN0cmluZycpLnZhbHVlO1xuXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdpdGVtc19maWx0ZXInLCB7XG4gICAgICAgICAgICAnc2VhcmNoVGV4dCc6IHNlYXJjaFN0cmluZ1xuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9KTtcbn0pIiwiaW1wb3J0IFNob3BwaW5nQ2FydCBmcm9tICcuL3Nob3BwaW5nLWNhcnQnO1xuXG4gICAgbGV0IGNvbG9yU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXNlbGVjdCcpO1xuXHRsZXQgc2l6ZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplLXNlbGVjdCcpO1xuICAgIGxldCBzaG9wcGluZ0NhcnQgPSBuZXcgU2hvcHBpbmdDYXJ0KCk7XG5cbiAgICAvLyBjcmVhdGVzIGp1c3QgXCJwXCIgZWxlbWVudFxuICAgIGNvbnN0IGFkZFBhcmFncmFwaCA9ICh0ZXh0LCBsaXN0SXRlbSwgY2xhc3Nlc0FycmF5KSA9PiB7XG4gICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIGNsYXNzZXNBcnJheS5mb3JFYWNoKCBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZXMgXCJwXCIgZWxlbWVudCBhbmQgdGhlbiBpbnNpZGUgb2YgaXQgXCJzbWFsbFwiIG9uZVxuICAgIGNvbnN0IGFkZFNtYWxsVGV4dCA9ICh0ZXh0LCBsaXN0SXRlbSwgY2xhc3NlcykgPT4ge1xuICAgICAgICBsZXQgcGFyZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IHNtYWxsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XG4gICAgICAgIHNtYWxsSXRlbS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgICAgIHBhcmVudEl0ZW0uYXBwZW5kQ2hpbGQoc21hbGxJdGVtKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocGFyZW50SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlTnVtYmVyQnlDYXJ0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcnRBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1hbmNob3InKTtcbiAgICBjYXJ0QW5jaG9yLmlubmVyVGV4dCA9IGAoJHtzaG9wcGluZ0NhcnQuY2FydEl0ZW1zLmxlbmd0aH0pYDtcbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZUxpc3QgPSAoc2hvcHBpbmdVbCkgPT4ge1xuICAgICAgICAgICAgICAgLy8gc2hvcHBpbmdVbCBpcyBIVE1MIGNvbGxlY3Rpb25cbiAgICAgICAgLy8gc2hvcHBpbmdDYXJ0IGlzIEpTIGFycmF5IG9mIG9iamVjdHNcbiAgICB3aGlsZSAoIHNob3BwaW5nVWwuZmlyc3RDaGlsZCkge1xuICAgICAgICBzaG9wcGluZ1VsLnJlbW92ZUNoaWxkKHNob3BwaW5nVWwuZmlyc3RDaGlsZCk7XG4gICAgICAgIFxuICAgIH1cbiAgXG4gICAgLy9wb3B1bGF0ZSBsaXN0IGFnYWluXG4gICAgc2hvcHBpbmdDYXJ0LmNhcnRJdGVtcy5mb3JFYWNoKCAoc2hvcHBpbmdJdGVtKSA9PiAge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgYWRkUGFyYWdyYXBoKHNob3BwaW5nSXRlbS5icmFuZCwgbGksIFsnZnctYm9sZCcsICdtYi0wJ10pO1xuICAgICAgICBhZGRQYXJhZ3JhcGgoc2hvcHBpbmdJdGVtLm5hbWUsIGxpLCBbJ21iLTEnXSk7XG4gICAgICAgIGFkZFNtYWxsVGV4dCgnUXVhbnRpdHk6ICcgKyBzaG9wcGluZ0l0ZW0ucXR5LCBsaSwgJ21iLTAnKTtcbiAgICAgICAgYWRkU21hbGxUZXh0KCdDb2xvcjogJyArIHNob3BwaW5nSXRlbS5jb2xvciwgbGksICdtYi0wJyk7XG4gICAgICAgIGFkZFNtYWxsVGV4dCgnU2l6ZTogJyArIHNob3BwaW5nSXRlbS5zaXplLCBsaSwgJ21iLTAnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhyTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGhyTGluZSk7XG5cbiAgICAgICAgc2hvcHBpbmdVbC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgfVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkgeyBcbiAgICBjb25zdCBzaG9wcGluZ1VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3BwaW5nLWxpc3QtdWwnKTtcbiAgICBwb3B1bGF0ZUxpc3Qoc2hvcHBpbmdVbCk7XG4gICAgY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1jYXJ0LWJ1dHRvbicpO1xuICAgIHVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbigpO1xuICAgIGlmIChhZGRUb0NhcnRCdG4gIT0gbnVsbCkge1xuXG4gICAgXG4gICAgYWRkVG9DYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0ICBcbiAgICBjb25zdCBwcm9kdWN0SWQgPSBhZGRUb0NhcnRCdG4uZGF0YXNldC5pZDtcbiAgICBjb25zdCBwcm9kdWN0QnJhbmQgPSBhZGRUb0NhcnRCdG4uZGF0YXNldC5wcm9kdWN0bmFtZTtcbiAgICBjb25zdCBwcm9kdWN0TW9kZWwgPSBhZGRUb0NhcnRCdG4uZGF0YXNldC5wcm9kdWN0bW9kZWw7XG4gICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ftb3VudC1pbnB1dCcpLnZhbHVlKTtcblxuICAgIGNvbnN0IGNvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XG4gICAgY29uc3Qgc2l6ZSA9IHNpemVTZWxlY3QudmFsdWU7XG4gICAgXG4gICAgc2hvcHBpbmdDYXJ0LmFkZEl0ZW1Ub0NhcnQoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0SWQsXG4gICAgICAgICAgICBxdHk6IHF0eSxcbiAgICAgICAgICAgIGJyYW5kOiBwcm9kdWN0QnJhbmQsXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0TW9kZWwsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH1cbiAgICApO1xuICAgXG4gICAgcG9wdWxhdGVMaXN0KHNob3BwaW5nVWwpO1xuICAgIHVwZGF0ZU51bWJlckJ5Q2FydEJ1dHRvbigpO1xuICAgIGxldCByZXNwb25zZSA9IGZldGNoKCBcIi8uLi9jaGVja291dFwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAgXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7XG4gICAgICAgICAgICBkYXRhOiBzaG9wcGluZ0NhcnQuY2FydEl0ZW1zXG4gICAgICAgIH0pXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgICAgIH1cbiAgICB9KS50aGVuKCggcmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pO1xuXG5cbiAgICB9KVxufVxufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcHBpbmdDYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3R1aicpO1xuICAgICAgICAvLyBJdCB3aWxsIHN0b3JhZ2UgYWxsIHNob3BwaW5nIGNhcnQgaXRlbXMgaGVyZVxuICAgICAgICB0aGlzLmNhcnRJdGVtcyA9IFtdO1xuICAgICAgIFxuICAgICAgIHRoaXMuY2FydEl0ZW1zID0gdGhpcy5nZXREYXRhRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY2FydFwiICsgdGhpcy5jYXJ0SXRlbXMpO1xuICAgIH1cbiAgICBnZXREYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydEl0ZW1zJykgPT09IG51bGxcbiAgICAgICAgICAgIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0SXRlbXMnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydEl0ZW1zJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldERhdGFJblN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0SXRlbXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnRJdGVtcykpO1xuICAgIH1cbiAgICBhZGRJdGVtVG9DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXJ0SXRlbXMpO1xuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGlzIGFscmVhZHkgaW4gdGhlIGFycmF5XG4gICAgICAgIGNvbnN0IHNlYXJjaE9iamVjdElkeCA9IHRoaXMuY2FydEl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gcHJvZHVjdC5pZDtcbiAgICAgICAgIH0gKVxuICAgICAgICBpZiAoc2VhcmNoT2JqZWN0SWR4ID09PSAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FydEl0ZW1zLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGFJblN0b3JhZ2UoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJ0SXRlbXNbc2VhcmNoT2JqZWN0SWR4XS5xdHkgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YUluU3RvcmFnZSgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoT2JqZWN0SWR4KVxuICAgIFxuICAgIH1cbiAgICByZW1vdmVBbGxJdGVtcygpIHtcbiAgICAgICAgdGhpcy5jYXJ0SXRlbXMgPSBbXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRJdGVtcycsIFtdKTtcbiAgICB9XG59XG4iLCIhZnVuY3Rpb24oZSl7KHQ9e30pLl9fZXNNb2R1bGU9ITAsdC5Sb3V0aW5nPXQuUm91dGVyPXZvaWQgMCxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbChlLHQpe3RoaXMuY29udGV4dF89ZXx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXModHx8e30pfXJldHVybiBsLmdldEluc3RhbmNlPWZ1bmN0aW9uKCl7cmV0dXJuIHQuUm91dGluZ30sbC5zZXREYXRhPWZ1bmN0aW9uKGUpe2wuZ2V0SW5zdGFuY2UoKS5zZXRSb3V0aW5nRGF0YShlKX0sbC5wcm90b3R5cGUuc2V0Um91dGluZ0RhdGE9ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSx2b2lkIDAhPT1lLnByZWZpeCYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLHZvaWQgMCE9PWUucG9ydCYmdGhpcy5zZXRQb3J0KGUucG9ydCksdm9pZCAwIT09ZS5sb2NhbGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx2b2lkIDAhPT1lLnNjaGVtZSYmdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfSxsLnByb3RvdHlwZS5zZXRSb3V0ZXM9ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9LGwucHJvdG90eXBlLmdldFJvdXRlcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199LGwucHJvdG90eXBlLnNldEJhc2VVcmw9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfSxsLnByb3RvdHlwZS5nZXRCYXNlVXJsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9LGwucHJvdG90eXBlLnNldFByZWZpeD1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfSxsLnByb3RvdHlwZS5zZXRTY2hlbWU9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX0sbC5wcm90b3R5cGUuZ2V0U2NoZW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfSxsLnByb3RvdHlwZS5zZXRIb3N0PWZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfSxsLnByb3RvdHlwZS5nZXRIb3N0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH0sbC5wcm90b3R5cGUuc2V0UG9ydD1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX0sbC5wcm90b3R5cGUuZ2V0UG9ydD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnBvcnR9LGwucHJvdG90eXBlLnNldExvY2FsZT1mdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfSxsLnByb3RvdHlwZS5nZXRMb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9LGwucHJvdG90eXBlLmJ1aWxkUXVlcnlQYXJhbXM9ZnVuY3Rpb24obyxlLG4pe3ZhciB0LHI9dGhpcyxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZihlIGluc3RhbmNlb2YgQXJyYXkpZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cy50ZXN0KG8pP24obyxlKTpyLmJ1aWxkUXVlcnlQYXJhbXMobytcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGU/dDpcIlwiKStcIl1cIixlLG4pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IodCBpbiBlKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhvK1wiW1wiK3QrXCJdXCIsZVt0XSxuKTtlbHNlIG4obyxlKX0sbC5wcm90b3R5cGUuZ2V0Um91dGU9ZnVuY3Rpb24oZSl7dmFyIHQsbz1bdGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLHRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsZV07Zm9yKHQgaW4gbylpZihvW3RdaW4gdGhpcy5yb3V0ZXNfKXJldHVybiB0aGlzLnJvdXRlc19bb1t0XV07dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpfSxsLnByb3RvdHlwZS5nZW5lcmF0ZT1mdW5jdGlvbihyLGUscCl7dmFyIHQscz10aGlzLmdldFJvdXRlKHIpLGk9ZXx8e30sdT1PYmplY3QuYXNzaWduKHt9LGkpLGM9XCJcIixhPSEwLG89XCJcIixlPXZvaWQgMD09PXRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihzLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKFwidGV4dFwiPT09ZVswXSYmXCJzdHJpbmdcIj09dHlwZW9mIGVbMV0pcmV0dXJuIGM9bC5lbmNvZGVQYXRoQ29tcG9uZW50KGVbMV0pK2Msdm9pZChhPSExKTtpZihcInZhcmlhYmxlXCIhPT1lWzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK2VbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7Nj09PWUubGVuZ3RoJiYhMD09PWVbNV0mJihhPSExKTt2YXIgdD1zLmRlZmF1bHRzJiYhQXJyYXkuaXNBcnJheShzLmRlZmF1bHRzKSYmXCJzdHJpbmdcIj09dHlwZW9mIGVbM10mJmVbM11pbiBzLmRlZmF1bHRzO2lmKCExPT09YXx8IXR8fFwic3RyaW5nXCI9PXR5cGVvZiBlWzNdJiZlWzNdaW4gaSYmIUFycmF5LmlzQXJyYXkocy5kZWZhdWx0cykmJmlbZVszXV0hPXMuZGVmYXVsdHNbZVszXV0pe3ZhciBvLG49dm9pZCAwO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlWzNdJiZlWzNdaW4gaSluPWlbZVszXV0sZGVsZXRlIHVbZVszXV07ZWxzZXtpZihcInN0cmluZ1wiIT10eXBlb2YgZVszXXx8IXR8fEFycmF5LmlzQXJyYXkocy5kZWZhdWx0cykpe2lmKGEpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytyKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJytlWzNdKydcIi4nKX1uPXMuZGVmYXVsdHNbZVszXV19KCEwPT09bnx8ITE9PT1ufHxcIlwiPT09bikmJmF8fChvPWwuZW5jb2RlUGF0aENvbXBvbmVudChuKSxjPWVbMV0rKG89XCJudWxsXCI9PT1vJiZudWxsPT09bj9cIlwiOm8pK2MpLGE9ITF9ZWxzZSB0JiZcInN0cmluZ1wiPT10eXBlb2YgZVszXSYmZVszXWluIHUmJmRlbGV0ZSB1W2VbM11dfSksXCJcIj09PWMmJihjPVwiL1wiKSxzLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdDtcInRleHRcIiE9PWVbMF0/XCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiBpPyh0PWlbZVszXV0sZGVsZXRlIHVbZVszXV0pOnMuZGVmYXVsdHMmJiFBcnJheS5pc0FycmF5KHMuZGVmYXVsdHMpJiZlWzNdaW4gcy5kZWZhdWx0cyYmKHQ9cy5kZWZhdWx0c1tlWzNdXSksbz1lWzFdK3Qrbyk6bz1lWzFdK299KSxjPXRoaXMuY29udGV4dF8uYmFzZV91cmwrYyxzLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBzLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9cy5yZXF1aXJlbWVudHMuX3NjaGVtZT8odD1vfHx0aGlzLmdldEhvc3QoKSxjPXMucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIit0KygtMTx0LmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYyk6dm9pZCAwIT09cy5zY2hlbWVzJiZ2b2lkIDAhPT1zLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1zLnNjaGVtZXNbMF0/KHQ9b3x8dGhpcy5nZXRIb3N0KCksYz1zLnNjaGVtZXNbMF0rXCI6Ly9cIit0KygtMTx0LmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYyk6byYmdGhpcy5nZXRIb3N0KCkhPT1vKygtMTxvLmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSk/Yz10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrbysoLTE8by5pbmRleE9mKFwiOlwiK2UpfHxcIlwiPT09ZT9cIlwiOlwiOlwiK2UpK2M6ITA9PT1wJiYoYz10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrKC0xPHRoaXMuZ2V0SG9zdCgpLmluZGV4T2YoXCI6XCIrZSl8fFwiXCI9PT1lP1wiXCI6XCI6XCIrZSkrYyksMDxPYmplY3Qua2V5cyh1KS5sZW5ndGgpe2Z1bmN0aW9uIGYoZSx0KXt0PW51bGw9PT0odD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0KT9cIlwiOnQsaC5wdXNoKGwuZW5jb2RlUXVlcnlDb21wb25lbnQoZSkrXCI9XCIrbC5lbmNvZGVRdWVyeUNvbXBvbmVudCh0KSl9dmFyIG4saD1bXTtmb3IobiBpbiB1KXUuaGFzT3duUHJvcGVydHkobikmJnRoaXMuYnVpbGRRdWVyeVBhcmFtcyhuLHVbbl0sZik7Yz1jK1wiP1wiK2guam9pbihcIiZcIil9cmV0dXJuIGN9LGwuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTJGL2csXCIvXCIpLnJlcGxhY2UoLyU0MC9nLFwiQFwiKS5yZXBsYWNlKC8lM0EvZyxcIjpcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyUzQi9nLFwiO1wiKS5yZXBsYWNlKC8lMkMvZyxcIixcIikucmVwbGFjZSgvJTJBL2csXCIqXCIpLnJlcGxhY2UoL1xcKC9nLFwiJTI4XCIpLnJlcGxhY2UoL1xcKS9nLFwiJTI5XCIpLnJlcGxhY2UoLycvZyxcIiUyN1wiKX0sbC5lbmNvZGVQYXRoQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3JldHVybiBsLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lM0QvZyxcIj1cIikucmVwbGFjZSgvJTJCL2csXCIrXCIpLnJlcGxhY2UoLyUyMS9nLFwiIVwiKS5yZXBsYWNlKC8lN0MvZyxcInxcIil9LGwuZW5jb2RlUXVlcnlDb21wb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGwuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUzRi9nLFwiP1wiKX0sbH0oKSx0LlJvdXRlcj1vLHQuUm91dGluZz1uZXcgbyx0LmRlZmF1bHQ9dC5Sb3V0aW5nO3ZhciB0LG89e1JvdXRlcjp0LlJvdXRlcixSb3V0aW5nOnQuUm91dGluZ307XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxvLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW8uUm91dGluZzooZS5Sb3V0aW5nPW8uUm91dGluZyxlLmZvcz17Um91dGVyOm8uUm91dGVyfSl9KHRoaXMpOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbGVhcigpKTtcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMub25JbnB1dENoYW5nZShldmVudCkpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdkcm9wem9uZTpjb25uZWN0Jyk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ZpbGVuYW1lVGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNsZWFyJyk7XG4gICAgfVxuICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdGaWxlbmFtZVRhcmdldC50ZXh0Q29udGVudCA9IGZpbGUubmFtZTtcbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmIChmaWxlLnR5cGUgJiYgZmlsZS50eXBlLmluZGV4T2YoJ2ltYWdlJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZUltYWdlUHJldmlldyhmaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdkcm9wem9uZTpjaGFuZ2UnLCBmaWxlKTtcbiAgICB9XG4gICAgX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGaWxlUmVhZGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgZXZlbnQudGFyZ2V0LnJlc3VsdCArICdcIiknO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICAgIF9kaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQgfSkpO1xuICAgIH1cbn1cbmRlZmF1bHRfMS50YXJnZXRzID0gWydpbnB1dCcsICdwbGFjZWhvbGRlcicsICdwcmV2aWV3JywgJ3ByZXZpZXdDbGVhckJ1dHRvbicsICdwcmV2aWV3RmlsZW5hbWUnLCAncHJldmlld0ltYWdlJ107XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsInNpZGViYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjaGVja2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpdGVtIiwic3R5bGUiLCJvcGFjaXR5Iiwic2xpZGVzQ291bnQiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJzbGlkZVRleHQiLCJzbGlkZVN1YlRleHQiLCJjb25zb2xlIiwibG9nIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJtb2RhbEJ1dHRvbiIsInN3aXRjaEJ1dHRvbiIsIm1haW4iLCJ0cmFuc2Zvcm1Nb2RhbCIsInRvZ2dsZSIsInJvdXRlcyIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsInNlYXJjaEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hTdHJpbmciLCJ2YWx1ZSIsInVybCIsImdlbmVyYXRlIiwibG9jYXRpb24iLCJocmVmIiwiU2hvcHBpbmdDYXJ0IiwiY29sb3JTZWxlY3QiLCJzaXplU2VsZWN0Iiwic2hvcHBpbmdDYXJ0IiwiYWRkUGFyYWdyYXBoIiwidGV4dCIsImxpc3RJdGVtIiwiY2xhc3Nlc0FycmF5IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImZvckVhY2giLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImFkZFNtYWxsVGV4dCIsImNsYXNzZXMiLCJwYXJlbnRJdGVtIiwic21hbGxJdGVtIiwidXBkYXRlTnVtYmVyQnlDYXJ0QnV0dG9uIiwiY2FydEFuY2hvciIsImNhcnRJdGVtcyIsInBvcHVsYXRlTGlzdCIsInNob3BwaW5nVWwiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzaG9wcGluZ0l0ZW0iLCJsaSIsImJyYW5kIiwibmFtZSIsInF0eSIsImNvbG9yIiwic2l6ZSIsImhyTGluZSIsImFkZFRvQ2FydEJ0biIsInByb2R1Y3RJZCIsImRhdGFzZXQiLCJpZCIsInByb2R1Y3RCcmFuZCIsInByb2R1Y3RuYW1lIiwicHJvZHVjdE1vZGVsIiwicHJvZHVjdG1vZGVsIiwicGFyc2VJbnQiLCJhZGRJdGVtVG9DYXJ0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJ0aGVuIiwic3RhdHVzIiwiZ2V0RGF0YUZyb21TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2V0SXRlbSIsInByb2R1Y3QiLCJzZWFyY2hPYmplY3RJZHgiLCJmaW5kSW5kZXgiLCJwdXNoIiwic2V0RGF0YUluU3RvcmFnZSIsInQiLCJfX2VzTW9kdWxlIiwiUm91dGVyIiwibyIsImwiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJnZXRJbnN0YW5jZSIsInNldERhdGEiLCJwcm90b3R5cGUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiT2JqZWN0IiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiZ2V0QmFzZVVybCIsImdldFNjaGVtZSIsImdldEhvc3QiLCJnZXRQb3J0IiwiZ2V0TG9jYWxlIiwiYnVpbGRRdWVyeVBhcmFtcyIsIm4iLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwidGVzdCIsImdldFJvdXRlIiwiRXJyb3IiLCJwIiwiaSIsInUiLCJhc3NpZ24iLCJjIiwiYSIsInRva2VucyIsImVuY29kZVBhdGhDb21wb25lbnQiLCJkZWZhdWx0cyIsImlzQXJyYXkiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiX3NjaGVtZSIsImluZGV4T2YiLCJzY2hlbWVzIiwia2V5cyIsImYiLCJoIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImpvaW4iLCJjdXN0b21FbmNvZGVVUklDb21wb25lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvcyIsImRlZmF1bHRfMSIsImNsZWFyIiwicHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0IiwiaW5wdXRUYXJnZXQiLCJldmVudCIsIm9uSW5wdXRDaGFuZ2UiLCJfZGlzcGF0Y2hFdmVudCIsImRpc3BsYXkiLCJwbGFjZWhvbGRlclRhcmdldCIsInByZXZpZXdUYXJnZXQiLCJwcmV2aWV3SW1hZ2VUYXJnZXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcmV2aWV3RmlsZW5hbWVUYXJnZXQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJ0eXBlIiwiX3BvcHVsYXRlSW1hZ2VQcmV2aWV3IiwiRmlsZVJlYWRlciIsInJlYWRlciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwidGFyZ2V0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9