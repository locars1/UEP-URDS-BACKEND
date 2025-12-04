// controllers/authController.js
import { authService } from "../services/authService.js";

export const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password required." });
      }

      const result = await authService.login(email, password);

      if (!result.success) {
        return res.status(401).json({ message: result.message });
      }

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Login error", error: err.message });
    }
  }
};
