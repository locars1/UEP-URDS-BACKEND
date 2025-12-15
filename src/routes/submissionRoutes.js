import { Router } from "express";
import SubmissionController from "../controllers/submissionController.js";

const router = Router();

// CRUD routes
router.post("/", SubmissionController.create);
router.get("/", SubmissionController.getAll);
router.get("/:id", SubmissionController.getById);
router.put("/:id", SubmissionController.update);
router.delete("/:id", SubmissionController.delete);

// NEW: Get submissions by college
router.get("/by-college", SubmissionController.getByCollege);

export default router;
