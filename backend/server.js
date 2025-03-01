import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const appPort = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("HELLO WORLD!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(appPort, () => {
  connectToMongoDB();
  console.log("Server running on Port ", appPort);
});
