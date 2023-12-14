import { reviewControllers } from './Review.controller';
import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { reviewValidation } from './Review.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(reviewValidation.createReviewVlidationSchema),
  reviewControllers.createReview,
);

router.get('/', reviewControllers.getAllReview);

export const ReviewRoute = router;
