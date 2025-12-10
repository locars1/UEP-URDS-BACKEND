// src/controllers/itemController.js
import ItemService from "../services/itemService.js";

const ItemController = {
    createItem: async (req, res) => {
        console.log("📥 RECEIVED BODY:", req.body);
        try {
            const newId = await ItemService.createItem(req.body);
            res.status(201).json({ message: "Item created successfully", item_id: newId });
        } catch (error) {
            console.error("🔥 CREATE ITEM ERROR:", error);
            res.status(500).json({ error: "Failed to create item" });
        }
    },

    getAllItems: async (req, res) => {
        try {
            const items = await ItemService.getAllItems();
            res.json(items);
        } catch (error) {
            console.error("🔥 FETCH ITEMS ERROR:", error);
            res.status(500).json({ error: "Failed to fetch items" });
        }
    },

    getItemById: async (req, res) => {
        try {
            const item = await ItemService.getItemById(req.params.id);
            if (!item) return res.status(404).json({ message: "Item not found" });
            res.json(item);
        } catch (error) {
            console.error("🔥 FETCH ITEM ERROR:", error);
            res.status(500).json({ error: "Failed to fetch item" });
        }
    },

    updateItem: async (req, res) => {
        try {
            await ItemService.updateItem(req.params.id, req.body);
            res.json({ message: "Item updated successfully" });
        } catch (error) {
            console.error("🔥 UPDATE ITEM ERROR:", error);
            res.status(500).json({ error: "Failed to update item" });
        }
    },

    deleteItem: async (req, res) => {
        try {
            await ItemService.deleteItem(req.params.id);
            res.json({ message: "Item deleted successfully" });
        } catch (error) {
            console.error("🔥 DELETE ITEM ERROR:", error);
            res.status(500).json({ error: "Failed to delete item" });
        }
    }
};

export default ItemController;
