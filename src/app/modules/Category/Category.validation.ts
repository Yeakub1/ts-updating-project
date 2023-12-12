import { z } from 'zod';

const createCategoryVlidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Category must be string' }),
  }),
});

export const CategoryValidation = {
  createCategoryVlidationSchema,
};
