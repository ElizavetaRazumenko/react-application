import { createSlice } from "@reduxjs/toolkit";
import { CountriesState } from "../models";
import { countryList } from "../../utils/country-list";

const initialState: CountriesState = {
  countries: countryList,
};

export const CountriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export default CountriesSlice.reducer;
