// src/controllers/mooeTravelController.js
import MooeTravelService from "../services/mooeTravelService.js";

export const create = async (req, res) => {
    try {
        const result = await MooeTravelService.create(req.body);
        res.json({ message: "MOOE Travel created successfully", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const result = await MooeTravelService.getAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getById = async (req, res) => {
    try {
        const result = await MooeTravelService.getById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const update = async (req, res) => {
    try {
        const result = await MooeTravelService.update(req.params.id, req.body);
        res.json({ message: "MOOE Travel updated successfully", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const remove = async (req, res) => {
    try {
        const result = await MooeTravelService.delete(req.params.id);
        res.json({ message: "MOOE Travel deleted successfully", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
