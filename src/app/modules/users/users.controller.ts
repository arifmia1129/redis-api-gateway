import { NextFunction, Request, Response } from 'express';
import { UserService } from './users.service';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudentService(req);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent
};
