import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/message/MessageContainer";

const Home = () => {
  return (
    <div className="w-screen h-screen pl-20 pr-20 pb-20 pt-10 bg-[#c7dfe9]">
      <div className=" rounded-xl h-full p-2 bg-white shadow-gray-600 shadow-2xl flex">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
