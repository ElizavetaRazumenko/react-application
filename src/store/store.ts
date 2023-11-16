import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReduser from './reducers/main-slice';
import detailsReducer from './reducers/details-slice';

const rootReducer = combineReducers({
  main: mainReduser,
  details: detailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
