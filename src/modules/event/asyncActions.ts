import type { PayloadAction } from "@reduxjs/toolkit";
export const asyncActions = {
  getEventRequest: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  getEventSuccess: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  getEventFailure: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  getEventsRequest: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  getEventsSuccess: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  getEventsFailure: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  addEventRequest: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  addEventSuccess: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  addEventFailure: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  deleteEventRequest: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  deleteEventSuccess: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  deleteEventFailure: (state: any, action: PayloadAction<any>) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
};
