import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.createAcademicSemster
);

export const AcademicSemesterRouter = router;
