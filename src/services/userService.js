// services/userService.js
import { userRepository } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export const userService = {
  /* ---------------------------------------------------------
      CREATE USER (with hashed password)
  --------------------------------------------------------- */
  async createUser(userData) {
    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;

    // Save the user
    const userId = await userRepository.create(userData);
    return userId;
  },

  /* ---------------------------------------------------------
      GET ALL USERS
  --------------------------------------------------------- */
  async getAllUsers() {
    return await userRepository.getAll();
  },

  /* ---------------------------------------------------------
      GET USER BY ID
  --------------------------------------------------------- */
  async getUserById(userID) {
    return await userRepository.getById(userID);
  },

  /* ---------------------------------------------------------
      GET USERS BY FIRST NAME
  --------------------------------------------------------- */
  async getUsersByFname(fname) {
    return await userRepository.getByFname(fname);
  },

  /* ---------------------------------------------------------
      GET USERS BY ROLE
  --------------------------------------------------------- */
  async getUsersByRole(roleID) {
    return await userRepository.getByRole(roleID);
  },

  /* ---------------------------------------------------------
      UPDATE USER (optional password hashing)
  --------------------------------------------------------- */
  async updateUser(userID, fields) {
    // If password is being updated, hash it
    if (fields.password) {
      const saltRounds = 10;
      fields.password = await bcrypt.hash(fields.password, saltRounds);
    }
    return await userRepository.update(userID, fields);
  },

  /* ---------------------------------------------------------
      DELETE USER BY ID
  --------------------------------------------------------- */
  async deleteUserById(userID) {
    return await userRepository.deleteById(userID);
  },

  /* ---------------------------------------------------------
      DELETE ALL USERS
  --------------------------------------------------------- */
  async deleteAllUsers() {
    return await userRepository.deleteAll();
  }
};
