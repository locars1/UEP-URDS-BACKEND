// repositories/authRepository.js
import { db } from "../config/db.js";

export const authRepository = {
  async findUserByEmail(email) {
    const [rows] = await db.query(
      `SELECT * FROM user WHERE email = ?`,
      [email]
    );
    return rows[0];
  } 
};
