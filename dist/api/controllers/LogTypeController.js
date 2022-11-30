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
exports.LogTypeController = void 0;
const modelsController_1 = require("../modelsController");
const IRest_1 = require("../../interfaces/IRest");
class LogTypeController extends IRest_1.IRest {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield modelsController_1.models.Role.findAll({
                attributes: [
                    'Type',
                ]
            });
            res.send(data);
        });
    }
    static getByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield modelsController_1.models.Role.findByPk(req.params.id, {
                attributes: [
                    'Type',
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
            modelsController_1.models.LogType.create({
                Type: req.body.LogType
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
            const oldLogType = yield modelsController_1.models.LogType.findByPk(req.params.id);
            modelsController_1.models.LogType.update({
                Type: req.body.LogType || (oldLogType === null || oldLogType === void 0 ? void 0 : oldLogType.Type)
            }, { where: { idLogType: req.params.id } })
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
            modelsController_1.models.LogType.destroy({ where: { idLogType: req.params.id } })
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
exports.LogTypeController = LogTypeController;
