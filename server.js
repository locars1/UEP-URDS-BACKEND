// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import Routes
import authRoutes from "./src/routes/authRoutes.js"
import userRoutes from "./src/routes/userRoutes.js";
import roleRoutes from "./src/routes/roleRoutes.js";
import collegeRoutes from "./src/routes/collegeRoutes.js";

// Import Middleware
import { authenticate } from "./src/middleware/authMiddleware.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Test route
app.get("/urds", (req, res) => {
  res.send("URDS Backend API is running");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", authenticate, userRoutes); // protected routes = app.use("/api/users", authenticate, userRoutes)
app.use("/api/roles", authenticate, roleRoutes); // protected routes
app.use("/api/colleges", authenticate, collegeRoutes); // protected routes

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error", error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
