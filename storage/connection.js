const mysql = require("mysql2");
require('dotenv').config()

const access = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.SERVER_PORT || '3307',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit : 10,
};

const pool = mysql.createPool(access);
module.exports = {pool};