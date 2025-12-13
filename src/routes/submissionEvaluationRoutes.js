// src/routes/submissionEvaluationRoutes.js
import express from "express";
import { createEvaluation, getAllEvaluations, getEvaluationById, updateEvaluation, deleteEvaluation } from "../controllers/submissionEvaluationController.js";

const router = express.Router();

router.post("/", createEvaluation);
router.get("/", getAllEvaluations);
router.get("/:id", getEvaluationById);
router.put("/:id", updateEvaluation);
router.delete("/:id", deleteEvaluation);

export default router;
