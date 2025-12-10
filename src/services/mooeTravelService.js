// src/services/mooeTravelService.js
import MooeTravelRepository from "../repositories/mooeTravelRepository.js";

const MooeTravelService = {
    createMooeTravel: async (data) => await MooeTravelRepository.createMooeTravel(data),
    getAllMooeTravel: async () => await MooeTravelRepository.getAllMooeTravel(),
    getMooeTravelById: async (id) => await MooeTravelRepository.getMooeTravelById(id),
    updateMooeTravel: async (id, data) => await MooeTravelRepository.updateMooeTravel(id, data),
    deleteMooeTravel: async (id) => await MooeTravelRepository.deleteMooeTravel(id)
};

export default MooeTravelService;
