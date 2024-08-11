import { configureStore } from "@reduxjs/toolkit";
import dataCountrySlice from "./features/dataCountrySlice";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    dataCountrySlice,
  },
});