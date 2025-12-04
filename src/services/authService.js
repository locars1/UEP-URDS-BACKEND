// services/authService.js
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwt.js";

export const authService = {
  /* ---------------------------------------------------------
      LOGIN FUNCTION
  --------------------------------------------------------- */
  async login(email, password) {
    // 1. Find user by email
    const user = await userRepository.findByEmail(email);
    if (!user) return { success: false, message: "User not found." };

    // 2. Verify password (hashed)
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return { success: false, message: "Invalid password." };

    // 3. Optional: restrict login to certain roles
    const allowedRoles = [
      "URDS DIRECTOR",
      "COLLEGE DEAN",
      "SENIOR FACULTY RESEARCHER",
      "RESEARCH COORDINATOR",
      "FACULTY RESEARCHER",
      "EVALUATOR"
    ];

    if (!allowedRoles.includes(user.role_name)) {
      return { success: false, message: "Role not allowed to login." };
    }

    // 4. Generate JWT including role info
    const token = generateToken({
      userID: user.userID,
      roleID: user.roleID,
      role_name: user.role_name,
      email: user.email
    });

    // 5. Return user info and token
    return {
      success: true,
      message: "Login successful",
      token,
      user: {
        userID: user.userID,
        roleID: user.roleID,
        role_name: user.role_name,
        fname: user.fname,
        lname: user.lname,
        email: user.email
      }
    };
  }
};
