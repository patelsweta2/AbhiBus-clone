import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema({
  sourceCityId: {
    type: mongoose.Types.ObjectId,
    ref: "City",
    required: [true, "SoucreCityId is required"],
  },
  destinationCityId: {
    type: mongoose.Types.ObjectId,
    ref: "City",
    required: [true, "DestinationCityId is required"],
  },
  startTime: {
    type: Number,
    required: [true, "StartTime is required"],
  },
  endTime: {
    type: Number,
    required: [true, "EndTime is required"],
  },
  busId: {
    type: mongoose.Types.ObjectId,
    ref: "Bus",
    required: [true, "BusId is required"],
  },
  boardingPoints: [
    {
      _id: {
        type: Boolean,
        default: false,
      },
      stopId: {
        type: String,
        required: [true, "StopId is required"],
        unique: true,
      },
      arrivalTime: {
        type: Number,
        required: [true, "ArrivalTime is required"],
      },
    },
  ],
  droppingPoints: [
    {
      _id: {
        type: Boolean,
        default: false,
      },
      stopId: {
        type: String,
        required: [true, "StopId is required"],
        unique: true,
      },
      arrivalTime: {
        type: Number,
        required: [true, "ArrivalTime is required"],
      },
    },
  ],
  prices: [
    {
      seatNumer: {
        type: String,
        required: [true, "seatNumber is required"],
        unique: true,
      },
      price: {
        type: Number,
        required: [true, "Price is required"],
      },
    },
  ],
});

const Trips = mongoose.model("Tirps", tripsSchema);

export default Trips;
