// src/services/mooeContractLaborService.js
import MooeContractLaborRepository from "../repositories/mooeContractLaborRepository.js";

export default {
    create(data) {
        return MooeContractLaborRepository.create(data);
    },

    getAll() {
        return MooeContractLaborRepository.getAll();
    },

    getById(id) {
        return MooeContractLaborRepository.getById(id);
    },

    update(id, data) {
        return MooeContractLaborRepository.update(id, data);
    },

    delete(id) {
        return MooeContractLaborRepository.delete(id);
    }
};
