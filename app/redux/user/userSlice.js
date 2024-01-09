import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        isAuth: false,
        user: null,
        userToken: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
    }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload,
            state.isAuth = true,
            state.userToken = action.payload.userToken
        },
        logout: (state, action) => {
            state.user = null
            state.isAuth = false
            state.userToken = ''
        },
        setReduxUsername:(state,action)=>{
            state.username=action.payload;
        },
        setFirstname:(state,action)=>{
            state.firstname=action.payload
        },
        setLastname:(state,action)=>{
            state.lastname=action.payload
        },
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setPhone:(state,action)=>{
            state.phone=action.payload
        },
    },
})

export const { 
    login, 
    logout, 
    setReduxUsername, 
    setFirstname, 
    setLastname, 
    setEmail, 
    setPhone,
 } = userSlice.actions;
export const userReducer = userSlice.reducer;