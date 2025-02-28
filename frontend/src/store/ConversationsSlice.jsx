import { createSlice } from '@reduxjs/toolkit'

const conversationsSlice = createSlice({
    name: "conversations",
    initialState: {
        conversations: null,
        selectedConversation: null
    },
    reducers: {
        setConversations: (state, action) => {
            state.conversations = action.payload;
        },
        setSelectedConversation: (state, action) => {
            state.selectedConversation = action.payload
        }
    } 
})

export const {setConversations, setSelectedConversation} = conversationsSlice.actions;

export default conversationsSlice.reducer