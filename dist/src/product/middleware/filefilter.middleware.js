"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFileFilter = exports.editFileName = void 0;
const path_1 = require("path");
const editFileName = (req, file, callback) => {
    const name = file.originalname.split(".")[0];
    const fileExtensionName = (0, path_1.extname)(file.originalname);
    const randomeName = Date.now();
    callback(null, randomeName + "-" + name + fileExtensionName);
};
exports.editFileName = editFileName;
const imageFileFilter = (req, file, cb) => {
    const allowedExtension = [".jpg", ".jpeg", ".png"];
    const ext = (0, path_1.extname)(file.originalname).toLowerCase();
    if (allowedExtension.includes(ext)) {
        cb(null, true);
    }
    else {
        cb(new Error("Invalid file type"));
    }
};
exports.imageFileFilter = imageFileFilter;
//# sourceMappingURL=filefilter.middleware.js.map