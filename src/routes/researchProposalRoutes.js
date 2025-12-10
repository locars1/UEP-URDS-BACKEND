// src/routes/researchProposalRoutes.js
import express from "express";
import ResearchProposalController from "../controllers/researchProposalController.js";

const router = express.Router();

router.post("/", ResearchProposalController.createProposal);
router.get("/", ResearchProposalController.getAllProposals);
router.get("/:id", ResearchProposalController.getProposalById);
router.put("/:id", ResearchProposalController.updateProposal);
router.delete("/:id", ResearchProposalController.deleteProposal);

export default router;
