const mysql = require("mysql2");

const pool = mysql.createPool({
  // host: config.mysql.host,
  // port: config.mysql.port,
  // user: config.mysql.user,
  // password: config.mysql.password,
  // database: config.mysql.database,
  // connectionLimit: config.mysql.connectionLimit,
  // ssl: config.mysql.ssl,
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "150323",
});

module.exports = pool.promise();
