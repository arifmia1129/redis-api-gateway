import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './users.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import {
  createAdminValidation,
  createFacultyValidation,
  createStudentValidation
} from './users.validation';

const router = express.Router();

router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = createStudentValidation.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);
router.post(
  '/admin',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = createAdminValidation.parse(JSON.parse(req.body.data));
    return UserController.createAdmin(req, res, next);
  }
);
router.post(
  '/create-faculty',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = createFacultyValidation.parse(JSON.parse(req.body.data));
    return UserController.createFaculty(req, res, next);
  }
);

export const UsersRouter = router;
