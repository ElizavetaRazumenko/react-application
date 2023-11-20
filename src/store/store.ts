import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import mainReduser, { MainState } from './reducers/main-slice';
import detailsReducer, { DetailsState } from './reducers/details-slice';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { getAllItemsAPI, getSearchItemsAPI } from '../services/main-serviсe';

export interface AppStore {
  main: MainState;
  details: DetailsState;
}

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

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        getAllItemsAPI.middleware,
        getSearchItemsAPI.middleware
      ),
    preloadedState,
  });
};
