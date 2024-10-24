import express from "express";
import dotenv from "dotenv";
import path from "path";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${MODE} mode.`);
});
