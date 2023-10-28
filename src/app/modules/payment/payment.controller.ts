import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { PaymentService } from './payment.service';

const initiatePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentService.initiatePayment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const completePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentService.completePayment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PaymentController = {
  initiatePayment,
  completePayment
};
