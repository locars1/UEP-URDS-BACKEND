// src/controllers/personalServicesController.js
import PersonalServicesService from '../services/personalServicesService.js';

export default class PersonalServicesController {

    static async getAll(req, res) {
        try {
            const services = await PersonalServicesService.getAll();
            res.json(services);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch personal services' });
        }
    }

    static async getById(req, res) {
        try {
            const service = await PersonalServicesService.getById(req.params.id);
            if (!service) return res.status(404).json({ message: 'Not found' });
            res.json(service);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch personal service' });
        }
    }

    static async create(req, res) {
        try {
            const newId = await PersonalServicesService.create(req.body);
            res.status(201).json({ message: 'Created successfully', personal_service_id: newId });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to create personal service' });
        }
    }

    static async update(req, res) {
        try {
            await PersonalServicesService.update(req.params.id, req.body);
            res.json({ message: 'Updated successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update personal service' });
        }
    }

    static async delete(req, res) {
        try {
            await PersonalServicesService.delete(req.params.id);
            res.json({ message: 'Deleted successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete personal service' });
        }
    }
}
