// src/routes/travelRoutes.js
import express from "express";
import TravelController from "../controllers/travelController.js";

const router = express.Router();

router.post("/", TravelController.createTravel);
router.get("/", TravelController.getAllTravels);
router.get("/:id", TravelController.getTravelById);
router.put("/:id", TravelController.updateTravel);
router.delete("/:id", TravelController.deleteTravel);

export default router;
