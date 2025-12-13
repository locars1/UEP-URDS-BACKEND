// src/controllers/mooeSuppliesController.js
import MooeSuppliesService from "../services/mooeSuppliesService.js";

export default {
    async create(req, res) {
        try {
            const result = await MooeSuppliesService.create(req.body);
            res.json({ message: "MOOE Supply created successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const result = await MooeSuppliesService.getAll();
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const result = await MooeSuppliesService.getById(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const result = await MooeSuppliesService.update(req.params.id, req.body);
            res.json({ message: "MOOE Supply updated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await MooeSuppliesService.delete(req.params.id);
            res.json({ message: "MOOE Supply deleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};
