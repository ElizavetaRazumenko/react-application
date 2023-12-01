import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CountriesState, CustomFormState } from "./models";
import controlledFormReducer from "./reducers/controlled-form-slice";
import uncontrolledFormReducer from "./reducers/uncontrolled-form-slice";
import countriesReducer from "./reducers/countries.slice";

export interface AppStore {
  controlledForm: CustomFormState;
  uncontrolledForm: CustomFormState;
  countries: CountriesState;
}

const rootReducer = combineReducers({
  controlledForm: controlledFormReducer,
  uncontrolledForm: uncontrolledFormReducer,
  countries: countriesReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
