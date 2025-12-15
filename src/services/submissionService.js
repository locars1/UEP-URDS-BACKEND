import SubmissionRepository from "../repositories/submissionRepository.js";

export default {
    create(data) {
        return SubmissionRepository.createSubmission(data);
    },
    getAll() {
        return SubmissionRepository.getAllSubmissions();
    },
    getById(id) {
        return SubmissionRepository.getSubmissionById(id);
    },
    update(id, data) {
        return SubmissionRepository.updateSubmission(id, data);
    },
    delete(id) {
        return SubmissionRepository.deleteSubmission(id);
    },
    // NEW: get submissions filtered by college
    getByCollege(collegeName) {
        return SubmissionRepository.getSubmissionsByCollege(collegeName);
    }
};
