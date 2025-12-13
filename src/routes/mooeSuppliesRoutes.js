// src/routes/mooeSuppliesRoutes.js
import express from "express";
import MooeSuppliesController from "../controllers/mooeSuppliesController.js";

const router = express.Router();

router.post("/", MooeSuppliesController.create);
router.get("/", MooeSuppliesController.getAll);
router.get("/:id", MooeSuppliesController.getById);
router.put("/:id", MooeSuppliesController.update);
router.delete("/:id", MooeSuppliesController.delete);

export default router;
