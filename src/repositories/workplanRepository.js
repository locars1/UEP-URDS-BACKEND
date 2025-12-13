// repositories/workplanRepository.js
import { db } from "../config/db.js";

export default {

    // CREATE
    createWorkplan(data) {
        const sql = `
            INSERT INTO workplan (research_id, research_leader, college_id)
            VALUES (?, ?, ?)
        `;
        const values = [
            data.research_id,
            data.research_leader,
            data.college_id
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL
    getAllWorkplans() {
        const sql = `
            SELECT w.*, 
                   rp.research_title,
                   c.college_name
            FROM workplan w
            LEFT JOIN research_proposal rp ON w.research_id = rp.research_id
            LEFT JOIN college c ON w.college_id = c.collegeID
            ORDER BY w.workplan_id DESC
        `;

        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getWorkplanById(id) {
        const sql = `
            SELECT w.*, 
                   rp.research_title,
                   c.college_name
            FROM workplan w
            LEFT JOIN research_proposal rp ON w.research_id = rp.research_id
            LEFT JOIN college c ON w.college_id = c.collegeID
            WHERE w.workplan_id = ?
        `;

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateWorkplan(id, data) {
        const sql = `
            UPDATE workplan SET
                research_id = ?, 
                research_leader = ?, 
                college_id = ?
            WHERE workplan_id = ?
        `;

        const values = [
            data.research_id,
            data.research_leader,
            data.college_id,
            id,
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    deleteWorkplan(id) {
        const sql = "DELETE FROM workplan WHERE workplan_id = ?";

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },
};
