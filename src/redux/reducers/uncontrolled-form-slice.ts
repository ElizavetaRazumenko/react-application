import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactFormState } from "../models";

const initialState: ReactFormState = {
  name: "",
  age: "",
  email: "",
  password: "",
  country: "",
  isMale: false,
  isFemale: false,
  isAgree: false,
  isDesagree: false,
  image: "",
  isFilled: false,
};

export const UncontrolledFormSlice = createSlice({
  name: "uncontrolled form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<ReactFormState>) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.country = action.payload.country;
      state.isMale = action.payload.isMale;
      state.isFemale = action.payload.isFemale;
      state.isAgree = action.payload.isAgree;
      state.isDesagree = action.payload.isDesagree;
      state.image = action.payload.image;
      state.isFilled = true;
    },
  },
});

export const { setForm } = UncontrolledFormSlice.actions;

export default UncontrolledFormSlice.reducer;
