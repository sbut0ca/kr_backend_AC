"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const Pool = require('pg').Pool;
const parse = require('pg-connection-string').parse;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const config = parse(process.env.DATABASE_URL);
exports.db = new Pool(config);
