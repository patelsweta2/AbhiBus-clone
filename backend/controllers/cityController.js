import City from "../model/city.js";
import catchAsyncError from "../middlewares/cathAsyncError.js";

// get all cities ---> get->/api/cities
export const getAllCities = catchAsyncError(async (req, res, next) => {
  const allCities = await City.find({});
  res.status(200).json({
    success: true,
    message: "Cities fetched successfully",
    data: allCities,
  });
});

// create new cities ---> post->/api/cities/new
export const createNewCities = catchAsyncError(async (req, res, next) => {
  const allCities = await City.insertMany(req.body.data);
  res.status(200).json({
    success: true,
    message: "Cities inserted Successfully",
    data: allCities,
  });
});
