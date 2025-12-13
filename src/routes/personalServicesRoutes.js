// src/routes/personalServicesRoutes.js
import express from 'express';
import PersonalServicesController from '../controllers/personalServicesController.js';

const router = express.Router();

router.get('/', PersonalServicesController.getAll);
router.get('/:id', PersonalServicesController.getById);
router.post('/', PersonalServicesController.create);
router.put('/:id', PersonalServicesController.update);
router.delete('/:id', PersonalServicesController.delete);

export default router;
