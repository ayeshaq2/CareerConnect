/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/oauth-sign";
exports.ids = ["vendor-chunks/oauth-sign"];
exports.modules = {

/***/ "(ssr)/./node_modules/oauth-sign/index.js":
/*!******************************************!*\
  !*** ./node_modules/oauth-sign/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var crypto = __webpack_require__(/*! crypto */ \"crypto\");\nfunction sha(key, body, algorithm) {\n    return crypto.createHmac(algorithm, key).update(body).digest(\"base64\");\n}\nfunction rsa(key, body) {\n    return crypto.createSign(\"RSA-SHA1\").update(body).sign(key, \"base64\");\n}\nfunction rfc3986(str) {\n    return encodeURIComponent(str).replace(/!/g, \"%21\").replace(/\\*/g, \"%2A\").replace(/\\(/g, \"%28\").replace(/\\)/g, \"%29\").replace(/'/g, \"%27\");\n}\n// Maps object to bi-dimensional array\n// Converts { foo: 'A', bar: [ 'b', 'B' ]} to\n// [ ['foo', 'A'], ['bar', 'b'], ['bar', 'B'] ]\nfunction map(obj) {\n    var key, val, arr = [];\n    for(key in obj){\n        val = obj[key];\n        if (Array.isArray(val)) for(var i = 0; i < val.length; i++)arr.push([\n            key,\n            val[i]\n        ]);\n        else if (typeof val === \"object\") for(var prop in val)arr.push([\n            key + \"[\" + prop + \"]\",\n            val[prop]\n        ]);\n        else arr.push([\n            key,\n            val\n        ]);\n    }\n    return arr;\n}\n// Compare function for sort\nfunction compare(a, b) {\n    return a > b ? 1 : a < b ? -1 : 0;\n}\nfunction generateBase(httpMethod, base_uri, params) {\n    // adapted from https://dev.twitter.com/docs/auth/oauth and \n    // https://dev.twitter.com/docs/auth/creating-signature\n    // Parameter normalization\n    // http://tools.ietf.org/html/rfc5849#section-3.4.1.3.2\n    var normalized = map(params)// 1.  First, the name and value of each parameter are encoded\n    .map(function(p) {\n        return [\n            rfc3986(p[0]),\n            rfc3986(p[1] || \"\")\n        ];\n    })// 2.  The parameters are sorted by name, using ascending byte value\n    //     ordering.  If two or more parameters share the same name, they\n    //     are sorted by their value.\n    .sort(function(a, b) {\n        return compare(a[0], b[0]) || compare(a[1], b[1]);\n    })// 3.  The name of each parameter is concatenated to its corresponding\n    //     value using an \"=\" character (ASCII code 61) as a separator, even\n    //     if the value is empty.\n    .map(function(p) {\n        return p.join(\"=\");\n    })// 4.  The sorted name/value pairs are concatenated together into a\n    //     single string by using an \"&\" character (ASCII code 38) as\n    //     separator.\n    .join(\"&\");\n    var base = [\n        rfc3986(httpMethod ? httpMethod.toUpperCase() : \"GET\"),\n        rfc3986(base_uri),\n        rfc3986(normalized)\n    ].join(\"&\");\n    return base;\n}\nfunction hmacsign(httpMethod, base_uri, params, consumer_secret, token_secret) {\n    var base = generateBase(httpMethod, base_uri, params);\n    var key = [\n        consumer_secret || \"\",\n        token_secret || \"\"\n    ].map(rfc3986).join(\"&\");\n    return sha(key, base, \"sha1\");\n}\nfunction hmacsign256(httpMethod, base_uri, params, consumer_secret, token_secret) {\n    var base = generateBase(httpMethod, base_uri, params);\n    var key = [\n        consumer_secret || \"\",\n        token_secret || \"\"\n    ].map(rfc3986).join(\"&\");\n    return sha(key, base, \"sha256\");\n}\nfunction rsasign(httpMethod, base_uri, params, private_key, token_secret) {\n    var base = generateBase(httpMethod, base_uri, params);\n    var key = private_key || \"\";\n    return rsa(key, base);\n}\nfunction plaintext(consumer_secret, token_secret) {\n    var key = [\n        consumer_secret || \"\",\n        token_secret || \"\"\n    ].map(rfc3986).join(\"&\");\n    return key;\n}\nfunction sign(signMethod, httpMethod, base_uri, params, consumer_secret, token_secret) {\n    var method;\n    var skipArgs = 1;\n    switch(signMethod){\n        case \"RSA-SHA1\":\n            method = rsasign;\n            break;\n        case \"HMAC-SHA1\":\n            method = hmacsign;\n            break;\n        case \"HMAC-SHA256\":\n            method = hmacsign256;\n            break;\n        case \"PLAINTEXT\":\n            method = plaintext;\n            skipArgs = 4;\n            break;\n        default:\n            throw new Error(\"Signature method not supported: \" + signMethod);\n    }\n    return method.apply(null, [].slice.call(arguments, skipArgs));\n}\nexports.hmacsign = hmacsign;\nexports.hmacsign256 = hmacsign256;\nexports.rsasign = rsasign;\nexports.plaintext = plaintext;\nexports.sign = sign;\nexports.rfc3986 = rfc3986;\nexports.generateBase = generateBase;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2F1dGgtc2lnbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUVyQixTQUFTQyxJQUFLQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsU0FBUztJQUNoQyxPQUFPTCxPQUFPTSxVQUFVLENBQUNELFdBQVdGLEtBQUtJLE1BQU0sQ0FBQ0gsTUFBTUksTUFBTSxDQUFDO0FBQy9EO0FBRUEsU0FBU0MsSUFBS04sR0FBRyxFQUFFQyxJQUFJO0lBQ3JCLE9BQU9KLE9BQU9VLFVBQVUsQ0FBQyxZQUFZSCxNQUFNLENBQUNILE1BQU1PLElBQUksQ0FBQ1IsS0FBSztBQUM5RDtBQUVBLFNBQVNTLFFBQVNDLEdBQUc7SUFDbkIsT0FBT0MsbUJBQW1CRCxLQUN2QkUsT0FBTyxDQUFDLE1BQUssT0FDYkEsT0FBTyxDQUFDLE9BQU0sT0FDZEEsT0FBTyxDQUFDLE9BQU0sT0FDZEEsT0FBTyxDQUFDLE9BQU0sT0FDZEEsT0FBTyxDQUFDLE1BQUs7QUFDbEI7QUFFQSxzQ0FBc0M7QUFDdEMsNkNBQTZDO0FBQzdDLCtDQUErQztBQUMvQyxTQUFTQyxJQUFLQyxHQUFHO0lBQ2YsSUFBSWQsS0FBS2UsS0FBS0MsTUFBTSxFQUFFO0lBQ3RCLElBQUtoQixPQUFPYyxJQUFLO1FBQ2ZDLE1BQU1ELEdBQUcsQ0FBQ2QsSUFBSTtRQUNkLElBQUlpQixNQUFNQyxPQUFPLENBQUNILE1BQ2hCLElBQUssSUFBSUksSUFBSSxHQUFHQSxJQUFJSixJQUFJSyxNQUFNLEVBQUVELElBQzlCSCxJQUFJSyxJQUFJLENBQUM7WUFBQ3JCO1lBQUtlLEdBQUcsQ0FBQ0ksRUFBRTtTQUFDO2FBQ3JCLElBQUksT0FBT0osUUFBUSxVQUN0QixJQUFLLElBQUlPLFFBQVFQLElBQ2ZDLElBQUlLLElBQUksQ0FBQztZQUFDckIsTUFBTSxNQUFNc0IsT0FBTztZQUFLUCxHQUFHLENBQUNPLEtBQUs7U0FBQzthQUU5Q04sSUFBSUssSUFB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QUNUO1FBQ0YsS0FBSztZQUNISyxTQUFTRjtZQUNURyxXQUFXO1lBQ1g7UUFDRjtZQUNDLE1BQU0sSUFBSUMsTUFBTSxxQ0FBcUNIO0lBQ3hEO0lBRUEsT0FBT0MsT0FBT0csS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsV0FBV0w7QUFDckQ7QUFFQU0sZ0JBQWdCLEdBQUdmO0FBQ25CZSxtQkFBbUIsR0FBR1o7QUFDdEJZLGVBQWUsR0FBR1g7QUFDbEJXLGlCQUFpQixHQUFHVDtBQUNwQlMsWUFBWSxHQUFHM0M7QUFDZjJDLGVBQWUsR0FBRzFDO0FBQ2xCMEMsb0JBQW9CLEdBQUd6QiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9vYXV0aC1zaWduL2luZGV4LmpzP2ExOGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpXG5cbmZ1bmN0aW9uIHNoYSAoa2V5LCBib2R5LCBhbGdvcml0aG0pIHtcbiAgcmV0dXJuIGNyeXB0by5jcmVhdGVIbWFjKGFsZ29yaXRobSwga2V5KS51cGRhdGUoYm9keSkuZGlnZXN0KCdiYXNlNjQnKVxufVxuXG5mdW5jdGlvbiByc2EgKGtleSwgYm9keSkge1xuICByZXR1cm4gY3J5cHRvLmNyZWF0ZVNpZ24oJ1JTQS1TSEExJykudXBkYXRlKGJvZHkpLnNpZ24oa2V5LCAnYmFzZTY0Jylcbn1cblxuZnVuY3Rpb24gcmZjMzk4NiAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgIC5yZXBsYWNlKC8hL2csJyUyMScpXG4gICAgLnJlcGxhY2UoL1xcKi9nLCclMkEnKVxuICAgIC5yZXBsYWNlKC9cXCgvZywnJTI4JylcbiAgICAucmVwbGFjZSgvXFwpL2csJyUyOScpXG4gICAgLnJlcGxhY2UoLycvZywnJTI3Jylcbn1cblxuLy8gTWFwcyBvYmplY3QgdG8gYmktZGltZW5zaW9uYWwgYXJyYXlcbi8vIENvbnZlcnRzIHsgZm9vOiAnQScsIGJhcjogWyAnYicsICdCJyBdfSB0b1xuLy8gWyBbJ2ZvbycsICdBJ10sIFsnYmFyJywgJ2InXSwgWydiYXInLCAnQiddIF1cbmZ1bmN0aW9uIG1hcCAob2JqKSB7XG4gIHZhciBrZXksIHZhbCwgYXJyID0gW11cbiAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgdmFsID0gb2JqW2tleV1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspXG4gICAgICAgIGFyci5wdXNoKFtrZXksIHZhbFtpXV0pXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHZhbClcbiAgICAgICAgYXJyLnB1c2goW2tleSArICdbJyArIHByb3AgKyAnXScsIHZhbFtwcm9wXV0pXG4gICAgZWxzZVxuICAgICAgYXJyLnB1c2goW2tleSwgdmFsXSlcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbi8vIENvbXBhcmUgZnVuY3Rpb24gZm9yIHNvcnRcbmZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQmFzZSAoaHR0cE1ldGhvZCwgYmFzZV91cmksIHBhcmFtcykge1xuICAvLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9kZXYudHdpdHRlci5jb20vZG9jcy9hdXRoL29hdXRoIGFuZCBcbiAgLy8gaHR0cHM6Ly9kZXYudHdpdHRlci5jb20vZG9jcy9hdXRoL2NyZWF0aW5nLXNpZ25hdHVyZVxuXG4gIC8vIFBhcmFtZXRlciBub3JtYWxpemF0aW9uXG4gIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzU4NDkjc2VjdGlvbi0zLjQuMS4zLjJcbiAgdmFyIG5vcm1hbGl6ZWQgPSBtYXAocGFyYW1zKVxuICAvLyAxLiAgRmlyc3QsIHRoZSBuYW1lIGFuZCB2YWx1ZSBvZiBlYWNoIHBhcmFtZXRlciBhcmUgZW5jb2RlZFxuICAubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIFsgcmZjMzk4NihwWzBdKSwgcmZjMzk4NihwWzFdIHx8ICcnKSBdXG4gIH0pXG4gIC8vIDIuICBUaGUgcGFyYW1ldGVycyBhcmUgc29ydGVkIGJ5IG5hbWUsIHVzaW5nIGFzY2VuZGluZyBieXRlIHZhbHVlXG4gIC8vICAgICBvcmRlcmluZy4gIElmIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgc2hhcmUgdGhlIHNhbWUgbmFtZSwgdGhleVxuICAvLyAgICAgYXJlIHNvcnRlZCBieSB0aGVpciB2YWx1ZS5cbiAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZShhWzBdLCBiWzBdKSB8fCBjb21wYXJlKGFbMV0sIGJbMV0pXG4gIH0pXG4gIC8vIDMuICBUaGUgbmFtZSBvZiBlYWNoIHBhcmFtZXRlciBpcyBjb25jYXRlbmF0ZWQgdG8gaXRzIGNvcnJlc3BvbmRpbmdcbiAgLy8gICAgIHZhbHVlIHVzaW5nIGFuIFwiPVwiIGNoYXJhY3RlciAoQVNDSUkgY29kZSA2MSkgYXMgYSBzZXBhcmF0b3IsIGV2ZW5cbiAgLy8gICAgIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cbiAgLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gcC5qb2luKCc9JykgfSlcbiAgIC8vIDQuICBUaGUgc29ydGVkIG5hbWUvdmFsdWUgcGFpcnMgYXJlIGNvbmNhdGVuYXRlZCB0b2dldGhlciBpbnRvIGFcbiAgIC8vICAgICBzaW5nbGUgc3RyaW5nIGJ5IHVzaW5nIGFuIFwiJlwiIGNoYXJhY3RlciAoQVNDSUkgY29kZSAzOCkgYXNcbiAgIC8vICAgICBzZXBhcmF0b3IuXG4gIC5qb2luKCcmJylcblxuICB2YXIgYmFzZSA9IFtcbiAgICByZmMzOTg2KGh0dHBNZXRob2QgPyBodHRwTWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyksXG4gICAgcmZjMzk4NihiYXNlX3VyaSksXG4gICAgcmZjMzk4Nihub3JtYWxpemVkKVxuICBdLmpvaW4oJyYnKVxuXG4gIHJldHVybiBiYXNlXG59XG5cbmZ1bmN0aW9uIGhtYWNzaWduIChodHRwTWV0aG9kLCBiYXNlX3VyaSwgcGFyYW1zLCBjb25zdW1lcl9zZWNyZXQsIHRva2VuX3NlY3JldCkge1xuICB2YXIgYmFzZSA9IGdlbmVyYXRlQmFzZShodHRwTWV0aG9kLCBiYXNlX3VyaSwgcGFyYW1zKVxuICB2YXIga2V5ID0gW1xuICAgIGNvbnN1bWVyX3NlY3JldCB8fCAnJyxcbiAgICB0b2tlbl9zZWNyZXQgfHwgJydcbiAgXS5tYXAocmZjMzk4Nikuam9pbignJicpXG5cbiAgcmV0dXJuIHNoYShrZXksIGJhc2UsICdzaGExJylcbn1cblxuZnVuY3Rpb24gaG1hY3NpZ24yNTYgKGh0dHBNZXRob2QsIGJhc2VfdXJpLCBwYXJhbXMsIGNvbnN1bWVyX3NlY3JldCwgdG9rZW5fc2VjcmV0KSB7XG4gIHZhciBiYXNlID0gZ2VuZXJhdGVCYXNlKGh0dHBNZXRob2QsIGJhc2VfdXJpLCBwYXJhbXMpXG4gIHZhciBrZXkgPSBbXG4gICAgY29uc3VtZXJfc2VjcmV0IHx8ICcnLFxuICAgIHRva2VuX3NlY3JldCB8fCAnJ1xuICBdLm1hcChyZmMzOTg2KS5qb2luKCcmJylcblxuICByZXR1cm4gc2hhKGtleSwgYmFzZSwgJ3NoYTI1NicpXG59XG5cbmZ1bmN0aW9uIHJzYXNpZ24gKGh0dHBNZXRob2QsIGJhc2VfdXJpLCBwYXJhbXMsIHByaXZhdGVfa2V5LCB0b2tlbl9zZWNyZXQpIHtcbiAgdmFyIGJhc2UgPSBnZW5lcmF0ZUJhc2UoaHR0cE1ldGhvZCwgYmFzZV91cmksIHBhcmFtcylcbiAgdmFyIGtleSA9IHByaXZhdGVfa2V5IHx8ICcnXG5cbiAgcmV0dXJuIHJzYShrZXksIGJhc2UpXG59XG5cbmZ1bmN0aW9uIHBsYWludGV4dCAoY29uc3VtZXJfc2VjcmV0LCB0b2tlbl9zZWNyZXQpIHtcbiAgdmFyIGtleSA9IFtcbiAgICBjb25zdW1lcl9zZWNyZXQgfHwgJycsXG4gICAgdG9rZW5fc2VjcmV0IHx8ICcnXG4gIF0ubWFwKHJmYzM5ODYpLmpvaW4oJyYnKVxuXG4gIHJldHVybiBrZXlcbn1cblxuZnVuY3Rpb24gc2lnbiAoc2lnbk1ldGhvZCwgaHR0cE1ldGhvZCwgYmFzZV91cmksIHBhcmFtcywgY29uc3VtZXJfc2VjcmV0LCB0b2tlbl9zZWNyZXQpIHtcbiAgdmFyIG1ldGhvZFxuICB2YXIgc2tpcEFyZ3MgPSAxXG5cbiAgc3dpdGNoIChzaWduTWV0aG9kKSB7XG4gICAgY2FzZSAnUlNBLVNIQTEnOlxuICAgICAgbWV0aG9kID0gcnNhc2lnblxuICAgICAgYnJlYWtcbiAgICBjYXNlICdITUFDLVNIQTEnOlxuICAgICAgbWV0aG9kID0gaG1hY3NpZ25cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnSE1BQy1TSEEyNTYnOlxuICAgICAgbWV0aG9kID0gaG1hY3NpZ24yNTZcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnUExBSU5URVhUJzpcbiAgICAgIG1ldGhvZCA9IHBsYWludGV4dFxuICAgICAgc2tpcEFyZ3MgPSA0XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIG1ldGhvZCBub3Qgc3VwcG9ydGVkOiAnICsgc2lnbk1ldGhvZClcbiAgfVxuXG4gIHJldHVybiBtZXRob2QuYXBwbHkobnVsbCwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIHNraXBBcmdzKSlcbn1cblxuZXhwb3J0cy5obWFjc2lnbiA9IGhtYWNzaWduXG5leHBvcnRzLmhtYWNzaWduMjU2ID0gaG1hY3NpZ24yNTZcbmV4cG9ydHMucnNhc2lnbiA9IHJzYXNpZ25cbmV4cG9ydHMucGxhaW50ZXh0ID0gcGxhaW50ZXh0XG5leHBvcnRzLnNpZ24gPSBzaWduXG5leHBvcnRzLnJmYzM5ODYgPSByZmMzOTg2XG5leHBvcnRzLmdlbmVyYXRlQmFzZSA9IGdlbmVyYXRlQmFzZSJdLCJuYW1lcyI6WyJjcnlwdG8iLCJyZXF1aXJlIiwic2hhIiwia2V5IiwiYm9keSIsImFsZ29yaXRobSIsImNyZWF0ZUhtYWMiLCJ1cGRhdGUiLCJkaWdlc3QiLCJyc2EiLCJjcmVhdGVTaWduIiwic2lnbiIsInJmYzM5ODYiLCJzdHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWFwIiwib2JqIiwidmFsIiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsInB1c2giLCJwcm9wIiwiY29tcGFyZSIsImEiLCJiIiwiZ2VuZXJhdGVCYXNlIiwiaHR0cE1ldGhvZCIsImJhc2VfdXJpIiwicGFyYW1zIiwibm9ybWFsaXplZCIsInAiLCJzb3J0Iiwiam9pbiIsImJhc2UiLCJ0b1VwcGVyQ2FzZSIsImhtYWNzaWduIiwiY29uc3VtZXJfc2VjcmV0IiwidG9rZW5fc2VjcmV0IiwiaG1hY3NpZ24yNTYiLCJyc2FzaWduIiwicHJpdmF0ZV9rZXkiLCJwbGFpbnRleHQiLCJzaWduTWV0aG9kIiwibWV0aG9kIiwic2tpcEFyZ3MiLCJFcnJvciIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/oauth-sign/index.js\n");

/***/ })

};
;