import User from "../model/user.js";
import catchAsyncError from "../middlewares/cathAsyncError.js";
import CustomError from "./../utils/customError.js";
import { validateSignUp } from "../utils/validation.js";
import sendEmail from "../utils/emailUtils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const saltRounds = 10;

// signUp controller --> POST -> /api/signup
export const signUp = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, password, phoneNumber, gender, age } =
    req.body;

  // Check validation
  const validationErrors = validateSignUp({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    age,
  });

  if (validationErrors) {
    return next(new CustomError(validationErrors, 400));
  }

  // Check if email already exists
  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    return next(new CustomError("Email already exists", 400));
  }

  // Check if phoneNumber already exists
  const existingPhoneNumber = await User.findOne({ phoneNumber });

  if (existingPhoneNumber) {
    return next(new CustomError("Phone Number already exists", 400));
  }

  //hashed password
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create a verification token
  const verificationToken = crypto.randomBytes(32).toString("hex");

  // Create new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phoneNumber,
    gender,
    age,
  });

  // create verification link
  const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}&id=${user._id}`;
  const subject = "Email Verification";
  const htmlContent = `<p>To verify your email, click the link below:</p>
  <a href="${verificationLink}">Verify Email</a>
  <p>This link is valid for a limited time.</p>`;

  // send verification email
  await sendEmail(user.email, subject, htmlContent);

  res.status(201).json({
    success: true,
    message: "User registered successfully! Please verify your email",
  });
});

export const verifyEmail = catchAsyncError(async (req, res, next) => {
  const { token, id } = req.query;

  // find the user with the provided ID
  const user = await User.findById(id);

  if (!user) {
    return next(new CustomError("Invalid verification link", 400));
  }

  // check if the token matches
  if (user.verificationToken !== token) {
    return next(new CustomError("Invalid verification token", 400));
  }

  // Mark the user as verified
  user.isVerified = true;
  user.verificationToken = null;
  await user.save();

  res.send(200).json({
    success: true,
    message: "Email verified successfully",
  });
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return new next(CustomError("User not exists", 401));
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new next(CustomError("Incorrect password", 401));
  }

  // generate token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
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
