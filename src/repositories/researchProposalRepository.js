// repositories/researchProposalRepository.js
import {db} from "../config/db.js";

export default {
    // CREATE
    createResearchProposal(data) {
        const sql = `
            INSERT INTO research_proposal 
            (research_title, research_type, leader, members, location, duration, annual_budget, rationale, objectives, rrl, methodology, prepared_by, endorsed_by, recommending_approval) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.research_title,
            data.research_type,
            data.leader,
            data.members,
            data.location,
            data.duration,
            data.annual_budget,
            data.rationale,
            data.objectives,
            data.rrl,
            data.methodology,
            data.prepared_by,
            data.endorsed_by,
            data.recommending_approval
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL
    getAllResearchProposals() {
        const sql = "SELECT * FROM research_proposal ORDER BY research_id DESC";

        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getResearchProposalById(id) {
        const sql = "SELECT * FROM research_proposal WHERE research_id = ?";

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateResearchProposal(id, data) {
        const sql = `
            UPDATE research_proposal SET
                research_title = ?, research_type = ?, leader = ?, members = ?, 
                location = ?, duration = ?, annual_budget = ?, rationale = ?, 
                objectives = ?, rrl = ?, methodology = ?, prepared_by = ?, 
                endorsed_by = ?, recommending_approval = ?
            WHERE research_id = ?
        `;

        const values = [
            data.research_title,
            data.research_type,
            data.leader,
            data.members,
            data.location,
            data.duration,
            data.annual_budget,
            data.rationale,
            data.objectives,
            data.rrl,
            data.methodology,
            data.prepared_by,
            data.endorsed_by,
            data.recommending_approval,
            id,
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    deleteResearchProposal(id) {
        const sql = "DELETE FROM research_proposal WHERE research_id = ?";

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
