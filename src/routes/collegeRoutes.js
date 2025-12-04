// routes/collegeRoutes.js
import express from "express";
import { collegeController } from "../controllers/collegeController.js";

const router = express.Router();

router.get("/", collegeController.getAll);
router.get("/:collegeID", collegeController.getById);
router.get("/search/:name", collegeController.getByName);
router.post("/", collegeController.create);
router.put("/:collegeID", collegeController.update);
router.delete("/:collegeID", collegeController.delete);
router.delete("/", collegeController.deleteAll);

export default router;
