// src/repositories/mooeCommunicationsRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE
    create(data) {
        const sql = `
            INSERT INTO mooe_communications
            (budget_id, communication_date, nature_of_communication, purpose, quantity, estimated_cost, year, year_amount, year_total)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.budget_id,
            data.communication_date,
            data.nature_of_communication,
            data.purpose,
            data.quantity,
            data.estimated_cost,
            data.year,
            data.year_amount,
            data.year_total
        ];
        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // GET ALL
    getAll() {
        const sql = "SELECT * FROM mooe_communications ORDER BY mooe_communication_id DESC";
        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getById(id) {
        const sql = "SELECT * FROM mooe_communications WHERE mooe_communication_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    update(id, data) {
        const sql = `
            UPDATE mooe_communications SET
                budget_id = ?, communication_date = ?, nature_of_communication = ?, purpose = ?, 
                quantity = ?, estimated_cost = ?, year = ?, year_amount = ?, year_total = ?
            WHERE mooe_communication_id = ?
        `;
        const values = [
            data.budget_id,
            data.communication_date,
            data.nature_of_communication,
            data.purpose,
            data.quantity,
            data.estimated_cost,
            data.year,
            data.year_amount,
            data.year_total,
            id
        ];
        return new Promise((resolve, reject) => {
            db.query(sql, values)
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    },

    // DELETE
    delete(id) {
        const sql = "DELETE FROM mooe_communications WHERE mooe_communication_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
