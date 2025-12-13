// services/workplanActivityService.js

import workplanActivityRepository from "../repositories/workplanActivityRepository.js";

export default {

    createActivity(data) {
        return workplanActivityRepository.createActivity(data);
    },

    getActivitiesByWorkplan(workplan_id) {
        return workplanActivityRepository.getActivitiesByWorkplan(workplan_id);
    },

    getActivityById(id) {
        return workplanActivityRepository.getActivityById(id);
    },

    updateActivity(id, data) {
        return workplanActivityRepository.updateActivity(id, data);
    },

    deleteActivity(id) {
        return workplanActivityRepository.deleteActivity(id);
    }
};
