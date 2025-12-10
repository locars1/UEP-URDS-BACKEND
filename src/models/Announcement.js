class Announcement {
    constructor(
        announcement_id,
        user_id,
        proposal_title,
        description,
        start_date,
        deadline,
        guidelines_attachment,
        status,
        action,
        timestamp
    ) {
        this.announcement_id = announcement_id;
        this.user_id = user_id;
        this.proposal_title = proposal_title;
        this.description = description;
        this.start_date = start_date;
        this.deadline = deadline;
        this.guidelines_attachment = guidelines_attachment;
        this.status = status;
        this.action = action;
        this.timestamp = timestamp;
    }
}

export default Announcement;
