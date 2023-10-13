import { NextFunction, Request, Response } from 'express';
import { CourseService } from './course.service';
import sendResponse from '../../../shared/response';

const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.createCourseService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getCourseService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  createCourse,
  getCourse
};
