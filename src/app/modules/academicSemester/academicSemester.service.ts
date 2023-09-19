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
const getAcademicSemesterByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.get(`/academic-semester/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const updateAcademicSemesterByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.patch(`/academic-semester/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const deleteAcademicSemesterByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.delete(`/academic-semester/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const AcademicSemesterService = {
  createAcademicSemesterService,
  getAcademicSemesterService,
  getAcademicSemesterByIdService,
  updateAcademicSemesterByIdService,
  deleteAcademicSemesterByIdService
};
