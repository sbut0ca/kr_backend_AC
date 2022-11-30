import { Router } from 'express';
import { DocumentsController as Controller} from '../controllers/DocumentsContoller';

export const DocumentsRoute = Router();

DocumentsRoute.get('/', Controller.getAll);
DocumentsRoute.get('/:id', Controller.getByID);
DocumentsRoute.post('/', Controller.create);
DocumentsRoute.put('/:id', Controller.update);
DocumentsRoute.delete('/:id', Controller.delete);