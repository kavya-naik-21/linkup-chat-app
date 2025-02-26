import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="pl-4 mb-4 flex">
      <input
        className="p-3 rounded-2xl border-2 w-3/4 h-10 border-pink-500 bg-pink-200 shadow-gray-600 shadow-2xl"
        placeholder="Search..."
        id="search"
      />
      <FaSearch className="ml-3 mt-2" size={25}/>
    </div>
  );
};

export default Searchbar;
