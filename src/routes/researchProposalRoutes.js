import express from "express";
import { ResearchProposalController } from "../controllers/researchProposalController.js";


const router = express.Router();


router.get("/", ResearchProposalController.getAll);
router.get("/:id", ResearchProposalController.getById);
router.post("/", ResearchProposalController.create);
router.put("/:id", ResearchProposalController.update);
router.delete("/:id", ResearchProposalController.delete);


export default router;