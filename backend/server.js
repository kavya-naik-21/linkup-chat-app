import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
dotenv.config()
const app = express();
const appPort = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("HELLO WORLD!!")
})

app.use("/api/auth", authRoutes)

app.listen(appPort, () => {
  console.log("Server running on Port ", appPort);
});
