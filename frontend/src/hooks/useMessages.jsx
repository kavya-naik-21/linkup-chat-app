import { useState } from "react";
import { setMessages } from "../store/MessagesSlice";
import { useDispatch } from "react-redux";

const useMessages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getMessages = async ({ id }) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/messages/${id}`, {
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

  return { getMessages, isLoading };
};

export default useMessages;
