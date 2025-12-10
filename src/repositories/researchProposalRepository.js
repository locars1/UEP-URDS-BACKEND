// src/repositories/researchProposalRepository.js
import { db } from "../config/db.js";
import ResearchProposal from "../models/ResearchProposal.js";

const ResearchProposalRepository = {
    createProposal: async (data) => {
        const query = `
            INSERT INTO research_proposal
            (research_name, research_type, leader, members, location, duration, annual_budget,
             rationale, objectives, review_of_literature, methodology, prepared_by,
             endorsed_by, recommending_approval, user_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.research_name,
            data.research_type,
            data.leader,
            data.members,
            data.location,
            data.duration,
            data.annual_budget,
            data.rationale,
            data.objectives,
            data.review_of_literature,
            data.methodology,
            data.prepared_by,
            data.endorsed_by,
            data.recommending_approval,
            data.user_id
        ];

        const [result] = await db.query(query, values);
        return result.insertId;
    },

    getAllProposals: async () => {
        const query = `
            SELECT rp.*, u.fname, u.lname
            FROM research_proposal rp
            JOIN user u ON rp.user_id = u.userID
            ORDER BY rp.timestamp DESC
        `;
        const [rows] = await db.query(query);
        return rows.map(row => new ResearchProposal(row));
    },

    getProposalById: async (id) => {
        const query = `SELECT * FROM research_proposal WHERE research_id = ?`;
        const [rows] = await db.query(query, [id]);
        if (!rows[0]) return null;
        return new ResearchProposal(rows[0]);
    },

    updateProposal: async (id, data) => {
        const query = `
            UPDATE research_proposal SET
                research_name = ?,
                research_type = ?,
                leader = ?,
                members = ?,
                location = ?,
                duration = ?,
                annual_budget = ?,
                rationale = ?,
                objectives = ?,
                review_of_literature = ?,
                methodology = ?,
                prepared_by = ?,
                endorsed_by = ?,
                recommending_approval = ?,
                user_id = ?
            WHERE research_id = ?
        `;
        const values = [
            data.research_name,
            data.research_type,
            data.leader,
            data.members,
            data.location,
            data.duration,
            data.annual_budget,
            data.rationale,
            data.objectives,
            data.review_of_literature,
            data.methodology,
            data.prepared_by,
            data.endorsed_by,
            data.recommending_approval,
            data.user_id,
            id
        ];

        const [result] = await db.query(query, values);
        return result;
    },

    deleteProposal: async (id) => {
        const query = `DELETE FROM research_proposal WHERE research_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

export default ResearchProposalRepository;
