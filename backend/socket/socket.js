import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5001"],
    methods: ["GET", "POST"],
  },
});

const userSocktMap = new Map();

export const getReceiverSocketId = (receiverUserId) => {
  return userSocktMap[receiverUserId];
};

io.on("connection", (socket) => {
  console.log("new user connected", socket.id);
  console.log("===============================================");

  const loggedInUserId = socket.handshake.query.loggedInUserId;

  userSocktMap[loggedInUserId] = socket.id;

  io.emit("getOnlineUsers", userSocktMap);

  socket.on("disconnect", () => {
    console.log("user disconnected xxxxxx", socket.id);
    console.log("===============================================");
    delete userSocktMap[loggedInUserId];
    io.emit("getOnlineUsers", userSocktMap);
  });
});

export { app, server, io };
