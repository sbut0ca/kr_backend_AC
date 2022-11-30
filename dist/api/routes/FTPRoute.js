"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTPRoute = void 0;
const express_1 = require("express");
const FTPController_1 = require("../controllers/FTPController");
exports.FTPRoute = (0, express_1.Router)();
exports.FTPRoute.get('/upload', FTPController_1.FTPController.upload);
