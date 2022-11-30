import { Router } from 'express';
import {UsersRoute} from "./routes/UserRoute";
import {DocumentsRoute} from "./routes/DocumentsRoute";
import {FTPRoute} from "./routes/FTPRoute";

export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
    res.send({error: "invalid url"});
});

defaultRoute.use('/users', UsersRoute);
defaultRoute.use('/documents', DocumentsRoute);
defaultRoute.use('/ftp', FTPRoute)