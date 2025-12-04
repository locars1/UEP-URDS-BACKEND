// services/collegeService.js
import { collegeRepository } from "../repositories/collegeRepository.js";

export const collegeService = {
  async getAllColleges() {
    return await collegeRepository.getAll();
  },

  async getCollegeById(collegeID) {
    return await collegeRepository.getById(collegeID);
  },

  async getCollegeByName(name) {
    return await collegeRepository.getByName(name);
  },

  async createCollege(data) {
    return await collegeRepository.create(data);
  },

  async updateCollege(collegeID, fields) {
    return await collegeRepository.update(collegeID, fields);
  },

  async deleteCollege(collegeID) {
    return await collegeRepository.deleteById(collegeID);
  },

  async deleteAllColleges() {
    return await collegeRepository.deleteAll();
  }
};
