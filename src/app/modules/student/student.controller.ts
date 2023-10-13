import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentService } from './student.service';

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getStudentService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourseService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getStudentByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteStudentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.deleteStudentByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourseSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourseScheduleService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyAcademicInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyAcademicInfoService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getStudent,
  getStudentById,
  deleteStudentById,
  getMyCourse,
  getMyCourseSchedule,
  getMyAcademicInfo
};
