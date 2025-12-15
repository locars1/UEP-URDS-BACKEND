import express from "express";
import { userController } from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { RoleIDs, authorizeByRoleID } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Only URDS or Dean can manage all users
const adminRoles = [RoleIDs.URDS_DIRECTOR, RoleIDs.COLLEGE_DEAN];


router.post("/", userController.create);

router.get(
  "/",
  authenticate,
  authorizeByRoleID(...adminRoles),
  userController.getAll
);

router.get(
  "/id/:userID",
  authenticate,
  authorizeByRoleID(...adminRoles),
  userController.getById
);

router.get(
  "/fname/:fname",
  authenticate,
  authorizeByRoleID(...adminRoles),
  userController.getByFname
);

router.get(
  "/role/:roleID",
  authenticate,
  authorizeByRoleID(...adminRoles),
  userController.getByRole
);

router.put(
  "/update/:userID",
  authenticate,
  authorizeByRoleID(...adminRoles),
  userController.update
);

router.delete(
  "/delete/:userID",
  authenticate,
  authorizeByRoleID(...adminRoles),
  userController.deleteById
);

router.delete(
  "/delete-all",
  authenticate,
  authorizeByRoleID(...adminRoles),
  userController.deleteAll
);

export default router;
