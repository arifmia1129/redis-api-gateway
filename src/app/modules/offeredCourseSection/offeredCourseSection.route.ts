import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';

const router = express.Router();

router.post('/', OfferedCourseSectionController.createOfferedCourseSection);
router.get('/', OfferedCourseSectionController.getOfferedCourseSection);

export const OfferedCourseSectionRouter = router;
