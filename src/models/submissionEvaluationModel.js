// src/models/submissionEvaluationModel.js
export default class SubmissionEvaluation {
    constructor({ evaluation_id, submission_id, evaluator_id, evaluator_role, comment, suggestion, rating, timestamp }) {
        this.evaluation_id = evaluation_id;
        this.submission_id = submission_id;
        this.evaluator_id = evaluator_id;
        this.evaluator_role = evaluator_role;
        this.comment = comment;
        this.suggestion = suggestion;
        this.rating = rating;
        this.timestamp = timestamp;
    }
}
