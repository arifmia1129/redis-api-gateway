import sendResponse from '../../../shared/response';
import { ManagementDepartmentService } from './managementDepartment.service';
import { NextFunction, Request, Response } from 'express';

const createManagementDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.createManagementDepartmentService(req.body);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getManagementDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getManagementDepartmentService();

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ManagementDepartment = {
  createManagementDepartment,
  getManagementDepartment
};
