"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTypeRoute = void 0;
const express_1 = require("express");
const LogTypeController_1 = require("../controllers/LogTypeController");
exports.LogTypeRoute = (0, express_1.Router)();
exports.LogTypeRoute.get('/', LogTypeController_1.LogTypeController.getAll);
exports.LogTypeRoute.get('/:id', LogTypeController_1.LogTypeController.getByID);
exports.LogTypeRoute.post('/', LogTypeController_1.LogTypeController.create);
exports.LogTypeRoute.put('/:id', LogTypeController_1.LogTypeController.update);
exports.LogTypeRoute.delete('/:id', LogTypeController_1.LogTypeController.delete);
