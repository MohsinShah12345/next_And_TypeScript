import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { asyncActions } from "./asyncActions";
import { authInterface } from "@/utils/interfaces";

// Define the initial state using authInterface
const initialState: authInterface = {
  value: 0,
  data: {
    email: "",
    password: "",
    contactNo: "",
    firstName: "",
    lastName: "",
    token: "",
    id: "",
    verificationCode: 0,
  },
  loading: false,
  error: false,
};
export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    ...asyncActions,
  },
});

export const {
  signInRequest,
  signInSuccess,
  signInFailure,
  signOutRequest,
  signOutSuccess,
  forGotPasswordRequest,
  forGotPasswordSuccess,
  forGotPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth;

export default authSlice.reducer;
