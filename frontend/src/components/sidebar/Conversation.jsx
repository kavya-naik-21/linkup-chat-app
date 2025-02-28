import React from "react";
import { CgProfile } from "react-icons/cg";

const Conversation = ({ conversation }) => {
  const { fullName, profilePic } = conversation;
  return (
    <div className="rounded-lg bg-white shadow-gray-600 shadow-2xl hover:bg-pink-600 hover:cursor-default">
      <div className="flex p-5 m-1">
        <img src={profilePic} alt="profile-pic" className="w-13"></img>

        <div className="mt-2 ml-4 ">
          <span className="">{fullName}</span>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
