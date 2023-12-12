import { TReview } from './Review.interface';
import { Schema, model } from 'mongoose';

const reviewSchema = new Schema<TReview>(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Courses' },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const reviews = model<TReview>('reviews', reviewSchema);
