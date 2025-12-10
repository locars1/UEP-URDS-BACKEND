import AnnouncementRepository from "../repositories/announcementRepository.js";

const AnnouncementService = {
    createAnnouncement: async (data) => {
        return await AnnouncementRepository.createAnnouncement(data);
    },

    getAllAnnouncements: async () => {
        return await AnnouncementRepository.getAllAnnouncements();
    },

    getAnnouncementById: async (id) => {
        return await AnnouncementRepository.getAnnouncementById(id);
    },

    updateAnnouncement: async (id, data) => {
        return await AnnouncementRepository.updateAnnouncement(id, data);
    },

    deleteAnnouncement: async (id) => {
        return await AnnouncementRepository.deleteAnnouncement(id);
    }
};

export default AnnouncementService;
