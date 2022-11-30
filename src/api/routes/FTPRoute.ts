import { Router } from 'express';
import { FTPController as Controller} from '../controllers/FTPController';

export const FTPRoute = Router();

FTPRoute.get('/upload', Controller.upload);