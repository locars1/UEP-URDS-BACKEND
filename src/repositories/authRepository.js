import { db } from "../config/db.js";

export const authRepository = {

  // 🔎 Find user by email (existing)
  async findUserByEmail(email) {
    const [rows] = await db.query(
      `SELECT * FROM user WHERE email = ?`,
      [email]
    );
    return rows[0];
  },

  // 🔎 Find user by username (for register/login)
  async findByUsername(username) {
    const [rows] = await db.query(
      `SELECT * FROM user WHERE username = ?`,
      [username]
    );
    return rows[0];
  },

  // 📝 Create new user (for registration)
  async createUser({ collegeID, fname, mname, lname, username, password, status, roleID }) {
  await db.query(
    `INSERT INTO user
     (collegeID, fname, mname, lname, username, password, status, roleID, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
    [
      collegeID,
      fname,
      mname || null,
      lname,
      username,
      password,
      status || "active",
      roleID || 5 // Automatically set roleID = 5 if not provided
    ]
  );
}
};
