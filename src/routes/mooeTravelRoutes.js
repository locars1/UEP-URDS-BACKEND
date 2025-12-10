// src/routes/mooeTravelRoutes.js
import express from "express";
import MooeTravelController from "../controllers/mooeTravelController.js";

const router = express.Router();

router.post("/", MooeTravelController.createMooeTravel);
router.get("/", MooeTravelController.getAllMooeTravel);
router.get("/:id", MooeTravelController.getMooeTravelById);
router.put("/:id", MooeTravelController.updateMooeTravel);
router.delete("/:id", MooeTravelController.deleteMooeTravel);

export default router;
