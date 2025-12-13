// src/services/submissionEvaluationService.js
import SubmissionEvaluationRepository from "../repositories/submissionEvaluationRepository.js";

export default {
    create(data) {
        return SubmissionEvaluationRepository.createEvaluation(data);
    },
    getAll() {
        return SubmissionEvaluationRepository.getAllEvaluations();
    },
    getById(id) {
        return SubmissionEvaluationRepository.getEvaluationById(id);
    },
    update(id, data) {
        return SubmissionEvaluationRepository.updateEvaluation(id, data);
    },
    delete(id) {
        return SubmissionEvaluationRepository.deleteEvaluation(id);
    }
};
