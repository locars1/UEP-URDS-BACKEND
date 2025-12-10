// src/services/travelService.js
import TravelRepository from "../repositories/travelRepository.js";

const TravelService = {
    createTravel: async (data) => {
        return await TravelRepository.createTravel(data);
    },

    getAllTravels: async () => {
        return await TravelRepository.getAllTravels();
    },

    getTravelById: async (id) => {
        return await TravelRepository.getTravelById(id);
    },

    updateTravel: async (id, data) => {
        return await TravelRepository.updateTravel(id, data);
    },

    deleteTravel: async (id) => {
        return await TravelRepository.deleteTravel(id);
    }
};

export default TravelService;
