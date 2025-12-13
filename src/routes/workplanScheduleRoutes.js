// routes/workplanScheduleRoutes.js

import express from "express";
import workplanScheduleController from "../controllers/workplanScheduleController.js";

const router = express.Router();

// CREATE
router.post("/", workplanScheduleController.create);

// GET ALL BY ACTIVITY
router.get("/activity/:activity_id", workplanScheduleController.getByActivity);

// GET ONE
router.get("/:id", workplanScheduleController.getOne);

// UPDATE
router.put("/:id", workplanScheduleController.update);

// DELETE
router.delete("/:id", workplanScheduleController.delete);

export default router;
