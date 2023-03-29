import { Router } from 'express';
import { LogiController as Controller} from '../controllers/LogiController';

export const LogiRoute = Router();

// LogiRoute.get('/', Controller.getAll);
// LogiRoute.get('/:id', Controller.getByID);
// LogiRoute.post('/', Controller.create);
// LogiRoute.put('/:id', Controller.update);
// LogiRoute.delete('/:id', Controller.delete);