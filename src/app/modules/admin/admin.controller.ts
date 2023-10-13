import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AdminService } from './admin.service';

const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.getAdminServie(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAdminById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.getAdminByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteAdminById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.deleteAdminByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AdminController = {
  getAdmin,
  getAdminById,
  deleteAdminById
};
