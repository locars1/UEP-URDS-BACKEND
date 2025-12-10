import AnnouncementService from "../services/announcementService.js";

const AnnouncementController = {
   createAnnouncement: async (req, res) => {
    console.log("📥 RECEIVED BODY:", req.body); // 🔥 Add this
    try {
        const newId = await AnnouncementService.createAnnouncement(req.body);
        res.status(201).json({
            message: "Announcement created successfully",
            announcement_id: newId
        });
    } catch (error) {
        console.error("🔥 CREATE ANNOUNCEMENT ERROR (CONTROLLER):", error);
        res.status(500).json({ error: "Failed to create announcement" });
        console.log("📥 RECEIVED BODY:", req.body);

    }
},
   getAllAnnouncements: async (req, res) => {
    try {
        const announcements = await AnnouncementService.getAllAnnouncements();
        res.json(announcements);
    } catch (error) {
        console.error("ANNOUNCEMENT FETCH ERROR:", error);  // 🔥 ADD THIS
        res.status(500).json({ error: "Failed to fetch announcements" });
    }
},

    getAnnouncementById: async (req, res) => {
        try {
            const announcement = await AnnouncementService.getAnnouncementById(req.params.id);

            if (!announcement)
                return res.status(404).json({ message: "Announcement not found" });

            res.json(announcement);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch announcement" });
        }
    },

    updateAnnouncement: async (req, res) => {
        try {
            await AnnouncementService.updateAnnouncement(req.params.id, req.body);

            res.json({ message: "Announcement updated successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to update announcement" });
        }
    },

    deleteAnnouncement: async (req, res) => {
        try {
            await AnnouncementService.deleteAnnouncement(req.params.id);

            res.json({ message: "Announcement deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete announcement" });
        }
    }
};

export default AnnouncementController;
