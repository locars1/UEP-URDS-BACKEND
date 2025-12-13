// src/repositories/approvalNotificationRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE
    createNotification(data) {
        const sql = `
            INSERT INTO approval_notification 
            (submission_id, notification_details) 
            VALUES (?, ?)
        `;
        const values = [data.submission_id, data.notification_details];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL
    getAllNotifications() {
        const sql = "SELECT * FROM approval_notification ORDER BY notification_id DESC";
        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getNotificationById(id) {
        const sql = "SELECT * FROM approval_notification WHERE notification_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateNotification(id, data) {
        const sql = `
            UPDATE approval_notification 
            SET submission_id = ?, notification_details = ? 
            WHERE notification_id = ?
        `;
        const values = [data.submission_id, data.notification_details, id];

        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    deleteNotification(id) {
        const sql = "DELETE FROM approval_notification WHERE notification_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
