import { createSlice } from "@reduxjs/toolkit";
import { getLogoutApi } from "./logoutApi";

const LogoutSlice = createSlice({
    name:'logout',
    initialState:{
        data: null,
        isLoading: false,
        isError: false
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(getLogoutApi.pending,(state)=>{
            state.isLoading= true;
        });

        builder.addCase(getLogoutApi.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.data= action.payload;

        });

        builder.addCase(getLogoutApi.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;

        })

    }
    
});

export default LogoutSlice.reducer;