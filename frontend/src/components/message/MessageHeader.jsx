import React from "react";
import { useSelector } from "react-redux";

const MessageHeader = () => {
  const selectedConversation = useSelector(
    (store) => store.conversations.selectedConversation
  );
  return (
    <div className="border-b-2 m-1">
      <div className="flex m-1">
        <img src={selectedConversation?.profilePic} className="w-11"></img>

        <div className="mt-2 ml-4 ">
          <span className="">{selectedConversation?.fullName}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
