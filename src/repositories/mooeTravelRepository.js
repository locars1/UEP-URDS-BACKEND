// src/repositories/mooeTravelRepository.js
import { db } from "../config/db.js";
import MooeTravel from "../models/MooeTravel.js";

const MooeTravelRepository = {
    createMooeTravel: async (data) => {
        const query = `
            INSERT INTO mooe_travel (travel_id, annual_budget)
            VALUES (?, ?)
        `;
        const values = [data.travel_id, data.annual_budget];

        const [result] = await db.query(query, values);
        return result.insertId;
    },

    getAllMooeTravel: async () => {
        const query = `SELECT * FROM mooe_travel ORDER BY timestamp DESC`;
        const [rows] = await db.query(query);
        return rows.map(row => new MooeTravel(row));
    },

    getMooeTravelById: async (id) => {
        const query = `SELECT * FROM mooe_travel WHERE mooe_travel_id = ?`;
        const [rows] = await db.query(query, [id]);
        if (!rows[0]) return null;
        return new MooeTravel(rows[0]);
    },

    updateMooeTravel: async (id, data) => {
        const query = `
            UPDATE mooe_travel SET 
                travel_id = ?,
                annual_budget = ?
            WHERE mooe_travel_id = ?
        `;
        const values = [data.travel_id, data.annual_budget, id];

        const [result] = await db.query(query, values);
        return result;
    },

    deleteMooeTravel: async (id) => {
        const query = `DELETE FROM mooe_travel WHERE mooe_travel_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

export default MooeTravelRepository;
