// src/services/mooeEquipmentOutlayService.js
import MooeEquipmentOutlayRepository from "../repositories/mooeEquipmentOutlayRepository.js";

export default {
    create(data) {
        return MooeEquipmentOutlayRepository.create(data);
    },

    getAll() {
        return MooeEquipmentOutlayRepository.getAll();
    },

    getById(id) {
        return MooeEquipmentOutlayRepository.getById(id);
    },

    update(id, data) {
        return MooeEquipmentOutlayRepository.update(id, data);
    },

    delete(id) {
        return MooeEquipmentOutlayRepository.delete(id);
    }
};
