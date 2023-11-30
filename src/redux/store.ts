import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ReactFormState } from "./models";
import controlledFormReducer from "./reducers/controlled-form-slice";
import uncontrolledFormReducer from "./reducers/uncontrolled-form-slice";

export interface AppStore {
  controlledForm: ReactFormState;
  uncontrolledForm: ReactFormState;
}

const rootReducer = combineReducers({
  controlledForm: controlledFormReducer,
  uncontrolledForm: uncontrolledFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
