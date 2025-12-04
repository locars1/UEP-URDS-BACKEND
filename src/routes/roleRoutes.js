// routes/roleRoutes.js
import express from "express";
import { roleController } from "../controllers/roleController.js";

const router = express.Router();

router.get("/", roleController.getAll);
router.get("/:roleID", roleController.getById);
router.get("/search/:name", roleController.getByName);
router.post("/", roleController.create);
router.put("/:roleID", roleController.update);
router.delete("/:roleID", roleController.delete);
router.delete("/", roleController.deleteAll);

export default router;
