// config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // <-- load .env variables

export const db = mysql.createPool({
  host: process.env.DB_HOST,       // 'localhost'
  user: process.env.DB_USER,       // 'root'
  password: process.env.DB_PASSWORD, // 'locars100'
  database: process.env.DB_NAME,   // 'urds_db'
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


