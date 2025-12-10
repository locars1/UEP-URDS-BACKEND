// src/controllers/researchProposalController.js
import ResearchProposalService from "../services/researchProposalService.js";

const ResearchProposalController = {
    createProposal: async (req, res) => {
        console.log("📥 RECEIVED BODY:", req.body);
        try {
            const newId = await ResearchProposalService.createProposal(req.body);
            res.status(201).json({
                message: "Research proposal created successfully",
                research_id: newId
            });
        } catch (error) {
            console.error("🔥 CREATE RESEARCH PROPOSAL ERROR:", error);
            res.status(500).json({ error: "Failed to create research proposal" });
        }
    },

    getAllProposals: async (req, res) => {
        try {
            const proposals = await ResearchProposalService.getAllProposals();
            res.json(proposals);
        } catch (error) {
            console.error("🔥 FETCH RESEARCH PROPOSAL ERROR:", error);
            res.status(500).json({ error: "Failed to fetch research proposals" });
        }
    },

    getProposalById: async (req, res) => {
        try {
            const proposal = await ResearchProposalService.getProposalById(req.params.id);
            if (!proposal) return res.status(404).json({ message: "Research proposal not found" });
            res.json(proposal);
        } catch (error) {
            console.error("🔥 FETCH RESEARCH PROPOSAL ERROR:", error);
            res.status(500).json({ error: "Failed to fetch research proposal" });
        }
    },

    updateProposal: async (req, res) => {
        try {
            await ResearchProposalService.updateProposal(req.params.id, req.body);
            res.json({ message: "Research proposal updated successfully" });
        } catch (error) {
            console.error("🔥 UPDATE RESEARCH PROPOSAL ERROR:", error);
            res.status(500).json({ error: "Failed to update research proposal" });
        }
    },

    deleteProposal: async (req, res) => {
        try {
            await ResearchProposalService.deleteProposal(req.params.id);
            res.json({ message: "Research proposal deleted successfully" });
        } catch (error) {
            console.error("🔥 DELETE RESEARCH PROPOSAL ERROR:", error);
            res.status(500).json({ error: "Failed to delete research proposal" });
        }
    }
};

export default ResearchProposalController;
