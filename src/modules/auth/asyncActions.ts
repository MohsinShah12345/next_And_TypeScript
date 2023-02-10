import type { PayloadAction } from "@reduxjs/toolkit";

export const asyncActions = {
  signInRequest: (state: any, action: PayloadAction<any>): any => {
    return { ...state, laoding: true, error: false };
  },
  signInSuccess: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      laoding: false,
      error: false,
      data: action.payload, // user data that will receive after login
    };
  },
  signInFailure: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  },
  signOutRequest: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: true,
      error: false,
    };
  },
  signOutSuccess: (state: any, action: PayloadAction<any> | void) => {
    return {
      ...state,
      laoding: false,
      error: false,
      data: {},
    };
  },
  forGotPasswordRequest: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: true,
      error: false,
    };
  },
  forGotPasswordSuccess: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      data: {
        ...state.data,
        verificationCode: action.payload.verificationCode,
        email: action.payload.email,
        id: action.payload.id,
      },
      loading: false,
      error: false,
    };
  },
  forGotPasswordFailure: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  },
  resetPasswordRequest: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: "",
      error: "",
    };
  },
  resetPasswordSuccess: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: "",
      error: "",
    };
  },
  resetPasswordFailure: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: "",
      error: "",
    };
  },
};
