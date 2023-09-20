import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import config from '../../../config';
import { IGenericResponse } from '../../../interfaces/common';

const createAcademicDepartmentService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.post('/academic-department/create', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const getAcademicDepartmentService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.get('/academic-department', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const getAcademicSemesterByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.get(`/academic-department/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const updateAcademicSemesterByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.patch(`/academic-department/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const deleteAcademicSemesterByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await AuthService.delete(`/academic-department/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const AcademicDepartmentService = {
  createAcademicDepartmentService,
  getAcademicDepartmentService,
  getAcademicSemesterByIdService,
  updateAcademicSemesterByIdService,
  deleteAcademicSemesterByIdService
};
