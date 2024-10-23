import express from "express";
import { getAllCities } from "../controllers/cityController.js";
const router = express.Router();

router.route("/").get(getAllCities);
router.route("/new").post();

export default router;
