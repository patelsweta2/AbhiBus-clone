import mongoose from "mongoose";

const options = {
  cityName: {
    type: String,
    required: [true, "CityName is required"],
    minlenth: [3, "CityName should have 3 characters"],
  },
  stopPoints: [
    {
      stopPointName: {
        type: String,
        required: [true, "StopPointName is required"],
      },
      direction: {
        type: String,
        required: [true, "Direction is required stopPoint"],
      },
    },
  ],
};

const citySchema = new mongoose.Schema(options);

const City = mongoose.model("City", citySchema);

export default City;
