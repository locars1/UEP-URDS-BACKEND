// repositories/collegeRepository.js
import { db } from "../config/db.js";

export const collegeRepository = {
  /* ---------------------------------------------------------
      GET ALL COLLEGES
  --------------------------------------------------------- */
  async getAll() {
    const [rows] = await db.query(`SELECT * FROM college`);
    return rows;
  },

  /* ---------------------------------------------------------
      GET COLLEGE BY ID
  --------------------------------------------------------- */
  async getById(collegeID) {
    const [rows] = await db.query(
      `SELECT * FROM college WHERE collegeID = ?`,
      [collegeID]
    );
    return rows[0];
  },

  /* ---------------------------------------------------------
      GET COLLEGE BY NAME
  --------------------------------------------------------- */
  async getByName(name) {
    const [rows] = await db.query(
      `SELECT * FROM college WHERE college_name LIKE ?`,
      [`%${name}%`]
    );
    return rows;
  },

  /* ---------------------------------------------------------
      CREATE COLLEGE
  --------------------------------------------------------- */
  async create(college) {
    const [result] = await db.query(
      `INSERT INTO college (college_name, college_user_id)
       VALUES (?, ?)`,
      [college.college_name, college.college_user_id]
    );
    return result.insertId;
  },

  /* ---------------------------------------------------------
      UPDATE COLLEGE
  --------------------------------------------------------- */
  async update(collegeID, fields) {
    const keys = Object.keys(fields);
    const values = Object.values(fields);

    if (keys.length === 0) return false;

    const setQuery = keys.map(k => `${k} = ?`).join(", ");

    const [result] = await db.query(
      `UPDATE college SET ${setQuery} WHERE collegeID = ?`,
      [...values, collegeID]
    );

    return result.affectedRows > 0;
  },

  /* ---------------------------------------------------------
      DELETE COLLEGE BY ID
  --------------------------------------------------------- */
  async deleteById(collegeID) {
    const [result] = await db.query(
      `DELETE FROM college WHERE collegeID = ?`,
      [collegeID]
    );
    return result.affectedRows > 0;
  },

  /* ---------------------------------------------------------
      DELETE ALL COLLEGES
  --------------------------------------------------------- */
  async deleteAll() {
    const [result] = await db.query(`DELETE FROM college`);
    return result.affectedRows;
  }
};
