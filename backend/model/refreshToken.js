import mongoose from "mongoose";
import ensureIndex from "../utils/ensureIndex.js";
const refreshTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    requied: true,
  },
  refreshToken: {
    type: String,
    required: [true, "RefreshToken is required"],
    minLength: [12, "RefreshToken should have 12 characters"],
  },
  expireAt: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 30 * 24 * 60 * 1000), // 30 days form now
  },
});

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);
// creating index if not created
if (process.env.NODE_ENV === "development") {
  const indexObj = { expireAt: 1 };
  const options = { expireAfterSeconds: 0 };
  // index will be created one time only
  ensureIndex(RefreshToken, refreshTokenSchema, indexObj, options);
}
export default RefreshToken;
