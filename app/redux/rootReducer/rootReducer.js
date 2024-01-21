import { userReducer } from '../user/userSlice';
import { chatReducer } from '../chat/chatSlice';
import { messageReducer } from '../message/messageSlice';
import { combineReducers } from '@reduxjs/toolkit';

  

  
  const rootReducer = {
    user: userReducer,
    chat: chatReducer,
    message: messageReducer,
  };
  
  export default rootReducer;
  