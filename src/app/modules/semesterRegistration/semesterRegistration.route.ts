import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.post('/', SemesterRegistrationController.createSemesterRegistration);
router.post('/enroll', SemesterRegistrationController.enrollSemesterRegistration);
router.post('/withdrew', SemesterRegistrationController.withdrewSemesterRegistration);
router.post('/confirm', SemesterRegistrationController.confirmSemesterRegistration);
router.get('/', SemesterRegistrationController.getSemesterRegistration);
router.get(
  '/student/my-semester-registration',
  SemesterRegistrationController.getStudentSemesterRegistration
);
router.get('/:id', SemesterRegistrationController.getSemesterRegistrationById);
router.patch('/:id', SemesterRegistrationController.updateSemesterRegistrationById);
export const SemesterRegistrationRouter = router;
