"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoute = void 0;
const express_1 = require("express");
const UserRoute_1 = require("./routes/UserRoute");
const DocumentsRoute_1 = require("./routes/DocumentsRoute");
const FTPRoute_1 = require("./routes/FTPRoute");
exports.defaultRoute = (0, express_1.Router)();
exports.defaultRoute.get('/', (req, res) => {
    res.send({ error: "invalid url" });
});
exports.defaultRoute.use('/users', UserRoute_1.UsersRoute);
exports.defaultRoute.use('/documents', DocumentsRoute_1.DocumentsRoute);
exports.defaultRoute.use('/ftp', FTPRoute_1.FTPRoute);
