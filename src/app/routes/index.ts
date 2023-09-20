import express from 'express';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { UsersRouter } from '../modules/users/users.route';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.route';

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
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
