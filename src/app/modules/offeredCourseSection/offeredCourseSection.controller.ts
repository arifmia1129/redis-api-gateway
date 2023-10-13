import { NextFunction, Request, Response } from 'express';
import { OfferedCourseSectionService } from './offeredCourseSection.service';
import sendResponse from '../../../shared/response';

const createOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.createOfferedCourseSectionService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getOfferedCourseSectionService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseSectionController = {
  createOfferedCourseSection,
  getOfferedCourseSection
};
