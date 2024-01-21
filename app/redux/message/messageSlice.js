import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
    name: "message",
    initialState: {
        message : '', 
        messages: [],
    },
    reducers: {
        setReduxMessage(state, action) {
            state.message = action.payload
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        clearMessages: (state, action) => {
            state.messages = []
        }
    }
})

export const { addMessage, clearMessages, setReduxMessage} = messageSlice.actions;
export const messageReducer = messageSlice.reducer;