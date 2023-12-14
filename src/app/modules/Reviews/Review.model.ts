// import { Schema, model } from 'mongoose';
// import { TReview } from './Review.interface';

// const reviewSchema = new Schema<TReview>(
//   {
//     courseId: { type: Schema.Types.ObjectId, required: true },
//     rating: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
//     review: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   },
// );

// export const reviews = model<TReview>('reviews', reviewSchema);


import { Schema, model } from 'mongoose';
import { TReview } from './Review.interface';

const reviewSchema = new Schema<TReview>({
  courseId: { type: Schema.Types.ObjectId, required: true },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  review: { type: String, required: true },
});
export const reviews = model<TReview>('reviews', reviewSchema);
