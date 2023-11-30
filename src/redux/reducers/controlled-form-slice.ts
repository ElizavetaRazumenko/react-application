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
    isMale: false,
    isFemale: false,
    isAgree: false,
    isDesagree: false,
  },
  isFormFilled: false,
  dataBase64: "",
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
      action: PayloadAction<string | ArrayBuffer | null>,
    ) => {
      state.dataBase64 = action.payload;
    },
  },
});

export const { setForm, setIsFilled, setDataBase64 } =
  ControlledFormSlice.actions;

export default ControlledFormSlice.reducer;
