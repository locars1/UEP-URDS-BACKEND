// src/repositories/budgetSummaryRepository.js
import { db } from "../config/db.js";

const BudgetSummaryRepository = {
    create: async (data) => {
        const query = `
            INSERT INTO budget_summary
            (research_id, research_leader, duration, college, grand_total, prepared_by, approved_by)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.research_id,
            data.research_leader,
            data.duration,
            data.college,
            data.grand_total,
            data.prepared_by,
            data.approved_by
        ];

        const [result] = await db.query(query, values);
        return result.insertId;
    },

    getAll: async () => {
        const query = `SELECT * FROM budget_summary ORDER BY timestamp DESC`;
        const [rows] = await db.query(query);
        return rows;
    },

    getById: async (id) => {
        const query = `SELECT * FROM budget_summary WHERE budgetsummary_id = ?`;
        const [rows] = await db.query(query, [id]);
        return rows[0];
    },

    update: async (id, data) => {
        const query = `
            UPDATE budget_summary SET
                research_id = ?,
                research_leader = ?,
                duration = ?,
                college = ?,
                grand_total = ?,
                prepared_by = ?,
                approved_by = ?
            WHERE budgetsummary_id = ?
        `;
        const values = [
            data.research_id,
            data.research_leader,
            data.duration,
            data.college,
            data.grand_total,
            data.prepared_by,
            data.approved_by,
            id
        ];

        const [result] = await db.query(query, values);
        return result;
    },

    delete: async (id) => {
        const query = `DELETE FROM budget_summary WHERE budgetsummary_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

export default BudgetSummaryRepository;
