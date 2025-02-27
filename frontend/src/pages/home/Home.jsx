import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/message/MessageContainer";
import { MdLogout } from "react-icons/md";
import useLogout from "../../hooks/useLogout";

const Home = () => {
  const { logout, isLoading } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="w-screen h-screen pl-20 pr-20 pb-20 pt-10 bg-[#c7dfe9]">
      <div className=" rounded-xl h-full p-2 bg-white shadow-gray-600 shadow-2xl flex">
        <Sidebar />
        <MessageContainer />
        <MdLogout size={40} onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Home;
