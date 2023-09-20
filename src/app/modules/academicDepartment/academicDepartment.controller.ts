import { NextFunction, Request, Response } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

const createAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.createAcademicDepartmentService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAcademicDepartmentService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAcademicDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAcademicSemesterByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateAcademicDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.updateAcademicSemesterByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteAcademicDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.deleteAcademicSemesterByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAcademicDepartment,
  getAcademicDepartmentById,
  updateAcademicDepartmentById,
  deleteAcademicDepartmentById
};
