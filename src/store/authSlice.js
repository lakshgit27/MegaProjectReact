import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    // Status is false because login nahi hua hai user
    status : false,
    userData : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers :{
        // isme reducers ke alag alag functions define honge
        login:(state,action) =>{
            state.status = true;
            state.userData = acction.payload.userData;
        },
        logout :(state) =>{
            state.status = false,
            state.userData = null;
        }

    }
})

//actions reducers mei hone wale actions hai unko call karna hota hai
export const {login,logout} = authSlice.actions;
export default authSlice.reducer
