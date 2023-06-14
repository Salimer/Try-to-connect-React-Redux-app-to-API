import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        users: usersSlice,
    }
})

export default store;