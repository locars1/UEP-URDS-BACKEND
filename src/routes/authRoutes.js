// routes/authRoutes.js
import express from "express";
import { authController } from "../controllers/authController.js";

const router = express.Router();

// Login endpoint
router.post("/login", authController.login);

export default router;
