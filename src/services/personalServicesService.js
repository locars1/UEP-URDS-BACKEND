// services/personalServicesService.js
import PersonalServicesRepository from "../repositories/personalServicesRepository.js";

export default {
    getAll() {
        return PersonalServicesRepository.getAllPersonalServices();
    },

    getById(id) {
        return PersonalServicesRepository.getPersonalServiceById(id);
    },

    create(data) {
        return PersonalServicesRepository.createPersonalService(data);
    },

    update(id, data) {
        return PersonalServicesRepository.updatePersonalService(id, data);
    },

    delete(id) {
        return PersonalServicesRepository.deletePersonalService(id);
    }
};
