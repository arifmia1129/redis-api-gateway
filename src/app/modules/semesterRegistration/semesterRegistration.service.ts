import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const createSemesterRegistrationService = async (req: Request) => {
  const { data } = await CoreService.post('semester-registration/create', req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

const getSemesterRegistrationService = async (req: Request) => {
  const { data } = await CoreService.get('semester-registration', {
    params: req.query
  });

  return data;
};

const getSemesterRegistrationByIdService = async (req: Request) => {
  const { data } = await CoreService.get(`semester-registration/${req.params.id}`);

  return data;
};

const updateSemesterRegistrationByIdService = async (req: Request) => {
  const { data } = await CoreService.patch(`semester-registration/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getStudentSemesterRegistration = async (req: Request) => {
  const { data } = await CoreService.get(`semester-registration/student/my-semester-registration`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const enrollSemesterRegistrationService = async (req: Request) => {
  const { data } = await CoreService.post(`semester-registration/course-enroll`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const withdrewSemesterRegistrationService = async (req: Request) => {
  const { data } = await CoreService.post(`semester-registration/course-withdrew`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const confirmSemesterRegistrationService = async (req: Request) => {
  const { data } = await CoreService.post(`semester-registration/confirm-registration`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

export const SemesterRegistrationService = {
  createSemesterRegistrationService,
  getSemesterRegistrationService,
  getSemesterRegistrationByIdService,
  updateSemesterRegistrationByIdService,
  getStudentSemesterRegistration,
  enrollSemesterRegistrationService,
  withdrewSemesterRegistrationService,
  confirmSemesterRegistrationService
};
