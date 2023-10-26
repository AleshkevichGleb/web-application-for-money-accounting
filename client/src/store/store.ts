import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user.slice';


const RootReducer = combineReducers({
    user: userSlice,
});

export const store = configureStore({
    reducer: RootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;