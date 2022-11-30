import {models} from '../modelsController';
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class LogTypeController extends IRest {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Role.findAll({
            attributes: [
                'Type',



            ]
        });
        res.send(data);
    }
    static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Role.findByPk(req.params.id, {
            attributes: [
                'Type',

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


        models.LogType.create({
            Type: req.body.LogType


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

        const oldLogType = await models.LogType.findByPk(req.params.id);

        models.LogType.update({
            Type: req.body.LogType || oldLogType?.Type


        }, {where: {idLogType: req.params.id}})
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
        models.LogType.destroy({where: {idLogType: req.params.id}})
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
