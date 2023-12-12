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
      title: z.string(),
      instructor: z.string(),
      categoryId: z.string(),
      price: z.number(),
      tags: z.array(courseTagValidationSchema),
      startDate: z.string(),
      endDate: z.string(),
      language: z.string(),
      provider: z.string(),
      durationInWeeks: z.number().optional(),
      details: courseDetailsValidationSchema,
    }),
  })


export const courseValidation = {
  createcourseValidationSchema
};