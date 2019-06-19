(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Swatch.js":
/*!******************************!*\
  !*** ./components/Swatch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Swatch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Swatch.css */ "./components/Swatch.css");
/* harmony import */ var _Swatch_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Swatch_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danburzo/projects/webcolors-cmyk/components/Swatch.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "swatch",
    style: {
      backgroundColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
});

/***/ }),

/***/ "./data/colors lazy recursive ^\\.\\/.*\\.json$":
/*!**********************************************************!*\
  !*** ./data/colors lazy ^\.\/.*\.json$ namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./coatedfogra27.json": [
		"./data/colors/coatedfogra27.json",
		3
	],
	"./coatedfogra39.json": [
		"./data/colors/coatedfogra39.json",
		4
	],
	"./coatedgracol2006.json": [
		"./data/colors/coatedgracol2006.json",
		5
	],
	"./japancolor2001coated.json": [
		"./data/colors/japancolor2001coated.json",
		8
	],
	"./japancolor2001uncoated.json": [
		"./data/colors/japancolor2001uncoated.json",
		9
	],
	"./japancolor2002newspaper.json": [
		"./data/colors/japancolor2002newspaper.json",
		10
	],
	"./japancolor2003webcoated.json": [
		"./data/colors/japancolor2003webcoated.json",
		11
	],
	"./japanwebcoated.json": [
		"./data/colors/japanwebcoated.json",
		12
	],
	"./uncoatedfogra29.json": [
		"./data/colors/uncoatedfogra29.json",
		13
	],
	"./usnewsprintsnap2007.json": [
		"./data/colors/usnewsprintsnap2007.json",
		14
	],
	"./ussheetfedcoated.json": [
		"./data/colors/ussheetfedcoated.json",
		15
	],
	"./ussheetfeduncoated.json": [
		"./data/colors/ussheetfeduncoated.json",
		16
	],
	"./uswebcoatedswop.json": [
		"./data/colors/uswebcoatedswop.json",
		17
	],
	"./uswebuncoated.json": [
		"./data/colors/uswebuncoated.json",
		18
	],
	"./webcoatedfogra28.json": [
		"./data/colors/webcoatedfogra28.json",
		19
	],
	"./webcoatedswop2006grade3.json": [
		"./data/colors/webcoatedswop2006grade3.json",
		20
	],
	"./webcoatedswop2006grade5.json": [
		"./data/colors/webcoatedswop2006grade5.json",
		21
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./data/colors lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./data/profiles.json":
/*!****************************!*\
  !*** ./data/profiles.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = [{"name":"Coated FOGRA27 (ISO 12647-2:2004)","id":"coatedfogra27"},{"name":"Coated FOGRA39 (ISO 12647-2:2004)","id":"coatedfogra39"},{"name":"Coated GRACoL 2006 (ISO 12647-2:2004)","id":"coatedgracol2006"},{"name":"Japan Color 2001 Coated","id":"japancolor2001coated"},{"name":"Japan Color 2001 Uncoated","id":"japancolor2001uncoated"},{"name":"Japan Color 2002 Newspaper","id":"japancolor2002newspaper"},{"name":"Japan Color 2003 Web Coated","id":"japancolor2003webcoated"},{"name":"Japan Web Coated (Ad)","id":"japanwebcoated"},{"name":"US Newsprint (SNAP 2007)","id":"usnewsprintsnap2007"},{"name":"U.S. Sheetfed Coated v2","id":"ussheetfedcoated"},{"name":"U.S. Sheetfed Uncoated v2","id":"ussheetfeduncoated"},{"name":"U.S. Web Coated (SWOP) v2","id":"uswebcoatedswop"},{"name":"U.S. Web Uncoated v2","id":"uswebuncoated"},{"name":"Uncoated FOGRA29 (ISO 12647-2:2004)","id":"uncoatedfogra29"},{"name":"Web Coated FOGRA28 (ISO 12647-2:2004)","id":"webcoatedfogra28"},{"name":"Web Coated SWOP 2006 Grade 3 Paper","id":"webcoatedswop2006grade3"},{"name":"Web Coated SWOP 2006 Grade 5 Paper","id":"webcoatedswop2006grade5"}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/culori/build/culori.umd.js":
/*!*************************************************!*\
  !*** ./node_modules/culori/build/culori.umd.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(a,r){ true?r(exports):undefined}(this,function(a){"use strict";function r(a,r){if("number"==typeof a)return 3===r?{mode:"rgb",r:(a>>8&15|a>>4&240)/255,g:(a>>4&15|240&a)/255,b:(15&a|a<<4&240)/255}:4===r?{mode:"rgb",r:(a>>12&15|a>>8&240)/255,g:(a>>8&15|a>>4&240)/255,b:(a>>4&15|240&a)/255,alpha:(15&a|a<<4&240)/255}:6===r?{mode:"rgb",r:(a>>16&255)/255,g:(a>>8&255)/255,b:(255&a)/255}:8===r?{mode:"rgb",r:(a>>24&255)/255,g:(a>>16&255)/255,b:(a>>8&255)/255,alpha:(255&a)/255}:void 0}var t={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var e=(/([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)/+"").replace(/^\/|\/$/g,""),n=e+"%",o="(?:"+e+"%|"+e+")",i="(?:"+e+"(deg|grad|rad|turn)|"+e+")",h="\\s*,\\s*",u="\\s+",l=new RegExp("^rgba?\\(\\s*"+e+h+e+h+e+"\\s*(?:,\\s*"+o+"\\s*)?\\)$"),c=new RegExp("^rgba?\\(\\s*"+n+h+n+h+n+"\\s*(?:,\\s*"+o+"\\s*)?\\)$"),s=new RegExp("^rgba?\\(\\s*"+e+u+e+u+e+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),d=new RegExp("^rgba?\\(\\s*"+n+u+n+u+n+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),p=new RegExp("^hsla?\\(\\s*"+i+h+n+h+n+"\\s*(?:,\\s*"+o+"\\s*)?\\)$"),v=new RegExp("^hsla?\\(\\s*"+i+u+n+u+n+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),b=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,f=new RegExp("^hwb\\(\\s*"+i+u+n+u+n+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),g=new RegExp("^lab\\(\\s*"+e+u+e+u+e+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),M=new RegExp("^lch\\(\\s*"+e+u+e+u+i+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),m=new RegExp("^gray\\(\\s*"+e+"()()\\s*(?:\\/\\s*"+o+"\\s*)?\\)$");function w(a){return a}var y=function(a){for(var r=[],t=0;t<a.length-1;t++){var e=a[t],n=a[t+1];void 0===e&&void 0===n?r.push(void 0):void 0!==e&&void 0!==n?r.push([e,n]):r.push(void 0!==e?[e,e]:[n,n])}return r};function k(a,r){return void 0===a&&(a=w),void 0===r&&(r=1),function(t){var e=(a||w)(t),n=y(e);return function(a){var t=(a=Math.pow(a,r))*n.length,e=1===a?n.length-1:Math.floor(t),o=n[e];return void 0===o?void 0:o[0]+(t-e)*(o[1]-o[0])}}}function q(a){return a.map(function(a,r,t){return void 0===a&&void 0!==t[r+1]?1:a})}var x={mode:"rgb",channels:["r","g","b","alpha"],parsers:[function(a){var t;return(t=a.match(b))?r(parseInt(t[1],16),t[1].length):void 0},function(a){var r,t;if(r=a.match(l)||a.match(s))t={mode:"rgb",r:r[1]/255,g:r[2]/255,b:r[3]/255};else{if(!(r=a.match(c)||a.match(d)))return;t={mode:"rgb",r:r[1]/100,g:r[2]/100,b:r[3]/100}}return void 0!==r[4]?t.alpha=r[4]/100:void 0!==r[5]&&(t.alpha=+r[5]),t},function(a){return"string"==typeof a&&r(t[a.toLowerCase()],6)||void 0},function(a){return"transparent"===a?r(0,8):void 0}],interpolate:{r:k(),g:k(),b:k(),alpha:k(q)}},I=function(a){return a<.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)};function P(a){var r=a.r,t=a.g,e=a.b,n=a.alpha,o={mode:"lrgb",r:I(r),g:I(t),b:I(e)};return void 0!==n&&(o.alpha=n),o}var E=function(a){return a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a};function j(a){var r=a.r,t=a.g,e=a.b,n=a.alpha,o={mode:"rgb",r:E(r),g:E(t),b:E(e)};return void 0!==n&&(o.alpha=n),o}var $={mode:"lrgb",output:{rgb:j},input:{rgb:P},channels:["r","g","b","alpha"],interpolate:{r:k(),g:k(),b:k(),alpha:k(q)}};function R(a){return(a%=360)<0?a+360:a}var A=function(a,r){switch(r){case"deg":return+a;case"rad":return a/Math.PI*180;case"grad":return a/10*9;case"turn":return 360*a}};function O(a){for(var r=[],t=0;t<a.length;t++)if(void 0!==a[t]){var e=R(a[t]),n=void 0;0!==t&&void 0!==(n=r[r.length-1])?r.push(Math.abs(e-n)>180?e-360*Math.sign(e-n):e):r.push(e)}else r.push(void 0);return r}var C={mode:"hsl",output:{rgb:function(a){var r=a.h,t=a.s,e=a.l,n=a.alpha;r=R(r);var o,i=e+t*(e<.5?e:1-e),h=i-2*(i-e)*Math.abs(r/60%2-1);switch(Math.floor(r/60)){case 0:o={r:i,g:h,b:2*e-i};break;case 1:o={r:h,g:i,b:2*e-i};break;case 2:o={r:2*e-i,g:i,b:h};break;case 3:o={r:2*e-i,g:h,b:i};break;case 4:o={r:h,g:2*e-i,b:i};break;case 5:o={r:i,g:2*e-i,b:h};break;default:o={r:2*e-i,g:2*e-i,b:2*e-i}}return o.mode="rgb",void 0!==n&&(o.alpha=n),o}},input:{rgb:function(a){var r=a.r,t=a.g,e=a.b,n=a.alpha,o=Math.max(r,t,e),i=Math.min(r,t,e),h={mode:"hsl",s:o===i?0:(o-i)/(1-Math.abs(o+i-1)),l:.5*(o+i)};return o-i!=0&&(h.h=60*(o===r?(t-e)/(o-i)+6*(t<e):o===t?(e-r)/(o-i)+2:(r-t)/(o-i)+4)),void 0!==n&&(h.alpha=n),h}},channels:["h","s","l","alpha"],ranges:{h:[0,360]},parsers:[function(a){if("string"==typeof a){var r=a.match(p)||a.match(v);if(r){var t={mode:"hsl",h:void 0===r[3]?A(r[1],r[2]):+r[3],s:Math.min(Math.max(0,r[4]/100),1),l:Math.min(Math.max(0,r[5]/100),1)};return void 0!==r[6]?t.alpha=r[6]/100:void 0!==r[7]&&(t.alpha=r[7]/255),t}}}],interpolate:{h:k(O),s:k(),l:k(),alpha:k(q)}};function S(a){var r=a.h,t=a.s,e=a.v,n=a.alpha;r=R(r);var o,i=Math.abs(r/60%2-1);switch(Math.floor(r/60)){case 0:o={r:e,g:e*(1-t*i),b:e*(1-t)};break;case 1:o={r:e*(1-t*i),g:e,b:e*(1-t)};break;case 2:o={r:e*(1-t),g:e,b:e*(1-t*i)};break;case 3:o={r:e*(1-t),g:e*(1-t*i),b:e};break;case 4:o={r:e*(1-t*i),g:e*(1-t),b:e};break;case 5:o={r:e,g:e*(1-t),b:e*(1-t*i)};break;default:o={r:e*(1-t),g:e*(1-t),b:e*(1-t)}}return o.mode="rgb",void 0!==n&&(o.alpha=n),o}function z(a){var r=a.r,t=a.g,e=a.b,n=a.alpha,o=Math.max(r,t,e),i=Math.min(r,t,e),h={mode:"hsv",s:0===o?0:1-i/o,v:o};return o-i!=0&&(h.h=60*(o===r?(t-e)/(o-i)+6*(t<e):o===t?(e-r)/(o-i)+2:(r-t)/(o-i)+4)),void 0!==n&&(h.alpha=n),h}var N={mode:"hsv",output:{rgb:S},input:{rgb:z},channels:["h","s","v","alpha"],ranges:{h:[0,360]},interpolate:{h:k(O),s:k(),v:k(),alpha:k(q)}};var D={mode:"hsi",output:{rgb:function(a){var r=a.h,t=a.s,e=a.i,n=a.alpha;r=R(r);var o,i=Math.abs(r/60%2-1);switch(Math.floor(r/60)){case 0:o={r:e*(1+t*(3/(2-i)-1)),g:e*(1+t*(3*(1-i)/(2-i)-1)),b:e*(1-t)};break;case 1:o={r:e*(1+t*(3*(1-i)/(2-i)-1)),g:e*(1+t*(3/(2-i)-1)),b:e*(1-t)};break;case 2:o={r:e*(1-t),g:e*(1+t*(3/(2-i)-1)),b:e*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:o={r:e*(1-t),g:e*(1+t*(3*(1-i)/(2-i)-1)),b:e*(1+t*(3/(2-i)-1))};break;case 4:o={r:e*(1+t*(3*(1-i)/(2-i)-1)),g:e*(1-t),b:e*(1+t*(3/(2-i)-1))};break;case 5:o={r:e*(1+t*(3/(2-i)-1)),g:e*(1-t),b:e*(1+t*(3*(1-i)/(2-i)-1))};break;default:o={r:e*(1-t),g:e*(1-t),b:e*(1-t)}}return o.mode="rgb",void 0!==n&&(o.alpha=n),o}},input:{rgb:function(a){var r=a.r,t=a.g,e=a.b,n=a.alpha,o=Math.max(r,t,e),i=Math.min(r,t,e),h={mode:"hsi",s:r+t+e===0?0:1-3*i/(r+t+e),i:(r+t+e)/3};return o-i!=0&&(h.h=60*(o===r?(t-e)/(o-i)+6*(t<e):o===t?(e-r)/(o-i)+2:(r-t)/(o-i)+4)),void 0!==n&&(h.alpha=n),h}},channels:["h","s","i","alpha"],ranges:{h:[0,360]},interpolate:{h:k(O),s:k(),i:k(),alpha:k(q)}};var L={mode:"hwb",output:{rgb:function(a){var r=a.h,t=a.w,e=a.b;if(t+e>1){var n=t+e;t/=n,e/=n}return S({h:r,s:1===e?1:1-t/(1-e),v:1-e,alpha:a.alpha})}},input:{rgb:function(a){var r=z(a);if(void 0!==r){var t={mode:"hwb",w:(1-r.s)*r.v,b:1-r.v};return void 0!==r.h&&(t.h=r.h),void 0!==r.alpha&&(t.alpha=r.alpha),t}}},channels:["h","w","b","alpha"],ranges:{h:[0,360]},parsers:[function(a){if("string"==typeof a){var r=a.match(f);if(r){var t={mode:"hwb",h:void 0===r[3]?A(r[1],r[2]):+r[3],w:r[4]/100,b:r[5]/100};if(t.w+t.b>1){var e=t.w+t.b;t.w/=e,t.b/=e}return void 0!==r[6]?t.alpha=r[6]/100:void 0!==r[7]&&(t.alpha=r[7]/255),t}}}],interpolate:{h:k(O),w:k(),b:k(),alpha:k(q)}},_=.96422,B=1,F=.82521,H=Math.pow(29,3)/Math.pow(3,3),K=Math.pow(6,3)/Math.pow(29,3),G=function(a){return Math.pow(a,3)>K?Math.pow(a,3):(116*a-16)/H};function J(a){var r,t,e,n,o,i=function(a){var r=a.x,t=a.y,e=a.z;return j({r:3.1338561*r-1.6168667*t-.4906146*e,g:-.9787684*r+1.9161415*t+.033454*e,b:.0719453*r-.2289914*t+1.4052427*e})}((t=(r=a).l,e=r.a,o=(n=(t+16)/116)-r.b/200,{x:G(e/500+n)*_,y:G(n)*B,z:G(o)*F}));return i.mode="rgb",void 0!==a.alpha&&(i.alpha=a.alpha),i}var Q=function(a){return a>K?Math.cbrt(a):(H*a+16)/116};function T(a){var r,t,e,n,o,i,h=(r=function(a){var r=P(a),t=r.r,e=r.g,n=r.b;return{x:.4360747*t+.3850649*e+.1430804*n,y:.2225045*t+.7168786*e+.0606169*n,z:.0139322*t+.0971045*e+.7141733*n}}(a),t=r.x,e=r.y,n=r.z,o=Q(t/_),{mode:"lab",l:116*(i=Q(e/B))-16,a:500*(o-i),b:200*(i-Q(n/F))});return a.r===a.b===a.g&&(h.a=h.b=0),void 0!==a.alpha&&(h.alpha=a.alpha),h}var U={mode:"lab",output:{rgb:J},input:{rgb:T},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-79.167,93.408],b:[-111.859,93.246]},parsers:[function(a){if("string"==typeof a){var r,t;if(r=a.match(g))t={mode:"lab",l:+r[1],a:+r[2],b:+r[3]};else{if(!(r=a.match(m)))return;t={mode:"lab",l:+r[1],a:0,b:0}}return void 0!==r[4]?t.alpha=r[4]/100:void 0!==r[5]&&(t.alpha=+r[5]),t}}],interpolate:{l:k(),a:k(),b:k(),alpha:k(q)}};function V(a){var r=a.l,t=a.a,e=a.b,n=a.alpha,o=Math.sqrt(t*t+e*e),i={mode:"lch",l:r,c:o};return o&&(i.h=R(180*Math.atan2(e,t)/Math.PI)),void 0!==n&&(i.alpha=n),i}function W(a){var r=a.l,t=a.c,e=a.h,n=a.alpha,o={mode:"lab",l:r,a:0===t?0:t*Math.cos(e/180*Math.PI),b:0===t?0:t*Math.sin(e/180*Math.PI)};return void 0!==n&&(o.alpha=n),o}var X={mode:"lch",output:{lab:W,rgb:function(a){return J(W(a))}},input:{rgb:function(a){return V(T(a))},lch:V},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,131.008],h:[0,360]},parsers:[function(a){if("string"==typeof a){var r=a.match(M);if(r){var t={mode:"lch",l:+r[1],c:Math.max(0,+r[2]),h:void 0===r[5]?A(r[3],r[4]):+r[5]};return void 0!==r[6]?t.alpha=r[6]/100:void 0!==r[7]&&(t.alpha=+r[7]),t}}}],interpolate:{h:k(O),c:k(),l:k(),alpha:k(q)}},Y=[-.14861,1.78277,-.29227,-.90649,1.97294,0],Z=Math.PI/180,aa=180/Math.PI,ra=Y[3]*Y[4],ta=Y[1]*Y[4],ea=Y[1]*Y[2]-Y[0]*Y[3];var na={mode:"cubehelix",channels:["h","s","l","alpha"],ranges:{h:[0,360],s:[0,4.6143]},input:{rgb:function(a){var r=a.r,t=a.g,e=a.b,n=a.alpha,o=(ea*e+r*ra-t*ta)/(ea+ra-ta),i=e-o,h=(Y[4]*(t-o)-Y[2]*i)/Y[3],u={mode:"cubehelix",l:o,s:0===o||1===o?void 0:Math.sqrt(i*i+h*h)/(Y[4]*o*(1-o))};return u.s&&(u.h=Math.atan2(h,i)*aa-120),void 0!==n&&(u.alpha=n),u}},output:{rgb:function(a){var r=a.h,t=a.s,e=a.l,n=a.alpha,o={mode:"rgb"};r=(void 0===r?0:r+120)*Z;var i=void 0===t?0:t*e*(1-e),h=Math.cos(r),u=Math.sin(r);return o.r=e+i*(Y[0]*h+Y[1]*u),o.g=e+i*(Y[2]*h+Y[3]*u),o.b=e+i*(Y[4]*h+Y[5]*u),void 0!==n&&(o.alpha=n),o}},interpolate:{h:k(O),s:k(),l:k(),alpha:k(q)}};function oa(a){var r=a.l,t=a.a,e=a.b,n=a.alpha,o=Math.sqrt(t*t+e*e),i={mode:"dlch",l:r,c:o};return o&&(i.h=R(180*Math.atan2(e,t)/Math.PI)),void 0!==n&&(i.alpha=n),i}var ia=1,ha=1,ua=26/180*Math.PI,la=Math.cos(ua),ca=Math.sin(ua),sa=100/Math.log(1.39);function da(a){var r=a.l,t=a.c,e=a.h,n=a.alpha,o={mode:"lab",l:(Math.exp(r*ia/sa)-1)/.0039};if(void 0===e)o.a=o.b=0;else{var i=(Math.exp(.0435*t*ha*ia)-1)/.075,h=i*Math.cos(e/180*Math.PI-ua),u=i*Math.sin(e/180*Math.PI-ua);o.a=h*la-u/.83*ca,o.b=h*ca+u/.83*la}return void 0!==n&&(o.alpha=n),o}function pa(a){return da(oa(a))}function va(a){var r=a.l,t=a.a,e=a.b,n=a.alpha,o=t*la+e*ca,i=.83*(e*la-t*ca),h=Math.sqrt(o*o+i*i),u={mode:"dlch",l:sa/ia*Math.log(1+.0039*r),c:Math.log(1+.075*h)/(.0435*ha*ia)};return u.c&&(u.h=(Math.atan2(i,o)+ua)/Math.PI*180),void 0!==n&&(u.alpha=n),u}function ba(a){var r=a.l,t=a.c,e=a.h,n=a.alpha,o={mode:"dlab",l:r,a:0===t?0:t*Math.cos(e/180*Math.PI),b:0===t?0:t*Math.sin(e/180*Math.PI)};return void 0!==n&&(o.alpha=n),o}function fa(a){return ba(va(a))}var ga={mode:"dlab",output:{lab:pa,rgb:function(a){return J(pa(a))}},input:{lab:fa,rgb:function(a){return fa(T(a))}},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-39.229,45.166],b:[-43.002,44.424]},interpolate:{l:k(),a:k(),b:k(),alpha:k(q)}};var Ma={mode:"dlch",output:{lab:da,dlab:ba,rgb:function(a){return J(da(a))}},input:{lab:va,dlab:oa,rgb:function(a){return va(T(a))}},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,50.944],h:[0,360]},interpolate:{l:k(),c:k(),h:k(O),alpha:k(q)}};var ma={mode:"yiq",output:{rgb:function(a){var r=a.y,t=a.i,e=a.q;return j({r:r+.95608445*t+.6208885*e,g:r-.27137664*t-.6486059*e,b:r-1.10561724*t+1.70250126*e,alpha:a.alpha})}},input:{rgb:function(a){var r=P(a),t=r.r,e=r.g,n=r.b,o=r.alpha,i={mode:"yiq",y:.29889531*t+.58662247*e+.11448223*n,i:.59597799*t-.2741761*e-.32180189*n,q:.21147017*t-.52261711*e+.31114694*n};return void 0!==o&&(i.alpha=o),i}},channels:["y","i","q","alpha"],ranges:{i:[-.593,.593],q:[-.52,.52]},interpolate:{y:k(),i:k(),q:k(),alpha:k(q)}},wa={},ya={},ka=[],qa=function(a){wa[a.mode]=Object.assign(wa[a.mode]||{},a.output),Object.keys(a.input||{}).forEach(function(r){wa[r]||(wa[r]={}),wa[r][a.mode]=a.input[r]}),a.ranges||(a.ranges={}),a.channels.forEach(function(r){void 0===a.ranges[r]&&(a.ranges[r]=[0,1])}),ya[a.mode]=a,(a.parsers||[]).forEach(function(a){return ka.push(a)})},xa=function(a){return ya[a]},Ia=function(a){for(var r,t=0,e=ka.length;t<e&&void 0===(r=ka[t++](a)););return r},Pa=function(a){return void 0===a&&(a="rgb"),function(r){return void 0!==(r=function(a,r){return void 0===a?void 0:"object"!=typeof a?Ia(a):void 0===a.mode?Object.assign({},a,{mode:r}):a}(r,a))?r.mode===a?r:wa[r.mode][a]?wa[r.mode][a](r):"rgb"===a?wa[r.mode].rgb(r):wa.rgb[a](wa[r.mode].rgb(r)):void 0}},Ea=function(a,r){return Math.round(a*(r=Math.pow(10,r)))/r};function ja(a){return void 0===a&&(a=4),function(r){return"number"==typeof r?Ea(r,a):r}}function $a(a){return Math.round(255*Math.max(0,Math.min(a,1)))}var Ra=Pa("rgb"),Aa=ja(2);function Oa(a){return void 0===a&&(a=.5),function(r){return a<=0?1:a>=1?0:Math.pow(r,Math.log(.5)/Math.log(a))}}var Ca=function(a,r,t,e,n){var o=n*n,i=o*n;return((1-3*n+3*o-i)*a+(4-6*o+3*i)*r+(1+3*n+3*o-3*i)*t+i*e)/6};function Sa(a,r,t){return void 0===a&&(a=w),void 0===r&&(r="default"),void 0===t&&(t=1),function(e){var n=(a||w)(e);return function(a){a=Math.pow(a,t);var e=n.length-1,o=1===a?e-1:Math.floor(a*e);switch(r){case"default":return Ca(o>0?n[o-1]:2*n[o]-n[o+1],n[o],n[o+1],o<e-1?n[o+2]:2*n[o+1]-n[o],(a-o/e)*e);case"closed":return Ca(n[(o-1+n.length)%n.length],n[o],n[(o+1)%n.length],n[(o+2)%n.length],(a-o/e)*e);case"open":throw new Error("open basis spline is not yet implemented")}}}}var za=function(a){var r,t=a.length-1,e=new Array(t),n=new Array(t),o=new Array(t);for(e[1]=.25,n[1]=(6*a[1]-a[0])/4,r=2;r<t;++r)e[r]=1/(4-e[r-1]),n[r]=(6*a[r]-(r==t-1?a[t]:0)-n[r-1])*e[r];for(o[0]=a[0],o[t]=a[t],t-1>0&&(o[t-1]=n[t-1]),r=t-2;r>0;--r)o[r]=n[r]-e[r]*o[r+1];return o};var Na=function(a,r,t,e,n,o){var i=o*o,h=(t-a)/(2*n),u=(e-r)/(2*n),l=(t-r)/n;return(h+u-2*l)/(n*n)*(i*o)+(3*l-2*h-u)/n*i+h*o+r};var Da=Pa("rgb");function La(a){var r=Da(a);return void 0!==r&&r.r>=0&&r.r<=1&&r.g>=0&&r.g<=1&&r.b>=0&&r.b<=1}var _a=Pa("lch"),Ba=Pa("rgb"),Fa=function(a){return void 0===a?void 0:"object"!=typeof a?Ia(a):void 0===a.mode?void 0:a},Ha=function(a){return Math.max(0,Math.min(a,1))},Ka=function(a){var r=Ba(a);return r.r=Ha(r.r),r.g=Ha(r.g),r.b=Ha(r.b),r};var Ga=function(a,r){void 0===a&&(a="rgb"),void 0===r&&(r=[1,1,1,0]);var t=xa(a).channels,e=Pa(a);return function(a,n){var o=e(a),i=e(n);return Math.sqrt(t.reduce(function(a,t,e){var n,h,u,l,c="h"===t?(n=o[t],h=i[t],u=R(n),l=R(h),Math.abs(l-u)>180?u-(l-360*Math.sign(l-u)):u-l):o[t]-i[t];return a+(r[e]||0)*Math.pow(isNaN(c)?0:c,2)},0))}},Ja=function(a){return a};var Qa={normal:function(a,r){return r},multiply:function(a,r){return a*r},screen:function(a,r){return a+r-a*r},"hard-light":function(a,r){return r<.5?2*a*r:2*r*(1-a)-1},overlay:function(a,r){return a<.5?2*r*a:2*a*(1-r)-1},darken:function(a,r){return Math.min(a,r)},lighten:function(a,r){return Math.max(a,r)},"color-dodge":function(a,r){return 0===a?0:1===r?1:Math.min(1,a/(1-r))},"color-burn":function(a,r){return 1===a?1:0===r?0:1-Math.min(1,(1-a)/r)},"soft-light":function(a,r){return r<.5?a-(1-2*r)*a*(1-a):a+(2*r-1)*((a<.25?((16*a-12)*a+4)*a:Math.sqrt(a))-a)},difference:function(a,r){return Math.abs(a-r)},exclusion:function(a,r){return a+r-2*a*r}};var Ta=function(a){var r=a[0],t=a[1];return r+Math.random()*(t-r)},Ua=function(a){return Object.keys(a).reduce(function(r,t){var e=a[t];return r[t]=Array.isArray(e)?e:[e,e],r},{})};qa(x),qa($),qa(C),qa(N),qa(D),qa(L),qa(U),qa(X),qa(na),qa(ga),qa(Ma),qa(ma);var Va=Pa("rgb"),Wa=Pa("lrgb"),Xa=Pa("hsl"),Ya=Pa("hsv"),Za=Pa("hsi"),ar=Pa("hwb"),rr=Pa("lab"),tr=Pa("lch"),er=Pa("cubehelix"),nr=Pa("dlab"),or=Pa("dlch"),ir=Pa("yiq");a.defineMode=qa,a.converter=Pa,a.hsl=Xa,a.hsv=Ya,a.hsi=Za,a.hwb=ar,a.rgb=Va,a.lab=rr,a.lch=tr,a.lrgb=Wa,a.cubehelix=er,a.dlab=nr,a.dlch=or,a.yiq=ir,a.formatter=function(a){return void 0===a&&(a="rgb"),function(r){var t=Ra(r);if(void 0!==t){var e=$a(t.r),n=$a(t.g),o=$a(t.b);return"hex"===a?"#"+(1<<24|e<<16|n<<8|o).toString(16).slice(1):"rgb"===a?void 0===t.alpha||1===t.alpha?"rgb("+e+", "+n+", "+o+")":"rgba("+e+", "+n+", "+o+", "+Aa(t.alpha)+")":void 0}}},a.round=ja,a.interpolate=function(a,r,t){void 0===r&&(r="rgb");var e=xa(r),n=Pa(r),o=[],i=[],h={};a.forEach(function(a){Array.isArray(a)?(o.push(n(a[0])),i.push(a[1])):"number"==typeof a||"function"==typeof a?h[i.length]=a:(o.push(n(a)),i.push(void 0))}),function(a){void 0===a[0]&&(a[0]=0),void 0===a[a.length-1]&&(a[a.length-1]=1);for(var r,t,e,n,o=1;o<a.length;){if(void 0===a[o]){for(t=o,e=a[o-1],r=o;void 0===a[r];)r++;for(n=(a[r]-e)/(r-o+1);o<r;)a[o]=e+(o+1-t)*n,o++}else a[o]<a[o-1]&&(a[o]=a[o-1]);o++}}(i);var u=e.channels.reduce(function(a,r){return a[r]=o.map(function(a){return a[r]}),a},{}),l=e.channels.reduce(function(a,r){return a[r]=a[r](u[r]),a},Object.assign({},e.interpolate,t)),c=o.length-1;return function(a){if((a=Math.min(Math.max(0,a),1))<=i[0])return o[0];if(a>i[c])return o[c];for(var t=0;i[t]<a;)t++;var n=i[t-1],u=i[t]-n,s=(a-n)/u,d=h[t];void 0!==d&&("number"==typeof d&&(d=Oa((d-n)/u)),s=d(s));var p=(t-1+s)/c;return e.channels.reduce(function(a,r){var t=l[r](p);return void 0!==t&&(a[r]=t),a},{mode:r})}},a.interpolateHue=O,a.interpolateAlpha=q,a.interpolateLinear=k,a.interpolateCosine=function(a,r){return void 0===a&&(a=w),void 0===r&&(r=1),function(t){var e=(a||w)(e);return function(t){var n=(t=Math.pow(t,r))*(e.length-1),o=Math.floor(n),i=e[o],h=e[o+1],u=n-o,l=a([i,h],u);if("object"==typeof l){i=l[0],h=l[1];var c=(1-Math.cos(u*Math.PI))/2;return i*(1-c)+h*c}return l}}},a.interpolateSplineBasis=Sa,a.interpolateSplineNatural=function(a,r,t){return void 0===a&&(a=w),void 0===r&&(r="default"),void 0===t&&(t=1),function(e){var n=(a||w)(e);return Sa(w,r,t)(za(n))}},a.interpolateSplineMonotone=function(a,r,t){return void 0===a&&(a=w),void 0===r&&(r="default"),void 0===t&&(t=1),function(e){var n=(a||w)(e);return function(a){a=Math.pow(a,t);var e,o=n.length-1;switch(1===a?(e=o-1,a=1):e=Math.floor(a*o),r){case"default":return Na(e>0?n[e-1]:2*n[e]-n[e+1],n[e],n[e+1],e<o-1?n[e+2]:2*n[e+1]-n[e],1/o,a-e/o);case"closed":return Na(n[(e-1+n.length)%n.length],n[e],n[(e+1)%n.length],n[(e+2)%n.length],1/o,a-e/o);case"open":throw new Error("open monotone spline not implemented yet")}}}},a.samples=function(a,r){if(void 0===a&&(a=2),void 0===r&&(r=1),a<2)return a<1?[]:[Math.pow(.5,r)];for(var t=[],e=0;e<a;e++)t.push(Math.pow(e/(a-1),r));return t},a.displayable=La,a.clamp=function(a){return void 0===a&&(a="rgb"),function(r){if(void 0===(r=Fa(r))||La(r))return r;var t=Pa(r.mode);if("rgb"===a)return t(Ka(r));r=_a(r);var e=Object.assign({},r,{c:0});if(!La(e))return t(Ka(e));for(var n=0,o=r.c;o-n>.01;)e.c=n+.5*(o-n),La(e)?n=e.c:o=e.c;return t(e)}},a.nearest=function(a,r,t){void 0===r&&(r=Ga()),void 0===t&&(t=Ja);var e=a.map(function(a,r){return{color:t(a),i:r}});return function(t,n,o){return void 0===n&&(n=1),void 0===o&&(o=1/0),isFinite(n)&&(n=Math.max(1,Math.min(n,e.length-1))),e.forEach(function(a){a.d=r(t,a.color)}),e.sort(function(a,r){return a.d-r.d}).slice(0,n).filter(function(a){return a.d<o}).map(function(r){return a[r.i]})}},a.getModeDefinition=xa,a.parse=Ia,a.differenceEuclidean=Ga,a.differenceCie76=function(){return Ga("lab")},a.differenceCie94=function(a,r,t){void 0===a&&(a=1),void 0===r&&(r=.045),void 0===t&&(t=.015);var e=Pa("lab");return function(n,o){var i=e(n),h=e(o),u=i.l,l=i.a,c=i.b,s=Math.sqrt(l*l+c*c),d=h.l,p=h.a,v=h.b,b=Math.sqrt(p*p+v*v),f=Math.pow(u-d,2),g=Math.pow(s-b,2),M=Math.pow(l-p,2)+Math.pow(c-v,2)-g;return Math.sqrt(f/Math.pow(a,2)+g/Math.pow(1+r*s,2)+M/Math.pow(1+t*s,2))}},a.differenceCiede2000=function(a,r,t){void 0===a&&(a=1),void 0===r&&(r=1),void 0===t&&(t=1);var e=Pa("lab");return function(n,o){var i=e(n),h=e(o),u=i.l,l=i.a,c=i.b,s=Math.sqrt(l*l+c*c),d=h.l,p=h.a,v=h.b,b=(s+Math.sqrt(p*p+v*v))/2,f=.5*(1-Math.sqrt(Math.pow(b,7)/(Math.pow(b,7)+Math.pow(25,7)))),g=l*(1+f),M=p*(1+f),m=Math.sqrt(g*g+c*c),w=Math.sqrt(M*M+v*v),y=Math.abs(g)+Math.abs(c)===0?0:Math.atan2(c,g);y+=2*(y<0)*Math.PI;var k=Math.abs(M)+Math.abs(v)===0?0:Math.atan2(v,M);k+=2*(k<0)*Math.PI;var q=d-u,x=w-m,I=m*w==0?0:k-y;I-=2*(I>Math.PI)*Math.PI,I+=2*(I<-Math.PI)*Math.PI;var P,E=2*Math.sqrt(m*w)*Math.sin(I/2),j=(u+d)/2,$=(m+w)/2;m*w==0?P=y+k:(P=(y+k)/2,P-=(Math.abs(y-k)>Math.PI)*Math.PI,P+=2*(P<0)*Math.PI);var R=Math.pow(j-50,2),A=1-.17*Math.cos(P-Math.PI/6)+.24*Math.cos(2*P)+.32*Math.cos(3*P+Math.PI/30)-.2*Math.cos(4*P-63*Math.PI/180),O=1+.015*R/Math.sqrt(20+R),C=1+.045*$,S=1+.015*$*A,z=30*Math.PI/180*Math.exp(-1*Math.pow((180/Math.PI*P-275)/25,2)),N=2*Math.sqrt(Math.pow($,7)/(Math.pow($,7)+Math.pow(25,7))),D=-1*Math.sin(2*z)*N;return Math.sqrt(Math.pow(q/(a*O),2)+Math.pow(x/(r*C),2)+Math.pow(E/(t*S),2)+D*x/(r*C)*E/(t*S))}},a.differenceCmc=function(a,r){void 0===a&&(a=1),void 0===r&&(r=1);var t=Pa("lab");return function(e,n){var o=t(e),i=o.l,h=o.a,u=o.b,l=Math.sqrt(h*h+u*u),c=Math.atan2(u,h);c+=2*Math.PI*(c<0);var s=t(n),d=s.l,p=s.a,v=s.b,b=Math.sqrt(p*p+v*v),f=Math.pow(i-d,2),g=Math.pow(l-b,2),M=Math.pow(h-p,2)+Math.pow(u-v,2)-g,m=Math.sqrt(Math.pow(l,4)/(Math.pow(l,4)+1900)),w=i<16?.511:.040975*i/(1+.01765*i),y=.0638*l/(1+.0131*l)+.638,k=y*(m*(c>=164/180*Math.PI&&c<=345/180*Math.PI?.56+Math.abs(.2*Math.cos(c+168/180*Math.PI)):.36+Math.abs(.4*Math.cos(c+35/180*Math.PI)))+1-m);return Math.sqrt(f/Math.pow(a*w,2)+g/Math.pow(r*y,2)+M/Math.pow(k,2))}},a.differenceDin99o=function(){return Ga("dlab")},a.differenceKotsarenkoRamos=function(){return Ga("yiq",[.5053,.299,.1957])},a.colorsNamed=t,a.blend=function(a,r,t){void 0===r&&(r="normal"),void 0===t&&(t="rgb");var e="function"==typeof r?r:Qa[r],n=Pa(t),o=xa(t).channels;return a.map(function(a){var r=n(a);return void 0===r.alpha&&(r.alpha=1),r}).reduce(function(a,r){if(void 0===a)return r;var n=r.alpha+a.alpha*(1-r.alpha);return o.reduce(function(t,o){return"alpha"!==o&&(0===n?t[o]=0:(t[o]=r.alpha*(1-a.alpha)*r[o]+r.alpha*a.alpha*e(a[o],r[o])+(1-r.alpha)*a.alpha*a[o],t[o]=Math.max(0,Math.min(1,t[o]/n)))),t},{mode:t,alpha:n})})},a.random=function(a,r){void 0===a&&(a="rgb"),void 0===r&&(r={});var t=xa(a),e=Ua(r);return t.channels.reduce(function(a,r){return(e.alpha||"alpha"!==r)&&(a[r]=Ta(e[r]||t.ranges[r])),a},{mode:a})},a.easingMidpoint=Oa,a.easingSmoothstep=function(a){return a*a*(3-2*a)},a.easingSmootherstep=function(a){return a*a*a*(a*(6*a-15)+10)},Object.defineProperty(a,"__esModule",{value:!0})});


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdanburzo%2Fprojects%2Fwebcolors-cmyk%2Fpages%2Findex.js!./":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdanburzo%2Fprojects%2Fwebcolors-cmyk%2Fpages%2Findex.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_43fdc562a96c55866f3e ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_43fdc562a96c55866f3e */ "dll-reference dll_43fdc562a96c55866f3e"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var culori__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! culori */ "./node_modules/culori/build/culori.umd.js");
/* harmony import */ var culori__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(culori__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Swatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Swatch */ "./components/Swatch.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_profiles_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/profiles.json */ "./data/profiles.json");
var _data_profiles_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/profiles.json */ "./data/profiles.json", 1);


