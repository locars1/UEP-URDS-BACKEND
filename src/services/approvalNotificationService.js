// src/services/approvalNotificationService.js
import ApprovalNotificationRepository from "../repositories/approvalNotificationRepository.js";

export default {
    create(data) {
        return ApprovalNotificationRepository.createNotification(data);
    },
    getAll() {
        return ApprovalNotificationRepository.getAllNotifications();
    },
    getById(id) {
        return ApprovalNotificationRepository.getNotificationById(id);
    },
    update(id, data) {
        return ApprovalNotificationRepository.updateNotification(id, data);
    },
    delete(id) {
        return ApprovalNotificationRepository.deleteNotification(id);
    }
};
