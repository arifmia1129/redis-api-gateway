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
    const result = await ManagementDepartmentService.getManagementDepartmentService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getManagementDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getManagementDepartmentByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateManagementDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.updateManagementDepartmentByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteManagementDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.deleteManagementDepartmentByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ManagementDepartment = {
  createManagementDepartment,
  getManagementDepartment,
  getManagementDepartmentById,
  updateManagementDepartmentById,
  deleteManagementDepartmentById
};
