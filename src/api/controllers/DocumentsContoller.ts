import {models} from '../modelsController';
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class DocumentsController extends IRest {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Documents.findAll({
            attributes: [
                'DocumentType',
                'DocumentCode',
                'DocumentName',
                'DocumentDataType'
            ]
        });
        res.status(200).send(data);
    }
    static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Documents.findByPk(req.params.id, {
            attributes: [
                'DocumentType',
                'DocumentCode',
                'DocumentName',
                'DocumentDataType'
            ]
        });
        res.send(data);
    }

    static async create(req: Request, res: Response): Promise<void> {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }


        models.Documents.create({

            DocumentType: req.body.DocumentType,
            DocumentName: req.body.DocumentName,
            DocumentCode: req.body.DocumentCode,
            DocumentDataType: req.body.DocumentDataType,


        })
            .then((data, ) => {
                if (!data)
                    res.status(500).send({
                        error:
                            "Some error occurred while creating."
                    });
                else {
                    res.status(200).send(data)
                }

                ;
            });
    }

    static async update(req: Request, res: Response): Promise<void> {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        const oldDocuments = await models.Documents.findByPk(req.params.id);

        models.Documents.update({
            DocumentType: req.body.DocumentType || oldDocuments?.DocumentType,
            DocumentName: req.body.DocumentName || oldDocuments?.DocumentName,
            DocumentCode: req.body.DocumentCode || oldDocuments?.DocumentCode,
            DocumentDataType: req.body.DocumentDataType || oldDocuments?.DocumentDataType,



        }, {where: {id: req.params.id}})
            .then((data) => {
                if (!data)
                    res.status(500).send({
                        error:
                            "Some error occurred while updating."
                    });
                else res.send(true);
            });
    }

    static async delete(req: Request, res: Response): Promise<void> {
        models.Documents.destroy({where: {id: req.params.id}})
            .then(data => {
                if (!data) {
                    res.status(500).send({
                        error:
                            "Some error occurred while deleting."
                    });
                }
                else res.send(true);
            })
    }


}
