import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { CategoryValidation } from './Category.validation';
import { CategoryControllers } from './Category.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(CategoryValidation.createCategoryVlidationSchema),
  CategoryControllers.createCategory,
);
router.get('/:categoryId', CategoryControllers.getSingleCategory);
router.get('/', CategoryControllers.getAllCategory);
export const CategoryRoute = router;
