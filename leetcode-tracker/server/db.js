const { Pool } = require('pg');

const pool = new Pool({
  host:'localhost',
  database: 'blind75'
});

module.exports = pool;