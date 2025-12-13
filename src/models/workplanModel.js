// models/workplanModel.js

export default class Workplan {
    constructor(workplan) {
        this.research_id = workplan.research_id;
        this.research_leader = workplan.research_leader;
        this.college_id = workplan.college_id;
        this.timestamp = workplan.timestamp;
    }
}
