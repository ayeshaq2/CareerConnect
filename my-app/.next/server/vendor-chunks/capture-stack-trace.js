"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/capture-stack-trace";
exports.ids = ["vendor-chunks/capture-stack-trace"];
exports.modules = {

/***/ "(ssr)/./node_modules/capture-stack-trace/index.js":
/*!***************************************************!*\
  !*** ./node_modules/capture-stack-trace/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nmodule.exports = Error.captureStackTrace || function(error) {\n    var container = new Error();\n    Object.defineProperty(error, \"stack\", {\n        configurable: true,\n        get: function getStack() {\n            var stack = container.stack;\n            Object.defineProperty(this, \"stack\", {\n                value: stack\n            });\n            return stack;\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FwdHVyZS1zdGFjay10cmFjZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDLE1BQU1DLGlCQUFpQixJQUFJLFNBQVVDLEtBQUs7SUFDMUQsSUFBSUMsWUFBWSxJQUFJSDtJQUVwQkksT0FBT0MsY0FBYyxDQUFDSCxPQUFPLFNBQVM7UUFDckNJLGNBQWM7UUFDZEMsS0FBSyxTQUFTQztZQUNiLElBQUlDLFFBQVFOLFVBQVVNLEtBQUs7WUFFM0JMLE9BQU9DLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUztnQkFDcENLLE9BQU9EO1lBQ1I7WUFFQSxPQUFPQTtRQUNSO0lBQ0Q7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9jYXB0dXJlLXN0YWNrLXRyYWNlL2luZGV4LmpzP2YwMzIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlIHx8IGZ1bmN0aW9uIChlcnJvcikge1xuXHR2YXIgY29udGFpbmVyID0gbmV3IEVycm9yKCk7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnc3RhY2snLCB7XG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gZ2V0U3RhY2soKSB7XG5cdFx0XHR2YXIgc3RhY2sgPSBjb250YWluZXIuc3RhY2s7XG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RhY2snLCB7XG5cdFx0XHRcdHZhbHVlOiBzdGFja1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzdGFjaztcblx0XHR9XG5cdH0pO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImVycm9yIiwiY29udGFpbmVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJnZXQiLCJnZXRTdGFjayIsInN0YWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/capture-stack-trace/index.js\n");

/***/ })

};
;