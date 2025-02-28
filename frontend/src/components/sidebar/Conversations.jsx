import React, { useEffect } from "react";
import Conversation from "./Conversation";
import useConversations from "../../hooks/useConversations";
import { useSelector } from "react-redux";

const Conversations = () => {
  const { isLoading, getConversations } = useConversations();

  const conversations = useSelector((store) => store.conversations);

  const handleGetConversations = async () => {
    await getConversations();
  };

  useEffect(() => {
    handleGetConversations();
  }, []);

  return (
    <div className="rounded-xl h-5/6 p-5 bg-pink-200 shadow-gray-600 shadow-2xl overflow-auto">
      {conversations?.map((conversation) => (
        <Conversation conversation={conversation} />
      ))}
    </div>
  );
};

export default Conversations;
