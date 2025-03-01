import React from "react";
import { useSelector } from "react-redux";
import { useScokectContext } from "../../context/SocketContext";

const MessageHeader = () => {
  const selectedConversation = useSelector(
    (store) => store.conversations.selectedConversation
  );

  if (!selectedConversation) return;
  const { fullName, profilePic, _id: currentRecieverId } = selectedConversation;

  const { onlineUsers } = useScokectContext();

  if (onlineUsers !== null) {
    console.log("onLine users", onlineUsers[currentRecieverId]);
  }
  return (
    <div className="border-b-2 m-1">
      <div className="flex m-1">
        <img src={profilePic} className="w-11"></img>

        <div className="mt-2 ml-4 flex flex-wrap flex-col">
          <span className="">{fullName}</span>
          <span className="font-extralight text-sm">
            {onlineUsers[currentRecieverId] ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
