import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        user : {}
    },
    reducers: {
        removeChat: (state, action) => {
            state.chats = state.chats.filter(chat => chat.id !== action.payload)
        },
        userChats: (state, action) => {
            state.chats = action.payload
        },
        activeUserChat : (state, action) => {
            state.user = action.payload
        }
    }
})

export const { userChats, removeChat, activeUserChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;