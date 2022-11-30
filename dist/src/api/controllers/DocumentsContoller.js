"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsController = void 0;
const modelsController_1 = require("../modelsController");
const IRest_1 = require("../../interfaces/IRest");
class DocumentsController extends IRest_1.IRest {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield modelsController_1.models.Documents.findAll({
                attributes: [
                    'DocumentType',
                    'DocumentCode',
                    'DocumentData',
                    'DocumentDataType',
                ]
            });
            res.send(data);
        });
    }
    static getByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield modelsController_1.models.Documents.findByPk(req.params.id, {
                attributes: [
                    'DocumentType',
                    'DocumentCode',
                    'DocumentData',
                    'DocumentDataType',
                ]
            });
            res.send(data);
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
            }
            modelsController_1.models.Documents.create({
                DocumentType: req.body.DocumentType,
                DocumentName: req.body.DocumentName,
                DocumentCode: req.body.DocumentCode,
                DocumentDataType: req.body.DocumentDataType,
            })
                .then((data) => {
                if (!data)
                    res.status(500).send({
                        error: "Some error occurred while creating."
                    });
                else {
                    res.status(200).send(data);
                }
                ;
            });
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
            }
            const oldDocuments = yield modelsController_1.models.Documents.findByPk(req.params.id);
            modelsController_1.models.Documents.update({
                DocumentType: req.body.DocumentType || (oldDocuments === null || oldDocuments === void 0 ? void 0 : oldDocuments.DocumentType),
                DocumentName: req.body.DocumentName || (oldDocuments === null || oldDocuments === void 0 ? void 0 : oldDocuments.DocumentName),
                DocumentCode: req.body.DocumentCode || (oldDocuments === null || oldDocuments === void 0 ? void 0 : oldDocuments.DocumentCode),
                DocumentDataType: req.body.DocumentDataType || (oldDocuments === null || oldDocuments === void 0 ? void 0 : oldDocuments.DocumentDataType),
            }, { where: { id: req.params.id } })
                .then((data) => {
                if (!data)
                    res.status(500).send({
                        error: "Some error occurred while updating."
                    });
                else
                    res.send(true);
            });
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            modelsController_1.models.Documents.destroy({ where: { id: req.params.id } })
                .then(data => {
                if (!data) {
                    res.status(500).send({
                        error: "Some error occurred while deleting."
                    });
                }
                else
                    res.send(true);
            });
        });
    }
}
exports.DocumentsController = DocumentsController;
