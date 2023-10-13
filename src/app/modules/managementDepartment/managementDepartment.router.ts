import express from 'express';
import { ManagementDepartment } from './managementDepartment.controller';

const router = express.Router();

router.post('/', ManagementDepartment.createManagementDepartment);
router.get('/', ManagementDepartment.getManagementDepartment);
router.get('/:id', ManagementDepartment.getManagementDepartmentById);
router.patch('/:id', ManagementDepartment.updateManagementDepartmentById);
router.delete('/:id', ManagementDepartment.deleteManagementDepartmentById);

export const ManagementDepartmentRouter = router;
