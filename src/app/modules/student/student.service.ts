import { Request } from 'express';
import { AuthService, CoreService } from '../../../shared/axios';

const getStudentService = async (req: Request) => {
  const { data } = await AuthService.get('/student', {
    params: req.query
  });

  return data;
};

const getMyCourseService = async (req: Request) => {
  const { data } = await CoreService.get('/student/my-course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};
const getMyCourseScheduleService = async (req: Request) => {
  const { data } = await CoreService.get('/student/my-course-scheduels', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getMyAcademicInfoService = async (req: Request) => {
  const { data } = await CoreService.get('/student/my-academic-info', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getStudentByIdService = async (req: Request) => {
  const { data } = await AuthService.get(`/students/${req.params.id}`);

  return data;
};

const deleteStudentByIdService = async (req: Request) => {
  const { data } = await AuthService.delete(`/students/${req.params.id}`);

  return data;
};

export const StudentService = {
  getStudentService,
  getStudentByIdService,
  deleteStudentByIdService,
  getMyCourseService,
  getMyCourseScheduleService,
  getMyAcademicInfoService
};
