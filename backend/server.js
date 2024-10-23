import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const app = express();

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
