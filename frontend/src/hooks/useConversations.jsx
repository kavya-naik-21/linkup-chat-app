import { useState } from "react";
import { setConversations } from "../store/ConversationsSlice";
import { useDispatch } from "react-redux";

const useConversations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getConversations = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.error) {
        console.log("error occured", data.error);
      }
      dispatch(setConversations(data.allUsers));
    } catch (error) {
      console.log("oops some error occured");
    } finally {
      setIsLoading(false);
    }
  };

  return { getConversations, isLoading };
};

export default useConversations;
