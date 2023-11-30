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

export const ControlledFormSlice = createSlice({
  name: "controlled form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<ReactFormState>) => {
      state = action.payload;
    },
  },
});

export const { setForm } = ControlledFormSlice.actions;

export default ControlledFormSlice.reducer;
