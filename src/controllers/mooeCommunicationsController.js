// src/controllers/mooeCommunicationsController.js
import MooeCommunicationsService from "../services/mooeCommunicationsService.js";

export const create = async (req, res) => {
    try {
        const result = await MooeCommunicationsService.create(req.body);
        res.json({ message: "MOOE Communication created", data: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const rows = await MooeCommunicationsService.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getById = async (req, res) => {
    try {
        const row = await MooeCommunicationsService.getById(req.params.id);
        res.json(row);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const update = async (req, res) => {
    try {
        const result = await MooeCommunicationsService.update(req.params.id, req.body);
        res.json({ message: "Updated successfully", data: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const remove = async (req, res) => {
    try {
        const result = await MooeCommunicationsService.delete(req.params.id);
        res.json({ message: "Deleted successfully", data: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
