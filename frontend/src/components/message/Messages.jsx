import React from "react";
const messages = [
  { id: 1, sender: "me", text: "Hey! How are you?" },
  { id: 2, sender: "other", text: "I'm good! What about you?" },
  { id: 3, sender: "me", text: "Doing great! Wanna hang out?" },
  { id: 4, sender: "other", text: "Sure, let's do it!" },
  { id: 5, sender: "me", text: "Hey! How are you?" },
  { id: 6, sender: "other", text: "I'm good! What about you?" },
  { id: 7, sender: "me", text: "Doing great! Wanna hang out?" },
  { id: 8, sender: "other", text: "Sure, let's do it!" },
  { id: 9, sender: "me", text: "Hey! How are you?" },
  { id: 10, sender: "other", text: "I'm good! What about you?" },
  { id: 11, sender: "me", text: "Doing great! Wanna hang out?" },
  { id: 12, sender: "other", text: "Sure, let's do it!" },
];

const Messages = () => {
  return (
    <div className=" h-4/5 overflow-auto">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.sender === "me" ? "justify-end" : "justify-start"
          } mb-2`}
        >
          <div
            className={`px-4 py-2 rounded-lg text-white max-w-xs ${
              msg.sender === "me" ? "bg-pink-600" : "bg-gray-500"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
