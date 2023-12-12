import { TCourse } from "./Course.interface";
import { Courses } from "./Course.modle";

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Courses.create(payload);
  return result;
};

const getAllCourseFromDB = async () => {
  const result = await Courses.find().populate('categoryId');
  return result;
};

const getSingleCourseFromDB = async (id: string) => {
  const result = await Courses.findById(id).populate('categoryId');
  return result;
};

export const courseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB
}