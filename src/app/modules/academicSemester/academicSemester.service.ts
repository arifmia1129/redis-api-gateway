import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import config from '../../../config';
import { IGenericResponse } from '../../../interfaces/common';

const createAcademicSemesterService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.post('/academic-semester/create', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const getAcademicSemesterService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.get('/academic-semester', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const AcademicSemesterService = {
  createAcademicSemesterService,
  getAcademicSemesterService
};
