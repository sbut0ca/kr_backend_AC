"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsRoute = void 0;
const express_1 = require("express");
const DocumentsContoller_1 = require("../controllers/DocumentsContoller");
exports.DocumentsRoute = (0, express_1.Router)();
// DocumentsRoute.get('/', Controller.getAll);
// DocumentsRoute.get('/:id', Controller.getByID);
exports.DocumentsRoute.get('/test/:id', DocumentsContoller_1.DocumentsController.test);
// DocumentsRoute.post('/', Controller.create);
// DocumentsRoute.put('/:id', Controller.update);
// DocumentsRoute.delete('/:id', Controller.delete);