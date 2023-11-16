import { configureStore } from '@reduxjs/toolkit';
import mainReduser from './main-slice';
import detailsReducer from './details-slice';

export const store = configureStore({
  reducer: {
    main: mainReduser,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
