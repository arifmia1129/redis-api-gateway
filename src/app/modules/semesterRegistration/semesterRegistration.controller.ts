import { NextFunction, Request, Response } from 'express';
import { SemesterRegistrationService } from './semesterRegistration.service';
import sendResponse from '../../../shared/response';

const createSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.createSemesterRegistrationService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getSemesterRegistrationService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSemesterRegistrationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getSemesterRegistrationByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateSemesterRegistrationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.updateSemesterRegistrationByIdService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getStudentSemesterRegistration(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const enrollSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.enrollSemesterRegistrationService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const withdrewSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.withdrewSemesterRegistrationService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const confirmSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.confirmSemesterRegistrationService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getSemesterRegistration,
  getSemesterRegistrationById,
  updateSemesterRegistrationById,
  getStudentSemesterRegistration,
  enrollSemesterRegistration,
  withdrewSemesterRegistration,
  confirmSemesterRegistration
};
