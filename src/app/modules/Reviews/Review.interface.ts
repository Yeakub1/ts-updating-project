import {Types, Model } from 'mongoose';

export type TReview = {
  courseId: Types.ObjectId;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
};

export interface reviewModle extends Model<TReview> {
  // eslint-disable-next-line no-unused-vars
  isUserExits(id: string): Promise<TReview | null>;
}
