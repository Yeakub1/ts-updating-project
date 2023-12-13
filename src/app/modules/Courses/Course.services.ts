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

const updateCourseFromDB = async (
  payload: Partial<TCourse>,
  courseId: string,
) => {
  const { tags, details, ...remainingCourseData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingCourseData,
  };

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value;
    }
  }

  if (tags && tags.length) {
    tags.forEach((tag, index) => {
      for (const [key, value] of Object.entries(tag)) {
        modifiedUpdatedData[`tags.${index}.${key}`] = value;
      }
    });
  }

  const result = await Courses.findByIdAndUpdate(
    courseId,
    modifiedUpdatedData,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const courseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB,
  updateCourseFromDB

}