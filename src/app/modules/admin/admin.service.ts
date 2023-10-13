import { Request } from 'express';
import { AuthService } from '../../../shared/axios';

const getAdminServie = async (req: Request) => {
  const { data } = await AuthService.get('/admins', {
    params: req.query
  });

  return data;
};

const getAdminByIdService = async (req: Request) => {
  const { data } = await AuthService.get(`/admins/${req.params.id}`);

  return data;
};

const deleteAdminByIdService = async (req: Request) => {
  const { data } = await AuthService.delete(`/admins/${req.params.id}`);

  return data;
};

export const AdminService = {
  getAdminServie,
  getAdminByIdService,
  deleteAdminByIdService
};
