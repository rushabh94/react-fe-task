import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    college: "",
    field: "",
    dob: null,
    mobile: "",
  },
  registerdUser: [],
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearFormData(state) {
      state.formData = { ...initialState.formData };
    },
    addRegisteredUser(state) {
      state.registerdUser.push(state.formData);
      state.formData = { ...initialState.formData };
    },
  },
});

export const { updateFormData, clearFormData, addRegisteredUser } =
  signupSlice.actions;
export default signupSlice.reducer;
