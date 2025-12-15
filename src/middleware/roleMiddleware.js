// List all roles with their roleID for reference
export const RoleIDs = {
  URDS_DIRECTOR: 1,
  COLLEGE_DEAN: 2,
  SENIOR_FACULTY_RESEARCHER: 3,
  RESEARCH_COORDINATOR: 4,
  FACULTY_RESEARCHER: 5,
  EVALUATOR: 6,
  ADMIN: 7
};

/**
 * Middleware to authorize based on allowed roleIDs
 * @param  {...number} allowedRoleIDs - list of role IDs allowed
 */
export const authorizeByRoleID = (...allowedRoleIDs) => {
  return (req, res, next) => {
    if (!req.user || typeof req.user.roleID !== "number") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userRoleID = req.user.roleID;

    if (!allowedRoleIDs.includes(userRoleID)) {
      return res.status(403).json({ message: "Forbidden - Access denied" });
    }

    next();
  };
};
