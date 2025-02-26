import React from "react";
import Messages from "./Messages";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <div className="rounded-r-xl w-2/3 p-3 h-full bg-purple-300 shadow-gray-600 shadow-2xl">
      <div className="rounded-xl h-full pl-16 pr-16 pt-5 bg-pink-200 shadow-gray-600 shadow-2xl">
        <MessageHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
