"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 1014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routeModule: () => (/* binding */ routeModule)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7153);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7305);
/* harmony import */ var private_next_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(717);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/upload",
        pathname: "/api/upload",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_2__]);
formidable__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    const form = new formidable__WEBPACK_IMPORTED_MODULE_2__.IncomingForm({
        uploadDir: path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "public/uploads"),
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024
    });
    // Ensure upload directory exists
    const uploadDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "public/uploads");
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(uploadDir)) {
        fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(uploadDir, {
            recursive: true
        });
    }
    form.parse(req, async (err, fields, files)=>{
        if (err) {
            console.error("Upload error:", err);
            return res.status(500).json({
                message: "Upload failed",
                error: err.message
            });
        }
        try {
            const uploadedFiles = [];
            // Handle multiple files if needed
            const fileArray = Array.isArray(files.images) ? files.images : [
                files.images
            ];
            for (const file of fileArray){
                if (file && file.filepath) {
                    const fileName = `${Date.now()}_${file.originalFilename}`;
                    const newPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(uploadDir, fileName);
                    // Move file to final location
                    fs__WEBPACK_IMPORTED_MODULE_0___default().renameSync(file.filepath, newPath);
                    uploadedFiles.push(`/uploads/${fileName}`);
                }
            }
            // If this is for a project, also handle project data
            if (fields.title && fields.description) {
                const projectsFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data", "projects.json");
                let projects = [];
                try {
                    projects = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(projectsFilePath, "utf-8"));
                } catch (e) {
                // File doesn't exist or is invalid, start with empty array
                }
                const newProject = {
                    id: Date.now(),
                    title: fields.title,
                    description: fields.description,
                    images: uploadedFiles,
                    category: fields.category || "General",
                    location: fields.location || "",
                    link: fields.link || "",
                    createdAt: new Date().toISOString()
                };
                projects.unshift(newProject); // Add to beginning
                fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
                return res.status(200).json({
                    message: "Project created successfully",
                    project: newProject,
                    uploadedFiles
                });
            }
            return res.status(200).json({
                message: "Files uploaded successfully",
                uploadedFiles
            });
        } catch (error) {
            console.error("Processing error:", error);
            return res.status(500).json({
                message: "Processing failed",
                error: error.message
            });
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(1014)));
module.exports = __webpack_exports__;

})();