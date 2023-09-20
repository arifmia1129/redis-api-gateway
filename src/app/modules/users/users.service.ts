import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';

const createStudentService = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedFileInfo: ICloudinaryResponse | undefined =
    await FileUploadHelper.uploadToCloudinary(file);
  console.log(uploadedFileInfo);
};

export const UserService = {
  createStudentService
};
