// controllers/userController.js
import { userService } from "../services/userService.js";

export const userController = {
  /* ---------------------------------------------------------
      CREATE USER
  --------------------------------------------------------- */
  async create(req, res) {
    try {
      const { roleID, collegeID, fname, mname, lname, username, password, status } = req.body;

      // Basic validation
      if (!roleID || !fname || !lname || !username || !password) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const userId = await userService.createUser({
        roleID,
        collegeID: collegeID || null,
        fname,
        mname: mname || "",
        lname,
        username,
        password,
        status: status || "active",
      });

      return res.status(201).json({ message: "User created successfully", userID: userId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to create user", error: err.message });
    }
  },

  /* ---------------------------------------------------------
      GET ALL USERS
  --------------------------------------------------------- */
  async getAll(req, res) {
    const users = await userService.getAllUsers();
    return res.json(users);
  },

  /* ---------------------------------------------------------
      GET USER BY ID
  --------------------------------------------------------- */
  async getById(req, res) {
    const user = await userService.getUserById(req.params.userID);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  },

  /* ---------------------------------------------------------
      GET USERS BY FIRST NAME
  --------------------------------------------------------- */
  async getByFname(req, res) {
    const users = await userService.getUsersByFname(req.params.fname);
    return res.json(users);
  },

  /* ---------------------------------------------------------
      GET USERS BY ROLE
  --------------------------------------------------------- */
  async getByRole(req, res) {
    const users = await userService.getUsersByRole(req.params.roleID);
    return res.json(users);
  },

  /* ---------------------------------------------------------
      UPDATE USER
  --------------------------------------------------------- */
  async update(req, res) {
    const updated = await userService.updateUser(req.params.userID, req.body);
    if (!updated)
      return res.status(404).json({ message: "User not found or not updated" });

    return res.json({ message: "User updated successfully" });
  },

  /* ---------------------------------------------------------
      DELETE USER BY ID
  --------------------------------------------------------- */
  async deleteById(req, res) {
    const deleted = await userService.deleteUserById(req.params.userID);
    if (!deleted)
      return res.status(404).json({ message: "User not found" });

    return res.json({ message: "User deleted successfully" });
  },

  /* ---------------------------------------------------------
      DELETE ALL USERS
  --------------------------------------------------------- */
  async deleteAll(req, res) {
    const count = await userService.deleteAllUsers();
    return res.json({ message: `Deleted ${count} users` });
  }
};
