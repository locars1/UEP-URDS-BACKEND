// src/controllers/budgetSummaryController.js
import BudgetSummaryService from "../services/budgetSummaryService.js";

const BudgetSummaryController = {
    create: async (req, res) => {
        try {
            const newId = await BudgetSummaryService.create(req.body);
            res.status(201).json({ message: "Budget summary created", budgetsummary_id: newId });
        } catch (err) {
            console.error("🔥 CREATE BUDGET SUMMARY ERROR:", err);
            res.status(500).json({ error: "Failed to create budget summary" });
        }
    },

    getAll: async (req, res) => {
        try {
            const summaries = await BudgetSummaryService.getAll();
            res.json(summaries);
        } catch (err) {
            console.error("🔥 FETCH BUDGET SUMMARY ERROR:", err);
            res.status(500).json({ error: "Failed to fetch budget summaries" });
        }
    },

    getById: async (req, res) => {
        try {
            const summary = await BudgetSummaryService.getById(req.params.id);
            if (!summary) return res.status(404).json({ message: "Not found" });
            res.json(summary);
        } catch (err) {
            res.status(500).json({ error: "Failed to fetch budget summary" });
        }
    },

    update: async (req, res) => {
        try {
            await BudgetSummaryService.update(req.params.id, req.body);
            res.json({ message: "Budget summary updated" });
        } catch (err) {
            res.status(500).json({ error: "Failed to update budget summary" });
        }
    },

    delete: async (req, res) => {
        try {
            await BudgetSummaryService.delete(req.params.id);
            res.json({ message: "Budget summary deleted" });
        } catch (err) {
            res.status(500).json({ error: "Failed to delete budget summary" });
        }
    }
};

export default BudgetSummaryController;
