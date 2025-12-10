// src/controllers/mooeTravelController.js
import MooeTravelService from "../services/mooeTravelService.js";

const MooeTravelController = {
    createMooeTravel: async (req, res) => {
        console.log("📥 RECEIVED BODY:", req.body);
        try {
            const newId = await MooeTravelService.createMooeTravel(req.body);
            res.status(201).json({ message: "MOOE Travel created successfully", mooe_travel_id: newId });
        } catch (error) {
            console.error("🔥 CREATE MOOE TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to create MOOE Travel" });
        }
    },

    getAllMooeTravel: async (req, res) => {
        try {
            const entries = await MooeTravelService.getAllMooeTravel();
            res.json(entries);
        } catch (error) {
            console.error("🔥 FETCH MOOE TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to fetch MOOE Travel entries" });
        }
    },

    getMooeTravelById: async (req, res) => {
        try {
            const entry = await MooeTravelService.getMooeTravelById(req.params.id);
            if (!entry) return res.status(404).json({ message: "MOOE Travel entry not found" });
            res.json(entry);
        } catch (error) {
            console.error("🔥 FETCH MOOE TRAVEL BY ID ERROR:", error);
            res.status(500).json({ error: "Failed to fetch MOOE Travel entry" });
        }
    },

    updateMooeTravel: async (req, res) => {
        try {
            await MooeTravelService.updateMooeTravel(req.params.id, req.body);
            res.json({ message: "MOOE Travel updated successfully" });
        } catch (error) {
            console.error("🔥 UPDATE MOOE TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to update MOOE Travel" });
        }
    },

    deleteMooeTravel: async (req, res) => {
        try {
            await MooeTravelService.deleteMooeTravel(req.params.id);
            res.json({ message: "MOOE Travel deleted successfully" });
        } catch (error) {
            console.error("🔥 DELETE MOOE TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to delete MOOE Travel" });
        }
    }
};

export default MooeTravelController;
