import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AcademicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidation),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.createAcademicDepartment
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.getAcademicDepartment
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.getAcademicDepartmentById
);
router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidation),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.updateAcademicDepartmentById
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.deleteAcademicDepartmentById
);

export const AcademicDepartmentRouter = router;
