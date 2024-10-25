import CustomError from "./customError.js";

// Function to validate the signup fields
export const validateSignUp = ({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  gender,
  age,
}) => {
  // check for missing field
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phoneNumber ||
    !gender ||
    !age
  ) {
    throw new CustomError("All fields are required", 400);
  }

  //Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new CustomError("Invalid email format", 400);
  }

  // password number validation
  if (password.length < 6) {
    throw new CustomError("Password must be at least 6 characters long", 400);
  }

  // Phone number validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    throw new CustomError("Phone number must be 10 digits", 400);
  }

  // Age validation (must be between 1 and 100)
  if (age < 1 || age > 100) {
    throw new CustomError("Age must be between 1 and 100", 400);
  }

  // Gender Validation
  const validGenders = ["male", "female", "others"];
  if (!validGenders.includes(gender)) {
    throw new CustomError("Invalid gender option", 400);
  }
};
