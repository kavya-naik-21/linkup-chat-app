import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./ConversationsSlice.jsx";
import messagesReducer from "./MessagesSlice.jsx";

const appStore = configureStore({
  reducer: {
    conversations: conversationsReducer,
    messages: messagesReducer,
  },
});

export default appStore;
