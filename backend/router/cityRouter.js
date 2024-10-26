import express from "express";
import {
  createNewCities,
  getAllCities,
} from "../controllers/cityController.js";
import { Authenticate, Authorize } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(getAllCities);
router.route("/new").post(Authenticate, Authorize, createNewCities);

export default router;
