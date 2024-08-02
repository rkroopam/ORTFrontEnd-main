// src/store/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import menuReducer from './menu';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
