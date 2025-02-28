import { createSlice } from '@reduxjs/toolkit'

const conversationsSlice = createSlice({
    name: "conversations",
    initialState: null,
    reducers: {
        setConversations: (state, action) => {
            return action.payload;
        }
    } 
})

export const {setConversations} = conversationsSlice.actions;

export default conversationsSlice.reducer