import { Router } from "express";
import AnnouncementController from "../controllers/announcementController.js";
import { authorizeByRoleID, RoleIDs } from "../middleware/roleMiddleware.js";


const router = Router();

router.post(
  "/",
  authorizeByRoleID(RoleIDs.URDS_DIRECTOR, RoleIDs.COLLEGE_DEAN),
  AnnouncementController.createAnnouncement
);
router.get("/", AnnouncementController.getAllAnnouncements);
router.get("/:id", AnnouncementController.getAnnouncementById);
router.get("/role/:role", AnnouncementController.getAnnouncementsByRole);
router.get(
  "/role-id/:roleID",
  AnnouncementController.getAnnouncementsByRoleId
);
router.put("/:id", authorizeByRoleID(RoleIDs.URDS_DIRECTOR, RoleIDs.COLLEGE_DEAN), AnnouncementController.updateAnnouncement);
router.delete("/:id",authorizeByRoleID(RoleIDs.URDS_DIRECTOR, RoleIDs.COLLEGE_DEAN), AnnouncementController.deleteAnnouncement);

export default router;
    