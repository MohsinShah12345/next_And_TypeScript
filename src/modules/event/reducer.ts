import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // type of our action
import type { RootState } from "../store"; // type for our state
import { asyncActions } from "./asyncActions";
import _ from "lodash";
// Define a type for the slice state
interface eventState {
  loading: boolean;
  error: boolean;
  event: Object;
  events: Array<Object>;
}

// Define the initial state using that type
const initialState = {
  event: {},
  events: [],
  loading: false,
  error: false,
} as eventState; // type casting

export const eventSlice = createSlice({
  name: "event",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    ...asyncActions,
  },
});

export const {
  getEventRequest,
  getEventSuccess,
  getEventFailure,
  getEventsRequest,
  getEventsSuccess,
  getEventsFailure,
  addEventRequest,
  addEventSuccess,
  addEventFailure,
  deleteEventRequest,
  deleteEventSuccess,
  deleteEventFailure,
} = eventSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.event;

export default eventSlice.reducer;
