// src/repositories/mooeEquipmentOutlayRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE
    create(data) {
        const sql = `
            INSERT INTO mooe_equipment_outlay
            (budget_id, equip_date, unit, item_description, purpose, quantity, estimated_cost, year, year_amount, year_total)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.budget_id,
            data.equip_date,
            data.unit,
            data.item_description,
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
        const sql = "SELECT * FROM mooe_equipment_outlay ORDER BY mooe_equipment_outlay_id DESC";
        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getById(id) {
        const sql = "SELECT * FROM mooe_equipment_outlay WHERE mooe_equipment_outlay_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    update(id, data) {
        const sql = `
            UPDATE mooe_equipment_outlay SET
                budget_id = ?, equip_date = ?, unit = ?, item_description = ?, 
                purpose = ?, quantity = ?, estimated_cost = ?, year = ?, year_amount = ?, year_total = ?
            WHERE mooe_equipment_outlay_id = ?
        `;
        const values = [
            data.budget_id,
            data.equip_date,
            data.unit,
            data.item_description,
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
        const sql = "DELETE FROM mooe_equipment_outlay WHERE mooe_equipment_outlay_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
