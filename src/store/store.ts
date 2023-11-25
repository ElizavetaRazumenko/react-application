import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import mainReduser, { MainState } from './reducers/main-slice';
import detailsReducer, { DetailsState } from './reducers/details-slice';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { getAllItemsAPI } from '../services/main-serviсe';
import { createWrapper } from 'next-redux-wrapper';

export interface AppStore {
  main: MainState;
  details: DetailsState;
}

const rootReducer = combineReducers({
  main: mainReduser,
  details: detailsReducer,
  [getAllItemsAPI.reducerPath]: getAllItemsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllItemsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      getDefaultMiddleware().concat(getAllItemsAPI.middleware),
    preloadedState,
  });
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      getDefaultMiddleware().concat(getAllItemsAPI.middleware),
  });

export type AppMakeStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppMakeStore>(makeStore, {
  debug: true,
});
