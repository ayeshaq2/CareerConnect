"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unzip-response";
exports.ids = ["vendor-chunks/unzip-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/unzip-response/index.js":
/*!**********************************************!*\
  !*** ./node_modules/unzip-response/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar PassThrough = (__webpack_require__(/*! stream */ \"stream\").PassThrough);\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\");\nmodule.exports = function(res) {\n    // TODO: use Array#includes when targeting Node.js 6\n    if ([\n        \"gzip\",\n        \"deflate\"\n    ].indexOf(res.headers[\"content-encoding\"]) === -1) {\n        return res;\n    }\n    var unzip = zlib.createUnzip();\n    var stream = new PassThrough();\n    stream.httpVersion = res.httpVersion;\n    stream.headers = res.headers;\n    stream.rawHeaders = res.rawHeaders;\n    stream.trailers = res.trailers;\n    stream.rawTrailers = res.rawTrailers;\n    stream.setTimeout = res.setTimeout.bind(res);\n    stream.statusCode = res.statusCode;\n    stream.statusMessage = res.statusMessage;\n    stream.socket = res.socket;\n    unzip.on(\"error\", function(err) {\n        if (err.code === \"Z_BUF_ERROR\") {\n            stream.end();\n            return;\n        }\n        stream.emit(\"error\", err);\n    });\n    res.pipe(unzip).pipe(stream);\n    return stream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW56aXAtcmVzcG9uc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxjQUFjQyx5REFBNkI7QUFDL0MsSUFBSUMsT0FBT0QsbUJBQU9BLENBQUM7QUFFbkJFLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxHQUFHO0lBQzdCLG9EQUFvRDtJQUNwRCxJQUFJO1FBQUM7UUFBUTtLQUFVLENBQUNDLE9BQU8sQ0FBQ0QsSUFBSUUsT0FBTyxDQUFDLG1CQUFtQixNQUFNLENBQUMsR0FBRztRQUN4RSxPQUFPRjtJQUNSO0lBRUEsSUFBSUcsUUFBUU4sS0FBS08sV0FBVztJQUM1QixJQUFJQyxTQUFTLElBQUlWO0lBRWpCVSxPQUFPQyxXQUFXLEdBQUdOLElBQUlNLFdBQVc7SUFDcENELE9BQU9ILE9BQU8sR0FBR0YsSUFBSUUsT0FBTztJQUM1QkcsT0FBT0UsVUFBVSxHQUFHUCxJQUFJTyxVQUFVO0lBQ2xDRixPQUFPRyxRQUFRLEdBQUdSLElBQUlRLFFBQVE7SUFDOUJILE9BQU9JLFdBQVcsR0FBR1QsSUFBSVMsV0FBVztJQUNwQ0osT0FBT0ssVUFBVSxHQUFHVixJQUFJVSxVQUFVLENBQUNDLElBQUksQ0FBQ1g7SUFDeENLLE9BQU9PLFVBQVUsR0FBR1osSUFBSVksVUFBVTtJQUNsQ1AsT0FBT1EsYUFBYSxHQUFHYixJQUFJYSxhQUFhO0lBQ3hDUixPQUFPUyxNQUFNLEdBQUdkLElBQUljLE1BQU07SUFFMUJYLE1BQU1ZLEVBQUUsQ0FBQyxTQUFTLFNBQVVDLEdBQUc7UUFDOUIsSUFBSUEsSUFBSUMsSUFBSSxLQUFLLGVBQWU7WUFDL0JaLE9BQU9hLEdBQUc7WUFDVjtRQUNEO1FBRUFiLE9BQU9jLElBQUksQ0FBQyxTQUFTSDtJQUN0QjtJQUVBaEIsSUFBSW9CLElBQUksQ0FBQ2pCLE9BQU9pQixJQUFJLENBQUNmO0lBRXJCLE9BQU9BO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvdW56aXAtcmVzcG9uc2UvaW5kZXguanM/YmRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgUGFzc1Rocm91Z2ggPSByZXF1aXJlKCdzdHJlYW0nKS5QYXNzVGhyb3VnaDtcbnZhciB6bGliID0gcmVxdWlyZSgnemxpYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZXMpIHtcblx0Ly8gVE9ETzogdXNlIEFycmF5I2luY2x1ZGVzIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgNlxuXHRpZiAoWydnemlwJywgJ2RlZmxhdGUnXS5pbmRleE9mKHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10pID09PSAtMSkge1xuXHRcdHJldHVybiByZXM7XG5cdH1cblxuXHR2YXIgdW56aXAgPSB6bGliLmNyZWF0ZVVuemlwKCk7XG5cdHZhciBzdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goKTtcblxuXHRzdHJlYW0uaHR0cFZlcnNpb24gPSByZXMuaHR0cFZlcnNpb247XG5cdHN0cmVhbS5oZWFkZXJzID0gcmVzLmhlYWRlcnM7XG5cdHN0cmVhbS5yYXdIZWFkZXJzID0gcmVzLnJhd0hlYWRlcnM7XG5cdHN0cmVhbS50cmFpbGVycyA9IHJlcy50cmFpbGVycztcblx0c3RyZWFtLnJhd1RyYWlsZXJzID0gcmVzLnJhd1RyYWlsZXJzO1xuXHRzdHJlYW0uc2V0VGltZW91dCA9IHJlcy5zZXRUaW1lb3V0LmJpbmQocmVzKTtcblx0c3RyZWFtLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcblx0c3RyZWFtLnN0YXR1c01lc3NhZ2UgPSByZXMuc3RhdHVzTWVzc2FnZTtcblx0c3RyZWFtLnNvY2tldCA9IHJlcy5zb2NrZXQ7XG5cblx0dW56aXAub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdGlmIChlcnIuY29kZSA9PT0gJ1pfQlVGX0VSUk9SJykge1xuXHRcdFx0c3RyZWFtLmVuZCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN0cmVhbS5lbWl0KCdlcnJvcicsIGVycik7XG5cdH0pO1xuXG5cdHJlcy5waXBlKHVuemlwKS5waXBlKHN0cmVhbSk7XG5cblx0cmV0dXJuIHN0cmVhbTtcbn07XG4iXSwibmFtZXMiOlsiUGFzc1Rocm91Z2giLCJyZXF1aXJlIiwiemxpYiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXMiLCJpbmRleE9mIiwiaGVhZGVycyIsInVuemlwIiwiY3JlYXRlVW56aXAiLCJzdHJlYW0iLCJodHRwVmVyc2lvbiIsInJhd0hlYWRlcnMiLCJ0cmFpbGVycyIsInJhd1RyYWlsZXJzIiwic2V0VGltZW91dCIsImJpbmQiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsInNvY2tldCIsIm9uIiwiZXJyIiwiY29kZSIsImVuZCIsImVtaXQiLCJwaXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unzip-response/index.js\n");

/***/ })

};
;