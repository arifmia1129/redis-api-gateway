import express from 'express';
import { FacultyController } from './faculty.controller';

const router = express.Router();

router.patch('/:id', FacultyController.updateFaculty);

export const FacultyRouter = router;
