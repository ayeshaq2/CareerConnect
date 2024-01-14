"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-stream";
exports.ids = ["vendor-chunks/is-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-stream/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-stream/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar isStream = module.exports = function(stream) {\n    return stream !== null && typeof stream === \"object\" && typeof stream.pipe === \"function\";\n};\nisStream.writable = function(stream) {\n    return isStream(stream) && stream.writable !== false && typeof stream._write === \"function\" && typeof stream._writableState === \"object\";\n};\nisStream.readable = function(stream) {\n    return isStream(stream) && stream.readable !== false && typeof stream._read === \"function\" && typeof stream._readableState === \"object\";\n};\nisStream.duplex = function(stream) {\n    return isStream.writable(stream) && isStream.readable(stream);\n};\nisStream.transform = function(stream) {\n    return isStream.duplex(stream) && typeof stream._transform === \"function\" && typeof stream._transformState === \"object\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtc3RyZWFtL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsV0FBV0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLE1BQU07SUFDL0MsT0FBT0EsV0FBVyxRQUFRLE9BQU9BLFdBQVcsWUFBWSxPQUFPQSxPQUFPQyxJQUFJLEtBQUs7QUFDaEY7QUFFQUosU0FBU0ssUUFBUSxHQUFHLFNBQVVGLE1BQU07SUFDbkMsT0FBT0gsU0FBU0csV0FBV0EsT0FBT0UsUUFBUSxLQUFLLFNBQVMsT0FBT0YsT0FBT0csTUFBTSxLQUFLLGNBQWMsT0FBT0gsT0FBT0ksY0FBYyxLQUFLO0FBQ2pJO0FBRUFQLFNBQVNRLFFBQVEsR0FBRyxTQUFVTCxNQUFNO0lBQ25DLE9BQU9ILFNBQVNHLFdBQVdBLE9BQU9LLFFBQVEsS0FBSyxTQUFTLE9BQU9MLE9BQU9NLEtBQUssS0FBSyxjQUFjLE9BQU9OLE9BQU9PLGNBQWMsS0FBSztBQUNoSTtBQUVBVixTQUFTVyxNQUFNLEdBQUcsU0FBVVIsTUFBTTtJQUNqQyxPQUFPSCxTQUFTSyxRQUFRLENBQUNGLFdBQVdILFNBQVNRLFFBQVEsQ0FBQ0w7QUFDdkQ7QUFFQUgsU0FBU1ksU0FBUyxHQUFHLFNBQVVULE1BQU07SUFDcEMsT0FBT0gsU0FBU1csTUFBTSxDQUFDUixXQUFXLE9BQU9BLE9BQU9VLFVBQVUsS0FBSyxjQUFjLE9BQU9WLE9BQU9XLGVBQWUsS0FBSztBQUNoSCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9pcy1zdHJlYW0vaW5kZXguanM/MTlkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc1N0cmVhbSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtICE9PSBudWxsICYmIHR5cGVvZiBzdHJlYW0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBzdHJlYW0ucGlwZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmlzU3RyZWFtLndyaXRhYmxlID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuXHRyZXR1cm4gaXNTdHJlYW0oc3RyZWFtKSAmJiBzdHJlYW0ud3JpdGFibGUgIT09IGZhbHNlICYmIHR5cGVvZiBzdHJlYW0uX3dyaXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzdHJlYW0uX3dyaXRhYmxlU3RhdGUgPT09ICdvYmplY3QnO1xufTtcblxuaXNTdHJlYW0ucmVhZGFibGUgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG5cdHJldHVybiBpc1N0cmVhbShzdHJlYW0pICYmIHN0cmVhbS5yZWFkYWJsZSAhPT0gZmFsc2UgJiYgdHlwZW9mIHN0cmVhbS5fcmVhZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc3RyZWFtLl9yZWFkYWJsZVN0YXRlID09PSAnb2JqZWN0Jztcbn07XG5cbmlzU3RyZWFtLmR1cGxleCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0cmV0dXJuIGlzU3RyZWFtLndyaXRhYmxlKHN0cmVhbSkgJiYgaXNTdHJlYW0ucmVhZGFibGUoc3RyZWFtKTtcbn07XG5cbmlzU3RyZWFtLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0cmV0dXJuIGlzU3RyZWFtLmR1cGxleChzdHJlYW0pICYmIHR5cGVvZiBzdHJlYW0uX3RyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZSA9PT0gJ29iamVjdCc7XG59O1xuIl0sIm5hbWVzIjpbImlzU3RyZWFtIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmVhbSIsInBpcGUiLCJ3cml0YWJsZSIsIl93cml0ZSIsIl93cml0YWJsZVN0YXRlIiwicmVhZGFibGUiLCJfcmVhZCIsIl9yZWFkYWJsZVN0YXRlIiwiZHVwbGV4IiwidHJhbnNmb3JtIiwiX3RyYW5zZm9ybSIsIl90cmFuc2Zvcm1TdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-stream/index.js\n");

/***/ })

};
;