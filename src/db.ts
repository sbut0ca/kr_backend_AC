const Pool = require('pg').Pool;
const parse = require('pg-connection-string').parse;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const config = parse(process.env.DATABASE_URL);

export const db = new Pool(config);

