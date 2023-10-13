import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { FacultyService } from './faculty.service';

const updateFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateFacultyService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getFacultyService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getFacultyCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getFacultyCourseService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getFacultyCourseStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getFacultyCourseStudentService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = {
  updateFaculty,
  getFaculty,
  getFacultyCourse,
  getFacultyCourseStudent
};
