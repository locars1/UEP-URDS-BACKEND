import { Router } from "express";
import AnnouncementController from "../controllers/announcementController.js";

const router = Router();

router.post("/", AnnouncementController.createAnnouncement);
router.get("/", AnnouncementController.getAllAnnouncements);
router.get("/:id", AnnouncementController.getAnnouncementById);
router.put("/:id", AnnouncementController.updateAnnouncement);
router.delete("/:id", AnnouncementController.deleteAnnouncement);

export default router;
    