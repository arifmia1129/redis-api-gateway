import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyValidation),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.createAcademicFaculty
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.getAcademicFaculty
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.getAcademicFacultyById
);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidation),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.updateAcademicFacultyById
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.deleteAcademicFacultyById
);

export const AcademicFacultyRouter = router;
