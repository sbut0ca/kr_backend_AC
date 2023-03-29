import { Router } from 'express';
import { LogTypeController as Controller} from '../controllers/LogTypeController';

export const LogTypeRoute = Router();

// LogTypeRoute.get('/', Controller.getAll);
// LogTypeRoute.get('/:id', Controller.getByID);
// LogTypeRoute.post('/', Controller.create);
// LogTypeRoute.put('/:id', Controller.update);
// LogTypeRoute.delete('/:id', Controller.delete);