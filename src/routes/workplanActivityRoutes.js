// routes/workplanActivityRoutes.js

import express from "express";
import workplanActivityController from "../controllers/workplanActivityController.js";

const router = express.Router();

// CREATE ACTIVITY
router.post("/", workplanActivityController.create);

// GET ALL ACTIVITIES FOR A WORKPLAN
router.get("/workplan/:workplan_id", workplanActivityController.getByWorkplan);

// GET SINGLE ACTIVITY
router.get("/:id", workplanActivityController.getOne);

// UPDATE ACTIVITY
router.put("/:id", workplanActivityController.update);

// DELETE ACTIVITY
router.delete("/:id", workplanActivityController.delete);

export default router;
