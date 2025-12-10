// src/models/ResearchProposal.js

class ResearchProposal {
    constructor({
        research_id,
        research_name,
        research_type,
        leader,
        members,
        location,
        duration,
        annual_budget,
        rationale,
        objectives,
        review_of_literature,
        methodology,
        prepared_by,
        endorsed_by,
        recommending_approval,
        user_id,
        timestamp
    }) {
        this.research_id = research_id;
        this.research_name = research_name;
        this.research_type = research_type;
        this.leader = leader;
        this.members = members;
        this.location = location;
        this.duration = duration;
        this.annual_budget = annual_budget;
        this.rationale = rationale;
        this.objectives = objectives;
        this.review_of_literature = review_of_literature;
        this.methodology = methodology;
        this.prepared_by = prepared_by;
        this.endorsed_by = endorsed_by;
        this.recommending_approval = recommending_approval;
        this.user_id = user_id;
        this.timestamp = timestamp;
    }
}

export default ResearchProposal;
