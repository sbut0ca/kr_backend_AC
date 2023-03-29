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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTPController = void 0;
var EasyFtp = require("easy-ftp");
var ftp = new EasyFtp();
const config_1 = require("../../configs/config");
const config = config_1.ftp_config;
const basePath = '/home/ftpuser/';
class FTPController {
}
exports.FTPController = FTPController;
_a = FTPController;
// грузим файл
// параметры: files.file - загружаемый файл
//            body.path - путь для загрузки
FTPController.upload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.files.file;
    ftp.connect(config);
    ftp.upload(file.tempFilePath, `${basePath}/${req.body.path}/${file.name}`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {
            res.status(200).send('good');
        }
        ftp.close();
    });
});
// получаем информацию о файле
// параметры: body.path - путь файла на FTP
FTPController.download = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    ftp.connect(config);
    ftp.download(`${basePath}/${req.body.path}`, `/tmp/downloads/${req.body.path}`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {
            res.sendFile(`/tmp/downloads/${req.body.path}`);
        }
        ftp.close();
    });
});
// получаем список файлов/директорий
// параметры: body.path - путь директории на FTP
FTPController.ls = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    ftp.connect(config);
    ftp.ls(`${basePath}/${req.body.path}`, (err, list) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {
            res.send(list);
        }
        ftp.close();
    });
});
// удаляем файл/директорию
// параметры: body.path - путь до файла/директории
FTPController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    ftp.connect(config);
    ftp.rm(`${basePath}/${req.body.path}`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {
            res.status(200).send('good');
        }
        ftp.close();
    });
});
