import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DetailsState {
  isDetailsOpen: boolean;
  currentId: number;
  detailsContent: string[];
}

const initialState: DetailsState = {
  isDetailsOpen: false,
  currentId: 59843,
  detailsContent: ['', ''],
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetailsContent: (state, action: PayloadAction<string[]>) => {
      state.detailsContent = action.payload;
    },
    setDetailsIndex: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    },
    setIsDetailsOpen: (state, action: PayloadAction<boolean>) => {
      state.isDetailsOpen = action.payload;
    },
  },
});

export const { setDetailsContent, setDetailsIndex, setIsDetailsOpen } =
  detailsSlice.actions;

export default detailsSlice.reducer;
