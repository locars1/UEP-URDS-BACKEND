// repositories/workplanScheduleRepository.js
import { db } from "../config/db.js";

export default {

    // CREATE
    createSchedule(data) {
        const sql = `
            INSERT INTO workplan_schedule 
            (activity_id, year_number, boolean_q1, boolean_q2, boolean_q3, boolean_q4)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const values = [
            data.activity_id,
            data.year_number,
            data.boolean_q1,
            data.boolean_q2,
            data.boolean_q3,
            data.boolean_q4
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL BY ACTIVITY ID
    getSchedulesByActivity(activity_id) {
        const sql = `
            SELECT * FROM workplan_schedule
            WHERE activity_id = ?
            ORDER BY year_number ASC
        `;

        return new Promise((resolve, reject) => {
            db.query(sql, [activity_id])
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getScheduleById(id) {
        const sql = `SELECT * FROM workplan_schedule WHERE schedule_id = ?`;

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateSchedule(id, data) {
        const sql = `
            UPDATE workplan_schedule SET
                activity_id = ?,
                year_number = ?,
                boolean_q1 = ?,
                boolean_q2 = ?,
                boolean_q3 = ?,
                boolean_q4 = ?
            WHERE schedule_id = ?
        `;

        const values = [
            data.activity_id,
            data.year_number,
            data.boolean_q1,
            data.boolean_q2,
            data.boolean_q3,
            data.boolean_q4,
            id
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    deleteSchedule(id) {
        const sql = `DELETE FROM workplan_schedule WHERE schedule_id = ?`;

        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
