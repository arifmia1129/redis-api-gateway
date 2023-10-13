import { Request } from 'express';
import { AuthService, CoreService } from '../../../shared/axios';

const getFacultyService = async (req: Request) => {
  const { data } = await AuthService.get(`/faculty`, req.body);

  return data;
};

const getFacultyCourseService = async (req: Request) => {
  const { data } = await CoreService.get(`/faculty/my-courses`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};
const getFacultyCourseStudentService = async (req: Request) => {
  const { data } = await CoreService.get(`/faculty/my-course-student`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const updateFacultyService = async (req: Request) => {
  const { id } = req.params;

  const { data } = await AuthService.patch(`/faculty/${id}`, req.body);

  return data;
};

export const FacultyService = {
  updateFacultyService,
  getFacultyService,
  getFacultyCourseService,
  getFacultyCourseStudentService
};
