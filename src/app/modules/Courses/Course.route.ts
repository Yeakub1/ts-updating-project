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
router.put(
  '/:courseId',
  validateRequest(courseValidation.updatecourseValidationSchema),
  courseControllers.updateCourse,
);
router.get('/', courseControllers.allCourseFiltaring);
router.get('/:courseId', courseControllers.getSingleCourse);
router.get('/:courseId/reviews', courseControllers.getSingleCourseReview);
router.get('/best', courseControllers.getBestCourse);

export const courseRoute = router;
