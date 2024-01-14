"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/url-parse-lax";
exports.ids = ["vendor-chunks/url-parse-lax"];
exports.modules = {

/***/ "(ssr)/./node_modules/url-parse-lax/index.js":
/*!*********************************************!*\
  !*** ./node_modules/url-parse-lax/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar url = __webpack_require__(/*! url */ \"url\");\nvar prependHttp = __webpack_require__(/*! prepend-http */ \"(ssr)/./node_modules/prepend-http/index.js\");\nmodule.exports = function(x) {\n    var withProtocol = prependHttp(x);\n    var parsed = url.parse(withProtocol);\n    if (withProtocol !== x) {\n        parsed.protocol = null;\n    }\n    return parsed;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXJsLXBhcnNlLWxheC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLE1BQU1DLG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlDLGNBQWNELG1CQUFPQSxDQUFDO0FBRTFCRSxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsQ0FBQztJQUMzQixJQUFJQyxlQUFlSixZQUFZRztJQUMvQixJQUFJRSxTQUFTUCxJQUFJUSxLQUFLLENBQUNGO0lBRXZCLElBQUlBLGlCQUFpQkQsR0FBRztRQUN2QkUsT0FBT0UsUUFBUSxHQUFHO0lBQ25CO0lBRUEsT0FBT0Y7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy91cmwtcGFyc2UtbGF4L2luZGV4LmpzPzc3YTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpO1xudmFyIHByZXBlbmRIdHRwID0gcmVxdWlyZSgncHJlcGVuZC1odHRwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHtcblx0dmFyIHdpdGhQcm90b2NvbCA9IHByZXBlbmRIdHRwKHgpO1xuXHR2YXIgcGFyc2VkID0gdXJsLnBhcnNlKHdpdGhQcm90b2NvbCk7XG5cblx0aWYgKHdpdGhQcm90b2NvbCAhPT0geCkge1xuXHRcdHBhcnNlZC5wcm90b2NvbCA9IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gcGFyc2VkO1xufTtcbiJdLCJuYW1lcyI6WyJ1cmwiLCJyZXF1aXJlIiwicHJlcGVuZEh0dHAiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsIndpdGhQcm90b2NvbCIsInBhcnNlZCIsInBhcnNlIiwicHJvdG9jb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/url-parse-lax/index.js\n");

/***/ })

};
;