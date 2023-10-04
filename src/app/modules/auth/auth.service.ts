import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';
import { LoginResponse } from '../../../interfaces/auth';

const loginUserAuthService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.post('/auth/login', req.body);
  return data;
};
const refreshTokenAuthService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.get('/auth/refresh-token', {
    headers: {
      cookie: `refreshToken=${req?.cookies?.refreshToken}`
    }
  });
  return data;
};
const changePasswordAuthService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.post('/auth/change-password', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const AuthenticationService = {
  loginUserAuthService,
  refreshTokenAuthService,
  changePasswordAuthService
};
