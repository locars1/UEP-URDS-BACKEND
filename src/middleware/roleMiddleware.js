// middleware/role.middleware.js

// List all roles for easy reference
export const Roles = {
  URDS_DIRECTOR: "URDS DIRECTOR",
  COLLEGE_DEAN: "COLLEGE DEAN",
  SENIOR_FACULTY_RESEARCHER: "SENIOR FACULTY RESEARCHER",
  RESEARCH_COORDINATOR: "RESEARCH COORDINATOR",
  FACULTY_RESEARCHER: "FACULTY RESEARCHER",
  EVALUATOR: "EVALUATOR"
};

/**
 * Middleware to authorize based on allowed roles
 * @param  {...string} allowedRoles - list of role names that can access the route
 */
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role_name) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userRole = req.user.role_name;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden - Access denied" });
    }

    next();
  };
};
