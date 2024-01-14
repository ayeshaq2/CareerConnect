"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prepend-http";
exports.ids = ["vendor-chunks/prepend-http"];
exports.modules = {

/***/ "(ssr)/./node_modules/prepend-http/index.js":
/*!********************************************!*\
  !*** ./node_modules/prepend-http/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nmodule.exports = function(url) {\n    if (typeof url !== \"string\") {\n        throw new TypeError(\"Expected a string, got \" + typeof url);\n    }\n    url = url.trim();\n    if (/^\\.*\\/|^(?!localhost)\\w+:/.test(url)) {\n        return url;\n    }\n    return url.replace(/^(?!(?:\\w+:)?\\/\\/)/, \"http://\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJlcGVuZC1odHRwL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxHQUFHO0lBQzdCLElBQUksT0FBT0EsUUFBUSxVQUFVO1FBQzVCLE1BQU0sSUFBSUMsVUFBVSw0QkFBNEIsT0FBT0Q7SUFDeEQ7SUFFQUEsTUFBTUEsSUFBSUUsSUFBSTtJQUVkLElBQUksNEJBQTRCQyxJQUFJLENBQUNILE1BQU07UUFDMUMsT0FBT0E7SUFDUjtJQUVBLE9BQU9BLElBQUlJLE9BQU8sQ0FBQyxzQkFBc0I7QUFDMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvcHJlcGVuZC1odHRwL2luZGV4LmpzPzA0M2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsKSB7XG5cdGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nLCBnb3QgJyArIHR5cGVvZiB1cmwpO1xuXHR9XG5cblx0dXJsID0gdXJsLnRyaW0oKTtcblxuXHRpZiAoL15cXC4qXFwvfF4oPyFsb2NhbGhvc3QpXFx3KzovLnRlc3QodXJsKSkge1xuXHRcdHJldHVybiB1cmw7XG5cdH1cblxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoL14oPyEoPzpcXHcrOik/XFwvXFwvKS8sICdodHRwOi8vJyk7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1cmwiLCJUeXBlRXJyb3IiLCJ0cmltIiwidGVzdCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prepend-http/index.js\n");

/***/ })

};
;