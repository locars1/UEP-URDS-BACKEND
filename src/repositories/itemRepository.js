// src/repositories/itemRepository.js
import { db } from "../config/db.js";
import Item from "../models/Item.js";

const ItemRepository = {
    createItem: async (data) => {
        const query = `
            INSERT INTO item (item_name, quarterly_budget, quarter)
            VALUES (?, ?, ?)
        `;
        const values = [data.item_name, data.quarterly_budget, data.quarter];

        const [result] = await db.query(query, values);
        return result.insertId;
    },

    getAllItems: async () => {
        const query = `SELECT * FROM item ORDER BY timestamp DESC`;
        const [rows] = await db.query(query);
        return rows.map(row => new Item(row));
    },

    getItemById: async (id) => {
        const query = `SELECT * FROM item WHERE item_id = ?`;
        const [rows] = await db.query(query, [id]);
        if (!rows[0]) return null;
        return new Item(rows[0]);
    },

    updateItem: async (id, data) => {
        const query = `
            UPDATE item SET 
                item_name = ?,
                quarterly_budget = ?,
                quarter = ?
            WHERE item_id = ?
        `;
        const values = [data.item_name, data.quarterly_budget, data.quarter, id];

        const [result] = await db.query(query, values);
        return result;
    },

    deleteItem: async (id) => {
        const query = `DELETE FROM item WHERE item_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

export default ItemRepository;
