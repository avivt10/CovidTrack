import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentCountryState } from "../models/currentCountryState";

const initialState: CurrentCountryState = {
  currentCountry: "",
};

const currentCountrySlice = createSlice({
  name: "currentCountry",
  initialState: initialState,

  // actions to change the state
  reducers: {
    currentSelectCountry: (
      state: CurrentCountryState,
      action: PayloadAction<string>
    ) => {
      state.currentCountry = action.payload;
    },
  },
});

export const { currentSelectCountry } = currentCountrySlice.actions;
export default currentCountrySlice.reducer;
