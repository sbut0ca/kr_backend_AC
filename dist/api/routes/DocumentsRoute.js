"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsRoute = void 0;
const express_1 = require("express");
const DocumentsContoller_1 = require("../controllers/DocumentsContoller");
exports.DocumentsRoute = (0, express_1.Router)();
exports.DocumentsRoute.get('/', DocumentsContoller_1.DocumentsController.getAll);
exports.DocumentsRoute.get('/:id', DocumentsContoller_1.DocumentsController.getByID);
exports.DocumentsRoute.post('/', DocumentsContoller_1.DocumentsController.create);
exports.DocumentsRoute.put('/:id', DocumentsContoller_1.DocumentsController.update);
exports.DocumentsRoute.delete('/:id', DocumentsContoller_1.DocumentsController.delete);