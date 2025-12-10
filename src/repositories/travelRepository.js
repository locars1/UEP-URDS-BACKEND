// src/repositories/travelRepository.js
import { db } from "../config/db.js";
import Travel from "../models/Travel.js";

const TravelRepository = {
    createTravel: async (data) => {
        const query = `
            INSERT INTO travel
            (date, location, purpose, transport_mode, estimate_cost, year)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.date,
            data.location,
            data.purpose,
            data.transport_mode,
            data.estimate_cost,
            data.year
        ];

        const [result] = await db.query(query, values);
        return result.insertId;
    },

    getAllTravels: async () => {
        const query = `SELECT * FROM travel ORDER BY timestamp DESC`;
        const [rows] = await db.query(query);
        return rows.map(row => new Travel(row));
    },

    getTravelById: async (id) => {
        const query = `SELECT * FROM travel WHERE travel_id = ?`;
        const [rows] = await db.query(query, [id]);
        if (!rows[0]) return null;
        return new Travel(rows[0]);
    },

    updateTravel: async (id, data) => {
        const query = `
            UPDATE travel SET
                date = ?,
                location = ?,
                purpose = ?,
                transport_mode = ?,
                estimate_cost = ?,
                year = ?
            WHERE travel_id = ?
        `;
        const values = [
            data.date,
            data.location,
            data.purpose,
            data.transport_mode,
            data.estimate_cost,
            data.year,
            id
        ];

        const [result] = await db.query(query, values);
        return result;
    },

    deleteTravel: async (id) => {
        const query = `DELETE FROM travel WHERE travel_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

export default TravelRepository;
