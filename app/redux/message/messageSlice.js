import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
    name: "message",
    initialState: {
        message : '',
        time: '',
        messages: [],
        receiverId: '',
        senderId: '',
        userMessages: {},
        messageAll : []
    },
    reducers: {
        setReduxMessage(state, action) {
            state.message = action.payload
        },
        messageAll: (state,action) =>{
            state.messageAll = action.payload
        },
        addMessage: (state, action) => {
            const { user, message } = action.payload;
      
            // Eğer kullanıcı için bir mesaj dizisi yoksa oluştur
            if (!state.userMessages[user]) {
              state.userMessages[user] = [];
            }
      
            // Mesajı kullanıcıya ait diziyi güncelleyerek ekle
            state.userMessages[user].push(message);
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

export const { addMessage, clearMessages,messageAll, setReduxMessage, timeMessage, receiverId, senderId} = messageSlice.actions;
export const messageReducer = messageSlice.reducer;