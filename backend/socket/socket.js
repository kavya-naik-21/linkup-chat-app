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

const loggedInUsersMap = new Map();

io.on("connection", (socket) => {
  console.log("new user connected", socket.id);
  console.log("===============================================")
  
  const loggedInUserId = socket.handshake.query.loggedInUserId;

  loggedInUsersMap[loggedInUserId] = socket.id

  socket.emit("getOnlineUsers", loggedInUsersMap);

  socket.on("disconnect", () => {
    console.log("user disconnected xxxxxx", socket.id);
    console.log("===============================================")
  });
});

export { app, server, io };
