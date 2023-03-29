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
const IRest_1 = require("../../interfaces/IRest");
const db_1 = require("../../db");
class DocumentsController extends IRest_1.IRest {
    //     static async getAll(req: Request, res: Response): Promise<void> {
    //         const data = await models.Documents.findAll({
    //             attributes: [
    //                 'DocumentType',
    //                 'DocumentCode',
    //                 'DocumentName',
    //                 'DocumentDataType'
    //             ]
    //         });
    //         res.status(200).send(data);
    //     }
    //     static async getByID(req: Request, res: Response): Promise<void> {
    //         const data = await models.Documents.findByPk(req.params.id, {
    //             attributes: [
    //                 'DocumentType',
    //                 'DocumentCode',
    //                 'DocumentName',
    //                 'DocumentDataType'
    //             ]
    //         });
    //         res.send(data);
    //     }
    //     static async create(req: Request, res: Response): Promise<void> {
    //         if (!req.body) {
    //             res.status(400).send({
    //                 message: "Content can not be empty!"
    //             });
    //         }
    //         models.Documents.create({
    //             DocumentType: req.body.DocumentType,
    //             DocumentName: req.body.DocumentName,
    //             DocumentCode: req.body.DocumentCode,
    //             DocumentDataType: req.body.DocumentDataType,
    //         })
    //             .then((data, ) => {
    //                 if (!data)
    //                     res.status(500).send({
    //                         error:
    //                             "Some error occurred while creating."
    //                     });
    //                 else {
    //                     res.status(200).send(data)
    //                 }
    //                 ;
    //             });
    //     }
    //     static async update(req: Request, res: Response): Promise<void> {
    //         if (!req.body) {
    //             res.status(400).send({
    //                 message: "Content can not be empty!"
    //             });
    //         }
    //         const oldDocuments = await models.Documents.findByPk(req.params.id);
    //         models.Documents.update({
    //             DocumentType: req.body.DocumentType || oldDocuments?.DocumentType,
    //             DocumentName: req.body.DocumentName || oldDocuments?.DocumentName,
    //             DocumentCode: req.body.DocumentCode || oldDocuments?.DocumentCode,
    //             DocumentDataType: req.body.DocumentDataType || oldDocuments?.DocumentDataType,
    //         }, {where: {id: req.params.id}})
    //             .then((data) => {
    //                 if (!data)
    //                     res.status(500).send({
    //                         error:
    //                             "Some error occurred while updating."
    //                     });
    //                 else res.send(true);
    //             });
    //     }
    //     static async delete(req: Request, res: Response): Promise<void> {
    //         models.Documents.destroy({where: {id: req.params.id}})
    //             .then(data => {
    //                 if (!data) {
    //                     res.status(500).send({
    //                         error:
    //                             "Some error occurred while deleting."
    //                     });
    //                 }
    //                 else res.send(true);
    //             })
    //     }
    static test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield db_1.db.query('SELECT name FROM kr_doci WHERE id=$1', [req.params.id]);
            res.send(JSON.stringify(data.rows));
        });
    }
}
exports.DocumentsController = DocumentsController;
