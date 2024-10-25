import express from "express";
import * as userController from "../controllers/userController.js";
const { signUp, verifyEmail, login, resetPassword, savePassword } =
  userController;

import { Authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/email/verify").get(verifyEmail);
router.route("/login").post(login);
router.route("/reset-password").post(resetPassword);
router.route("/reset-password/:id").put(savePassword);

export default router;
