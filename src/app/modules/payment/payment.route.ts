import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/initiate', PaymentController.initiatePayment);
router.post('/complete', PaymentController.completePayment);
router.get('/', PaymentController.getAllPayment);
router.get('/:id', PaymentController.getPaymentById);
router.get('/validate', PaymentController.validatePayment);

export const PaymentRouter = router;
