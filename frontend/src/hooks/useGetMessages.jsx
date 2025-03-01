import { useEffect, useState } from "react";
import { setMessages } from "../store/MessagesSlice";
import { useDispatch, useSelector } from "react-redux";

const useGetMessages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.messages.messages);

  const selectedConversation = useSelector((store) => store.conversations.selectedConversation);

  const currentReceiverId = selectedConversation?._id;

  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/messages/${currentReceiverId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (data.error) {
          console.log("error occured", data.error);
        }

        dispatch(setMessages(data.messages));
      } catch (error) {
        console.log("oops some error occured");
      } finally {
        setIsLoading(false);
      }
    };
    if (currentReceiverId) getMessages();
  }, [currentReceiverId, setMessages]);

  return {messages, isLoading}
};

export default useGetMessages;
