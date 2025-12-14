// controllers/authController.js
import { authService } from "../services/authService.js";

export const authController = {

  // 🔐 LOGIN
  async login(req, res) {
    try {
      const { username, password } = req.body; // switched from email → username

      if (!username || !password) {
        return res.status(400).json({ message: "Username and password required." });
      }

      const result = await authService.login(username, password);

      if (!result.success) {
        return res.status(401).json({ message: result.message });
      }

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Login error", error: err.message });
    }
  },

  // 📝 REGISTER
  async register(req, res) {
    try {
      const { collegeID, fname, mname, lname, username, password } = req.body;

      // 🔎 Validate required fields
      if (!collegeID || !fname || !lname || !username || !password) {
        return res.status(400).json({ message: "All required fields must be filled." });
      }

      // 🔐 Password validation
      if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long." });
      }

      const result = await authService.register({ collegeID, fname, mname, lname, username, password });

      if (!result.success) {
        return res.status(409).json({ message: result.message });
      }

      return res.status(201).json({ message: "User registered successfully." });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Registration error", error: err.message });
    }
  }
};
