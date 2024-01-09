import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
    },
    reducers: {
        addChat: (state, action) => {
            state.chats.push(action.payload)
        },
        removeChat: (state, action) => {
            state.chats = state.chats.filter(chat => chat.id !== action.payload)
        }
    }
})

export const { addChat, removeChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;