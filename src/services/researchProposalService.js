// src/services/researchProposalService.js
import ResearchProposalRepository from "../repositories/researchProposalRepository.js";

const ResearchProposalService = {
    createProposal: async (data) => {
        return await ResearchProposalRepository.createProposal(data);
    },

    getAllProposals: async () => {
        return await ResearchProposalRepository.getAllProposals();
    },

    getProposalById: async (id) => {
        return await ResearchProposalRepository.getProposalById(id);
    },

    updateProposal: async (id, data) => {
        return await ResearchProposalRepository.updateProposal(id, data);
    },

    deleteProposal: async (id) => {
        return await ResearchProposalRepository.deleteProposal(id);
    }
};

export default ResearchProposalService;
