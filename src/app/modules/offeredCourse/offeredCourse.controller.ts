import { NextFunction, Request, Response } from 'express';
import { OfferedCourseService } from './offeredCourse.service';
import sendResponse from '../../../shared/response';

const createOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.createOfferedCourseService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getOfferedCourseService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  createOfferedCourse,
  getOfferedCourse
};
