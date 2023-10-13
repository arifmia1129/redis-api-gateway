import { Request } from 'express';
import { AuthService } from '../../../shared/axios';

const createManagementDepartmentService = async (info: any) => {
  const { data } = await AuthService.post('management-departments/create-management', info);
  return data;
};
const getManagementDepartmentService = async (req: Request) => {
  const { data } = await AuthService.get('management-departments', {
    params: req.query
  });
  return data;
};

const getManagementDepartmentByIdService = async (req: Request) => {
  const { data } = await AuthService.get(`management-departments/${req.params.id}`);
  return data;
};

const updateManagementDepartmentByIdService = async (req: Request) => {
  const { data } = await AuthService.patch(`management-departments/${req.params.id}`, req.body);
  return data;
};

const deleteManagementDepartmentByIdService = async (req: Request) => {
  const { data } = await AuthService.delete(`management-departments/${req.params.id}`);
  return data;
};

export const ManagementDepartmentService = {
  createManagementDepartmentService,
  getManagementDepartmentService,
  getManagementDepartmentByIdService,
  updateManagementDepartmentByIdService,
  deleteManagementDepartmentByIdService
};
