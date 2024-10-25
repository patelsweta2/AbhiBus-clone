import mongoose from "mongoose";
import ensureIndex from "../utils/ensureIndex.js";
const refreshTokenSchema = new mongoose.Schema({
  refreshToken: {
    type: String,
    required: [true, "RefreshToken is required"],
    minLength: [12, "RefreshToken should have 12 characters"],
  },
  expireAt: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() * 30 * 24 * 60 * 1000), // 30 days form now
  },
});

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);
// creating index if not created
if (process.env.NODE_ENV === "development") {
  const indexObj = { expireAt: 1 };
  const options = { expireAfterSeconds: 0 };
  ensureIndex(RefreshToken, indexObj, refreshTokenSchema, options);
}
export default RefreshToken;
