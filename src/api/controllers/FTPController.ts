
import { Request, Response } from 'express';
var EasyFtp = require("easy-ftp");
var ftp = new EasyFtp();
import {ftp_config} from '../../configs/config';

const config = ftp_config
const basePath = '/home/ftpuser/'

export class FTPController {

    // грузим файл
    // параметры: files.file - загружаемый файл
    //            body.path - путь для загрузки
    public static upload = async (req: any, res: Response) => {
        const file = req.files.file;
        ftp.connect(config)
        ftp.upload(file.tempFilePath, `${basePath}/${req.body.path}/${file.name}`, (err: any) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else {
                res.status(200).send('good');
            }
            ftp.close();
        });
    }

    // получаем информацию о файле
    // параметры: body.path - путь файла на FTP
    public static download = async (req: Request, res: Response) => {
        ftp.connect(config)
        ftp.download(`${basePath}/${req.body.path}`, `/tmp/downloads/${req.body.path}`, (err: any) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else {
                res.sendFile(`/tmp/downloads/${req.body.path}`);
            }
            ftp.close();
        })
    }

    // получаем список файлов/директорий
    // параметры: body.path - путь директории на FTP
    public static ls = async (req: Request, res: Response) => {
        ftp.connect(config)
        ftp.ls(`${basePath}/${req.body.path}`, (err: any, list: any) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else {
                res.send(list)
            }
            ftp.close();
        })
    }

    // удаляем файл/директорию
    // параметры: body.path - путь до файла/директории
    public static delete = async (req: Request, res: Response) => {
        ftp.connect(config)
        ftp.rm(`${basePath}/${req.body.path}`, (err: any) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send(err);
              } else {
                  res.status(200).send('good');
              }
              ftp.close();
        });
    }
}

