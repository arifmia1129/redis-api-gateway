import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getStudent);
router.get('/my-course', StudentController.getMyCourse);
router.get('/my-course-scheduels', StudentController.getMyCourseSchedule);
router.get('/my-academic-info', StudentController.getMyAcademicInfo);

router.get('/:id', StudentController.getStudentById);
router.delete('/:id', StudentController.deleteStudentById);

export const StudentRouter = router;
