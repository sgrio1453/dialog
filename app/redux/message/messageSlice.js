import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
    name: "message",
    initialState: {
        message : '',
        time: '',
        messages: [],
        receiverId: '',
        senderId: ''
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
        },
        timeMessage : (state, action) => {
            state.time= action.payload
        },
        receiverId : (state,action) => {
            state.receiverId = action.payload
        },
        senderId : (state ,action ) => {
            state.senderId = action.payload
        },
    }
})

export const { addMessage, clearMessages, setReduxMessage, timeMessage, receiverId, senderId} = messageSlice.actions;
export const messageReducer = messageSlice.reducer;