const mysql = require("mysql2");

const access = {
  user: 'root',
  password: 'Test123',
  host: 'localhost',
  port: 3307,
  database: 'userdb',
  connectionLimit : 10,
};

const conn = mysql.createConnection(access);
const pool = mysql.createPool(access);
module.exports = {conn, pool};