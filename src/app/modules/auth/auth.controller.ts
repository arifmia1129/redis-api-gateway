import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUserAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUserAuthService(req);

    const { refreshToken, ...other } = result?.data;

    // console.log(result);

    // set refresh token to cookie
    const cookieOption = {
      secret: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', refreshToken, cookieOption);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Log in process done successfully',
      data: other
    });
  } catch (error) {
    next(error);
  }
};
const refreshTokenAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.refreshTokenAuthService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const changePasswordAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.changePasswordAuthService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUserAuth,
  refreshTokenAuth,
  changePasswordAuth
};
