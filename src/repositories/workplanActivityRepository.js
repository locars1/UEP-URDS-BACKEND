// repositories/workplanActivityRepository.js
import { db } from "../config/db.js";

export default {

    // CREATE
    createActivity(data) {
        const sql = `
            INSERT INTO workplan_activity (workplan_id, activity_number, text_description)
            VALUES (?, ?, ?)
        `;

        const values = [
            data.workplan_id,
            data.activity_number,
            data.text_description
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL ACTIVITIES BY WORKPLAN
    getActivitiesByWorkplan(workplan_id) {
        const sql = `
            SELECT * FROM workplan_activity
            WHERE workplan_id = ?
            ORDER BY activity_number ASC
        `;

        return new Promise((resolve, reject) => {
            db.query(sql, [workplan_id])
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getActivityById(id) {
        const sql = "SELECT * FROM workplan_activity WHERE activity_id = ?";

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateActivity(id, data) {
        const sql = `
            UPDATE workplan_activity SET
                workplan_id = ?,
                activity_number = ?,
                text_description = ?
            WHERE activity_id = ?
        `;

        const values = [
            data.workplan_id,
            data.activity_number,
            data.text_description,
            id
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    deleteActivity(id) {
        const sql = "DELETE FROM workplan_activity WHERE activity_id = ?";

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },
};
