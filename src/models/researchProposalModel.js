import db from "../config/db.js";


export default class ResearchProposal {
constructor(data) {
this.research_id = data.research_id;
this.research_title = data.research_title;
this.research_type = data.research_type;
this.leader = data.leader;
this.college = data.college;
this.members = data.members;
this.location = data.location;
this.duration = data.duration;
this.annual_budget = data.annual_budget;
this.rationale = data.rationale;
this.objectives = data.objectives;
this.rrl = data.rrl;
this.methodology = data.methodology;
this.prepared_by = data.prepared_by;
this.endorsed_by = data.endorsed_by;
this.recommending_approval = data.recommending_approval;
this.timestamp = data.timestamp;
}
}