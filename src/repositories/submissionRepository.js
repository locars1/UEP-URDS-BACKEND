// src/repositories/submissionRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE (Research Proposal + Submission)
    async createSubmission(data) {
        const connection = await db.getConnection();

        try {
            await connection.beginTransaction();

            /* ===============================
               1️⃣ INSERT INTO research_proposal
               =============================== */
            const researchSql = `
                INSERT INTO research_proposal (
                    research_title,
                    research_type,
                    leader,
                    members,
                    location,
                    duration,
                    annual_budget,
                    rationale,
                    objectives,
                    rrl,
                    methodology,
                    prepared_by,
                    endorsed_by,
                    recommending_approval
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const researchValues = [
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

            const [researchResult] = await connection.query(
                researchSql,
                researchValues
            );

            const research_id = researchResult.insertId;

            /* ===============================
               2️⃣ INSERT INTO submission
               =============================== */
            const submissionSql = `
                INSERT INTO submission (
                    research_id,
                    budget_id,
                    workplan_id,
                    status,
                    version_number
                ) VALUES (?, ?, ?, ?, ?)
            `;

            const submissionValues = [
                research_id,
                data.budget_id,
                data.workplan_id,
                data.status || "submitted",
                data.version_number || 1
            ];

            const [submissionResult] = await connection.query(
                submissionSql,
                submissionValues
            );

            await connection.commit();

            return {
                submission_id: submissionResult.insertId,
                research_id
            };

        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    },

    // GET ALL
    getAllSubmissions() {
        const sql = `
            SELECT s.*,
             r.research_title,
              r.research_type,
              r.leader,
              r.college
            FROM submission s
            JOIN research_proposal r ON s.research_id = r.research_id
            ORDER BY s.submission_id DESC
        `;
        return db.query(sql).then(([rows]) => rows);
    },

    // GET ONE
    getSubmissionById(id) {
        const sql = `
            SELECT s.*, r.*
            FROM submission s
            JOIN research_proposal r ON s.research_id = r.research_id
            WHERE s.submission_id = ?
        `;
        return db.query(sql, [id]).then(([rows]) => rows[0]);
    },

    // UPDATE
    updateSubmission(id, data) {
        const sql = `
            UPDATE submission SET
                status = ?, version_number = ?
            WHERE submission_id = ?
        `;
        const values = [
            data.status,
            data.version_number,
            id
        ];
        return db.query(sql, values);
    },

    // DELETE
    deleteSubmission(id) {
        const sql = "DELETE FROM submission WHERE submission_id = ?";
        return db.query(sql, [id]);
    },

    getSubmissionsByCollege(collegeName) {
    const sql = `
        SELECT s.*,
               r.research_title,
               r.research_type,
               r.leader,
               r.college
        FROM submission s
        JOIN research_proposal r ON s.research_id = r.research_id
        WHERE r.college LIKE ?
        ORDER BY s.submission_id DESC
    `;
    return db.query(sql, [`%${collegeName}%`]).then(([rows]) => rows);
}
};

