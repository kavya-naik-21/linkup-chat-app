import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const {messages, isLoading} = useGetMessages();

  const { authUser } = useAuthContext();
  const loggedInUser = authUser._id;

  return (
    <div className=" h-4/5 overflow-auto">
      {!isLoading && messages.length> 0 && messages?.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.senderId === loggedInUser ? "justify-end" : "justify-start"
          } mb-2`}
        >
          <div
            className={`px-4 py-2 rounded-lg text-white max-w-xs ${
              msg.senderId === loggedInUser ? "bg-pink-600" : "bg-gray-500"
            }`}
          >
            {msg.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
