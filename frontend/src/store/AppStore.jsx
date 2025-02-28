import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./ConversationsSlice.jsx";

const appStore = configureStore({
  reducer: {
    conversations: conversationsReducer,
  },
});

export default appStore;
