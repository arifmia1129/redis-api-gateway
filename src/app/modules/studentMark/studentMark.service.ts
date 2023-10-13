import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getStudentMarkService = async (req: Request) => {
  const { data } = await CoreService.get('/student-marks', {
    params: req.query
  });

  return data;
};

const updateStudentMarkService = async (req: Request) => {
  const { data } = await CoreService.patch('/student-marks', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const updateStudentTotalMarkService = async (req: Request) => {
  const { data } = await CoreService.patch('/student-marks/total-final', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  console.log({ data });

  return data;
};

export const StudentMarkService = {
  getStudentMarkService,
  updateStudentMarkService,
  updateStudentTotalMarkService
};
