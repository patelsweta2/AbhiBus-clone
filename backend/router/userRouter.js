import express from "express";
import {
  signUp,
  verifyEmail,
  login,
  resetPassword,
  savePassword,
} from "../controllers/userController.js";
import { Authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/verify-link").post(verifyEmail);
router.route("/login").post(login);
router.route("/reset-password").post(resetPassword);
router.route("/reset-password/:id").put(savePassword);

export default router;
