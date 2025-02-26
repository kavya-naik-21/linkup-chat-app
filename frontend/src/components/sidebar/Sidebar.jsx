import React from "react";
import Conversations from "./Conversations";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className="rounded-l-xl w-1/3 h-full p-3 bg-pink-400 shadow-gray-600 shadow-2xl">
      <Searchbar/>
      <Conversations />
    </div>
  );
};

export default Sidebar;
