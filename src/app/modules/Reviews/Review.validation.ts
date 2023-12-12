import { z } from 'zod';

const createReviewVlidationSchema = z.object({
  body: z.object({
    courseId: z.string({
      invalid_type_error: 'courseId must be string',
      required_error: 'courseId is required',
    }),
    review: z.string({
      invalid_type_error: 'Review must be string',
      required_error: 'Review Is required',
    }),
    rating: z.number({
      invalid_type_error: 'Rating must be string',
      required_error: 'Rating Is required',
    }),
  }),
});

export const reviewValidation = {
  createReviewVlidationSchema,
};
