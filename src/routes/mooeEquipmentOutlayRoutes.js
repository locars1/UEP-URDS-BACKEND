// src/routes/mooeEquipmentOutlayRoutes.js
import { Router } from "express";
import MooeEquipmentOutlayController from "../controllers/mooeEquipmentOutlayController.js";

const router = Router();

router.post("/", MooeEquipmentOutlayController.create);
router.get("/", MooeEquipmentOutlayController.getAll);
router.get("/:id", MooeEquipmentOutlayController.getById);
router.put("/:id", MooeEquipmentOutlayController.update);
router.delete("/:id", MooeEquipmentOutlayController.delete);

export default router;
