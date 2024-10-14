import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token : localStorage.getItem("token") || null,
        errorMessage : null
    },
    reducers: {
        loginSuccess: (state, action) => {
          state.token = action.payload;
          localStorage.setItem('token', action.payload);
        },
        loginFailure: (state, action) => {
          state.errorMessage = action.payload;
        },
        logout: (state) => {
          state.token = null;
          localStorage.removeItem('token');
        },
      },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/login', { email, password });
    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    dispatch(loginFailure('Login failed, please try again.'));
  }
};

export default authSlice.reducer;