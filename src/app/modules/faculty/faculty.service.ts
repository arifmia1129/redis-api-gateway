import { Request } from 'express';
import { AuthService } from '../../../shared/axios';

const updateFacultyService = async (req: Request) => {
  const { id } = req.params;

  const { data } = await AuthService.patch(`/faculty/${id}`, req.body);

  return data;
};

export const FacultyService = {
  updateFacultyService
};
