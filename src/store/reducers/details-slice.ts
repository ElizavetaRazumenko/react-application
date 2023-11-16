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
    setIsDetailsLoading: (state) => {
      state.isDetailsLoading = true;
    },
    setDetailsContent: (state, action: PayloadAction<string[]>) => {
      state.detailsContent = action.payload;
      state.isDetailsLoading = false;
    },
  },
});

export const { setIsDetailsLoading, setDetailsContent } = detailsSlice.actions;

export default detailsSlice.reducer;
