import { useEffect } from "react";
import { useScokectContext } from "../context/SocketContext";
import { setMessages } from "../store/MessagesSlice";
import { useDispatch, useSelector } from "react-redux";

const useListenMessages = () => {
  const { socket } = useScokectContext();
  const messages = useSelector((store) => store.messages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (newMessage) => {
        console.log("newMessage", newMessage);
        dispatch(setMessages([...messages, newMessage]));
      });
    }
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
