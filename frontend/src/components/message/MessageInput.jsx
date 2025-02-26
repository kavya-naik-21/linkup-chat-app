import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const MessageInput = () => {
  return (
    <div className="pl-16 mb-4 flex mt-1">
      <input
        className="p-3 rounded-2xl border-2 w-3/4 h-10 border-pink-300 bg-pink-200 shadow-gray-600 shadow-2xl"
        placeholder="Type..."
        id="messageText"
      />
      <RiSendPlane2Fill className="ml-3 mt-2" size={25} color={"oklch(0.592 0.249 0.584)"}/>
    </div>
  );
};

export default MessageInput;
