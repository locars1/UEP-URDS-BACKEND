// src/repositories/submissionEvaluationRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE
    createEvaluation(data) {
        const sql = `
            INSERT INTO submission_evaluation
            (submission_id, evaluator_id, evaluator_role, comment, suggestion, rating)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.submission_id,
            data.evaluator_id,
            data.evaluator_role,
            data.comment,
            data.suggestion,
            data.rating
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL
    getAllEvaluations() {
        const sql = "SELECT * FROM submission_evaluation ORDER BY evaluation_id DESC";
        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getEvaluationById(id) {
        const sql = "SELECT * FROM submission_evaluation WHERE evaluation_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateEvaluation(id, data) {
        const sql = `
            UPDATE submission_evaluation SET
                submission_id = ?, evaluator_id = ?, evaluator_role = ?, 
                comment = ?, suggestion = ?, rating = ?
            WHERE evaluation_id = ?
        `;
        const values = [
            data.submission_id,
            data.evaluator_id,
            data.evaluator_role,
            data.comment,
            data.suggestion,
            data.rating,
            id
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    deleteEvaluation(id) {
        const sql = "DELETE FROM submission_evaluation WHERE evaluation_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
