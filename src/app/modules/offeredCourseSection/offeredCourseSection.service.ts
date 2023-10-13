import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const createOfferedCourseSectionService = async (req: Request) => {
  const { data } = await CoreService.post('offered-course-section/create', req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

const getOfferedCourseSectionService = async (req: Request) => {
  const { data } = await CoreService.get('offered-course-section', {
    params: req.query
  });

  return data;
};

export const OfferedCourseSectionService = {
  createOfferedCourseSectionService,
  getOfferedCourseSectionService
};
