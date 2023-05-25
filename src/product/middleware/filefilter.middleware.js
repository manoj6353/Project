"use strict";
exports.__esModule = true;
exports.imageFileFilter = exports.editFileName = void 0;
var path_1 = require("path");
var editFileName = function (req, file, callback) {
    var name = file.originalname.split('.')[0];
    var fileExtensionName = (0, path_1.extname)(file.originalname);
    var randomeName = Date.now();
    callback(null, randomeName + '-' + name + fileExtensionName);
};
exports.editFileName = editFileName;
var imageFileFilter = function (req, file, cb) {
    var allowedExtension = ['.jpg', '.jpeg', '.png'];
    var ext = (0, path_1.extname)(file.originalname).toLowerCase();
    if (allowedExtension.includes(ext)) {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file type'));
    }
};
exports.imageFileFilter = imageFileFilter;
