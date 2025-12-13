import ResearchProposalRepository from "../repositories/researchProposalRepository.js";

const ResearchProposalService = {
    
    async create(data) {
        return await ResearchProposalRepository.createResearchProposal(data);
    },

    async getAll() {
        return await ResearchProposalRepository.getAllResearchProposals();  // FIXED
    },

    async getById(id) {
        return await ResearchProposalRepository.getResearchProposalById(id);  // FIXED
    },

    async update(id, data) {
        return await ResearchProposalRepository.updateResearchProposal(id, data); // FIXED
    },

    async delete(id) {
        return await ResearchProposalRepository.deleteResearchProposal(id); // FIXED
    }
};

export default ResearchProposalService;
