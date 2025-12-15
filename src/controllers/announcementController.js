import AnnouncementService from "../services/announcementService.js";

const AnnouncementController = {
  createAnnouncement: async (req, res) => {
    console.log("📥 RECEIVED BODY:", req.body); // debug
    try {
        // ✅ Use logged-in user's ID and roleID from auth middleware
        const userId = req.user.userID;
        const roleID = req.user.roleID; // integer roleID

        const data = {
            ...req.body,
            user_id: userId,
            status: 'active',   // default
            action: 'created'   // default
        };

        // Create announcement
        const newId = await AnnouncementService.createAnnouncement(data);

        res.status(201).json({
            message: "Announcement created successfully",
            announcement_id: newId,
            created_by_roleID: roleID // include roleID for reference
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
    },

    getAnnouncementsByRole: async (req, res) => {
        try {
            const { role } = req.params;

            const announcements =
                await AnnouncementService.getAnnouncementsByRole(role);

            res.status(200).json(announcements);
        } catch (error) {
            console.error("ANNOUNCEMENT FETCH BY ROLE ERROR:", error);
            res.status(500).json({
                error: "Failed to fetch announcements by role"
            });
        }
   },
   getAnnouncementsByRoleId: async (req, res) => {
    try {
        const { roleID } = req.params;

        const announcements =
            await AnnouncementService.getAnnouncementsByRoleId(roleID);

        res.status(200).json(announcements);
    } catch (error) {
        console.error("ANNOUNCEMENT FETCH BY ROLE ID ERROR:", error);
        res.status(500).json({
            error: "Failed to fetch announcements by role ID"
        });
    }
}
};

export default AnnouncementController;
