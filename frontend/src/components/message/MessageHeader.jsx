import React from "react";
import { CgProfile } from "react-icons/cg";

const MessageHeader = () => {
  return (
    <div className="border-b-2 m-1">
      <div className="flex m-1">
        <CgProfile size={40} />

        <div className="mt-2 ml-4 ">
          <span className="">Kavya Naik</span>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
