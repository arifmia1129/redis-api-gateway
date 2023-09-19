import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';

const createStudentService = async (req: Request) => {
  const file = req.file;
  const uploadedFileInfo = await FileUploadHelper.uploadToCloudinary(file);
  console.log(uploadedFileInfo);
};

export const UserService = {
  createStudentService
};
