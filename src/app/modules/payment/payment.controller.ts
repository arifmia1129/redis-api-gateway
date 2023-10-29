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
const getAllPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentService.getAllPayment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getPaymentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentService.getPaymentById(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const validatePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentService.validatePayment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PaymentController = {
  initiatePayment,
  completePayment,
  getAllPayment,
  getPaymentById,
  validatePayment
};
