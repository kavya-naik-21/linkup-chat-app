import React, { useRef } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const {sendMessage, isSending} = useSendMessage();
  const messageRef = useRef(null);
  const selectedConversation = useSelector(
    (store) => store.conversations.selectedConversation
  );

  const currentReceiverId = selectedConversation?._id;

  const handleSendMessage = async () => {
    if (messageRef.current.value && !isSending) {
      await sendMessage({
        id: currentReceiverId,
        message: messageRef.current.value,
      });
      messageRef.current.value = null;
    }
  };

  return (
    <div className="pl-16 mb-4 flex mt-1">
      <input
        ref={messageRef}
        className="p-3 rounded-2xl border-2 w-3/4 h-10 border-pink-300 bg-pink-200 shadow-gray-600 shadow-2xl"
        placeholder="Type..."
        id="messageText"
      />
      <RiSendPlane2Fill
        className="ml-3 mt-2"
        size={25}
        color={"oklch(0.592 0.249 0.584)"}
        onClick={handleSendMessage}
      />
    </div>
  );
};

export default MessageInput;
