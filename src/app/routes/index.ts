import { ReviewRoute } from './../modules/Reviews/Review.route';
import { Router } from 'express';
import { courseRoute } from '../modules/Courses/Course.route';
import { CategoryRoute } from '../modules/Category/Category.route';


const router = Router();

const moduleRoute = [
  {
    path: '/course',
    route: courseRoute,
  },
  {
    path: '/categories',
    route: CategoryRoute,
  },
  {
    path: '/reviews',
    route: ReviewRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;