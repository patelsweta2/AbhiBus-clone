import catchAsyncError from "./cathAsyncError.js";
import CustomError from "../utils/customError.js";
import jwt from "jsonwebtoken";
export const Authenticate = catchAsyncError(async (req, res, next) => {
  let token;
  const AUTHORIZATION = "Authorization";
  if (
    req.headers[AUTHORIZATION] &&
    req.headers[AUTHORIZATION].includes("Bearer")
  ) {
    token = req.headers[AUTHORIZATION].split(" ")[1];
  }

  if (!token) {
    return next(new CustomError("Authentication failed! no token", 400));
  }
  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decode.id);
  next();
});

export const Authorize = (req, res, next) => {
  if (!req.isAdmin) {
    return next(new CustomError("Role${req.user.role}"));
  }
  next();
};
