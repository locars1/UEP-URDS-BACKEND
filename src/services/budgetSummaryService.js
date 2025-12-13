// src/services/budgetSummaryService.js
import BudgetSummaryRepository from "../repositories/budgetSummaryRepository.js";

const BudgetSummaryService = {
    create: async (data) => {
        return await BudgetSummaryRepository.create(data);
    },
    getAll: async () => {
        return await BudgetSummaryRepository.getAll();
    },
    getById: async (id) => {
        return await BudgetSummaryRepository.getById(id);
    },
    update: async (id, data) => {
        return await BudgetSummaryRepository.update(id, data);
    },
    delete: async (id) => {
        return await BudgetSummaryRepository.delete(id);
    }
};

export default BudgetSummaryService;
