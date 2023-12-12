import { Schema, model } from 'mongoose';
import { TTag, TCourseDetails, TCourse, courseModle } from './Course.interface';

const courseTagSchema = new Schema<TTag>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    message: '{VALUE} is not valid',
  },
  isDeleted: { type: Boolean, default: false },
});

const courseDetailsSchema = new Schema<TCourseDetails>({
  level: { type: String, required: [true, 'Level is Required'] },
  description: { type: String, required: [true, 'description is Required'] },
});


const courseSchema = new Schema<TCourse>({
  title: { type: String, required: true, unique: true },
  instructor: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Categorys' },
  price: { type: Number, required: true },
  tags: [{ type: courseTagSchema, required: true }],
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  language: { type: String, required: true },
  provider: { type: String, required: true },
  durationInWeeks: { type: Number },
  details: { type: courseDetailsSchema, required: true },
});

export const Courses = model<TCourse, courseModle>('Courses', courseSchema);


