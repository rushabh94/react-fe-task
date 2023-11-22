import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reminders: [],
};

const reminderSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    addReminder: (state, action) => {
      state.reminders.push(action.payload);
    },
  },
});

export const { addReminder } = reminderSlice.actions;
export default reminderSlice.reducer;
