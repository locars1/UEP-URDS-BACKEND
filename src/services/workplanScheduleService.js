// services/workplanScheduleService.js

import workplanScheduleRepository from "../repositories/workplanScheduleRepository.js";

export default {

    createSchedule(data) {
        return workplanScheduleRepository.createSchedule(data);
    },

    getSchedulesByActivity(activity_id) {
        return workplanScheduleRepository.getSchedulesByActivity(activity_id);
    },

    getScheduleById(id) {
        return workplanScheduleRepository.getScheduleById(id);
    },

    updateSchedule(id, data) {
        return workplanScheduleRepository.updateSchedule(id, data);
    },

    deleteSchedule(id) {
        return workplanScheduleRepository.deleteSchedule(id);
    }
};
