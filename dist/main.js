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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/piz.jpg */ \"./src/images/piz.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font: 100% Helvetica, sans-serif;\n  color: white;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#content {\n  display: relative;\n}\n\ndiv#nav {\n  background-color: rgba(0, 0, 0, 0.9);\n  padding: 40px;\n}\ndiv#nav h1 {\n  font-size: 3rem;\n  text-align: center;\n  color: white;\n  margin-bottom: 20px;\n}\ndiv#nav ul {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ndiv#nav ul li {\n  padding: 0 22px;\n  list-style: none;\n  position: relative;\n}\ndiv#nav ul li a {\n  text-decoration: none;\n  font-size: 2rem;\n  color: aliceblue;\n  cursor: pointer;\n}\ndiv#nav ul li a::after {\n  content: \"\";\n  position: absolute;\n  width: 40%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 20px;\n  background-color: #0087ca;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\ndiv#nav ul li a:hover::after,\ndiv#nav ul li a.active::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\ndiv.main {\n  width: 50vw;\n  height: auto;\n  margin: 60px auto;\n  padding: 20px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  border: 1px solid #222;\n  animation: fadeIn 1.5s;\n}\ndiv.main p {\n  font-size: 1.4rem;\n  margin: 40px 0;\n}\ndiv.main img {\n  width: 350px;\n  height: 350px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\ndiv.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 1.2rem;\n}\ndiv.footer i {\n  font-size: 1.5rem;\n  color: white;\n}\ndiv.footer i:hover {\n  color: #0087ca;\n}\n\ndiv.menu {\n  width: 50vw;\n  height: auto;\n  margin: 60px auto;\n  padding: 20px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  border: 1px solid #222;\n  animation: fadeIn 1.5s;\n}\ndiv.menu .item {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\ndiv.menu .item article {\n  border: 1px solid #222;\n  background-color: rgba(0, 0, 0, 0.3);\n  border: 1px solid #000;\n  padding: 30px;\n  margin: 0 20px;\n}\ndiv.menu .item article img {\n  width: 200px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 50%;\n}\ndiv.menu .item article h2 {\n  font-size: 1.8rem;\n  margin: 20px 0;\n}\ndiv.menu .item article:hover {\n  box-shadow: 10px 10px 54px rgba(72, 62, 221, 0.4);\n  transform: translateY(-2.2rem);\n}\n\ndiv.contact {\n  width: 50vw;\n  height: auto;\n  margin: 60px auto;\n  padding: 40px;\n  background-color: rgba(0, 0, 0, 0.7);\n  border: 1px solid #222;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 1.5s ease-in;\n}\ndiv.contact span {\n  font-size: 1.4rem;\n  margin: 10px;\n  align-self: flex-start;\n  padding: 10px;\n}\ndiv.contact iframe {\n  align-self: baseline;\n  margin-top: 10px;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@media (max-width: 820px) {\n  div#nav {\n    padding: 30px;\n  }\n  div.main {\n    width: 80%;\n  }\n  div.menu {\n    width: 80%;\n  }\n  div.contact {\n    width: 80%;\n  }\n  div.contact span {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 500px) {\n  div#nav {\n    padding: 40px;\n  }\n  div.main {\n    width: 100%;\n  }\n  div.menu {\n    width: 100%;\n  }\n  div.menu .item {\n    display: flex;\n    flex-direction: column;\n    margin: 0px;\n  }\n  div.menu .item article {\n    padding: 30px;\n    margin: 20px;\n  }\n  div.contact {\n    width: 100%;\n  }\n  div.contact span {\n    display: block;\n  }\n  .footer {\n    height: 60px;\n    font-size: 1.2rem;\n    letter-spacing: normal;\n    text-align: start;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-resturant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-resturant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-resturant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nfunction createContact() {\r\n\tconst contact =  document.createElement('div');\r\n\r\n\tcontact.innerHTML = `<span><i class=\"fa-solid fa-phone\"></i>+14032765499</span>\r\n\t<span><i class=\"fa-solid fa-house\"></i> 3W5W+C9 Calgary, Alberta, Canada</span>\r\n\t<iframe width=\"100%\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10029.78820325369!2d-114.0605450756041!3d51.06329708282476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371655a15e0fc79%3A0x3b178b91ca3ea231!2sdiner%20deluxe!5e0!3m2!1sen!2set!4v1686605265319!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`;\r\n\r\n\t// const span1 = document.createElement('span');\r\n\t// const span2 = document.createElement('span');\r\n\t// const i1 = document.createElement('i');\r\n\t// const i2 = document.createElement('i');\r\n\t// const iframe = document.createElement('iframe');\r\n\r\n\t// i1.classList.add(\"fa-solid\", \"fa-phone\");\r\n\t// // fa-phone\r\n\t// i2.classList.add(\"fa-house\", \"fa-house\");\r\n\t// // fa-solid \r\n\r\n\t// span1.textContent = '+14032765499';\r\n\t// span2.textContent = ' 3W5W+C9 Calgary, Alberta, Canada';\r\n\t// span1.append(i1);\r\n\t// span2.append(i2);\r\n\r\n\t// iframe.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10029.78820325369!2d-114.0605450756041!3d51.06329708282476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371655a15e0fc79%3A0x3b178b91ca3ea231!2sdiner%20deluxe!5e0!3m2!1sen!2set!4v1686605265319!5m2!1sen!2set\";\r\n\t// // iframe.width = \"100%\";\r\n\t// // console.log(contact);\r\n\r\n\t// contact.append(span1, span2, iframe);\r\n\r\n\treturn contact;\r\n}\r\n\r\nfunction loadContact() {\r\n\tconst main = document.getElementById('main');\r\n\tmain.classList.add(\"contact\");\r\n\tmain.textContent = \"\";\r\n\tmain.append(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://js-resturant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_chef_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chef.jpg */ \"./src/images/chef.jpg\");\n\r\n\r\n\r\nfunction createHome() {\r\n\tconst home = document.createElement('div');\r\n\t// home.classList.add('main');\r\n\r\n\tconst p1 = document.createElement('p');\r\n\tconst img = document.createElement('img');\r\n\tconst p2 = document.createElement('p');\r\n\r\n\tp1.textContent = 'Made with quality since 2000';\r\n\timg.src = _images_chef_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n\tp2.textContent = 'order online or visit us';\r\n\r\n\thome.append(p1,img,p2);\r\n\r\n\treturn home;\r\n}\r\n\r\nfunction loadHome() {\r\n\tconst main = document.getElementById('main');\r\n\tmain.classList.add(\"main\");\r\n\tmain.textContent = \"\";\r\n\tmain.append(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://js-resturant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_chef_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chef.jpg */ \"./src/images/chef.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createNav() {\r\n\tconst nav = document.createElement('div');\r\n\tnav.setAttribute(\"id\", \"nav\");\r\n\tconst h1 = document.createElement('h1');\r\n\th1.textContent = 'Abizar Pizaa';\r\n\t\r\n\tconst ul = document.createElement('ul');\r\n\tconst li = document.createElement('li');\r\n\tconst home = document.createElement('a');\r\n\thome.textContent = 'Home';\r\n\thome.classList.add(\"active\");\r\n\tli.append(home);\r\n\tul.append(li);\r\n\r\n\tconst li2 = document.createElement('li');\r\n\tconst menu = document.createElement('a');\r\n\tmenu.textContent = 'Menu';\r\n\tli2.append(menu);\r\n\tul.append(li2);\r\n\r\n\tconst li3 = document.createElement('li');\r\n\tconst contact = document.createElement('a');\r\n\tcontact.textContent = 'Contact';\r\n\tli3.append(contact);\r\n\tul.append(li3);\r\n\t\r\n\tnav.append(h1);\r\n\tnav.append(ul);\r\n\r\n\tconst navItems = ul.querySelectorAll(\"a\");\r\n\thome.addEventListener(\"click\", (e) => {\r\n\t\tif(e.target.classList.contains(\"active\")) return;\t\r\n\t\tnavItems.forEach((item) => {\r\n\t\t\tif(item != home){\r\n\t\t\t\titem.classList.remove(\"active\");\r\n\t\t\t}\r\n\t\t})\t\r\n\t\te.target.classList.add(\"active\");\r\n\t\t(0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\t});\r\n\r\n\tmenu.addEventListener(\"click\", (e) => {\r\n\t\tif(e.target.classList.contains(\"active\"))return;\r\n\t\tnavItems.forEach((item) => {\r\n\t\t\tif (item != menu){\r\n\t\t\t\titem.classList.remove(\"active\");\r\n\t\t\t}\r\n\t\t})\r\n\t\te.target.classList.add(\"active\");\r\n\t\t(0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\t\t\r\n\t});\r\n\r\n\tcontact.addEventListener(\"click\", (e) => {\r\n\t\tif(e.target.classList.contains(\"active\"))return;\r\n\t\tnavItems.forEach((item) => {\r\n\t\t\tif (item != contact){\r\n\t\t\t\titem.classList.remove(\"active\");\r\n\t\t\t}\r\n\t\t})\r\n\t\te.target.classList.add(\"active\");\r\n\t\t(0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\t});\r\n\r\n\treturn nav;\r\n}\r\n\r\nfunction createMain() {\r\n\tconst main = document.createElement(\"div\");\r\n\t// main.classList.add(\"main\");\r\n\tmain.setAttribute(\"id\", \"main\");\r\n\treturn main;\r\n} \r\n\r\nfunction createFooter() {\r\n\tconst footer = document.createElement(\"div\");\r\n\tfooter.classList.add(\"footer\");\r\n\t\r\n\tconst copyright = document.createElement(\"p\");\r\n\tcopyright.textContent = `Copyright © ${new Date().getFullYear()} Abenezer`;\r\n\t\r\n\tconst githubLink = document.createElement(\"a\");\r\n\tgithubLink.href = \"https://github.com/abeni-92\";\r\n\t\r\n\tconst githubIcon = document.createElement(\"i\");\r\n\tgithubIcon.classList.add(\"fab\");\r\n\tgithubIcon.classList.add(\"fa-github\");\r\n\t\r\n\tgithubLink.appendChild(githubIcon);\r\n\tfooter.appendChild(copyright);\r\n\tfooter.appendChild(githubLink);\r\n\t\r\n\treturn footer;\r\n  }\r\n  \r\n  const content = document.getElementById(\"content\");\r\n  \r\n  content.append(createNav());\r\n  content.append(createMain());\r\n  content.append(createFooter());\r\n\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  \r\n//   console.log(nav);\r\n\n\n//# sourceURL=webpack://js-resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_pizza1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza1.jpg */ \"./src/images/pizza1.jpg\");\n/* harmony import */ var _images_pizza2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizza2.jpg */ \"./src/images/pizza2.jpg\");\n/* harmony import */ var _images_pizza3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pizza3.jpg */ \"./src/images/pizza3.jpg\");\n/* harmony import */ var _images_pizza4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pizza4.jpg */ \"./src/images/pizza4.jpg\");\n/* harmony import */ var _images_pizza5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pizza5.jpg */ \"./src/images/pizza5.jpg\");\n/* harmony import */ var _images_pizza6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pizza6.jpg */ \"./src/images/pizza6.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMenu() {\r\n\tconst menu = document.createElement('div');\r\n\tmenu.setAttribute(\"id\", \"menu\");\r\n\r\n\tconst article1 = createArticle('Salsiccia', _images_pizza1_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');\r\n\tconst article2 = createArticle('Gamberi', _images_pizza2_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');\r\n\tconst article3 = createArticle('Pepe', _images_pizza3_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil')\r\n\tconst article4 = createArticle('Disgustoso', _images_pizza4_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');\r\n\tconst article5 = createArticle('Colorato', _images_pizza5_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');\r\n\tconst article6 = createArticle('Pomorodo', _images_pizza6_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');\r\n\r\n\tconst item1 = createItem(article1, article2);\r\n\tconst item2 = createItem(article3, article4);\r\n\tconst item3 = createItem(article5, article6);\r\n\r\n\tmenu.append(item1, item2, item3);\r\n\r\n\treturn menu;\r\n}\r\n\r\nfunction createItem(article1, article2) {\r\n\tconst item = document.createElement('div');\r\n\titem.classList.add('item');\r\n\r\n\titem.append(article1, article2);\r\n\r\n\treturn item;\r\n}\r\n\r\nfunction createArticle(name, src, desc){\r\n\tconst article = document.createElement('article');\r\n\r\n\tconst img = new Image();\r\n\timg.src = src;\r\n\r\n\tconst h2 = document.createElement('h2');\r\n\th2.textContent = name;\r\n\r\n\tconst p = document.createElement('p');\r\n\tp.textContent = desc;\r\n\t\r\n\tarticle.append(img, h2, p);\r\n\r\n\treturn article;\r\n}\r\n\r\nfunction loadMenu() {\r\n\tconst main = document.getElementById('main');\r\n\t// main.setAttribute(\"id\", \"menu\");\r\n\tmain.classList.add(\"menu\");\r\n\tmain.textContent = \"\";\r\n\tmain.append(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://js-resturant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/chef.jpg":
/*!*****************************!*\
  !*** ./src/images/chef.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65b5ac4e57fd89a8fd2a.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/chef.jpg?");

/***/ }),

/***/ "./src/images/piz.jpg":
/*!****************************!*\
  !*** ./src/images/piz.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0bdefd031679307382c.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/piz.jpg?");

/***/ }),

/***/ "./src/images/pizza1.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5df0c53a7089ed5ff57.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/pizza1.jpg?");

/***/ }),

/***/ "./src/images/pizza2.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53d879f403f734445385.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/pizza2.jpg?");

/***/ }),

/***/ "./src/images/pizza3.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50e6539800274e926070.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/pizza3.jpg?");

/***/ }),

/***/ "./src/images/pizza4.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c480776e8138586d0d0.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/pizza4.jpg?");

/***/ }),

/***/ "./src/images/pizza5.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza5.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd1c92d5212b737bcd30.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/pizza5.jpg?");

/***/ }),

/***/ "./src/images/pizza6.jpg":
/*!*******************************!*\
  !*** ./src/images/pizza6.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c720b93753bc54ea5eb.jpg\";\n\n//# sourceURL=webpack://js-resturant-page/./src/images/pizza6.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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