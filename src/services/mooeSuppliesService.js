// src/services/mooeSuppliesService.js
import MooeSuppliesRepository from "../repositories/mooeSuppliesRepository.js";

export default {
    create(data) {
        return MooeSuppliesRepository.createMooeSupply(data);
    },

    getAll() {
        return MooeSuppliesRepository.getAllMooeSupplies();
    },

    getById(id) {
        return MooeSuppliesRepository.getMooeSupplyById(id);
    },

    update(id, data) {
        return MooeSuppliesRepository.updateMooeSupply(id, data);
    },

    delete(id) {
        return MooeSuppliesRepository.deleteMooeSupply(id);
    }
};
