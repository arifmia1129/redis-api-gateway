import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const createOfferedCourseService = async (req: Request) => {
  const { data } = await CoreService.post('offered-course/create', req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

const getOfferedCourseService = async (req: Request) => {
  const { data } = await CoreService.get('offered-course', {
    params: req.query
  });

  return data;
};

export const OfferedCourseService = {
  createOfferedCourseService,
  getOfferedCourseService
};
