import { Router } from 'express';
import { FTPController as Controller} from '../controllers/FTPController';

export const FTPRoute = Router();

FTPRoute.post('/upload', Controller.upload);
FTPRoute.post('/download', Controller.download);
FTPRoute.post('/ls', Controller.ls);
FTPRoute.post('/delete', Controller.delete);