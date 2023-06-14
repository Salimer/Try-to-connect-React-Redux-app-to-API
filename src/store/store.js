import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
