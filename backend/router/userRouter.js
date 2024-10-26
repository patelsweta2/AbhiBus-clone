import express from "express";
import * as userController from "../controllers/userController.js";
const { signUp, verifyEmail, login, resetPassword, forgotPassword } =
  userController;

import { Authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/email/verify").get(verifyEmail);
router.route("/login").post(login);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset").patch(resetPassword);
router.route("/token/new").get(userController.generateNewAccessToken);

export default router;
