import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { reviewServices } from './Review.services';

const createReview = catchAsync(async (req, res) => {
  const result = await reviewServices.createReviewIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review is created successfuly',
    data: result,
  });
});

const getAllReview = catchAsync(async (req, res) => {
  const result = await reviewServices.getAllReviewFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieved successfully',
    data: result,
  });
});

const getSingleReview = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  const result = await reviewServices.getSingleReviewFromDB(reviewId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review is retrieved succesfully',
    data: result,
  });
});

export const reviewControllers = {
  createReview,
  getAllReview,
  getSingleReview
};
