import { configureStore } from "@reduxjs/toolkit";
import currentCountrySlice from "./features/currentCountrySlice";
import dataCountrySlice from "./features/dataCountrySlice";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    currentCountrySlice,
    dataCountrySlice,
  },
});