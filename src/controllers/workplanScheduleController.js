// controllers/workplanScheduleController.js

import workplanScheduleService from "../services/workplanScheduleService.js";

export default {

    async create(req, res) {
        try {
            const result = await workplanScheduleService.createSchedule(req.body);
            res.status(201).json({ message: "Schedule created successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getByActivity(req, res) {
        try {
            const rows = await workplanScheduleService.getSchedulesByActivity(req.params.activity_id);
            res.status(200).json(rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getOne(req, res) {
        try {
            const row = await workplanScheduleService.getScheduleById(req.params.id);
            res.status(200).json(row);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const result = await workplanScheduleService.updateSchedule(req.params.id, req.body);
            res.status(200).json({ message: "Schedule updated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await workplanScheduleService.deleteSchedule(req.params.id);
            res.status(200).json({ message: "Schedule deleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};
