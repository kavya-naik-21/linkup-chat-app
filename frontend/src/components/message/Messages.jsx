import React, { useEffect } from "react";
import useMessages from "../../hooks/useMessages";
import { useSelector } from "react-redux";
import { useAuthContext } from "../../context/AuthContext";

const Messages = () => {
  const { getMessages, isLoading } = useMessages();
  let messages = useSelector((store) => store.messages.messages);

  const { authUser } = useAuthContext();
  const loggedInUser = authUser._id;

  const selectedConversation = useSelector(
    (store) => store.conversations.selectedConversation
  );

  const  currentRecieverId  = selectedConversation?._id;

  const handleGetMessages = async () => {
    await getMessages({ id: currentRecieverId });
  };

  useEffect(() => {
    handleGetMessages();
  }, [currentRecieverId]);

  return (
    <div className=" h-4/5 overflow-auto">
      {messages?.map((msg) => (
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
