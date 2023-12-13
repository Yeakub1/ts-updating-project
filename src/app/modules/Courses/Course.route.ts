import express from 'express';
import { courseValidation } from './Course.validation';
import { courseControllers } from './Course.controller';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(courseValidation.createcourseValidationSchema),
  courseControllers.createCourse,
);
router.get('/:courseId', courseControllers.getSingleCourse);
router.patch(
  '/:courseId',
  validateRequest(courseValidation.updatecourseValidationSchema),
  courseControllers.updateCourse,
);
router.get('/', courseControllers.getAllCourse);

export const courseRoute = router;
