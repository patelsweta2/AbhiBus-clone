import City from "../model/city.js";

// get all cities ---> get->/api/cities
export const getAllCities = async (req, res, next) => {
  const allCities = await City.find({});
  res.status(200).json({
    success: true,
    message: "Cities fetched successfully",
    data: allCities,
  });
};

// create new cities ---> post->/api/cities/new
export const createNewCities = async (req, res, next) => {
  const allCities = await City.insertMany(req.body);
  res.status(200).json({
    success: true,
    message: "Cities inserted Successfully",
    data: allCities,
  });
};
