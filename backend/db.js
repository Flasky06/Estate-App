const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "qwertyui",
  host: "localhost",
  port: 5432,
  database: "estate",
});

module.exports = pool;
