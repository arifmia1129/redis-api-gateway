import express from 'express';
import { StudentMarkController } from './studentMark.controller';

const router = express.Router();

router.get('/', StudentMarkController.getStudentMark);
router.patch('/', StudentMarkController.updateStudentMark);
router.patch('/total-final', StudentMarkController.updateStudentTotalMark);

export const StudentMarkRouter = router;
