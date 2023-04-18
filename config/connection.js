// require dependencies
const mysql = require('mysql2');
require('dotenv').config();

// create connection to our db
const server = mysql.createConnection({
  user: process.env.user,
  password: process.env.pass,
  database: process.env.db,
  host: 'localhost',
  port: 3306,
});

module.exports = server;
