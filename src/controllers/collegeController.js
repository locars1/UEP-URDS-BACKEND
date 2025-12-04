// controllers/collegeController.js
import { collegeService } from "../services/collegeService.js";

export const collegeController = {
  async getAll(req, res) {
    const colleges = await collegeService.getAllColleges();
    res.json(colleges);
  },

  async getById(req, res) {
    const { collegeID } = req.params;
    const college = await collegeService.getCollegeById(collegeID);

    if (!college)
      return res.status(404).json({ message: "College not found" });

    res.json(college);
  },

  async getByName(req, res) {
    const { name } = req.params;
    const colleges = await collegeService.getCollegeByName(name);
    res.json(colleges);
  },

  async create(req, res) {
    const { college_name, college_user_id } = req.body;

    if (!college_name)
      return res.status(400).json({ message: "college_name is required" });

    const collegeID = await collegeService.createCollege({
      college_name,
      college_user_id: college_user_id || null
    });

    res.status(201).json({ message: "College created", collegeID });
  },

  async update(req, res) {
    const { collegeID } = req.params;
    const fields = req.body;

    const updated = await collegeService.updateCollege(collegeID, fields);

    if (!updated)
      return res.status(400).json({ message: "Update failed" });

    res.json({ message: "College updated" });
  },

  async delete(req, res) {
    const { collegeID } = req.params;
    const deleted = await collegeService.deleteCollege(collegeID);

    if (!deleted)
      return res.status(404).json({ message: "College not found" });

    res.json({ message: "College deleted" });
  },

  async deleteAll(req, res) {
    const count = await collegeService.deleteAllColleges();
    res.json({ message: `${count} colleges deleted` });
  }
};
