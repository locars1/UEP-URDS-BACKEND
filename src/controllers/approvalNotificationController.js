// src/controllers/approvalNotificationController.js
import ApprovalNotificationService from "../services/approvalNotificationService.js";

export const getAll = async (req, res) => {
    try {
        const notifications = await ApprovalNotificationService.getAll();
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getOne = async (req, res) => {
    try {
        const notification = await ApprovalNotificationService.getById(req.params.id);
        res.json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const create = async (req, res) => {
    try {
        const result = await ApprovalNotificationService.create(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const update = async (req, res) => {
    try {
        const result = await ApprovalNotificationService.update(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const remove = async (req, res) => {
    try {
        const result = await ApprovalNotificationService.delete(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
