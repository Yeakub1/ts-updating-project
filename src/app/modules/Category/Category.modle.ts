import { Schema, model } from 'mongoose';
import { TCategory } from './Category.interface';

const categorySchema = new Schema<TCategory>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);

export const Categorys = model<TCategory>('Categorys', categorySchema);
