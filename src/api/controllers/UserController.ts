
import { IUser } from "../../interfaces/IUser";
import { Request, Response } from 'express';
import { read } from 'fs';

export class UserController extends IUser {
  // static async getAll(req: Request, res: Response): Promise<void> {
  //   const data = await models.Users.findAll({
  //     attributes: [
  //       'id',
  //       'FirstName',
  //       'SecondName',
  //       'LastName',
  //       'addres',
  //       'Role_id'
  //     ],
  //     include: [{ all: true }]
  //   });
  //   res.send(data);
  // }
  // static async getByID(req: Request, res: Response): Promise<void> {
  //   const data = await models.Users.findByPk(req.params.id, {
  //     attributes: [
  //       'id',
  //       'FirstName',
  //       'SecondName',
  //       'LastName',
  //       'addres',
  //       'Role_id'
  //     ],
  //     include: [{ all: true }]
  //   });
  //   res.send(data);
  // }

  // static async create(req: Request, res: Response): Promise<void> {
  //   if (!req.body) {
  //     res.status(400).send({
  //       message: "Content can not be empty!"
  //     });
  //   }
  //   models.Users.create({
  //     FirstName: req.body.FirstName,
  //     SecondName: req.body.SecondName,
  //     LastName: req.body.LastName,
  //     addres: req.body.addres,
  //     Role_id: req.body.Role_id,
  //     Login: req.body.Login,
  //     Password: req.body.Password,
  //     Mail: req.body.Mail,
  //     PhoneNumber: req.body.PhoneNumber,


  //   })
  //     .then((data,) => {
  //       if (!data)
  //         res.status(500).send({
  //           error:
  //             "Some error occurred while creating."
  //         });
  //       else {
  //         res.status(200).send(data)
  //       }
  //     });
  // }

  // static async update(req: Request, res: Response): Promise<void> {
  //   if (!req.body) {
  //     res.status(400).send({
  //       message: "Content can not be empty!"
  //     });
  //   }

  //   const oldUser = await models.Users.findByPk(req.params.id);

  //   models.Users.update({
  //     FirstName: req.body.FirstName || oldUser?.FirstName,
  //     LastName: req.body.MiddleName || oldUser?.LastName,
  //     SecondName: req.body.SecondName || oldUser?.SecondName,
  //     addres: req.body.Adress || oldUser?.addres,
  //     Role_id: req.body.ProfessionName || oldUser?.Role_id,
  //   }, { where: { id: req.params.id } })
  //     .then((data) => {
  //       if (!data)
  //         res.status(500).send({
  //           error:
  //             "Some error occurred while updating."
  //         });
  //       else res.send(true);
  //     });
  // }

  // static async delete(req: Request, res: Response): Promise<void> {
  //   models.Users.destroy({ where: { id: req.params.id } })
  //     .then(data => {
  //       if (!data) {
  //         res.status(500).send({
  //           error:
  //             "Some error occurred while deleting."
  //         });
  //       }
  //       else res.send(true);
  //     })
  // }

  // static async auth(req: Request, res: Response): Promise<void> {
  //   console.log(req.body)
  //   if (!req.body) {
  //     res.status(400).send({
  //       message: "Content can not be empty!"
  //     });
  //   }
  //   const data = await models.Users.findOne({
  //     attributes: [
  //       'id',
  //       'Password',
  //     ],
  //     where: { Login: req.body.Login }
  //   });
  //   if (!data) {
  //     res.status(400).send({
  //       message: "UserController don't found."
  //     });
  //     return
  //   }

  //   res.status(req.body.Password === data.Password ? 200 : 401).send(req.body.Password === data.Password);
  // }

  // static async changePassword(req: Request, res: Response): Promise<void> {
  //   if (!req.body) {
  //     res.status(400).send({
  //       message: "Content can not be empty!"
  //     });
  //   }


  //   models.Users.update({
  //     Password: req.body.password
  //   }, { where: { id: req.params.id } })
  //     .then((data) => {
  //       if (!data)
  //         res.status(500).send({
  //           error:
  //             "Some error occurred while updating."
  //         });
  //       else res.send(true);
  //     });
  // }
}
