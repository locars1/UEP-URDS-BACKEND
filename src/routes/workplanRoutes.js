// routes/workplanRoutes.js

import express from "express";
import workplanController from "../controllers/workplanController.js";

const router = express.Router();

router.post("/", workplanController.create);
router.get("/", workplanController.getAll);
router.get("/:id", workplanController.getOne);
router.put("/:id", workplanController.update);
router.delete("/:id", workplanController.delete);

export default router;
