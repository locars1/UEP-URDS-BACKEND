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
    },

    getAnnouncementsByRole: async (roleName) => {
        return await AnnouncementRepository.getAnnouncementsByRole(roleName);
    },
    getAnnouncementsByRoleId: async (roleID) => {
    return await AnnouncementRepository.getAnnouncementsByRoleId(roleID);
},
};

export default AnnouncementService;
