"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoute = void 0;
const express_1 = require("express");
const UserRoute_1 = require("./routes/UserRoute");
exports.defaultRoute = (0, express_1.Router)();
exports.defaultRoute.get('/', (req, res) => {
    res.send({ error: "invalid url" });
});
exports.defaultRoute.use('/users', UserRoute_1.UsersRoute);
