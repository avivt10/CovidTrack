import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dataTypeModel } from "../models/dataTypeModel";

interface dataCountryState {
    dataCountry: dataTypeModel;
}

const initialState: dataCountryState = {
    dataCountry: {
    active: "",
    activePerOneMillion: "",
    cases: "",
    casesPerOneMillion: "",
    continent: "",
    country: "", 
    id: "",
    lat: "",
    long: "",
    critical: "",
    criticalPerOneMillion: "",
    deaths: "",
    deathsPerOneMillion:"",
    oneCasePerPeople: "",
    oneDeathPerPeople: "",
    oneTestPerPeople: "",
    population: "",
    recovered: "",
    recoveredPerOneMillion: "",
    tests: "",
    testsPerOneMillion: "",
    todayCases: "",
    todayDeaths: "",
    todayRecovered: "",
    updated: ""
    },
  };

const dataCountrySlice = createSlice({
    name: "dataCountry",
    initialState: initialState,
  
    // actions to change the state
    reducers: {
      dataCountry: (
        state: dataCountryState,
        action: PayloadAction<dataTypeModel>
      ) => {
        state.dataCountry = action.payload;
      },
    },
  });
  
  export const { dataCountry } = dataCountrySlice.actions;
  export default dataCountrySlice.reducer;
    
  