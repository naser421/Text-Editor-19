/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/database.js":
/*!****************************!*\
  !*** ./src/js/database.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDb\": () => (/* binding */ getDb),\n/* harmony export */   \"putDb\": () => (/* binding */ putDb)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ \"./node_modules/idb/build/esm/index.js\");\n\n\n\nvar initdb = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          return _context.abrupt(\"return\", (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)('jate', 1, {\n            upgrade: function upgrade(db) {\n              if (db.objectStoreNames.contains('jate')) {\n                console.log('jate database already exists');\n                return;\n              }\n              db.createObjectStore('jate', {\n                keyPath: 'id',\n                autoIncrement: true\n              });\n              console.log('jate database created');\n            }\n          }));\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function initdb() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar putDb = /*#__PURE__*/function () {\n  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(content) {\n    var jateDb, tx, store, request, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          console.log('Post to the database');\n          _context2.next = 3;\n          return (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)('jate', 1);\n        case 3:\n          jateDb = _context2.sent;\n          tx = jateDb.transaction('jate', 'readwrite');\n          store = tx.objectStore('jate');\n          request = store.put({\n            id: 1,\n            value: content\n          });\n          _context2.next = 9;\n          return request;\n        case 9:\n          result = _context2.sent;\n          console.log('🚀 - data saved to the database', result);\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return function putDb(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar getDb = /*#__PURE__*/function () {\n  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n    var jateDb, tx, store, request, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          console.log('GET from the database');\n          _context3.next = 3;\n          return (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)('jate', 1);\n        case 3:\n          jateDb = _context3.sent;\n          tx = jateDb.transaction('jate', 'readonly');\n          store = tx.objectStore('jate');\n          request = store.getAll();\n          _context3.next = 9;\n          return request;\n        case 9:\n          result = _context3.sent;\n          console.log('result.value', result);\n          return _context3.abrupt(\"return\", result);\n        case 12:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3);\n  }));\n  return function getDb() {\n    return _ref3.apply(this, arguments);\n  };\n}();\ninitdb();\n\n//# sourceURL=webpack://JATE/./src/js/database.js?");

                /***/
}),

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"./src/js/database.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n\n\n\n\nvar _default = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _default() {\n  var _this = this;\n  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _default);\n  var localData = localStorage.getItem('content');\n  if (typeof CodeMirror === 'undefined') {\n    throw new Error('CodeMirror is not loaded');\n  }\n  this.editor = CodeMirror(document.querySelector('#main'), {\n    value: '',\n    mode: 'javascript',\n    theme: 'monokai',\n    lineNumbers: true,\n    lineWrapping: true,\n    autofocus: true,\n    indentUnit: 2,\n    tabSize: 2\n  });\n  (0,_database__WEBPACK_IMPORTED_MODULE_2__.getDb)().then(function (data) {\n    console.info('Loaded data from IndexedDB, injecting into editor');\n    _this.editor.setValue(data[data.length - 1].content || localData || _header__WEBPACK_IMPORTED_MODULE_3__.header);\n  });\n  this.editor.on('change', function () {\n    localStorage.setItem('content', _this.editor.getValue());\n  });\n  this.editor.on('blur', function () {\n    console.log('The editor has lost focus');\n    (0,_database__WEBPACK_IMPORTED_MODULE_2__.putDb)(localStorage.getItem('content'));\n  });\n});\n\n\n//# sourceURL=webpack://JATE/./src/js/editor.js?");

                /***/
}),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nvar header = \"\\n/*\\n       _____  ____________\\n      / /   |/_  __/ ____/\\n __  / / /| | / / / __/   \\n/ /_/ / ___ |/ / / /___   \\n ____/_/  |_/_/ /_____/   \\njust another text editor\\n*/                          \\n\";\n\n\n//# sourceURL=webpack://JATE/./src/js/header.js?");

                /***/
}),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ \"./node_modules/workbox-window/build/workbox-window.prod.es5.mjs\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ \"./src/js/editor.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"./src/js/database.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n\n\n\nvar main = document.querySelector('#main');\nmain.innerHTML = '';\nvar loadSpinner = function loadSpinner() {\n  var spinner = document.createElement('div');\n  spinner.classList.add('spinner');\n  spinner.innerHTML = \"\\n  <div class=\\\"loading-container\\\">\\n  <div class=\\\"loading-spinner\\\" />\\n  </div>\\n  \";\n  main.appendChild(spinner);\n};\nvar editor = new _editor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nif (typeof editor === 'undefined') {\n  loadSpinner();\n}\nif ('serviceWorker' in navigator) {\n  var workboxSW = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox('/src-sw.js');\n  workboxSW.register();\n} else {\n  console.error('Service workers are not supported in this browser.');\n}\n\n//# sourceURL=webpack://JATE/./src/js/index.js?");

                /***/
}),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --primary: #31a9e1;\\r\\n  --gray: #ececec;\\r\\n  --whitesmoke: #f5f5f5;\\r\\n  --dark: #222;\\r\\n  --monoaki: #272822;\\r\\n  --navbar-height: 50px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  background-color: var(--monoaki);\\r\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\\r\\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\r\\n    sans-serif;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n#navbar {\\r\\n  height: var(--navbar-height);\\r\\n  background-color: var(--primary);\\r\\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  color: white;\\r\\n  font-size: 22px;\\r\\n  font-weight: 550;\\r\\n  letter-spacing: 0.9px;\\r\\n}\\r\\n\\r\\n.navbar-brand img {\\r\\n  padding-top: 10px;\\r\\n}\\r\\n\\r\\n.loading-spinner {\\r\\n  animation-duration: 0.75s;\\r\\n  animation-iteration-count: infinite;\\r\\n  animation-name: rotate-forever;\\r\\n  animation-timing-function: linear;\\r\\n  height: 30px;\\r\\n  width: 30px;\\r\\n  border: 3px solid var(--primary);\\r\\n  border-right-color: transparent;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.loading-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: calc(100vh - var(--navbar-height));\\r\\n}\\r\\n\\r\\n@keyframes rotate-forever {\\r\\n  0% {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n.app-update {\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  right: 10px;\\r\\n}\\r\\n\\r\\n.app-update.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.nav-btn {\\r\\n  margin: 25px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  text-align: center;\\r\\n  display: inline-block;\\r\\n  padding: 0.5rem 1.2rem;\\r\\n  margin: 0;\\r\\n  text-decoration: none;\\r\\n  font-size: 1rem;\\r\\n  border-radius: 0.3rem;\\r\\n  border: 1px solid transparent;\\r\\n  outline: none;\\r\\n  color: #1a1a1a;\\r\\n  background-color: #aeaeae;\\r\\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  background-color: #cecece;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn.btn-squared {\\r\\n  border-radius: 0;\\r\\n}\\r\\n\\r\\n.btn.btn-sm {\\r\\n  font-size: 0.85rem;\\r\\n  padding: 0.3rem 0.9rem;\\r\\n}\\r\\n\\r\\n.btn.btn-lg {\\r\\n  font-size: 1.25rem;\\r\\n  padding: 0.8rem 1.4rem;\\r\\n}\\r\\n\\r\\n.btn.btn-block {\\r\\n  width: 100%;\\r\\n  display: block;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.btn.btn-primary {\\r\\n  background-color: #2d3e50;\\r\\n  color: #d9e9e8;\\r\\n}\\r\\n\\r\\n.btn.btn-primary:hover {\\r\\n  background-color: #57779a;\\r\\n}\\r\\n\\r\\n.btn.btn-danger {\\r\\n  background-color: #e64c66;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.btn.btn-danger:hover {\\r\\n  background-color: #ee8294;\\r\\n}\\r\\n\\r\\n.btn.btn-info {\\r\\n  background-color: #1bbc9b;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.btn.btn-info:hover {\\r\\n  background-color: #31e1bd;\\r\\n}\\r\\n\\r\\n.btn.btn-light {\\r\\n  background-color: #d9e9e8;\\r\\n  color: #1a1a1a;\\r\\n}\\r\\n\\r\\n.btn.btn-light:hover {\\r\\n  background-color: #84b8b4;\\r\\n}\\r\\n\\r\\n.btn.btn-dark {\\r\\n  background-color: #1a1a1a;\\r\\n  color: #d9e9e8;\\r\\n}\\r\\n\\r\\n.btn.btn-dark:hover {\\r\\n  background-color: #5f5f5f;\\r\\n}\\r\\n\\r\\n.btn.btn-white {\\r\\n  background-color: #ffffff;\\r\\n  color: #1a1a1a;\\r\\n}\\r\\n\\r\\n.btn.btn-white:hover {\\r\\n  background-color: #cccccc;\\r\\n}\\r\\n\\r\\n.btn.btn-black {\\r\\n  background-color: #000000;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.btn.btn-black:hover {\\r\\n  background-color: #666666;\\r\\n}\\r\\n\\r\\n.btn.btn-link {\\r\\n  background-color: #1b89bc;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.btn.btn-link:hover {\\r\\n  background-color: #31a9e1;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n  .nav-btn {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .navbar-brand {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  #navbar {\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JATE/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

                /***/
}),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

                "use strict";
                eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://JATE/./node_modules/css-loader/dist/runtime/api.js?");

                /***/
}),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

                "use strict";
                eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JATE/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

                /***/
}),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteDB\": () => (/* binding */ deleteDB),\n/* harmony export */   \"openDB\": () => (/* binding */ openDB),\n/* harmony export */   \"unwrap\": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),\n/* harmony export */   \"wrap\": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)\n/* harmony export */ });\n/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ \"./node_modules/idb/build/esm/wrap-idb-value.js\");\n\n\n\n/**\n * Open a database.\n *\n * @param name Name of the database.\n * @param version Schema version.\n * @param callbacks Additional callbacks.\n */\nfunction openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {\n    const request = indexedDB.open(name, version);\n    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);\n    if (upgrade) {\n        request.addEventListener('upgradeneeded', (event) => {\n            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));\n        });\n    }\n    if (blocked)\n        request.addEventListener('blocked', () => blocked());\n    openPromise\n        .then((db) => {\n        if (terminated)\n            db.addEventListener('close', () => terminated());\n        if (blocking)\n            db.addEventListener('versionchange', () => blocking());\n    })\n        .catch(() => { });\n    return openPromise;\n}\n/**\n * Delete a database.\n *\n * @param name Name of the database.\n */\nfunction deleteDB(name, { blocked } = {}) {\n    const request = indexedDB.deleteDatabase(name);\n    if (blocked)\n        request.addEventListener('blocked', () => blocked());\n    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);\n}\n\nconst readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];\nconst writeMethods = ['put', 'add', 'delete', 'clear'];\nconst cachedMethods = new Map();\nfunction getMethod(target, prop) {\n    if (!(target instanceof IDBDatabase &&\n        !(prop in target) &&\n        typeof prop === 'string')) {\n        return;\n    }\n    if (cachedMethods.get(prop))\n        return cachedMethods.get(prop);\n    const targetFuncName = prop.replace(/FromIndex$/, '');\n    const useIndex = prop !== targetFuncName;\n    const isWrite = writeMethods.includes(targetFuncName);\n    if (\n    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.\n    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||\n        !(isWrite || readMethods.includes(targetFuncName))) {\n        return;\n    }\n    const method = async function (storeName, ...args) {\n        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(\n        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');\n        let target = tx.store;\n        if (useIndex)\n            target = target.index(args.shift());\n        // Must reject if op rejects.\n        // If it's a write operation, must reject if tx.done rejects.\n        // Must reject with op rejection first.\n        // Must resolve with op value.\n        // Must handle both promises (no unhandled rejections)\n        return (await Promise.all([\n            target[targetFuncName](...args),\n            isWrite && tx.done,\n        ]))[0];\n    };\n    cachedMethods.set(prop, method);\n    return method;\n}\n(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({\n    ...oldTraps,\n    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),\n    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),\n}));\n\n\n\n\n//# sourceURL=webpack://JATE/./node_modules/idb/build/esm/index.js?");

                /***/
}),

