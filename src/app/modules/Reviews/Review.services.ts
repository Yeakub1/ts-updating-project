import { TReview } from './Review.interface';
import { reviews } from './Review.model';

const createReviewIntoDB = async (payload: TReview) => {
  const result = await reviews.create(payload);
  return result;
};

const getAllReviewFromDB = async () => {
  const result = await reviews.find();
  return result;
};

export const reviewServices = {
  createReviewIntoDB,
  getAllReviewFromDB,
};
