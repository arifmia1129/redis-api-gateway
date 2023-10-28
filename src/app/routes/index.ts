import express from 'express';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { UsersRouter } from '../modules/users/users.route';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.route';
import { AuthenticationRouter } from '../modules/auth/auth.route';
import { FacultyRouter } from '../modules/faculty/faculty.route';
import { ManagementDepartmentRouter } from '../modules/managementDepartment/managementDepartment.router';
import { AdminRouter } from '../modules/admin/admin.route';
import { StudentRouter } from '../modules/student/student.route';
import { BuildingRouter } from '../modules/building/building.route';
import { RoomRouter } from '../modules/room/room.route';
import { CourseRouter } from '../modules/course/course.route';
import { SemesterRegistrationRouter } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseRouter } from '../modules/offeredCourse/offeredCourse.route';
import { OfferedCourseSectionRouter } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { StudentMarkRouter } from '../modules/studentMark/studentMark.route';
import { PaymentRouter } from '../modules/payment/payment.route';

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
  },
  {
    path: '/admin',
    routes: AdminRouter
  },
  {
    path: '/student',
    routes: StudentRouter
  },
  {
    path: '/building',
    routes: BuildingRouter
  },
  {
    path: '/room',
    routes: RoomRouter
  },
  {
    path: '/course',
    routes: CourseRouter
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRouter
  },
  {
    path: '/offered-course',
    routes: OfferedCourseRouter
  },
  {
    path: '/offered-course-section',
    routes: OfferedCourseSectionRouter
  },
  {
    path: '/student-mark',
    routes: StudentMarkRouter
  },
  {
    path: '/payment',
    routes: PaymentRouter
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
