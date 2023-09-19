import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const createAcademicSemster = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.createAcademicSemesterService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAcademicSemster = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAcademicSemesterService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAcademicSemsterById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAcademicSemesterByIdService(req, req.params.id);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createAcademicSemster,
  getAcademicSemster,
  getAcademicSemsterById
};
