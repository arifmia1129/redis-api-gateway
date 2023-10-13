import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const createCourseService = async (req: Request) => {
  const { data } = await CoreService.post('course/create', req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

const getCourseService = async (req: Request) => {
  const { data } = await CoreService.get('course', {
    params: req.query
  });

  return data;
};

export const CourseService = {
  createCourseService,
  getCourseService
};
