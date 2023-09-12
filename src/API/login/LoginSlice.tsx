import { createSlice } from "@reduxjs/toolkit";
import { LoginResponse, getLoginApi } from "./loginApi";


const loginRes = new LoginResponse();
const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        data: loginRes,
        isLoading: false,
        isError: false
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getLoginApi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getLoginApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;

        });
        builder.addCase(getLoginApi.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;

        });



    }
});

export default LoginSlice.reducer;