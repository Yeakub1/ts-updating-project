import { Model } from "mongoose";

export type TCategory = {
  name: string;
};

export interface categoryModle extends Model<TCategory> {
  // eslint-disable-next-line no-unused-vars
  isUserExits(id: string): Promise<TCategory | null>;
}