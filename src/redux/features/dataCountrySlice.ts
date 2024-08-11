import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDataCountryModel } from "../models/dataCountryModel";
import { IDataCountryStateModel } from "../models/dataCountryState";


const initialState: IDataCountryStateModel = {
  dataCountry: {
      active: "",
      cases: "",
      deaths: "",
      todayCases: "",
      continent: ""  
  },
  currentCountry: ""
};


const dataCountrySlice = createSlice({
  name: "dataCountry",
  initialState,
  reducers: {
      setDataCountry: (
          state: IDataCountryStateModel,
          action: PayloadAction<IDataCountryModel>
      ) => {
          state.dataCountry = action.payload;
      },
      setCurrentCountry: (
          state: IDataCountryStateModel,
          action: PayloadAction<string>
      ) => {
          state.currentCountry = action.payload;
      }
  }
});
  
  export const { setDataCountry,setCurrentCountry } = dataCountrySlice.actions;
  export default dataCountrySlice.reducer;
    
  