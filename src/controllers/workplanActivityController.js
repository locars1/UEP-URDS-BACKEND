// controllers/workplanActivityController.js

import workplanActivityService from "../services/workplanActivityService.js";

export default {

    async create(req, res) {
        try {
            const result = await workplanActivityService.createActivity(req.body);
            res.status(201).json({ message: "Activity added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getByWorkplan(req, res) {
        try {
            const rows = await workplanActivityService.getActivitiesByWorkplan(req.params.workplan_id);
            res.status(200).json(rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getOne(req, res) {
        try {
            const row = await workplanActivityService.getActivityById(req.params.id);
            res.status(200).json(row);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const result = await workplanActivityService.updateActivity(req.params.id, req.body);
            res.status(200).json({ message: "Activity updated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await workplanActivityService.deleteActivity(req.params.id);
            res.status(200).json({ message: "Activity deleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};
