import express from 'express';
import { OfferedCourseController } from './offeredCourse.controller';

const router = express.Router();

router.post('/', OfferedCourseController.createOfferedCourse);
router.get('/', OfferedCourseController.getOfferedCourse);

export const OfferedCourseRouter = router;
