import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import config from '../../../config';
import { IGenericResponse } from '../../../interfaces/common';

const createAcademicFacultyService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.post('/academic-faculty/create', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const getAcademicFacultyService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.get('/academic-faculty', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const getAcademicFacultyByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.get(`/academic-faculty/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const updateAcademicFacultyByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.patch(`/academic-faculty/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};
const deleteAcademicFacultyByIdService = async (req: Request): Promise<IGenericResponse> => {
  const { data } = await CoreService.delete(`/academic-faculty/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

export const AcademicFacultyService = {
  createAcademicFacultyService,
  getAcademicFacultyService,
  getAcademicFacultyByIdService,
  updateAcademicFacultyByIdService,
  deleteAcademicFacultyByIdService
};
