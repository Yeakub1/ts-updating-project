import { z } from 'zod';

const courseTagValidationSchema = z.object({
  name: z.string().trim(),
});
const courseDetailsValidationSchema = z.object({
  level: z.string(),
  description: z.string(),
});

export const createcourseValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required.' }),
    instructor: z.string({ required_error: 'instructor is required.' }),
    categoryId: z.string({ required_error: 'categoryId is required.' }),
    price: z.number({ required_error: 'Price is required.' }),
    tags: z.array(courseTagValidationSchema),
    startDate: z.string({ required_error: 'startDate is required.' }),
    endDate: z.string({ required_error: 'endDate is required.' }),
    language: z.string({ required_error: 'language is required.' }),
    provider: z.string({ required_error: 'provider is required.' }),
    durationInWeeks: z.number().optional(),
    details: courseDetailsValidationSchema,
  }),
});

const courseTagValidationUpdateSchema = z.object({
  name: z.string().optional(),
});
const courseDetailsValidationUpdateSchema = z.object({
  level: z.string().optional(),
  description: z.string().optional(),
});

export const updatecourseValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required.' }).optional(),
    instructor: z
      .string({ required_error: 'instructor is required.' })
      .optional(),
    categoryId: z
      .string({ required_error: 'categoryId is required.' })
      .optional(),
    price: z.number({ required_error: 'Price is required.' }).optional(),
    tags: z.array(courseTagValidationUpdateSchema),
    startDate: z
      .string({ required_error: 'startDate is required.' })
      .optional(),
    endDate: z.string({ required_error: 'endDate is required.' }).optional(),
    language: z.string({ required_error: 'language is required.' }).optional(),
    provider: z.string({ required_error: 'provider is required.' }).optional(),
    durationInWeeks: z.number().optional(),
    details: courseDetailsValidationUpdateSchema,
  }),
});

export const courseValidation = {
  createcourseValidationSchema,
  updatecourseValidationSchema,
};
