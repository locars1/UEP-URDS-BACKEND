import { db } from "../config/db.js";


export const userRepository = {
  /* ---------------------------------------------------------
      FIND USER BY EMAIL
  --------------------------------------------------------- */
  async findByEmail(email) {
    const [rows] = await db.query(
      `SELECT u.*, r.role_name, c.college_name
       FROM user u
       LEFT JOIN role r ON u.roleID = r.roleID
       LEFT JOIN college c ON u.collegeID = c.collegeID
       WHERE u.email = ?`,
      [email]
    );
    return rows[0];
  },

  /* ---------------------------------------------------------
      CREATE USER
  --------------------------------------------------------- */
  async create(user) {
    const [result] = await db.query(
      `INSERT INTO user (roleID, collegeID, fname, mname, lname, email, password)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.roleID,
        user.collegeID,
        user.fname,
        user.mname,
        user.lname,
        user.email,
        user.password
      ]
    );
    return result.insertId;
  },

  /* ---------------------------------------------------------
      GET ALL USERS
  --------------------------------------------------------- */
  async getAll() {
    const [rows] = await db.query(
      `SELECT u.*, r.role_name, c.college_name
       FROM user u
       LEFT JOIN role r ON u.roleID = r.roleID
       LEFT JOIN college c ON u.collegeID = c.collegeID`
    );
    return rows;
  },

  /* ---------------------------------------------------------
      GET USER BY ID
  --------------------------------------------------------- */
  async getById(userID) {
    const [rows] = await db.query(
      `SELECT u.*, r.role_name, c.college_name
       FROM user u
       LEFT JOIN role r ON u.roleID = r.roleID
       LEFT JOIN college c ON u.collegeID = c.collegeID
       WHERE u.userID = ?`,
      [userID]
    );
    return rows[0];
  },

  /* ---------------------------------------------------------
      GET USERS BY FIRST NAME
  --------------------------------------------------------- */
  async getByFname(fname) {
    const [rows] = await db.query(
      `SELECT u.*, r.role_name, c.college_name
       FROM user u
       LEFT JOIN role r ON u.roleID = r.roleID
       LEFT JOIN college c ON u.collegeID = c.collegeID
       WHERE u.fname LIKE ?`,
      [`%${fname}%`]
    );
    return rows;
  },

  /* ---------------------------------------------------------
      GET USERS BY ROLE ID
  --------------------------------------------------------- */
  async getByRole(roleID) {
    const [rows] = await db.query(
      `SELECT u.*, r.role_name, c.college_name
       FROM user u
       LEFT JOIN role r ON u.roleID = r.roleID
       LEFT JOIN college c ON u.collegeID = c.collegeID
       WHERE u.roleID = ?`,
      [roleID]
    );
    return rows;
  },

  /* ---------------------------------------------------------
      UPDATE USER
  --------------------------------------------------------- */
  async update(userID, fields) {
    const keys = Object.keys(fields);
    const values = Object.values(fields);

    if (keys.length === 0) return false;

    const setQuery = keys.map((k) => `${k} = ?`).join(", ");

    const [result] = await db.query(
      `UPDATE user SET ${setQuery} WHERE userID = ?`,
      [...values, userID]
    );

    return result.affectedRows > 0;
  },

  /* ---------------------------------------------------------
      DELETE USER BY ID
  --------------------------------------------------------- */
  async deleteById(userID) {
    const [result] = await db.query(
      `DELETE FROM user WHERE userID = ?`,
      [userID]
    );
    return result.affectedRows > 0;
  },

  /* ---------------------------------------------------------
      DELETE ALL USERS
  --------------------------------------------------------- */
  async deleteAll() {
    const [result] = await db.query(`DELETE FROM user`);
    return result.affectedRows;
  }
};
