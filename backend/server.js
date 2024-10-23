import express from "express";
import dotenv from "dotenv";
import path from "path";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import connectDB from "./config/db.js";
import colors from "colors/safe.js";
import cityRouter from "./router/cityRouter.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
dotenv.config();
const app = express();

// Setup security headers
app.use(helmet());
// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Santize data
app.use(mongoSanitize()); //nosql injection atack
// prevent Parameter pollution
app.use(hpp());

// endpoints
app.use("/api/cities", cityRouter);

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

if (MODE === "production") {
  app.use(express.static(path.resolve("backend", "public")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("backend", "public", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("server is running");
  });
}

// global error handler
app.use(globalErrorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(colors.bgCyan("Connection to db successfull"));
    console.log("");
    app.listen(PORT, () => {
      console.log(colors.bgGreen(`Listening on port ${PORT} in ${MODE} mode.`));
    });
  } catch (error) {
    console.log(error);
    console.log(
      colors.bgRed("Aborting server due to error in connection to data base")
    );
  }
};

start();
