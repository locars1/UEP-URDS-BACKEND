import express from "express";
import { userController } from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Only URDS or Dean can manage all users
const adminRoles = ["URDS DIRECTOR", "COLLEGE DEAN"];


router.post("/", userController.create);

router.get(
  "/",
  authenticate,
  authorize(...adminRoles),
  userController.getAll
);

router.get(
  "/id/:userID",
  authenticate,
  authorize(...adminRoles),
  userController.getById
);

router.get(
  "/fname/:fname",
  authenticate,
  authorize(...adminRoles),
  userController.getByFname
);

router.get(
  "/role/:roleID",
  authenticate,
  authorize(...adminRoles),
  userController.getByRole
);

router.put(
  "/update/:userID",
  authenticate,
  authorize(...adminRoles),
  userController.update
);

router.delete(
  "/delete/:userID",
  authenticate,
  authorize(...adminRoles),
  userController.deleteById
);

router.delete(
  "/delete-all",
  authenticate,
  authorize(...adminRoles),
  userController.deleteAll
);

export default router;
