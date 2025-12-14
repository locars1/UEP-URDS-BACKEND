// services/authService.js
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwt.js";
import { authRepository } from "../repositories/authRepository.js";

export const authService = {

  /* ---------------------------------------------------------
      LOGIN FUNCTION
  --------------------------------------------------------- */
  async login(username, password) {
    // 1. Find user by username
    const user = await userRepository.findByUsername(username);
    if (!user) return { success: false, message: "User not found." };

    // 2. Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return { success: false, message: "Invalid password." };
    }

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

    // 4. Generate JWT
    const token = generateToken({
      userID: user.userID,
      roleID: user.roleID,
      role_name: user.role_name,
      username: user.username
    });

    // 5. Return response
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
        username: user.username
      }
    };
  },

  /* ---------------------------------------------------------
      REGISTER FUNCTION
  --------------------------------------------------------- */
 async register({ collegeID, fname, mname, lname, username, password }) {
  // 1. Check if username exists
  const existingUser = await authRepository.findByUsername(username);
  if (existingUser) {
    return { success: false, message: "Username already exists" };
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Create user with roleID = 5
  await authRepository.createUser({
    collegeID,
    fname,
    mname,
    lname,
    username,
    password: hashedPassword,
    status: "active",
    roleID: 5 // automatically assign role 5
  });

  return { success: true, message: "User registered successfully" };
}

};
