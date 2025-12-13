
// src/models/submissionModel.js
export default class Submission {
    constructor({ submission_id, research_id, budget_id, workplan_id, status, version_number, timestamp }) {
        this.submission_id = submission_id;
        this.research_id = research_id;
        this.budget_id = budget_id;
        this.workplan_id = workplan_id;
        this.status = status;
        this.version_number = version_number;
        this.timestamp = timestamp;
    }
}


