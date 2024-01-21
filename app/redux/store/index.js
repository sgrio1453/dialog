import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../user/userSlice";
import { chatReducer } from "../chat/chatSlice";
import { messageReducer } from "../message/messageSlice";
import { persistReducer, persistStore ,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import thunk from 'redux-thunk';

import createWebStorage from "redux-persist/es/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        getItem(_key) {
        return Promise.resolve(null);
        },
        setItem(_key, value) {
        return Promise.resolve(value);
        },
        removeItem(_key) {
        return Promise.resolve();
        },
    };
    }

    const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    message: messageReducer,
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

  export const persistor = persistStore(store)

// export const store = configureStore({
//     reducer:{
//         user: userReducer,
//         chat: chatReducer,
//         message: messageReducer,
//     }
// })