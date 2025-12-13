// services/workplanService.js

import workplanRepository from "../repositories/workplanRepository.js";

export default {
    createWorkplan(data) {
        return workplanRepository.createWorkplan(data);
    },

    getAllWorkplans() {
        return workplanRepository.getAllWorkplans();
    },

    getWorkplanById(id) {
        return workplanRepository.getWorkplanById(id);
    },

    updateWorkplan(id, data) {
        return workplanRepository.updateWorkplan(id, data);
    },

    deleteWorkplan(id) {
        return workplanRepository.deleteWorkplan(id);
    }
};
