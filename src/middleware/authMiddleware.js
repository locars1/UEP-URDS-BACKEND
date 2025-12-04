// middleware/auth.middleware.js
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository.js";

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Access denied. No token." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user info from DB including role_name
    const user = await userRepository.getById(decoded.userID);
    if (!user)
      return res.status(401).json({ message: "User not found" });

    req.user = user; // attach full user object (including role_name)
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
