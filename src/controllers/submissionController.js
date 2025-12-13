// src/controllers/submissionController.js
import SubmissionService from "../services/submissionService.js";

export default {
    async create(req, res) {
        try {
            const result = await SubmissionService.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const rows = await SubmissionService.getAll();
            res.json(rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const row = await SubmissionService.getById(req.params.id);
            res.json(row);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const result = await SubmissionService.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await SubmissionService.delete(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};
