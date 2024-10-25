import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const phoneRegex = /^\d{10}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const options = {
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: [4, "FirstName Should have 4 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minLength: [4, "LastName Should have 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: (v) => emailRegex.test(),
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password should have 8 characters"],
    maxLength: [24, "Password should be less than 24 character"],
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: (v) => phoneRegex.test(),
      message: (props) => `Phone number must be 10 digits,(${props.value})`,
    },
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
    enum: {
      value: ["male", "female", "others"],
      message: "{value} as gender not supported",
    },
  },
  age: {
    type: Number,
    required: [true, "age is required"],
    min: 1,
    max: 100,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpires: String,
};

const userSchema = new mongoose.Schema(options);

//virtuals
userSchema.virtual("fullName").get(function () {
  return `${this.fullName} ${this.lastName}`;
});

// pre functions
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//methods
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//jason web tokens
userSchema.methods.getAccessJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_ACCESS_SECRET_KEY, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_TIME,
  });
};

userSchema.methods.getRefreshJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_REFRESH_SECRET_KEY, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_TIME,
  });
};

const User = mongoose.model("User", userSchema);

export default User;