/***/ "./node_modules/idb/build/esm/wrap-idb-value.js":
/*!******************************************************!*\
  !*** ./node_modules/idb/build/esm/wrap-idb-value.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => (/* binding */ reverseTransformCache),\n/* harmony export */   \"i\": () => (/* binding */ instanceOfAny),\n/* harmony export */   \"r\": () => (/* binding */ replaceTraps),\n/* harmony export */   \"u\": () => (/* binding */ unwrap),\n/* harmony export */   \"w\": () => (/* binding */ wrap)\n/* harmony export */ });\nconst instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);\n\nlet idbProxyableTypes;\nlet cursorAdvanceMethods;\n// This is a function to prevent it throwing up in node environments.\nfunction getIdbProxyableTypes() {\n    return (idbProxyableTypes ||\n        (idbProxyableTypes = [\n            IDBDatabase,\n            IDBObjectStore,\n            IDBIndex,\n            IDBCursor,\n            IDBTransaction,\n        ]));\n}\n// This is a function to prevent it throwing up in node environments.\nfunction getCursorAdvanceMethods() {\n    return (cursorAdvanceMethods ||\n        (cursorAdvanceMethods = [\n            IDBCursor.prototype.advance,\n            IDBCursor.prototype.continue,\n            IDBCursor.prototype.continuePrimaryKey,\n        ]));\n}\nconst cursorRequestMap = new WeakMap();\nconst transactionDoneMap = new WeakMap();\nconst transactionStoreNamesMap = new WeakMap();\nconst transformCache = new WeakMap();\nconst reverseTransformCache = new WeakMap();\nfunction promisifyRequest(request) {\n    const promise = new Promise((resolve, reject) => {\n        const unlisten = () => {\n            request.removeEventListener('success', success);\n            request.removeEventListener('error', error);\n        };\n        const success = () => {\n            resolve(wrap(request.result));\n            unlisten();\n        };\n        const error = () => {\n            reject(request.error);\n            unlisten();\n        };\n        request.addEventListener('success', success);\n        request.addEventListener('error', error);\n    });\n    promise\n        .then((value) => {\n        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval\n        // (see wrapFunction).\n        if (value instanceof IDBCursor) {\n            cursorRequestMap.set(value, request);\n        }\n        // Catching to avoid \"Uncaught Promise exceptions\"\n    })\n        .catch(() => { });\n    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This\n    // is because we create many promises from a single IDBRequest.\n    reverseTransformCache.set(promise, request);\n    return promise;\n}\nfunction cacheDonePromiseForTransaction(tx) {\n    // Early bail if we've already created a done promise for this transaction.\n    if (transactionDoneMap.has(tx))\n        return;\n    const done = new Promise((resolve, reject) => {\n        const unlisten = () => {\n            tx.removeEventListener('complete', complete);\n            tx.removeEventListener('error', error);\n            tx.removeEventListener('abort', error);\n        };\n        const complete = () => {\n            resolve();\n            unlisten();\n        };\n        const error = () => {\n            reject(tx.error || new DOMException('AbortError', 'AbortError'));\n            unlisten();\n        };\n        tx.addEventListener('complete', complete);\n        tx.addEventListener('error', error);\n        tx.addEventListener('abort', error);\n    });\n    // Cache it for later retrieval.\n    transactionDoneMap.set(tx, done);\n}\nlet idbProxyTraps = {\n    get(target, prop, receiver) {\n        if (target instanceof IDBTransaction) {\n            // Special handling for transaction.done.\n            if (prop === 'done')\n                return transactionDoneMap.get(target);\n            // Polyfill for objectStoreNames because of Edge.\n            if (prop === 'objectStoreNames') {\n                return target.objectStoreNames || transactionStoreNamesMap.get(target);\n            }\n            // Make tx.store return the only store in the transaction, or undefined if there are many.\n            if (prop === 'store') {\n                return receiver.objectStoreNames[1]\n                    ? undefined\n                    : receiver.objectStore(receiver.objectStoreNames[0]);\n            }\n        }\n        // Else transform whatever we get back.\n        return wrap(target[prop]);\n    },\n    set(target, prop, value) {\n        target[prop] = value;\n        return true;\n    },\n    has(target, prop) {\n        if (target instanceof IDBTransaction &&\n            (prop === 'done' || prop === 'store')) {\n            return true;\n        }\n        return prop in target;\n    },\n};\nfunction replaceTraps(callback) {\n    idbProxyTraps = callback(idbProxyTraps);\n}\nfunction wrapFunction(func) {\n    // Due to expected object equality (which is enforced by the caching in `wrap`), we\n    // only create one new func per func.\n    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.\n    if (func === IDBDatabase.prototype.transaction &&\n        !('objectStoreNames' in IDBTransaction.prototype)) {\n        return function (storeNames, ...args) {\n            const tx = func.call(unwrap(this), storeNames, ...args);\n            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);\n            return wrap(tx);\n        };\n    }\n    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In\n    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the\n    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense\n    // with real promises, so each advance methods returns a new promise for the cursor object, or\n    // undefined if the end of the cursor has been reached.\n    if (getCursorAdvanceMethods().includes(func)) {\n        return function (...args) {\n            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n            // the original object.\n            func.apply(unwrap(this), args);\n            return wrap(cursorRequestMap.get(this));\n        };\n    }\n    return function (...args) {\n        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n        // the original object.\n        return wrap(func.apply(unwrap(this), args));\n    };\n}\nfunction transformCachableValue(value) {\n    if (typeof value === 'function')\n        return wrapFunction(value);\n    // This doesn't return, it just creates a 'done' promise for the transaction,\n    // which is later returned for transaction.done (see idbObjectHandler).\n    if (value instanceof IDBTransaction)\n        cacheDonePromiseForTransaction(value);\n    if (instanceOfAny(value, getIdbProxyableTypes()))\n        return new Proxy(value, idbProxyTraps);\n    // Return the same value back if we're not going to transform it.\n    return value;\n}\nfunction wrap(value) {\n    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because\n    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.\n    if (value instanceof IDBRequest)\n        return promisifyRequest(value);\n    // If we've already transformed this value before, reuse the transformed value.\n    // This is faster, but it also provides object equality.\n    if (transformCache.has(value))\n        return transformCache.get(value);\n    const newValue = transformCachableValue(value);\n    // Not all types are transformed.\n    // These may be primitive types, so they can't be WeakMap keys.\n    if (newValue !== value) {\n        transformCache.set(value, newValue);\n        reverseTransformCache.set(newValue, value);\n    }\n    return newValue;\n}\nconst unwrap = (value) => reverseTransformCache.get(value);\n\n\n\n\n//# sourceURL=webpack://JATE/./node_modules/idb/build/esm/wrap-idb-value.js?");

                /***/
}),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JATE/./src/css/style.css?");

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

                "use strict";
                eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

                "use strict";
                eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

                "use strict";
                eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

                "use strict";
                eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

                "use strict";
                eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

                "use strict";
                eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

                eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = Object.create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return doneResult();\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var methodName = context.method,\n      method = delegate.iterator[methodName];\n    if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel;\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    return {\n      next: doneResult\n    };\n  }\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) keys.push(key);\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

                eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/typeof.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

                eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/regenerator/index.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

                /***/
}),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

                /***/
}),

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Workbox\": () => (/* binding */ v),\n/* harmony export */   \"WorkboxEvent\": () => (/* binding */ u),\n/* harmony export */   \"messageSW\": () => (/* binding */ n)\n/* harmony export */ });\ntry{self[\"workbox:window:6.5.3\"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,\"value\"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,t){var e;if(\"undefined\"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if(\"string\"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return\"Object\"===e&&n.constructor&&(e=n.constructor.name),\"Map\"===e||\"Set\"===e?Array.from(n):\"Arguments\"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&\"number\"==typeof n.length){e&&(n=e);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self[\"workbox:core:6.5.3\"]&&_()}catch(n){}var i=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function o(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var u=function(n,t){this.type=n,Object.assign(this,t)};function a(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function c(){}var f={type:\"SKIP_WAITING\"};function s(n,t){if(!t)return n&&n.then?n.then(c):Promise.resolve()}var v=function(r){var e,c;function v(n,t){var e,c;return void 0===t&&(t={}),(e=r.call(this)||this).nn={},e.tn=0,e.rn=new i,e.en=new i,e.on=new i,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!o(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener(\"updatefound\",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener(\"statechange\",e.ln)},e.ln=function(n){var t=e.fn,r=n.target,i=r.state,o=r===e.vn,a={sw:r,isExternal:o,originalEvent:n};!o&&e.mn&&(a.isUpdate=!0),e.dispatchEvent(new u(i,a)),\"installed\"===i?e.wn=self.setTimeout((function(){\"installed\"===i&&t.waiting===r&&e.dispatchEvent(new u(\"waiting\",a))}),200):\"activating\"===i&&(clearTimeout(e.wn),o||e.en.resolve(r))},e.dn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new u(\"controlling\",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.mn})),r||e.on.resolve(t)},e.gn=(c=function(n){var t=n.data,r=n.ports,i=n.source;return a(e.getSW(),(function(){e.an.has(i)&&e.dispatchEvent(new u(\"message\",{data:t,originalEvent:n,ports:r,sw:i}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=t,navigator.serviceWorker.addEventListener(\"message\",e.gn),e}c=r,(e=v).prototype=Object.create(c.prototype),e.prototype.constructor=e,e.__proto__=c;var h,l,m,w=v.prototype;return w.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&\"complete\"!==document.readyState)return s(new Promise((function(n){return window.addEventListener(\"load\",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),a(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener(\"statechange\",e.ln,{once:!0}));var t=e.fn.waiting;return t&&o(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new u(\"waiting\",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener(\"updatefound\",e.cn),navigator.serviceWorker.addEventListener(\"controllerchange\",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},w.update=function(){try{return this.fn?s(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},w.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},w.messageSW=function(t){try{return a(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},w.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,f)},w.pn=function(){var n=navigator.serviceWorker.controller;return n&&o(n.scriptURL,this.sn.toString())?n:void 0},w.bn=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return a(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},h=v,(l=[{key:\"active\",get:function(){return this.en.promise}},{key:\"controlling\",get:function(){return this.on.promise}}])&&t(h.prototype,l),m&&t(h,m),v}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=e(this.Sn(n.type));!(t=r()).done;){(0,t.value)(n)}},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());\n//# sourceMappingURL=workbox-window.prod.es5.mjs.map\n\n\n//# sourceURL=webpack://JATE/./node_modules/workbox-window/build/workbox-window.prod.es5.mjs?");

                /***/
})

        /******/
});
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
            /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
            /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
}
                /******/
}
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
        /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
    /******/
    /******/
})()
    ;