import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  numberPlate: {
    type: String,
  },
  busParter: {
    type: String,
    required: [true, "Bus Partner is required"],
  },
  layout: {
    upperDeck: [
      {
        seatNumber: {
          type: String,
          required: [true, "Seat Number is required"],
        },
        row: {
          type: Number,
          required: [true, "Row is required"],
        },
        col: {
          type: Number,
          required: [true, "col is required"],
        },
      },
    ],
    lowerDeck: [
      {
        seatNumber: {
          type: String,
          required: [true, "Seat Number is required"],
        },
        row: {
          type: Number,
          required: [true, "Row is required"],
        },
        col: {
          type: Number,
          required: [true, "col is required"],
        },
      },
    ],
  },
  amenities: {
    type: [String],
    enum: {
      values: ["wifi", "charger", "blanket", "water"],
      message: (value) => `${value} is not allowed as amenities`,
    },
  },
  busType: {
    type: [String],
    enum: {
      values: ["AC", "NON-AC", "Sleeper", "Seater"],
      message: (value) => `${value} is not allowed as amenities`,
    },
  },
  driverInfo: {
    phone: Number,
    name: String,
  },
  rating: {
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "User id is required"],
      },
    ],
    avgRating: Number,
  },
});

const Bus = mongoose.model("Bus", busSchema);

export default Bus;
