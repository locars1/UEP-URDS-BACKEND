// src/controllers/submissionEvaluationController.js
import SubmissionEvaluationService from "../services/submissionEvaluationService.js";

export const createEvaluation = async (req, res) => {
    try {
        const result = await SubmissionEvaluationService.create(req.body);
        res.json({ message: "Evaluation created successfully", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllEvaluations = async (req, res) => {
    try {
        const rows = await SubmissionEvaluationService.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getEvaluationById = async (req, res) => {
    try {
        const row = await SubmissionEvaluationService.getById(req.params.id);
        res.json(row);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateEvaluation = async (req, res) => {
    try {
        const result = await SubmissionEvaluationService.update(req.params.id, req.body);
        res.json({ message: "Evaluation updated successfully", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteEvaluation = async (req, res) => {
    try {
        const result = await SubmissionEvaluationService.delete(req.params.id);
        res.json({ message: "Evaluation deleted successfully", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
