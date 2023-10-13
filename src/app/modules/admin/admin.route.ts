import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.get('/', AdminController.getAdmin);
router.get('/:id', AdminController.getAdminById);
router.delete('/:id', AdminController.deleteAdminById);

export const AdminRouter = router;
