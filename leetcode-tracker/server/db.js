require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host:'localhost',
  user: process.env.USERNAME,
  password:process.env.PASSWORD,
  database: process.env.DATABASE
});

module.exports = pool;