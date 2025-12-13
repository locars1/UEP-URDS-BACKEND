// src/controllers/mooeEquipmentOutlayController.js
import MooeEquipmentOutlayService from "../services/mooeEquipmentOutlayService.js";

export default {
    async create(req, res) {
        try {
            const result = await MooeEquipmentOutlayService.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const rows = await MooeEquipmentOutlayService.getAll();
            res.json(rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const row = await MooeEquipmentOutlayService.getById(req.params.id);
            res.json(row);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const result = await MooeEquipmentOutlayService.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await MooeEquipmentOutlayService.delete(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};
