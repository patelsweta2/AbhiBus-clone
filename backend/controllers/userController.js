import User from "../model/user.js";
import catchAsyncError from "../middlewares/cathAsyncError.js";
import CustomError from "./../utils/customError.js";
import sendEmail from "../utils/emailUtils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import path from "node:path";
import RefreshToken from "./../model/refreshToken.js";

const saltRounds = 10;

// signUp controller --> POST -> /api/users/signup
export const signUp = catchAsyncError(async (req, res, next) => {
  const { email, phoneNumber } = req.body;
  // Check if email already exists
  const isExist = await User.findOne({ $or: [{ email }, { phoneNumber }] });
  if (isExist) {
    return next(new CustomError("Email or PhoneNumber already exists", 400));
  }
  // Create new user
  const user = await User.create(req.body);
  // create verification link
  const token = user.getAccessJwtToken();
  const verificationLink = `${req.protocol}://${req.get(
    "host"
  )}/api/users/email/verify?token=${token}`;
  const subject = "Email Verification";
  const htmlContent = `<p>To verify your email, click the link below:</p>
  <a href="${verificationLink}">Verify Email</a>
  <p>This link is valid for 15 minutes only</p>
  `;
  // send verification email
  await sendEmail(user.email, subject, htmlContent);
  res.status(201).json({
    success: true,
    message: "User registered successfully! Please verify your email",
  });
});

// verifyUserEmail ==> get => /api/users/email/verify
export const verifyEmail = catchAsyncError(async (req, res, next) => {
  const { token } = req.query;
  console.log("token", token);

  try {
    var decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
  } catch (error) {
    return res.send("Invalid Token or Token expired");
  }
  // find the user with the provided ID
  const user = await User.findByIdAndUpdate(decode.id, { isVerified: true });
  console.log("user", user);
  if (!user) {
    return res.send("Invalied Email Verification Link");
  }
  res.set({ "Content-Type": "text/html" });
  res.sendFile(path.resolve("backend", "views", "verifyEmail.html"));
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return new next(CustomError("User not exists", 401));
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return new next(CustomError("Incorrect password", 401));
  }
  const token = user.getAccessJwtToken();
  const refreshToken = user.getRefreshJwtToken();
  const dbToken = await RefreshToken.findOneAndUpdate(
    { userId: user._id },
    {
      $set: {
        refreshToken,
        userId: user._id,
      },
    },
    {
      upsert: true,
      new: true,
    }
  );
  if (!dbToken) {
    return next(new CustomError("Internal Server Error", 500));
  }
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000 // 30 days for cookie
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
    cookieOptions.sameSite = "strict";
  }
  res
    .status(200)
    .cookie("refreshToken", dbToken.refreshToken, cookieOptions)
    .json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  // check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return next(CustomError("User not found", 404));
  }

  // create a reset token that expires in 5 minutes
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.resetPassword = resetToken;
  user.resetPasswordExpires = Date.now() + 5 * 60 * 1000; // 5 minutes

  //create reset link
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&id=${user._id}`;
  const subject = "Password reset request";
  const htmlContent = `
  <p>To reset your password, click the link below:</p>
  <a href="${resetLink}">Reset Password</a>
  <p>This link will expire in 5 minutes.</p>
`;

  await sendEmail(user.email, subject, htmlContent);

  res.status(200).json({
    success: true,
    message: "Reset link sent to email",
  });
});

export const savePassword = catchAsyncError(async (req, res, next) => {
  const { password } = req.body;
  const { token } = req.query;

  // check if user exists and token is valid
  const user = await User.findOne({
    _id: req.params.id,
    resetPassword: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(CustomError("Invalid or expired token", 400));
  }

  // hash the new password
  const salt = await bcrypt.genSalt(saltRounds);
  user.password = await bcrypt.hash(password, salt);
  user.resetPassword = undefined;
  user.resetPasswordExpires = undefined;
  await User.save();

  res.status(200).json({
    success: true,
    message: "Password reset successfully",
  });
});
