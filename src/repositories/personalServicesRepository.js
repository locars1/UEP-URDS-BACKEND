// repositories/personalServicesRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE
    createPersonalService(data) {
        const sql = `
            INSERT INTO personal_services 
            (budget_id, item_name, year_number, quarter, quarter_amount, year_amount, year_total)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.budget_id,
            data.item_name,      // matches table column
            data.year_number,    // 'Year 1', 'Year 2', 'Year 3'
            data.quarter,        // 'Q1', 'Q2', 'Q3', 'Q4'
            data.quarter_amount,
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
    getAllPersonalServices() {
        const sql = "SELECT * FROM personal_services ORDER BY personal_service_id DESC";
        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getPersonalServiceById(id) {
        const sql = "SELECT * FROM personal_services WHERE personal_service_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updatePersonalService(id, data) {
        const sql = `
            UPDATE personal_services SET
                budget_id = ?, item_name = ?, year_number = ?, quarter = ?, 
                quarter_amount = ?, year_amount = ?, year_total = ?
            WHERE personal_service_id = ?
        `;
        const values = [
            data.budget_id,
            data.item_name,
            data.year_number,
            data.quarter,
            data.quarter_amount,
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
    deletePersonalService(id) {
        const sql = "DELETE FROM personal_services WHERE personal_service_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
