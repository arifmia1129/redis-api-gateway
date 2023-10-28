import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/initiate', PaymentController.initiatePayment);
router.post('/complete', PaymentController.completePayment);

export const PaymentRouter = router;
