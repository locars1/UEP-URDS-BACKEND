// src/services/mooeCommunicationsService.js
import MooeCommunicationsRepository from "../repositories/mooeCommunicationsRepository.js";

export default {
    create(data) {
        return MooeCommunicationsRepository.create(data);
    },
    getAll() {
        return MooeCommunicationsRepository.getAll();
    },
    getById(id) {
        return MooeCommunicationsRepository.getById(id);
    },
    update(id, data) {
        return MooeCommunicationsRepository.update(id, data);
    },
    delete(id) {
        return MooeCommunicationsRepository.delete(id);
    }
};
