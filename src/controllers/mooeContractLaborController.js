// src/controllers/mooeContractLaborController.js
import MooeContractLaborService from "../services/mooeContractLaborService.js";

export const create = (req, res) => {
    MooeContractLaborService.create(req.body)
        .then(result => res.json({ success: true, result }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
};

export const getAll = (req, res) => {
    MooeContractLaborService.getAll()
        .then(result => res.json({ success: true, data: result }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
};

export const getById = (req, res) => {
    MooeContractLaborService.getById(req.params.id)
        .then(result => res.json({ success: true, data: result }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
};

export const update = (req, res) => {
    MooeContractLaborService.update(req.params.id, req.body)
        .then(result => res.json({ success: true, result }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
};

export const remove = (req, res) => {
    MooeContractLaborService.delete(req.params.id)
        .then(result => res.json({ success: true, result }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
};
