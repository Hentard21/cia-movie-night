/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/omdb/route";
exports.ids = ["app/api/omdb/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fomdb%2Froute&page=%2Fapi%2Fomdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fomdb%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fomdb%2Froute&page=%2Fapi%2Fomdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fomdb%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_markkaluznyj_movie_voting_app_src_app_api_omdb_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/omdb/route.ts */ \"(rsc)/./src/app/api/omdb/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/omdb/route\",\n        pathname: \"/api/omdb\",\n        filename: \"route\",\n        bundlePath: \"app/api/omdb/route\"\n    },\n    resolvedPagePath: \"/Users/markkaluznyj/movie-voting-app/src/app/api/omdb/route.ts\",\n    nextConfigOutput,\n    userland: _Users_markkaluznyj_movie_voting_app_src_app_api_omdb_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvbWRiJTJGcm91dGUmcGFnZT0lMkZhcGklMkZvbWRiJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGb21kYiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hcmtrYWx1em55aiUyRm1vdmllLXZvdGluZy1hcHAlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWFya2thbHV6bnlqJTJGbW92aWUtdm90aW5nLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDYztBQUMzRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21hcmtrYWx1em55ai9tb3ZpZS12b3RpbmctYXBwL3NyYy9hcHAvYXBpL29tZGIvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL29tZGIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9vbWRiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9vbWRiL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hcmtrYWx1em55ai9tb3ZpZS12b3RpbmctYXBwL3NyYy9hcHAvYXBpL29tZGIvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fomdb%2Froute&page=%2Fapi%2Fomdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fomdb%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/omdb/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/omdb/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nfunction extractImdbId(urlOrId) {\n    const trimmed = urlOrId.trim();\n    const match = trimmed.match(/tt\\d{7,8}/);\n    if (match) return match[0];\n    if (/^tt\\d{7,8}$/.test(trimmed)) return trimmed;\n    return null;\n}\nasync function GET(request) {\n    const imdbId = request.nextUrl.searchParams.get(\"id\") ?? request.nextUrl.searchParams.get(\"url\");\n    if (!imdbId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing id or url\"\n        }, {\n            status: 400\n        });\n    }\n    const id = extractImdbId(imdbId);\n    if (!id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid IMDb link or ID\"\n        }, {\n            status: 400\n        });\n    }\n    const key = process.env.OMDB_API_KEY;\n    if (!key) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"OMDb API key not configured\"\n        }, {\n            status: 503\n        });\n    }\n    const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${id}&plot=short`);\n    const data = await res.json();\n    if (data.Response === \"False\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: data.Error ?? \"Movie not found\"\n        }, {\n            status: 404\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        imdb_id: data.imdbID,\n        title: data.Title,\n        poster_url: data.Poster && data.Poster !== \"N/A\" ? data.Poster : null,\n        year: data.Year ?? null,\n        director: data.Director ?? null,\n        plot: data.Plot ?? null,\n        genre: data.Genre ?? null,\n        imdb_rating: data.imdbRating ?? null\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9vbWRiL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdEO0FBRXhELFNBQVNDLGNBQWNDLE9BQWU7SUFDcEMsTUFBTUMsVUFBVUQsUUFBUUUsSUFBSTtJQUM1QixNQUFNQyxRQUFRRixRQUFRRSxLQUFLLENBQUM7SUFDNUIsSUFBSUEsT0FBTyxPQUFPQSxLQUFLLENBQUMsRUFBRTtJQUMxQixJQUFJLGNBQWNDLElBQUksQ0FBQ0gsVUFBVSxPQUFPQTtJQUN4QyxPQUFPO0FBQ1Q7QUFFTyxlQUFlSSxJQUFJQyxPQUFvQjtJQUM1QyxNQUFNQyxTQUFTRCxRQUFRRSxPQUFPLENBQUNDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFNBQVNKLFFBQVFFLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDMUYsSUFBSSxDQUFDSCxRQUFRO1FBQ1gsT0FBT1QscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0lBQ0EsTUFBTUMsS0FBS2YsY0FBY1E7SUFDekIsSUFBSSxDQUFDTyxJQUFJO1FBQ1AsT0FBT2hCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEwQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtJQUNBLE1BQU1FLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtJQUNwQyxJQUFJLENBQUNILEtBQUs7UUFDUixPQUFPakIscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQThCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ25GO0lBQ0EsTUFBTU0sTUFBTSxNQUFNQyxNQUNoQixDQUFDLGdDQUFnQyxFQUFFTCxJQUFJLEdBQUcsRUFBRUQsR0FBRyxXQUFXLENBQUM7SUFFN0QsTUFBTU8sT0FBTyxNQUFNRixJQUFJUixJQUFJO0lBQzNCLElBQUlVLEtBQUtDLFFBQVEsS0FBSyxTQUFTO1FBQzdCLE9BQU94QixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVDLE9BQU9TLEtBQUtFLEtBQUssSUFBSTtRQUFrQixHQUFHO1lBQUVWLFFBQVE7UUFBSTtJQUNyRjtJQUNBLE9BQU9mLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7UUFDdkJhLFNBQVNILEtBQUtJLE1BQU07UUFDcEJDLE9BQU9MLEtBQUtNLEtBQUs7UUFDakJDLFlBQVlQLEtBQUtRLE1BQU0sSUFBSVIsS0FBS1EsTUFBTSxLQUFLLFFBQVFSLEtBQUtRLE1BQU0sR0FBRztRQUNqRUMsTUFBTVQsS0FBS1UsSUFBSSxJQUFJO1FBQ25CQyxVQUFVWCxLQUFLWSxRQUFRLElBQUk7UUFDM0JDLE1BQU1iLEtBQUtjLElBQUksSUFBSTtRQUNuQkMsT0FBT2YsS0FBS2dCLEtBQUssSUFBSTtRQUNyQkMsYUFBYWpCLEtBQUtrQixVQUFVLElBQUk7SUFDbEM7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL21hcmtrYWx1em55ai9tb3ZpZS12b3RpbmctYXBwL3NyYy9hcHAvYXBpL29tZGIvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZnVuY3Rpb24gZXh0cmFjdEltZGJJZCh1cmxPcklkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICBjb25zdCB0cmltbWVkID0gdXJsT3JJZC50cmltKCk7XHJcbiAgY29uc3QgbWF0Y2ggPSB0cmltbWVkLm1hdGNoKC90dFxcZHs3LDh9Lyk7XHJcbiAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hbMF07XHJcbiAgaWYgKC9edHRcXGR7Nyw4fSQvLnRlc3QodHJpbW1lZCkpIHJldHVybiB0cmltbWVkO1xyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgaW1kYklkID0gcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKSA/PyByZXF1ZXN0Lm5leHRVcmwuc2VhcmNoUGFyYW1zLmdldChcInVybFwiKTtcclxuICBpZiAoIWltZGJJZCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTWlzc2luZyBpZCBvciB1cmxcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuICBjb25zdCBpZCA9IGV4dHJhY3RJbWRiSWQoaW1kYklkKTtcclxuICBpZiAoIWlkKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIElNRGIgbGluayBvciBJRFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGtleSA9IHByb2Nlc3MuZW52Lk9NREJfQVBJX0tFWTtcclxuICBpZiAoIWtleSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiT01EYiBBUEkga2V5IG5vdCBjb25maWd1cmVkXCIgfSwgeyBzdGF0dXM6IDUwMyB9KTtcclxuICB9XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT0ke2tleX0maT0ke2lkfSZwbG90PXNob3J0YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgaWYgKGRhdGEuUmVzcG9uc2UgPT09IFwiRmFsc2VcIikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGRhdGEuRXJyb3IgPz8gXCJNb3ZpZSBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gIH1cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgaW1kYl9pZDogZGF0YS5pbWRiSUQsXHJcbiAgICB0aXRsZTogZGF0YS5UaXRsZSxcclxuICAgIHBvc3Rlcl91cmw6IGRhdGEuUG9zdGVyICYmIGRhdGEuUG9zdGVyICE9PSBcIk4vQVwiID8gZGF0YS5Qb3N0ZXIgOiBudWxsLFxyXG4gICAgeWVhcjogZGF0YS5ZZWFyID8/IG51bGwsXHJcbiAgICBkaXJlY3RvcjogZGF0YS5EaXJlY3RvciA/PyBudWxsLFxyXG4gICAgcGxvdDogZGF0YS5QbG90ID8/IG51bGwsXHJcbiAgICBnZW5yZTogZGF0YS5HZW5yZSA/PyBudWxsLFxyXG4gICAgaW1kYl9yYXRpbmc6IGRhdGEuaW1kYlJhdGluZyA/PyBudWxsLFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJleHRyYWN0SW1kYklkIiwidXJsT3JJZCIsInRyaW1tZWQiLCJ0cmltIiwibWF0Y2giLCJ0ZXN0IiwiR0VUIiwicmVxdWVzdCIsImltZGJJZCIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJpZCIsImtleSIsInByb2Nlc3MiLCJlbnYiLCJPTURCX0FQSV9LRVkiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJSZXNwb25zZSIsIkVycm9yIiwiaW1kYl9pZCIsImltZGJJRCIsInRpdGxlIiwiVGl0bGUiLCJwb3N0ZXJfdXJsIiwiUG9zdGVyIiwieWVhciIsIlllYXIiLCJkaXJlY3RvciIsIkRpcmVjdG9yIiwicGxvdCIsIlBsb3QiLCJnZW5yZSIsIkdlbnJlIiwiaW1kYl9yYXRpbmciLCJpbWRiUmF0aW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/omdb/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fomdb%2Froute&page=%2Fapi%2Fomdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fomdb%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();