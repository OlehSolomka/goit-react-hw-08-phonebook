import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'api/';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  const { data } = await authAPI.registerUser(credentials);
  token.set(data.token);
  return data;
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  const { data } = await authAPI.logInUser(credentials);
  token.set(data.token);
  return data;
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await authAPI.logoutUser();
  token.unset();
});

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

  const { data } = await authAPI.getUser();
  return data;
});
