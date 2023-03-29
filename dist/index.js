"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./api/routes");
// @ts-ignore
const fileupload = require('express-fileupload');
dotenv_1.default.config();
// create server
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send({ error: "invalid url" });
});
const routes = express_1.default.Router();
routes.use(routes_1.defaultRoute);
// main endpoint for api
app.use('/api', routes);
// auth endpoint
// app.post('/auth', UserController.auth);
// init server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
