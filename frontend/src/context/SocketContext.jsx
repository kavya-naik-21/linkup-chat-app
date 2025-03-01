import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";
export const SockectContext = createContext();

export const SockectContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5001", {
        query: {
          loggedInUserId: authUser._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (onlineUsers) => {
        setOnlineUsers(onlineUsers);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SockectContext.Provider value={{ onlineUsers,socket, setSocket }}>
      {children}
    </SockectContext.Provider>
  );
};
