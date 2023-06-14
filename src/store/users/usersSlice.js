import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const fetchUsers = createAsyncThunk()

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {

  },
});

export default usersSlice.reducer;
