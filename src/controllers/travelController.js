// src/controllers/travelController.js
import TravelService from "../services/travelService.js";

const TravelController = {
    createTravel: async (req, res) => {
        console.log("📥 RECEIVED BODY:", req.body);
        try {
            const newId = await TravelService.createTravel(req.body);
            res.status(201).json({
                message: "Travel entry created successfully",
                travel_id: newId
            });
        } catch (error) {
            console.error("🔥 CREATE TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to create travel entry" });
        }
    },

    getAllTravels: async (req, res) => {
        try {
            const travels = await TravelService.getAllTravels();
            res.json(travels);
        } catch (error) {
            console.error("🔥 FETCH TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to fetch travel entries" });
        }
    },

    getTravelById: async (req, res) => {
        try {
            const travel = await TravelService.getTravelById(req.params.id);
            if (!travel) return res.status(404).json({ message: "Travel entry not found" });
            res.json(travel);
        } catch (error) {
            console.error("🔥 FETCH TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to fetch travel entry" });
        }
    },

    updateTravel: async (req, res) => {
        try {
            await TravelService.updateTravel(req.params.id, req.body);
            res.json({ message: "Travel entry updated successfully" });
        } catch (error) {
            console.error("🔥 UPDATE TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to update travel entry" });
        }
    },

    deleteTravel: async (req, res) => {
        try {
            await TravelService.deleteTravel(req.params.id);
            res.json({ message: "Travel entry deleted successfully" });
        } catch (error) {
            console.error("🔥 DELETE TRAVEL ERROR:", error);
            res.status(500).json({ error: "Failed to delete travel entry" });
        }
    }
};

export default TravelController;
