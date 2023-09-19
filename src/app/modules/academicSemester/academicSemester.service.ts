import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import config from '../../../config';

const createAcademicSemesterService = async (req: Request) => {
  const { data } = await CoreService.post('/academic-semester/create', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const AcademicSemesterService = {
  createAcademicSemesterService
};
