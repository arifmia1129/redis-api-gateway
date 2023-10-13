import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentMarkService } from './studentMark.service';

const getStudentMark = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentMarkService.getStudentMarkService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudentMark = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentMarkService.updateStudentMarkService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudentTotalMark = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentMarkService.updateStudentTotalMarkService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentMarkController = {
  getStudentMark,
  updateStudentMark,
  updateStudentTotalMark
};
