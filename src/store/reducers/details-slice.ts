import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DetailsState {
  isDetailsOpen: boolean;
  currentId: number;
  isDetailsLoading: boolean;
  detailsContent: string[];
}

const initialState: DetailsState = {
  isDetailsOpen: false,
  currentId: 59843,
  isDetailsLoading: false,
  detailsContent: ['', ''],
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setIsDetailsLoading: (state) => {
      state.isDetailsLoading = true;
    },
    setDetailsContent: (state, action: PayloadAction<string[]>) => {
      state.detailsContent = action.payload;
      state.isDetailsLoading = false;
    },
    setDetailsIndex: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    },
    setIsDetailsOpen: (state, action: PayloadAction<boolean>) => {
      state.isDetailsOpen = action.payload;
    },
  },
});

export const {
  setIsDetailsLoading,
  setDetailsContent,
  setDetailsIndex,
  setIsDetailsOpen,
} = detailsSlice.actions;

export default detailsSlice.reducer;
