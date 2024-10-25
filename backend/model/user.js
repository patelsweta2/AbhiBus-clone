import mongoose from "mongoose";

const options = {
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: "Phone number must be 10 digits",
    },
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: [true, "gender is required"],
  },
  age: {
    type: String,
    required: [true, "age is required"],
    min: 1,
    max: 100,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    default: null,
  },
  resetPassword: {
    type: String,
    default: null,
  },
  resetPasswordExpires: {
    type: Date,
    default: null,
  },
};

const userSchema = new mongoose.Schema(options);

const User = mongoose.model("User", userSchema);

export default User;
