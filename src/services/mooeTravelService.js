// src/services/mooeTravelService.js
import MooeTravelRepository from "../repositories/mooeTravelRepository.js";

export default {
    create(data) {
        return MooeTravelRepository.createMooeTravel(data);
    },
    getAll() {
        return MooeTravelRepository.getAllMooeTravel();
    },
    getById(id) {
        return MooeTravelRepository.getMooeTravelById(id);
    },
    update(id, data) {
        return MooeTravelRepository.updateMooeTravel(id, data);
    },
    delete(id) {
        return MooeTravelRepository.deleteMooeTravel(id);
    }
};
