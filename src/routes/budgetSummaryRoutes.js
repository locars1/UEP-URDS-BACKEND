// src/routes/budgetSummaryRoutes.js
import express from "express";
import BudgetSummaryController from "../controllers/budgetSummaryController.js";

const router = express.Router();

router.post("/", BudgetSummaryController.create);
router.get("/", BudgetSummaryController.getAll);
router.get("/:id", BudgetSummaryController.getById);
router.put("/:id", BudgetSummaryController.update);
router.delete("/:id", BudgetSummaryController.delete);

export default router;
