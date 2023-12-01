import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CustomFormState, ReactFormState } from "../models";

const initialState: CustomFormState = {
  formData: {
    name: "",
    age: 0,
    email: "",
    password: "",
    country: "",
    isMale: false,
    isFemale: false,
    isAgree: false,
  },
  isFormFilled: false,
  dataBase64: "",
};

export const UncontrolledFormSlice = createSlice({
  name: "uncontrolled form",
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
      action: PayloadAction<string | ArrayBuffer | null>,
    ) => {
      state.dataBase64 = action.payload;
    },
  },
});

export const { setForm, setIsFilled, setDataBase64 } =
  UncontrolledFormSlice.actions;

export default UncontrolledFormSlice.reducer;
