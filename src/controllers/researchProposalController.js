import  ResearchProposalService  from "../services/researchProposalService.js";


export const ResearchProposalController = {
getAll: async (req, res) => {
try {
const data = await ResearchProposalService.getAll();
res.json(data);
} catch (error) {
res.status(500).json({ error: error.message });
}
},


getById: async (req, res) => {
try {
const data = await ResearchProposalService.getById(req.params.id);
res.json(data);
} catch (error) {
res.status(500).json({ error: error.message });
}
},


create: async (req, res) => {
try {
const data = await ResearchProposalService.create(req.body);
res.json({ message: "Created successfully", data });
} catch (error) {
res.status(500).json({ error: error.message });
}
},


update: async (req, res) => {
try {
const data = await ResearchProposalService.update(req.params.id, req.body);
res.json({ message: "Updated successfully", data });
} catch (error) {
res.status(500).json({ error: error.message });
}
},


delete: async (req, res) => {
try {
await ResearchProposalService.delete(req.params.id);
res.json({ message: "Deleted successfully" });
} catch (error) {
res.status(500).json({ error: error.message });
}
},
};