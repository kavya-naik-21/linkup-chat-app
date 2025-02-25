import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();
const appPort = process.env.PORT || 5000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("HELLO WORLD!!");
});

app.use("/api/auth", authRoutes);

app.listen(appPort, () => {
  connectToMongoDB();
  console.log("Server running on Port ", appPort);
});
