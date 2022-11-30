"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoute = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
exports.UsersRoute = (0, express_1.Router)();
exports.UsersRoute.get('/', UserController_1.UserController.getAll);
exports.UsersRoute.get('/:id', UserController_1.UserController.getByID);
exports.UsersRoute.post('/', UserController_1.UserController.create);
exports.UsersRoute.put('/:id', UserController_1.UserController.update);
exports.UsersRoute.delete('/:id', UserController_1.UserController.delete);