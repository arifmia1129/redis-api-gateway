import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

// Define the interface for AcademicFaculty
interface AcademicFaculty {
  _id: string;
  title: string;
  syncId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

const createStudentService = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedFileInfo: ICloudinaryResponse | undefined =
    await FileUploadHelper.uploadToCloudinary(file);

  req.body.student.profileImage = uploadedFileInfo?.secure_url;

  const { academicFaculty, academicDepartment, academicSemester } = req.body.student;

  const { data: isExistAcademicFaculty } = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  // Annotate the type of academicFacultyData
  const academicFacultyData: AcademicFaculty | undefined = isExistAcademicFaculty.data[0];

  if (academicFacultyData) {
    req.body.student.academicFaculty = academicFacultyData.id;
  }

  // For Academic Department
  const { data: isExistAcademicDepartment } = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  // Annotate the type of academicDepartmentData
  const academicDepartmentData = isExistAcademicDepartment.data[0];

  if (academicDepartmentData) {
    req.body.student.academicDepartment = academicDepartmentData.id;
  }

  // For Academic Semester
  const { data: isExistAcademicSemester } = await AuthService.get(
    `/academic-semester?syncId=${academicSemester}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  // Annotate the type of academicSemesterData
  const academicSemesterData = isExistAcademicSemester.data[0];

  if (academicSemesterData) {
    req.body.student.academicSemester = academicSemesterData.id;
  }
  const { data: res } = await AuthService.post('/user/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return res;
};
const createFacultyService = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedFileInfo: ICloudinaryResponse | undefined =
    await FileUploadHelper.uploadToCloudinary(file);

  req.body.faculty.profileImage = uploadedFileInfo?.secure_url;

  const { academicFaculty, academicDepartment } = req.body.faculty;

  const { data: isExistAcademicFaculty } = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  // Annotate the type of academicFacultyData
  const academicFacultyData: AcademicFaculty | undefined = isExistAcademicFaculty.data[0];
  if (academicFacultyData) {
    req.body.faculty.academicFaculty = academicFacultyData.id;
  }

  // For Academic Department
  const { data: isExistAcademicDepartment } = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  console.log(academicFacultyData.id);
  // Annotate the type of academicDepartmentData
  const academicDepartmentData = isExistAcademicDepartment.data[0];

  if (academicDepartmentData) {
    req.body.faculty.academicDepartment = academicDepartmentData.id;
  }

  const { data: res } = await AuthService.post('/user/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return res;
};

export const UserService = {
  createStudentService,
  createFacultyService
};
