import express from 'express';
import { FacultyController } from './faculty.controller';

const router = express.Router();

router.get('/', FacultyController.getFaculty);
router.get('/my-course', FacultyController.getFacultyCourse);
router.get('/my-course-student', FacultyController.getFacultyCourseStudent);

router.patch('/:id', FacultyController.updateFaculty);

export const FacultyRouter = router;
