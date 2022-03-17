import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, getUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: (state, _) => {
      state.user = '';
      state.token = '';
      state.isLoggedIn = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [getUser.pending]: state => {
      state.isFetchingUser = true;
    },
    [getUser.rejected]: state => {
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