var _jsxFileName = "/Users/danburzo/projects/webcolors-cmyk/pages/index.js";

// Libs





var srgb = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(culori__WEBPACK_IMPORTED_MODULE_3__["colorsNamed"]).sort().filter(function (c) {
  return !c.match(/grey/i);
}).map(function (c) {
  return {
    name: c,
    value: c
  };
});


var options = [{
  id: 'srgb',
  name: 'sRGB',
  colors: srgb
}].concat(_data_profiles_json__WEBPACK_IMPORTED_MODULE_6__);

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('srgb'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(srgb),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var profile = options.find(function (o) {
      return o.id === tab;
    });

    if (profile) {
      if (!profile.colors) {
        __webpack_require__("./data/colors lazy recursive ^\\.\\/.*\\.json$")("./".concat(profile.id, ".json")).then(function (module) {
          var colors = module.default.colors;
          profile.colors = colors;
          setList(colors);
        });
      } else {
        setList(profile.colors);
      }
    }
  }, [tab]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    value: tab,
    onChange: function onChange(e) {
      return setTab(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, options.map(function (o) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      key: o.id,
      value: o.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, o.name);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatchlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, list.map(function (_ref, i) {
    var value = _ref.value;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swatch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: value,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fdanburzo%2Fprojects%2Fwebcolors-cmyk%2Fpages%2Findex.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fdanburzo%2Fprojects%2Fwebcolors-cmyk%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdanburzo%2Fprojects%2Fwebcolors-cmyk%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_43fdc562a96c55866f3e":
/*!*******************************************!*\
  !*** external "dll_43fdc562a96c55866f3e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_43fdc562a96c55866f3e;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map