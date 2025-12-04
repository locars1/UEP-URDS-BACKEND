// repositories/roleRepository.js
import { db } from "../config/db.js";

export const roleRepository = {
  /* ---------------------------------------------------------
      GET ALL ROLES
  --------------------------------------------------------- */
  async getAll() {
    const [rows] = await db.query(`SELECT * FROM role`);
    return rows;
  },

  /* ---------------------------------------------------------
      GET ROLE BY ID
  --------------------------------------------------------- */
  async getById(roleID) {
    const [rows] = await db.query(
      `SELECT * FROM role WHERE roleID = ?`,
      [roleID]
    );
    return rows[0];
  },

  /* ---------------------------------------------------------
      GET ROLE BY NAME
  --------------------------------------------------------- */
  async getByName(role_name) {
    const [rows] = await db.query(
      `SELECT * FROM role WHERE role_name LIKE ?`,
      [`%${role_name}%`]
    );
    return rows;
  },

  /* ---------------------------------------------------------
      CREATE ROLE
  --------------------------------------------------------- */
  async create(role_name) {
    const [result] = await db.query(
      `INSERT INTO role (role_name) VALUES (?)`,
      [role_name]
    );
    return result.insertId;
  },

  /* ---------------------------------------------------------
      UPDATE ROLE
  --------------------------------------------------------- */
  async update(roleID, fields) {
    const keys = Object.keys(fields);
    const values = Object.values(fields);

    if (keys.length === 0) return false;

    const setQuery = keys.map(k => `${k} = ?`).join(", ");

    const [result] = await db.query(
      `UPDATE role SET ${setQuery} WHERE roleID = ?`,
      [...values, roleID]
    );

    return result.affectedRows > 0;
  },

  /* ---------------------------------------------------------
      DELETE ROLE BY ID
  --------------------------------------------------------- */
  async deleteById(roleID) {
    const [result] = await db.query(
      `DELETE FROM role WHERE roleID = ?`,
      [roleID]
    );
    return result.affectedRows > 0;
  },

  /* ---------------------------------------------------------
      DELETE ALL ROLES
  --------------------------------------------------------- */
  async deleteAll() {
    const [result] = await db.query(`DELETE FROM role`);
    return result.affectedRows;
  }
};
