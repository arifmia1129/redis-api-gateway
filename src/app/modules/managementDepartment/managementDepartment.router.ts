import express from 'express';
import { ManagementDepartment } from './managementDepartment.controller';

const router = express.Router();

router.post('/', ManagementDepartment.createManagementDepartment);
router.get('/', ManagementDepartment.getManagementDepartment);

export const ManagementDepartmentRouter = router;
