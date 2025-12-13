// src/routes/submissionRoutes.js
import { Router } from "express";
import SubmissionController from "../controllers/submissionController.js";

const router = Router();

router.post("/", SubmissionController.create);
router.get("/", SubmissionController.getAll);
router.get("/:id", SubmissionController.getById);
router.put("/:id", SubmissionController.update);
router.delete("/:id", SubmissionController.delete);

export default router;
