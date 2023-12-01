import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CustomFormState, ReactFormState } from "../models";

const initialState: CustomFormState = {
  formData: {
    name: "",
    age: "",
    email: "",
    password: "",
    country: "",
    isMale: true,
    isFemale: false,
    isAgree: false
  },
  isFormFilled: false,
  isFormUpdateNow: false,
  dataBase64: ""
};

export const ControlledFormSlice = createSlice({
  name: "controlled form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<ReactFormState>) => {
      state.formData = action.payload;
    },
    setIsFilled: (state, action: PayloadAction<boolean>) => {
      state.isFormFilled = action.payload;
    },
    setDataBase64: (
      state,
      action: PayloadAction<string | ArrayBuffer | null>
    ) => {
      state.dataBase64 = action.payload;
    },
    setIsContFormUpdate: (state, action: PayloadAction<boolean>) => {
      state.isFormUpdateNow = action.payload;
    }
  }
});

export const { setForm, setIsFilled, setDataBase64, setIsContFormUpdate } =
  ControlledFormSlice.actions;

export default ControlledFormSlice.reducer;
