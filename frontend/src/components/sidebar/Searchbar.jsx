import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../store/ConversationsSlice";
const Searchbar = () => {
  const searchRef = useRef(null);
  const conversations = useSelector(
    (store) => store.conversations.conversations
  );

  const dispatch = useDispatch();

  const handleSearch = () => {
    const searchText = searchRef.current.value;
    if (searchText == null) {
      return;
    }
    if (searchText.length < 3) {
      console.log("minimum 3 letters required");
      return;
    }

    const selectedConv = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
    if (selectedConv) {
      dispatch(setSelectedConversation(selectedConv));
    }
    searchRef.current.value = null
  };
  return (
    <div className="pl-4 mb-4 flex">
      <input
        ref={searchRef}
        className="p-3 rounded-2xl border-2 w-3/4 h-10 border-pink-500 bg-pink-200 shadow-gray-600 shadow-2xl"
        placeholder="Search..."
        id="search"
      />
      <FaSearch className="ml-3 mt-2" size={25} onClick={handleSearch} />
    </div>
  );
};

export default Searchbar;
