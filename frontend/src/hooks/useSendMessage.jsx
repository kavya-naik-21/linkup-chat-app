import { useState } from "react";
import { setMessages } from "../store/MessagesSlice";
import { useDispatch, useSelector } from "react-redux";

const useSendMessage = () => {
  const [isSending, setIsSending] = useState(false);
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.messages.messages);
  const sendMessage = async ({ id, message }) => {
    setIsSending(true);
    try {
      const res = await fetch(`/api/messages/send/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();
      console.log("send data", data);
      dispatch(setMessages([...messages, data]))
    } catch (error) {
      console.log("some error occured".error.message);
    } finally {
      setIsSending(false);
    }
  };

  return { sendMessage, isSending };
};

export default useSendMessage;
