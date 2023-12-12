import {Types, Model } from 'mongoose';

export type TReview = {
  courseId: Types.ObjectId;
  rating: number;
  review: string;
};

export interface reviewModle extends Model<TReview> {
  // eslint-disable-next-line no-unused-vars
  isUserExits(id: string): Promise<TReview | null>;
}
