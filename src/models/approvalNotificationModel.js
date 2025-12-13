// src/models/approvalNotificationModel.js
export default class ApprovalNotification {
    constructor({ notification_id, submission_id, notification_details, timestamp }) {
        this.notification_id = notification_id;
        this.submission_id = submission_id;
        this.notification_details = notification_details;
        this.timestamp = timestamp;
    }
}
