import { NextFunction, Request, Response } from 'express';
import { USER_ROLE } from '../modules/User/User.constant';
import catchAsync from '../utils/catchAsync';
import { jwtHelpers } from '../modules/User/User.JwtHelpers';
import config from '../config';
import { JwtPayload } from 'jsonwebtoken';
import { user } from '../modules/User/User.model';

const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;
    if (!token) {
      throw new Error('You are not authorized!');
    }
    const decodedToken = jwtHelpers.verifyToken(
      token,
      config.jwt_access_token as string,
    );

    // const { _id, username, email, role, iat, exp } = decodedToken as JwtPayload;
    const { _id } = decodedToken as JwtPayload;

    const checkUser = await user.findById(_id);
    if (!checkUser) {
      throw new Error('user not found !!!');
    }

    if (!roles.includes(checkUser?.role)) {
      throw new Error('you are not Authorized');
    }

    req.user = decodedToken as JwtPayload;
    next();
  });
};

export default checkAuth;
