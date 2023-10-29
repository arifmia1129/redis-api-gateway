import { Request } from 'express';
import { CoreService, PaymentServiceReq } from '../../../shared/axios';

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
const getAllPayment = async (req: Request) => {
  const { data } = await CoreService.get('/student-semester-payment', {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const getPaymentById = async (req: Request) => {
  const { data } = await CoreService.get(`/student-semester-payment/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const validatePayment = async (req: Request) => {
  const { data } = await PaymentServiceReq.get(`/payment/validate`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const PaymentService = {
  initiatePayment,
  completePayment,
  getAllPayment,
  getPaymentById,
  validatePayment
};
