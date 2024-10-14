import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'
import employeeReducer from '../features/employeeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    employee: employeeReducer,
  },
});

export default store;
