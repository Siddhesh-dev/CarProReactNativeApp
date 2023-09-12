import { configureStore } from '@reduxjs/toolkit';
import LoginSliceReducer from '../API/login/LoginSlice';
import LogoutSliceReducer from '../API/logout/logoutSlice';

export const store = configureStore({
    reducer: {
        login: LoginSliceReducer,
        logout:LogoutSliceReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;