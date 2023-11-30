import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactFormState } from "../models";

const initialState: ReactFormState = {
  name: "",
  age: "",
  email: "",
  pass1: "",
  pass2: "",
  country: "",
  isMale: false,
  isFemale: false,
  isAgree: false,
  isDesagree: false,
  image: "",
};

export const UncontrolledFormSlice = createSlice({
  name: "uncontrolled form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<ReactFormState>) => {
      state = action.payload;
    },
  },
});

export const { setForm } = UncontrolledFormSlice.actions;

export default UncontrolledFormSlice.reducer;
