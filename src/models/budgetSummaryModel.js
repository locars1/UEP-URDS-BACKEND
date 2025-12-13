// src/models/budgetSummaryModel.js
export default class BudgetSummary {
    constructor({ budgetsummary_id, research_id, research_leader, duration, college, grand_total, prepared_by, approved_by, timestamp }) {
        this.budgetsummary_id = budgetsummary_id;
        this.research_id = research_id;
        this.research_leader = research_leader;
        this.duration = duration;
        this.college = college;
        this.grand_total = grand_total;
        this.prepared_by = prepared_by;
        this.approved_by = approved_by;
        this.timestamp = timestamp;
    }
}
