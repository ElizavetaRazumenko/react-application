import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReduser from './reducers/main-slice';
import detailsReducer from './reducers/details-slice';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { getAllItemsAPI, getSearchItemsAPI } from '../services/main-serviсe';

const rootReducer = combineReducers({
  main: mainReduser,
  details: detailsReducer,
  [getAllItemsAPI.reducerPath]: getAllItemsAPI.reducer,
  [getSearchItemsAPI.reducerPath]: getSearchItemsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getAllItemsAPI.middleware,
      getSearchItemsAPI.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
