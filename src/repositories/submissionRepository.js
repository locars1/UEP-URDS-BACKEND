// src/repositories/submissionRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE
    createSubmission(data) {
        const sql = `
            INSERT INTO submission (research_id, budget_id, workplan_id, status, version_number)
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [
            data.research_id,
            data.budget_id,
            data.workplan_id,
            data.status,
            data.version_number || 1
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL
    getAllSubmissions() {
        const sql = "SELECT * FROM submission ORDER BY submission_id DESC";
        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getSubmissionById(id) {
        const sql = "SELECT * FROM submission WHERE submission_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateSubmission(id, data) {
        const sql = `
            UPDATE submission SET
                research_id = ?, budget_id = ?, workplan_id = ?, status = ?, version_number = ?
            WHERE submission_id = ?
        `;
        const values = [
            data.research_id,
            data.budget_id,
            data.workplan_id,
            data.status,
            data.version_number,
            id
        ];
        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    deleteSubmission(id) {
        const sql = "DELETE FROM submission WHERE submission_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
