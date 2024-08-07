import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentCountryState } from "../models/currentCountryState";

const initialState: CurrentCountryState = {
  currentCountry: "",
};

// TODO - redundant can be remove and move to dataCountrySlice
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
