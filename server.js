// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import Routes
import authRoutes from "./src/routes/authRoutes.js"
import userRoutes from "./src/routes/userRoutes.js";
import roleRoutes from "./src/routes/roleRoutes.js";
import collegeRoutes from "./src/routes/collegeRoutes.js";
import announcementRoutes from "./src/routes/announcementRoutes.js";
import researchProposalRoutes from "./src/routes/researchProposalRoutes.js";
import budgetSummaryRoutes from "./src/routes/budgetSummaryRoutes.js";
import personalServicesRoutes from './src/routes/personalServicesRoutes.js';
import mooeTravelRoutes from "./src/routes/mooeTravelRoutes.js";
import mooeSuppliesRoutes from "./src/routes/mooeSuppliesRoutes.js";
import mooeCommunicationsRoutes from "./src/routes/mooeCommunicationsRoutes.js";
import mooeContractLaborRoutes from "./src/routes/mooeContractLaborRoutes.js";
import mooeEquipmentOutlayRoutes from "./src/routes/mooeEquipmentOutlayRoutes.js";
import workplanRoutes from "./src/routes/workplanRoutes.js";
import workplanActivityRoutes from "./src/routes/workplanActivityRoutes.js";
import workplanScheduleRoutes from "./src/routes/workplanScheduleRoutes.js";
import submissionRoutes from "./src/routes/submissionRoutes.js";
import submissionEvaluationRoutes from "./src/routes/submissionEvaluationRoutes.js";
import approvalNotificationRoutes from "./src/routes/approvalNotificationRoutes.js";

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
app.use("/api/users",  userRoutes); // protected routes = app.use("/api/users", authenticate, userRoutes)
app.use("/api/roles", authenticate, roleRoutes); // protected routes
app.use("/api/colleges", authenticate, collegeRoutes); // protected routes

app.use("/api/announcements", announcementRoutes);
app.use("/api/research-proposal", researchProposalRoutes);
app.use("/api/budget-summary", budgetSummaryRoutes);
app.use("/api/mooe-travel", mooeTravelRoutes);
app.use("/api/mooe-supplies", mooeSuppliesRoutes);
app.use("/api/mooe-communications", mooeCommunicationsRoutes);
app.use("/api/mooe-contract-labor", mooeContractLaborRoutes);
app.use("/api/mooe-equipment-outlay", mooeEquipmentOutlayRoutes);
app.use("/api/workplans", workplanRoutes);
app.use("/api/workplan-activities", workplanActivityRoutes);
app.use("/api/workplan-schedules", workplanScheduleRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/evaluations", submissionEvaluationRoutes);
app.use("/api/approval-notifications", approvalNotificationRoutes);


app.use('/api/personal-services', personalServicesRoutes);



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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
