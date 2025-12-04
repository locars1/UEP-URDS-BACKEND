// services/roleService.js
import { roleRepository } from "../repositories/roleRepository.js";

export const roleService = {
  async getAllRoles() {
    return await roleRepository.getAll();
  },

  async getRoleById(roleID) {
    return await roleRepository.getById(roleID);
  },

  async getRoleByName(role_name) {
    return await roleRepository.getByName(role_name);
  },

  async createRole(role_name) {
    return await roleRepository.create(role_name);
  },

  async updateRole(roleID, fields) {
    return await roleRepository.update(roleID, fields);
  },

  async deleteRole(roleID) {
    return await roleRepository.deleteById(roleID);
  },

  async deleteAllRoles() {
    return await roleRepository.deleteAll();
  }
};
