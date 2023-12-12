import { TReview } from './Review.interface';
import { reviews } from './Review.model';

const createReviewIntoDB = async (payload: TReview) => {
  const result = await reviews.create(payload);
  return result;
};

const getAllReviewFromDB = async () => {
  const result = await reviews.find().populate('courseId');
  return result;
};

const getSingleReviewFromDB = async (id: string) => {
  const result = await reviews.findById(id).populate('courseId');
  return result;
};

export const reviewServices = {
  createReviewIntoDB,
  getAllReviewFromDB,
  getSingleReviewFromDB
};
