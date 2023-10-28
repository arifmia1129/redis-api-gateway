import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const initiatePayment = async (req: Request) => {
  const { data } = await CoreService.post('/student-semester-payment/initiate-payment', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const completePayment = async (req: Request) => {
  const { data } = await CoreService.post('/student-semester-payment/complete-payment', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const PaymentService = {
  initiatePayment,
  completePayment
};
