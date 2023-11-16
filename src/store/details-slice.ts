import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DetailsState {
  isDetailsLoading: boolean;
  detailsContent: string[];
}

const initialState: DetailsState = {
  isDetailsLoading: false,
  detailsContent: ['', ''],
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    isDetailsLoading: (state) => {
      state.isDetailsLoading = true;
    },
    isDetailsNotLoading: (state) => {
      state.isDetailsLoading = false;
    },
    detailsContent: (state, action: PayloadAction<string[]>) => {
      state.detailsContent = action.payload;
    },
  },
});

export const { isDetailsLoading, isDetailsNotLoading, detailsContent } =
  detailsSlice.actions;

export default detailsSlice.reducer;
