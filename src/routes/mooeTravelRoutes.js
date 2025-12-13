// src/routes/mooeTravelRoutes.js
import express from "express";
import * as MooeTravelController from "../controllers/mooeTravelController.js";

const router = express.Router();

router.post("/", MooeTravelController.create);
router.get("/", MooeTravelController.getAll);
router.get("/:id", MooeTravelController.getById);
router.put("/:id", MooeTravelController.update);
router.delete("/:id", MooeTravelController.remove);

export default router;
