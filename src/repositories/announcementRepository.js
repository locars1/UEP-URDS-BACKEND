import { db } from "../config/db.js";

const AnnouncementRepository = {
    createAnnouncement: async (data) => {
        let query = "";
        let values = [];

        try {
            query = `
                INSERT INTO announcements 
                (user_id, proposal_title, description, start_date, deadline, guidelines_attachment, status, action)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;

            values = [
                data.user_id,
                data.proposal_title,
                data.description,
                data.start_date,
                data.deadline,
                data.guidelines_attachment,
                data.status,
                data.action,
            ];

            const [result] = await db.query(query, values);
            return result.insertId;

        } catch (err) {
            console.error("🔥 MYSQL ERROR (ANNOUNCEMENT REPOSITORY - CREATE)");
            console.error("Query:", query);
            console.error("Values:", values);
            console.error("Error:", err);
            throw err;
        }
    },

    getAllAnnouncements: async () => {
        const query = `
            SELECT a.*, u.fname, u.lname
            FROM announcements a
            JOIN user u ON a.user_id = u.userID
            ORDER BY timestamp DESC
        `;
        const [rows] = await db.query(query);
        return rows;
    },

    getAnnouncementById: async (id) => {
        const query = `SELECT * FROM announcements WHERE announcement_id = ?`;
        const [rows] = await db.query(query, [id]);
        return rows[0];
    },

    updateAnnouncement: async (id, data) => {
        const query = `
            UPDATE announcements SET 
                proposal_title = ?,
                description = ?,
                start_date = ?,
                deadline = ?,
                guidelines_attachment = ?,
                status = ?,
                action = ?
            WHERE announcement_id = ?
        `;

        const values = [
            data.proposal_title,
            data.description,
            data.start_date,
            data.deadline,
            data.guidelines_attachment,
            data.status,
            data.action,
            id
        ];

        const [result] = await db.query(query, values);
        return result;
    },

    deleteAnnouncement: async (id) => {
        const query = `DELETE FROM announcements WHERE announcement_id = ?`;
        const [result] = await db.query(query, [id]);
        return result;
    }
};

export default AnnouncementRepository;
