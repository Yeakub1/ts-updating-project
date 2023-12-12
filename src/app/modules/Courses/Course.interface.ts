import { Model } from "mongoose";

export type TTag= {
  name: string;
  isDeleted: boolean;
}

export type TCourseDetails ={
  level: string;
  description: string;
}

export type TCourse = {
  title: string;
  instructor: string;
  categoryId: string;
  price: number;
  tags: TTag[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks?: number;
  details: TCourseDetails;
};



export interface courseModle extends Model<TCourse> {
  // eslint-disable-next-line no-unused-vars
  isUserExits(id: string): Promise<TCourse | null>
}