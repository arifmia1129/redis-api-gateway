import { z } from 'zod';

const createAcademicFacultyValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    })
  })
});
const updateAcademicFacultyValidation = z.object({
  body: z.object({
    title: z.string().optional()
  })
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidation,
  updateAcademicFacultyValidation
};
