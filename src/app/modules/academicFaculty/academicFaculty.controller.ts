import { NextFunction, Request, Response } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';

const createAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.createAcademicFacultyService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAcademicFacultyService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAcademicFacultyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAcademicFacultyByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateAcademicFacultyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateAcademicFacultyByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteAcademicFacultyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteAcademicFacultyByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAcademicFaculty,
  getAcademicFacultyById,
  updateAcademicFacultyById,
  deleteAcademicFacultyById
};
