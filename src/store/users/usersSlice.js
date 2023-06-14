import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {

  },
});

export default usersSlice.reducer;
