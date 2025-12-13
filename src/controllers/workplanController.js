// controllers/workplanController.js

import workplanService from "../services/workplanService.js";

export default {

    async create(req, res) {
        try {
            const result = await workplanService.createWorkplan(req.body);
            res.status(201).json({ message: "Workplan created successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const workplans = await workplanService.getAllWorkplans();
            res.status(200).json(workplans);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getOne(req, res) {
        try {
            const workplan = await workplanService.getWorkplanById(req.params.id);
            res.status(200).json(workplan);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const result = await workplanService.updateWorkplan(req.params.id, req.body);
            res.status(200).json({ message: "Workplan updated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await workplanService.deleteWorkplan(req.params.id);
            res.status(200).json({ message: "Workplan deleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};
