import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        clearMessages: (state, action) => {
            state.messages = []
        },
        
    }
})

export const { addMessage, clearMessages} = messageSlice.actions;
export const messageReducer = messageSlice.reducer;