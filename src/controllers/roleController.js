// controllers/roleController.js
import { roleService } from "../services/roleService.js";

export const roleController = {
  async getAll(req, res) {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  },

  async getById(req, res) {
    const { roleID } = req.params;
    const role = await roleService.getRoleById(roleID);

    if (!role) return res.status(404).json({ message: "Role not found" });
    res.json(role);
  },

  async getByName(req, res) {
    const { name } = req.params;
    const roles = await roleService.getRoleByName(name);
    res.json(roles);
  },

  async create(req, res) {
    const { role_name } = req.body;

    if (!role_name)
      return res.status(400).json({ message: "role_name is required" });

    const id = await roleService.createRole(role_name);
    res.status(201).json({ message: "Role created", roleID: id });
  },

  async update(req, res) {
    const { roleID } = req.params;
    const fields = req.body;

    const updated = await roleService.updateRole(roleID, fields);

    if (!updated) return res.status(400).json({ message: "Update failed" });

    res.json({ message: "Role updated" });
  },

  async delete(req, res) {
    const { roleID } = req.params;
    const deleted = await roleService.deleteRole(roleID);

    if (!deleted) return res.status(404).json({ message: "Role not found" });

    res.json({ message: "Role deleted" });
  },

  async deleteAll(req, res) {
    const count = await roleService.deleteAllRoles();
    res.json({ message: `${count} roles deleted` });
  }
};
