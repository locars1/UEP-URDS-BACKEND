// src/repositories/mooeSuppliesRepository.js
import { db } from "../config/db.js";

export default {
    // CREATE
    createMooeSupply(data) {
        const sql = `
            INSERT INTO mooe_supplies 
            (budget_id, supply_date, unit, item_description, purpose, quantity, unit_cost, year, year_amount, year_total)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.budget_id,
            data.supply_date,
            data.unit,
            data.item_description,
            data.purpose,
            data.quantity,
            data.unit_cost,
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
    getAllMooeSupplies() {
        const sql = "SELECT * FROM mooe_supplies ORDER BY mooe_supply_id DESC";
        return new Promise((resolve, reject) => {
            db.query(sql)
                .then(([rows]) => resolve(rows))
                .catch(err => reject(err));
        });
    },

    // GET ONE
    getMooeSupplyById(id) {
        const sql = "SELECT * FROM mooe_supplies WHERE mooe_supply_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([rows]) => resolve(rows[0]))
                .catch(err => reject(err));
        });
    },

    // UPDATE
    updateMooeSupply(id, data) {
        const sql = `
            UPDATE mooe_supplies SET
                budget_id = ?, supply_date = ?, unit = ?, item_description = ?, 
                purpose = ?, quantity = ?, unit_cost = ?, year = ?, year_amount = ?, year_total = ?
            WHERE mooe_supply_id = ?
        `;
        const values = [
            data.budget_id,
            data.supply_date,
            data.unit,
            data.item_description,
            data.purpose,
            data.quantity,
            data.unit_cost,
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
    deleteMooeSupply(id) {
        const sql = "DELETE FROM mooe_supplies WHERE mooe_supply_id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id])
                .then(([result]) => resolve(result))
                .catch(err => reject(err));
        });
    }
};
