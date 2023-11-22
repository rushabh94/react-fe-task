import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import signupReducer from "./slices/signupSlice";
import postReducer from "./slices/postSlice";
import remindersReducer from "./slices/reminderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    posts: postReducer,
    reminders: remindersReducer,
  },
});

export default store;
