import buildQuery, { QueryParams } from "../../buillder/buildQuery";
import { TCourse } from "./Course.interface";
import { Courses } from "./Course.modle";

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Courses.create(payload);
  return result;
};



const getAllCourseFromDB = async (
  queryParams: QueryParams,
  // eslint-disable-next-line no-undef
): Promise<{
  meta: { total: number; page: number; limit: number };
  result: TCourse[];
}> => {
  const page = (queryParams?.page as number) || 1;
  const limit = (queryParams?.limit as number) || 10;
  const query = buildQuery(queryParams);
  const total = await Courses?.countDocuments(query);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sortCriteria: Record<string, any> = {};
  if (
    queryParams?.sortBy &&
    [
      'title',
      'price',
      'startDate',
      'endDate',
      'language',
      'durationInWeeks',
    ].includes(queryParams?.sortBy)
  ) {
    sortCriteria[queryParams.sortBy] =
      queryParams?.sortOrder === 'asc' ? 1 : -1;
  }

  const result = await Courses.find(query)
    .sort(sortCriteria)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  const meta = {
    total: total,
    page: page,
    limit: limit,
  };

  return { meta, result };
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


const getSingleCourseReviewFromDb = async (courseId: string) => {
  const result = await Courses.findById(courseId)
    .populate('categoryId')
    .populate('reviews');
  if (!result) {
    throw new Error('course is not found');
  }
  return result;
};

const getBestCourseFormDb = async () => {
  const reslut = await Courses.aggregate([
    {
      $lookup: {
        from: 'reviews',
        localField: '_id',
        foreignField: 'courseId',
        as: 'reviews',
      },
    },
    {
      $project: {
        title: 1,
        instructor: 1,
        categoryId: 1,
        price: 1,
        tags: 1,
        startDate: 1,
        endDate: 1,
        language: 1,
        provider: 1,
        durationInWeeks: 1,
        details: 1,
        averageRating: { $avg: '$reviews.rating' },
        reviewCount: { $size: '$reviews' },
      },
    },
    { $sort: { averageRating: -1 } },
    { $limit: 1 },
  ]);
  return reslut;
};



export const courseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB,
  updateCourseFromDB,
  getSingleCourseReviewFromDb,
  getBestCourseFormDb,
};