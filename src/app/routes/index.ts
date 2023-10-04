import express from 'express';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { UsersRouter } from '../modules/users/users.route';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.route';
import { AuthenticationRouter } from '../modules/auth/auth.route';
import { FacultyRouter } from '../modules/faculty/faculty.route';
import { ManagementDepartmentRouter } from '../modules/managementDepartment/managementDepartment.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: AcademicSemesterRouter
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRouter
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRouter
  },
  {
    path: '/users',
    routes: UsersRouter
  },
  {
    path: '/auth',
    routes: AuthenticationRouter
  },
  {
    path: '/faculty',
    routes: FacultyRouter
  },
  {
    path: '/management-department',
    routes: ManagementDepartmentRouter
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
