import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        user : {},
        messageUser: []
    },
    reducers: {
        userChats: (state, action) => {
            state.chats = action.payload
        },
        activeUserChat : (state, action) => {
            state.user = action.payload
        },
        addMessageToUser:(state,action)=>{
            state.messageUser = action.payload
        },
        addChat: (state, action) => {
            state.chats.push(action.payload);
        },
        removeChat: (state, action) => {
            const index = state.chats.findIndex((chat) => chat.id === action.payload);
            if (index !== -1) {
              state.chats.splice(index, 1);
            }
        },
    }
})

export const { userChats, removeChat, activeUserChat, addMessageToUser } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;