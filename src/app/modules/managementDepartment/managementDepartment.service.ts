import { AuthService } from '../../../shared/axios';

const createManagementDepartmentService = async (info: any) => {
  const { data } = await AuthService.post('management-departments/create-management', info);
  return data;
};
const getManagementDepartmentService = async () => {
  const { data } = await AuthService.get('management-departments');
  return data;
};

export const ManagementDepartmentService = {
  createManagementDepartmentService,
  getManagementDepartmentService
};
