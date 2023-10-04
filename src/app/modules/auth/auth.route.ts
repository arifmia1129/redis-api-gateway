import express from 'express';
import { AuthenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  changePasswordAuthValidation,
  loginAuthValidation,
  refreshTokenAuthValidation
} from './auth.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post('/login', validateRequest(loginAuthValidation), AuthenticationController.loginUserAuth);
router.get(
  '/refresh-token',
  validateRequest(refreshTokenAuthValidation),
  AuthenticationController.refreshTokenAuth
);
router.post(
  '/change-password',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.FACULTY
  ),
  validateRequest(changePasswordAuthValidation),
  AuthenticationController.changePasswordAuth
);

export const AuthenticationRouter = router;
