
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class LogiController extends IRest {
    // static async getAll(req: Request, res: Response): Promise<void> {
    //     const data = await models.Logi.findAll({
    //         attributes: [
    //             'idLogi',
    //             'IdUser',
    //             'IdType',
    //             'IdDocument',


    //         ]
    //     });
    //     res.send(data);
    // }
    // static async getByID(req: Request, res: Response): Promise<void> {
    //     const data = await models.Logi.findByPk(req.params.id, {
    //         attributes: [
    //             'idLogi',
    //             'IdUser',
    //             'IdType',
    //             'IdDocument',


    //         ]
    //     });
    //     res.send(data);
    // }

    // static async create(req: Request, res: Response): Promise<void> {
    //     if (!req.body) {
    //         res.status(400).send({
    //             message: "Content can not be empty!"
    //         });
    //     }


    //     models.Logi.create({

    //         IdUser: req.body.IdUser,
    //         IdDocument: req.body.IdDocument,
    //         IdType: req.body.IdType

    //     })
    //         .then((data, ) => {
    //             if (!data)
    //                 res.status(500).send({
    //                     error:
    //                         "Some error occurred while creating."
    //                 });
    //             else {
    //                 res.status(200).send(data)
    //             }

    //             ;
    //         });
    // }

    // static async update(req: Request, res: Response): Promise<void> {
    //     if (!req.body) {
    //         res.status(400).send({
    //             message: "Content can not be empty!"
    //         });
    //     }

    //     const oldLogi = await models.Logi.findByPk(req.params.id);

    //     models.Logi.update({
    //         IdUser: req.body.IdUser || oldLogi?.IdUser,
    //         IdDocument: req.body.IdDocument|| oldLogi?.IdDocument,
    //         IdType: req.body.IdType || oldLogi?.IdType,


    //     }, {where: {idLogi: req.params.id}})
    //         .then((data) => {
    //             if (!data)
    //                 res.status(500).send({
    //                     error:
    //                         "Some error occurred while updating."
    //                 });
    //             else res.send(true);
    //         });
    // }

    // static async delete(req: Request, res: Response): Promise<void> {
    //     models.Logi.destroy({where: {idLogi: req.params.id}})
    //         .then(data => {
    //             if (!data) {
    //                 res.status(500).send({
    //                     error:
    //                         "Some error occurred while deleting."
    //                 });
    //             }
    //             else res.send(true);
    //         })
    // }


}
